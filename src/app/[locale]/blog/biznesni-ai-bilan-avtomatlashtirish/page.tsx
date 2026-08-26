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

const SLUG = "biznesni-ai-bilan-avtomatlashtirish";
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
      "Biznesni AI bilan avtomatlashtirish — Toshkent va O'zbekiston qo'llanmasi (2026) | Tezcode",
    description:
      "Biznesimni AI bilan avtomatlashtirmoqchiman deganlar uchun: nimadan boshlash, narxlar (chatbot $339 dan, Telegram bot $279 dan, AI agent $400 dan), muddatlar 1–4 hafta va Toshkentda kompaniya tanlash.",
  });
  return buildPageMetadata({
    locale,
    // untranslated locales canonicalize to the uz original (see lib/seo.ts)
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: localized.title,
    description: localized.description,
    keywords: [
      "biznesni AI bilan avtomatlashtirish",
      "biznesimni ai bilan avtomatlashtirmoqchiman",
      "AI avtomatlashtirish Toshkent",
      "AI avtomatlashtirish O'zbekiston",
      "ai chatbot qildirmoqchiman",
      "AI chatbot narxi",
      "автоматизация бизнеса с ИИ Ташкент",
      "хочу автоматизировать бизнес",
      "AI агент Узбекистан",
      "Tezcode",
    ],
  });
}

export default async function BiznesniAiBilanAvtomatlashtirishPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-07-18";

  // Build localised Article + FAQ + Breadcrumb for the requested locale, falling
  // back to the uz master when no translation exists, so the markup is present
  // in SSR HTML for every locale.
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
