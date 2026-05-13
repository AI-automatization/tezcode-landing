"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Min 2 chars"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  subject: z.enum(["demo", "partnership", "investor", "career", "other"]),
  message: z.string().min(10, "Min 10 chars").max(2000, "Max 2000 chars"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations("contact");
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
    <section id="contact" className="py-24 px-6 bg-[var(--tc-surface-1)] relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--tc-blue)] opacity-[0.04] blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-700 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg">{t("subtitle")}</p>
          <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 p-8 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label={t("form.name")} error={errors.name?.message}>
              <input
                {...register("name")}
                placeholder={t("form.name_placeholder")}
                className="w-full px-4 py-2.5 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-[var(--tc-text-primary)] placeholder:text-[var(--tc-text-muted)] text-sm"
              />
            </Field>

            <Field label={t("form.email")} error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                placeholder={t("form.email_placeholder")}
                className="w-full px-4 py-2.5 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-[var(--tc-text-primary)] placeholder:text-[var(--tc-text-muted)] text-sm"
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label={t("form.phone")}>
              <input
                {...register("phone")}
                placeholder={t("form.phone_placeholder")}
                className="w-full px-4 py-2.5 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-[var(--tc-text-primary)] placeholder:text-[var(--tc-text-muted)] text-sm"
              />
            </Field>

            <Field label={t("form.subject")}>
              <select
                {...register("subject")}
                className="w-full px-4 py-2.5 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-[var(--tc-text-primary)] text-sm"
              >
                <option value="demo">{t("form.subjects.demo")}</option>
                <option value="partnership">{t("form.subjects.partnership")}</option>
                <option value="investor">{t("form.subjects.investor")}</option>
                <option value="career">{t("form.subjects.career")}</option>
                <option value="other">{t("form.subjects.other")}</option>
              </select>
            </Field>
          </div>

          <Field label={t("form.message")} error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={5}
              placeholder={t("form.message_placeholder")}
              className="w-full px-4 py-2.5 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-[var(--tc-text-primary)] placeholder:text-[var(--tc-text-muted)] text-sm resize-y"
            />
          </Field>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-6 py-3 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-semibold text-sm hover:bg-[var(--tc-blue-light)] transition-all duration-300 tc-glow-blue hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? t("form.submitting") : t("form.submit")}
          </button>

          {status === "success" && (
            <div className="p-3 rounded-[var(--tc-radius-sm)] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm text-center">
              {t("form.success")}
            </div>
          )}
          {status === "error" && (
            <div className="p-3 rounded-[var(--tc-radius-sm)] bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
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
      <label className="block text-xs font-500 text-[var(--tc-text-secondary)] mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
