# Tezcode — GEO & Entity Tasks

> Maqsad: brendsiz kategoriya so'rovlarida ("Toshkentda AI avtomatizatsiya kompaniyalar")
> AI'lar (ChatGPT, Perplexity, Gemini) va Google Tezcode'ni chiqarsin; va brend
> so'rovlarida ("tezcode") boshqa "tezcode"lar bilan chalkashmasin.
>
> Holat: on-site (sayt ichi) GEO ~95% tayyor. Qolgan ish — asosan **off-site ijro**
> (sizning qo'lingizda). Oxirgi yangilash: 2026-08-26

---

## 🆕 2026-08-26 AUDIT — yangi topilmalar (SEO/GEO tahlil + aisolution taqqoslash)

> Manba: 3-yo'nalishli audit (texnik SEO / SERP ko'rinish / landing UX) +
> aisolution.uz bilan yonma-yon taqqoslash. SERP holati: "AI avtomatizatsiya
> Toshkent" klasteri biznikida (4 natija), lekin "AI agent yaratish", "biznes
> uchun AI", "suniy intellekt xizmatlari" — innosoft.uz'da (5/10 so'rovda chiqadi).
> aisolution: davlat-darajali RU so'rovlarda oldinda, o'zbekchada umuman yo'q.

### 🔧 Kod (texnik) — 2026-08-26 bajarildi ✅
- [x] **HSTS header** qo'shildi (next.config.ts) — 2 yil, includeSubDomains, preload [HIGH]
- [x] **EN/RU blog metalari** — 17 post + /blog indeks lokalizatsiya qilindi:
      `localizeArticleMeta()` helper (articles.ts), schema `inLanguage` endi to'g'ri.
      Lokal serverda tekshirildi: /en post → en title + en_US + inLanguage:en [MEDIUM]
- [x] **og:locale formati** — `uz_UZ` va h.k. + alternateLocale; buildPageMetadata orqali
      barcha subpage'larga ham qo'shildi [LOW]
- [x] **twitter:creator** olib tashlandi [LOW]
- [x] **alternateName kengaytirildi** — "TEZ KOD", 'MCHJ "TEZ KOD"', "Tez Kod",
      "Tezcode Dev", "тезкод дев" qo'shildi (jami 12 variant) [LOW]
- [x] Homepage title (uz) 69 → 56 belgi: "...— Toshkent | Tezcode" [LOW]
- [x] **Organization schema description** endi 3 tilda (uz/ru/en; ar/uk → en fallback) —
      auditda `/en`da o'zbekcha chiqayotgan edi [MEDIUM]
- [~] `/uz` → `/` 307 — next-intl default xatti-harakati, ichki linklar /uz'ga bormaydi,
      custom middleware'ga arzimaydi — QILINMAYDI deb yopildi [LOW]
- [ ] Homepage heading tartibi: birinchi H2'dan oldin yetim H3, mobil/desktop H3 dublikatlar [LOW]

> Tekshiruv: `tsc --noEmit` ✅, `next build` ✅, lokal `next start` smoke-test ✅.
> Eslatma: biznesni-ai-bilan-avtomatlashtirish postidagi eski qo'lda yozilgan ruscha
> meta endi articles.ts `list.ru` dan keladi (mazmunan yaqin, so'zma-so'z emas).

### 📝 Kontent (eng katta ta'sil) — 2026-08-26 bajarildi ✅
- [x] **"Sun'iy intellekt" bo'shlig'i yopildi** — sayt avval bu iborani umuman
      ishlatmasdi. Yangi blog post: /blog/suniy-intellekt-xizmatlari (uz/ru/en,
      6-savol FAQ, saytdagi real narxlar bilan). /ai-agent va /ai-avtomatizatsiya'ga
      sinonim 5 tilda qo'shildi (jami ~22 joyda)
- [x] **/ai-agent kuchaytirildi** — FAQ 15 → 17 (innosoft'ning "qimmat custom"
      burchagiga qarshi "tayyor vs buyurtma" savoli + sinonim savoli), yangi
      savollar FAQ schema'ga avtomatik kiradi
- [x] **Davlat-darajali sahifa yaratildi** — /ai-ozbekistonda (5 til):
      ru "Внедрение ИИ в бизнес в Узбекистане" (asosiy nishon), uz "O'zbekistonda
      biznesga AI joriy qilish". Service+FAQPage+HowTo+Breadcrumb schema,
      sitemap'ga qo'shildi. FAQAT real faktlar ishlatilgan; 3 joyda
      `TODO(Sardor): real raqam qo'yish` — loyihalar soni kabi kuchli raqamni
      siz qo'yishingiz kerak (yolg'on "120+" yozilmadi)
- [ ] **Tarmoq landinglari kengaytirish** — aisolution'da 30 tarmoq + 12 rol sahifasi bor;
      bizda RAOS/ClinicaGo'ga bog'lab: klinika, restoran, do'kon, ta'lim, HR...
- [ ] **Keyslar to'ldirish** — /case-studies bor, lekin mijoz nomi + raqam bilan
      kuchaytirilsin (aisolution'da atigi 2 keys — birinchi bo'lib 5-6 ta chiqargan yutadi)

### 🤝 Off-site (yangi)
- [ ] **2GIS kartochka** — "IT kompaniya Toshkent" so'rovida 2GIS 1-natija, biz yo'qmiz
- [ ] **Yandex Maps kartochka** (business.yandex.ru/sprav)
- [x] **aisolution bilan o'zaro linklashish** — /partnery/aisolution sahifasi repo'da
      allaqachon mavjud ekan (tekshirildi 2026-08-26)
- [ ] tezcode.com HugeDomains'da sotuvda — brend himoyasi uchun baholash

### 💡 Landing UX (konversiya)
- [ ] Hero ostida 4 yo'nalish aniq ko'rinsin (sayt, bot, CRM, AI) — "sayt kerak" degan
      mijoz H1'da o'zini topmayapti
- [ ] /tariflar: SaaS obuna va buyurtma ishlar ($279 bot, $1000 MVP) ajratilsin
- [ ] Bitta birlamchi CTA (hozir demo/konsultatsiya/audit/trial aralash)

---

## ✅ ALLAQACHON QILINGAN

### On-site (kod) — tayyor
- [x] Organization + LocalBusiness schema (NAP, geo, telefon, ish vaqti, sameAs)
- [x] FAQ / Service / Article / Product / Founder / Breadcrumb / Website schema
- [x] `llms.txt` — AI uchun faktlar + tabiiy so'rov FAQ
- [x] `robots.ts` — 16 ta AI crawler'ga ochiq ruxsat
- [x] Kategoriya sahifalari: `/ai-avtomatizatsiya`, `/biznes-avtomatlashtirish`, `/ai-agent`, `/ai-chatbot`, `/it-xizmatlar`, `/telegram-bot-biznes`, `/pos-tizimi`, `/klinika-crm`, `/xodim-nazorati`
- [x] POS shahar sahifalari (`/pos-tizimi/[city]`)
- [x] **AI avtomatizatsiya shahar sahifalari** (`/ai-avtomatizatsiya/[city]`) — 12 shahar × 5 til (2026-06-24)
- [x] **Taqqoslov blog maqolasi**: "Toshkentda AI avtomatizatsiya kompaniyasini qanday tanlash" (uz/ru/**en**) — 2026-06-25
- [x] Ko'p til (uz/ru/en/ar/uk) + hreflang + sitemap

### Disambiguatsiya (boshqa "tezcode"dan ajratish) — kod tomoni
- [x] schema `alternateName` (TezCode, Tez Code, Тезкод, tezcode.dev)
- [x] **`disambiguatingDescription`** qo'shildi — Hindiston "tezcode", TezCode.tech, codingtech.uz'dan ajratadi (2026-06-25)
- [x] `llms.txt` eslatmasi kuchaytirildi — Hindiston "tezcode"ni nomi bilan ajratdi + to'g'ri LinkedIn
- [x] `llms.txt`ga LinkedIn qo'shildi (tashqi profillar + aloqa)

### Google Business Profile
- [x] GBP ochilgan — **5.0 ⭐ / 23 sharh**, kategoriya: Software development company
- [x] Schema geo + hasMap haqiqiy GBP bilan moslandi (2026-06-24)

### LinkedIn Company Page — 2026-06-25
- [x] Tagline: "AI Software Factory — Tashkent, Uzbekistan"
- [x] About: to'liq tavsif (Tashkent + 2024 + Bekzod Mirzaaliyev)
- [x] Post: uz/ru/en uchta tilda (AI automation mavzusida)

### GoodFirms — 2026-06-25
- [x] Profil ochildi (tezcode@tezcode.dev) — PENDING review (3-5 kun)
- [x] 4 step to'ldirildi: General, Locations, Services, Clients (62% completion)

---

## 🔴 OFF-SITE IJRO (eng muhim — sizga/jamoaga bog'liq, kod emas)

> Tadqiqot: TezCode hozir Clutch AI katalogida ko'rinmayapti. Profillar bor, lekin
> to'ldirilmagan / sharhsiz. Bu — AI javoblariga chiqishdagi asosiy to'siq.

- [ ] **Clutch.co** profilini to'liq to'ldirish (`docs/off-site-profiles.md` matni bilan)
  - [ ] "Artificial Intelligence" kategoriyasini belgilash
  - [ ] 3–5 mijozdan sharh (review) — `docs/review-templates.md` (GBP'dagi 23 sharhdan ba'zilarini Clutch'ga ham)
- [ ] **TechBehemoths** profilini to'ldirish + AI/Tashkent kategoriyasi
- [ ] `docs/off-site-profiles.md` dagi `[TASDIQLA]` faktlar: min loyiha narxi, soatlik stavka
- [ ] **IT-media**: Spot.uz yoki Kun.uz'ga press / case study (1–2 mention) — Wikidata uchun ham mustaqil "reference" (notability) bo'ladi, shuning uchun Wikidata'dan OLDIN qilingani ma'qul

---

## 🆔 ENTITY DISAMBIGUATSIYA (boshqa "tezcode" bilan chalkashmaslik)

> Muammo: Hindistonda (Calicut, Kerala) boshqa "tezcode" bor (web 3.0 marketing,
> linkedin.com/company/tezcode). Yalang'och "tezcode" qidiruvida chalkashlik bo'ladi.
>
> **Oltin qoida:** brendni hech qachon yalang'och "tezcode" deb yozmang — doim
> **Tezcode · Tashkent, Uzbekistan · tezcode.dev** birga. Geografiya (O'zbekiston)
> Hindistondan ajratuvchi eng kuchli fakt.

### 🔴 1. Bidirectional (ikki tomonlama) havola
Har profil saytga qaytib havola qilsin (sayt → profil tomoni `sameAs`da bor).
- [ ] LinkedIn → tezcode.dev
- [ ] Instagram → tezcode.dev
- [ ] Clutch / F6S / TechBehemoths → tezcode.dev

### 🟡 3. Wikidata yozuvi (kuchli kanonik signal)
`wikidata.org`da Tezcode elementi: instance of = software company, country = **Uzbekistan**,
HQ = Tashkent, website = tezcode.dev, founded by = Bekzod Mirzaaliyev, inception = 2024.
- [ ] Wikidata element yaratish

### 🟡 4. Geografiya-tagli kataloglar
- [ ] Clutch (UZ), TechBehemoths (Tashkent), GoldenPages — "tezcode = O'zbekiston" signalini kuchaytiradi (yuqoridagi off-site bilan ustma-ust)

### 🟢 5. Bir xil handle
- [ ] Iloji boricha hamma joyda `tezcode_dev` / `tezcode-dev` (yalang'och `tezcode` emas)

---

## 🔎 BREND SERP — "tezcode" qidiruvini egallash (2026-06-26)

> Holat (Google "tezcode"): #1 **tezcode.dev** ✅ + knowledge panel (5.0★/23) ✅ +
> TechBehemoths profil ✅ + Clutch profil ✅. Faqat #2 — **TezCode.tech** (Python
> bootcamp, begona) — bu qonuniy boshqa kompaniya, O'CHIRIB BO'LMAYDI, faqat ko'proq
> slot egallab **pastga surish** mumkin. Bu bir vaqtda GEO'ga ham yordam beradi (entity obro'si).

Maqsad: 1-sahifani Tezcode profillari bilan to'ldirib, TezCode.tech'ni pastga surish.
- [ ] **Crunchbase** profil yaratish + to'ldirish (yangi SERP sloti + entity signali)
- [ ] **F6S** profilini to'liq to'ldirish (sameAs'da bor — indekslansin)
- [ ] **Instagram** (tezcode_dev), **GitHub** (AI-automatization), **YouTube** — brend qidiruvida chiqsin
- [ ] **Wikidata** yozuvi → brendlangan knowledge panel ("tezcode.dev" emas, "Tezcode") + AI iqtibosi *(yuqoridagi disambiguatsiya bilan bir xil)*
- [ ] **GBP nomi** `tezcode.dev` → `Tezcode` *(GBP bo'limi bilan bir xil — knowledge panel uchun)*
- [ ] **Press** (Spot.uz / Kun.uz) → yana bir slot + obro' *(off-site bilan bir xil)*

---

## 🟡 ON-SITE — qolgan (kod, ixtiyoriy)
- [ ] (Ixtiyoriy) Blog maqolasiga `ar` + `uk` tarjima qo'shish (hozir uz/ru/en)
- [ ] (Ixtiyoriy) `/biznes-avtomatlashtirish/[city]` shahar sahifalari

## 🟢 GBP YAXSHILASH (ixtiyoriy, tez)
- [ ] GBP nomini `tezcode.dev` → **`Tezcode`** ga ko'rib chiqish
- [ ] GBP'ga rasm: logo, jamoa, ofis, mahsulot screenshotlari
- [ ] GBP Posts orqali muntazam yangilik

---

## ⏭️ Indekslashni tezlashtirish
- [ ] **Google Search Console**ga `sitemap.xml` yuborish (yangi sahifalar tez indekslanadi)
- [ ] 1–3 haftadan keyin AI'larda test promptlar bilan qayta tekshirish

## 📌 Eng katta ta'sir tartibi (agar vaqt kam bo'lsa)
1. Clutch profil + mijoz sharhlari
2. Bidirectional havolalar
3. Wikidata yozuvi

---

## 🟠 KATALOG PROFILLARINI TO'LDIRISH (TechBehemoths + GoodFirms)
Profillar bor, lekin bo'sh joylari ko'p — to'ldirish kerak.

### TechBehemoths (techbehemoths.com/company/tezcode)
- [x] **Portfolio** to'ldirish → 4 loyiha qo'shildi (2026-06-29):
  - [x] RAOS — POS/Retail (do'kon, kassa, ombor, soliq)
  - [x] CoreMed / ClinicaGo — Healthcare (klinika CRM, navbat)
  - [x] AI Chatbot / AI Office — AI (biznes avtomatlashtirish)
  - [x] WeWatch — Social/Media (onlayn birga kino)
  - [ ] WorkControl — HR/Productivity (xodim nazorati) — qo'shilmadi
- [ ] **Xizmatlar** kengaytirish (hozir atigi 3 — "cheklangan"): AI agent, business automation, AI chatbot, custom software, web, mobile, CRM/ERP, POS, Telegram bot
- [ ] **Kategoriya** "Web Development" → **Artificial Intelligence** qo'shish (Top AI companies ro'yxatiga kirish)
- [ ] **Sharhlar** — 3-5 ta mijoz sharhi

### GoodFirms (goodfirms.co/company/tezcode)
- [ ] **Portfolio** loyihalar qo'shish (yuqoridagidek)
- [ ] **Focus areas / xizmatlar** to'liq belgilash (AI, automation, POS, CRM, web, mobile)
- [ ] **Sharhlar** — 3-5 ta mijoz sharhi

### NAP izchilligi
- [ ] Manzil "Amir Temur ko'chasi 10, Tashkent 100037" + tel `+998993151516` hamma joyda bir xil (sayt schema, GBP, Yandex, TechBehemoths, GoodFirms)

## 🔧 ON-SITE TUZATISHLAR (aniqlangan)
- [ ] Soxta "live visitor badge" (5 online · N bugun) — real qilish yoki olib tashlash
- [ ] Bosh sahifada sharhlar takrori (bir xil mijozlar 2 bo'limda) — birlashtirish
- [ ] Real case study'lar (aniq raqamlar) + mijoz logolari
