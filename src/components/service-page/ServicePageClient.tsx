"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";
import { Magnetic } from "@/components/motion/Magnetic";
import { Link } from "@/i18n/routing";
import type { ServiceLang, ServicePageContent, ServicePageCopy } from "./types";
import { ServiceIcon } from "./ServiceIcon";

// Reusable, fully-animated renderer for the Tezcode TIER 1 service pages.
// Same design language as /for-businesses (Reveal / Tilt3D / Magnetic, gradient
// accents) but parameterised by a per-locale copy object so each route only
// has to supply content, not layout.

// ─────────────────────────── Hero ───────────────────────────
function HeroSection({ copy }: { copy: ServicePageCopy }) {
  const { scrollY } = useScroll();
  const meshY = useTransform(scrollY, [0, 600], ["0%", "30%"]);
  const meshOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const titleY = useTransform(scrollY, [0, 600], [0, 120]);
  const titleOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden tc-perspective">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: meshY, opacity: meshOpacity }} className="absolute inset-0">
          <div
            className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-[0.20]"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, var(--tc-blue) 0deg, transparent 60deg, var(--tc-gold) 180deg, transparent 240deg, var(--tc-blue) 360deg)",
              filter: "blur(80px)",
              animation: "tc-conic-spin 40s linear infinite",
            }}
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            animation: "tc-grid-pan 30s linear infinite",
          }}
        />
      </div>

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--tc-border-bright)] bg-[var(--tc-surface-1)]/60 backdrop-blur-md text-xs font-medium text-[var(--tc-text-secondary)] mb-8"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)]"
          />
          {copy.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 } }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-800 leading-[0.95] tracking-[-0.03em] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-[var(--tc-text-primary)]">{copy.hero.title1}</span>
          <span className="tc-text-gradient-blue block">{copy.hero.titleAccent}</span>
          {copy.hero.title2 ? (
            <span className="block text-[var(--tc-text-primary)]">{copy.hero.title2}</span>
          ) : null}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 } }}
          className="text-lg md:text-2xl text-[var(--tc-text-secondary)] max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          {copy.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 } }}
          className="text-sm md:text-base text-[var(--tc-gold)] font-500 mb-12"
        >
          {copy.hero.trust}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 } }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic strength={12}>
            <motion.a
              href="#consult"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex w-full sm:w-auto px-9 py-4 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-semibold text-sm overflow-hidden tc-glow-blue"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {copy.hero.ctaPrimary}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.a>
          </Magnetic>
          <Magnetic strength={10}>
            <motion.a
              href="#capabilities"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full sm:w-auto px-9 py-4 rounded-[var(--tc-radius-md)] border border-[var(--tc-border-bright)] bg-[var(--tc-surface-1)]/40 backdrop-blur-md text-[var(--tc-text-primary)] font-semibold text-sm hover:bg-[var(--tc-surface-2)] transition-colors items-center justify-center gap-2"
            >
              {copy.hero.ctaSecondary}
            </motion.a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────── Capabilities ───────────────────────────
function CapabilitiesSection({ copy }: { copy: ServicePageCopy }) {
  return (
    <section id="capabilities" className="relative py-32 px-6 bg-[var(--tc-surface-1)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs font-500 text-[var(--tc-blue-light)] mb-6 uppercase tracking-[0.2em]">
            {copy.capabilities.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-700 mb-4 tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {copy.capabilities.title}{" "}
            <span className="tc-text-gradient-blue">{copy.capabilities.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">{copy.capabilities.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
          {copy.capabilities.items.map((item, i) => (
            <RevealItem key={i}>
              <Tilt3D intensity={6} className="rounded-[var(--tc-radius-lg)] h-full">
                <div className="relative h-full p-8 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] transition-colors overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(0,64,255,0.12), transparent 70%)" }}
                  />
                  <div className="relative w-14 h-14 rounded-[var(--tc-radius-md)] bg-gradient-to-br from-[var(--tc-blue)] to-blue-700 flex items-center justify-center text-2xl mb-5">
                    <ServiceIcon name={item.icon} />
                  </div>
                  <h3 className="relative text-xl md:text-2xl font-700 text-[var(--tc-text-primary)] mb-3 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h3>
                  <p className="relative text-[var(--tc-text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </Tilt3D>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── Process ───────────────────────────
function ProcessSection({ copy }: { copy: ServicePageCopy }) {
  const STEP_COLORS = [
    { text: "text-[var(--tc-blue-text)]", ring: "border-[var(--tc-blue)]/40", glow: "rgba(0,64,255,0.18)" },
    { text: "text-[var(--tc-gold)]", ring: "border-[var(--tc-gold)]/40", glow: "rgba(212,160,23,0.18)" },
    { text: "text-purple-400", ring: "border-purple-400/40", glow: "rgba(168,85,247,0.18)" },
    { text: "text-emerald-400", ring: "border-emerald-400/40", glow: "rgba(52,211,153,0.18)" },
  ];

  return (
    <section className="relative py-32 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-6 uppercase tracking-[0.2em]">
            {copy.process.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-700 mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            {copy.process.title}{" "}
            <span className="tc-text-gradient-gold">{copy.process.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto">{copy.process.subtitle}</p>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, var(--tc-blue), var(--tc-gold), rgb(168,85,247), rgb(52,211,153))", opacity: 0.4 }}
          />
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.15}>
            {copy.process.steps.map((step, i) => {
              const c = STEP_COLORS[i] ?? STEP_COLORS[0];
              return (
                <RevealItem key={step.num}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative p-6 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] transition-colors h-full"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[var(--tc-radius-lg)]"
                      style={{ background: `radial-gradient(ellipse at top, ${c.glow}, transparent 70%)` }}
                    />
                    <div className="relative flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-full bg-[var(--tc-surface-0)] border-2 ${c.ring} flex items-center justify-center text-2xl`}>
                        <ServiceIcon name={step.icon} />
                      </div>
                      <span className={`text-4xl font-800 ${c.text} opacity-30`} style={{ fontFamily: "var(--font-display)" }}>
                        {step.num}
                      </span>
                    </div>
                    <h3 className="relative text-xl font-700 text-white mb-2 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {step.title}
                    </h3>
                    <p className="relative text-sm text-[var(--tc-text-secondary)] leading-relaxed">{step.desc}</p>
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────── Examples ───────────────────────────
function ExamplesSection({ copy }: { copy: ServicePageCopy }) {
  return (
    <section className="relative py-32 px-6 bg-[var(--tc-surface-1)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-6 uppercase tracking-[0.2em]">
            {copy.examples.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-700 mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            {copy.examples.title}{" "}
            <span className="tc-text-gradient-gold">{copy.examples.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">{copy.examples.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.12}>
          {copy.examples.items.map((item) => (
            <RevealItem key={item.tag}>
              <Tilt3D intensity={5} className="rounded-[var(--tc-radius-lg)] h-full">
                <div className="relative h-full p-8 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-gold)]/30 transition-colors overflow-hidden">
                  <span className="absolute top-6 right-6 text-5xl font-800 text-[var(--tc-gold)]/15 select-none" style={{ fontFamily: "var(--font-display)" }}>
                    {item.tag}
                  </span>
                  <h3 className="relative text-xl md:text-2xl font-700 text-[var(--tc-text-primary)] mb-3 tracking-tight pr-16" style={{ fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h3>
                  <p className="relative text-[var(--tc-text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </Tilt3D>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── FAQ ───────────────────────────
function FaqSection({ copy }: { copy: ServicePageCopy }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-32 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-6 uppercase tracking-[0.2em]">
            {copy.faq.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-700 mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            {copy.faq.title}{" "}
            <span className="tc-text-gradient-gold">{copy.faq.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">{copy.faq.subtitle}</p>
        </Reveal>

        <RevealStagger className="space-y-3" stagger={0.08}>
          {copy.faq.items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <RevealItem key={i}>
                <div
                  className={[
                    "rounded-[var(--tc-radius-lg)] border bg-[var(--tc-surface-2)] transition-colors overflow-hidden",
                    isOpen ? "border-[var(--tc-blue)]/40" : "border-[var(--tc-border)] hover:border-[var(--tc-border-bright)]",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-start"
                  >
                    <span className="text-base md:text-lg font-600 text-[var(--tc-text-primary)] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                      className={[
                        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl",
                        isOpen ? "bg-[var(--tc-blue)] text-white" : "bg-[var(--tc-surface-3)] text-[var(--tc-text-secondary)]",
                      ].join(" ")}
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[var(--tc-text-secondary)] leading-relaxed">{item.a}</div>
                  </motion.div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── Tech stack ───────────────────────────
function TechSection({ copy }: { copy: ServicePageCopy }) {
  if (!copy.tech) return null;
  const tech = copy.tech;
  return (
    <section className="relative py-32 px-6 bg-[var(--tc-surface-1)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs font-500 text-[var(--tc-blue-light)] mb-6 uppercase tracking-[0.2em]">
            {tech.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-700 mb-4 tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {tech.title}{" "}
            <span className="tc-text-gradient-blue">{tech.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">{tech.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {tech.items.map((item) => (
            <RevealItem key={item.name}>
              <div className="relative h-full p-6 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] transition-colors">
                <h3 className="text-lg font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── Pricing factors ───────────────────────────
function PricingSection({ copy }: { copy: ServicePageCopy }) {
  if (!copy.pricing) return null;
  const pricing = copy.pricing;
  return (
    <section className="relative py-32 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-6 uppercase tracking-[0.2em]">
            {pricing.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-700 mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            {pricing.title}{" "}
            <span className="tc-text-gradient-gold">{pricing.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto">{pricing.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
          {pricing.factors.map((f) => (
            <RevealItem key={f.title}>
              <div className="relative h-full p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-gold)]/30 transition-colors">
                <h3 className="text-lg md:text-xl font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {f.title}
                </h3>
                {f.price ? (
                  <p className="text-[var(--tc-gold)] font-700 text-lg mb-2">{f.price}</p>
                ) : null}
                <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">{f.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        {pricing.note ? (
          <Reveal delay={0.15}>
            <p className="mt-10 text-center text-sm text-[var(--tc-text-muted)] max-w-2xl mx-auto">{pricing.note}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

// ─────────────────────────── Related links ───────────────────────────
function RelatedSection({ copy }: { copy: ServicePageCopy }) {
  if (!copy.related) return null;
  const related = copy.related;
  return (
    <section className="relative py-32 px-6 bg-[var(--tc-surface-1)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs font-500 text-[var(--tc-blue-light)] mb-6 uppercase tracking-[0.2em]">
            {related.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-700 mb-4 tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {related.title}{" "}
            <span className="tc-text-gradient-blue">{related.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">{related.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {related.links.map((link) => (
            <RevealItem key={link.href}>
              <Link
                href={link.href}
                className="group relative flex flex-col h-full p-6 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-blue)]/40 transition-colors"
              >
                <h3 className="text-lg font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                  {link.label}
                  <svg className="w-4 h-4 text-[var(--tc-blue-light)] transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </h3>
                <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed">{link.desc}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────── Final CTA ───────────────────────────
function FinalCtaSection({ copy }: { copy: ServicePageCopy }) {
  return (
    <section id="consult" className="relative py-32 px-6 bg-[var(--tc-surface-1)] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,64,255,0.4), transparent 70%)", filter: "blur(60px)" }}
      />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-6 uppercase tracking-[0.2em]">
            {copy.cta.badge}
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-800 mb-6 tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-[var(--tc-text-primary)] block">{copy.cta.title}</span>
            <span className="tc-text-gradient-blue block">{copy.cta.titleAccent}</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--tc-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">{copy.cta.subtitle}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Magnetic strength={12}>
            <motion.a
              href="https://t.me/webdevelopertk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex px-10 py-5 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-700 text-base tc-glow-blue items-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              {copy.cta.button}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </Magnetic>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-[var(--tc-text-muted)]">{copy.cta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────── Page entry ───────────────────────────
export function ServicePageClient({ content }: { content: ServicePageContent }) {
  const locale = useLocale() as ServiceLang;
  const copy = content[locale] ?? content.uz;

  return (
    <main className="relative min-h-screen bg-[var(--tc-ink)] overflow-hidden">
      <Navbar />
      <HeroSection copy={copy} />
      <CapabilitiesSection copy={copy} />
      <TechSection copy={copy} />
      <ProcessSection copy={copy} />
      <ExamplesSection copy={copy} />
      <PricingSection copy={copy} />
      <FaqSection copy={copy} />
      <RelatedSection copy={copy} />
      <FinalCtaSection copy={copy} />
      <Footer />
    </main>
  );
}
