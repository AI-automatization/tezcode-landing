import { randomUUID } from "node:crypto";
import type { ContactData } from "./contact";
import { sendTelegramText } from "./telegram";

const LEADS_URL = "https://api.hamshirago.uz/leads";

const MAX_ATTEMPTS = 3;
const BACKOFF_MS = [400, 1200];
const REQUEST_TIMEOUT_MS = 5000;

export type ForwardResult =
  | { ok: true }
  | { ok: false; skipped: "no-key" | "no-phone" }
  | { ok: false; reason: string };

export interface ForwardDeps {
  fetchFn: typeof fetch;
  sleep: (ms: number) => Promise<void>;
  notify: (text: string) => Promise<boolean>;
  logError: (...args: unknown[]) => void;
  logWarn: (...args: unknown[]) => void;
  key: string | undefined;
}

let missingKeyWarned = false;

function defaultDeps(): ForwardDeps {
  return {
    fetchFn: fetch,
    sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    notify: sendTelegramText,
    logError: console.error,
    logWarn: console.warn,
    key: process.env.HAMSHIRAGO_LEADS_KEY,
  };
}

// Their API takes +998 and 9 digits or international E.164; anything else is not sent.
function toE164(phone?: string): string | undefined {
  if (!phone) return undefined;
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 9) return `+998${digits}`;
  if (digits.length === 12 && digits.startsWith("998")) return `+${digits}`;
  if (phone.trim().startsWith("+") && digits.length >= 8 && digits.length <= 15) return `+${digits}`;
  return undefined;
}

function isRetryable(status: number): boolean {
  return status >= 500 || status === 429 || status === 408;
}

// Mirrors a delivered lead into the HamshiraGo CRM. Called only after the Telegram
// notification succeeded; never throws. Up to 3 attempts; if all fail, the failure is
// logged (status/reason only, no personal data) and the Telegram group is told to enter
// the lead by hand, so a failed forward is never silent.
export async function forwardToHamshirago(
  data: ContactData,
  deps: ForwardDeps = defaultDeps(),
): Promise<ForwardResult> {
  if (!deps.key) {
    if (!missingKeyWarned) {
      missingKeyWarned = true;
      deps.logWarn("[HamshiraGo leads] HAMSHIRAGO_LEADS_KEY is not set: leads are NOT forwarded to the panel");
    }
    return { ok: false, skipped: "no-key" };
  }
  const phone = toE164(data.phone);
  if (!phone) {
    deps.logWarn(
      `[HamshiraGo leads] Not forwarded: ${data.phone ? "phone format not accepted by panel" : "no phone in form"}`,
    );
    return { ok: false, skipped: "no-phone" };
  }

  const extra = [
    data.email && `Email: ${data.email}`,
    data.telegramUsername && `Telegram: ${data.telegramUsername}`,
    data.service && `Xizmat: ${data.service}`,
    data.country && `Davlat: ${data.country}`,
  ].filter(Boolean);
  const message = [data.message, ...extra].filter(Boolean).join("\n").slice(0, 2000);
  const a = data.attribution;
  const utm = a && (a.source || a.medium || a.campaign)
    ? { source: a.source, medium: a.medium, campaign: a.campaign }
    : undefined;

  // One externalId for all attempts, so a retry after a lost response cannot double-insert.
  const body = JSON.stringify({
    name: data.name,
    phone,
    source: "tezcode",
    message: message || undefined,
    externalId: randomUUID(),
    landingPath: data.sourcePage,
    referrer: a?.referrerHost,
    utm,
  });

  let reason = "unknown";
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    let retryable = true;
    try {
      const res = await deps.fetchFn(LEADS_URL, {
        method: "POST",
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        headers: { "Content-Type": "application/json", "x-leads-key": deps.key },
        body,
      });
      if (res.ok) return { ok: true };
      reason = `HTTP ${res.status}`;
      retryable = isRetryable(res.status);
    } catch (err) {
      reason = `network error (${err instanceof Error ? err.name : "unknown"})`;
    }
    if (!retryable || attempt === MAX_ATTEMPTS) break;
    await deps.sleep(BACKOFF_MS[attempt - 1] ?? 1200);
  }

  deps.logError(`[HamshiraGo leads] Forward FAILED after retries: ${reason}`);
  const alertText =
    `⚠️ panelga tushmadi — qo'lda kiriting\n` +
    `Yuqoridagi murojaat (${data.name}, ${data.phone}) lead paneliga yuborilmadi. Sabab: ${reason}`;
  try {
    const sent = await deps.notify(alertText);
    if (!sent) deps.logError("[HamshiraGo leads] Failure alert to Telegram was NOT delivered");
  } catch {
    deps.logError("[HamshiraGo leads] Failure alert to Telegram threw");
  }
  return { ok: false, reason };
}
