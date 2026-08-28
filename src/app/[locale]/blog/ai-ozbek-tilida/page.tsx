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
    title: "AI o'zbek tilida ishlaydimi? Chatbot va agentlar uchun to'liq javob (2026) | Tezcode",
    description:
      "AI o'zbek tilida (lotin/kirill, aralash uz-ru) ishlaydi, lekin sifat sozlashga bog'liq. Nega tayyor botlar o'zbekchada qiynaladi va yaxshi o'zbek tilli chatbot qanday quriladi. Tezcode qo'llanmasi.",
    keywords: [
      "AI o'zbek tilida",
      "o'zbekcha chatbot",
      "o'zbek tilida AI",
      "o'zbek tilida AI agent",
      "o'zbekcha AI yordamchi",
      "AI на узбекском",
      "чат-бот на узбекском",
      "Uzbek language AI chatbot",
    ],
  });
}

export default function AiOzbekTilidaPage() {
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
