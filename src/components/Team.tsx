"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type Member = {
  name: string;
  role: string;
  telegram?: string;
  isFounder?: boolean;
};

const TEAM: Member[] = [
  {
    name: "Bekzod Mirzaaliyev",
    role: "Founder",
    telegram: "@tezcode_managament",
    isFounder: true,
  },
  {
    name: "Abdulaziz Yormatov",
    role: "COO · Developer · AI Specialist",
    telegram: "@mr_abdulaziz_yormatov",
  },
  {
    name: "Abdulloh Isroilov",
    role: "AI-Trade Co-founder · Trading Specialist · Developer",
  },
  {
    name: "Azimjon Qurbonov",
    role: "Savdo Builder Co-founder · Developer",
    telegram: "@Azim090",
  },
  {
    name: "Diyor Rahmatullayev",
    role: "HamshiraGo · ClinicGo Co-founder · Developer",
  },
  {
    name: "Sardor Madaliyev",
    role: "Ventra Co-founder · Developer",
    telegram: "@madaliev_s",
  },
  {
    name: "Ziyora Mirzakirova",
    role: "Work-Control Co-founder · Developer",
  },
  {
    name: "Emirhan Ertan",
    role: "WeWatch Co-founder · Developer",
    telegram: "@Emirhan7788",
  },
  {
    name: "Behruz Satimboyev",
    role: "Zzone Co-founder",
    telegram: "@behruz_460",
  },
  {
    name: "Abubakir Ilhomov",
    role: "Developer",
    telegram: "@abubakirilhomov",
  },
  {
    name: "Ibrat Tursunov",
    role: "Developer",
  },
  {
    name: "Polat Ismailov",
    role: "Developer",
  },
  {
    name: "Abdulaziz Mirzayev",
    role: "Developer",
  },
  {
    name: "Jafar Ulugbekov",
    role: "Developer",
  },
  {
    name: "Javodbek Abdusalimov",
    role: "Developer",
  },
  {
    name: "Habibulloh Shuhratov",
    role: "Developer",
  },
];

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Team() {
  const t = useTranslations("team");

  return (
    <section
      id="team"
      className="py-32 px-6 bg-[var(--tc-surface-1)] relative overflow-hidden"
    >
      <motion.div
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--tc-gold) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {t("subtitle")}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--tc-gold)] to-transparent origin-center"
          />
        </Reveal>

        {/* Team grid — equal cards (Bekzod has Founder badge but same size) */}
        <RevealStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          stagger={0.04}
        >
          {TEAM.map((member) => (
            <RevealItem key={member.name}>
              <TeamCard member={member} />
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Hiring callout */}
        <Reveal delay={0.2}>
          <div className="mt-16 text-center p-8 rounded-[var(--tc-radius-lg)] border border-dashed border-[var(--tc-border-bright)] bg-[var(--tc-surface-2)]/40 backdrop-blur-md max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 text-[var(--tc-gold)] text-xs font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)] animate-pulse" />
              {t("hiring.title")}
            </div>
            <p className="text-[var(--tc-text-secondary)] text-sm">
              {t("hiring.roles")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: Member }) {
  const accent = member.isFounder ? "gold" : "blue";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={[
        "group relative p-5 rounded-[var(--tc-radius-lg)] border transition-colors h-full",
        member.isFounder
          ? "border-[var(--tc-gold)]/40 bg-[var(--tc-surface-2)] hover:border-[var(--tc-gold)]/70"
          : "border-[var(--tc-border)] bg-[var(--tc-surface-2)] hover:bg-[var(--tc-surface-3)] hover:border-[var(--tc-border-bright)]",
      ].join(" ")}
    >
      {member.isFounder && (
        <div className="absolute -top-2 left-5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--tc-gold)]/15 border border-[var(--tc-gold)]/40 backdrop-blur-md text-[10px] font-700 text-[var(--tc-gold)] uppercase tracking-[0.15em]">
          <span className="w-1 h-1 rounded-full bg-[var(--tc-gold)] animate-pulse" />
          Founder
        </div>
      )}

      <div className="flex items-start gap-3 mb-3">
        <div
          className={[
            "shrink-0 w-12 h-12 rounded-xl bg-[var(--tc-surface-0)] border flex items-center justify-center font-700 text-sm transition-colors",
            accent === "gold"
              ? "text-[var(--tc-gold)] border-[var(--tc-gold)]/40 group-hover:border-[var(--tc-gold)]/70"
              : "text-[var(--tc-blue-text)] border-[var(--tc-border-bright)] group-hover:text-[var(--tc-gold)] group-hover:border-[var(--tc-gold)]/40",
          ].join(" ")}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {initials(member.name)}
        </div>
        <div className="flex-1 min-w-0">
          <h4
            className="font-700 text-white text-sm leading-snug mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {member.name}
          </h4>
          <p className="text-xs text-[var(--tc-text-muted)] leading-snug">
            {member.role}
          </p>
        </div>
      </div>
      {member.telegram && (
        <a
          href={`https://t.me/${member.telegram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-[var(--tc-text-muted)] hover:text-[var(--tc-blue-text)] transition-colors mt-1"
        >
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          {member.telegram}
        </a>
      )}
    </motion.div>
  );
}
