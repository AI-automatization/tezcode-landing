const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "-1002640882371"; // Tezcode group

interface TelegramMessage {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  locale: string;
}

const SUBJECT_LABELS: Record<string, string> = {
  demo: "Demo soʻrash",
  partnership: "Hamkorlik",
  investor: "Investor",
  career: "Vakansiya",
  other: "Boshqa",
};

export async function sendTelegramNotification(data: TelegramMessage): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN) {
    console.warn("[Telegram] TELEGRAM_BOT_TOKEN not set — skipping notification");
    return false;
  }

  const subjectLabel = data.subject ? SUBJECT_LABELS[data.subject] ?? data.subject : "—";

  const text = [
    `🔔 *Yangi murojaat tezcode.dev'dan*`,
    ``,
    `👤 *Ism:* ${data.name}`,
    `📧 *Email:* ${data.email}`,
    `📞 *Telefon:* ${data.phone || "—"}`,
    `🌐 *Til:* ${data.locale.toUpperCase()}`,
    `📋 *Mavzu:* ${subjectLabel}`,
    ``,
    `💬 *Xabar:*`,
    data.message,
    ``,
    `📍 tezcode.dev · ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`,
  ].join("\n");

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!res.ok) {
      const error = await res.json();
      console.error("[Telegram] API error:", error);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[Telegram] Network error:", err);
    return false;
  }
}
