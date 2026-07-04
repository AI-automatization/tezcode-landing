import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { CaseStudiesIndexClient } from "./CaseStudiesIndexClient";

export const metadata = buildPageMetadata({
  path: "/case-studies",
  title: "Case Studies — Real natijalar",
  description:
    "Tezcode mahsulotlari bilan real biznes egalari erishgan natijalar — RAOS, AI Office, ClinicaGo + HamshiraGo case study'lar.",
});

export default function CaseStudiesIndexPage() {
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <Navbar />
      <CaseStudiesIndexClient />
      <Footer />
    </div>
  );
}
