import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import { buildPageMetadata, getFaqSchema, getServiceSchema, getBreadcrumbSchema, BASE_URL } from "@/lib/seo";
import { getCity } from "@/data/cities";
import { buildTelegramBotCityContent } from "./cityContent";

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
  const path = `/telegram-bot-biznes/${city.slug}`;

  const META: Record<ServiceLang, { title: string; description: string; keywords: string[]; ogTitle: string; ogDescription: string }> = {
    uz: {
      title: `Telegram bot ${cityName} — biznes uchun Telegram bot | Tezcode`,
      description: `${cityName} bizneslari uchun Telegram bot: buyurtma, to'lov (Click/Payme), eslatma, CRM integratsiyasi. ${cityName} va butun O'zbekiston. Bepul konsultatsiya.`,
      keywords: [`Telegram bot ${cityName}`, `${cityName}da Telegram bot`, `Telegram bot biznes ${cityName}`, "Telegram bot O'zbekiston"],
      ogTitle: `${cityName}da biznes uchun Telegram bot — Tezcode`,
      ogDescription: `Buyurtma, to'lov, eslatma, CRM. ${cityName}. Bepul konsultatsiya.`,
    },
    ru: {
      title: `Telegram бот ${cityName} — Telegram-бот для бизнеса | Tezcode`,
      description: `Telegram-бот для бизнеса в ${cityName}: заказы, оплата (Click/Payme), напоминания, интеграция с CRM. ${cityName} и весь Узбекистан. Бесплатная консультация.`,
      keywords: [`Telegram бот ${cityName}`, `Telegram-бот для бизнеса ${cityName}`, "Telegram бот Узбекистан"],
      ogTitle: `Telegram-бот для бизнеса в ${cityName} — Tezcode`,
      ogDescription: `Заказы, оплата, напоминания, CRM. ${cityName}. Бесплатная консультация.`,
    },
    en: {
      title: `Telegram bot ${cityName} — Telegram bot for business | Tezcode`,
      description: `Telegram bot for businesses in ${cityName}: orders, payment (Click/Payme), reminders, CRM integration. ${cityName} and all of Uzbekistan. Free consultation.`,
      keywords: [`Telegram bot ${cityName}`, `Telegram bot for business ${cityName}`, "Telegram bot Uzbekistan"],
      ogTitle: `Telegram bot for business in ${cityName} — Tezcode`,
      ogDescription: `Orders, payment, reminders, CRM. ${cityName}. Free consultation.`,
    },
    ar: {
      title: `روبوت تيليغرام ${cityName} — روبوت تيليغرام للأعمال | Tezcode`,
      description: `روبوت تيليغرام للشركات في ${cityName}: طلبات، دفع (Click/Payme)، تذكيرات، تكامل CRM. ${cityName} وكل أوزبكستان.`,
      keywords: [`روبوت تيليغرام ${cityName}`, "روبوت تيليغرام أوزبكستان"],
      ogTitle: `روبوت تيليغرام للأعمال في ${cityName} — Tezcode`,
      ogDescription: `طلبات، دفع، تذكيرات، CRM. ${cityName}.`,
    },
    uk: {
      title: `Telegram бот ${cityName} — Telegram-бот для бізнесу | Tezcode`,
      description: `Telegram-бот для бізнесу в ${cityName}: замовлення, оплата (Click/Payme), нагадування, інтеграція з CRM. ${cityName} і весь Узбекистан.`,
      keywords: [`Telegram бот ${cityName}`, "Telegram бот Узбекистан"],
      ogTitle: `Telegram-бот для бізнесу в ${cityName} — Tezcode`,
      ogDescription: `Замовлення, оплата, нагадування, CRM. ${cityName}.`,
    },
  };

  const m = META[lang];
  return buildPageMetadata({ path, title: m.title, description: m.description, keywords: m.keywords, ogTitle: m.ogTitle, ogDescription: m.ogDescription });
}

export default async function TelegramBotCityPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city: citySlug } = await params;
  if (!ACTIVE_CITY_SLUGS.includes(citySlug)) notFound();
  const city = getCity(citySlug);
  if (!city) notFound();

  const lang = (["uz", "ru", "en", "ar", "uk"].includes(locale) ? locale : "uz") as ServiceLang;
  const content = buildTelegramBotCityContent(city);
  const copy = content[lang] ?? content.uz;
  const path = `/telegram-bot-biznes/${city.slug}`;

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
    { name: "Telegram bot", url: `${BASE_URL}/telegram-bot-biznes` },
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
