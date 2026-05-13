"""Send Bekzod separate SEO audit message."""
import json
import urllib.request

BOT_TOKEN = "8499879884:AAH8jOj8IQkoDGGTutmL6Hp8SHXghqFsUfU"
CHAT_ID = "914653833"  # Bekzod DM
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


text = """🔍 *SEO Audit — Tezcode Landing*
_Mijozlar Tezcode'ni qaysi kalit so'zlar orqali topa oladi?_

📊 *HOZIRGI SEO HOLAT:*

✅ *Yaxshi tomonlar:*
• Meta title (UZ): "Tezcode — AI Software Factory | O'zbekiston biznesini avtomatlashtiramiz"
• Meta description: 159 belgi (Google chegarasi 160)
• OG image, Twitter card sozlangan
• robots.txt + sitemap.xml mavjud (5 til)
• hreflang alternates (UZ/RU/EN/AR/UK) layout.tsx'da
• Canonical URL har til uchun
• Semantic HTML (h1, h2, h3, section, footer)
• Page speed: Next.js 16 + Turbopack (juda tez)
• Mobile responsive

⚠️ *KAMCHILIKLAR (fix kerak):*

1️⃣ *Keywords list yo'q* — Google bizni qaysi search uchun ko'rsatadi?
2️⃣ *JSON-LD structured data yo'q* (Organization, WebSite, Service)
3️⃣ *Domain hali tezcode-landing-production.up.railway.app* — tezcode.dev kerak (SEO uchun .dev kuchli)
4️⃣ *Backlinks 0 ta* — Instagram, Telegram, IT Park, GitHub kataloglar
5️⃣ *Google Search Console submit qilinmagan*

🎯 *MIJOZLAR QIDIRADIGAN KALIT SO'ZLAR* (rank qilish kerak):

*O'zbekcha (high volume):*
🔑 POS dasturi Toshkent
🔑 Biznes avtomatlashtirish O'zbekiston
🔑 Magazin POS terminali
🔑 Restoran POS
🔑 AI yordamchi biznes uchun
🔑 Klinika boshqaruv tizimi
🔑 Hamshira chaqirish Toshkent
🔑 No-code biznes dastur
🔑 IT outsource O'zbekiston
🔑 Custom software development Toshkent
🔑 AI agent O'zbek tilida
🔑 Trading bot O'zbek
🔑 Savdo statistikasi dasturi

*Russian (high volume):*
🔑 POS система Узбекистан
🔑 Автоматизация бизнеса Ташкент
🔑 AI помощник для бизнеса
🔑 Управление клиникой
🔑 Автоматизация магазина

*English (international):*
🔑 AI software factory Uzbekistan
🔑 Tashkent software development
🔑 Central Asia AI startup
🔑 SaaS POS Uzbekistan

📉 *HOZIRGI HOLAT REAL:*

Bekzod, bizni Google'da topish uchun:
• "Tezcode" yozsa — topadi (brand)
• "POS Toshkent" yozsa — TOPMAYDI (boshqalar 1-page)
• "AI O'zbekiston" — TOPMAYDI

*Sabab:* yangi domen, indexlanmagan, backlinks yo'q

🚀 *3 HAFTALIK SEO PLAN:*

*Hafta 1 (asoslar):*
□ tezcode.dev domain ulash (Railway → Cloudflare)
□ JSON-LD: Organization + Service schema qo'shish
□ Keywords array meta tagga (uz/ru/en)
□ Google Search Console + Bing Webmaster ro'yxat
□ Sitemap submit
□ Yandex Webmaster (UZ traffic uchun)

*Hafta 2 (kontent):*
□ /blog yo'naltirish — 10 ta SEO maqola
   ("POS qanday tanlash", "AI biznes uchun" ...)
□ /pricing sahifa — har mahsulot uchun
□ /resources/case-studies — RAOS Dilfuza misoli
□ Image alt teglari hammasi to'g'irlangan
□ FAQ section schema (rich snippets)

*Hafta 3 (backlinks):*
□ IT Park Uzbekistan portfolio submit
□ Product Hunt launch
□ Tezcode Instagram → bio link
□ Telegram channel @tezcode_ai → har post link
□ GitHub README + topics (uzbekistan, ai-startup, pos)
□ Wikipedia: O'zbek AI startuplar ro'yxati

📈 *NATIJA (8-12 hafta):*
• Brand search "Tezcode" — 1-rank (allaqachon)
• "POS Toshkent" — 1-page rank
• "AI O'zbekiston" — top 3
• Organic traffic 0 → 500-2000/oy
• Demo so'rovlar oylik 50+

❓ *Bekzod, qaror:*
1️⃣ tezcode.dev DNS Cloudflare'ga ulayinmi (15 daq)?
2️⃣ JSON-LD + keywords meta darhol qo'shiyimi?
3️⃣ Blog tizimi (Markdown-based) keyingi sprint'da?

Javob ber — hozir bajaraman."""

r = post(
    "sendMessage",
    {
        "chat_id": CHAT_ID,
        "text": text,
        "reply_to_message_id": 4228,
        "allow_sending_without_reply": True,
    },
)
print("SEO audit sent:", r.get("ok"), "msg_id:", r.get("result", {}).get("message_id"))
if not r.get("ok"):
    print("ERROR:", r)
