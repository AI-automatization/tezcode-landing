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

const SLUG = "ai-ozbek-tilida";
const PATH = `/blog/${SLUG}`;

type ArticleMetadata = { title: string; description: string };
const META: Partial<Record<ArticleLang, ArticleMetadata>> & { uz: ArticleMetadata } = {
  uz: {
    title: "AI o'zbek tilida — foydalanish va sinash misollari",
    description: "AI bilan o'zbek tilida ishlash: tayyor so'rov namunalari, javob sifatini tekshirish va biznes uchun chatbot yoki agent tanlash. Amaliy qo'llanma.",
  },
  ru: {
    title: "AI на узбекском языке — как проверить ответы",
    description: "Как проверить ответы AI на узбекском: письменность, смешанный язык и данные компании. На что обратить внимание при выборе чат-бота или агента.",
  },
  en: {
    title: "AI in Uzbek — How to Check Chatbot and Agent Answers",
    description: "How to evaluate AI in Uzbek: writing systems, mixed-language questions and company data. Practical checks for business chatbots and agents.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale as ArticleLang] ?? META.uz;
  return buildPageMetadata({
    locale,
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    ...meta,
    keywords: [
      "AI o'zbek tilida",
      "o'zbekcha chatbot",
      "o'zbek tilida AI",
      "o'zbek tilida AI agent",
      "o'zbekcha AI yordamchi",
      "ИИ на узбекском",
      "чат-бот на узбекском",
      "Uzbek language AI chatbot",
    ],
  });
}

export default async function AiOzbekTilidaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requestedLocale } = await params;
  const locale: ArticleLang = CONTENT[requestedLocale as ArticleLang]
    ? requestedLocale as ArticleLang
    : "uz";
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-08-15";

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
