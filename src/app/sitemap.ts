import type { MetadataRoute } from "next";
import { BASE_URL, LOCALES } from "@/lib/seo";
import { ARTICLES } from "./[locale]/blog/articles";
import { TEAM_PROFILES } from "@/content/team-profiles";

// Site-wide lastModified for non-blog pages. Bump this date on real releases
// (content/design changes worth re-crawling) — NOT on every build. Using a
// fixed date instead of `new Date()` keeps lastModified honest: search engines
// lose trust in sitemaps where every URL "changes" on every deploy. Bump this
// only on major site-wide content updates (e.g. 2026-08-11: Review schema +
// internal linking added to every service page, new CRM/comparison pages).
const SITE_UPDATED = new Date("2026-08-11");

// Team profile pages (founder + /jamoa/* developers) are newly created and
// actively updated as members submit info. A fresh, honest lastModified here
// signals search engines these are new pages worth crawling now, instead of
// inheriting the older site-wide date.
const TEAM_UPDATED = new Date("2026-08-26");

// City slugs with live pages for the newer per-city service landings.
// Must mirror ACTIVE_CITY_SLUGS in each service's [city]/page.tsx
// (ai-chatbot, ai-agent, telegram-bot-biznes, biznes-avtomatlashtirish).
const ACTIVE_CITY_SLUGS = ["toshkent", "samarqand"];
const CITY_SERVICES = [
  "/ai-chatbot",
  "/ai-agent",
  "/telegram-bot-biznes",
  "/biznes-avtomatlashtirish",
  "/pos-tizimi",
  "/ai-avtomatizatsiya",
];

type Route = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  // Per-route override (blog posts use their publish date); defaults to SITE_UPDATED.
  lastModified?: Date;
};

// Static routes under app/[locale]/**.
// Add new pages here when a route is introduced.
const ROUTES: Route[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/for-businesses", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/hire-developers", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-avtomatizatsiya", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-ozbekistonda", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-chatbot", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-video-analitika", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-agent", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/telegram-bot-biznes", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pos-tizimi", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/klinika-crm", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/xodim-nazorati", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/biznes-avtomatlashtirish", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/crm-integratsiya", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-restoran-uchun", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-salon-uchun", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/amocrm-vs-bitrix24", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/it-xizmatlar", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/tezcode-systems", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/tezcode-custom", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/tezcode-labs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/wewatch", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/maxsavdo", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/tezcode-academy", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tariflar", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/aloqa", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sharhlar", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/biz-haqimizda", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/tools", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tools/free-code-review", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tools/free-mvp-roadmap", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tools/roi-calculator", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/case-studies/aziz-electronics", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/case-studies/dilfuza-grocery", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/case-studies/munira-clinic", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/roadmap", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/changelog", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/bekzod-mirzaaliyev", priority: 0.6, changeFrequency: "monthly" as const, lastModified: TEAM_UPDATED },
  { path: "/sardor-madaliyev", priority: 0.6, changeFrequency: "monthly" as const, lastModified: TEAM_UPDATED },
  // Team member profiles (/jamoa/<slug>) — derived from the profile registry so
  // new teammates auto-appear in the sitemap. Fresh lastModified nudges crawling.
  ...TEAM_PROFILES.map((p) => ({
    path: `/jamoa/${p.slug}`,
    priority: 0.5,
    changeFrequency: "monthly" as const,
    lastModified: TEAM_UPDATED,
  })),
  { path: "/partnery/aisolution", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/partnery/schwarz-digits", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/press", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/oferta", priority: 0.3, changeFrequency: "yearly" as const },
  // Blog articles (derived from the registry so new posts auto-appear).
  // lastModified = the article's publish date, not the build date.
  ...ARTICLES.map((a) => ({
    path: `/blog/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(a.datePublished),
  })),
  // Per-city landings for every service (/<service>/<city>) — only the city
  // slugs that actually have live pages (ACTIVE_CITY_SLUGS = Tashkent +
  // Samarkand). pos-tizimi and ai-avtomatizatsiya used to fan out to all 12
  // cities here, but those small-city pages were thin template duplicates that
  // Google refused to index, so they're trimmed to the two real cities too.
  ...CITY_SERVICES.flatMap((service) =>
    ACTIVE_CITY_SLUGS.map((slug) => ({
      path: `${service}/${slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ),
];

function buildUrl(locale: string, path: string): string {
  const prefix = locale === "uz" ? BASE_URL : `${BASE_URL}/${locale}`;
  return `${prefix}${path}`;
}

// One sitemap per locale (served at /sitemap/<locale>.xml) so each language
// can be submitted and monitored separately in Search Console instead of one
// 285-URL blob. Every entry still carries the full hreflang alternate set.
export async function generateSitemaps() {
  return LOCALES.map((locale) => ({ id: locale }));
}

export default async function sitemap(props: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const id = await props.id;
  const locale = (LOCALES as readonly string[]).includes(id) ? id : "uz";

  return ROUTES.map((route) => ({
    url: buildUrl(locale, route.path),
    lastModified: route.lastModified ?? SITE_UPDATED,
    changeFrequency: route.changeFrequency,
    // Slight preference for default locale (uz) over translations
    priority: locale === "uz" ? route.priority : Math.max(0.1, route.priority - 0.1),
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, buildUrl(l, route.path)]),
      ),
    },
  }));
}
