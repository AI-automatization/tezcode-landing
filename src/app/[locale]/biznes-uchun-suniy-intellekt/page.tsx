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

const PATH = "/biznes-uchun-suniy-intellekt";

const META: Record<ServiceLang, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  uz: {
    title: "Biznes uchun sun'iy intellekt — AI yechimlar | Tezcode",
    description:
      "Biznes uchun sun'iy intellekt: AI agentlar, chatbotlar, avtomatizatsiya, video analitika va CRM/1C integratsiyasi. Toshkent, O'zbekiston va global loyihalar. Bepul konsultatsiya.",
    ogTitle: "Biznes uchun sun'iy intellekt — Tezcode",
    ogDescription: "Biznesingizga mos AI agent, chatbot, avtomatizatsiya va integratsiya yechimlari.",
  },
  ru: {
    title: "Искусственный интеллект для бизнеса — AI-решения | Tezcode",
    description:
      "ИИ для бизнеса: AI-агенты, чат-боты, автоматизация, видеоаналитика и интеграция CRM/1С. Ташкент, Узбекистан и международные проекты. Бесплатная консультация.",
    ogTitle: "ИИ для бизнеса — Tezcode",
    ogDescription: "AI-агенты, чат-боты, автоматизация и интеграции для вашего бизнеса.",
  },
  en: {
    title: "Artificial Intelligence for Business — AI Solutions | Tezcode",
    description:
      "AI for business: agents, chatbots, process automation, video analytics and CRM/1C integration. From Tashkent to Uzbekistan and global projects. Free consultation.",
    ogTitle: "AI for Business — Tezcode",
    ogDescription: "Business AI agents, chatbots, automation and system integrations.",
  },
  ar: {
    title: "الذكاء الاصطناعي للأعمال — حلول AI | Tezcode",
    description:
      "حلول الذكاء الاصطناعي للأعمال: وكلاء AI وروبوتات محادثة وأتمتة وتحليلات فيديو وتكامل CRM و1C. استشارة مجانية.",
    ogTitle: "الذكاء الاصطناعي للأعمال — Tezcode",
    ogDescription: "وكلاء AI وروبوتات محادثة وأتمتة وتكاملات لنشاطك التجاري.",
  },
  uk: {
    title: "Штучний інтелект для бізнесу — AI-рішення | Tezcode",
    description:
      "AI для бізнесу: агенти, чат-боти, автоматизація, відеоаналітика та інтеграція CRM/1C. Безкоштовна консультація.",
    ogTitle: "AI для бізнесу — Tezcode",
    ogDescription: "AI-агенти, чат-боти, автоматизація та інтеграції для бізнесу.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = META[locale as ServiceLang] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: { absolute: meta.title },
    description: meta.description,
    keywords: [
      "biznes uchun sun'iy intellekt",
      "biznesim uchun sun'iy intellekt",
      "sun'iy intellekt xizmatlari biznes uchun",
      "biznes uchun AI yechimlar",
      "AI for business Uzbekistan",
      "ИИ для бизнеса Узбекистан",
    ],
    ogTitle: meta.ogTitle,
    ogDescription: meta.ogDescription,
  });
}

export default async function BusinessAiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = CONTENT[locale as ServiceLang] ?? CONTENT.uz;
  const serviceSchema = {
    ...getServiceSchema({
      name: copy.service.name,
      description: copy.service.description,
      serviceType: copy.service.serviceType,
      path: PATH,
      areaServed: ["Tashkent", "Uzbekistan", "Worldwide"],
      offers: { price: "279", priceCurrency: "USD" },
    }),
    audience: { "@type": "BusinessAudience", audienceType: "Businesses and organizations" },
    category: ["Artificial intelligence", "Business automation", "AI agents", "AI chatbots"],
  };
  const faqSchema = getFaqSchema(copy.faq.items);
  const howToSchema = getHowToSchema({
    name: `${copy.process.title} ${copy.process.titleAccent}`.trim(),
    description: copy.process.subtitle,
    path: PATH,
    locale,
    steps: copy.process.steps.map((step) => ({ name: step.title, text: step.desc })),
  });
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: copy.service.name, url: `${BASE_URL}${PATH}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageClient content={CONTENT} />
    </>
  );
}
