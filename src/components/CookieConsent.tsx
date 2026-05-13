"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

const COPY: Record<Lang, { title: string; body: string; accept: string; decline: string; learn: string }> = {
  uz: {
    title: "Cookie va analitika",
    body: "Saytni yaxshilash uchun cookie ishlatamiz. Davom etish bilan rozilik bildirasiz.",
    accept: "Roziman",
    decline: "Faqat zarur",
    learn: "Batafsil",
  },
  ru: {
    title: "Cookie и аналитика",
    body: "Мы используем cookie для улучшения сайта. Продолжая, вы соглашаетесь.",
    accept: "Согласен",
    decline: "Только нужные",
    learn: "Подробнее",
  },
  en: {
    title: "Cookies & Analytics",
    body: "We use cookies to improve your experience. By continuing, you agree to our cookie policy.",
    accept: "Accept all",
    decline: "Essential only",
    learn: "Learn more",
  },
  ar: {
    title: "ملفات تعريف الارتباط والتحليلات",
    body: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. باستمرارك، فإنك توافق على سياستنا.",
    accept: "أوافق",
    decline: "الضروري فقط",
    learn: "اعرف المزيد",
  },
  uk: {
    title: "Cookie та аналітика",
    body: "Ми використовуємо cookie, щоб покращити сайт. Продовжуючи, ви погоджуєтесь.",
    accept: "Згоден",
    decline: "Тільки необхідні",
    learn: "Детальніше",
  },
};

const STORAGE_KEY = "tc_cookie_consent";

export function CookieConsent() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Delay show 1.5s so it doesn't compete with Hero animation
      const id = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(id);
    }
  }, []);

  function decide(value: "all" | "essential") {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ value, ts: Date.now() }),
    );
    setShow(false);
    // Notify analytics scripts
    window.dispatchEvent(
      new CustomEvent("tc:cookie-consent", { detail: { value } }),
    );
  }

  const policyHref = locale === "uz" ? "/privacy" : `/${locale}/privacy`;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-50"
          role="region"
          aria-label={t.title}
        >
          <div className="p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border-bright)] bg-[var(--tc-surface-2)]/95 backdrop-blur-xl shadow-2xl">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-xl shrink-0" aria-hidden>
                🍪
              </span>
              <div className="flex-1 min-w-0">
                <h3
                  className="font-700 text-white text-sm mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.title}
                </h3>
                <p className="text-xs text-[var(--tc-text-secondary)] leading-relaxed">
                  {t.body}{" "}
                  <a
                    href={policyHref}
                    className="text-[var(--tc-blue)] hover:underline"
                  >
                    {t.learn}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => decide("essential")}
                className="flex-1 px-3 py-2 rounded-[var(--tc-radius-sm)] border border-[var(--tc-border-bright)] text-[var(--tc-text-secondary)] text-xs font-500 hover:bg-[var(--tc-surface-3)] transition-colors"
              >
                {t.decline}
              </button>
              <button
                type="button"
                onClick={() => decide("all")}
                className="flex-1 px-3 py-2 rounded-[var(--tc-radius-sm)] bg-[var(--tc-blue)] text-white text-xs font-600 hover:bg-[var(--tc-blue-light)] transition-colors"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
