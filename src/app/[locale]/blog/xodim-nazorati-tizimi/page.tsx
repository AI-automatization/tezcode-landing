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

const SLUG = "xodim-nazorati-tizimi";
const PATH = `/blog/${SLUG}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localized = localizeArticleMeta(SLUG, locale, {
    title:
      "Xodimlar ish vaqti va vazifalarini nazorat qilish tizimi qanday tanlanadi (2026) | Tezcode",
    description:
      "Xodimlar ish vaqti, vazifalar va samaradorlikni nazorat qilish tizimini tanlash qo'llanmasi: vazifa boshqaruvi, davomat, hisobotlar, nazorat-ishonch muvozanati va xatolar.",
  });
  return buildPageMetadata({
    locale,
    // untranslated locales canonicalize to the uz original (see lib/seo.ts)
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: localized.title,
    description: localized.description,
    keywords: [
      "xodim nazorati tizimi",
      "vazifa boshqaruvi dasturi",
      "ish vaqti nazorati",
      "xodim samaradorligi",
      "task management O'zbekiston",
      "контроль сотрудников",
      "учёт рабочего времени",
      "управление задачами",
      "WorkControl",
    ],
  });
}

export default async function XodimNazoratiTizimiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-06-07";

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
