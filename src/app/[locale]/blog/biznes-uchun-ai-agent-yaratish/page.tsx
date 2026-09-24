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

const SLUG = "biznes-uchun-ai-agent-yaratish";
const PATH = `/blog/${SLUG}`;

type ArticleMetadata = { title: string; description: string };
const META: Partial<Record<ArticleLang, ArticleMetadata>> & { uz: ArticleMetadata } = {
  uz: {
    title: "AI agent qanday yaratiladi? 6 qadam va xarajatlar",
    description: "AI agent yaratish bosqichlari, bepul sinov chegaralari, CRM integratsiyasi va xarajatlar. Biznesingiz uchun agent kerakligini aniqlash qo'llanmasi.",
  },
  ru: {
    title: "Как создать AI-агента: 6 шагов и факторы стоимости",
    description: "Руководство по созданию AI-агента для бизнеса: выбор задачи, интеграция с CRM, тестирование и запуск. От чего зависит стоимость разработки.",
  },
  en: {
    title: "How to Build an AI Agent: 6 Steps and Cost Factors",
    description: "A business guide to AI agent development: choosing a task, connecting CRM, testing and launch. Learn what affects development and operating costs.",
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
      "biznes uchun AI agent yaratish",
      "Toshkentda AI agent",
      "AI agent yaratish O'zbekiston",
      "AI agent kim yasaydi",
      "AI agent narxi",
      "AI agent va chatbot farqi",
      "biznes uchun AI",
      "создание ИИ-агента для бизнеса",
      "ИИ-агент Ташкент",
      "ИИ-агент для бизнеса Узбекистан",
      "разработка ИИ-агента",
      "Tezcode agent",
    ],
  });
}

export default async function BiznesUchunAiAgentYaratishPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requestedLocale } = await params;
  const locale: ArticleLang = CONTENT[requestedLocale as ArticleLang]
    ? requestedLocale as ArticleLang
    : "uz";
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-06-14";

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
