"use client";

import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { contactSchema, type ContactData } from "@/lib/contact";
import { getLeadAttribution, trackLead } from "@/lib/lead-analytics";
import { getMarketFromPath } from "@/lib/markets";
import { Send } from "lucide-react";

const CHIP_LABEL: Record<string, string> = {
  uz: "Aloqa",
  ru: "Контакты",
  en: "Contact",
  ar: "اتصال",
  uk: "Контакти",
};

const DEFAULT_COUNTRY: Record<string, string> = {
  uz: "O'zbekiston",
  ru: "Узбекистан",
  en: "Uzbekistan",
  ar: "أوزبكستان",
  uk: "Узбекистан",
};

const inputClasses =
  "w-full px-4 py-3 rounded-[var(--tc-radius-md)] bg-[var(--tc-surface-2)] border border-[var(--tc-border)] text-[var(--tc-text-primary)] placeholder:text-[var(--tc-text-muted)] text-sm outline-none transition-colors focus:border-[var(--tc-blue)] focus:ring-2 focus:ring-[var(--tc-blue)]/20";

export function ContactForm({
  hideHeader = false,
}: {
  hideHeader?: boolean;
}) {
  const t = useTranslations("contact");
  const locale = useLocale();
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "demo", email: "", phone: "", country: DEFAULT_COUNTRY[locale] ?? "O'zbekiston", service: "" },
  });

  const validationMessage = (code?: string) => code ? t(`form.validation.${code}`) : undefined;

  async function onSubmit(data: ContactData) {
    if (submitting.current) return;
    submitting.current = true;
    setStatus("loading");
    try {
      const pathname = window.location.pathname;
      const sourcePage = /^\/(?!\/)[a-zA-Z0-9/_-]{0,299}$/.test(pathname) ? pathname : undefined;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          locale,
          sourcePage,
          attribution: getLeadAttribution(),
        }),
      });
      const result: unknown = await res.json();
      if (!res.ok || !result || typeof result !== "object" || !("success" in result) || result.success !== true) {
        throw new Error("Contact delivery failed");
      }
      setStatus("success");
      trackLead({
        language: locale,
        market: getMarketFromPath(pathname),
      });
      reset({ subject: "demo", email: "", phone: "", country: DEFAULT_COUNTRY[locale] ?? "O'zbekiston", service: "" });
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 sm:py-28 px-6 bg-[var(--tc-ink)] border-t border-[var(--tc-border)]"
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
          noValidate
          className="tc-card relative space-y-5 p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field id="contact-name" label={t("form.name")} error={validationMessage(errors.name?.message)}>
              <input
                {...register("name")}
                id="contact-name"
                autoComplete="name"
                maxLength={100}
                placeholder={t("form.name_placeholder")}
                className={inputClasses}
                required
                aria-required
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
            </Field>

            <Field id="contact-phone" label={t("form.phone")} error={validationMessage(errors.phone?.message)}>
              <input
                {...register("phone")}
                id="contact-phone"
                type="tel"
                autoComplete="tel"
                maxLength={50}
                placeholder={t("form.phone_placeholder")}
                className={inputClasses}
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? "contact-phone-error" : undefined}
              />
            </Field>
          </div>

          <p className="text-sm text-[var(--tc-text-muted)]">{t("form.contact_hint")}</p>
          <Field id="contact-email" label={t("form.email")} error={validationMessage(errors.email?.message)}>
            <input
              {...register("email")}
              id="contact-email"
              type="email"
              autoComplete="email"
              maxLength={200}
              placeholder={t("form.email_placeholder")}
              className={inputClasses}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field id="contact-country" label={t("form.country")} error={validationMessage(errors.country?.message)}>
              <input
                {...register("country")}
                id="contact-country"
                autoComplete="country-name"
                maxLength={80}
                placeholder={t("form.country_placeholder")}
                className={inputClasses}
                aria-invalid={errors.country ? true : undefined}
                aria-describedby={errors.country ? "contact-country-error" : undefined}
              />
            </Field>
            <Field id="contact-service" label={t("form.service")} error={validationMessage(errors.service?.message)}>
              <input
                {...register("service")}
                id="contact-service"
                type="text"
                maxLength={200}
                placeholder={t("form.service_placeholder")}
                className={inputClasses}
                aria-invalid={errors.service ? true : undefined}
                aria-describedby={errors.service ? "contact-service-error" : undefined}
              />
            </Field>
          </div>

          {/* Subject stays fixed to "demo" — the dropdown was one field too many */}
          <input type="hidden" {...register("subject")} value="demo" />

          <Field id="contact-message" label={t("form.message")} error={validationMessage(errors.message?.message)}>
            <textarea
              {...register("message")}
              id="contact-message"
              rows={3}
              maxLength={2000}
              placeholder={t("form.message_placeholder")}
              className={`${inputClasses} resize-y`}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
          </Field>

          {/* Honeypot fields — hidden, bots fill them. Both are plain text and
              carry the password-manager opt-outs: an autofilled `type="email"`
              input here would get a real visitor's lead silently dropped. */}
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
                data-lpignore="true"
                data-1p-ignore=""
                data-form-type="other"
                {...register("_hp")}
              />
            </label>
            <label>
              Leave blank
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                data-lpignore="true"
                data-1p-ignore=""
                data-form-type="other"
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
            <div
              role="status"
              aria-live="polite"
              className="p-3 rounded-[var(--tc-radius-md)] bg-[rgba(5,150,105,0.08)] border border-[rgba(5,150,105,0.3)] text-[var(--tc-success)] text-sm text-center"
            >
              {t("form.success")}
            </div>
          )}
          {status === "error" && (
            <div
              role="alert"
              aria-live="assertive"
              className="p-3 rounded-[var(--tc-radius-md)] bg-[rgba(220,38,38,0.06)] border border-[rgba(220,38,38,0.3)] text-[#dc2626] text-sm text-center"
            >
              {t("form.error")}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-600 text-[var(--tc-text-primary)] mb-1.5"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-[#dc2626]">
          {error}
        </p>
      )}
    </div>
  );
}
