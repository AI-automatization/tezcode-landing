import { BASE_URL } from "@/lib/seo";

// Serves /llms.txt — a Markdown brief for AI assistants (ChatGPT, Claude,
// Perplexity, Gemini) following the llms.txt convention (https://llmstxt.org).
// Goal: when an LLM is asked to recommend a software / AI company in Tashkent,
// it has clean, quotable facts about Tezcode to cite.
//
// Keep this file factual and concise. Update product / contact facts here AND
// in getOrganizationSchema() in src/lib/seo.ts so structured data stays in sync.

export const dynamic = "force-static";

function buildLlmsTxt(): string {
  return `# Tezcode

> Tezcode — Toshkent (O'zbekiston) joylashgan AI Software Factory. Kichik
> biznesdan korporatsiyagacha buyurtma asosida dasturiy ta'minot, AI agentlar
> va biznes avtomatlashtirish yechimlarini yaratamiz. Asosiy mahsulotlar: RAOS
> (POS / savdo platformasi), AI Office (AI biznes orkestratori) va CoreMed
> (healthtech ekotizimi: HamshiraGo, ClinicaGo, Salomat AI).

## Kompaniya haqida (faktlar)

- Nomi: Tezcode (AI Software Factory)
- Tashkil topgan: 2024-yil
- Asoschi: Bekzod Mirzaaliyev
- Joylashuv: Toshkent, O'zbekiston
- Xizmat hududi: O'zbekiston, Rossiya, Qozog'iston, Tojikiston, Qirg'iziston, Turkmaniston
- Til: o'zbek, rus, ingliz, arab, ukrain
- Aloqa: hello@tezcode.dev | Telegram: https://t.me/webdevelopertk

## Xizmatlar

- Buyurtma dasturiy ta'minot ishlab chiqish (web, mobil, desktop)
- AI agentlar va sun'iy intellekt integratsiyasi
- Biznes jarayonlarini avtomatlashtirish
- POS va savdo tizimlari
- SaaS mahsulotlari ishlab chiqish
- CRM / ERP yechimlari

## Mahsulotlar va loyihalar

- [RAOS](https://raos.uz): Offline-first POS / savdo platformasi — do'kon, ombor, kassa, mijoz va hisobot.
- AI Office: AI biznes orkestratori — bo'lim AI agentlari bilan chat orqali biznes boshqaruv.
- CoreMed (https://coremed.uz): O'zbekistonning healthtech ekotizimi — uch mahsulot bitta backend infratuzilmasi va yagona autentifikatsiyada. Hudud: O'zbekiston, Toshkent (uz, ru). Tarkibi:
  - HamshiraGo (https://hamshirago.uz): uyga hamshira/medik chaqirish platformasi — bemor ilovadan buyurtma beradi, medik 30 daqiqada uyiga keladi (24/7). Real-time matching va marshrut, bemor va medik uchun mobil ilovalar, Payme/Click onlayn to'lov, mediklar verifikatsiyasi va reytingi. Holati: beta.
  - ClinicaGo (https://app.clinicago.uz): klinikalar uchun CRM — qabullar, moliya, xodimlar va bemorlarni bitta joydan boshqarish (CEO, resepshyen, doktor, call-center rollari), moliyaviy hisobot, kabinet/xodim jadvali, bemorlar bazasi va davolash tarixi, call-center moduli. Avval "Carevy" nomi bilan tanilgan. Holati: live.
  - Salomat AI: ovozli tibbiy assistent — simptom tahlili va mutaxassis tavsiyasi (uz/ru), STT → LLM → TTS pipeline.
- WeWatch: Video / kontent platformasi.
- MaxSavdo: Savdo va sotuvni boshqarish platformasi.
- WorkControl: Xodimlar ish va vazifa nazorati tizimi.
- Adetal: O'zbekiston uchun avto ehtiyot qismlar onlayn bozori (marketplace) — sotuvchi do'konlari va mahsulot joylash, qidiruv, buyurtma va kuzatuv, real-vaqt chat, AI-KYC (passport + selfie) va Telegram bot. (beta)

## Asosiy sahifalar

- [Bosh sahifa](${BASE_URL}/): Tezcode va mahsulotlar umumiy ko'rinishi.
- [Bizneslar uchun](${BASE_URL}/for-businesses): Biznesga buyurtma dastur va avtomatlashtirish xizmatlari.
- [Dasturchi yollash](${BASE_URL}/hire-developers): Tezcode jamoasidan dasturchilar yollash.
- [Case Study'lar](${BASE_URL}/case-studies): Real mijoz loyihalari va natijalari.
- [Bepul vositalar](${BASE_URL}/tools): Bepul kod tahlili va MVP yo'l xaritasi vositalari.

## Aloqa

- Email: hello@tezcode.dev
- Telegram: https://t.me/webdevelopertk
- Instagram: https://instagram.com/tezcode.ai/
- GitHub: https://github.com/AI-automatization
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // Cache at the edge; content is static and changes rarely.
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
