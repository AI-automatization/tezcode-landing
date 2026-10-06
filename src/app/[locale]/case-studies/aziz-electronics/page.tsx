import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BASE_URL,
  buildPageMetadata,
  getArticleSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";
import { AzizCaseClient } from "./AzizCaseClient";

// TODO(Sardor): mijoz nomi va rozilik — rozilik olingach, meta'da sektor
// yorlig'i o'rniga real mijoz nomi qo'yiladi. Bu case'dagi 2M so'm/oy raqami
// saytning boshqa sahifalarida tasdiqlanmagan — mijoz bilan tekshirilishi
// kerak. (Slug URL barqarorligi uchun o'zgartirilmaydi.)

const TITLE = "Case Study: Elektronika do'koni hisobotni avtomatlashtirdi";
const DESCRIPTION =
  "Chilonzordagi 2 filialli elektronika do'koni RAOS POS + Accounting bilan oylik hisobot va soliq deklaratsiyasini avtomatlashtirdi. Muammo, yechim va natijalar bilan to'liq case study.";
const PATH = "/case-studies/aziz-electronics";

// Per-locale SERP copy, translated from each locale's own case copy (same
// figures). Titles omit "Tezcode": the layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string }> = {
  uz: { title: TITLE, description: DESCRIPTION },
  ru: {
    title: "Кейс: RAOS автоматизировал отчёты магазина электроники",
    description:
      "2 магазина электроники в Чиланзаре, Ташкент, с RAOS POS + Accounting: отчёт за 5 минут вместо 8 часов, налоговая декларация — автоматически.",
  },
  en: {
    title: "Case Study: RAOS Automates Electronics Store Reports",
    description:
      "2 electronics stores in Chilanzar with RAOS POS + Accounting: month-end report in 5 minutes instead of 8 hours, tax declaration automated.",
  },
  ar: {
    title: "دراسة حالة: RAOS يؤتمت تقارير متجر إلكترونيات",
    description:
      "متجرا إلكترونيات في شيلانزار مع RAOS POS + Accounting: بدل دفع 2 مليون سوم للمحاسب، RAOS يصدر التقارير بنفسه.",
  },
  uk: {
    title: "Кейс: RAOS автоматизував звіти магазину електроніки",
    description:
      "2 магазини електроніки в Чиланзарі з RAOS POS + Accounting: звіт за 5 хвилин замість 8 годин, податкова декларація — автоматично.",
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
  });
}

export default async function AzizCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale] ?? META.uz;
  const articleSchema = getArticleSchema({
    headline: meta.title,
    description: meta.description,
    path: PATH,
    locale,
    datePublished: "2026-07-09",
    dateModified: "2026-08-26",
  });
  const breadcrumb = getBreadcrumbSchema([
    { name: "Tezcode", url: BASE_URL },
    { name: "Case Studies", url: `${BASE_URL}/case-studies` },
    { name: "Elektronika do'koni — RAOS Accounting", url: `${BASE_URL}${PATH}` },
  ]);
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navbar />
      <AzizCaseClient />
      <Footer />
    </div>
  );
}
