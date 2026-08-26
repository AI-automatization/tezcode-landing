import { buildPageMetadata, getBreadcrumbSchema, BASE_URL } from "@/lib/seo";
import { BlogIndexClient } from "./BlogIndexClient";

const PATH = "/blog";

// Localized index meta — the ru/en SERP snippet must not be Uzbek (Bing/Google
// treat untranslated titles on localized URLs as duplicate-content noise).
const INDEX_META: Record<string, { title: string; description: string }> = {
  uz: {
    title: "Blog — Biznes avtomatlashtirish, POS, CRM va AI qo'llanmalar | Tezcode",
    description:
      "Tezcode blogi: O'zbekistonda biznes avtomatlashtirish, POS tizimi tanlash, klinika CRM va AI bo'yicha amaliy qo'llanmalar va maslahatlar.",
  },
  ru: {
    title: "Блог — Автоматизация бизнеса, POS, CRM и AI-руководства | Tezcode",
    description:
      "Блог Tezcode: практические руководства по автоматизации бизнеса в Узбекистане, выбору POS-системы, CRM для клиник и внедрению AI.",
  },
  en: {
    title: "Blog — Business automation, POS, CRM and AI guides | Tezcode",
    description:
      "Tezcode blog: practical guides on business automation in Uzbekistan, choosing a POS system, clinic CRM and putting AI to work.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = INDEX_META[locale] ?? INDEX_META.uz;
  return buildPageMetadata({
    locale,
    availableLocales: Object.keys(INDEX_META),
    path: PATH,
    title: meta.title,
    description: meta.description,
    keywords: [
      "Tezcode blog",
      "biznes avtomatlashtirish blog",
      "POS tizimi qo'llanma",
      "CRM tanlash",
      "AI biznes O'zbekiston",
      "POS система блог",
      "автоматизация бизнеса Узбекистан",
    ],
  });
}

export default function BlogIndexPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}${PATH}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <BlogIndexClient />
    </>
  );
}
