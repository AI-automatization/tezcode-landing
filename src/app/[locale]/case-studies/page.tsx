import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BASE_URL, buildPageMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { CaseStudiesIndexClient } from "./CaseStudiesIndexClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/case-studies",
    title: "Case Studies — Amaliy natijalar",
    description:
      "Tezcode mahsulotlari bo'yicha anonimlashtirilgan amaliy misollar — RAOS, AI Office, ClinicaGo + HamshiraGo case study'lar.",
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
