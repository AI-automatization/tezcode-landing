"use client";

import { m } from "motion/react";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";

// Real Google Business Profile reviews (maps.app.goo.gl/pwDZT8ePLFy4wx9JA).
// Kept in the original language they were written in — these mirror the
// aggregateRating/review nodes in getOrganizationSchema() 1:1, so the visible
// content matches the structured data (Google's rich-results requirement).
const REVIEWS = [
  {
    name: "Gulyuz Zokirova",
    initial: "G",
    color: "#2e7d32",
    body: "Работать с Tezcode удобно — профессионально и ответственно. Спасибо!",
  },
  {
    name: "Dilshod Toriev",
    initial: "D",
    color: "#d84315",
    body: "Сделали Telegram-бота и админ-панель быстро и качественно, цена адекватная. Следующий проект тоже доверим этой команде.",
  },
  {
    name: "Botir Jomirzayev",
    initial: "B",
    color: "#5d4037",
    body: "Мне нужна была POS-система и система учёта для моего магазина — Tezcode предложила отличное решение. Теперь продажи, кассовый аппарат и отчётность управляются из одного места. Поддержка всегда готова помочь. Спасибо!",
  },
  {
    name: "Abdulboriy Shukurillayev",
    initial: "A",
    color: "#388e3c",
    body: "Очень удобно, всем рекомендую, стоит своих денег.",
  },
  {
    name: "Sardor",
    initial: "S",
    color: "#546e7a",
    body: "Для моего бизнеса они создали ИИ-агента, который отвечает клиентам круглосуточно. Это сэкономило много времени, и продажи выросли. Спасибо за современный подход.",
  },
  {
    name: "Muhammadyusuf",
    initial: "M",
    color: "#1565c0",
    body: "Я заказал программу для своего бизнеса у команды Tezcode. Они выполнили работу в срок и качественно, поддерживая связь на каждом этапе. Надёжная IT-команда в Ташкенте. Рекомендую!",
  },
] as const;

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="text-[var(--tc-gold)]"
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="py-32 px-6 bg-[var(--tc-surface-1)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-14">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {t("subtitle")}
          </p>

          {/* Aggregate rating — mirrors the AggregateRating schema node */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-2)] px-5 py-2.5">
            <span
              className="text-2xl font-700 text-[var(--tc-gold)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              5.0
            </span>
            <Stars />
            <span className="text-sm text-[var(--tc-text-muted)]">
              {t("google_count")}
            </span>
          </div>

          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent origin-center"
          />
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.08}
        >
          {REVIEWS.map((r) => (
            <RevealItem key={r.name}>
              <Tilt3D intensity={5} className="group rounded-[var(--tc-radius-lg)] h-full">
                <div className="relative p-7 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:border-[var(--tc-border-bright)] transition-colors duration-300 h-full flex flex-col overflow-hidden">
                  <div
                    className="relative flex items-center gap-4 mb-5"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div
                      className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-700 text-lg"
                      style={{ backgroundColor: r.color, fontFamily: "var(--font-display)" }}
                      aria-hidden
                    >
                      {r.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-white font-700 text-base truncate"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {r.name}
                      </div>
                      <Stars />
                    </div>
                  </div>

                  <blockquote
                    className="relative text-[var(--tc-text-secondary)] text-base leading-relaxed flex-1 mb-6"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {r.body}
                  </blockquote>

                  <div
                    className="relative pt-4 border-t border-[var(--tc-border)] flex items-center gap-2"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {/* Google "G" mark */}
                    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden>
                      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
                      <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
                      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
                    </svg>
                    <span className="text-xs text-[var(--tc-text-muted)]">
                      {t("google_label")}
                    </span>
                  </div>
                </div>
              </Tilt3D>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
