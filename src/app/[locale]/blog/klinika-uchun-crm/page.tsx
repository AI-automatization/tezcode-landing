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

const SLUG = "klinika-uchun-crm";
const PATH = `/blog/${SLUG}`;

// Server Component: emits Article + FAQPage + Breadcrumb JSON-LD and metadata in
// the initial HTML so answer engines read the structured data on first fetch.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    // untranslated locales canonicalize to the uz original (see lib/seo.ts)
    availableLocales: Object.keys(CONTENT),
    path: PATH,
    title: "Klinika uchun CRM qanday tanlanadi (2026) | Tezcode",
    description:
      "Klinika, tibbiyot markazi yoki stomatologiya uchun CRM tanlash qo'llanmasi: qabullar, bemor bazasi, moliyaviy hisobot, rollar va eng ko'p uchraydigan xatolar.",
    keywords: [
      "klinika uchun CRM",
      "tibbiyot CRM",
      "klinika boshqaruv dasturi",
      "klinika CRM O'zbekiston",
      "stomatologiya CRM",
      "CRM для клиники",
      "программа для клиники",
      "медицинская CRM",
      "ClinicaGo",
      "CoreMed",
    ],
  });
}

export default function KlinikaUchunCrmPage() {
  const meta = getArticle(SLUG);
  const datePublished = meta?.datePublished ?? "2026-06-07";

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
