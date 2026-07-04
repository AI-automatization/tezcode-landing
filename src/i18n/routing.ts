import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["uz", "ru", "en", "ar", "uk"],
  defaultLocale: "uz",
  localePrefix: "as-needed",
  // Uzbek is the primary language: always serve uz first. Visitors can switch
  // manually (their choice persists via the locale cookie).
  localeDetection: false,
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365, // 1 year
  },
});

export type Locale = (typeof routing.locales)[number];

// Locale-aware navigation helpers (Link, useRouter, etc.)
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
