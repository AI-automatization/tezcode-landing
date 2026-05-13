"""Send Bekzod what he's overlooking — strategic blind spots."""
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


PART_1 = """📊 1) ANALYTICS — Kim qayerdan kirayotgani

Hozir push qildim (deploy ketmoqda):

🟢 3 ta service yoqdim (hammasi BEPUL, env-driven):

A) Google Analytics 4
   • Traffic source (Google/Yandex/Telegram/IG)
   • Qaysi search keyword orqali kelgan
   • Davlat, shahar, demographic
   • Sahifa ichida nima qilgan

B) Microsoft Clarity (KO'TARILGAN VALUE)
   • Heatmap — sahifada qayerga ko'p bosadi
   • Session recording — VIDEO foydalanuvchi nima qildi
   • Dead clicks, rage clicks, scroll depth
   • $0/oy forever

C) PostHog
   • Funnel (form ko'rish → submit)
   • A/B test
   • Feature flag
   • 1M event/oy bepul

🟢 LiveVisitorBadge qo'shildi (chap pastda)
   "3 online · 47 bugun" — social proof
   Real PostHog data'ga keyin almashtiramiz

🔧 Bekzod, sen quyidagilarni yarataman:
1. GA4: analytics.google.com → property yarating
2. Clarity: clarity.microsoft.com → register
3. PostHog: posthog.com → free account

Tokenlar berasan, men Railway env'ga qo'shaman.
2 daqiqa ish.

═══════════════════════════════"""

PART_2 = """🚨 2) KO'ZDAN QOCHGAN STRATEGIC

Bekzod, mendan ko'ra sen bularni o'ylab ko'rmaganlikda gumon qilaman:

⚠️ HUQUQIY / LEGAL (KRITIK)

1️⃣ Privacy Policy /privacy
   5 til + GDPR + O'zbekiston "Shaxsiy ma'lumotlar to'g'risida"gi qonun
   Form email yig'amiz → bu legal majburiy

2️⃣ Terms of Service /terms
   Investorlar va korporativ mijozlar ko'radi

3️⃣ Cookie Consent banner
   GDPR uchun ZARUR (analytics cookies)
   Tezcode global olib chiqmoqchi bo'lsa bugundan

4️⃣ Imprint / "Biz haqimizda"
   Kompaniya rekvizit (STIR, manzil) — legal trust

🛡️ TRUST / SOCIAL PROOF

5️⃣ reCAPTCHA / honeypot form spam'dan
   Hozir bot 10K spam form yuborishi mumkin

6️⃣ Trustpilot / Google Reviews widget
   Real reviews — investor + enterprise ishonchi

7️⃣ Press Kit /press
   Tezcode logo, founder photo, brand assets
   Jurnalist + blog'er download qiladi

8️⃣ SSL/Security badges (HTTPS, dataguard)
   "✓ 256-bit encryption" — enterprise mijoz so'raydi

💰 CONVERSION / MONEY

9️⃣ Pricing visibility
   Hozir narx yo'q — mijoz "qancha turadi?" deydi
   Ko'pi qo'rqib ketadi, biz lose qilamiz
   Hatto "$50/oy boshlanadi" yozish kerak

🔟 Multi-currency
   UZS / USD / RUB — har mijoz o'z so'mida ko'rsin

1️⃣1️⃣ Email marketing setup
   Form submit → Mailchimp/Resend → 7 kunlik drip
   "1-kun: Salom" → "3-kun: Demo video" → "7-kun: 14% chegirma"
   → 3x conversion

1️⃣2️⃣ Lead scoring
   Form ma'lumotlari → hot/warm/cold avtomat
   Hot leads → Bekzod darhol ko'radi

🎯 GROWTH / VIRAL

1️⃣3️⃣ Referral program
   "Mijozni Tezcode'ga taklif qil — 30 kun bepul"
   Har mijoz 1-2 yangi mijoz olib keladi

1️⃣4️⃣ Public roadmap /roadmap (Canny.io)
   Foydalanuvchilar feature so'rashadi + ovoz beradi
   Community engagement + transparency

1️⃣5️⃣ Changelog /changelog
   "Yangiliklar — har hafta yangilanish"
   Trust + customer retention

🔧 TEXNIK (Senior eng level)

1️⃣6️⃣ Sentry error tracking
   Production'da xato chiqsa Telegram'ga darhol

1️⃣7️⃣ Dynamic OG image /api/og
   Har sahifa uchun rich preview
   Telegram'da link yuborganda Tezcode brand

1️⃣8️⃣ Speed optimization (Lighthouse 95+)
   Hozir ehtimol 75-85 da
   Image lazy + WebP + critical CSS

1️⃣9️⃣ A/B test infrastructure
   Hero headline 3 variant → conversion solishtirish
   "Bepul demo" vs "Hoziroq boshlang" vs "AI'ni sina"

2️⃣0️⃣ Service Worker / Offline mode
   Internet uzilsa ham sayt ishlasin

═══════════════════════════════

💡 ENG MUHIM 3 ta:

1. Privacy Policy + Cookie banner (legal — 2-3 soat)
2. Pricing visibility (revenue impact — 4 soat)
3. Email marketing drip (3x conversion — 1 kun)

Qaysi 5 tasini hozir boshlaymiz?

Analytics deploy bo'lmoqda — 2 daq ichida live. Sen 3 ta servicega register qilib token jonat — qo'shaman."""


r1 = post(
    "sendMessage",
    {
        "chat_id": CHAT_ID,
        "text": PART_1,
        "reply_to_message_id": 4267,
        "allow_sending_without_reply": True,
    },
)
print("Part 1:", r1.get("ok"), "msg_id:", r1.get("result", {}).get("message_id"))

r2 = post(
    "sendMessage",
    {
        "chat_id": CHAT_ID,
        "text": PART_2,
    },
)
print("Part 2:", r2.get("ok"), "msg_id:", r2.get("result", {}).get("message_id"))
