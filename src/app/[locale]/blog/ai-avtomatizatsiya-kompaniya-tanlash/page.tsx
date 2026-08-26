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

const SLUG = "ai-avtomatizatsiya-kompaniya-tanlash";
const PATH = `/blog/${SLUG}`;

// Server Component: emits Article + FAQPage + Breadcrumb JSON-LD and metadata in
// the initial HTML so answer engines read the structured data on first fetch.
// Targets brandless category queries ("Toshkentda AI avtomatizatsiya kompaniya").
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localized = localizeArticleMeta(SLUG, locale, {
    title:
      "Toshkentda AI avtomatizatsiya kompaniyasini qanday tanlash (2026) | Tezcode",
    description:
      "O'zbekistonda AI avtomatizatsiya kompaniyasini tanlash qo'llanmasi: qaysi mezonlarga qarash, narx nimaga bog'liq, eng ko'p uchraydigan xatolar va beriladigan savollar — Toshkent va O'zbekiston bizneslari uchun.",
  });
  return buildPageMetadata({
    locale,
    // untranslated locales canonicalize to the uz original (see lib/seo.ts)
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: localized.title,
    description: localized.description,
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
}

export default async function AiAvtomatizatsiyaKompaniyaTanlashPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-06-25";

  // Build localised Article + FAQ + Breadcrumb for the requested locale,
  // falling back to the uz master when no translation exists.
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
