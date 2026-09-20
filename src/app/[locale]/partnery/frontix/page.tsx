import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { FrontixPartnerClient } from "./FrontixPartnerClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/partnery/frontix",
    title: "FRONTIX — tezcode veb va raqamli mahsulotlar hamkori",
    description:
      "FRONTIX — Toshkentdagi IT kompaniya: sayt, QR menyu, Telegram bot va onlayn buyurtma tizimlari. Tezcode bilan hamkorlikda mijoz veb-mahsulot va AI-avtomatlashtirishni bitta joydan oladi.",
    keywords: [
      "FRONTIX",
      "tezcode hamkor",
      "sayt yaratish Toshkent",
      "QR menyu",
      "Telegram bot",
      "tezcode partner",
    ],
  });
}

export default function FrontixPartnerPage() {
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <Navbar />
      <FrontixPartnerClient />
      <Footer />
    </div>
  );
}
