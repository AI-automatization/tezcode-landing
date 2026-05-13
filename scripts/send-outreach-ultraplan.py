"""ULTRATHINK — Global SMB outreach strategiyasi (etik + realistik + scalable)."""
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


PART_1 = """🧠 ULTRATHINK — Global outreach

Bekzod, sening rejang strategic to'g'ri lekin texnik nuancelar bor. Senior strategist'dek aytaman.

⚠️ AVVAL — REAL HAQIQAT (KRITIKAL):

❌ Gmail'dan mass email = REJECTED yo'l
   • 1 Gmail account = 500 email/kun limit
   • 50 ta gmail account ochish = Google avtomat ban (siz tana qarab account'lar bog'lanishini ko'radi)
   • Reputation kill: Gmail spam filter Tezcode'ni "spammer" deb belgilaydi → kelajakda hech qachon legit email yuborib bo'lmaydi

❌ 10,000 mass-blast = REJECTED
   • Hozir Tezcode.dev domen yangi, reputation 0
   • Bir kun ichida 10K email = darhol spam folder (deliverability 5%)
   • GDPR (EU) buzilish = $20M jarima riski

✅ PROFESSIONAL YO'L (realistik 50 mijoz/2 oy):

🔧 Domain warmup:
   tezcode.dev SPF + DKIM + DMARC sozlash
   Cloudflare DNS (5 daq)
   Email warmup 2 hafta (kun 10→50→200 gradient)

🔧 Tools (industry standard $110/oy):
   Apollo.io ($50/oy) — 1000 verified lead/oy, GDPR-compliant
   Instantly.ai ($60/oy) — personalization + warmup + delivery + reply tracking

🔧 Volume realistik:
   100-200 personalized email/kun (3000-6000/oy)
   5-7 cadence steps (30 kun davomida)
   Reply rate 5-8% = 150-400 ta javob
   Interested 1-2% = 50-100 meeting
   Conversion 5-10% = 5-15 deal
   2-3 oyda 50 mijoz REAL

📊 KO'PROQ VS SEKIN MASALA:
   ❌ 10K bir kunda = 0 deliverability, reputation kill, ban
   ✅ 300/kun × 60 kun = 18K, ammo har biri qabul qilinadi"""


PART_2 = """🎯 KONKRET 5 FAZA REJA (60 KUN)

📍 FAZA 1 — Infrastructure (1-3 kun)
   • Cloudflare: tezcode.dev DNS + SPF + DKIM + DMARC
   • Apollo.io trial (free 50 lead, paid $50/oy)
   • Instantly.ai (free 14 kun trial)
   • Notion CRM database setup
   • AI Office'ga "Sales Agent" bo'limi qo'shish

📍 FAZA 2 — ICP + Lead list (4-7 kun)
   ICP (Ideal Customer Profile) target:
   🌍 Geo: UAE/Saudi/Qatar (high spend) + UK/DE (mature SaaS) + Eastern EU (cost-sensitive)
   🏢 Industry: E-commerce ($5K-50K range), Marketing agencies, Healthcare clinics, EdTech
   👤 Title: CEO, CTO, Head of Eng, COO (SMB decision makers)
   📏 Size: 10-200 xodim (SMB sweet spot)
   💰 Funding: Pre-seed → Series B (budget bor)
   🛠 Stack: React/Node, Python, AWS (TezCode Teams fit)

   Apollo export → 5,000-10,000 verified lead

📍 FAZA 3 — Personalization (8-14 kun)
   Background agent #1: LinkedIn enrichment (recent posts, news)
   Background agent #2: ICP scoring A/B/C tier (Claude rating)
   Background agent #3: Personalized email writer
   Har email: company-specific opener + custom value prop + soft CTA
   Template:
   "Salom {name}, {recent specific event}. Tezcode (Tashkent AI software factory, 14 dev) {specific solution to your problem}. 15-min worth?"

📍 FAZA 4 — Campaign launch (15-44 kun)
   Instantly.ai: 7-step cadence
   D0: Initial email
   D2: Soft bump
   D5: Value email (mini-case study)
   D8: Hard question
   D14: Social proof (logos, testimonials)
   D21: Last attempt
   D30: Break-up email
   Daily volume: 300-500 email
   Reply auto-pause cadence

📍 FAZA 5 — Close (45-60 kun)
   • Meeting bookings (Calendly + Tezcode brand)
   • Demos (Bekzod CEO + Custom team)
   • Proposal templates
   • Contract automation
   • Daily Telegram report 9:00 AM"""


PART_3 = """🤖 BACKGROUND AGENT ARCHITECTURE (8 ta agent)

Sening 4 ta talab → 8 ta agent automation:

1️⃣ APOLLO SCRAPER AGENT
   Apollo.io API → 1K lead/hafta
   ICP filter avtomat
   Export → Notion CRM

2️⃣ LINKEDIN ENRICHMENT AGENT
   Har lead'ning LinkedIn profile + post'lar
   Recent activity → personalization signals

3️⃣ ICP SCORER AGENT (Claude)
   A tier (95%+ fit, hot)
   B tier (70-95%, warm)
   C tier (<70%, skip)
   Output: prioritized list

4️⃣ PERSONALIZED WRITER AGENT (Claude Opus)
   Har lead'ga unique email (open + body + CTA)
   Recent news + tech stack + role-specific pain
   100 email/kun yozadi

5️⃣ CADENCE MANAGER AGENT
   Instantly.ai API integration
   D0/D2/D5/D8/D14/D21/D30 schedule
   Reply detection → auto-pause

6️⃣ REPLY CATEGORIZER AGENT (Claude Haiku — fast)
   Inbox sync har soatda
   Interested / Need more info / Not now / Unsubscribe
   Notion update + Telegram alert hot leads

7️⃣ DAILY REPORT AGENT
   Har ertalab 9:00 Tashkent vaqti
   Telegram: "Bugun 47 email yuborildi, 5 reply, 2 hot, 1 meeting kerak"
   Calendar embed

8️⃣ MEETING BOOKER AGENT
   Hot lead'ga avtomat Calendly link yuborish
   Pre-meeting prep document (Bekzod uchun)
   Post-meeting follow-up draft

📊 EXPECTED NATIJA (60 kun):

✅ 5K-10K personalized email
✅ 300-500 reply
✅ 50-100 meeting
✅ 10-30 active demo
✅ 5-15 paying customer (50K mijoz hadafi → 2 oy davomida tahminan 10-15, 6 oyda 50)

💰 COST:
   Apollo $50/oy
   Instantly $60/oy
   Claude API $100-200/oy (har email yozish, har reply tahlil)
   Domain warmup 0$
   TOTAL: $210-310/oy infrastructure

💵 REVENUE potential:
   10 ta mijoz × $3-10K (one-time + recurring) = $30-100K
   ROI: 100x

❓ BEKZOD QAROR (men boshlay olaman):

🟢 OPTSIYA A — Hozir start (3 agent paralel boshlanadi):
   1) Cloudflare DNS setup (men bilamen)
   2) Apollo.io trial register (sen 5 daq)
   3) Email template + ICP definition

🟢 OPTSIYA B — Faqat list yig'ish (free phase):
   1) Apollo trial 50 lead
   2) AI bilan personalization test
   3) 10-20 manual send Bekzod kuzatadi
   4) Optimize → keyin scale

❓ Qaysi optsiya? Aytsang, hozirgi 3 agent tugagach (~10 daq) keyingi 3 ta agent ishga tushiraman."""


parts = [PART_1, PART_2, PART_3]
reply_to = 4285
for i, part in enumerate(parts):
    payload = {"chat_id": CHAT_ID, "text": part}
    if i == 0:
        payload["reply_to_message_id"] = reply_to
        payload["allow_sending_without_reply"] = True
    r = post("sendMessage", payload)
    print(f"Part {i + 1}:", r.get("ok"), "msg_id:", r.get("result", {}).get("message_id"))
