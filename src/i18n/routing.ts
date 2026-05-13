import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["uz", "ru", "en", "ar", "uk"],
  defaultLocale: "uz",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

// Locale-aware navigation helpers (Link, useRouter, etc.)
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
