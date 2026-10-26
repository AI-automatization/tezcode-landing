"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Bot, Check, Send, Cctv, Package, BellRing, ImageIcon, CalendarClock, FileUser, CalendarCheck } from "lucide-react";
import "./solution-visuals.css";
import { CameraIso } from "./CameraIso";


// Animated mini-screens for the home "Solutions" cards: each one shows the AI
// service doing its job with readable, illustrative data (sample names and
// numbers, not client data). Site palette only; paused while off screen and
// static under prefers-reduced-motion.
export type SolutionScene = "camera" | "hr" | "sales" | "report" | "inventory" | "marketing";

type Copy = {
  live: string; customer: string; staff: string; inside: string; queue: string; evIn: string; evQueue: string; visits: string; peak: string; avgWait: string; tip: string; cams: string; camPoints: [string, string, string]; camEvents: [string, string, string, string]; camTitle: string; kassa: string; qAlert: string; qFix: string; qOk: string;
  role: string; interview: string; rejected: string; hrSummary: string; colNew: string; colFit: string; colMeet: string; meetAt: string;
  ask: string; answer: string; newLead: string; leadName: string;
  reportTitle: string; sales: string; orders: string; avgCheck: string;
  stock: [string, string, string]; left: string; alert: string;
  caption1: string; caption2: string; scheduled: string;
};

const COPY: Record<"uz" | "ru" | "en", Copy> = {
  uz: {
    live: "JONLI", customer: "Mijoz", staff: "Xodim", inside: "Ichkarida", queue: "Navbat", evIn: "Yangi mijoz kirdi", evQueue: "Kassada navbat: 3", visits: "Bugungi tashrif", peak: "Eng gavjum", avgWait: "Kutish", tip: "18:00 da 2-kassani oching", cams: "4 kamera", camPoints: ["Navbatni kuzatadi", "Xodim joyidami, ko'radi", "Tashriflarni sanaydi"], camTitle: "AI kamera · Chilonzor", kassa: "Kassa", qAlert: "Kassada navbat 4 kishi", qFix: "2-kassani oching", qOk: "Navbat qisqardi", camEvents: ["Kassir ish joyida", "Kassada navbat 4 kishi", "Kassa 10 daqiqa bo'sh qoldi", "Bugun 248 tashrif"],
    role: "Sotuvchi", interview: "Suhbatga", rejected: "Mos emas", hrSummary: "3 ariza · 2 suhbat", colNew: "Arizalar", colFit: "Mos", colMeet: "Suhbat", meetAt: "Ertaga 11:00",
    ask: "Krossovka 42-razmer bormi?", answer: "Bor, 420 000 so'm. Bugun yetkazamiz.",
    newLead: "Yangi lid", leadName: "Dilnoza · 420 000",
    reportTitle: "Kunlik hisobot", sales: "Savdo", orders: "Buyurtma", avgCheck: "O'rtacha chek",
    stock: ["Shampun 1L", "Krem 50ml", "Sovun"], left: "ta", alert: "Sovun tugayapti",
    caption1: "Yangi kolleksiya keldi", caption2: "Chegirma faqat shu hafta", scheduled: "Bugun 18:00",
  },
  ru: {
    live: "LIVE", customer: "Клиент", staff: "Сотрудник", inside: "Внутри", queue: "Очередь", evIn: "Зашёл новый клиент", evQueue: "Очередь на кассе: 3", visits: "Посетители сегодня", peak: "Пик", avgWait: "Ожидание", tip: "Откройте 2-ю кассу в 18:00", cams: "4 камеры", camPoints: ["Следит за очередью", "Видит, на месте ли сотрудник", "Считает посетителей"], camTitle: "ИИ-камера · Чиланзар", kassa: "Касса", qAlert: "Очередь на кассе: 4 человека", qFix: "Откройте 2-ю кассу", qOk: "Очередь сократилась", camEvents: ["Кассир на рабочем месте", "Очередь на кассе: 4 человека", "Касса пустовала 10 минут", "Сегодня 248 посетителей"],
    role: "Продавец", interview: "На интервью", rejected: "Не подходит", hrSummary: "3 отклика · 2 интервью", colNew: "Отклики", colFit: "Подходят", colMeet: "Интервью", meetAt: "Завтра 11:00",
    ask: "Кроссовки 42 размера есть?", answer: "Есть, 420 000 сум. Доставим сегодня.",
    newLead: "Новый лид", leadName: "Дилноза · 420 000",
    reportTitle: "Отчёт за день", sales: "Продажи", orders: "Заказы", avgCheck: "Средний чек",
    stock: ["Шампунь 1л", "Крем 50мл", "Мыло"], left: "шт", alert: "Мыло заканчивается",
    caption1: "Новая коллекция уже здесь", caption2: "Скидка только на этой неделе", scheduled: "Сегодня 18:00",
  },
  en: {
    live: "LIVE", customer: "Customer", staff: "Staff", inside: "Inside", queue: "Queue", evIn: "New customer entered", evQueue: "Checkout queue: 3", visits: "Visitors today", peak: "Peak hour", avgWait: "Avg. wait", tip: "Open checkout 2 at 18:00", cams: "4 cameras", camPoints: ["Watches the queue", "Sees if staff are at their post", "Counts visitors"], camTitle: "AI camera · Chilonzor", kassa: "Checkout", qAlert: "Checkout queue: 4 people", qFix: "Open checkout 2", qOk: "Queue is down", camEvents: ["Cashier is at the desk", "Checkout queue: 4 people", "Checkout left empty for 10 min", "248 visitors today"],
    role: "Sales clerk", interview: "Interview", rejected: "Not a fit", hrSummary: "3 applied · 2 interviews", colNew: "Applied", colFit: "Good fit", colMeet: "Interview", meetAt: "Tomorrow 11:00",
    ask: "Do you have sneakers in size 42?", answer: "Yes, 420,000 UZS. Delivery today.",
    newLead: "New lead", leadName: "Dilnoza · 420,000",
    reportTitle: "Daily report", sales: "Sales", orders: "Orders", avgCheck: "Avg. check",
    stock: ["Shampoo 1L", "Cream 50ml", "Soap"], left: "pcs", alert: "Soap is running low",
    caption1: "New collection just arrived", caption2: "Discount this week only", scheduled: "Today 18:00",
  },
};

export function SolutionVisual({ scene }: { scene: SolutionScene }) {
  const locale = useLocale();
  const c = locale === "uz" ? COPY.uz : locale === "ru" || locale === "uk" ? COPY.ru : COPY.en;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`sv-stage ${visible ? "" : "sv-paused"}`} aria-hidden>
      <div className="sv">{scene === "camera" ? <CameraIso running={visible} /> : SCENES[scene](c)}</div>
    </div>
  );
}

const Ok = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <span
    className={`w-5 h-5 shrink-0 rounded-full bg-[var(--tc-success)] text-white flex items-center justify-center sv-a-pop ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Check className="w-3 h-3" strokeWidth={3} />
  </span>
);

const SCENES: Record<SolutionScene, (c: Copy) => React.ReactNode> = {
  // CCTV dashboard: people boxes move across a floor plan, live counters
  // event feed the AI camera sends to the owner (like Telegram notifications)
  camera: (c) => (
    <div className="sv-card w-[272px] p-3 text-[10.5px]">
      <div className="flex items-center gap-2 pb-2 mb-1 border-b border-[var(--tc-border)]">
        <span className="w-7 h-7 rounded-lg bg-[var(--tc-blue)] text-white flex items-center justify-center">
          <Cctv className="w-4 h-4" strokeWidth={1.8} />
        </span>
        <span className="font-700 text-[var(--tc-text-primary)]">{c.camTitle}</span>
      </div>
      {[
        ["09:02", c.camEvents[0], "ok"],
        ["12:40", c.camEvents[1], "warn"],
        ["15:18", c.camEvents[2], "warn"],
        ["21:00", c.camEvents[3], "info"],
      ].map(([t, txt, kind], i) => (
        <div key={i} className="flex items-center gap-2 py-1.5 sv-a-in" style={{ animationDelay: `${i * 0.7}s` }}>
          <span className="tabular-nums text-[var(--tc-text-muted)] w-8 shrink-0">{t}</span>
          <span
            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
              kind === "ok" ? "bg-[var(--tc-success)]" : kind === "warn" ? "bg-[#e8792b]" : "bg-[var(--tc-blue)]"
            }`}
          />
          <span className="font-600 text-[var(--tc-text-primary)] truncate">{txt}</span>
        </div>
      ))}
    </div>
  ),

  // hiring pipeline: CVs move Applied -> Good fit -> Interview booked
  hr: (c) => (
    <div className="w-[276px] text-[10px]">
      <div className="grid grid-cols-3 gap-1.5">
        {[
          [c.colNew, "12"],
          [c.colFit, "4"],
          [c.colMeet, "2"],
        ].map(([t, n], i) => (
          <div key={i} className="sv-card px-2 py-1.5 flex items-center justify-between">
            <span className="font-600 text-[var(--tc-text-secondary)] truncate">{t}</span>
            <span className="font-700 text-[var(--tc-text-primary)] tabular-nums">{n}</span>
          </div>
        ))}
      </div>
      <div className="relative h-[46px] mt-1.5">
        <div className="absolute top-1 sv-card px-2 py-1.5 w-[86px] flex items-center gap-1.5 sv-a-pipe">
          <FileUser className="w-3.5 h-3.5 text-[var(--tc-blue-text)] shrink-0" />
          <span className="font-600 text-[var(--tc-text-primary)] truncate">Aziz R.</span>
        </div>
      </div>
      <div className="sv-card px-3 py-2 flex items-center gap-2 sv-a-in" style={{ animationDelay: "3s" }}>
        <CalendarCheck className="w-4 h-4 text-[var(--tc-blue-text)] shrink-0" />
        <span className="flex flex-col leading-tight">
          <span className="font-700 text-[var(--tc-text-primary)]">Aziz Rahimov · {c.role}</span>
          <span className="text-[var(--tc-text-muted)]">{c.colMeet}: {c.meetAt}</span>
        </span>
        <Ok className="ms-auto" delay={3} />
      </div>
    </div>
  ),

  sales: (c) => (
    <div className="w-[270px] flex flex-col gap-2 text-[10.5px]">
      <div className="sv-card self-start max-w-[78%] px-3 py-2 text-[var(--tc-text-primary)] sv-a-in">{c.ask}</div>
      <div className="self-end max-w-[82%] px-3 py-2 rounded-xl bg-[var(--tc-blue)] text-white sv-a-in" style={{ animationDelay: "1s" }}>
        <span className="flex items-center gap-1 text-[9px] opacity-80 mb-0.5"><Bot className="w-3 h-3" /> AI</span>
        {c.answer}
      </div>
      <div className="sv-card px-3 py-2 flex items-center gap-2 sv-a-in" style={{ animationDelay: "2.1s" }}>
        <span className="font-700 text-[var(--tc-text-primary)]">CRM</span>
        <span className="text-[var(--tc-text-muted)]">{c.newLead}</span>
        <span className="ms-auto font-600 text-[var(--tc-text-primary)] tabular-nums">{c.leadName}</span>
        <Ok delay={2.1} />
      </div>
    </div>
  ),

  // the bot posts the daily report into Telegram at 09:00
  report: (c) => (
    <div className="sv-card w-[260px] p-3 text-[10.5px] sv-a-in">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="w-6 h-6 rounded-full bg-[#2aa3e6] text-white flex items-center justify-center"><Send className="w-3 h-3" /></span>
        <span className="font-700 text-[var(--tc-text-primary)]">{c.reportTitle}</span>
        <span className="ms-auto text-[var(--tc-text-muted)] tabular-nums">09:00</span>
      </div>
      <div className="flex items-end gap-1.5 h-12 mb-2.5">
        {[42, 58, 50, 66, 61, 80, 92].map((h, i) => (
          <span key={i} className="flex-1 rounded-t sv-blue sv-a-grow" style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
      {[
        [c.sales, "12,4 mln"],
        [c.orders, "86"],
        [c.avgCheck, "144 000"],
      ].map(([k, v], i) => (
        <div key={i} className="flex justify-between py-1 border-t border-[var(--tc-border)] sv-a-in" style={{ animationDelay: `${0.9 + i * 0.4}s` }}>
          <span className="text-[var(--tc-text-muted)]">{k}</span>
          <span className="font-700 text-[var(--tc-text-primary)] tabular-nums">{v}</span>
        </div>
      ))}
    </div>
  ),

  // stock levels drop; the low item raises an alert
  inventory: (c) => (
    <div className="w-[270px] flex flex-col gap-2 text-[10.5px]">
      <div className="sv-card p-3 flex flex-col gap-2.5">
        {[
          [c.stock[0], 118, 80, false],
          [c.stock[1], 64, 52, false],
          [c.stock[2], 6, 9, true],
        ].map(([name, qty, lvl, low], i) => (
          <div key={i} className="flex items-center gap-2">
            <Package className={`w-3.5 h-3.5 shrink-0 ${low ? "text-[#d9434f]" : "text-[var(--tc-text-muted)]"}`} />
            <span className="w-20 truncate font-600 text-[var(--tc-text-primary)]">{name}</span>
            <span className="flex-1 h-1.5 rounded-full bg-[var(--tc-surface-2)] overflow-hidden">
              <span className={`block h-full rounded-full sv-a-drain ${low ? "bg-[#d9434f]" : "bg-[var(--tc-blue)]"}`} style={{ width: `${lvl}%` }} />
            </span>
            <span className={`w-12 text-end tabular-nums ${low ? "text-[#d9434f] font-700" : "text-[var(--tc-text-muted)]"}`}>{qty} {c.left}</span>
          </div>
        ))}
      </div>
      <div className="sv-card px-3 py-2 flex items-center gap-2 sv-a-in" style={{ animationDelay: "1.6s" }}>
        <span className="w-6 h-6 rounded-full bg-[var(--tc-blue)] text-white flex items-center justify-center"><BellRing className="w-3 h-3" /></span>
        <span className="font-600 text-[var(--tc-text-primary)]">{c.alert}</span>
      </div>
    </div>
  ),

  // AI drafts a post (visual + caption) and schedules it
  marketing: (c) => (
    <div className="sv-card w-[230px] overflow-hidden text-[10.5px]">
      <div className="relative h-20 bg-gradient-to-br from-[var(--tc-blue)] to-[#5b84ff] flex items-center justify-center">
        <ImageIcon className="w-7 h-7 text-white/80" />
        <span className="absolute inset-0 bg-white/20 sv-a-shimmer" />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <span className="font-700 text-[var(--tc-text-primary)] overflow-hidden whitespace-nowrap sv-a-type">{c.caption1}</span>
        <span className="text-[var(--tc-text-secondary)] overflow-hidden whitespace-nowrap sv-a-type" style={{ animationDelay: "0.8s" }}>{c.caption2}</span>
        <span className="text-[var(--tc-blue-text)] sv-a-in" style={{ animationDelay: "1.6s" }}>#tashkent #sale</span>
        <div className="mt-1.5 pt-2 border-t border-[var(--tc-border)] flex items-center gap-1.5 sv-a-in" style={{ animationDelay: "2.2s" }}>
          <CalendarClock className="w-3.5 h-3.5 text-[var(--tc-blue-text)]" />
          <span className="text-[var(--tc-text-secondary)]">Instagram · {c.scheduled}</span>
          <Ok className="ms-auto" delay={2.2} />
        </div>
      </div>
    </div>
  ),
};
