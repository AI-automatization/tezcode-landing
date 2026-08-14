"use client";

import { m } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Ism kiriting"),
  email: z.string().email("Email noto'g'ri"),
  phone: z.string().optional(),
  idea: z.string().min(50, "Kamida 50 belgi — g'oyangizni batafsil yozing").max(3000),
  platform: z.enum(["web", "mobile", "both", "unknown"]),
  audience: z.enum(["uz", "ru-region", "global"]),
  budget: z.enum(["1-5k", "5-20k", "20-50k", "50k+", "unknown"]),
  timeline: z.enum(["1mo", "3mo", "6mo", "12mo+", "unknown"]),
  _hp: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const PLATFORMS = [
  { value: "web", label: "Veb (sayt, dashboard)" },
  { value: "mobile", label: "Mobile (iOS/Android)" },
  { value: "both", label: "Ikkalasi" },
  { value: "unknown", label: "Bilmayman — maslahat kerak" },
];

const AUDIENCES = [
  { value: "uz", label: "O'zbekiston (lokal)" },
  { value: "ru-region", label: "O'rta Osiyo (RU/UZ/KZ)" },
  { value: "global", label: "Global (EN bozor)" },
];

const BUDGETS = [
  { value: "1-5k", label: "$1K — $5K (MVP)" },
  { value: "5-20k", label: "$5K — $20K (To'liq mahsulot)" },
  { value: "20-50k", label: "$20K — $50K (Pro)" },
  { value: "50k+", label: "$50K+ (Enterprise)" },
  { value: "unknown", label: "Hali bilmayman" },
];

const TIMELINES = [
  { value: "1mo", label: "1 oy" },
  { value: "3mo", label: "3 oy" },
  { value: "6mo", label: "6 oy" },
  { value: "12mo+", label: "12+ oy" },
  { value: "unknown", label: "Moslashish kerak" },
];

export function MvpRoadmapForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { platform: "web", audience: "uz", budget: "5-20k", timeline: "3mo" },
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const subject = "investor"; // Use existing contact endpoint, mark as MVP request
      const message = [
        "[MVP ROADMAP SO'ROVI]",
        "",
        `Platforma: ${data.platform}`,
        `Auditoriya: ${data.audience}`,
        `Byudjet: ${data.budget}`,
        `Vaqt: ${data.timeline}`,
        "",
        "Idea:",
        data.idea,
      ].join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          subject,
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
          className="text-2xl md:text-3xl font-700 text-white mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Olamiz! Roadmap 24 soat ichida tayyor
        </h3>
        <p className="text-[var(--tc-text-secondary)] mb-6 max-w-xl mx-auto">
          Bekzod CEO o'zi ko'rib chiqadi va sizga Telegram + emailga PDF roadmap yuboradi.
          Tezcode jamoa Telegram orqali siz bilan to'g'ridan-to'g'ri bog'lanadi.
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
      {/* Contact */}
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

      <Field label="Telefon (ixtiyoriy)">
        <input
          {...register("phone")}
          placeholder="+998 90 123 45 67"
          className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white placeholder:text-[var(--tc-text-muted)] text-sm"
        />
      </Field>

      <Field label="Sizning startup g'oyangiz" error={errors.idea?.message}>
        <textarea
          {...register("idea")}
          rows={6}
          placeholder="Misol: O'zbekistondagi do'konlar uchun AI-powered POS dasturi. Mijoz egasi ko'p Excel'da ishlaydi, kassir xato qiladi, ombor ko'rinmaydi. Men shu muammoni AI yordamida..."
          className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white placeholder:text-[var(--tc-text-muted)] text-sm resize-y leading-relaxed"
        />
      </Field>

      {/* Platform / Audience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Platforma">
          <select
            {...register("platform")}
            className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white text-sm"
          >
            {PLATFORMS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Auditoriya">
          <select
            {...register("audience")}
            className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white text-sm"
          >
            {AUDIENCES.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Budget / Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Tahminiy byudjet">
          <select
            {...register("budget")}
            className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white text-sm"
          >
            {BUDGETS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Tugatish vaqti">
          <select
            {...register("timeline")}
            className="w-full px-4 py-3 rounded-[var(--tc-radius-sm)] bg-[var(--tc-surface-0)] border border-[var(--tc-border)] focus:border-[var(--tc-blue)] focus:outline-none text-white text-sm"
          >
            {TIMELINES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Honeypot */}
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
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("_hp")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-4 rounded-[var(--tc-radius-md)] bg-[var(--tc-gold)] text-[var(--tc-ink)] font-700 text-base hover:bg-[var(--tc-gold-light)] transition-all duration-300 tc-glow-gold hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Yuborilmoqda..." : "Bepul MVP Roadmap olish"}
      </button>

      {status === "error" && (
        <div className="p-3 rounded-[var(--tc-radius-sm)] bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
          Yuborishda xato. Telegram orqali bog'laning: @tezcode_managament
        </div>
      )}

      <p className="text-xs text-center text-[var(--tc-text-muted)]">
        Sizning g'oyangiz faqat Bekzod CEO va asosiy jamoa ko'radi. NDA imzolaymiz so'rasangiz.
      </p>
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
