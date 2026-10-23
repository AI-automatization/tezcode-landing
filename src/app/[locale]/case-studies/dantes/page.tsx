import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CaseStoryClient } from "@/components/case-study/CaseStoryClient";
import { BASE_URL, buildPageMetadata, getArticleSchema, getBreadcrumbSchema } from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/case-studies/dantes";
// Copy exists in uz/ru/en; ar and uk canonicalize to the uz original.
const AVAILABLE = ["uz", "ru", "en"] as const;

// Titles omit "Tezcode": the layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string }> = {
  uz: {
    title: "Dantes keysi: qurilish uchun hisobot tahlil qiladigan AI",
    description:
      "Dantes Construction uchun Tezcode ishlab chiqayotgan AI yordamchilar: kompaniya hisobotlarini tahlil qilib, rahbarga eng muhim ma'lumotni yetkazadi. Loyiha jarayonda.",
  },
  ru: {
    title: "Кейс Dantes: ИИ для анализа отчётов в строительной компании",
    description:
      "ИИ-помощники Tezcode для Dantes Construction анализируют отчёты компании и доносят главное до руководителя. Проект в работе.",
  },
  en: {
    title: "Dantes Case Study: AI Report Analysis for Construction",
    description:
      "AI assistants Tezcode is building for Dantes Construction analyze company reports and deliver the key information to management. Work in progress.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = META[locale] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: PATH,
    availableLocales: AVAILABLE,
    title: meta.title,
    description: meta.description,
  });
}

export default async function DantesCaseStudyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = META[locale] ?? META.uz;
  const articleSchema = getArticleSchema({
    headline: meta.title,
    description: meta.description,
    path: PATH,
    locale,
    datePublished: "2026-10-14",
  });
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Case Studies", url: `${BASE_URL}/case-studies` },
    { name: "Dantes — AI assistants", url: `${BASE_URL}${PATH}` },
  ]);
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <CaseStoryClient
        copy={CONTENT}
        serviceHref="/ai-agent"
        brand={{ logo: { src: "/cases/dantes/logo.png", alt: "Dantes Construction", width: 425, height: 425 } }}
      />
      <Footer />
    </div>
  );
}
