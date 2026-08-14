"use client";

import { m } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  repo: z
    .string()
    .url("To'liq URL kerak (https://github.com/...)")
    .refine((v) => /github\.com|gitlab\.com|bitbucket\.org/.test(v), {
      message: "GitHub/GitLab/Bitbucket URL kiriting",
    }),
  context: z.string().max(1000).optional(),
  isPrivate: z.boolean().optional(),
  _hp: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function CodeReviewForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const message = [
        "[AI CODE REVIEW SO'ROVI]",
        "",
        `Repository: ${data.repo}`,
        `Private: ${data.isPrivate ? "Ha (collaborator qo'shish kerak)" : "Yo'q (public)"}`,
        "",
        "Context:",
        data.context || "(yo'q)",
      ].join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: "other",
          message,
          locale: "uz",
          _hp: data._hp,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-10 rounded-[var(--tc-radius-xl)] border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 to-[var(--tc-surface-2)] text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 flex items-center justify-center text-4xl">
          ✓
        </div>
        <h3
          className="text-2xl font-700 text-white mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Repo qabul qilindi
        </h3>
        <p className="text-[var(--tc-text-secondary)] mb-6 max-w-xl mx-auto">
          24 soat ichida Telegram + email orqali to'liq tahlil yuboriladi.
          Private repo bo'lsa, Bekzod sizdan collaborator ulanishni so'raydi.
        </p>
        <a
          href="https://t.me/tezcode_managament"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-500 text-sm tc-glow-blue hover:bg-[var(--tc-blue-light)] transition-colors"
        >
          Telegram'da kuting →
        </a>
      </m.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-7 md:p-10 rounded-[var(--tc-radius-xl)] border border-[var(--tc-border-bright)] bg-[var(--tc-surface-2)] space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Ismingiz" error={errors.name?.message}>
          <input
            {...register("name")}
            placeholder="Aziz Karimov"
            className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white placeholder:text-[var(--tc-text-muted)] text-sm"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="aziz@example.com"
            className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white placeholder:text-[var(--tc-text-muted)] text-sm"
          />
        </Field>
      </div>

      <Field label="Repository URL" error={errors.repo?.message}>
        <input
          {...register("repo")}
          placeholder="https://github.com/sizning-loyihangiz"
          className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white placeholder:text-[var(--tc-text-muted)] text-sm font-mono"
        />
      </Field>

      <label className="flex items-center gap-2 text-sm text-[var(--tc-text-secondary)] cursor-pointer">
        <input
          type="checkbox"
          {...register("isPrivate")}
          className="w-4 h-4 rounded border-[var(--tc-border)] bg-[var(--tc-surface-0)] accent-[var(--tc-blue)]"
        />
        Repo private (Bekzod collaborator qo'shilishi kerak)
      </label>

      <Field label="Qo'shimcha kontekst (ixtiyoriy)">
        <textarea
          {...register("context")}
          rows={4}
          placeholder="Misol: bu mening AI startup'imning backend'i, FastAPI + Postgres ishlatadi. Production'ga chiqarishdan oldin tahlil olishni xohlayman."
          className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white placeholder:text-[var(--tc-text-muted)] text-sm resize-y leading-relaxed"
        />
      </Field>

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
        <input type="text" tabIndex={-1} autoComplete="off" {...register("_hp")} />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-4 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-700 text-base hover:bg-[var(--tc-blue-light)] transition-all duration-300 tc-glow-blue hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Yuborilmoqda..." : "Repo'ni tahlil qilish"}
      </button>

      {status === "error" && (
        <div className="p-3 rounded-[var(--tc-radius-sm)] bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
          Yuborishda xato. Telegram: @tezcode_managament
        </div>
      )}
    </form>
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
      <label className="block text-xs font-500 text-[var(--tc-text-secondary)] mb-1.5 uppercase tracking-widest">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
