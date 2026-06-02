"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Reveal } from "@/components/motion/Reveal";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

const COPY: Record<Lang, { badge: string; title: string; titleHighlight: string; subtitle: string }> = {
  uz: {
    badge: "Live AI Engineering",
    title: "AI biznesni quradi —",
    titleHighlight: "soniyalarda",
    subtitle: "Bizning AI engineer'larimiz koda yozadi, test qiladi va deploy qiladi. Sen faqat biznesinga e'tibor berasan.",
  },
  ru: {
    badge: "Live AI Engineering",
    title: "AI создаёт бизнес —",
    titleHighlight: "за секунды",
    subtitle: "Наши AI инженеры пишут код, тестируют и деплоят. Вы фокусируетесь только на бизнесе.",
  },
  en: {
    badge: "Live AI Engineering",
    title: "AI builds your business —",
    titleHighlight: "in seconds",
    subtitle: "Our AI engineers write code, test it, and deploy. You focus only on your business.",
  },
  ar: {
    badge: "Live AI Engineering",
    title: "AI يبني عملك —",
    titleHighlight: "في ثوانٍ",
    subtitle: "مهندسو AI لدينا يكتبون الكود ويختبرونه وينشرونه. أنت تركز على عملك فقط.",
  },
  uk: {
    badge: "Live AI Engineering",
    title: "AI створює бізнес —",
    titleHighlight: "за секунди",
    subtitle: "Наші AI інженери пишуть код, тестують і деплоять. Ви фокусуєтесь лише на бізнесі.",
  },
};

const CODE_LINES = [
  { p: "$ ", c: "tezcode generate --product=raos --feature=loyalty", t: "command" },
  { p: "→ ", c: "Analyzing business logic...", t: "info" },
  { p: "→ ", c: "Generating database schema (PostgreSQL)...", t: "info" },
  { p: "✓ ", c: "Created models/Customer.ts", t: "success" },
  { p: "✓ ", c: "Created api/loyalty/route.ts", t: "success" },
  { p: "✓ ", c: "Generated tests (97% coverage)", t: "success" },
  { p: "→ ", c: "Deploying to production...", t: "info" },
  { p: "✓ ", c: "Deployed in 47s — https://raos.uz", t: "success" },
];

const TYPE_SPEED = 18;
const LINE_DELAY = 350;

export function LiveCodeDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (currentLine >= CODE_LINES.length) {
      setDone(true);
      return;
    }
    const line = CODE_LINES[currentLine].c;
    if (currentText.length < line.length) {
      const id = setTimeout(() => {
        setCurrentText(line.slice(0, currentText.length + 1));
      }, TYPE_SPEED);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setCurrentLine((n) => n + 1);
      setCurrentText("");
    }, LINE_DELAY);
    return () => clearTimeout(id);
  }, [inView, currentLine, currentText]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 bg-[var(--tc-ink)] overflow-hidden"
    >
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,64,255,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs font-500 text-[var(--tc-blue-text)] mb-6 uppercase tracking-[0.2em]">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--tc-blue)]"
            />
            {t.badge}
          </div>
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}{" "}
            <span className="tc-text-gradient-blue">{t.titleHighlight}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative rounded-[var(--tc-radius-lg)] border border-[var(--tc-border-bright)] bg-[#0f1118] overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[var(--tc-border)] bg-[#15171f]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 text-center text-xs text-[var(--tc-text-muted)] font-mono">
                tezcode ─ ai engineer
              </div>
              <div className="text-xs text-[var(--tc-text-muted)] font-mono">
                {done ? (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    deployed
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)]"
                    />
                    running
                  </span>
                )}
              </div>
            </div>

            {/* Code body */}
            <div
              className="px-6 py-6 font-mono text-sm md:text-base leading-relaxed min-h-[360px]"
              style={{ fontFamily: "ui-monospace, Menlo, Monaco, Consolas, monospace" }}
            >
              {CODE_LINES.slice(0, currentLine).map((line, i) => (
                <div key={i} className="flex">
                  <span
                    className={
                      line.t === "command"
                        ? "text-[var(--tc-gold)]"
                        : line.t === "success"
                          ? "text-emerald-400"
                          : "text-[var(--tc-blue-text)]"
                    }
                  >
                    {line.p}
                  </span>
                  <span className="text-[var(--tc-text-primary)]">
                    {line.c}
                  </span>
                </div>
              ))}
              {currentLine < CODE_LINES.length && (
                <div className="flex">
                  <span
                    className={
                      CODE_LINES[currentLine].t === "command"
                        ? "text-[var(--tc-gold)]"
                        : CODE_LINES[currentLine].t === "success"
                          ? "text-emerald-400"
                          : "text-[var(--tc-blue-text)]"
                    }
                  >
                    {CODE_LINES[currentLine].p}
                  </span>
                  <span className="text-[var(--tc-text-primary)]">
                    {currentText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-[var(--tc-text-primary)] ml-0.5"
                  />
                </div>
              )}
              {done && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--tc-border)]"
                >
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    47s deploy
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs text-[var(--tc-blue-text)] font-500">
                    97% test coverage
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs text-[var(--tc-gold)] font-500">
                    Zero downtime
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
