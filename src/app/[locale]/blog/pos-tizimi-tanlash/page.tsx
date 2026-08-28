import { BlogArticleClient } from "@/components/blog/BlogArticleClient";
import type { ArticleLang } from "@/components/blog/types";
import {
  buildPageMetadata,
  getArticleSchema,
  getFaqSchema,
  getBreadcrumbSchema,
  BASE_URL,
} from "@/lib/seo";
import { getArticle } from "../articles";
import { CONTENT } from "./content";

const SLUG = "pos-tizimi-tanlash";
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
  return buildPageMetadata({
    locale,
    // untranslated locales canonicalize to the uz original (see lib/seo.ts)
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title:
      "O'zbekistonda do'kon uchun POS tizimi qanday tanlanadi (2026) | Tezcode",
    description:
      "Do'kon, market yoki kosmetika do'koni uchun POS tizimi tanlash qo'llanmasi: offline ishlash, ombor nazorati, fiskal talablar va eng ko'p uchraydigan xatolar.",
    keywords: [
      "POS tizimi tanlash",
      "do'kon uchun POS",
      "POS dasturi O'zbekiston",
      "offline POS",
      "ombor dasturi",
      "kassa dasturi Toshkent",
      "POS система для магазина",
      "POS Узбекистан",
      "RAOS",
    ],
  });
}

export default function PosTizimiTanlashPage() {
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-06-07";

  // Build localised Article + FAQ + Breadcrumb for the default locale (uz). The
  // client renders per-locale copy; structured data uses the uz master so the
  // markup is present in SSR HTML regardless of which locale is requested.
  const copy = CONTENT.uz;
  const locale: ArticleLang = "uz";

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
