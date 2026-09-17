import type { ContactData } from "./contact";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "-1002640882371"; // Tezcode group

const SUBJECT_LABELS: Record<string, string> = {
  demo: "Demo soʻrash",
  partnership: "Hamkorlik",
  investor: "Investor",
  career: "Vakansiya",
  other: "Boshqa",
};

export async function sendTelegramNotification(data: ContactData & { locale: string }): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN) {
    console.warn("[Telegram] TELEGRAM_BOT_TOKEN not set — skipping notification");
    return false;
  }

  const subjectLabel = data.subject ? SUBJECT_LABELS[data.subject] ?? data.subject : "—";

  const text = [
    `🔔 Yangi murojaat tezcode.dev'dan`,
    ``,
    `👤 Ism: ${data.name}`,
    `📞 Telefon: ${data.phone || "—"}`,
    `📧 Email: ${data.email || "—"}`,
    `🌐 Til: ${data.locale.toUpperCase()}`,
    `📋 Mavzu: ${subjectLabel}`,
    `Davlat: ${data.country || "—"}`,
    `Xizmat: ${data.service || "—"}`,
    `Sahifa: ${data.sourcePage || "—"}`,
    `Manba: ${data.attribution?.source || data.attribution?.referrerHost || "—"}`,
    `Kanal: ${data.attribution?.medium || "—"}`,
    `Kampaniya: ${data.attribution?.campaign || "—"}`,
    ``,
    `💬 Xabar:`,
    data.message || "—",
    ``,
    `📍 tezcode.dev · ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`,
  ].join("\n");

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        signal: AbortSignal.timeout(10000),
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    if (!res.ok) {
      console.error("[Telegram] Delivery rejected:", res.status);
      return false;
    }

    const result: unknown = await res.json();
    return Boolean(result && typeof result === "object" && "ok" in result && result.ok === true);
  } catch {
    console.error("[Telegram] Delivery unavailable");
    return false;
  }
}
