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

const SLUG = "kamerani-ai-bilan-aqlli-qilish";
const PATH = `/blog/${SLUG}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const titles: Record<string, string> = {
    uz: "Kameraga AI qanday ulanadi: kamera talablari va narxi (2026) | Tezcode",
    ru: "Как подключить ИИ к камере видеонаблюдения: требования и цена в Ташкенте (2026) | Tezcode",
    en: "How to connect AI to a CCTV camera: requirements and cost (2026) | Tezcode",
  };
  const descriptions: Record<string, string> = {
    uz: "Kameraga AI ulashdan oldin tasvir tiniqligi, rakurs, yorug'lik va RTSP/ONVIF tekshiriladi. Toshkentda AI video analitika $990 dan; bepul kamera auditi.",
    ru: "Как подключить ИИ к камере: проверка чёткости изображения, ракурса, освещения и RTSP/ONVIF. Внедрение в Ташкенте от $990; бесплатный аудит камер.",
    en: "Learn how to connect AI to CCTV: check image clarity, angle, lighting and RTSP/ONVIF first. Tashkent integration from $990 with a free camera audit.",
  };
  return buildPageMetadata({
    locale,
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: titles[locale] ?? titles.uz,
    description: descriptions[locale] ?? descriptions.uz,
    keywords: [
      "kamera AI",
      "odam sanash",
      "footfall hisoblash",
      "yuz tanish davomat",
      "ANPR avto raqam",
      "video kuzatuv AI",
      "видеоаналитика для магазина",
      "подсчёт людей камера",
      "AI camera analytics Uzbekistan",
    ],
  });
}

export default async function KameraniAiBilanAqlliQilishPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: requestedLocale } = await params;
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-08-15";

  const supportedLocale: ArticleLang =
    requestedLocale === "ru" || requestedLocale === "en" ? requestedLocale : "uz";
  const copy = CONTENT[supportedLocale] ?? CONTENT.uz;
  const locale = supportedLocale;

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
