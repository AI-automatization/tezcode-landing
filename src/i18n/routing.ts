import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["uz", "ru", "en", "ar", "uk"],
  defaultLocale: "uz",
  localePrefix: "as-needed",
  // Pages and sitemaps publish only their actual translations. The default
  // HTTP Link header advertises every configured locale, including fallbacks.
  alternateLinks: false,
  // Homepage only (see src/proxy.ts): pick the locale from the browser's
  // Accept-Language header or the saved cookie, so a ru-language browser
  // opening tezcode.dev lands on /ru. Deep links are never redirected — a
  // search result must open the page that ranked.
  localeDetection: true,
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365, // 1 year
  },
});

export type Locale = (typeof routing.locales)[number];

// Locale-aware navigation helpers (Link, useRouter, etc.)
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
