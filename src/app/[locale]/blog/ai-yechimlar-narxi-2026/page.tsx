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

const SLUG = "ai-yechimlar-narxi-2026";
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
    title: "AI yechimlar narxi 2026: qaysi xizmat qancha turadi? | Tezcode",
    description:
      "AI chatbot $339 dan, AI agent $400 dan, CRM integratsiya $700 dan, AI video analitika $990 dan — barcha AI yechimlarning aniq 2026 narxlari, narxga nima ta'sir qiladi va to'lov tartibi. Tezcode ochiq narx qo'llanmasi.",
    keywords: [
      "AI yechimlar narxi",
      "AI chatbot narxi",
      "AI agent narxi",
      "CRM integratsiya narxi",
      "AI video analitika narxi",
      "chatbot narxi Toshkent",
      "AI narxlari 2026",
      "цены на ИИ-решения",
      "сколько стоит чат-бот",
      "стоимость ИИ-агента Ташкент",
    ],
  });
}

export default function AiYechimlarNarxi2026Page() {
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-08-14";

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
