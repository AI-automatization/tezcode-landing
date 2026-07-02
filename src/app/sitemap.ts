import type { MetadataRoute } from "next";
import { BASE_URL, LOCALES } from "@/lib/seo";
import { ARTICLES } from "./[locale]/blog/articles";
import { CITY_SLUGS } from "@/data/cities";

// Static routes under app/[locale]/**.
// Add new pages here when a route is introduced.
const ROUTES = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/for-businesses", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/hire-developers", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-avtomatizatsiya", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-chatbot", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ai-agent", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/telegram-bot-biznes", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pos-tizimi", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/klinika-crm", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/xodim-nazorati", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/biznes-avtomatlashtirish", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/it-xizmatlar", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/tools", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tools/free-code-review", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tools/free-mvp-roadmap", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/case-studies/aziz-electronics", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/case-studies/dilfuza-grocery", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/case-studies/munira-clinic", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/roadmap", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/changelog", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/bekzod-mirzaaliyev", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/partnery/aisolution", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/partnery/schwarz-digits", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/press", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  // Blog articles (derived from the registry so new posts auto-appear).
  ...ARTICLES.map((a) => ({
    path: `/blog/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  // Per-city POS landing pages (/pos-tizimi/<city>), derived from the city data.
  ...CITY_SLUGS.map((slug) => ({
    path: `/pos-tizimi/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  // Per-city AI-automation landing pages (/ai-avtomatizatsiya/<city>).
  ...CITY_SLUGS.map((slug) => ({
    path: `/ai-avtomatizatsiya/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
];

function buildUrl(locale: string, path: string): string {
  const prefix = locale === "uz" ? BASE_URL : `${BASE_URL}/${locale}`;
  return `${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: buildUrl(locale, route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      // Slight preference for default locale (uz) over translations
      priority: locale === "uz" ? route.priority : Math.max(0.1, route.priority - 0.1),
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, buildUrl(l, route.path)]),
        ),
      },
    })),
  );
}
