"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

// Real, AI-generated showcase cards — "this is what we automate".
// Square brand images with a gradient overlay + title/subtitle + CTA.
const CARDS = [
  {
    img: "/showcase/biznes-avtomatlashtirish.jpeg",
    badge: "AI Office",
    title: "Biznesni avtomatlashtirish",
    subtitle: "Jarayonlarni AI bilan avtomatlashtiramiz",
    href: "/ai-avtomatizatsiya",
  },
  {
    img: "/showcase/raos-dokon.jpeg",
    badge: "RAOS",
    title: "Savdo va do'kon",
    subtitle: "Kassa, ombor va sotuv — bir tizimda",
    href: "/pos-tizimi",
  },
  {
    img: "/showcase/ai-chatbot.jpeg",
    badge: "24/7",
    title: "AI Chatbot",
    subtitle: "Mijozlarga 24/7 avtomatik javob",
    href: "/ai-chatbot",
  },
  {
    img: "/showcase/klinika-coremed.jpeg",
    badge: "CoreMed",
    title: "Klinika va salomatlik",
    subtitle: "Bemor qabuli va navbatni avtomatlashtirish",
    href: "/klinika-crm",
  },
] as const;

export function AutomationShowcase() {
  return (
    <section id="solutions" className="scroll-mt-24 py-32 px-6 bg-[var(--tc-ink)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bizning yechimlar
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            Har soha uchun — AI bilan biznesingizning har bir jarayonini avtomatlashtiramiz.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((c) => (
            <RevealItem key={c.href}>
              <Link
                href={c.href}
                className="group relative block aspect-square overflow-hidden rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)] hover:border-[var(--tc-border-bright)] transition-colors"
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge */}
                <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-600 bg-[var(--tc-blue)]/90 text-white backdrop-blur-md">
                  {c.badge}
                </span>

                {/* Gradient for legibility */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <h3
                    className="text-2xl font-700 text-white mb-1 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">{c.subtitle}</p>
                  <span className="inline-flex items-center gap-1.5 text-[var(--tc-gold)] text-sm font-600">
                    Batafsil
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
