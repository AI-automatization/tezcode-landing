import { buildPageMetadata, getBreadcrumbSchema, BASE_URL } from "@/lib/seo";
import { BlogIndexClient } from "./BlogIndexClient";

const PATH = "/blog";

// Per-locale SERP copy, translated from BlogIndexClient's own COPY subtitle.
// Titles end in "| Tezcode" exactly once (buildPageMetadata opts them out of
// the layout template so the brand is not appended twice).
const META: Record<string, { title: string; description: string }> = {
  uz: {
    title: "Blog — Biznes avtomatlashtirish, POS, CRM va AI qo'llanmalar | Tezcode",
    description:
      "Tezcode blogi: O'zbekistonda biznes avtomatlashtirish, POS tizimi tanlash, klinika CRM va AI bo'yicha amaliy qo'llanmalar va maslahatlar.",
  },
  ru: {
    title: "Блог — автоматизация бизнеса, POS, CRM и ИИ | Tezcode",
    description:
      "Блог Tezcode: практические руководства по автоматизации бизнеса, выбору POS-системы, CRM и ИИ в Узбекистане — из нашего опыта.",
  },
  en: {
    title: "Blog — business automation, POS, CRM and AI guides | Tezcode",
    description:
      "Tezcode blog: practical guides on business automation, choosing a POS system, CRM and AI in Uzbekistan — from our experience.",
  },
  ar: {
    title: "المدونة — أتمتة الأعمال وPOS وCRM والذكاء الاصطناعي | Tezcode",
    description:
      "مدونة Tezcode: أدلة عملية حول أتمتة الأعمال وأنظمة POS وCRM والذكاء الاصطناعي في أوزبكستان.",
  },
  uk: {
    title: "Блог — автоматизація бізнесу, POS, CRM та AI | Tezcode",
    description:
      "Блог Tezcode: практичні посібники з автоматизації бізнесу, вибору POS-системи, CRM та AI в Узбекистані — з нашого досвіду.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale] ?? META.uz;
  return buildPageMetadata({
    locale,
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
