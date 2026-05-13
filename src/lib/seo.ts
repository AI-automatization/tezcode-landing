export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://tezcode.dev";

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
  "HamshiraGo",
  "Carevy",
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
      "Tezcode — AI Software Factory. Uzbekistan'da kichik biznesdan korporatsiyagacha AI yechimlar yaratamiz. RAOS POS, AI Office, HamshiraGo va boshqa mahsulotlar.",
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
      name: "AI Office",
      description: "AI orkestrator — 12 bo'lim AI agentlari, chat-first biznes boshqaruv",
      url: "https://openclaw-web-production-73ae.up.railway.app",
      category: "BusinessApplication",
    },
    {
      name: "Carevy",
      description: "Uy hamshira chaqirish va klinika boshqaruv tizimi",
      url: `${BASE_URL}/#carevy`,
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
