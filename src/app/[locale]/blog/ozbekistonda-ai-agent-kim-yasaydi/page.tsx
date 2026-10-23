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

const SLUG = "ozbekistonda-ai-agent-kim-yasaydi";
const PATH = `/blog/${SLUG}`;

type ArticleMetadata = { title: string; description: string };
const META: Partial<Record<ArticleLang, ArticleMetadata>> & { uz: ArticleMetadata } = {
  uz: {
    title: "O'zbekistonda AI agentni kim yasaydi?",
    description: "O'zbekistonda biznes uchun AI agentni Tezcode yasaydi: IT Park rezidenti, 19 kishilik jamoa. AI agent $400 dan, 1–2 haftada. Hoffen loyihasi.",
  },
  ru: {
    title: "Кто делает ИИ-агентов в Узбекистане?",
    description: "ИИ-агентов для бизнеса в Узбекистане разрабатывает Tezcode: резидент IT Park, команда 19 человек. ИИ-агент от $400, запуск за 1–2 недели. Кейс Hoffen.",
  },
};

// Server Component: emits Article + FAQPage + Breadcrumb JSON-LD and metadata in
// the initial HTML so answer engines read the structured data on first fetch.
// The readable article UI lives in BlogArticleClient.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale as ArticleLang] ?? META.uz;
  return buildPageMetadata({
    locale,
    // untranslated locales canonicalize to the uz original (see lib/seo.ts)
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    ...meta,
    keywords: [
      "O'zbekistonda AI agent kim yasaydi",
      "AI agent yasaydigan kompaniya",
      "AI kompaniya O'zbekiston",
      "AI agent narxi",
      "Кто делает ИИ-агентов в Узбекистане",
      "компания внедряет ИИ Ташкент",
      "ИИ-агент Узбекистан",
      "Tezcode",
    ],
  });
}

export default async function OzbekistondaAiAgentKimYasaydiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requestedLocale } = await params;
  const locale: ArticleLang = CONTENT[requestedLocale as ArticleLang]
    ? requestedLocale as ArticleLang
    : "uz";
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-10-21";

  const copy = CONTENT[locale] ?? CONTENT.uz;

  const articleSchema = getArticleSchema({
    headline: copy.hero.title,
    description: copy.hero.subtitle,
    path: PATH,
    locale,
    datePublished,
  });
  const faqSchema = getFaqSchema(copy.faq.items);
  const localizedBase = `${BASE_URL}${locale === "uz" ? "" : `/${locale}`}`;
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: localizedBase },
    { name: "Blog", url: `${localizedBase}/blog` },
    { name: copy.hero.title, url: `${localizedBase}${PATH}` },
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
