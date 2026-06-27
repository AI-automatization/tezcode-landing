import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import { buildPageMetadata, getFaqSchema, getServiceSchema, getBreadcrumbSchema, BASE_URL } from "@/lib/seo";
import { getCity } from "@/data/cities";
import { buildAiChatbotCityContent } from "./cityContent";

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
  const path = `/ai-chatbot/${city.slug}`;

  const META: Record<ServiceLang, { title: string; description: string; keywords: string[]; ogTitle: string; ogDescription: string }> = {
    uz: {
      title: `AI chatbot ${cityName} — biznes uchun AI yordamchi | Tezcode`,
      description: `${cityName} bizneslari uchun AI chatbot: 24/7 javob, lid saralash, buyurtma qabul qilish. Telegram, Instagram, WhatsApp, veb-sayt. ${cityName} va butun O'zbekiston. Bepul konsultatsiya.`,
      keywords: [`AI chatbot ${cityName}`, `${cityName}da AI chatbot`, `chatbot ${cityName}`, `AI yordamchi ${cityName}`, "AI chatbot O'zbekiston"],
      ogTitle: `${cityName}da biznes uchun AI chatbot — Tezcode`,
      ogDescription: `24/7 javob, lid saralash, buyurtma qabul qilish. Telegram/Instagram/WhatsApp. ${cityName}. Bepul konsultatsiya.`,
    },
    ru: {
      title: `AI чатбот ${cityName} — AI-ассистент для бизнеса | Tezcode`,
      description: `AI-чатбот для бизнеса в ${cityName}: ответы 24/7, квалификация лидов, приём заказов. Telegram, Instagram, WhatsApp, сайт. ${cityName} и весь Узбекистан. Бесплатная консультация.`,
      keywords: [`AI чатбот ${cityName}`, `чатбот для бизнеса ${cityName}`, `ИИ ассистент ${cityName}`, "AI чатбот Узбекистан"],
      ogTitle: `AI-чатбот для бизнеса в ${cityName} — Tezcode`,
      ogDescription: `Ответы 24/7, квалификация лидов, приём заказов. Telegram/Instagram/WhatsApp. ${cityName}. Бесплатная консультация.`,
    },
    en: {
      title: `AI chatbot ${cityName} — AI assistant for business | Tezcode`,
      description: `AI chatbot for businesses in ${cityName}: 24/7 replies, lead qualification, order intake. Telegram, Instagram, WhatsApp, website. ${cityName} and all of Uzbekistan. Free consultation.`,
      keywords: [`AI chatbot ${cityName}`, `chatbot for business ${cityName}`, "AI chatbot Uzbekistan"],
      ogTitle: `AI chatbot for business in ${cityName} — Tezcode`,
      ogDescription: `24/7 replies, lead qualification, order intake. Telegram/Instagram/WhatsApp. ${cityName}. Free consultation.`,
    },
    ar: {
      title: `شات بوت ذكاء اصطناعي ${cityName} — مساعد ذكاء اصطناعي للأعمال | Tezcode`,
      description: `شات بوت ذكاء اصطناعي للشركات في ${cityName}: ردود 24/7، تأهيل العملاء المحتملين، استقبال الطلبات. تيليغرام، إنستغرام، واتساب، موقع. ${cityName} وكل أوزبكستان.`,
      keywords: [`شات بوت ${cityName}`, "شات بوت أوزبكستان"],
      ogTitle: `شات بوت ذكاء اصطناعي للأعمال في ${cityName} — Tezcode`,
      ogDescription: `ردود 24/7، تأهيل العملاء، استقبال الطلبات. ${cityName}. استشارة مجانية.`,
    },
    uk: {
      title: `AI чатбот ${cityName} — AI-асистент для бізнесу | Tezcode`,
      description: `AI-чатбот для бізнесу в ${cityName}: відповіді 24/7, кваліфікація лідів, приймання замовлень. Telegram, Instagram, WhatsApp, сайт. ${cityName} і весь Узбекистан.`,
      keywords: [`AI чатбот ${cityName}`, "AI чатбот Узбекистан"],
      ogTitle: `AI-чатбот для бізнесу в ${cityName} — Tezcode`,
      ogDescription: `Відповіді 24/7, кваліфікація лідів, приймання замовлень. ${cityName}. Безкоштовна консультація.`,
    },
  };

  const m = META[lang];
  return buildPageMetadata({ path, title: m.title, description: m.description, keywords: m.keywords, ogTitle: m.ogTitle, ogDescription: m.ogDescription });
}

export default async function AiChatbotCityPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city: citySlug } = await params;
  if (!ACTIVE_CITY_SLUGS.includes(citySlug)) notFound();
  const city = getCity(citySlug);
  if (!city) notFound();

  const lang = (["uz", "ru", "en", "ar", "uk"].includes(locale) ? locale : "uz") as ServiceLang;
  const content = buildAiChatbotCityContent(city);
  const copy = content[lang] ?? content.uz;
  const path = `/ai-chatbot/${city.slug}`;

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
    { name: "AI chatbot", url: `${BASE_URL}/ai-chatbot` },
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
