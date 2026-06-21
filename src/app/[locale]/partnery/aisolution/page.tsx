import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { AisolutionPartnerClient } from "./AisolutionPartnerClient";

export const metadata = buildPageMetadata({
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

export default function AisolutionPartnerPage() {
  return (
    <>
      <Navbar />
      <AisolutionPartnerClient />
      <Footer />
    </>
  );
}
