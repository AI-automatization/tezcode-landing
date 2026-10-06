import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { AisolutionPartnerClient } from "./AisolutionPartnerClient";

// Per-locale SERP copy, translated from each locale's own body copy (same
// facts). Titles omit a trailing "Tezcode": the layout template appends it.
const META: Record<
  string,
  { title: string; description: string; ogTitle?: string; ogDescription?: string }
> = {
  uz: {
    title: "AI Solution — tezcode rasmiy joriy etish hamkori",
    description:
      "AI Solution — tezcode'ning rasmiy joriy etish (integration) hamkori. O'zbekiston bo'ylab 120+ bizneslarga AI-yechimlarni kalit topshiriq joriy qiladi: ovozli AI-agentlar, chatbotlar, analitika.",
  },
  ru: {
    title: "AI Solution — официальный партнёр по внедрению ИИ, Ташкент",
    description:
      "AI Solution — официальный партнёр tezcode по внедрению: ИИ-продукты под ключ для бизнеса Узбекистана, 120+ внедрений. Голосовые ИИ-агенты, чат-боты.",
  },
  en: {
    title: "AI Solution — Official AI Implementation Partner",
    description:
      "AI Solution, tezcode's official implementation partner, deploys AI products end-to-end for businesses across Uzbekistan — 120+ implementations.",
  },
  ar: {
    title: "AI Solution — شريك التنفيذ الرسمي للذكاء الاصطناعي",
    description:
      "AI Solution شريك التنفيذ الرسمي لـ tezcode: ينفّذ منتجات الذكاء الاصطناعي للأعمال في أوزبكستان بشكل كامل — أكثر من 120 تنفيذًا.",
  },
  uk: {
    title: "AI Solution — офіційний партнер із впровадження AI",
    description:
      "AI Solution — офіційний партнер tezcode із впровадження: AI-продукти під ключ для бізнесу Узбекистану, 120+ впроваджень.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: "/partnery/aisolution",
    title: meta.title,
    description: meta.description,
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
