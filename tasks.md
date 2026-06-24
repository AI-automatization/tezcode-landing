# Tezcode — GEO Tasks (qilinishi kerak bo'lgan ishlar)

> Maqsad: brendsiz kategoriya so'rovlarida ("Toshkentda AI avtomatizatsiya kompaniyalar")
> AI'lar (ChatGPT, Perplexity, Gemini) va Google Tezcode'ni chiqarib bersin.
>
> Holat: **on-site (sayt ichi) GEO ~90% tayyor.** Asosiy qolgan ish — **off-site ijro**
> va bir nechta kontent bo'shlig'i. Sana: 2026-06-24

---

## ✅ ALLAQACHON QILINGAN (tekshirildi)

- [x] Organization + LocalBusiness schema (NAP, geo, telefon, ish vaqti, sameAs)
- [x] FAQ / Service / Article / Product / Founder / Breadcrumb / Website schema
- [x] `llms.txt` — AI uchun faktlar + tabiiy so'rov FAQ + "adashtirmang" eslatmasi
- [x] `robots.ts` — 16 ta AI crawler'ga ochiq ruxsat
- [x] Kategoriya sahifalari: `/ai-avtomatizatsiya`, `/biznes-avtomatlashtirish`, `/ai-agent`, `/ai-chatbot`, `/it-xizmatlar`, `/telegram-bot-biznes`, `/pos-tizimi`, `/klinika-crm`, `/xodim-nazorati`
- [x] POS shahar sahifalari (`/pos-tizimi/[city]`)
- [x] Blog (7 maqola) + Case studies (3 ta)
- [x] Ko'p til (uz/ru/en/ar/uk) + hreflang + sitemap
- [x] Google Business Profile ochilgan — **5.0 ⭐ / 23 sharh**, kategoriya: Software development company
- [x] Schema geo + hasMap haqiqiy GBP bilan moslandi (2026-06-24)

---

## 🔴 OFF-SITE IJRO (eng muhim — bu Sardor/jamoaga bog'liq, kod emas)

> Tadqiqot natijasi: TezCode hozir Clutch'ning AI katalogida **ko'rinmayapti**, garchi
> profil havolasi `sameAs`da bo'lsa ham. Profillar bor, lekin to'ldirilmagan / sharhsiz /
> kategoriyaga belgilanmagan. Aynan shu — AI javoblariga chiqishdagi asosiy to'siq.

- [ ] **Clutch.co** profilini to'liq to'ldirish (`docs/off-site-profiles.md` dagi matn bilan)
  - [ ] "Artificial Intelligence" kategoriyasini belgilash (AI katalogida chiqishi uchun)
  - [ ] 3–5 mijozdan sharh (review) so'rash — `docs/review-templates.md`
  - [ ] Service focus foizlarini kiritish
- [ ] **GoodFirms** profil ochish + to'ldirish
- [ ] **TechBehemoths** profilini to'ldirish + AI/Tashkent kategoriyasi
- [ ] `docs/off-site-profiles.md` dagi `[TASDIQLA]` faktlarni aniqlash:
  - [ ] Min loyiha narxi (Clutch uchun)
  - [ ] O'rtacha soatlik stavka ($/hr)
- [ ] **IT-media**: Spot.uz yoki Kun.uz'ga press / case study (1–2 mention)
- [ ] (Keyingi bosqich) Crunchbase, StartupBase.uz, Wikidata stub

---

## 🟡 ON-SITE KONTENT BO'SHLIQLARI (kod — men qila olaman)

- [x] **`/ai-avtomatizatsiya/[city]`** dasturiy shahar sahifalari (12 shahar × 5 til = 60 sahifa) ✅ 2026-06-24
  → "Toshkentda AI avtomatizatsiya" so'roviga to'g'ridan-to'g'ri ishlaydi
  → Har shahar uchun unikal AI-intro + Service/FAQ schema + sitemap'ga qo'shildi; build ✓
- [ ] (Ixtiyoriy) `/biznes-avtomatlashtirish/[city]` shahar sahifalari
- [ ] **Taqqoslov/qo'llanma blog maqolasi**: "Toshkentda AI avtomatizatsiya kompaniyasini qanday tanlash"
  → AI'lar kategoriya so'rovida aynan shunday listicle/guide'ni iqtibos qiladi (FAQ + Article schema bilan)

---

## 🟢 GBP YAXSHILASH (ixtiyoriy, tez)

- [ ] GBP biznes nomini `tezcode.dev` → **`Tezcode`** ga o'zgartirishni ko'rib chiqish (domen emas, brend nomi)
- [ ] GBP'ga rasm yuklash: logo, jamoa, ofis, mahsulot screenshotlari
- [ ] GBP Posts orqali muntazam yangilik (mahsulot, case study)

---

## ⏭️ Keyingi qadam
Tavsiya: **`/ai-avtomatizatsiya/[city]` shahar sahifalari**dan boshlash — sof kod ishi,
to'g'ridan-to'g'ri maqsadli so'rovga ta'sir qiladi.
