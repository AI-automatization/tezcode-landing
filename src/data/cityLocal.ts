import type { ServiceLang } from "@/components/service-page/types";
import type { City } from "@/data/cities";

// Shared localized bits for the per-city service pages (/ai-chatbot/[city],
// /telegram-bot-biznes/[city]). Keeps the trust line and Tashkent office FAQ
// in the visitor's language instead of falling back to Uzbek.

// Russian needs the prepositional case ("в Ташкенте"), which can't be built
// from the nominative city name.
const RU_LOCATIVE: Record<string, string> = {
  toshkent: "в Ташкенте",
  samarqand: "в Самарканде",
};

export function ruLocative(city: City): string {
  return RU_LOCATIVE[city.slug] ?? `в г. ${city.name.ru}`;
}

export function cityTrust(city: City, lang: ServiceLang): string {
  const name = city.name[lang] ?? city.name.uz;
  switch (lang) {
    case "ru":
      return `${name} и весь Узбекистан • Бесплатная 30-мин консультация • Оплата: 30% предоплата`;
    case "en":
      return `${name} and all of Uzbekistan • Free 30-min consultation • Payment: 30% upfront`;
    case "uk":
      return `${name} і весь Узбекистан • Безкоштовна 30-хв консультація • Оплата: 30% передоплата`;
    case "ar":
      return `${name} وكل أوزبكستان • استشارة مجانية لمدة 30 دقيقة • الدفع: 30% مقدماً`;
    default:
      return `${name} va butun O'zbekiston • Bepul 30 daqiqa konsultatsiya • To'lov: 30% oldindan`;
  }
}

// Only Tashkent has an office to meet in.
const TASHKENT_OFFICE_FAQ: Partial<Record<ServiceLang, { q: string; a: string }>> = {
  uz: {
    q: "Toshkentda jamoa bilan uchrashsa bo'ladimi?",
    a: "Ha. Tezcode ofisi Toshkentda: Amir Temur shoh ko'chasi, 10 (Edu Center, 3-qavat). Ofisda uchrashish yoki onlayn gaplashish mumkin, dastlabki 30 daqiqalik konsultatsiya bepul. Bot o'zbek va rus tilida javob beradi.",
  },
  ru: {
    q: "Можно ли встретиться с командой в Ташкенте?",
    a: "Да. Офис Tezcode находится в Ташкенте: проспект Амира Темура, 10 (Edu Center, 3-й этаж). Можно встретиться в офисе или созвониться онлайн, первая 30-минутная консультация бесплатна. Бот отвечает клиентам на узбекском и русском языках.",
  },
};

export function cityOfficeFaq(city: City, lang: ServiceLang): { q: string; a: string }[] {
  if (city.slug !== "toshkent") return [];
  const item = TASHKENT_OFFICE_FAQ[lang];
  return item ? [item] : [];
}
