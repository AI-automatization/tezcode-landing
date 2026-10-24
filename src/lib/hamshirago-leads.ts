import { randomUUID } from "node:crypto";
import type { ContactData } from "./contact";

const LEADS_URL = "https://api.hamshirago.uz/leads";
const LEADS_KEY = process.env.HAMSHIRAGO_LEADS_KEY;

// Their API takes +998 and 9 digits or international E.164; anything else is not sent.
function toE164(phone?: string): string | undefined {
  if (!phone) return undefined;
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 9) return `+998${digits}`;
  if (digits.length === 12 && digits.startsWith("998")) return `+${digits}`;
  if (phone.trim().startsWith("+") && digits.length >= 8 && digits.length <= 15) return `+${digits}`;
  return undefined;
}

// Mirrors a delivered lead into the HamshiraGo CRM. Called only after the Telegram
// notification succeeded; never throws, so their outage cannot fail our form.
export async function forwardToHamshirago(data: ContactData): Promise<void> {
  if (!LEADS_KEY) return;
  const phone = toE164(data.phone);
  if (!phone) return;

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

  const res = await fetch(LEADS_URL, {
    method: "POST",
    signal: AbortSignal.timeout(5000),
    headers: { "Content-Type": "application/json", "x-leads-key": LEADS_KEY },
    body: JSON.stringify({
      name: data.name,
      phone,
      source: "tezcode",
      message: message || undefined,
      externalId: randomUUID(),
      landingPath: data.sourcePage,
      referrer: a?.referrerHost,
      utm,
    }),
  });
  if (!res.ok) console.error("[HamshiraGo leads] Rejected:", res.status);
}
