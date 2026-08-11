import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { ProductsGrid } from "@/components/ProductsGrid";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { AutomationShowcase } from "@/components/AutomationShowcase";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ROICalculator } from "@/components/ROICalculator";
import { Partners } from "@/components/Partners";
import { LatestNews } from "@/components/LatestNews";
import { PricingTiers } from "@/components/PricingTiers";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { CookieConsent } from "@/components/CookieConsent";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HOME_FAQ, type FaqLang } from "@/content/faq";
import { BASE_URL, getBreadcrumbSchema, getFaqSchema } from "@/lib/seo";

// ─────────────────────────────────────────────────────────
// Main Landing Page
// Each section is a Server Component that reads translations
// ─────────────────────────────────────────────────────────
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const faq = HOME_FAQ[locale as FaqLang] ?? HOME_FAQ.uz;

  // FAQPage + BreadcrumbList JSON-LD in the SSR HTML so answer engines
  // (Google AI Overviews, ChatGPT, Perplexity) can lift the Q&A + hierarchy.
  const faqSchema = getFaqSchema(faq.items);
  const breadcrumb = getBreadcrumbSchema([{ name: "Tezcode", url: BASE_URL }]);

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] overflow-hidden"
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero — above the fold */}
      <Hero />

      {/* Tech stack marquee — social proof */}
      <TechStackMarquee />

      {/* 6 Divisions */}
      <Suspense fallback={<div className="h-96 bg-[var(--tc-surface-1)]" />}>
        <ProductsGrid />
      </Suspense>

      {/* 8 Products showcase */}
      <Suspense fallback={<div className="h-96 bg-[var(--tc-ink)]" />}>
        <ProductsShowcase />
      </Suspense>

      {/* Real AI-generated showcase — "what we automate" image cards */}
      <AutomationShowcase />

      {/* Process: 4 steps */}
      <Suspense fallback={<div className="h-64 bg-[var(--tc-surface-1)]" />}>
        <ProcessSteps />
      </Suspense>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Partners — official integration partners (internal pages only) */}
      <Partners />

      {/* Latest news — recent blog posts, AI-industry + partnership updates */}
      <LatestNews />

      {/* Pricing Tiers */}
      <PricingTiers />

      {/* Testimonials — real Google reviews, mirrors the Review/AggregateRating
          JSON-LD in getOrganizationSchema so visible content matches structured data */}
      <Testimonials />

      {/* FAQ — visible Q&A that mirrors the FAQPage JSON-LD below */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <FaqAccordion
        badge={faq.badge}
        title={faq.title}
        titleAccent={faq.titleAccent}
        subtitle={faq.subtitle}
        items={faq.items}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Telegram + Sticky Mobile CTA */}
      <FloatingContact />

      {/* Cookie consent (GDPR + UZ legal) */}
      <CookieConsent />
    </main>
  );
}
