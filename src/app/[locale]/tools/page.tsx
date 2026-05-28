import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bepul AI Vositalar — MVP Roadmap, Kod Tahlili",
  description:
    "Tezcode'ning bepul AI vositalari: MVP yo'l xaritasi generatori, GitHub kod tahlili, biznes hisob-kitobi. Ro'yxatdan o'tish kerak emas, to'lov yo'q.",
  alternates: {
    canonical: "https://www.tezcode.dev/tools",
  },
  openGraph: {
    title: "Bepul AI Vositalar — Tezcode",
    description: "MVP roadmap + kod tahlili + biznes ROI hisob — barchasi bepul.",
    url: "https://www.tezcode.dev/tools",
    type: "website",
  },
};

const TOOLS = [
  {
    slug: "free-mvp-roadmap",
    icon: "🗺️",
    title: "MVP Roadmap Generator",
    description: "Sizning startup g'oyangiz uchun professional MVP yo'l xaritasi — AI tomonidan, 5 daqiqada.",
    cta: "Bepul rejani olish",
    badge: "Ko'p talab",
  },
  {
    slug: "free-code-review",
    icon: "🔍",
    title: "AI Code Review",
    description: "GitHub repo link bering — AI bizning eng senior engineer'larimiz kabi tahlil qiladi.",
    cta: "Repository tahlil qilish",
    badge: "Yangi",
  },
  {
    slug: "roi-calculator",
    icon: "💰",
    title: "ROI Calculator",
    description: "Biznesingizning oylik aylanma + xodim soni — Tezcode bilan qancha tejaysiz?",
    cta: "Tejov hisoblash",
    href: "/#calculator",
  },
];

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--tc-ink)] pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.3em] mb-3">
              Free AI Tools
            </div>
            <h1
              className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bepul AI vositalar
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg max-w-2xl mx-auto">
              Tezcode'ning AI quvvati — sizning ehtiyojingiz uchun bepul. Lead magnet emas, real foydali.
            </p>
            <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool) => {
              const href = tool.href ?? `/tools/${tool.slug}`;
              return (
                <Link
                  key={tool.slug}
                  href={href}
                  className="group relative p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:bg-[var(--tc-surface-3)] hover:border-[var(--tc-border-bright)] transition-colors h-full flex flex-col"
                >
                  {tool.badge && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--tc-gold)]/15 border border-[var(--tc-gold)]/40 text-[10px] font-700 text-[var(--tc-gold)] uppercase tracking-widest">
                      {tool.badge}
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-[var(--tc-radius-md)] bg-[var(--tc-surface-0)] border border-[var(--tc-border-bright)] flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {tool.icon}
                  </div>
                  <h3
                    className="text-xl font-700 text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tool.title}
                  </h3>
                  <p className="text-sm text-[var(--tc-text-secondary)] leading-relaxed flex-1 mb-5">
                    {tool.description}
                  </p>
                  <div className="text-sm text-[var(--tc-blue)] font-500 inline-flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                    {tool.cta}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center p-8 rounded-[var(--tc-radius-lg)] border border-dashed border-[var(--tc-border-bright)] bg-[var(--tc-surface-2)]/40 max-w-3xl mx-auto">
            <h2
              className="text-2xl font-700 text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Yangi vosita kerakmi?
            </h2>
            <p className="text-[var(--tc-text-secondary)] text-sm mb-4">
              Sizga kerakli AI vosita bizda yo'qmi? Telegram'da yozing — qo'shamiz.
            </p>
            <a
              href="https://t.me/webdevelopertk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-500 text-sm tc-glow-blue hover:bg-[var(--tc-blue-light)] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram'da g'oya jonating
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
