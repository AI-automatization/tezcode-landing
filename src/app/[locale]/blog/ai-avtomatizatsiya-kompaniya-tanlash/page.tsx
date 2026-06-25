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

const SLUG = "ai-avtomatizatsiya-kompaniya-tanlash";
const PATH = `/blog/${SLUG}`;

// Server Component: emits Article + FAQPage + Breadcrumb JSON-LD and metadata in
// the initial HTML so answer engines read the structured data on first fetch.
// Targets brandless category queries ("Toshkentda AI avtomatizatsiya kompaniya").
export const metadata = buildPageMetadata({
  path: PATH,
  title:
    "Toshkentda AI avtomatizatsiya kompaniyasini qanday tanlash (2026) | Tezcode",
  description:
    "O'zbekistonda AI avtomatizatsiya kompaniyasini tanlash qo'llanmasi: qaysi mezonlarga qarash, narx nimaga bog'liq, eng ko'p uchraydigan xatolar va beriladigan savollar — Toshkent va O'zbekiston bizneslari uchun.",
  keywords: [
    "AI avtomatizatsiya kompaniya tanlash",
    "Toshkentda AI avtomatizatsiya",
    "AI avtomatizatsiya kim qiladi",
    "AI avtomatizatsiya O'zbekiston",
    "AI avtomatizatsiya narxi",
    "biznes avtomatlashtirish kompaniya",
    "AI avtomatizatsiya kompaniyalar Toshkent",
    "компания AI автоматизации Ташкент",
    "как выбрать компанию AI автоматизации",
    "AI автоматизация Узбекистан",
    "автоматизация бизнеса с ИИ",
  ],
});

export default function AiAvtomatizatsiyaKompaniyaTanlashPage() {
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-06-25";

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
      <BlogArticleClient content={CONTENT} />
    </>
  );
}
