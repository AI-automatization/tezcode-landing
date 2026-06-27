import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import { buildPageMetadata, getFaqSchema, getServiceSchema, getBreadcrumbSchema, BASE_URL } from "@/lib/seo";
import { getCity } from "@/data/cities";
import { buildAiAgentCityContent } from "./cityContent";

// Per-city AI-agent landing pages: /ai-agent/<city>.
// Only the two largest cities for now.
const ACTIVE_CITY_SLUGS = ["toshkent", "samarqand"];

export const dynamicParams = false;

export function generateStaticParams() {
  return ACTIVE_CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  const { locale, city: citySlug } = await params;
  if (!ACTIVE_CITY_SLUGS.includes(citySlug)) return {};
  const city = getCity(citySlug);
  if (!city) return {};

  const lang = (["uz", "ru", "en", "ar", "uk"].includes(locale) ? locale : "uz") as ServiceLang;
  const cityName = city.name[lang] ?? city.name.uz;
  const path = `/ai-agent/${city.slug}`;

  const META: Record<ServiceLang, { title: string; description: string; keywords: string[]; ogTitle: string; ogDescription: string }> = {
    uz: {
      title: `AI agent ${cityName} — biznes uchun AI agent | Tezcode`,
      description: `${cityName} bizneslari uchun AI agent: sotuv agenti, qo'llab-quvvatlash agenti, lid saralash, ichki avtomatlashtirish. CRM/1C/Telegram integratsiyasi. ${cityName} va butun O'zbekiston. Bepul konsultatsiya.`,
      keywords: [
        `AI agent ${cityName}`,
        `${cityName}da AI agent`,
        `biznes uchun AI agent ${cityName}`,
        `sotuv agenti ${cityName}`,
        `AI agent yasash ${cityName}`,
        "AI agent O'zbekiston",
      ],
      ogTitle: `${cityName}da biznes uchun AI agent — Tezcode`,
      ogDescription: `Sotuv, qo'llab-quvvatlash va avtomatlashtirish AI agentlari. CRM/1C/Telegram integratsiyasi, uz/ru. ${cityName}. Bepul konsultatsiya.`,
    },
    ru: {
      title: `AI агент ${cityName} — AI-агент для бизнеса | Tezcode`,
      description: `AI-агент для бизнеса в ${cityName}: агент продаж, агент поддержки, квалификация лидов, внутренняя автоматизация. Интеграция CRM/1С/Telegram. ${cityName} и весь Узбекистан. Бесплатная консультация.`,
      keywords: [
        `AI агент ${cityName}`,
        `AI-агент для бизнеса ${cityName}`,
        `агент продаж ${cityName}`,
        `ИИ агент ${cityName}`,
        "AI агент Узбекистан",
      ],
      ogTitle: `AI-агент для бизнеса в ${cityName} — Tezcode`,
      ogDescription: `Агенты продаж, поддержки и автоматизации. Интеграция CRM/1С/Telegram, uz/ru. ${cityName}. Бесплатная консультация.`,
    },
    en: {
      title: `AI agent ${cityName} — AI agent for business | Tezcode`,
      description: `AI agent for businesses in ${cityName}: sales agent, support agent, lead qualification, internal automation. CRM/1C/Telegram integration. ${cityName} and all of Uzbekistan. Free consultation.`,
      keywords: [
        `AI agent ${cityName}`,
        `AI agent for business ${cityName}`,
        `sales agent ${cityName}`,
        "AI agent Uzbekistan",
      ],
      ogTitle: `AI agent for business in ${cityName} — Tezcode`,
      ogDescription: `Sales, support and automation AI agents. CRM/1C/Telegram integration, uz/ru. ${cityName}. Free consultation.`,
    },
    ar: {
      title: `وكيل ذكاء اصطناعي ${cityName} — وكيل ذكاء اصطناعي للأعمال | Tezcode`,
      description: `وكيل ذكاء اصطناعي للشركات في ${cityName}: وكيل مبيعات، وكيل دعم، تأهيل العملاء المحتملين، أتمتة داخلية. تكامل CRM/1C/Telegram. ${cityName} وكل أوزبكستان. استشارة مجانية.`,
      keywords: [`وكيل ذكاء اصطناعي ${cityName}`, "وكيل ذكاء اصطناعي أوزبكستان"],
      ogTitle: `وكيل ذكاء اصطناعي للأعمال في ${cityName} — Tezcode`,
      ogDescription: `وكلاء مبيعات ودعم وأتمتة. تكامل CRM/1C/Telegram. ${cityName}. استشارة مجانية.`,
    },
    uk: {
      title: `AI агент ${cityName} — AI-агент для бізнесу | Tezcode`,
      description: `AI-агент для бізнесу в ${cityName}: агент продажів, агент підтримки, кваліфікація лідів, внутрішня автоматизація. Інтеграція CRM/1С/Telegram. ${cityName} і весь Узбекистан. Безкоштовна консультація.`,
      keywords: [`AI агент ${cityName}`, "AI агент Узбекистан"],
      ogTitle: `AI-агент для бізнесу в ${cityName} — Tezcode`,
      ogDescription: `Агенти продажів, підтримки та автоматизації. Інтеграція CRM/1С/Telegram. ${cityName}. Безкоштовна консультація.`,
    },
  };

  const m = META[lang];
  return buildPageMetadata({ path, title: m.title, description: m.description, keywords: m.keywords, ogTitle: m.ogTitle, ogDescription: m.ogDescription });
}

export default async function AiAgentCityPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city: citySlug } = await params;
  if (!ACTIVE_CITY_SLUGS.includes(citySlug)) notFound();
  const city = getCity(citySlug);
  if (!city) notFound();

  const lang = (["uz", "ru", "en", "ar", "uk"].includes(locale) ? locale : "uz") as ServiceLang;
  const content = buildAiAgentCityContent(city);
  const copy = content[lang] ?? content.uz;
  const path = `/ai-agent/${city.slug}`;

  const serviceSchema = getServiceSchema({
    name: copy.service.name,
    description: copy.service.description,
    serviceType: copy.service.serviceType,
    path,
    areaServed: [city.name[lang], city.region[lang], "Uzbekistan"],
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "AI agent", url: `${BASE_URL}/ai-agent` },
    { name: city.name[lang], url: `${BASE_URL}${path}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageClient content={content} />
    </>
  );
}
