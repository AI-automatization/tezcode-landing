import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import {
  BASE_URL,
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getHowToSchema,
  getServiceSchema,
} from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/pos-tizimi";

// Localised meta: the title targets "POS tizimi" + the RAOS product name (uz)
// and its ru/en/ar/uk equivalents. The layout template appends " | Tezcode",
// same pattern as /ai-chatbot. Falls back to uz for unknown locales.
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "POS tizimi O'zbekiston — RAOS: kassa, internetsiz ishlaydi",
    description:
      "O'zbekiston do'konlari uchun POS tizimi RAOS: kassa, ombor, mijoz, hisobot, ko'p filial va internetsiz (offline-first) ishlash. Barkod skaner va chek printer bilan. Tezcode — IT Park rezidenti. Toshkent va butun O'zbekiston. Bepul demo.",
    ogTitle: "POS tizimi — RAOS: do'kon uchun kassa dasturi | Tezcode",
    ogDescription:
      "Kassa, ombor, mijoz va hisobot bitta dasturda. Internetsiz ham ishlaydi, ko'p filialni bitta dashboardda birlashtiradi. Bepul demo.",
  },
  ru: {
    title: "POS-система Узбекистан — RAOS: касса, работает без интернета",
    description:
      "POS-система RAOS для магазинов Узбекистана: касса, склад, клиенты, отчёты, мультифилиал и работа без интернета (offline-first). Со сканером штрихкода и чек-принтером. Tezcode — резидент IT Park. Ташкент и весь Узбекистан. Бесплатное демо.",
    ogTitle: "POS-система — RAOS: программа для магазина | Tezcode",
    ogDescription:
      "Касса, склад, клиенты и отчёты в одной программе. Работает без интернета, объединяет филиалы в одном дашборде. Бесплатное демо.",
  },
  en: {
    title: "POS system Uzbekistan — RAOS: register, works offline",
    description:
      "RAOS POS system for stores in Uzbekistan: register, inventory, customers, reports, multi-branch and offline-first operation. Works with barcode scanners and receipt printers. Tezcode — IT Park resident. Tashkent and all of Uzbekistan. Free demo.",
    ogTitle: "POS system — RAOS: retail software for your store | Tezcode",
    ogDescription:
      "Register, inventory, customers and reports in one app. Works offline and unites branches in one dashboard. Free demo.",
  },
  ar: {
    title: "نظام POS أوزبكستان — RAOS: كاشير، يعمل بدون إنترنت",
    description:
      "نظام RAOS POS لمتاجر أوزبكستان: كاشير، مخزون، عملاء، تقارير، فروع متعددة وعمل بدون إنترنت (offline-first). يعمل مع ماسح الباركود وطابعة الإيصالات. Tezcode — مقيم IT Park. طشقند وكل أوزبكستان. عرض تجريبي مجاني.",
    ogTitle: "نظام POS — RAOS: برنامج المتاجر | Tezcode",
    ogDescription:
      "كاشير ومخزون وعملاء وتقارير في برنامج واحد. يعمل بدون إنترنت ويجمع الفروع في لوحة واحدة. عرض تجريبي مجاني.",
  },
  uk: {
    title: "POS-система Узбекистан — RAOS: каса, працює без інтернету",
    description:
      "POS-система RAOS для магазинів Узбекистану: каса, склад, клієнти, звіти, мультифілія і робота без інтернету (offline-first). Зі сканером штрихкоду і чек-принтером. Tezcode — резидент IT Park. Ташкент і весь Узбекистан. Безкоштовне демо.",
    ogTitle: "POS-система — RAOS: програма для магазину | Tezcode",
    ogDescription:
      "Каса, склад, клієнти та звіти в одній програмі. Працює без інтернету, об'єднує філії в одній панелі. Безкоштовне демо.",
  },
};

// Localised name/description for the HowTo JSON-LD built from the visible
// 4-step process — answer engines lift step-by-step processes verbatim.
const HOWTO: Record<ServiceLang, { name: string; description: string }> = {
  uz: {
    name: "RAOS POS tizimini qanday joriy qilamiz — 4 qadam",
    description:
      "Bepul demodan ishlovchi POS tizimigacha: demo, sozlash va ma'lumot ko'chirish, o'rgatish, ishga tushirish va qo'llab-quvvatlash.",
  },
  ru: {
    name: "Как мы внедряем POS-систему RAOS — 4 шага",
    description:
      "От бесплатного демо до рабочей POS-системы: демо, настройка и перенос данных, обучение, запуск и поддержка.",
  },
  en: {
    name: "How we roll out the RAOS POS system — 4 steps",
    description:
      "From a free demo to a working POS system: demo, setup and data migration, training, launch and support.",
  },
  ar: {
    name: "كيف نطبّق نظام RAOS POS — 4 خطوات",
    description:
      "من عرض تجريبي مجاني إلى نظام POS عامل: عرض تجريبي، إعداد ونقل بيانات، تدريب، إطلاق ودعم.",
  },
  uk: {
    name: "Як ми впроваджуємо POS-систему RAOS — 4 кроки",
    description:
      "Від безкоштовного демо до робочої POS-системи: демо, налаштування і перенос даних, навчання, запуск і підтримка.",
  },
};

// Server Component: metadata + JSON-LD are emitted on the server so the
// structured data is in the initial HTML (AI Overviews / ChatGPT / Perplexity
// read SSR markup). The animated UI lives in ServicePageClient.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale as ServiceLang] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: meta.title,
    description: meta.description,
    keywords: [
      "POS tizimi",
      "POS tizimi nima",
      "POS dasturi Toshkent",
      "kassa dasturi",
      "savdo dasturi",
      "do'kon dasturi",
      "do'kon avtomatlashtirish",
      "RAOS POS",
      "ombor dasturi",
      "offline POS O'zbekiston",
      "POS система Узбекистан",
      "POS система Ташкент",
      "программа для магазина Ташкент",
      "программа учета для магазина",
      "касса программа",
      "POS system Uzbekistan",
      "offline POS system Tashkent",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function PosTizimiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = CONTENT[locale as ServiceLang] ?? CONTENT.uz;
  const howToMeta = HOWTO[locale as ServiceLang] ?? HOWTO.uz;

  const serviceSchema = getServiceSchema({
    name: copy.service.name,
    description: copy.service.description,
    serviceType: copy.service.serviceType,
    path: PATH,
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  // BreadcrumbList so answer engines see the page's place in the site
  // hierarchy (Home → POS tizimi) — same SSR JSON-LD pattern as /ai-chatbot.
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.service.name, url: `${BASE_URL}${PATH}` },
  ]);
  // HowTo mirrors the visible 4-step rollout process so "qanday boshlaymiz?"
  // questions can be answered with our exact steps + our name.
  const howToSchema = getHowToSchema({
    name: howToMeta.name,
    description: howToMeta.description,
    path: PATH,
    locale,
    steps: copy.process.steps.map((step) => ({
      name: step.title,
      text: step.desc,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ServicePageClient content={CONTENT} serviceSlug="pos-tizimi" />
    </>
  );
}
