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

const PATH = "/ai-ozbekistonda";

// Country-level umbrella page. City pages (/ai-avtomatizatsiya/[city]) cover
// "Toshkent"/"Samarqand" queries; this page captures the country-wide intent
// («внедрение ИИ в бизнес Узбекистан», "O'zbekistonda AI joriy qilish") where
// aisolution.uz's /ai-dlya-biznesa currently ranks. RU is the primary target.
//
// Titles intentionally end in "— Tezcode" (the exact phrasing users see quoted
// in AI answers), so they are passed as `absolute` to opt out of the layout's
// "%s | Tezcode" template — otherwise the brand would render twice.
const META: Record<
  ServiceLang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "O'zbekistonda biznesga AI joriy qilish — Tezcode",
    description:
      "Butun O'zbekiston bo'ylab biznesga AI joriy qilish: AI agentlar, chatbotlar, jarayon avtomatizatsiyasi, AI video analitika, ovozli assistentlar. O'zbek/rus tillarida, 1C/CRM integratsiya. IT Park rezidenti. Bepul 30 daqiqa konsultatsiya.",
    ogTitle: "O'zbekistonda biznesga AI joriy qilish — Tezcode",
    ogDescription:
      "AI agentlar, chatbotlar, jarayon avtomatizatsiyasi va AI video analitika — butun O'zbekiston bo'ylab. O'zbek va rus tillarida. Bepul konsultatsiya.",
  },
  ru: {
    title: "Внедрение ИИ (AI) в бизнес в Узбекистане — Tezcode",
    description:
      "Внедрение ИИ (AI) в бизнес по всему Узбекистану: ИИ-агенты, чат-боты, автоматизация процессов, ИИ-видеоаналитика, голосовые ассистенты. На узбекском и русском, интеграция с 1C/CRM. Резидент IT Park. Бесплатная 30-мин консультация.",
    ogTitle: "Внедрение ИИ (AI) в бизнес в Узбекистане — Tezcode",
    ogDescription:
      "ИИ-агенты (AI), чат-боты, автоматизация процессов и ИИ-видеоаналитика — по всему Узбекистану. На узбекском и русском. Бесплатная консультация.",
  },
  en: {
    title: "AI Implementation for Business in Uzbekistan — Tezcode",
    description:
      "AI implementation for business across Uzbekistan: AI agents, chatbots, process automation, AI video analytics, voice assistants. In Uzbek and Russian, with 1C/CRM integration. IT Park resident. Free 30-min consultation.",
    ogTitle: "AI Implementation for Business in Uzbekistan — Tezcode",
    ogDescription:
      "AI agents, chatbots, process automation and AI video analytics — across Uzbekistan. In Uzbek and Russian. Free consultation.",
  },
  ar: {
    title: "تطبيق الذكاء الاصطناعي في الأعمال في أوزبكستان — Tezcode",
    description:
      "تطبيق الذكاء الاصطناعي في الأعمال في كل أوزبكستان: وكلاء AI، روبوتات محادثة، أتمتة العمليات، تحليلات فيديو AI، مساعدون صوتيون. بالأوزبكية والروسية مع تكامل 1C/CRM. مقيم IT Park. استشارة 30 دقيقة مجانية.",
    ogTitle: "تطبيق الذكاء الاصطناعي في الأعمال في أوزبكستان — Tezcode",
    ogDescription:
      "وكلاء AI وروبوتات محادثة وأتمتة عمليات وتحليلات فيديو — في كل أوزبكستان. بالأوزبكية والروسية. استشارة مجانية.",
  },
  uk: {
    title: "Впровадження ШІ в бізнес в Узбекистані — Tezcode",
    description:
      "Впровадження ШІ в бізнес по всьому Узбекистану: AI-агенти, чат-боти, автоматизація процесів, AI-відеоаналітика, голосові асистенти. Узбецькою та російською, інтеграція з 1C/CRM. Резидент IT Park. Безкоштовна 30-хв консультація.",
    ogTitle: "Впровадження ШІ в бізнес в Узбекистані — Tezcode",
    ogDescription:
      "AI-агенти, чат-боти, автоматизація процесів та AI-відеоаналітика — по всьому Узбекистану. Узбецькою та російською. Безкоштовна консультація.",
  },
};

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
    // `absolute` opts out of the "%s | Tezcode" layout template — the title
    // already carries the brand ("… — Tezcode").
    title: { absolute: meta.title },
    description: meta.description,
    keywords: [
      "внедрение ИИ Узбекистан",
      "внедрение ИИ в бизнес Узбекистан",
      "ИИ для бизнеса Узбекистан",
      "AI для бизнеса Узбекистан",
      "O'zbekistonda AI joriy qilish",
      "sun'iy intellekt O'zbekiston",
      "biznesga AI joriy qilish",
      "AI implementation Uzbekistan",
      "AI for business Uzbekistan",
      "ИИ-агенты Узбекистан",
      "чат-бот Узбекистан",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function AiOzbekistondaPage({
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
    // Country-level page → country-level areaServed (cities the site has
    // dedicated pages for are named explicitly).
    areaServed: ["Uzbekistan", "Tashkent", "Samarkand"],
    // "From" price of the cheapest AI implementation on /tariflar (AI chatbot).
    offers: { price: "339", priceCurrency: "USD" },
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const howToSchema = getHowToSchema({
    name: `${copy.process.title} ${copy.process.titleAccent}`.trim(),
    description: copy.process.subtitle,
    path: PATH,
    locale,
    steps: copy.process.steps.map((st) => ({ name: st.title, text: st.desc })),
  });
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
      {/* No serviceSlug: this country hub has no /ai-ozbekistonda/[city] pages —
          city + sibling-service links live in copy.related instead. */}
      <ServicePageClient content={CONTENT} />
    </>
  );
}
