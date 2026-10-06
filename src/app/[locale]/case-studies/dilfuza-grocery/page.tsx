import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BASE_URL,
  buildPageMetadata,
  getArticleSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";
import { DilfuzaCaseClient } from "./DilfuzaCaseClient";

// TODO(Sardor): mijoz nomi va rozilik — rozilik olingach, meta'da sektor
// yorlig'i o'rniga real mijoz nomi qo'yiladi. (Slug URL barqarorligi uchun
// o'zgartirilmaydi.)

const TITLE = "Case Study: Oziq-ovqat do'koni 30 kunda POS'ga o'tdi";
const DESCRIPTION =
  "Yunusoboddagi oziq-ovqat do'koni RAOS POS bilan 30 kunda Excel'dan tartibli hisobga o'tdi — oyiga ~800 ming so'm tejov. Muammo, yechim va natijalar bilan to'liq case study.";
const PATH = "/case-studies/dilfuza-grocery";

// Per-locale SERP copy, translated from each locale's own case copy (same
// figures). Titles omit "Tezcode": the layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string }> = {
  uz: { title: TITLE, description: DESCRIPTION },
  ru: {
    title: "Кейс: магазин в Ташкенте перешёл на POS за 30 дней",
    description:
      "Магазин в Юнусабаде перешёл с Excel на RAOS POS за 30 дней и экономит 800K сум в месяц. Проблема, решение и результаты.",
  },
  en: {
    title: "Case Study: Grocery Store Moved to POS in 30 Days",
    description:
      "A Yunusabad grocery store moved from Excel to RAOS POS in 30 days and saves 800K UZS a month. Problem, solution and results.",
  },
  ar: {
    title: "دراسة حالة: بقالة انتقلت إلى نقاط البيع خلال 30 يومًا",
    description:
      "بقالة في يونسآباد بطشقند انتقلت من Excel إلى RAOS POS خلال 30 يومًا وتوفّر 800 ألف سوم شهريًا.",
  },
  uk: {
    title: "Кейс: продуктовий магазин перейшов на POS за 30 днів",
    description:
      "Магазин у Юнусабаді перейшов з Excel на RAOS POS за 30 днів і економить 800K сум на місяць. Проблема, рішення і результати.",
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

export default async function DilfuzaCaseStudyPage({
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
    { name: "Oziq-ovqat do'koni — RAOS POS", url: `${BASE_URL}${PATH}` },
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
      <DilfuzaCaseClient />
      <Footer />
    </div>
  );
}
