"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { useLocale } from "next-intl";
import { ArrowRight, Check, X } from "lucide-react";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

const COPY: Record<
  Lang,
  {
    text: string;
    strong: string;
    cta: string;
    namePh: string;
    phonePh: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  }
> = {
  uz: {
    text: "Biznesingiz qancha yutishini 30 daqiqada aytib beramiz —",
    strong: "bepul",
    cta: "Bepul audit olish",
    namePh: "Ismingiz",
    phonePh: "+998 90 123 45 67",
    send: "Yuborish",
    sending: "Yuborilmoqda...",
    success: "Qabul qilindi! Tez orada bog'lanamiz",
    error: "Xatolik — qayta urinib ko'ring",
  },
  ru: {
    text: "За 30 минут скажем, сколько выиграет ваш бизнес —",
    strong: "бесплатно",
    cta: "Получить бесплатный аудит",
    namePh: "Ваше имя",
    phonePh: "+998 90 123 45 67",
    send: "Отправить",
    sending: "Отправка...",
    success: "Принято! Скоро свяжемся",
    error: "Ошибка — попробуйте ещё раз",
  },
  en: {
    text: "In 30 minutes we'll show how much your business can gain —",
    strong: "free",
    cta: "Get a free audit",
    namePh: "Your name",
    phonePh: "+998 90 123 45 67",
    send: "Send",
    sending: "Sending...",
    success: "Got it! We'll be in touch shortly",
    error: "Error — please try again",
  },
  ar: {
    text: "خلال 30 دقيقة نخبرك كم سيكسب عملك —",
    strong: "مجانًا",
    cta: "احصل على تدقيق مجاني",
    namePh: "اسمك",
    phonePh: "+998 90 123 45 67",
    send: "إرسال",
    sending: "جارٍ الإرسال...",
    success: "تم الاستلام! سنتواصل قريبًا",
    error: "خطأ — حاول مرة أخرى",
  },
  uk: {
    text: "За 30 хвилин скажемо, скільки виграє ваш бізнес —",
    strong: "безкоштовно",
    cta: "Отримати безкоштовний аудит",
    namePh: "Ваше ім'я",
    phonePh: "+998 90 123 45 67",
    send: "Надіслати",
    sending: "Надсилання...",
    success: "Прийнято! Скоро зв'яжемося",
    error: "Помилка — спробуйте ще раз",
  },
};

const SHOW_AFTER_PX = 900;
const HIDE_BEFORE_END_PX = 1600; // footer hub has its own CTA — don't double up
const DISMISS_KEY = "tc-sticky-cta-dismissed";

type Stage = "form" | "loading" | "success" | "error";

// Floating conversion bar for the home page: an inline name + phone form,
// visible immediately — submits to /api/contact, which forwards the lead
// to the Telegram group. No page navigation needed.
export function StickyCTA() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true); // assume dismissed until storage is read
  const [stage, setStage] = useState<Stage>("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");

    const onScroll = () => {
      const y = window.scrollY;
      const distanceFromEnd =
        document.documentElement.scrollHeight - (y + window.innerHeight);
      setVisible(y > SHOW_AFTER_PX && distanceFromEnd > HIDE_BEFORE_END_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  // Soft attention dim: the page stays scrollable and clickable-through is
  // irrelevant (backdrop is pointer-events-none) — only the visual focus
  // shifts to the bar until the visitor submits or closes it.
  const overlayActive = visible && !dismissed && stage !== "success";

  useEffect(() => {
    if (!overlayActive) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlayActive]);

  const submit = async () => {
    if (name.trim().length < 2 || phone.trim().length < 7 || stage === "loading") return;
    setStage("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          subject: "demo",
          message: "Saytdagi tezkor forma (sticky CTA) orqali bepul audit so'rovi",
          locale,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStage("success");
      // let the visitor read the confirmation, then tuck the bar away
      setTimeout(() => dismiss(), 4500);
    } catch {
      setStage("error");
      setTimeout(() => setStage("form"), 2500);
    }
  };

  const canSubmit = name.trim().length >= 2 && phone.trim().length >= 7;

  const inputClass =
    "rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.16)] text-sm text-white placeholder:text-[rgba(242,245,251,0.4)] px-4 py-2 outline-none focus:border-[#5b8cff] transition-colors duration-200";

  return (
    <AnimatePresence>
      {overlayActive && (
        <m.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-hidden
          className="hidden md:block fixed inset-0 z-[60] bg-[rgba(4,10,30,0.45)] backdrop-blur-[2px] pointer-events-none"
        />
      )}
      {visible && !dismissed && (
        <m.div
          key="bar"
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          // mobile keeps its own sticky Telegram bar (FloatingContact) — desktop only
          className="hidden md:flex fixed bottom-5 left-1/2 -translate-x-1/2 z-[70] items-center gap-3 rounded-full bg-[var(--tc-navy)] border border-[rgba(255,255,255,0.14)] py-2.5 ps-5 pe-2.5 shadow-[0_16px_48px_rgba(4,10,30,0.45)]"
        >
          {stage === "success" ? (
            <span className="inline-flex items-center gap-2.5 text-sm font-600 text-[#34d399] py-1 pe-2">
              <Check className="w-4.5 h-4.5 shrink-0" strokeWidth={2.5} />
              {t.success}
            </span>
          ) : (
            <>
              <span className="relative flex w-2.5 h-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#34d399]" />
              </span>

              <p className="text-sm font-700 text-white whitespace-nowrap">{t.cta}:</p>

              <form
                className="flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  void submit();
                }}
              >
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePh}
                  autoComplete="name"
                  className={`${inputClass} w-36`}
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePh}
                  type="tel"
                  autoComplete="tel"
                  dir="ltr"
                  className={`${inputClass} w-44 tabular-nums`}
                />
                <button
                  type="submit"
                  disabled={!canSubmit || stage === "loading"}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--tc-blue)] hover:bg-[var(--tc-blue-light)] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-600 px-4 py-2 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  {stage === "loading" ? t.sending : stage === "error" ? t.error : t.send}
                  {stage !== "loading" && stage !== "error" && (
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  )}
                </button>
              </form>
            </>
          )}

          <button
            type="button"
            onClick={dismiss}
            aria-label="Close"
            className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-[rgba(242,245,251,0.55)] hover:text-white hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
