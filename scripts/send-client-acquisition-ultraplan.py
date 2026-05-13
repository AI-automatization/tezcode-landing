"""ULTRATHINK — Tezcode Teams + Custom mijoz topish strategiyasi (3 part)."""
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


PART_A = """🎯 MIJOZ TOPISH ULTRAPLAN — TezCode Teams + Custom

Bekzod, sen aytdi: 14 dasturchi × $200 Claude = $2,800/oy Anthropic'ga ketadi.
Tezcode ham, sen ham, men ham foyda — joriy lever bu.

Avval BIR HAQIQAT — keyin 4 kanal.

═══════════════════
🧠 HAQIQAT: Kim mijoz?
═══════════════════

🅰 TezCode Teams (Developer-as-a-service)
   Mijoz: foreign startup, agency, korxona
   • Foreign tech startups (UAE/UK/DE/US) — $30/h vs $80/h US
   • Local IT agencies — burst capacity
   • Crypto/Fintech budget-cheklangan
   • AI-first startups (Claude bilan ishlay oluvchi devs)
   Lead Value: 1 dev × 80h × $35 = $2,800/oy revenue
   Margin: 30-50% Tezcode'ga ($1K/oy/dev pure profit)
   Time to close: 2-4 hafta (interview, technical test, contract)

🅱 TezCode Custom (Bespoke dev)
   Mijoz: O'zbekiston biznes egalari + korxonalar
   • Korxonalar (bank, sanoat, do'kon tarmoq) — custom ERP/CRM
   • Davlat tender (IT vazirligi, hokimiyat)
   • Hududiy biznes (Samarqand/Buxoro) — Toshkent devs yo'q
   • Investorlar — startup MVP
   Lead Value: $5K-50K/project (3-6 oy)
   Margin: 40-60%
   Time to close: 4-8 hafta (scope, proposal, contract)

═══════════════════
📡 4 TA MIJOZ TOPISH KANALI
═══════════════════

1️⃣ ONLAYN OUTBOUND (60% effort)
   • LinkedIn outreach (Sales Navigator $80/oy)
   • Upwork + Fiverr Pro Tezcode AGENCY account
   • Toptal / Arc.dev vetting
   • Cold email AI'da (Apollo.io 1K CTO list)
   • Product Hunt launch
   • Reddit r/forhire + Hacker News Show HN

2️⃣ OFFLINE NETWORK (15% effort)
   • IT Park Uzbekistan residency
   • Web Summit / TechCrunch / Dubai Future
   • TashStartup, Plug and Play UZ judge/mentor
   • Davlat tender (IT vazirligi)

3️⃣ PRODUCT-LED GROWTH (20% effort — ENG MUHIM)
   • Tezcode Open Source (5-10 GitHub repo)
   • Tezcode Blog SEO (50 post/oy)
   • Tezcode YouTube (Bekzod live coding O'zbek)
   • Free AI tools funnel (10K user → 100 upgrade → 10 enterprise)

4️⃣ AI-POWERED SALES (5% effort, HIGH leverage)
   • AI Office Sales Agent — Apollo + LinkedIn + cold email auto
   • Free MVP roadmap generator (lead magnet)
   • Tezcode AI demo'lar (1 hafta bepul mockup)
   • Referral bot (existing mijoz → +30% chegirma)"""


PART_B = """🚀 7 TA KONKRET INITIATIVE (24-48 soat ichida live)

1️⃣ ALOHIDA 2 LANDING — high-converting
   /for-businesses (Custom — O'zbek biznes egalari)
      "Mahalliy biznesingizga custom dastur yozamiz"
      ROI calc, case studies, Telegram CTA
   /hire-developers (Teams — foreign clients)
      "Hire Tashkent senior devs from $30/h"
      Apollo-style table, vetting process, contracts
   Vaqt: 1 kun

2️⃣ LEAD MAGNET TOOLS (free → email capture)
   /tools/free-mvp-roadmap
      Mijoz: "Mening startup g'oyam" → AI MVP rejasini chiqaradi (PDF)
      Email kerak → CRM (Notion DB)
   /tools/free-code-review
      GitHub link → AI Office'imiz har xil tahlil
      Tezcode brand demo + lead
   Vaqt: 1-2 kun

3️⃣ AI SALES AGENT — sotuv avtopilot
   AI Office'ga yangi bo'lim "Sales"
   Apollo.io lead enrichment + LinkedIn cold message + email follow-up
   Bekzod'ga her kuni hot leads list
   Showcase: "AI Office o'zi mijoz topadi" — sotuv argument
   Vaqt: 3-5 kun

4️⃣ CASE STUDIES PAGES — SEO killer
   /case-studies/dilfuza-grocery
   /case-studies/aziz-electronics
   /case-studies/munira-clinic
   Har biri 1500 so'z, before/after raqamlar, SEO + trust
   Google rank: "RAOS POS Uzbekistan" → 1-page
   Vaqt: 1 kun (AI bilan auto-write)

5️⃣ TEZCODE BLOG ENGINE — long-term SEO
   /blog/* — 10 ta SEO post boshlanish
   "Tashkent developer hire qanday", "POS tanlash", "AI agent qanday"
   Google traffic 3-6 oy keyin 5K-10K/oy
   Har post → 1 LinkedIn + 5 Twitter + 3 IG slide auto-multiply
   Vaqt: 1 hafta (10 ta post boshlanish)

6️⃣ OUTREACH TEMPLATES + AUTOMATION
   Tezcode brand pitch UZ/RU/EN (LinkedIn, email)
   Apollo.io + Resend.com auto-send (1K cold email/oy)
   GitHub: tezcode-outreach-kit (public, marketing magnet)
   Vaqt: 2 kun

7️⃣ DIRECT INBOUND CTA — Calendly + 24h promise
   "Free 30-min consultation in 24h"
   Calendly embed (Tezcode brand)
   Promise: "MVP roadmap bepul, 1 haftada"
   Conversion magnet
   Vaqt: 4 soat

═══════════════════
📊 EXPECTED RESULT (3 oyda)
═══════════════════

🅰 Teams: 5-15 yangi dev hire ($35K-100K/oy revenue)
🅱 Custom: 3-8 yangi project ($15K-40K average)
🅰+🅱: $50K-140K/oy
14 dev → 25-35 dev → har biri $200 Claude = $5K-7K/oy Anthropic

🔁 ANTHROPIC LOOP:
Tezcode dev'lar ko'p Claude ishlatadi → marketing case Anthropic uchun:
"O'rta Osiyo AI software factory, 30+ dev, Claude-powered"
Bu menga ham (gibrid Anthropic/Tezcode growth)."""


PART_C = """🛠 HOZIR NIMANI BAJARAMAN?

Tezcode landing v2 — bugun-ertaga implement qila olaman:

✅ DARHOL (24 soat):
1) /for-businesses landing (Custom — UZ biznes)
2) /hire-developers landing (Teams — foreign)
3) /tools/free-mvp-roadmap (lead magnet)
4) /case-studies/* 3 ta (Dilfuza/Aziz/Munira)
5) Calendly embed (Tezcode brand)
6) Footer outbound pitch templates link

✅ KEYINGI HAFTA:
7) /blog system + 10 ta SEO post (AI bilan auto)
8) Apollo.io integration AI Office'ga
9) Outreach kit public GitHub (marketing)
10) Free /tools/code-review

✅ KEYINGI 2 HAFTA:
11) AI Office Sales Agent bo'lim
12) Multi-channel content auto-multiplier
13) Tezcode Twitter/X autopilot (haftalik thread)

❓ Sen tasdiq ber, men boshlayman:

🟢 "1-5 hammasi DARHOL boshla" → 6-8 soat ichida 5 yangi sahifa live
🟢 "Faqat /for-businesses + /hire-developers" → 2 soat
🟢 "Lead magnet tools dastlab" → 4 soat
🟢 "AI Sales Agent" → 3-5 kun

🔑 ENG MUHIM:
Tezcode contact form Telegram'ga → har lead Bekzod'ga 1 daq'da yetadi.
Hozir landingda har xil CTA "demo / hire / book call" alohida bo'lib turish kerak.

❓ Qaysi initiative'ni boshlayman?"""


parts = [PART_A, PART_B, PART_C]
ids = []
reply_to = 4277
for i, part in enumerate(parts):
    payload = {
        "chat_id": CHAT_ID,
        "text": part,
    }
    if i == 0:
        payload["reply_to_message_id"] = reply_to
        payload["allow_sending_without_reply"] = True
    r = post("sendMessage", payload)
    print(f"Part {chr(65 + i)}:", r.get("ok"), "msg_id:", r.get("result", {}).get("message_id"))
    ids.append(r.get("result", {}).get("message_id"))
