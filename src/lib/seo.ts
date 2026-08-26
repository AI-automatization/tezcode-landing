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

// The OG protocol wants full language_TERRITORY codes ("uz_UZ"), not bare
// language tags — Facebook/LinkedIn ignore malformed og:locale values.
const OG_LOCALES: Record<Locale, string> = {
  uz: "uz_UZ",
  ru: "ru_RU",
  en: "en_US",
  ar: "ar_AE",
  uk: "uk_UA",
};

export function getOgLocale(locale: string) {
  return OG_LOCALES[locale as Locale] ?? OG_LOCALES.uz;
}

export function getOgAlternateLocales(locale: string) {
  return LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALES[l]);
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
  locale?: string; // current locale — canonical/og:url must point at THIS locale's URL
  // Locales this page actually has translated meta/content for. When the
  // current locale is NOT listed, the page is an uz fallback served on a
  // localized URL — its canonical must point at the uz original, otherwise
  // Bing/Google see dozens of URLs sharing identical titles/descriptions
  // ("too many pages with identical titles" in Bing Webmaster Tools).
  availableLocales?: readonly string[];
}): Metadata {
  const locale = input.locale ?? "uz";
  const isFallback =
    input.availableLocales !== undefined &&
    locale !== "uz" &&
    !input.availableLocales.includes(locale);
  // Locale-aware canonical: /ru/... pages must declare /ru/... as canonical,
  // never the uz URL, or search engines drop the localized page from the index.
  // Exception: untranslated fallback locales canonicalize to the uz original.
  const canonicalLocale = isFallback ? "uz" : locale;
  const url =
    canonicalLocale === "uz"
      ? `${BASE_URL}${input.path}`
      : `${BASE_URL}/${canonicalLocale}${input.path}`;
  const ogTitle =
    input.ogTitle ??
    (typeof input.title === "string"
      ? input.title
      : typeof input.title === "object" && input.title && "absolute" in input.title
        ? (input.title.absolute as string)
        : SITE_NAME);
  const ogDescription = input.ogDescription ?? input.description;
  const ogImage = getOgImageUrl();
  // The [locale] layout applies a "%s | Tezcode" title template. Page titles
  // that already end in "| Tezcode" must opt out via `absolute`, or they
  // render as "… | Tezcode | Tezcode" in the SERP.
  const title =
    typeof input.title === "string" && /\|\s*Tezcode\s*$/.test(input.title)
      ? ({ absolute: input.title } as Metadata["title"])
      : input.title;

  return {
    title,
    description: input.description,
    ...(input.keywords ? { keywords: input.keywords } : {}),
    alternates: {
      canonical: url,
      // x-default always points at the unprefixed uz URL regardless of locale.
      languages: {
        ...getAlternateUrls(input.path),
        "x-default": `${BASE_URL}${input.path}`,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: SITE_NAME,
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
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

// Organization description per locale — the entity is one, but its description
// should match the page language (a Russian/English page carrying an Uzbek org
// description reads as untranslated boilerplate to search/AI engines).
const ORG_DESCRIPTIONS: Partial<Record<Locale, string>> = {
  uz: "TezCode — AI Software Factory. Toshkentda biznes uchun AI avtomatlashtirish: AI agentlar, chatbotlar va jarayonlar avtomatizatsiyasi. 2024-yilda tashkil topgan (startup emas, ishlab turgan kompaniya); buyurtma dasturlar ham yaratamiz — kichik biznesdan korporatsiyagacha. Tayyor mahsulotlar: RAOS (POS), WeWatch (Watch Party), WorkControl, CoreMed/ClinicaGo (healthtech). Asoschi — Bekzod Mirzaaliyev.",
  ru: "TezCode — AI Software Factory. AI-автоматизация бизнеса в Ташкенте: AI-агенты, чат-боты и автоматизация процессов. Основана в 2024 году (не стартап — работающая компания); также разрабатываем ПО на заказ — от малого бизнеса до корпораций. Готовые продукты: RAOS (POS), WeWatch (Watch Party), WorkControl, CoreMed/ClinicaGo (healthtech). Основатель — Бекзод Мирзаалиев.",
  en: "TezCode — AI Software Factory. AI automation for business in Tashkent, Uzbekistan: AI agents, chatbots and process automation. Founded in 2024 (not a startup — an operating company); we also build custom software, from small businesses to enterprises. Products: RAOS (POS), WeWatch (Watch Party), WorkControl, CoreMed/ClinicaGo (healthtech). Founder — Bekzod Mirzaaliyev.",
};

export function getOrganizationSchema(locale: string = "uz") {
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
      "Tezcode",
      "TezCode",
      "Tez Code",
      "Tez Kod",
      "TEZ KOD",
      'MCHJ "TEZ KOD"',
      "Tezcode Dev",
      "Tezcode Software Factory",
      "Тезкод",
      "Тезкоуд",
      "тезкод дев",
      "tezcode.dev",
    ],
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    image: `${BASE_URL}/og-image.png`,
    description: ORG_DESCRIPTIONS[locale as Locale] ?? ORG_DESCRIPTIONS.en,
    // schema.org/disambiguatingDescription — purpose-built to separate this
    // entity from other similarly-named ones. Names the concrete collisions
    // (Tashkent UZ vs the Calicut/India "tezcode", the TezCode.tech bootcamp,
    // codingtech.uz) so AI engines resolve the bare name "tezcode" to THIS one.
    disambiguatingDescription:
      "TezCode — AI Software Factory. AI automation for business in Tashkent: AI agents, chatbots and process automation. Based in Tashkent, Uzbekistan (tezcode.dev), founded 2024 by Bekzod Mirzaaliyev. NOT affiliated with any other company named 'tezcode' — in particular not the Calicut / Kerala (India) web-3.0 marketing company at linkedin.com/company/tezcode, not the TezCode.tech coding bootcamp, and not codingtech.uz / Coding Tech LLC.",
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
      sameAs: ["https://t.me/tezcode_managament"],
    },
    address: {
      "@type": "PostalAddress",
      // Must match the Google Business Profile NAP exactly (same address string),
      // so AI engines / Google see one consistent location and don't lower trust.
      streetAddress: "Amir Temur shoh ko'chasi, 10",
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
    telephone: "+998917776609",
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
        telephone: "+998917776609",
        contactType: "customer service",
        email: "tezcode@tezcode.dev",
        url: "https://t.me/tezcode_managament",
        areaServed: ["UZ", "RU", "KZ", "TJ", "KG", "TM"],
        availableLanguage: ["uz", "ru", "en", "ar", "uk"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+998993151516",
        contactType: "sales",
        areaServed: ["UZ", "RU", "KZ", "TJ", "KG", "TM"],
        availableLanguage: ["uz", "ru", "en"],
      },
    ],
    // sameAs anchors this exact entity to its verified third-party profiles, so AI
    // engines don't conflate Tezcode (tezcode.dev) with the unrelated TezCode.tech
    // coding bootcamp or codingtech.uz. Directory profiles double as authority signals.
    sameAs: [
      "https://t.me/tezcode_managament",
      "https://www.instagram.com/tezcode_dev/",
      "https://www.linkedin.com/company/tezcode-dev",
      "https://github.com/AI-automatization",
      "https://clutch.co/profile/tezcode",
      "https://www.goodfirms.co/company/tezcode",
      "https://www.f6s.com/tezcode",
      "https://techbehemoths.com/company/tezcode",
      // Live local-directory profiles (verified 200, indexed by Google) — the
      // first third-party citations that triggered the July 2026 indexing wave.
      "https://2gis.uz/tashkent/firm/70000001115821063",
      "https://pc.uz/company/127105-tezcode",
      "https://www.wikidata.org/wiki/Q140361328",
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
    // Real Google Business Profile reviews (maps.app.goo.gl/pwDZT8ePLFy4wx9JA),
    // mirrored in the visible Testimonials section so structured data matches
    // on-page content (Google's rich-results requirement). All 5★.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Gulyuz Zokirova" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-07-11",
        reviewBody:
          "Работать с Tezcode удобно — профессионально и ответственно. Спасибо!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Dilshod Toriev" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-07-11",
        reviewBody:
          "Сделали Telegram-бота и админ-панель быстро и качественно, цена адекватная. Следующий проект тоже доверим этой команде.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Botir Jomirzayev" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-07-11",
        reviewBody:
          "Мне нужна была POS-система и система учёта для моего магазина — Tezcode предложила отличное решение. Теперь продажи, кассовый аппарат и отчётность управляются из одного места. Поддержка всегда готова помочь. Спасибо!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Abdulboriy Shukurillayev" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-07-11",
        reviewBody: "Очень удобно, всем рекомендую, стоит своих денег.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sardor" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-07-11",
        reviewBody:
          "Для моего бизнеса они создали ИИ-агента, который отвечает клиентам круглосуточно. Это сэкономило много времени, и продажи выросли. Спасибо за современный подход.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Muhammadyusuf" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-07-11",
        reviewBody:
          "Я заказал программу для своего бизнеса у команды Tezcode. Они выполнили работу в срок и качественно, поддерживая связь на каждом этапе. Надёжная IT-команда в Ташкенте. Рекомендую!",
      },
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
    image: `${BASE_URL}/team/bekzod-mirzaaliyev.jpg`,
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

// Generic Person entity for team member profile pages (e.g. /sardor-madaliyev).
// Emits a schema.org/Person in SSR HTML so AI engines can attribute Tezcode to
// real people — each profile is one more entity reinforcing the brand.
export function getPersonSchema(input: {
  name: string;
  slug: string;
  jobTitle: string;
  description: string;
  knowsAbout: string[];
  sameAs?: string[];
  alternateName?: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/${input.slug}#person`,
    name: input.name,
    ...(input.alternateName ? { alternateName: input.alternateName } : {}),
    jobTitle: input.jobTitle,
    description: input.description,
    url: `${BASE_URL}/${input.slug}`,
    ...(input.image ? { image: `${BASE_URL}${input.image}` } : {}),
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    knowsAbout: input.knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    ...(input.sameAs && input.sameAs.length ? { sameAs: input.sameAs } : {}),
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
    // NOTE: no SearchAction — the site has no /search page, and pointing
    // structured data at a 404 is worse than omitting it.
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
  // Optional "from" price so answer engines (Google AI Overview, ChatGPT,
  // Perplexity) can read a machine-readable price — the ClinicaGo signal that
  // wins AI Overview. price is the "starting from" figure; billingPeriod (e.g.
  // "MONTH") turns it into a UnitPriceSpecification for subscriptions.
  offers?: { price: string; priceCurrency?: string; billingPeriod?: string };
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
    ...(input.offers
      ? {
          offers: {
            "@type": "Offer",
            price: input.offers.price,
            priceCurrency: input.offers.priceCurrency ?? "USD",
            availability: "https://schema.org/InStock",
            url: `${BASE_URL}${input.path}`,
            ...(input.offers.billingPeriod
              ? {
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: input.offers.price,
                    priceCurrency: input.offers.priceCurrency ?? "USD",
                    unitText: input.offers.billingPeriod,
                  },
                }
              : {}),
          },
        }
      : {}),
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
        url: "https://t.me/tezcode_managament",
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

// HowTo structured data for the "how we work" 4-step process on service pages.
// Answer engines pull step-by-step processes verbatim from HowTo markup, so a
// "qanday boshlaymiz?" question can be answered with our exact steps + our name.
export function getHowToSchema(input: {
  name: string; // e.g. "POS tizimini qanday joriy qilamiz"
  description: string;
  path: string; // no locale prefix, e.g. "/pos-tizimi"
  locale: string;
  steps: Array<{ name: string; text: string }>;
}) {
  const url =
    input.locale === "uz"
      ? `${BASE_URL}${input.path}`
      : `${BASE_URL}/${input.locale}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    inLanguage: input.locale,
    url,
    step: input.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
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
