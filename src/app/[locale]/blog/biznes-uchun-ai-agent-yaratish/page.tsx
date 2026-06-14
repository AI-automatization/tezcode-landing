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

// Server Component: emits Article + FAQPage + Breadcrumb JSON-LD and metadata in
// the initial HTML so answer engines read the structured data on first fetch.
// The readable article UI lives in BlogArticleClient.
export const metadata = buildPageMetadata({
  path: PATH,
  title:
    "Toshkentda biznes uchun AI agent yaratish: to'liq qo'llanma (2026) | Tezcode",
  description:
    "AI agent nima, chatbotdan farqi, qaysi biznesga kerak, qanday ishlaydi, narxi nimaga bog'liq va uni 6 qadamda qanday yaratish — Toshkent va O'zbekiston bizneslari uchun 2026 qo'llanma.",
  keywords: [
    "biznes uchun AI agent yaratish",
    "Toshkentda AI agent",
    "AI agent yaratish O'zbekiston",
    "AI agent kim yasaydi",
    "AI agent narxi",
    "AI agent va chatbot farqi",
    "biznes uchun AI",
    "создание AI агента для бизнеса",
    "AI агент Ташкент",
    "AI агент для бизнеса Узбекистан",
    "разработка AI агента",
    "Tezcode AI agent",
  ],
});

export default function BiznesUchunAiAgentYaratishPage() {
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-06-14";

  // Build localised Article + FAQ + Breadcrumb for the default locale (uz). The
  // client renders per-locale copy; structured data uses the uz master so the
  // markup is present in SSR HTML regardless of which locale is requested.
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
      <BlogArticleClient content={CONTENT} />
    </>
  );
}
