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
  const isRu = locale === "ru" && CONTENT.ru;
  return buildPageMetadata({
    locale,
    // untranslated locales canonicalize to the uz original (see lib/seo.ts)
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: isRu
      ? "Автоматизация бизнеса с ИИ в Ташкенте и Узбекистане: руководство (2026) | Tezcode"
      : "Biznesni AI bilan avtomatlashtirish — Toshkent va O'zbekiston qo'llanmasi (2026) | Tezcode",
    description: isRu
      ? "Хочу автоматизировать бизнес с ИИ — с чего начать, сколько стоит (чатбот от $339, Telegram-бот от $279, ИИ-агент от $400), сроки 1–4 недели и как выбрать компанию в Ташкенте."
      : "Biznesimni AI bilan avtomatlashtirmoqchiman deganlar uchun: nimadan boshlash, narxlar (chatbot $339 dan, Telegram bot $279 dan, AI agent $400 dan), muddatlar 1–4 hafta va Toshkentda kompaniya tanlash.",
    keywords: [
      "biznesni AI bilan avtomatlashtirish",
      "biznesimni ai bilan avtomatlashtirmoqchiman",
      "AI avtomatlashtirish Toshkent",
      "AI avtomatlashtirish O'zbekiston",
      "ai chatbot qildirmoqchiman",
      "AI chatbot narxi",
      "автоматизация бизнеса с ИИ Ташкент",
      "хочу автоматизировать бизнес",
      "ИИ-агент Узбекистан",
      "Tezcode",
    ],
  });
}

export default function BiznesniAiBilanAvtomatlashtirishPage() {
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-07-18";

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
      <BlogArticleClient content={CONTENT} relatedService={meta?.relatedService} />
    </>
  );
}
