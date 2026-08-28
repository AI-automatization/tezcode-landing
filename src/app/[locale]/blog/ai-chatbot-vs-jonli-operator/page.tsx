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

const SLUG = "ai-chatbot-vs-jonli-operator";
const PATH = `/blog/${SLUG}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: "AI chatbot vs jonli operator: qaysi biri, qachon? (2026) | Tezcode",
    description:
      "AI chatbot soniyalarda va arzon, jonli operator nozik holatlarda kuchli. Narx, tezlik va sifat taqqoslash — va nega gibrid (AI + operator) model eng samarali. Tezcode qo'llanmasi.",
    keywords: [
      "AI chatbot vs operator",
      "AI chatbot yoki operator",
      "chatbot kerakmi",
      "AI chatbot narxi",
      "jonli operator vs chatbot",
      "чат-бот или оператор",
      "AI чат-бот vs живой оператор",
      "нужен ли чат-бот",
      "AI chatbot vs live agent",
    ],
  });
}

export default function AiChatbotVsJonliOperatorPage() {
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-08-15";

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
