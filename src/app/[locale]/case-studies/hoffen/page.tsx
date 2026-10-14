import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CaseStoryClient } from "@/components/case-study/CaseStoryClient";
import { BASE_URL, buildPageMetadata, getArticleSchema, getBreadcrumbSchema } from "@/lib/seo";
import { CONTENT } from "./content";

const PATH = "/case-studies/hoffen";
// Copy exists in uz/ru/en; ar and uk canonicalize to the uz original.
const AVAILABLE = ["uz", "ru", "en"] as const;

// Titles omit "Tezcode": the layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string }> = {
  uz: {
    title: "Hoffen keysi: Telegram'da 7 ta AI agent biznes uchun",
    description:
      "Avtokimyo ishlab chiqaruvchi Hoffen uchun Tezcode qurgan 7 ta AI agent: savdo intizomi, ombor, qarzdorlik, HR va kunlik hisobotlar Telegram'da. 80+ avtomatik ish har kuni.",
  },
  ru: {
    title: "Кейс Hoffen: 7 ИИ-агентов в Telegram для бизнеса",
    description:
      "7 ИИ-агентов Tezcode для производителя автохимии Hoffen: дисциплина продаж, склад, дебиторка, HR и ежедневные отчёты в Telegram. 80+ автоматических задач каждый день.",
  },
  en: {
    title: "Hoffen Case Study: 7 AI Agents Running in Telegram",
    description:
      "7 AI agents Tezcode built for automotive chemicals maker Hoffen: sales discipline, inventory, receivables, HR and daily reports in Telegram, with 80+ daily automations.",
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

export default async function HoffenCaseStudyPage({ params }: { params: Promise<{ locale: string }> }) {
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
    { name: "Hoffen — AI agents", url: `${BASE_URL}${PATH}` },
  ]);
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <CaseStoryClient
        copy={CONTENT}
        serviceHref="/ai-agent"
        brand={{
          logo: { src: "/cases/hoffen/logo.png", alt: "Hoffen", width: 346, height: 79 },
          sideImages: [1, 2, 3, 4].map((n) => ({
            src: `/cases/hoffen/product-${n}.jpg`,
            alt: "Hoffen automotive chemicals product",
            width: 800,
            height: n === 4 ? 959 : 1067,
          })),
        }}
      />
      <Footer />
    </div>
  );
}
