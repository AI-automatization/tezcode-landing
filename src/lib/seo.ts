import type { Metadata } from "next";

// Canonical host is www.tezcode.dev; apex tezcode.dev 301-redirects via Squarespace forwarding.
// Railway custom-domain validation only accepts CNAME records on subdomains, not apex.
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.tezcode.dev";

export const LOCALES = ["uz", "ru", "en", "ar", "uk"] as const;
export type Locale = (typeof LOCALES)[number];

export const SITE_NAME = "Tezcode";
export const SITE_TAGLINE = "AI Software Factory";

export function getAlternateUrls(path = "") {
  return LOCALES.reduce(
    (acc, locale) => {
      acc[locale] =
        locale === "uz" ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;
      return acc;
    },
    {} as Record<Locale, string>,
  );
}

export function getOgImageUrl(_params?: {
  title?: string;
  subtitle?: string;
  locale?: string;
}) {
  return `${BASE_URL}/og-image.png`;
}

const KEYWORDS_BASE = [
  "Tezcode",
  "AI",
  "AI agent",
  "AI software factory",
  "biznes avtomatlashtirish",
  "Uzbekistan AI",
  "Toshkent AI",
  "POS dasturi",
  "POS sistema",
  "POS Toshkent",
  "AI Office",
  "RAOS",
  "CoreMed",
  "HamshiraGo",
  "ClinicaGo",
  "klinika boshqaruv",
  "magazin POS",
  "restoran POS",
  "AI biznes yordamchi",
  "custom software Tashkent",
  "no-code biznes dastur",
  "trading bot O'zbek",
  "IT outsource Uzbekistan",
  "software development Uzbekistan",
];

const KEYWORDS_RU = [
  "POS система Узбекистан",
  "Автоматизация бизнеса Ташкент",
  "AI для бизнеса",
  "AI помощник",
  "Управление клиникой",
  "Автоматизация магазина",
  "Software development Узбекистан",
  "Кастомное ПО Ташкент",
  "Tezcode Узбекистан",
  "RAOS POS",
];

const KEYWORDS_EN = [
  "AI software factory Uzbekistan",
  "Tashkent software development",
  "Central Asia AI startup",
  "SaaS POS Uzbekistan",
  "AI agent platform",
  "business automation Uzbekistan",
];

export function getKeywords(locale: string): string[] {
  if (locale === "ru") return [...KEYWORDS_BASE, ...KEYWORDS_RU];
  if (locale === "en") return [...KEYWORDS_BASE, ...KEYWORDS_EN];
  return KEYWORDS_BASE;
}

// Shared metadata builder for sub-pages under app/[locale]/**.
// Centralises canonical, hreflang (incl. x-default), and the OG/Twitter image
// so a per-page `openGraph` block never silently drops the social preview
// (Next.js replaces parent openGraph shallowly when a child defines its own).
export function buildPageMetadata(input: {
  path: string; // e.g. "/hire-developers" (no locale prefix)
  title: Metadata["title"];
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
}): Metadata {
  const url = `${BASE_URL}${input.path}`;
  const ogTitle =
    input.ogTitle ??
    (typeof input.title === "string"
      ? input.title
      : typeof input.title === "object" && input.title && "absolute" in input.title
        ? (input.title.absolute as string)
        : SITE_NAME);
  const ogDescription = input.ogDescription ?? input.description;
  const ogImage = getOgImageUrl();

  return {
    title: input.title,
    description: input.description,
    ...(input.keywords ? { keywords: input.keywords } : {}),
    alternates: {
      canonical: url,
      languages: { ...getAlternateUrls(input.path), "x-default": url },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Tezcode — AI Software Factory",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: ["Tezcode AI", "TezCode"],
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    image: `${BASE_URL}/og-image.png`,
    description:
      "Tezcode — AI Software Factory. Uzbekistan'da kichik biznesdan korporatsiyagacha AI yechimlar yaratamiz. Tayyor mahsulotlar: RAOS (POS), WeWatch (Watch Party), WorkControl, CoreMed (healthtech) va boshqalar.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Bekzod Mirzaaliyev",
      jobTitle: "Founder",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressRegion: "Toshkent",
      addressCountry: "UZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@tezcode.dev",
      url: "https://t.me/webdevelopertk",
      areaServed: ["UZ", "RU", "KZ", "TJ", "KG", "TM"],
      availableLanguage: ["uz", "ru", "en", "ar", "uk"],
    },
    sameAs: [
      "https://t.me/Web_Developers_free",
      "https://t.me/webdevelopertk",
      "https://instagram.com/tezcode.ai/",
      "https://github.com/AI-automatization",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Software Development",
      "POS Systems",
      "Business Automation",
      "SaaS",
      "Custom Development",
    ],
  };
}

export function getWebsiteSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: locale === "uz" ? BASE_URL : `${BASE_URL}/${locale}`,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getProductSchemas() {
  const products = [
    {
      name: "RAOS",
      description: "Savdo dasturi — har do'kon uchun POS, ombor, kassa, mijoz, hisobot",
      url: "https://raos.uz",
      category: "RetailApplication",
    },
    {
      name: "WeWatch",
      description: "Ijtimoiy onlayn kinoteatr — do'stlar bilan sinxron film va video ko'rish (Watch Party), YouTube/Rutube/VK manbalari, real-time chat",
      url: "https://wewatch.uz",
      category: "EntertainmentApplication",
    },
    {
      name: "HamshiraGo",
      description: "Uyga hamshira/medik chaqirish platformasi — ilovadan buyurtma, medik uyga keladi; Salomat AI ovozli tibbiy assistent",
      url: "https://hamshirago.uz",
      category: "HealthApplication",
    },
    {
      name: "ClinicaGo",
      description: "Klinikalar uchun CRM — qabullar, moliya, xodimlar va bemorlarni bitta joydan boshqarish",
      url: "https://app.clinicago.uz",
      category: "HealthApplication",
    },
  ];

  return products.map((p) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    description: p.description,
    url: p.url,
    applicationCategory: p.category,
    operatingSystem: "Web",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "UZS",
    },
  }));
}

// FAQPage structured data. Answer engines (Google AI Overviews, ChatGPT,
// Perplexity) lift Q&A pairs directly from this schema, so feed it the SAME
// items that drive the visible FAQ accordion to keep content and markup in sync.
export function getFaqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

// Service structured data for a single offering page (e.g. AI automation,
// IT services). Answer engines and Google use this to understand WHAT the page
// sells, WHO provides it, and WHERE it is offered — pair it with FAQPage to give
// AI assistants an extractable definition + Q&A for the same service.
export function getServiceSchema(input: {
  name: string;
  description: string;
  serviceType: string;
  path: string; // no locale prefix, e.g. "/ai-avtomatizatsiya"
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: `${BASE_URL}${input.path}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    areaServed: (input.areaServed ?? ["Tashkent", "Uzbekistan"]).map((name) => ({
      "@type": "Place",
      name,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: BASE_URL,
      servicePhone: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://t.me/webdevelopertk",
        email: "hello@tezcode.dev",
      },
    },
  };
}

// Article (BlogPosting) structured data for blog / GEO content. Answer engines
// (ChatGPT, Perplexity, Google AI Overviews) prefer to cite article pages over
// sales pages — this schema tells them the headline, author, publisher and dates
// so the piece is attributable and quotable. Pair with FAQPage + Breadcrumb.
export function getArticleSchema(input: {
  headline: string;
  description: string;
  path: string; // no locale prefix, e.g. "/blog/pos-tizimi-tanlash"
  locale: string;
  datePublished: string; // ISO date, e.g. "2026-06-07"
  dateModified?: string;
  image?: string;
}) {
  const url =
    input.locale === "uz"
      ? `${BASE_URL}${input.path}`
      : `${BASE_URL}/${input.locale}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    inLanguage: input.locale,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: input.image ?? getOgImageUrl(),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.png`,
      },
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
