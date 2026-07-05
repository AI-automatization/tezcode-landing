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
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { StickyCTA } from "@/components/StickyCTA";
import { CookieConsent } from "@/components/CookieConsent";

// ─────────────────────────────────────────────────────────
// Main Landing Page
// Each section is a Server Component that reads translations
// ─────────────────────────────────────────────────────────
export default function HomePage() {
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

      {/* Footer */}
      <Footer />

      {/* Floating Telegram + Sticky Mobile CTA */}
      <FloatingContact />

      {/* Desktop scroll-in conversion bar */}
      <StickyCTA />

      {/* Cookie consent (GDPR + UZ legal) */}
      <CookieConsent />
    </main>
  );
}
