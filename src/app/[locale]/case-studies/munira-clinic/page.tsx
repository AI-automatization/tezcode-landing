import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { MuniraCaseClient } from "./MuniraCaseClient";

export const metadata = buildPageMetadata({
  path: "/case-studies/munira-clinic",
  title: "Dr. Munira — Klinika navbati 40% tezroq, sadoqat 2x",
  description:
    "Mirzo Ulug'bek klinika rahbari Dr. Munira Carevy + HamshiraGo bilan navbat vaqtini 40% qisqartirdi va bemor sadoqatini 2x oshirdi.",
});

export default function MuniraCaseStudyPage() {
  return (
    <>
      <Navbar />
      <MuniraCaseClient />
      <Footer />
    </>
  );
}
