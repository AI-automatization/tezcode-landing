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

const SLUG = "claude-fable-5";
const PATH = `/blog/${SLUG}`;

// Server Component: emits Article + FAQPage + Breadcrumb JSON-LD and metadata in
// the initial HTML so answer engines read the structured data on first fetch.
// The readable article UI lives in BlogArticleClient.
export const metadata = buildPageMetadata({
  path: PATH,
  title:
    "Claude Fable 5: Anthropic'ning eng kuchli modeli va bu biznes uchun nimani anglatadi | Tezcode",
  description:
    "Anthropic Claude Fable 5'ni chiqardi, AQSh eksport nazorati tufayli vaqtincha to'xtatdi, so'ng yana global qaytardi. Bu O'zbekistondagi AI-avtomatlashtirish loyihalari uchun nimani anglatadi.",
  keywords: [
    "Claude Fable 5",
    "Anthropic",
    "Claude Mythos 5",
    "AI model yangiligi",
    "AI avtomatlashtirish",
    "Tezcode",
  ],
});

export default function ClaudeFable5Page() {
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-07-02";

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
