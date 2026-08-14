import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageClient } from "@/components/service-page/ServicePageClient";
import type { ServiceLang } from "@/components/service-page/types";
import { buildPageMetadata, getFaqSchema, getServiceSchema } from "@/lib/seo";
import { getCity } from "@/data/cities";
import { buildCityContent } from "../cityContent";

// Dynamic per-city POS landing pages: /pos-tizimi/<city>.
// Mirrors ../page.tsx (the base /pos-tizimi) but injects unique, per-city local
// content + city-aware Service & FAQ JSON-LD so each page is genuinely distinct
// (no thin "doorway page" duplication). Statically generated at build time via
// generateStaticParams — params are a Promise per this repo's Next.js, awaited.

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
  const path = `/pos-tizimi/${city.slug}`;

  const META: Record<
    ServiceLang,
    { title: string; description: string; keywords: string[]; ogTitle: string; ogDescription: string }
  > = {
    uz: {
      title: `POS tizimi ${cityName} — RAOS: kassa, ombor, internetsiz ishlaydi | Tezcode`,
      description: `${cityName} do'konlari uchun POS tizimi RAOS: kassa, ombor, mijoz, hisobot, ko'p filial va internetsiz (offline-first) ishlash. ${cityName} va butun O'zbekiston. Bepul demo.`,
      keywords: [
        `POS tizimi ${cityName}`,
        `kassa dasturi ${cityName}`,
        `do'kon dasturi ${cityName}`,
        `POS dasturi ${cityName}`,
        "RAOS POS",
        "ombor dasturi",
      ],
      ogTitle: `RAOS — ${cityName} do'konlari uchun POS tizimi`,
      ogDescription: `Kassa, ombor, mijoz, hisobot bitta dasturda. Internetsiz ham ishlaydi. ${cityName} va butun O'zbekiston. Bepul demo.`,
    },
    ru: {
      title: `POS-система ${cityName} — RAOS: касса, склад, работает без интернета | Tezcode`,
      description: `POS-система RAOS для магазинов ${cityName}: касса, склад, клиенты, отчёты, мультифилиал и работа без интернета (offline-first). ${cityName} и весь Узбекистан. Бесплатное демо.`,
      keywords: [
        `POS система ${cityName}`,
        `касса программа ${cityName}`,
        `программа для магазина ${cityName}`,
        "RAOS POS",
        "программа склада",
      ],
      ogTitle: `RAOS — POS-система для магазинов ${cityName}`,
      ogDescription: `Касса, склад, клиенты, отчёты в одной программе. Работает без интернета. ${cityName} и весь Узбекистан. Бесплатное демо.`,
    },
    en: {
      title: `POS system ${cityName} — RAOS: register, inventory, works offline | Tezcode`,
      description: `RAOS POS system for stores in ${cityName}: register, inventory, customers, reports, multi-branch and offline-first operation. ${cityName} and all of Uzbekistan. Free demo.`,
      keywords: [
        `POS system ${cityName}`,
        `cash register software ${cityName}`,
        `retail software ${cityName}`,
        "RAOS POS",
        "inventory software",
      ],
      ogTitle: `RAOS — POS system for stores in ${cityName}`,
      ogDescription: `Register, inventory, customers, reports in one app. Works offline. ${cityName} and all of Uzbekistan. Free demo.`,
    },
    ar: {
      title: `نظام POS ${cityName} — RAOS: كاشير، مخزون، يعمل بدون إنترنت | Tezcode`,
      description: `نظام RAOS POS لمتاجر ${cityName}: كاشير، مخزون، عملاء، تقارير، فروع متعددة وعمل بدون إنترنت (offline-first). ${cityName} وكل أوزبكستان. عرض تجريبي مجاني.`,
      keywords: [
        `نظام POS ${cityName}`,
        `برنامج كاشير ${cityName}`,
        `برنامج متجر ${cityName}`,
        "RAOS POS",
        "برنامج مخزون",
      ],
      ogTitle: `RAOS — نظام POS لمتاجر ${cityName}`,
      ogDescription: `كاشير ومخزون وعملاء وتقارير في برنامج واحد. يعمل بدون إنترنت. ${cityName} وكل أوزبكستان. عرض تجريبي مجاني.`,
    },
    uk: {
      title: `POS-система ${cityName} — RAOS: каса, склад, працює без інтернету | Tezcode`,
      description: `POS-система RAOS для магазинів ${cityName}: каса, склад, клієнти, звіти, мультифілія та робота без інтернету (offline-first). ${cityName} і весь Узбекистан. Безкоштовне демо.`,
      keywords: [
        `POS система ${cityName}`,
        `програма каси ${cityName}`,
        `програма для магазину ${cityName}`,
        "RAOS POS",
        "програма складу",
      ],
      ogTitle: `RAOS — POS-система для магазинів ${cityName}`,
      ogDescription: `Каса, склад, клієнти, звіти в одній програмі. Працює без інтернету. ${cityName} і весь Узбекистан. Безкоштовне демо.`,
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

export default async function PosTizimiCityPage({
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
  const path = `/pos-tizimi/${city.slug}`;

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
