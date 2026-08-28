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

export default async function DilfuzaCaseStudyPage({
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
