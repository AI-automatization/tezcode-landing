import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { SchwarzDigitsPartnerClient } from "./SchwarzDigitsPartnerClient";

export const metadata = buildPageMetadata({
  path: "/partnery/schwarz-digits",
  title: "Schwarz Digits — Tezcode va IT Park orqali boshlangan hamkorlik",
  description:
    "Tezcode asoschisi Bekzod Mirzaaliyev IT Park Uzbekistan orqali Schwarz Digits (Schwarz Group — Lidl va Kaufland egasi) vakili bilan uchrashdi. Yevropa AI ekotizimi va O'zbekiston IT bozori uchun imkoniyat haqida.",
  keywords: [
    "Schwarz Digits",
    "Schwarz Group",
    "IT Park Uzbekistan",
    "Tezcode hamkor",
    "Yevropa AI ekotizimi",
    "Lidl Kaufland IT",
  ],
});

export default function SchwarzDigitsPartnerPage() {
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <Navbar />
      <SchwarzDigitsPartnerClient />
      <Footer />
    </div>
  );
}
