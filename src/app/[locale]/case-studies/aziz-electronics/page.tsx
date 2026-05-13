import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AzizCaseClient } from "./AzizCaseClient";

export const metadata: Metadata = {
  title: "Aziz aka — RAOS buxgalterga 2M so'm/oy o'rniga keldi",
  description:
    "Chilonzor elektronika do'koni egasi Aziz aka 5 yil buxgalterga 2M so'm to'lab kelgan — RAOS bilan endi avtomat hisobot va deklaratsiya.",
  alternates: {
    canonical: "/case-studies/aziz-electronics",
  },
};

export default function AzizCaseStudyPage() {
  return (
    <>
      <Navbar />
      <AzizCaseClient />
      <Footer />
    </>
  );
}
