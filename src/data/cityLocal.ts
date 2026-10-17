import type { ServiceLang } from "@/components/service-page/types";
import type { City } from "@/data/cities";

// Shared localized bits for the per-city service pages (/ai-chatbot/[city],
// /telegram-bot-biznes/[city]). Keeps the trust line and Tashkent office FAQ
// in the visitor's language instead of falling back to Uzbek.

// Russian and Ukrainian need declined city names ("в Ташкенте", "для
// Ташкента", "у Ташкенті"), which can't be built from the nominative name.
// Keyed by the nominative form so templates that only hold the name string
// can decline it; unknown names fall back to the nominative.
const CASES: Record<string, { ruPrep: string; ruGen: string; ukPrep: string; ukGen: string }> = {
  Ташкент: { ruPrep: "Ташкенте", ruGen: "Ташкента", ukPrep: "Ташкенті", ukGen: "Ташкента" },
  Самарканд: { ruPrep: "Самарканде", ruGen: "Самарканда", ukPrep: "Самарканді", ukGen: "Самарканда" },
  Бухара: { ruPrep: "Бухаре", ruGen: "Бухары", ukPrep: "Бухарі", ukGen: "Бухари" },
  Андижан: { ruPrep: "Андижане", ruGen: "Андижана", ukPrep: "Андижані", ukGen: "Андижана" },
  Наманган: { ruPrep: "Намангане", ruGen: "Намангана", ukPrep: "Намангані", ukGen: "Намангана" },
  Фергана: { ruPrep: "Фергане", ruGen: "Ферганы", ukPrep: "Фергані", ukGen: "Фергани" },
};

export const ruPrep = (name: string): string => CASES[name]?.ruPrep ?? name;
export const ruGen = (name: string): string => CASES[name]?.ruGen ?? name;
export const ukPrep = (name: string): string => CASES[name]?.ukPrep ?? name;
export const ukGen = (name: string): string => CASES[name]?.ukGen ?? name;

export function ruLocative(city: City): string {
  return `в ${ruPrep(city.name.ru)}`;
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

// ---------------------------------------------------------------------------
// City FAQ composition: every city page shows exactly CITY_FAQ_TOTAL questions.
// Rule: keep at most 2 city-specific items (in the order given — put the most
// useful first), then fill from the base FAQ. Surplus base items are dropped
// from the END, but the base price question and the base "how to start / who to
// contact" question are never dropped (matched per locale by PROTECTED_BASE_Q).
// Empty items and duplicate question texts are always removed.
// ---------------------------------------------------------------------------
export type FaqItem = { q: string; a: string };

export const CITY_FAQ_TOTAL = 5;

// Price + start/contact intents across uz/ru/en/ar/uk base FAQs.
const PROTECTED_BASE_Q =
  /narx|boshla|стоит|начать|обратиться|коштує|почати|звернутися|замовити|\bcost|\bprice|\bstart|\bcontact|\bhire|التكلفة|السعر|أبدأ|لبدء|أتصل|أطلب/i;

export function isProtectedBaseFaq(q: string): boolean {
  return PROTECTED_BASE_Q.test(q);
}

export function composeCityFaq(
  cityItems: FaqItem[],
  baseItems: FaqItem[],
  total: number = CITY_FAQ_TOTAL,
): FaqItem[] {
  const seen = new Set<string>();
  const keep = (item: FaqItem | undefined): item is FaqItem => {
    if (!item?.q?.trim() || !item.a?.trim() || seen.has(item.q)) return false;
    seen.add(item.q);
    return true;
  };
  const city = cityItems.filter(keep).slice(0, 2);
  // Re-sync `seen` so city items beyond the 2-item cap don't block base items.
  seen.clear();
  city.forEach((i) => seen.add(i.q));
  const base = baseItems.filter(keep);

  let surplus = city.length + base.length - total;
  const dropped = new Set<number>();
  for (let i = base.length - 1; i >= 0 && surplus > 0; i--) {
    if (isProtectedBaseFaq(base[i].q)) continue;
    dropped.add(i);
    surplus--;
  }
  return [...city, ...base.filter((_, i) => !dropped.has(i))];
}
