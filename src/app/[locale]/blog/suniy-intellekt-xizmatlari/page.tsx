import { BlogArticleClient } from "@/components/blog/BlogArticleClient";
import type { ArticleLang } from "@/components/blog/types";
import {
  buildPageMetadata,
  getArticleSchema,
  getFaqSchema,
  getBreadcrumbSchema,
  BASE_URL,
} from "@/lib/seo";
import { getArticle, localizeArticleMeta } from "../articles";
import { CONTENT } from "./content";

const SLUG = "suniy-intellekt-xizmatlari";
const PATH = `/blog/${SLUG}`;

// Server Component: emits Article + FAQPage + Breadcrumb JSON-LD and metadata in
// the initial HTML so answer engines read the structured data on first fetch.
// The readable article UI lives in BlogArticleClient.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localized = localizeArticleMeta(SLUG, locale, {
    title:
      "Sun'iy intellekt xizmatlari O'zbekistonda: turlari, narxi va qanday tanlash (2026) | Tezcode",
    description:
      "Sun'iy intellekt (AI) nima, biznes uchun qanday xizmatlar bor — chatbot, AI agent, avtomatizatsiya, video analitika — narxlari qancha ($279 dan) va provayderni qanday tanlash — 2026 amaliy qo'llanma.",
  });
  return buildPageMetadata({
    locale,
    // untranslated locales canonicalize to the uz original (see lib/seo.ts)
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: localized.title,
    description: localized.description,
    keywords: [
      "sun'iy intellekt xizmatlari",
      "sun'iy intellekt nima",
      "sun'iy intellekt biznes uchun",
      "sun'iy intellekt O'zbekiston",
      "sun'iy intellekt narxi",
      "sun'iy intellekt xizmati Toshkent",
      "AI xizmatlari",
      "услуги искусственного интеллекта",
      "искусственный интеллект для бизнеса Узбекистан",
      "artificial intelligence services Uzbekistan",
      "Tezcode AI",
    ],
  });
}

export default async function SuniyIntellektXizmatlariPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-08-26";

  // Build localised Article + FAQ + Breadcrumb for the default locale (uz). The
  // client renders per-locale copy; structured data uses the uz master so the
  // markup is present in SSR HTML regardless of which locale is requested.
  const locale: ArticleLang = (rawLocale in CONTENT ? rawLocale : "uz") as ArticleLang;
  const copy = CONTENT[locale] ?? CONTENT.uz;

  const articleSchema = getArticleSchema({
    headline: copy.hero.title,
    description: copy.hero.subtitle,
    path: PATH,
    locale,
    datePublished,
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: copy.hero.title, url: `${BASE_URL}${PATH}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <BlogArticleClient content={CONTENT} relatedService={meta?.relatedService} />
    </>
  );
}
