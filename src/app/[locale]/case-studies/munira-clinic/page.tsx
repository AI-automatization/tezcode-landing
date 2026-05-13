import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MuniraCaseClient } from "./MuniraCaseClient";

export const metadata: Metadata = {
  title: "Dr. Munira — Klinika navbati 40% tezroq, sadoqat 2x",
  description:
    "Mirzo Ulug'bek klinika rahbari Dr. Munira Carevy + HamshiraGo bilan navbat vaqtini 40% qisqartirdi va bemor sadoqatini 2x oshirdi.",
  alternates: {
    canonical: "/case-studies/munira-clinic",
  },
};

export default function MuniraCaseStudyPage() {
  return (
    <>
      <Navbar />
      <MuniraCaseClient />
      <Footer />
    </>
  );
}
