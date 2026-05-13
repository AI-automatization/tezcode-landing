import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LiveCodeDemo } from "@/components/LiveCodeDemo";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { ProductsGrid } from "@/components/ProductsGrid";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { BusinessSolutions } from "@/components/BusinessSolutions";
import { Team } from "@/components/Team";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { LiveVisitorBadge } from "@/components/LiveVisitorBadge";

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

      {/* Process: 4 steps */}
      <Suspense fallback={<div className="h-64 bg-[var(--tc-surface-1)]" />}>
        <ProcessSteps />
      </Suspense>

      {/* Customer Testimonials */}
      <Suspense fallback={<div className="h-64 bg-[var(--tc-surface-1)]" />}>
        <Testimonials />
      </Suspense>

      {/* Business solutions */}
      <Suspense fallback={<div className="h-64 bg-[var(--tc-surface-1)]" />}>
        <BusinessSolutions />
      </Suspense>

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
    </main>
  );
}
