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

const SLUG = "1c-crm-ai-integratsiya";
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
    title: "1C ni CRM va AI bilan bog'lash: to'liq qo'llanma (2026) | Tezcode",
    description:
      "1C ni amoCRM, Bitrix24 va AI bilan bog'lash: buyurtma, qoldiq va hisob-faktura sinxronizatsiyasi, AI 1C'dan narx va mavjudlikni o'qishi. Narx $700 dan. Tezcode qo'llanmasi.",
    keywords: [
      "1C CRM integratsiya",
      "1C ni CRM bilan bog'lash",
      "1C AI integratsiya",
      "1C amoCRM Bitrix24",
      "интеграция 1с с crm",
      "1с и amocrm bitrix24",
      "1с и ии интеграция",
      "1C integration Uzbekistan",
    ],
  });
}

export default function OneCCrmAiIntegratsiyaPage() {
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
