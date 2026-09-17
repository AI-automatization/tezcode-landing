import type { Locale } from "@/i18n/routing";

export type LeadMarket = "central-asia" | "europe" | "general";
export const REGION_PATH = "/regions/central-asia";
export const EUROPE_PATH = "/regions/europe";
export const CENTRAL_ASIA_COUNTRIES = ["Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan"];

// Route context describes the page, never the visitor's inferred country.
export function getMarketFromPath(pathname: string): LeadMarket {
  const match = /^\/(?:uz\/|ru\/|en\/|ar\/|uk\/)?regions\/([^/]+)\/?$/.exec(pathname);
  const slug = match?.[1];
  if (slug === "central-asia") return "central-asia";
  if (slug === "europe") return "europe";
  return "general";
}

export function localizedPath(locale: Locale, path: string): string {
  return locale === "uz" ? path : `/${locale}${path}`;
}
