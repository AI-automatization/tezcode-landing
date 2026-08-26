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

const SLUG = "sotuvni-avtomatlashtirish";
const PATH = `/blog/${SLUG}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localized = localizeArticleMeta(SLUG, locale, {
    title: "Sotuvni avtomatlashtirish: Telegram, Instagram va CRM (2026) | Tezcode",
    description:
      "Sotuvni avtomatlashtirish: barcha kanal (Telegram, Instagram, WhatsApp, sayt) → bitta CRM, AI chatbot 24/7 javob va lid saralash, buyurtma avtomatik 1C/CRM'ga. Bironta lid yo'qolmaydi. Tezcode qo'llanmasi.",
  });
  return buildPageMetadata({
    locale,
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: localized.title,
    description: localized.description,
    keywords: [
      "sotuvni avtomatlashtirish",
      "instagram orqali sotuv avtomatlashtirish",
      "telegram orqali sotuv",
      "lid saralash",
      "savdo avtomatlashtirish",
      "автоматизация продаж",
      "автоматизация продаж instagram telegram",
      "sales automation Uzbekistan",
    ],
  });
}

export default async function SotuvniAvtomatlashtirish({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-08-15";

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
