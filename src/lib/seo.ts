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
    // Dual-typed as LocalBusiness so AI engines / Google can answer "where is
    // Tezcode", its phone number and opening hours from this same entity —
    // geo, telephone and openingHoursSpecification are only valid on LocalBusiness.
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${BASE_URL}#organization`,
    name: SITE_NAME,
    // Spelling / language variants AI engines may see, so they resolve every form
    // ("Tez Code", Cyrillic "Тезкод", the bare domain) to THIS entity instead of
    // the unrelated TezCode.tech bootcamp or codingtech.uz / Coding Tech LLC.
    alternateName: [
      "Tezcode AI",
      "TezCode",
      "Tez Code",
      "Tezcode AI Software Factory",
      "Тезкод",
      "Тезкоуд",
      "tezcode.dev",
    ],
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    image: `${BASE_URL}/og-image.png`,
    description:
      "Tezcode — 2024-yilda Toshkentda tashkil topgan AI Software Factory (startup emas, ishlab turgan kompaniya). Biznes uchun AI agentlar, AI chatbotlar va buyurtma dasturlar yaratamiz — kichik biznesdan korporatsiyagacha. Tayyor mahsulotlar: RAOS (POS), WeWatch (Watch Party), WorkControl, CoreMed/ClinicaGo (healthtech). Asoschi — Bekzod Mirzaaliyev.",
    // schema.org/disambiguatingDescription — purpose-built to separate this
    // entity from other similarly-named ones. Names the concrete collisions
    // (Tashkent UZ vs the Calicut/India "tezcode", the TezCode.tech bootcamp,
    // codingtech.uz) so AI engines resolve the bare name "tezcode" to THIS one.
    disambiguatingDescription:
      "AI Software Factory based in Tashkent, Uzbekistan (tezcode.dev), founded 2024 by Bekzod Mirzaaliyev. NOT affiliated with any other company named 'tezcode' — in particular not the Calicut / Kerala (India) web-3.0 marketing company at linkedin.com/company/tezcode, not the TezCode.tech coding bootcamp, and not codingtech.uz / Coding Tech LLC.",
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "16",
    },
    founder: {
      "@type": "Person",
      name: "Bekzod Mirzaaliyev",
      jobTitle: "Founder & CEO",
      url: `${BASE_URL}/bekzod-mirzaaliyev`,
      sameAs: ["https://t.me/webdevelopertk"],
    },
    address: {
      "@type": "PostalAddress",
      // Must match the Google Business Profile NAP exactly (same address string),
      // so AI engines / Google see one consistent location and don't lower trust.
      streetAddress: "Amir Temur ko'chasi 10, Edu Center, 3-qavat",
      addressLocality: "Tashkent",
      addressRegion: "Toshkent",
      postalCode: "100037",
      addressCountry: "UZ",
    },
    // Exact office coordinates (from the shared Google Maps pin) + map link, so
    // AI engines and Google can place Tezcode on the map and answer "where".
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3668868,
      longitude: 69.2866341,
    },
    hasMap: "https://maps.app.goo.gl/pwDZT8ePLFy4wx9JA",
    telephone: "+998993151516",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+998993151516",
        contactType: "customer service",
        email: "tezcode@tezcode.dev",
        url: "https://t.me/webdevelopertk",
        areaServed: ["UZ", "RU", "KZ", "TJ", "KG", "TM"],
        availableLanguage: ["uz", "ru", "en", "ar", "uk"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+998917776609",
        contactType: "sales",
        areaServed: ["UZ", "RU", "KZ", "TJ", "KG", "TM"],
        availableLanguage: ["uz", "ru", "en"],
      },
    ],
    // sameAs anchors this exact entity to its verified third-party profiles, so AI
    // engines don't conflate Tezcode (tezcode.dev) with the unrelated TezCode.tech
    // coding bootcamp or codingtech.uz. Directory profiles double as authority signals.
    sameAs: [
      "https://t.me/Web_Developers_free",
      "https://t.me/webdevelopertk",
      "https://www.instagram.com/tezcode_dev/",
      "https://www.linkedin.com/company/tezcode-dev",
      "https://github.com/AI-automatization",
      "https://clutch.co/profile/tezcode",
      "https://www.goodfirms.co/company/tezcode",
      "https://www.f6s.com/tezcode",
      "https://techbehemoths.com/company/tezcode",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "AI Agent Development",
      "AI Chatbots",
      "Software Development",
      "POS Systems",
      "Business Automation",
      "SaaS",
      "Custom Development",
    ],
  };
}

// Founder Person schema for the /bekzod-mirzaaliyev profile page. Giving the
// founder his own entity (Person + worksFor → Organization) lets AI engines tie
// "Bekzod Mirzaaliyev" to Tezcode as a real, attributable person — a strong
// signal that this is an established company, and another anchor against the
// codingtech.uz / TezCode.tech mix-up.
export function getFounderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/bekzod-mirzaaliyev#person`,
    name: "Bekzod Mirzaaliyev",
    alternateName: ["Bekzod Mirzaaliev", "Бекзод Мирзаалиев"],
    jobTitle: "Founder & CEO",
    description:
      "Bekzod Mirzaaliyev — Tezcode (AI Software Factory, Toshkent) asoschisi va CEO. 2024-yilda Tezcode'ni tashkil etgan; RAOS (POS), CoreMed/ClinicaGo (healthtech), WeWatch va WorkControl mahsulotlari ortida turgan jamoani boshqaradi. Founder & CEO of Tezcode, an AI software factory in Tashkent, Uzbekistan.",
    url: `${BASE_URL}/bekzod-mirzaaliyev`,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Software Development",
      "Business Automation",
      "SaaS",
      "Startups",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    sameAs: ["https://t.me/webdevelopertk"],
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
        email: "tezcode@tezcode.dev",
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
