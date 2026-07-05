import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { AzizCaseClient } from "./AzizCaseClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/case-studies/aziz-electronics",
    title: "Aziz aka — RAOS buxgalterga 2M so'm/oy o'rniga keldi",
    description:
      "Chilonzor elektronika do'koni egasi Aziz aka 5 yil buxgalterga 2M so'm to'lab kelgan — RAOS bilan endi avtomat hisobot va deklaratsiya.",
  });
}

export default function AzizCaseStudyPage() {
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <Navbar />
      <AzizCaseClient />
      <Footer />
    </div>
  );
}
