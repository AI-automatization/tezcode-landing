import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { AisolutionPartnerClient } from "./AisolutionPartnerClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/partnery/aisolution",
    title: "AI Solution — tezcode rasmiy joriy etish hamkori",
    description:
      "AI Solution — tezcode'ning rasmiy joriy etish (integration) hamkori. O'zbekiston bo'ylab 120+ bizneslarga AI-yechimlarni kalit topshiriq joriy qiladi: ovozli AI-agentlar, chatbotlar, analitika.",
    keywords: [
      "AI Solution",
      "tezcode hamkor",
      "AI joriy etish",
      "AI integrator Uzbekistan",
      "tezcode partner",
    ],
  });
}

export default function AisolutionPartnerPage() {
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <Navbar />
      <AisolutionPartnerClient />
      <Footer />
    </div>
  );
}
