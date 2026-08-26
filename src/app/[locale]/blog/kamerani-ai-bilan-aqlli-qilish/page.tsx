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

const SLUG = "kamerani-ai-bilan-aqlli-qilish";
const PATH = `/blog/${SLUG}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localized = localizeArticleMeta(SLUG, locale, {
    title: "Kamerangizni AI bilan aqlli qilish: odam sanash, davomat, ANPR (2026) | Tezcode",
    description:
      "Mavjud IP kameralarni AI bilan aqlli qilish: odam sanash (footfall), yuz tanish davomat, ish xavfsizligi (kaska/forma), avto raqam (ANPR). Yangi kamera shart emas. $990 dan. Tezcode qo'llanmasi.",
  });
  return buildPageMetadata({
    locale,
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: localized.title,
    description: localized.description,
    keywords: [
      "kamera AI",
      "odam sanash",
      "footfall hisoblash",
      "yuz tanish davomat",
      "ANPR avto raqam",
      "video kuzatuv AI",
      "видеоаналитика для магазина",
      "подсчёт людей камера",
      "AI camera analytics Uzbekistan",
    ],
  });
}

export default async function KameraniAiBilanAqlliQilishPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-08-15";

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
