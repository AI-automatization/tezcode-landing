import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["uz", "ru", "en", "ar", "uk"],
  defaultLocale: "uz",
  localePrefix: "as-needed",
  // First visit: pick the locale from the browser's Accept-Language header
  // (a ru-language browser lands on /ru, etc.). This is the Google-safe way
  // to auto-localize — crawlers send no Accept-Language, so they always get
  // the default uz tree and every locale URL stays directly crawlable (a
  // hard IP-geo redirect would instead funnel US-based crawlers into one
  // locale and hurt indexation). A manual switch persists via the locale
  // cookie below and overrides detection on later visits.
  localeDetection: true,
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365, // 1 year
  },
});

export type Locale = (typeof routing.locales)[number];

// Locale-aware navigation helpers (Link, useRouter, etc.)
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
