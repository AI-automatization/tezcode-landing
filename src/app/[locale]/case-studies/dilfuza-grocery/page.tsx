import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { DilfuzaCaseClient } from "./DilfuzaCaseClient";

export const metadata = buildPageMetadata({
  path: "/case-studies/dilfuza-grocery",
  title: "Dilfuza — Oziq-ovqat do'koni 30 kunda POS'ga o'tdi",
  description:
    "Yunusobod oziq-ovqat do'koni egasi Dilfuza X. RAOS POS bilan 30 kunda Excel chaos'idan tartibga o'tdi va oyiga 800K so'm tejaydi.",
});

export default function DilfuzaCaseStudyPage() {
  return (
    <>
      <Navbar />
      <DilfuzaCaseClient />
      <Footer />
    </>
  );
}
