"""Send Bekzod feature ULTRAPLAN — split into 2 messages."""
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


PART_1 = """🚀 TEZCODE LANDING — FEATURE ULTRAPLAN (1/2)

Hozir landing'da bor:
✓ 5 til + geo auto-detect (just deployed)
✓ Hero parallax + magnetic CTA + CountUp
✓ LiveCodeDemo + Marquee
✓ 6 yo'nalish + 8 mahsulot + 4 qadam
✓ 14 jamoa + 3 mijoz + Form → bot
✓ JSON-LD SEO + 30+ keywords (Google+Yandex prep)

═════ LEVEL 1 — DARHOL (1-3 soat) ═════

1️⃣ ROI CALCULATOR — "Daromadingni AYDA"
   Aylanma + xodim soni → "RAOS bilan 800K tejaysiz"
   → Demo conversion 3x

2️⃣ LIVE COUNTER (Hero pastida)
   "47 ta yangi mijoz bu hafta"
   "127 demo so'rov bu oy" — animated

3️⃣ INTERACTIVE PRODUCT PREVIEW
   RAOS dashboard mockup — clickable
   AI Office chat — typing demo

4️⃣ EXIT-INTENT POPUP
   "Bepul 14 kun bonus" — email capture

5️⃣ STICKY ANNOUNCEMENT BAR
   "🎉 14 kun bepul — bugun boshlang"

═════ LEVEL 2 — 1-2 KUN ═════

6️⃣ AI CHATBOT (sayt ichida)
   "Sizga qaysi mahsulot kerak?" — AI Office orqali
   O'z product showcase

7️⃣ CASE STUDIES PAGE /case-studies
   Dilfuza, Aziz, Munira full story
   Before/after raqamlar — SEO backlink magnet

8️⃣ PRICING PAGE /pricing
   3 tier: Starter $50 / Pro $200 / Enterprise custom
   Feature comparison + ROI

9️⃣ BLOG /blog (MDX) — SEO uchun MUHIM
   10 SEO maqola: "POS qanday tanlash", "AI agentlar"
   Google'da rank kelishi uchun jon-jon

🔟 CAREER PAGE /careers
   Vakansiyalar + apply form → Telegram"""

PART_2 = """🚀 FEATURE ULTRAPLAN (2/2)

═════ LEVEL 3 — 3-5 KUN ═════

1️⃣1️⃣ DEMO BOOKING — Calendly alternative
   Sana/vaqt tanlash + Google Calendar sync

1️⃣2️⃣ PARTNER PORTAL /partners
   Reseller dasturi + komissiya

1️⃣3️⃣ INVESTOR DECK /investors
   Pitch deck + financial metrics public

1️⃣4️⃣ STATUS PAGE /status
   "RAOS: ✓ 99.97%" — investor + enterprise trust

1️⃣5️⃣ COMPARE PAGE /compare/tezcode-vs-X
   Tezcode vs SAP, vs Bitrix, vs locals
   SEO killer — raqib brand query'sida chiqamiz

═════ LEVEL 4 — 1 HAFTA+ ═════

1️⃣6️⃣ PWA — iOS/Android install
1️⃣7️⃣ A/B TESTING dashboard
1️⃣8️⃣ DARK/LIGHT MODE toggle
1️⃣9️⃣ VIDEO BACKGROUND Hero
2️⃣0️⃣ ANIMATED WORKFLOW DIAGRAM

═════ LEVEL 5 — STRATEGIC ═════

2️⃣1️⃣ AFFILIATE PROGRAM (referral)
2️⃣2️⃣ COMMUNITY FORUM /community
2️⃣3️⃣ ACADEMY — bepul kurslar (lead magnet)
2️⃣4️⃣ AI PRODUCT RECOMMENDER (5 savol → mahsulot)
2️⃣5️⃣ MULTI-TENANT ADMIN — super-app

═════════════════════════════
💎 MENING TAVSIYAM
═════════════════════════════

⚡ DARHOL (bugun, 4 soat):
✓ ROI Calculator
✓ Live counter (Hero pastida)
✓ Exit-intent popup
→ Demo conversion 3x

⚡ KEYINGI HAFTA:
✓ Pricing page (3 tier)
✓ Case studies (3 ta to'liq)
✓ Blog (5 SEO maqola)
→ Google rank ↑↑

⚡ KEYINGI OY:
✓ AI Chatbot
✓ Demo booking
✓ Compare pages
→ Lead capture industrial

❓ Qaysi 3-4 ta'sini hozir boshlaymiz?

Geo locale auto-detect endi aktiv:
UZ→uz, RU/KZ/KG/TJ→ru, UA→uk, Arab→ar, EU→en"""


r1 = post(
    "sendMessage",
    {
        "chat_id": CHAT_ID,
        "text": PART_1,
        "reply_to_message_id": 4263,
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
