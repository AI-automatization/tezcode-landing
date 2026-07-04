"use client";

import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send } from "lucide-react";

// Deliberately minimal: a business owner only needs to leave a name and
// a phone number — everything else is optional. (Kept subject hidden with
// the "demo" default so the Telegram notification stays informative.)
const contactSchema = z.object({
  name: z.string().min(2, "Min 2 chars"),
  phone: z.string().min(7, "Min 7 digits").max(50),
  subject: z.enum(["demo", "partnership", "investor", "career", "other"]),
  message: z.string().max(2000, "Max 2000 chars").optional(),
  _hp: z.string().optional(),
  _hp2: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CHIP_LABEL: Record<string, string> = {
  uz: "Aloqa",
  ru: "Контакты",
  en: "Contact",
  ar: "اتصال",
  uk: "Контакти",
};

const inputClasses =
  "w-full px-4 py-3 rounded-[var(--tc-radius-md)] bg-[var(--tc-surface-2)] border border-[var(--tc-border)] text-[var(--tc-text-primary)] placeholder:text-[var(--tc-text-muted)] text-sm outline-none transition-colors focus:border-[var(--tc-blue)] focus:ring-2 focus:ring-[var(--tc-blue)]/20";

export function ContactForm({ hideHeader = false }: { hideHeader?: boolean }) {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "demo" },
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-6 bg-[var(--tc-ink)] border-t border-[var(--tc-border)]"
    >
      <div className="max-w-3xl mx-auto">
        {!hideHeader && (
          <div className="text-center mb-12">
            <div className="mb-5">
              <span className="tc-chip">{CHIP_LABEL[locale] ?? CHIP_LABEL.uz}</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-[var(--tc-text-primary)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("title")}
            </h2>
            <p className="text-[var(--tc-text-muted)] text-lg max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="tc-card relative space-y-5 p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label={t("form.name")} error={errors.name?.message}>
              <input
                {...register("name")}
                placeholder={t("form.name_placeholder")}
                className={inputClasses}
              />
            </Field>

            <Field label={t("form.phone")} error={errors.phone?.message}>
              <input
                {...register("phone")}
                type="tel"
                placeholder={t("form.phone_placeholder")}
                className={inputClasses}
              />
            </Field>
          </div>

          {/* Subject stays fixed to "demo" — the dropdown was one field too many */}
          <input type="hidden" {...register("subject")} value="demo" />

          <Field label={t("form.message")} error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={3}
              placeholder={t("form.message_placeholder")}
              className={`${inputClasses} resize-y`}
            />
          </Field>

          {/* Honeypot fields — hidden, bots fill them */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "-9999px",
              opacity: 0,
              pointerEvents: "none",
              height: 0,
              overflow: "hidden",
            }}
          >
            <label>
              Don't fill this in
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("_hp")}
              />
            </label>
            <label>
              Leave blank
              <input
                type="email"
                tabIndex={-1}
                autoComplete="off"
                {...register("_hp2")}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="tc-btn-primary w-full text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" strokeWidth={2} aria-hidden />
            {status === "loading" ? t("form.submitting") : t("form.submit")}
          </button>

          {status === "success" && (
            <div className="p-3 rounded-[var(--tc-radius-md)] bg-[rgba(5,150,105,0.08)] border border-[rgba(5,150,105,0.3)] text-[var(--tc-success)] text-sm text-center">
              {t("form.success")}
            </div>
          )}
          {status === "error" && (
            <div className="p-3 rounded-[var(--tc-radius-md)] bg-[rgba(220,38,38,0.06)] border border-[rgba(220,38,38,0.3)] text-[#dc2626] text-sm text-center">
              {t("form.error")}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-600 text-[var(--tc-text-primary)] mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-[#dc2626]">{error}</p>}
    </div>
  );
}
