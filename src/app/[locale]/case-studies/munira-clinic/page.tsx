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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
  });
}

export default async function MuniraCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const articleSchema = getArticleSchema({
    headline: TITLE,
    description: DESCRIPTION,
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
