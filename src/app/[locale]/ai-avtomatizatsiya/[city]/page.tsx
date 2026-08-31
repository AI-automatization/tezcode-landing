import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import { buildPageMetadata, getFaqSchema, getServiceSchema } from "@/lib/seo";
import { getCity } from "@/data/cities";
import { buildCityContent } from "../cityContent";

// Dynamic per-city AI-automation landing pages: /ai-avtomatizatsiya/<city>.
// Mirrors ../page.tsx (the base /ai-avtomatizatsiya) but injects a unique, per-city
// AI-automation intro + city-aware Service & FAQ JSON-LD so each page is genuinely
// distinct (no thin "doorway page" duplication). Statically generated at build time
// via generateStaticParams — params are a Promise per this repo's Next.js, awaited.

// Only the city slugs we ship — unknown cities 404 instead of rendering thin pages.
export const dynamicParams = false;

// Only Tashkent + Samarkand ship live pages. The other 10 city slugs (still in
// the CITIES data) were thin template duplicates — same copy, city name swapped —
// that Google discovered but refused to index. getCity() alone still resolves
// them, so we gate on this allowlist everywhere to 404 the doorway pages and let
// Google drop them.
const ACTIVE_CITIES = ["toshkent", "samarqand"];

// The parent [locale] segment fans out locales; this child fans out city slugs.
export function generateStaticParams() {
  return ACTIVE_CITIES.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}): Promise<Metadata> {
  const { locale, city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city || !ACTIVE_CITIES.includes(citySlug)) return {};

  const lang = (["uz", "ru", "en", "ar", "uk"].includes(locale)
    ? locale
    : "uz") as ServiceLang;
  const cityName = city.name[lang];
  const path = `/ai-avtomatizatsiya/${city.slug}`;

  const META: Record<
    ServiceLang,
    { title: string; description: string; keywords: string[]; ogTitle: string; ogDescription: string }
  > = {
    uz: {
      title: `AI avtomatizatsiya ${cityName} — biznesni sun'iy intellekt bilan avtomatlashtirish | Tezcode`,
      description: `${cityName} bizneslari uchun AI avtomatizatsiya: AI chatbot, avtomatik hisobot, sotuv va hujjat jarayonlarini avtomatlashtirish. ${cityName} va butun O'zbekiston. Bepul 30 daqiqa konsultatsiya.`,
      keywords: [
        `AI avtomatizatsiya ${cityName}`,
        `sun'iy intellekt ${cityName}`,
        `biznes avtomatlashtirish ${cityName}`,
        `AI chatbot ${cityName}`,
        `AI agent ${cityName}`,
        "AI yechim O'zbekiston",
      ],
      ogTitle: `${cityName}da biznesni AI bilan avtomatlashtiring`,
      ogDescription: `AI chatbot, avtomatik hisobot, sotuv va ombor avtomatizatsiyasi — biznesingizga moslab. ${cityName} va butun O'zbekiston. Bepul konsultatsiya.`,
    },
    ru: {
      title: `ИИ-автоматизация ${cityName} — автоматизация бизнеса с искусственным интеллектом | Tezcode`,
      description: `ИИ-автоматизация для бизнеса ${cityName}: ИИ-чатбот, автоматические отчёты, автоматизация продаж и работы с документами. ${cityName} и весь Узбекистан. Бесплатная 30-минутная консультация.`,
      keywords: [
        `ИИ-автоматизация ${cityName}`,
        `искусственный интеллект ${cityName}`,
        `автоматизация бизнеса ${cityName}`,
        `ИИ-чатбот ${cityName}`,
        `ИИ для бизнеса ${cityName}`,
        "ИИ-решение Узбекистан",
      ],
      ogTitle: `Автоматизируйте бизнес в ${cityName} с помощью ИИ`,
      ogDescription: `ИИ-чатбот, автоматические отчёты, автоматизация продаж и склада — под ваш бизнес. ${cityName} и весь Узбекистан. Бесплатная консультация.`,
    },
    en: {
      title: `AI automation ${cityName} — automate your business with AI | Tezcode`,
      description: `AI automation for businesses in ${cityName}: AI chatbot, automatic reports, sales and document workflow automation. ${cityName} and all of Uzbekistan. Free 30-min consultation.`,
      keywords: [
        `AI automation ${cityName}`,
        `artificial intelligence ${cityName}`,
        `business automation ${cityName}`,
        `AI chatbot ${cityName}`,
        `AI agent ${cityName}`,
        "AI solution Uzbekistan",
      ],
      ogTitle: `Automate your business in ${cityName} with AI`,
      ogDescription: `AI chatbot, automatic reports, sales and inventory automation — tailored to your business. ${cityName} and all of Uzbekistan. Free consultation.`,
    },
    ar: {
      title: `أتمتة الذكاء الاصطناعي ${cityName} — أتمتة عملك بالذكاء الاصطناعي | Tezcode`,
      description: `أتمتة الذكاء الاصطناعي لشركات ${cityName}: شات بوت ذكي، تقارير تلقائية، أتمتة المبيعات وسير عمل المستندات. ${cityName} وكل أوزبكستان. استشارة مجانية 30 دقيقة.`,
      keywords: [
        `أتمتة الذكاء الاصطناعي ${cityName}`,
        `الذكاء الاصطناعي ${cityName}`,
        `أتمتة الأعمال ${cityName}`,
        `شات بوت ذكي ${cityName}`,
        `وكيل ذكاء اصطناعي ${cityName}`,
        "حل ذكاء اصطناعي أوزبكستان",
      ],
      ogTitle: `أتمت عملك في ${cityName} بالذكاء الاصطناعي`,
      ogDescription: `شات بوت ذكي، تقارير تلقائية، أتمتة المبيعات والمخزون — مصمم لعملك. ${cityName} وكل أوزبكستان. استشارة مجانية.`,
    },
    uk: {
      title: `AI-автоматизація ${cityName} — автоматизація бізнесу зі штучним інтелектом | Tezcode`,
      description: `AI-автоматизація для бізнесу ${cityName}: AI-чатбот, автоматичні звіти, автоматизація продажів і роботи з документами. ${cityName} і весь Узбекистан. Безкоштовна 30-хвилинна консультація.`,
      keywords: [
        `AI автоматизація ${cityName}`,
        `штучний інтелект ${cityName}`,
        `автоматизація бізнесу ${cityName}`,
        `AI чатбот ${cityName}`,
        `AI агент ${cityName}`,
        "AI рішення Узбекистан",
      ],
      ogTitle: `Автоматизуйте бізнес у ${cityName} за допомогою AI`,
      ogDescription: `AI-чатбот, автоматичні звіти, автоматизація продажів і складу — під ваш бізнес. ${cityName} і весь Узбекистан. Безкоштовна консультація.`,
    },
  };

  const m = META[lang];
  return buildPageMetadata({
    locale,
    path,
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    ogTitle: m.ogTitle,
    ogDescription: m.ogDescription,
  });
}

export default async function AiAvtomatizatsiyaCityPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city || !ACTIVE_CITIES.includes(citySlug)) notFound();

  const lang = (["uz", "ru", "en", "ar", "uk"].includes(locale)
    ? locale
    : "uz") as ServiceLang;

  const content = buildCityContent(city);
  const copy = content[lang] ?? content.uz;
  const path = `/ai-avtomatizatsiya/${city.slug}`;

  const serviceSchema = getServiceSchema({
    name: copy.service.name,
    description: copy.service.description,
    serviceType: copy.service.serviceType,
    path,
    // City-aware areaServed: the specific city + region, then country.
    areaServed: [city.name[lang], city.region[lang], "Uzbekistan"],
  });
  const faqSchema = getFaqSchema(copy.faq.items);

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
      <ServicePageClient content={content} />
    </>
  );
}
