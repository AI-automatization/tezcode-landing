import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CaseStudiesIndexClient } from "./CaseStudiesIndexClient";

export const metadata: Metadata = {
  title: "Case Studies — Real natijalar",
  description:
    "Tezcode mahsulotlari bilan real biznes egalari erishgan natijalar — RAOS, AI Office, Carevy + HamshiraGo case study'lar.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Navbar />
      <CaseStudiesIndexClient />
      <Footer />
    </>
  );
}
