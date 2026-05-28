import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CodeReviewForm } from "./CodeReviewForm";

export const metadata: Metadata = {
  title: "Bepul AI Kod Tekshiruvi — GitHub Repo Tahlil",
  description:
    "GitHub repo link bering — Tezcode AI senior dasturchi singari tahlil qiladi: arxitektura, OWASP xavfsizlik (Top 10), performance optimallashtirish, test qamrovi, dependencies. To'lov yo'q, ro'yxatdan o'tish yo'q.",
  alternates: {
    canonical: "https://www.tezcode.dev/tools/free-code-review",
  },
  openGraph: {
    title: "Bepul AI Kod Tekshiruvi — Tezcode",
    description: "GitHub repo'ngizni AI senior dasturchi tahlil qiladi. Bepul.",
    url: "https://www.tezcode.dev/tools/free-code-review",
    type: "website",
  },
};

const COVERAGE = [
  {
    icon: "🏗️",
    title: "Arxitektura",
    desc: "Folder struktura, modullar bog'lanishi, separation of concerns (mas'uliyatlarni ajratish)",
  },
  {
    icon: "🛡️",
    title: "Xavfsizlik",
    desc: "OWASP Top 10, SQL injection, XSS, auth/session, secrets exposure",
  },
  {
    icon: "⚡",
    title: "Performance",
    desc: "Database query (so'rov) optim, caching, lazy loading, bundle size",
  },
  {
    icon: "🧪",
    title: "Tests",
    desc: "Coverage (qamrov) %, missing edge case, integration vs unit balance",
  },
  {
    icon: "📦",
    title: "Dependencies",
    desc: "Outdated package, security CVE, alternative libraries",
  },
  {
    icon: "🎨",
    title: "Code style",
    desc: "TypeScript strict, ESLint compliance, naming convention",
  },
];

export default function CodeReviewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--tc-ink)] pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs font-500 text-[var(--tc-blue)] mb-4 uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-blue)] animate-pulse" />
              AI Code Review · Bepul
            </div>
            <h1
              className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Repo'ngizni{" "}
              <span className="tc-text-gradient-blue">
                senior engineer
              </span>{" "}
              ko'rib bersinmi?
            </h1>
            <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto">
              GitHub link bering — Tezcode AI 24 soat ichida 6 ta nuqtada professional tahlil qiladi.
            </p>
          </div>

          {/* Coverage grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {COVERAGE.map((c) => (
              <div
                key={c.title}
                className="p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]"
              >
                <div className="text-2xl mb-2">{c.icon}</div>
                <h3
                  className="font-700 text-white text-sm mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.title}
                </h3>
                <p className="text-xs text-[var(--tc-text-muted)] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <CodeReviewForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
