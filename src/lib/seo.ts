// ─────────────────────────────────────────────────────────
// SEO utilities for Tezcode Landing
// ─────────────────────────────────────────────────────────

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://tezcode.dev";

export const LOCALES = ["uz", "ru", "en", "ar", "uk"] as const;
export type Locale = (typeof LOCALES)[number];

/**
 * Build alternate language URLs for <link rel="alternate"> tags
 */
export function getAlternateUrls(path = "") {
  return LOCALES.reduce(
    (acc, locale) => {
      acc[locale] =
        locale === "uz" ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;
      return acc;
    },
    {} as Record<Locale, string>
  );
}

/**
 * Build Open Graph image URL
 */
export function getOgImageUrl(params?: {
  title?: string;
  subtitle?: string;
  locale?: string;
}) {
  // TODO: Connect to dynamic OG image generation (e.g. /api/og)
  // For now: static fallback
  return `${BASE_URL}/og-image.png`;
}

/**
 * Structured data — Organization schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tezcode",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: "Tezcode builds AI-powered products for Uzbekistan and global markets.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tashkent",
      addressCountry: "UZ",
    },
    sameAs: [
      "https://t.me/tezcode",
      "https://github.com/AI-automatization",
      "https://linkedin.com/company/tezcode",
    ],
  };
}

/**
 * Structured data — Software Application for each product
 */
export function getProductSchema(product: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    url: product.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };
}
