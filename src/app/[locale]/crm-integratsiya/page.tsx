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

const PATH = "/crm-integratsiya";

// Localised meta: targets "CRM integratsiya Toshkent" (uz), "интеграция CRM
// Ташкент" (ru), "CRM integration Tashkent" (en) — the exact intents this page
// competes for against tipa.uz / iota.uz / icorp.uz. Falls back to uz.
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "CRM integratsiya — Toshkent",
    description:
      "CRM integratsiya Toshkentda $700 dan: amoCRM, Bitrix24, HubSpot, 1C va Sales Doctor ni Telegram, Instagram, WhatsApp, sayt va telefoniya bilan ulash, voronka sozlash, ma'lumot ko'chirish. IT Park rezidenti Tezcode. Bepul konsultatsiya, to'lov 30% oldindan.",
    ogTitle: "CRM integratsiya — Toshkent | Tezcode",
    ogDescription:
      "amoCRM, Bitrix24, HubSpot, 1C, Sales Doctor — barcha kanallarni bitta CRM'ga ulaymiz, voronka sozlaymiz, bazani ko'chiramiz. $700 dan. Bepul konsultatsiya.",
  },
  ru: {
    title: "Интеграция CRM — Ташкент",
    description:
      "Интеграция CRM в Ташкенте от $700: подключение amoCRM, Bitrix24, HubSpot, 1C и Sales Doctor к Telegram, Instagram, WhatsApp, сайту и телефонии, настройка воронки, миграция данных. Tezcode — резидент IT Park. Бесплатная консультация, оплата 30% предоплата.",
    ogTitle: "Интеграция CRM — Ташкент | Tezcode",
    ogDescription:
      "amoCRM, Bitrix24, HubSpot, 1C, Sales Doctor — подключаем все каналы к одной CRM, настраиваем воронку, переносим базу. От $700. Бесплатная консультация.",
  },
  en: {
    title: "CRM integration — Tashkent",
    description:
      "CRM integration in Tashkent from $700: connecting amoCRM, Bitrix24, HubSpot, 1C and Sales Doctor to Telegram, Instagram, WhatsApp, website and telephony, pipeline setup, data migration. Tezcode — IT Park resident. Free consultation, 30% upfront payment.",
    ogTitle: "CRM integration — Tashkent | Tezcode",
    ogDescription:
      "amoCRM, Bitrix24, HubSpot, 1C, Sales Doctor — we connect all channels to one CRM, set up the pipeline, migrate your base. From $700. Free consultation.",
  },
  ar: {
    title: "تكامل CRM — طشقند",
    description:
      "تكامل CRM في طشقند من $700: ربط amoCRM وBitrix24 وHubSpot و1C وSales Doctor بـ Telegram وInstagram وWhatsApp والموقع والهاتف، إعداد المسار، نقل البيانات. Tezcode — مقيم IT Park. استشارة مجانية، الدفع 30% مقدمًا.",
    ogTitle: "تكامل CRM — طشقند | Tezcode",
    ogDescription:
      "amoCRM وBitrix24 وHubSpot و1C وSales Doctor — نربط كل القنوات بنظام CRM واحد، نعدّ المسار، ننقل قاعدتك. من $700. استشارة مجانية.",
  },
  uk: {
    title: "Інтеграція CRM — Ташкент",
    description:
      "Інтеграція CRM у Ташкенті від $700: підключення amoCRM, Bitrix24, HubSpot, 1C та Sales Doctor до Telegram, Instagram, WhatsApp, сайту та телефонії, налаштування воронки, міграція даних. Tezcode — резидент IT Park. Безкоштовна консультація, оплата 30% передоплата.",
    ogTitle: "Інтеграція CRM — Ташкент | Tezcode",
    ogDescription:
      "amoCRM, Bitrix24, HubSpot, 1C, Sales Doctor — підключаємо всі канали до однієї CRM, налаштовуємо воронку, переносимо базу. Від $700. Безкоштовна консультація.",
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
      "CRM integratsiya",
      "CRM integratsiya Toshkent",
      "amoCRM ulash",
      "Bitrix24 integratsiya Toshkent",
      "1C CRM integratsiya",
      "Sales Doctor CRM",
      "CRM sozlash O'zbekiston",
      "интеграция CRM Ташкент",
      "внедрение CRM Ташкент",
      "amoCRM Bitrix24 внедрение Узбекистан",
      "CRM integration Tashkent",
      "CRM integration Uzbekistan",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function CrmIntegratsiyaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = CONTENT[locale as ServiceLang] ?? CONTENT.uz;

  const serviceSchema = getServiceSchema({
    name: copy.service.name,
    description: copy.service.description,
    serviceType: copy.service.serviceType,
    path: PATH,
    offers: { price: "700", priceCurrency: "USD" },
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const howToSchema = getHowToSchema({
    name: `${copy.process.title} ${copy.process.titleAccent}`.trim(),
    description: copy.process.subtitle,
    path: PATH,
    locale,
    steps: copy.process.steps.map((st) => ({ name: st.title, text: st.desc })),
  });
  // BreadcrumbList so answer engines see the page's place in the site
  // hierarchy (Home → CRM integration).
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.service.name, url: `${BASE_URL}${PATH}` },
  ]);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ServicePageClient content={CONTENT} serviceSlug="crm-integratsiya" />
    </>
  );
}
