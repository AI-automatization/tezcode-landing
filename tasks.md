# Tezcode — GEO & Entity Tasks

> Maqsad: brendsiz kategoriya so'rovlarida ("Toshkentda AI avtomatizatsiya kompaniyalar")
> AI'lar (ChatGPT, Perplexity, Gemini) va Google Tezcode'ni chiqarsin; va brend
> so'rovlarida ("tezcode") boshqa "tezcode"lar bilan chalkashmasin.
>
> Holat: on-site (sayt ichi) GEO ~95% tayyor. Qolgan ish — asosan **off-site ijro**
> (sizning qo'lingizda). Oxirgi yangilash: 2026-06-25

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
- [ ] **IT-media**: Spot.uz yoki Kun.uz'ga press / case study (1–2 mention)

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
