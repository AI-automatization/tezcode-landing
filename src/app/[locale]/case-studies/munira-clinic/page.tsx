import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BASE_URL,
  buildPageMetadata,
  getArticleSchema,
  getBreadcrumbSchema,
} from "@/lib/seo";
import { MuniraCaseClient } from "./MuniraCaseClient";

// TODO(Sardor): mijoz nomi va rozilik — rozilik olingach, meta'da sektor
// yorlig'i o'rniga real mijoz nomi qo'yiladi. (Slug URL barqarorligi uchun
// o'zgartirilmaydi.)

const TITLE = "Case Study: Klinika navbati 40% qisqardi";
const DESCRIPTION =
  "Mirzo Ulug'bekdagi klinika ClinicaGo + HamshiraGo bilan navbat vaqtini 40% qisqartirdi — kunlik bemor 32 tadan 45 taga oshdi. Muammo, yechim va natijalar bilan to'liq case study.";
const PATH = "/case-studies/munira-clinic";

// Per-locale SERP copy, translated from each locale's own case copy (same
// figures). Titles omit "Tezcode": the layout template appends "| Tezcode".
const META: Record<string, { title: string; description: string }> = {
  uz: { title: TITLE, description: DESCRIPTION },
  ru: {
    title: "Кейс: очередь в клинике в Ташкенте сократилась на 40%",
    description:
      "Клиника в Мирзо-Улугбеке с ClinicaGo + HamshiraGo: очередь −40%, пациентов в день — с 32 до 45. Проблема, решение и результаты.",
  },
  en: {
    title: "Case Study: Clinic Queue Time Down 40%",
    description:
      "A Mirzo Ulugbek clinic cut queue time 40% with ClinicaGo + HamshiraGo — daily patients up from 32 to 45. Problem, solution and results.",
  },
  ar: {
    title: "دراسة حالة: تقليل وقت الانتظار في العيادة 40٪",
    description:
      "عيادة في ميرزو أولوغبيك بطشقند خفّضت وقت الانتظار 40٪ مع ClinicaGo + HamshiraGo — المرضى يوميًا من 32 إلى 45.",
  },
  uk: {
    title: "Кейс: черга в клініці скоротилася на 40%",
    description:
      "Клініка в Мірзо-Улугбеку з ClinicaGo + HamshiraGo: черга −40%, пацієнтів на день — з 32 до 45. Проблема, рішення і результати.",
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

export default async function MuniraCaseStudyPage({
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
    { name: "Klinika — ClinicaGo + HamshiraGo", url: `${BASE_URL}${PATH}` },
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
      <MuniraCaseClient />
      <Footer />
    </div>
  );
}
