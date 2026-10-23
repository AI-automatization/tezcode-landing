import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BASE_URL, buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { CaseStudiesIndexClient } from "./CaseStudiesIndexClient";

// Per-locale SERP copy, translated from each locale's own hero copy in
// CaseStudiesIndexClient (no extra claims). The layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string }> = {
  uz: {
    title: "Keyslar (case study) — amaliy natijalar",
    description:
      "Tezcode loyihalari: Hoffen uchun Telegram'da 7 ta AI agent.",
  },
  ru: {
    title: "Кейсы — практические результаты бизнеса в Ташкенте",
    description:
      "Проекты Tezcode: 7 ИИ-агентов в Telegram для Hoffen.",
  },
  en: {
    title: "Case Studies — Practical Business Results",
    description:
      "Tezcode projects: 7 AI agents in Telegram for Hoffen.",
  },
  ar: {
    title: "دراسات الحالة — نتائج حقيقية لأصحاب الأعمال",
    description:
      "رواد أعمال أوزبكيون عملوا مع منتجات Tezcode — كم وفّروا، وكم نموا، وكم أصبحوا أسرع.",
  },
  uk: {
    title: "Кейси — реальні результати підприємців",
    description:
      "Узбецькі підприємці, які працювали з продуктами Tezcode: скільки заощадили, як виросли і як стали працювати швидше.",
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
    path: "/case-studies",
    title: meta.title,
    description: meta.description,
  });
}

export default function CaseStudiesIndexPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Case Studies", url: `${BASE_URL}/case-studies` },
  ]);
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navbar />
      <CaseStudiesIndexClient />
      <Footer />
    </div>
  );
}
