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

const SLUG = "sotuvni-avtomatlashtirish";
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
    title: "Sotuvni avtomatlashtirish: Telegram, Instagram va CRM (2026) | Tezcode",
    description:
      "Sotuvni avtomatlashtirish: barcha kanal (Telegram, Instagram, WhatsApp, sayt) → bitta CRM, AI chatbot 24/7 javob va lid saralash, buyurtma avtomatik 1C/CRM'ga. Bironta lid yo'qolmaydi. Tezcode qo'llanmasi.",
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

export default function SotuvniAvtomatlashtirish() {
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
