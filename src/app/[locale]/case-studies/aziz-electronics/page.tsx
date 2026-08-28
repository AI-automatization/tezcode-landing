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

export default async function AzizCaseStudyPage({
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
