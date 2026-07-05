import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import { buildPageMetadata, getFaqSchema, getServiceSchema, getBreadcrumbSchema, BASE_URL } from "@/lib/seo";
import { getCity } from "@/data/cities";
import { buildBiznesAvtoCityContent } from "./cityContent";

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
  const path = `/biznes-avtomatlashtirish/${city.slug}`;

  const META: Record<ServiceLang, { title: string; description: string; keywords: string[]; ogTitle: string; ogDescription: string }> = {
    uz: {
      title: `Biznes avtomatlashtirish ${cityName} — jarayonlarni avtomatlashtirish | Tezcode`,
      description: `${cityName} bizneslari uchun jarayon avtomatlashtirish: buyurtma, ombor, CRM, hisobot, to'lov. AI va dasturiy yechimlar. ${cityName} va butun O'zbekiston. Bepul konsultatsiya.`,
      keywords: [
        `biznes avtomatlashtirish ${cityName}`,
        `${cityName}da biznes avtomatlashtirish`,
        `jarayonlarni avtomatlashtirish ${cityName}`,
        `avtomatlashtirish ${cityName}`,
        "biznes avtomatlashtirish O'zbekiston",
      ],
      ogTitle: `${cityName}da biznes jarayonlarini avtomatlashtirish — Tezcode`,
      ogDescription: `Buyurtma, ombor, CRM, hisobot, to'lov — barchasi avtomatik. ${cityName}. Bepul konsultatsiya.`,
    },
    ru: {
      title: `Автоматизация бизнеса ${cityName} — автоматизация процессов | Tezcode`,
      description: `Автоматизация бизнес-процессов для компаний в ${cityName}: заказы, склад, CRM, отчёты, платежи. AI и программные решения. ${cityName} и весь Узбекистан. Бесплатная консультация.`,
      keywords: [
        `автоматизация бизнеса ${cityName}`,
        `автоматизация процессов ${cityName}`,
        `бизнес автоматизация ${cityName}`,
        "автоматизация бизнеса Узбекистан",
      ],
      ogTitle: `Автоматизация бизнеса в ${cityName} — Tezcode`,
      ogDescription: `Заказы, склад, CRM, отчёты, платежи — всё автоматически. ${cityName}. Бесплатная консультация.`,
    },
    en: {
      title: `Business automation ${cityName} — process automation | Tezcode`,
      description: `Business process automation for companies in ${cityName}: orders, inventory, CRM, reports, payments. AI and software solutions. ${cityName} and all of Uzbekistan. Free consultation.`,
      keywords: [
        `business automation ${cityName}`,
        `process automation ${cityName}`,
        "business automation Uzbekistan",
      ],
      ogTitle: `Business process automation in ${cityName} — Tezcode`,
      ogDescription: `Orders, inventory, CRM, reports, payments — all automated. ${cityName}. Free consultation.`,
    },
    ar: {
      title: `أتمتة الأعمال ${cityName} — أتمتة العمليات | Tezcode`,
      description: `أتمتة عمليات الأعمال للشركات في ${cityName}: الطلبات، المخزون، CRM، التقارير، المدفوعات. حلول ذكاء اصطناعي وبرمجية. ${cityName} وكل أوزبكستان.`,
      keywords: [`أتمتة الأعمال ${cityName}`, "أتمتة أوزبكستان"],
      ogTitle: `أتمتة عمليات الأعمال في ${cityName} — Tezcode`,
      ogDescription: `الطلبات، المخزون، CRM، التقارير، المدفوعات — كل شيء تلقائي. ${cityName}.`,
    },
    uk: {
      title: `Автоматизація бізнесу ${cityName} — автоматизація процесів | Tezcode`,
      description: `Автоматизація бізнес-процесів для компаній у ${cityName}: замовлення, склад, CRM, звіти, платежі. AI та програмні рішення. ${cityName} і весь Узбекистан.`,
      keywords: [`автоматизація бізнесу ${cityName}`, "автоматизація бізнесу Узбекистан"],
      ogTitle: `Автоматизація бізнесу в ${cityName} — Tezcode`,
      ogDescription: `Замовлення, склад, CRM, звіти, платежі — все автоматично. ${cityName}.`,
    },
  };

  const m = META[lang];
  return buildPageMetadata({ locale, path, title: m.title, description: m.description, keywords: m.keywords, ogTitle: m.ogTitle, ogDescription: m.ogDescription });
}

export default async function BiznesAvtoCityPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city: citySlug } = await params;
  if (!ACTIVE_CITY_SLUGS.includes(citySlug)) notFound();
  const city = getCity(citySlug);
  if (!city) notFound();

  const lang = (["uz", "ru", "en", "ar", "uk"].includes(locale) ? locale : "uz") as ServiceLang;
  const content = buildBiznesAvtoCityContent(city);
  const copy = content[lang] ?? content.uz;
  const path = `/biznes-avtomatlashtirish/${city.slug}`;

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
    { name: "Biznes avtomatlashtirish", url: `${BASE_URL}/biznes-avtomatlashtirish` },
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
