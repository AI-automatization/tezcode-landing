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

const SLUG = "gpt-6-astra";
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
      "GPT-6 Astra chiqdi: O'zbekistondagi biznes uchun bu nimani anglatadi | Tezcode",
    description:
      "OpenAI GPT-6 Astra'ni 2026-yil 3-4-sentabrda chiqardi: narxi, imkoniyatlari, kompyuterni boshqarish natijalari va nega mustaqil reytingda u Claude Fable 5.1 bilan teng chiqdi. Biznes uchun amaliy xulosa.",
  });
  return buildPageMetadata({
    locale,
    // untranslated locales canonicalize to the uz original (see lib/seo.ts)
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: localized.title,
    description: localized.description,
    keywords: [
      "GPT-6 Astra",
      "GPT-6",
      "OpenAI GPT-6 Astra",
      "GPT-6 Astra narxi",
      "GPT-6 Astra imkoniyatlari",
      "yangi ChatGPT modeli",
      "GPT-6 Astra va Claude",
      "AI model yangiligi 2026",
      "biznes uchun AI model tanlash",
      "GPT-6 Astra цена",
      "новая модель OpenAI",
      "GPT-6 Astra pricing",
      "Tezcode AI",
    ],
  });
}

export default async function Gpt6AstraPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-09-11";

  // Structured data follows the requested locale when we have a translation,
  // falling back to the uz master so the markup is always present in SSR HTML.
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
