import { buildPageMetadata, getBreadcrumbSchema, BASE_URL } from "@/lib/seo";
import { BlogIndexClient } from "./BlogIndexClient";

const PATH = "/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: "Blog — Biznes avtomatlashtirish, POS, CRM va AI qo'llanmalar | Tezcode",
    description:
      "Tezcode blogi: O'zbekistonda biznes avtomatlashtirish, POS tizimi tanlash, klinika CRM va AI bo'yicha amaliy qo'llanmalar va maslahatlar.",
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
