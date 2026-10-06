import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BASE_URL, buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { CaseStudiesIndexClient } from "./CaseStudiesIndexClient";

// Per-locale SERP copy, translated from each locale's own hero copy in
// CaseStudiesIndexClient (no extra claims). The layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string }> = {
  uz: {
    title: "Case Studies — Amaliy natijalar",
    description:
      "Tezcode mahsulotlari bo'yicha anonimlashtirilgan amaliy misollar — RAOS, AI Office, ClinicaGo + HamshiraGo case study'lar.",
  },
  ru: {
    title: "Кейсы — практические результаты бизнеса в Ташкенте",
    description:
      "Анонимные бизнес-кейсы предпринимателей Узбекистана, работавших с продуктами Tezcode: сколько сэкономили, насколько выросли и ускорились.",
  },
  en: {
    title: "Case Studies — Practical Business Results",
    description:
      "Anonymized cases of Uzbek entrepreneurs who worked with Tezcode products — what they saved, how much they grew and how fast they now operate.",
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
