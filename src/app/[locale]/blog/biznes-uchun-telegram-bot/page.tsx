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

const SLUG = "biznes-uchun-telegram-bot";
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
    title: "Biznes uchun Telegram bot: nima, narxi va qanday yaratiladi (2026) | Tezcode",
    description:
      "Biznes uchun Telegram bot — buyurtma, Click/Payme to'lov, 24/7 javob, CRM integratsiya. Narx $279 dan, turlari (oddiy, Mini App do'kon, AI botli) va qanday yaratiladi. Tezcode qo'llanmasi.",
    keywords: [
      "biznes uchun telegram bot",
      "telegram bot yaratish",
      "telegram bot narxi",
      "telegram do'kon",
      "telegram mini app",
      "telegram bot Toshkent",
      "телеграм бот для бизнеса",
      "создать телеграм бот",
      "telegram bot for business Uzbekistan",
    ],
  });
}

export default function BiznesUchunTelegramBotPage() {
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
