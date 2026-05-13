"""Notify Bekzod 9 features bajarildi."""
import json
import urllib.request

BOT_TOKEN = "8499879884:AAH8jOj8IQkoDGGTutmL6Hp8SHXghqFsUfU"
CHAT_ID = "914653833"
BASE = f"https://api.telegram.org/bot{BOT_TOKEN}"


def post(method, payload):
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        f"{BASE}/{method}",
        data=data,
        headers={"Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())


text = """✅ 9 ta yangi feature bajarildi (deploy ketmoqda):

📄 5 ta YANGI SAHIFA (har biri 5 tilda):
1) /privacy — Maxfiylik siyosati (GDPR + UZ, 10 bo'lim)
2) /terms — Foydalanish shartlari (12 bo'lim)
3) /press — Brand kit: 4 ta logo download, 3 ta brand color, kompaniya faktlari
4) /changelog — v1.0/1.1/1.2/1.3 release notelar
5) /roadmap — Q2-Q4 2026 + Q1 2027 + 2027+ (17 ta yo'l xaritasi item, 4 status badge)

🆕 MAIN PAGE:
6) ROI Calculator — 2 slider (aylanma + xodim) → real-time yillik tejov hisobi
7) PricingTiers — 3 tier (Starter $0 / Pro $200 / Enterprise custom), Pro tier highlighted
8) Cookie Consent banner (chap pastda, GDPR + UZ compliant, 5 til)

🔧 API:
9) /api/og — Dynamic OG image generator (Edge runtime, title/subtitle/tag query params)
10) /api/contact — Rate limit 5/soat per IP + 2 ta honeypot field + max-length Zod validation

🌐 i18n FIX (sen ko'rsatgan EN xato):
✓ ProcessSteps "BIZNING JARAYON" → "OUR PROCESS" + 5 tilda
✓ LiveCodeDemo "AI biznesni quradi" → 5 tilda
✓ Team rolelarii UZ: Developer → Dasturchi, Specialist → mutaxassis

⏭ KEYINGI WAVE (deploy tugagach):
- Trustpilot / Google Reviews widget (6 raqamli)
- Speed optim Lighthouse 95+ (image WebP, lazy)
- A/B test infrastructure (cookie-based)
- Email drip (Resend API — sen domen olganda yoqamiz)

URL: https://tezcode-landing-production.up.railway.app (2 min'da yangi)"""


r = post(
    "sendMessage",
    {
        "chat_id": CHAT_ID,
        "text": text,
        "reply_to_message_id": 4270,
        "allow_sending_without_reply": True,
    },
)
print("Sent:", r.get("ok"), "msg_id:", r.get("result", {}).get("message_id"))
