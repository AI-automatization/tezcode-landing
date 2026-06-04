# Tezcode — SEO Keyword & Landing Page Reja

> Maqsad: O'zbekistonda odamlar Google/Yandex'ga AI, dastur, avtomatizatsiya va IT
> xizmatlar bilan bog'liq so'zlarni yozganda — Tezcode birinchi sahifada (eng yaxshi
> 1–3 o'rinda) chiqishi.
>
> Tamoyil: har bir muhim qidiruv so'zi uchun **maxsus sahifa** kerak. So'z sahifaning
> sarlavhasida (H1, `<title>`), URL'da va kontentida bo'lishi shart. Sayt i18n bo'lgani
> uchun har sahifa avtomatik uz/ru/en versiyaga ega — lekin ru kontent rus tilida
> yozilishi kerak (rus qidiruvida chiqishi uchun).
>
> ⚠️ Eslatma: "keywords" meta tegi ishlamaydi (Google 2009-dan o'qimaydi). Reyting =
> maqsadli sahifa + sifatli kontent + vaqt + boshqa saytlardan havola (backlink).
> Qidiruv hajmlari — taxminiy (aniq raqam uchun Google Keyword Planner / Search Console kerak).

---

## 1. KEYWORD → SAHIFA XARITASI

### TIER 1 — Eng yuqori ustuvorlik (avval shularni yasaymiz)

| # | Qidiruv so'zi (UZ) | Qidiruv so'zi (RU) | Maqsadli URL | Holat | Hajm (taxmin) |
|---|---|---|---|---|---|
| 1 | biznes avtomatlashtirish | автоматизация бизнеса | `/biznes-avtomatlashtirish` | 🆕 yangi | yuqori |
| 2 | AI avtomatizatsiya / sun'iy intellekt biznes uchun | AI автоматизация / ИИ для бизнеса | `/ai-avtomatizatsiya` | 🆕 yangi | o'rta-yuqori |
| 3 | IT xizmatlar Toshkent | IT услуги Ташкент | `/it-xizmatlar` | 🆕 yangi | yuqori |
| 4 | dastur yasatish / buyurtma dastur | разработка ПО на заказ | `/for-businesses` | ✅ bor (optimizatsiya) | yuqori |
| 5 | dasturchi yollash | нанять разработчика | `/hire-developers` | ✅ bor | o'rta (xalqaro: yuqori) |

### TIER 2 — Keyingi bosqich

| # | Qidiruv so'zi (UZ) | Qidiruv so'zi (RU) | Maqsadli URL | Holat |
|---|---|---|---|---|
| 6 | AI agent yasatish / AI chatbot | разработка AI агента / чат-бот | `/ai-agent` | 🆕 yangi |
| 7 | veb sayt yaratish Toshkent | создание сайта Ташкент | `/veb-sayt-yaratish` | 🆕 yangi |
| 8 | mobil ilova yasatish | разработка мобильного приложения | `/mobil-ilova` | 🆕 yangi |
| 9 | CRM tizimi / ERP tizimi | CRM система / ERP система | `/crm-erp` | 🆕 yangi |

### TIER 3 — Mahsulotga oid (ikkilamchi)

| # | Qidiruv so'zi | Maqsadli URL | Mahsulot |
|---|---|---|---|
| 10 | POS dastur / do'kon avtomatlashtirish | `/pos-dastur` yoki raos.uz | RAOS |
| 11 | klinika boshqaruv dasturi | `/klinika-dastur` | Carevy / HamshiraGo |
| 12 | AI Office / biznes AI yordamchi | `/ai-office` | AI Office |

---

## 2. HAR YANGI SAHIFA STRUKTURASI (shablon)

Misol: `/ai-avtomatizatsiya`

- **URL:** `tezcode.dev/ai-avtomatizatsiya` (+ `/ru/ai-avtomatizatsiya`)
- **`<title>`:** `AI Avtomatizatsiya — Biznesingizni sun'iy intellekt bilan avtomatlashtiring | Tezcode`
- **H1:** `Biznesingizni AI bilan avtomatlashtiring`
- **Meta description:** 150–160 belgi, kalit so'z bilan, harakatga undash bilan
- **Kontent bo'limlari:**
  1. Hero — H1 + qisqa va'da + "Bepul konsultatsiya" tugmasi
  2. "Nima avtomatlashtira olamiz?" — 4–6 misol (hisobot, mijoz xizmati, sotuv, ombor...)
  3. "Qanday ishlaymiz" — 3–4 qadam
  4. Misollar / case (raqamlar bilan: "X% vaqt tejaldi")
  5. Narx yoki "Bepul konsultatsiya" CTA
  6. FAQ (qidiruvga qo'shimcha so'zlar olib keladi)
- **Ichki havolalar:** bosh sahifa, /for-businesses, tegishli case-study ga link
- **Schema:** Service / FAQPage JSON-LD

---

## 3. KENGAYTIRILGAN KEYWORD RO'YXATI (kontent ichida ishlatish uchun)

### AI & Avtomatizatsiya
- biznes avtomatlashtirish, jarayonlarni avtomatlashtirish, AI avtomatizatsiya
- sun'iy intellekt biznes uchun, AI yechim, AI integratsiya
- avtomatik hisobot, AI mijoz xizmati, chatbot yasatish
- RU: автоматизация бизнеса, искусственный интеллект для бизнеса, внедрение ИИ, AI-решения, разработка чат-бота

### Dastur ishlab chiqish
- dastur yasatish, buyurtma dastur, dasturiy ta'minot ishlab chiqish
- veb sayt yaratish, mobil ilova yasatish, CRM yaratish, ERP tizimi
- RU: разработка ПО, заказная разработка, создание сайта, мобильное приложение, разработка CRM/ERP

### IT xizmatlar
- IT xizmatlar Toshkent, IT kompaniya, IT autsorsing
- dasturchi yollash, dasturchilar jamoasi, IT Park rezident
- RU: IT услуги Ташкент, IT аутсорсинг Узбекистан, нанять разработчиков, IT компания Ташкент

### Joylashuv qo'shimchalari (har keywordga qo'shsa bo'ladi)
- Toshkent, O'zbekiston, Tashkent, Uzbekistan, Central Asia

---

## 4. KEYINGI QADAMLAR (texnik)

1. ✅ Tier 1 sahifalarini yaratish (kontent + dizayn, mavjud komponentlardan)
2. ✅ Sitemap'ga yangi sahifalarni qo'shish (`src/app/sitemap.ts`)
3. ✅ Har sahifaga `buildPageMetadata` orqali title/canonical/og
4. ✅ Service + FAQPage JSON-LD qo'shish
5. ✅ Google Search Console + Yandex Webmaster'ga ulash, sitemap yuborish
6. ⏳ Backlink: IT Park, kataloglar, ijtimoiy tarmoq, maqolalar — vaqt bilan
7. ⏳ Search Console'da qaysi so'zlarda chiqayotganini kuzatish, kontentni yaxshilash

> Realistik kutilma: yangi sahifalar Google'da indekslanib, yuqoriga chiqishi
> odatda 2–8 hafta (raqobat darajasiga qarab). "IT xizmatlar Toshkent" kabi
> raqobatli so'zlar uchun ko'proq kontent + backlink kerak.
