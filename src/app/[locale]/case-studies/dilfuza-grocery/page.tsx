import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DilfuzaCaseClient } from "./DilfuzaCaseClient";

export const metadata: Metadata = {
  title: "Dilfuza — Oziq-ovqat do'koni 30 kunda POS'ga o'tdi",
  description:
    "Yunusobod oziq-ovqat do'koni egasi Dilfuza X. RAOS POS bilan 30 kunda Excel chaos'idan tartibga o'tdi va oyiga 800K so'm tejaydi.",
  alternates: {
    canonical: "/case-studies/dilfuza-grocery",
  },
};

export default function DilfuzaCaseStudyPage() {
  return (
    <>
      <Navbar />
      <DilfuzaCaseClient />
      <Footer />
    </>
  );
}
