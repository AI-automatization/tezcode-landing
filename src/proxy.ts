import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing, type Locale } from "./i18n/routing";

// Language auto-detection (Accept-Language + NEXT_LOCALE cookie) runs only on
// the bare homepage. Deep links — what search results point to — always serve
// the URL that was clicked, otherwise a ru/en browser never sees the uz page
// that actually ranked.
const intlMiddleware = createIntlMiddleware(routing);
const deepLinkMiddleware = createIntlMiddleware({
  ...routing,
  localeDetection: false,
});
// Unprefixed deep pages are uz content; viewing one must not overwrite the
// visitor's saved language choice.
const uzDeepLinkMiddleware = createIntlMiddleware({
  ...routing,
  localeDetection: false,
  localeCookie: false,
});

// Country → Locale map for IP-based fallback (when Accept-Language missing/ambiguous)
const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  // Uzbek-speaking
  UZ: "uz",
  // Russian-speaking
  RU: "ru",
  KZ: "ru",
  KG: "ru",
  TJ: "ru",
  TM: "ru",
  BY: "ru",
  // Ukrainian
  UA: "uk",
  // Arabic-speaking
  SA: "ar",
  AE: "ar",
  EG: "ar",
  QA: "ar",
  KW: "ar",
  BH: "ar",
  OM: "ar",
  JO: "ar",
  IQ: "ar",
  LB: "ar",
  SY: "ar",
  YE: "ar",
  TN: "ar",
  DZ: "ar",
  MA: "ar",
  LY: "ar",
  SD: "ar",
  // Default English for everywhere else (handled by fallthrough)
};

function detectLocaleFromGeo(request: NextRequest): Locale | null {
  // Cloudflare header
  const cfCountry = request.headers.get("cf-ipcountry");
  if (cfCountry && COUNTRY_TO_LOCALE[cfCountry.toUpperCase()]) {
    return COUNTRY_TO_LOCALE[cfCountry.toUpperCase()];
  }
  // Vercel header
  const vercelCountry = request.headers.get("x-vercel-ip-country");
  if (vercelCountry && COUNTRY_TO_LOCALE[vercelCountry.toUpperCase()]) {
    return COUNTRY_TO_LOCALE[vercelCountry.toUpperCase()];
  }
  return null;
}

export default function middleware(request: NextRequest) {
  // Skip middleware for non-matching paths (handled by config below anyway)
  const { pathname } = request.nextUrl;

  // If user already has locale cookie OR is on a locale-prefixed path, let next-intl handle it
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const hasLocalePrefix = routing.locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );

  // For root path without cookie and without explicit locale → try geo detection
  if (pathname === "/" && !cookieLocale && !hasLocalePrefix) {
    const geoLocale = detectLocaleFromGeo(request);
    if (geoLocale && geoLocale !== routing.defaultLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${geoLocale}`;
      const response = NextResponse.redirect(url);
      response.cookies.set("NEXT_LOCALE", geoLocale, {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        sameSite: "lax",
      });
      return response;
    }
  }

  if (pathname === "/") {
    const response = intlMiddleware(request);
    response.headers.set("Vary", "Accept-Language, Cookie");
    return response;
  }
  if (hasLocalePrefix) return deepLinkMiddleware(request);
  return uzDeepLinkMiddleware(request);
}

export const config = {
  matcher: [
    // Skip api routes, Next internals, sitemap/robots, and static assets
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt)$).*)",
  ],
};
