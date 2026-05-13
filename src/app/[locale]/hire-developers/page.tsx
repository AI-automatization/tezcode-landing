import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HireDevelopersClient } from "./HireDevelopersClient";

// ─────────────────────────────────────────────────────────
// SEO — EN primary (target audience: foreign tech founders)
// ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hire Senior Developers from Tashkent — from $30/hr | TezCode Teams",
  description:
    "Hire AI-skilled senior developers from Uzbekistan: $30–55/hr, English/Russian fluent, EST overlap 5 hours, IT Park residency, 2-week trial with full refund. 14-engineer in-house team.",
  keywords: [
    "hire developers Uzbekistan",
    "staff augmentation Tashkent",
    "dedicated developer Tashkent",
    "offshore developers Uzbekistan",
    "AI engineers for hire",
    "Claude developers",
    "RAG engineer hire",
    "senior React developer offshore",
    "Next.js developers Uzbekistan",
    "FastAPI developers for hire",
    "IT Park resident Uzbekistan",
    "TezCode Teams",
  ],
  openGraph: {
    title: "Hire senior developers from Tashkent — from $30/hr",
    description:
      "AI-skilled, English/Russian fluent, EST overlap, vetted in-house team. 2-week trial with full refund.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire senior developers from Tashkent — from $30/hr",
    description:
      "AI-skilled, English/Russian fluent, EST overlap, vetted in-house team. 2-week trial with full refund.",
  },
};

export default function HireDevelopersPage() {
  return (
    <>
      <Navbar />
      <HireDevelopersClient />
      <Footer />
    </>
  );
}
