import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LiveCodeDemo } from "@/components/LiveCodeDemo";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { ProductsGrid } from "@/components/ProductsGrid";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { AutomationShowcase } from "@/components/AutomationShowcase";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ROICalculator } from "@/components/ROICalculator";
import { Testimonials } from "@/components/Testimonials";
import { ReviewsWidget } from "@/components/ReviewsWidget";
import { Partners } from "@/components/Partners";
import { LatestNews } from "@/components/LatestNews";
import { PricingTiers } from "@/components/PricingTiers";
import { Team } from "@/components/Team";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { LiveVisitorBadge } from "@/components/LiveVisitorBadge";
import { CookieConsent } from "@/components/CookieConsent";

// ─────────────────────────────────────────────────────────
// Main Landing Page
// Each section is a Server Component that reads translations
// ─────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[var(--tc-ink)] overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero — above the fold */}
      <Hero />

      {/* Live AI engineering demo — proof of capability */}
      <LiveCodeDemo />

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

      {/* Customer Testimonials */}
      <Suspense fallback={<div className="h-64 bg-[var(--tc-surface-1)]" />}>
        <Testimonials />
      </Suspense>

      {/* Reviews widget — aggregate rating + 6 verified */}
      <ReviewsWidget />

      {/* Partners — official integration partners (internal pages only) */}
      <Partners />

      {/* Latest news — recent blog posts, AI-industry + partnership updates */}
      <LatestNews />

      {/* Pricing Tiers */}
      <PricingTiers />

      {/* Team */}
      <Suspense fallback={<div className="h-64 bg-[var(--tc-surface-1)]" />}>
        <Team />
      </Suspense>

      {/* Contact form */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Telegram + WhatsApp + Sticky Mobile CTA */}
      <FloatingContact />

      {/* Live visitor badge — social proof */}
      <LiveVisitorBadge />

      {/* Cookie consent (GDPR + UZ legal) */}
      <CookieConsent />
    </main>
  );
}
