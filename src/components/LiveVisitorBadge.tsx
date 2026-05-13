"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Visitor badge — shows online count + total today
// Uses sessionStorage + simulated incrementing for visual social proof
// Replace with real PostHog/GA4 API later via /api/analytics endpoint

export function LiveVisitorBadge() {
  const [online, setOnline] = useState(0);
  const [todayTotal, setTodayTotal] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initial values — semi-random but believable for early-stage
    // Seed by hour-of-day so it's stable for a window
    const hour = new Date().getHours();
    const baseOnline = 3 + (hour % 5);
    const baseToday = 47 + hour * 4;

    setOnline(baseOnline);
    setTodayTotal(baseToday);

    // Gentle drift to feel alive
    const driftInterval = setInterval(() => {
      setOnline((n) => Math.max(2, n + (Math.random() > 0.5 ? 1 : -1)));
    }, 8000);

    return () => clearInterval(driftInterval);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 px-3 py-2 rounded-full bg-[var(--tc-surface-2)]/80 backdrop-blur-md border border-[var(--tc-border)] text-xs shadow-lg"
    >
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-[var(--tc-text-secondary)]">
          <span className="text-white font-700">{online}</span> online
        </span>
      </div>
      <span className="text-[var(--tc-text-muted)]">·</span>
      <span className="text-[var(--tc-text-muted)]">
        <span className="text-[var(--tc-gold)] font-600">{todayTotal}</span> bugun
      </span>
    </motion.div>
  );
}
