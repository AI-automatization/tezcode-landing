import type {
  ServiceLang,
  ServicePageContent,
  ServicePageCopy,
} from "@/components/service-page/types";
import type { City } from "@/data/cities";
import { CONTENT } from "./content";

// Builds a full 5-locale ServicePageContent for a single city by deep-cloning the
// base RAOS POS copy and overriding the city-aware fields. The unique per-city
// `intro` blurb is injected so it renders visibly in the HTML (prepended to the
// hero subtitle + used as the examples subtitle), and a city-specific FAQ item is
// prepended so the FAQ schema is unique per city too.
//
// Only confirmed facts are used — the RAOS feature claims come straight from the
// base content; nothing is fabricated.

// Locale-specific phrasing for the prepended city FAQ.
const CITY_FAQ: Record<
  ServiceLang,
  (city: string) => { q: string; a: string }
> = {
  uz: (city) => ({
    q: `RAOS ${city}da ishlaydimi?`,
    a: `Ha. RAOS butun O'zbekiston bo'ylab, jumladan ${city}da ham ishlaydi. U offline-first — internet uzilsa ham kassa to'xtamaydi, ma'lumot lokalda saqlanadi va ulanish tiklanganda avtomatik sinxronlanadi. Demo, sozlash va qo'llab-quvvatlash masofadan amalga oshiriladi, do'koningiz ${city}ning istalgan nuqtasida bo'lsa ham.`,
  }),
  ru: (city) => ({
    q: `RAOS работает в ${city}?`,
    a: `Да. RAOS работает по всему Узбекистану, в том числе в ${city}. Он offline-first — при обрыве интернета касса не останавливается, данные хранятся локально и автоматически синхронизируются при восстановлении связи. Демо, настройка и поддержка проводятся удалённо, где бы ни находился ваш магазин в ${city}.`,
  }),
  en: (city) => ({
    q: `Does RAOS work in ${city}?`,
    a: `Yes. RAOS works across all of Uzbekistan, including ${city}. It is offline-first — if the internet drops the register keeps working, data is stored locally and syncs automatically when the connection is back. Demo, setup and support are done remotely, wherever your store is in ${city}.`,
  }),
  ar: (city) => ({
    q: `هل يعمل RAOS في ${city}؟`,
    a: `نعم. يعمل RAOS في جميع أنحاء أوزبكستان، بما في ذلك ${city}. وهو offline-first — عند انقطاع الإنترنت لا يتوقف الكاشير، وتُحفظ البيانات محلياً وتُزامَن تلقائياً عند عودة الاتصال. يتم العرض التجريبي والإعداد والدعم عن بُعد، أينما كان متجرك في ${city}.`,
  }),
  uk: (city) => ({
    q: `RAOS працює в ${city}?`,
    a: `Так. RAOS працює по всьому Узбекистану, зокрема в ${city}. Він offline-first — при обриві інтернету каса не зупиняється, дані зберігаються локально й автоматично синхронізуються при відновленні зв'язку. Демо, налаштування та підтримка проводяться віддалено, де б не був ваш магазин у ${city}.`,
  }),
};

// Locale-specific trust line (city-aware).
const CITY_TRUST: Record<ServiceLang, (city: string) => string> = {
  uz: (city) => `Bepul demo • Internetsiz ishlaydi • ${city} va butun O'zbekiston`,
  ru: (city) => `Бесплатное демо • Работает без интернета • ${city} и весь Узбекистан`,
  en: (city) => `Free demo • Works offline • ${city} and all of Uzbekistan`,
  ar: (city) => `عرض تجريبي مجاني • يعمل بدون إنترنت • ${city} وكل أوزبكستان`,
  uk: (city) => `Безкоштовне демо • Працює без інтернету • ${city} і весь Узбекистан`,
};

// City-aware hero title. `title1` renders white, `titleAccent` renders in the
// gradient — they are composed as two lines, so they must read naturally together
// WITHOUT repeating each other (the base copy's title1 must not be reused as-is).
const HERO_TITLE: Record<
  ServiceLang,
  (city: string) => { title1: string; titleAccent: string }
> = {
  uz: (city) => ({ title1: `${city} uchun`, titleAccent: "POS tizimi — RAOS" }),
  ru: (city) => ({ title1: "POS-система для", titleAccent: `${city} — RAOS` }),
  en: (city) => ({ title1: "POS system for", titleAccent: `${city} — RAOS` }),
  ar: (city) => ({ title1: "نظام POS", titleAccent: `لـ ${city} — RAOS` }),
  uk: (city) => ({ title1: "POS-система для", titleAccent: `${city} — RAOS` }),
};

// City-aware service schema name / description / type.
const SERVICE_TEXT: Record<
  ServiceLang,
  (city: string, region: string) => { name: string; description: string; serviceType: string }
> = {
  uz: (city, region) => ({
    name: `RAOS — ${city} uchun POS tizimi | Tezcode`,
    description: `${city} (${region}) do'konlari uchun POS tizimi RAOS: kassa, ombor, mijoz, hisobot, ko'p filial va internetsiz (offline-first) ishlash. ${city} va butun O'zbekiston bo'ylab demo, sozlash va qo'llab-quvvatlash.`,
    serviceType: `POS tizimi / do'kon avtomatlashtirish — ${city}`,
  }),
  ru: (city, region) => ({
    name: `RAOS — POS-система для ${city} | Tezcode`,
    description: `POS-система RAOS для магазинов ${city} (${region}): касса, склад, клиенты, отчёты, мультифилиал и работа без интернета (offline-first). Демо, настройка и поддержка в ${city} и по всему Узбекистану.`,
    serviceType: `POS-система / автоматизация магазина — ${city}`,
  }),
  en: (city, region) => ({
    name: `RAOS — POS system for ${city} | Tezcode`,
    description: `RAOS POS system for stores in ${city} (${region}): register, inventory, customers, reports, multi-branch and offline-first operation. Demo, setup and support in ${city} and across Uzbekistan.`,
    serviceType: `POS system / retail automation — ${city}`,
  }),
  ar: (city, region) => ({
    name: `RAOS — نظام POS لـ ${city} | Tezcode`,
    description: `نظام RAOS POS لمتاجر ${city} (${region}): كاشير، مخزون، عملاء، تقارير، فروع متعددة وعمل بدون إنترنت (offline-first). عرض تجريبي وإعداد ودعم في ${city} وكل أوزبكستان.`,
    serviceType: `نظام POS / أتمتة المتجر — ${city}`,
  }),
  uk: (city, region) => ({
    name: `RAOS — POS-система для ${city} | Tezcode`,
    description: `POS-система RAOS для магазинів ${city} (${region}): каса, склад, клієнти, звіти, мультифілія та робота без інтернету (offline-first). Демо, налаштування та підтримка в ${city} і по всьому Узбекистану.`,
    serviceType: `POS-система / автоматизація магазину — ${city}`,
  }),
};

function buildCopyForLocale(
  locale: ServiceLang,
  city: City,
): ServicePageCopy {
  // Deep clone the base copy so we never mutate the shared CONTENT object.
  const base: ServicePageCopy = structuredClone(CONTENT[locale]);
  const cityName = city.name[locale];
  const region = city.region[locale];
  const intro = city.intro[locale];

  // Hero: city-aware title (title1 + accent composed naturally), trust, and
  // prepend the UNIQUE local-market blurb to the subtitle so the distinct text
  // renders prominently in the HTML.
  const heroTitle = HERO_TITLE[locale](cityName);
  base.hero.title1 = heroTitle.title1;
  base.hero.titleAccent = heroTitle.titleAccent;
  base.hero.title2 = "";
  base.hero.trust = CITY_TRUST[locale](cityName);
  base.hero.subtitle = `${intro} ${base.hero.subtitle}`;

  // Examples subtitle = the unique blurb too (second visible placement).
  base.examples.subtitle = intro;

  // Prepend a city-specific FAQ item (also enriches the FAQ schema per city).
  base.faq.items = [CITY_FAQ[locale](cityName), ...base.faq.items];

  // City-aware Service schema text.
  base.service = SERVICE_TEXT[locale](cityName, region);

  return base;
}

export function buildCityContent(city: City): ServicePageContent {
  const locales: ServiceLang[] = ["uz", "ru", "en", "ar", "uk"];
  return locales.reduce((acc, locale) => {
    acc[locale] = buildCopyForLocale(locale, city);
    return acc;
  }, {} as ServicePageContent);
}
