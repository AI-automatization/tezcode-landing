"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getFaqSchema } from "@/lib/seo";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Tilt3D } from "@/components/motion/Tilt3D";
import { Magnetic } from "@/components/motion/Magnetic";
import { ServiceIcon } from "@/components/service-page/ServiceIcon";
import { StickyCTA } from "@/components/StickyCTA";

// ─────────────────────────────────────────────────────────────────────
// Locale types & copy
// (Per-task: do NOT use useTranslations inside motion sub-components.
//  Use a typed per-locale COPY object pattern — same as ProcessSteps.tsx.)
// ─────────────────────────────────────────────────────────────────────
type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type Copy = {
  meta: {
    badge: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleAccent: string;
    title2: string;
    subtitle: string;
    trust: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problems: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { tag: string; title: string; desc: string }[];
  };
  benefits: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { icon: string; title: string; desc: string }[];
  };
  portfolio: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    caseLabel: string;
    durationLabel: string;
    savedLabel: string;
    fullCase: string;
    items: {
      slug: string;
      name: string;
      tagline: string;
      summary: string;
      duration: string;
      saved: string;
      tags: string[];
    }[];
  };
  process: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    steps: { num: string; title: string; desc: string; icon: string }[];
  };
  pricing: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    note: string;
    tiers: {
      name: string;
      range: string;
      timeline: string;
      desc: string;
      features: string[];
      cta: string;
      featured?: boolean;
    }[];
  };
  trust: {
    badge: string;
    title: string;
    titleAccent: string;
    stats: { value: string; label: string }[];
    partnersLabel: string;
  };
  faq: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    button: string;
    note: string;
    pitch: string;
  };
};

// ─────────────────────────────────────────────────────────────────────
// COPY — UZ (default)
// Rule 22: inglizcha jargon → UZ tushuncha qavs ichida
// ─────────────────────────────────────────────────────────────────────
const COPY: Record<Lang, Copy> = {
  uz: {
    meta: { badge: "TEZCODE CUSTOM" },
    hero: {
      badge: "Buyurtma asosida dastur (custom software)",
      title1: "Biznesingizga",
      titleAccent: "moslashtirilgan dastur",
      title2: "— 2 hafta'da",
      subtitle:
        "Tayyor SaaS (saas — bulutli dastur) sizning ish jarayoniga mos kelmasa, biz noldan yozamiz. ERP, CRM, e-commerce, custom dashboard (boshqaruv paneli) — qaysi biri kerak bo'lsa.",
      trust: "Bepul 30 daqiqa konsultatsiya • To'lov: 30% oldindan",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Portfolio ko'rish",
    },
    problems: {
      badge: "Achchiq haqiqat",
      title: "Nima uchun siz",
      titleAccent: "shu yerdasiz?",
      subtitle: "Boshqalar muammoni hal qila olmagani uchun. Tezcode Custom — oxirgi to'xtash joyi.",
      items: [
        {
          tag: "01",
          title: "Tayyor SaaS biznesingizga mos emas",
          desc: "Bitrix24, AmoCRM, Shopify — universal yechim (universal solution). Sizning unique (o'ziga xos) flow (ish jarayoni), unique mahsulot, unique mijozlar. Tayyor dastur 60% ishlatiladi, 40% ortiqcha funksiya — pul isrof.",
        },
        {
          tag: "02",
          title: "Excel + Telegram + Google Forms = chaos (tartibsizlik)",
          desc: "Buyurtma Excel'da, mijoz Telegram'da, hisobot Google Forms'da, ombor 1C'da. Har joydan ma'lumot yig'ish 4 soat. Real raqam yo'q — qaror noto'g'ri.",
        },
        {
          tag: "03",
          title: "Xorijiy dev studio $50K so'raydi, 6 oy davom etadi",
          desc: "Ukraina/Hindiston studyolari soatiga $50-150. Til, vaqt mintaqasi (timezone), madaniyat farqi. 6 oy boshlanish, support (qo'llab-quvvatlash) yo'q. Manba kod (source code) ham har doim bermaydi.",
        },
        {
          tag: "04",
          title: "O'zbek freelancer 3 oyda ham tugatmaydi",
          desc: "1 dasturchi, 3 ta loyiha parallel. Bugun bor, ertaga yo'q. Test (sinov) yo'q, hujjat (documentation) yo'q. Bug (xato) production'da chiqadi, 3 kun kutamiz.",
        },
      ],
    },
    benefits: {
      badge: "Tezcode farqi",
      title: "Nima uchun",
      titleAccent: "Tezcode Custom",
      subtitle: "14 nafar in-house (ichki) dasturchi, AI (sun'iy intellekt) tool'lari, lokal CEO, yagona javobgarlik.",
      items: [
        {
          icon: "users",
          title: "14 nafar in-house dasturchi",
          desc: "Toshkentdagi ofisimizda. Freelancer emas, jamoa. Birovi kasal bo'lsa boshqa qo'llab turadi. Backend, frontend, mobil, AI, DevOps — barchasi bizda.",
        },
        {
          icon: "bot",
          title: "AI bilan 3x tezroq",
          desc: "Claude (Anthropic AI) + Cursor (AI kod muharrir) bilan ishlaymiz. Bir oylik ish 1 hafta'da tayyor. Sifat tushmaydi — AI yozgan kod review (tekshiruv)dan o'tadi.",
        },
        {
          icon: "clipboard-list",
          title: "Yagona kontrakt, bitta loyiha menejer",
          desc: "Bir kontrakt — bir narx — bir muddat. PM (project manager — loyiha menejer) sizga har hafta hisobot beradi. Aralashish yo'q, surprize narx yo'q.",
        },
        {
          icon: "message-circle",
          title: "CEO o'zi Telegram'da, 24/7",
          desc: "Bekzod Mirzaaliyev (CEO) — @tezcode_managament. Muammo chiqsa to'g'ri unga yozasiz. Support tickets (yordam so'rovlari) buyurokratiya yo'q. 30 daq ichida javob.",
        },
      ],
    },
    portfolio: {
      badge: "Real loyihalar",
      title: "Biz nima",
      titleAccent: "qurdik",
      subtitle: "3 ta canonical (asosiy) misol. Real mijoz, real raqam, real natija.",
      caseLabel: "Case study (loyiha tahlili)",
      durationLabel: "Muddat",
      savedLabel: "Tejov",
      fullCase: "To'liq case study",
      items: [
        {
          slug: "raos",
          name: "RAOS (Pos-Cosmetics)",
          tagline: "Multi-tenant POS — kosmetika do'konlari uchun",
          summary:
            "Kassa, ombor, mijoz CRM, hisobot, multi-tenant (ko'p ijarali) — bitta dasturda. 50+ filial.",
          duration: "8 hafta",
          saved: "$80K (xorijiy alternativa)",
          tags: ["Next.js", "Postgres", "POS", "Multi-tenant"],
        },
        {
          slug: "ai-office",
          name: "AI Office (OpenClaw)",
          tagline: "AI 12-bo'lim virtual ofis — har biznes uchun",
          summary:
            "12 ta AI bo'lim (sales, HR, marketing, ...). Bekzod o'zi foydalanadi — 14 nafar dasturchi 50 ta loyiha bilan boshqaradi.",
          duration: "12 hafta MVP",
          saved: "$120K (in-house team)",
          tags: ["FastAPI", "Claude API", "i18n 3 til", "Multi-agent"],
        },
        {
          slug: "hamshirago",
          name: "HamshiraGo (CoreMed)",
          tagline: "Uy hamshira + klinika boshqaruv",
          summary:
            "Mobil ilova, klinika dashboard, vrach jadval, mijoz qabul, hisobot. 5 ta klinika 3 oyda joriy qildi.",
          duration: "10 hafta",
          saved: "$60K",
          tags: ["React Native", "Node.js", "Healthcare", "PWA"],
        },
      ],
    },
    process: {
      badge: "Jarayon",
      title: "4 qadamda",
      titleAccent: "production'gacha",
      subtitle: "Birinchi 30 daqiqa bepul. Keyin har qadam aniq narx, aniq muddat.",
      steps: [
        {
          num: "01",
          title: "Konsultatsiya — bepul",
          desc: "Sizning biznesni 30-60 daqiqa o'rganamiz. Hozirgi muammo, kerakli funksiya, byudjet. Hech qanday majburiyat yo'q.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "Texnik tahlil + taklif",
          desc: "3-5 kun ichida: aniq texnik hujjat (technical spec), narx, muddat, jamoa tarkibi. Yozma kontrakt.",
          icon: "ruler",
        },
        {
          num: "03",
          title: "MVP yaratish",
          desc: "2-4 hafta ichida ishlovchi versiya. Har hafta demo (ko'rsatuv). Siz online ko'rib turasiz, feedback (fikr) berasiz.",
          icon: "zap",
        },
        {
          num: "04",
          title: "Production + support",
          desc: "Deploy (joylashtirish) + 30 kun bepul support. Keyin oyiga $200-500 (loyiha kattaligiga qarab) qo'llab-quvvatlash kontrakti.",
          icon: "rocket",
        },
      ],
    },
    pricing: {
      badge: "Narx oraliqlari",
      title: "Shaffof",
      titleAccent: "narxlash",
      subtitle: "Yashirin to'lov yo'q. Loyiha murakkabligiga qarab 3 oraliq.",
      note: "Aniq narx faqat texnik tahlildan keyin. Konsultatsiya bepul.",
      tiers: [
        {
          name: "Boshlang'ich MVP",
          range: "$3K — $8K",
          timeline: "4 hafta",
          desc: "Yangi biznes, fikrni sinab ko'rmoqchi. 1 asosiy funksiya + admin paneli.",
          features: [
            "Web yoki mobil (bittasi)",
            "Foydalanuvchi auth (kirish tizimi)",
            "Asosiy CRUD (ma'lumot boshqaruv)",
            "Admin dashboard",
            "1 oy bepul support",
          ],
          cta: "Boshlash",
        },
        {
          name: "To'liq mahsulot",
          range: "$10K — $25K",
          timeline: "2-3 oy",
          desc: "O'rta biznes uchun to'liq dastur. CRM + e-commerce + analytics.",
          features: [
            "Web + mobil (PWA)",
            "Multi-user + role'lar (huquqlar)",
            "Tashqi integratsiya (Telegram, payment)",
            "Analitika + hisobot",
            "3 oy bepul support",
            "Hujjat (documentation)",
          ],
          cta: "Konsultatsiya so'rash",
          featured: true,
        },
        {
          name: "Korporativ ERP",
          range: "$30K — $100K",
          timeline: "4-6 oy",
          desc: "Yirik korxona, davlat tender, bank, sanoat. To'liq enterprise (korxona) yechim.",
          features: [
            "Multi-tenant arxitektura",
            "Native iOS + Android",
            "API (dasturlar oraligi) + integratsiya",
            "SSO (yagona kirish) + audit",
            "SLA (xizmat shartnomasi) 99.9%",
            "12 oy support + onsite (joyida)",
          ],
          cta: "Yirik loyiha — gaplashamiz",
        },
      ],
    },
    trust: {
      badge: "Ishonch belgilari",
      title: "5 yil tajriba,",
      titleAccent: "150+ loyiha",
      stats: [
        { value: "14", label: "In-house dasturchi" },
        { value: "150+", label: "Ishlangan loyiha" },
        { value: "5", label: "Yillik tajriba" },
        { value: "8", label: "O'z mahsulotimiz" },
      ],
      partnersLabel: "Mijozlar va hamkorlar",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savollar va",
      titleAccent: "javoblar",
      subtitle: "Sizdan ham eshitganmiz. Mana eng muhim 6 tasi.",
      items: [
        {
          q: "Sizni boshqalardan nima ajratib turadi?",
          a: "Uchta narsa: (1) 14 nafar in-house dasturchi — freelancer emas, jamoa, (2) AI bilan 3x tezroq — Claude/Cursor kundalik ishchi vositamiz, (3) CEO Bekzod Telegram'da 24/7 — buyurokratiya yo'q.",
        },
        {
          q: "Loyiha qachon tugaydi?",
          a: "MVP — 2-4 hafta, to'liq mahsulot — 2-3 oy, korporativ ERP — 4-6 oy. Har hafta demo va aniq progress (taraqqiyot) hisobot beramiz. Kechiksak — sabab tushuntiramiz va sanani yangilaymiz.",
        },
        {
          q: "Manba kod (source code) kimning bo'ladi?",
          a: "100% sizning. Kontrakt'da yozilgan: kod sizga to'liq beriladi, GitHub repository sizning hisobingizda yoki bizda — siz tanlaysiz. Vendor lock-in (sotuvchiga bog'lanish) yo'q.",
        },
        {
          q: "Support qancha vaqt davom etadi?",
          a: "Boshlang'ich MVP — 1 oy bepul, to'liq mahsulot — 3 oy bepul, korporativ — 12 oy. Keyin oyiga $200-500 kontrakt (loyiha kattaligiga qarab). Yoki SLA bilan 99.9% uptime kafolat.",
        },
        {
          q: "Xorijiy dev studio bilan solishtirilsa?",
          a: "Ukraina studyosi soatiga $50-150, biz $20-40. Xorijdagilar 6 oy ishlasa, biz 2-3 oy. Til muammosi yo'q — biz O'zbek, sizning biznes muhitingizni tushunamiz. Sifat — bir xil yoki yaxshiroq (case study'larimiz isbot).",
        },
        {
          q: "Pul qaytarish kafolati bormi?",
          a: "Birinchi 2 hafta ichida MVP qabul qilolmasangiz — 100% pul qaytariladi. Keyingi bosqichlarda yarim-yarim siz uchun: sizdan progress qabul qilingach to'lov. Risk siz tomonda emas.",
        },
      ],
    },
    finalCta: {
      badge: "Boshlash vaqti",
      title: "Bepul 30 daqiqa",
      titleAccent: "konsultatsiya — bugun",
      subtitle:
        "Sizning biznesni o'rganamiz, real takliflar beramiz. Hech qanday majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki Calendly orqali jadval qo'ying — 30 daqiqa Bekzod bilan.",
      pitch: "Bir dastur bilan biznes 2x oshadi. Sinab ko'ring.",
    },
  },

  // ─────────────────── RU ───────────────────
  ru: {
    meta: { badge: "TEZCODE CUSTOM" },
    hero: {
      badge: "Разработка на заказ (custom software)",
      title1: "Программа",
      titleAccent: "под ваш бизнес",
      title2: "— за 2 недели",
      subtitle:
        "Если готовые SaaS не подходят под ваш рабочий процесс, мы напишем с нуля. ERP, CRM, e-commerce, custom dashboard — что нужно.",
      trust: "Бесплатная 30-мин консультация • Оплата: 30% предоплата",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Смотреть портфолио",
    },
    problems: {
      badge: "Горькая правда",
      title: "Почему вы",
      titleAccent: "здесь?",
      subtitle: "Потому что другие не справились. Tezcode Custom — последняя остановка.",
      items: [
        {
          tag: "01",
          title: "Готовый SaaS не подходит вашему бизнесу",
          desc: "Bitrix24, AmoCRM, Shopify — универсальное решение. Ваш уникальный flow, продукт, клиенты. Готовая программа используется на 60%, 40% — лишний функционал, деньги впустую.",
        },
        {
          tag: "02",
          title: "Excel + Telegram + Google Forms = хаос",
          desc: "Заказ в Excel, клиент в Telegram, отчёт в Google Forms, склад в 1C. Сбор данных — 4 часа. Реальных цифр нет — решения неверные.",
        },
        {
          tag: "03",
          title: "Иностранная студия просит $50K, делает 6 месяцев",
          desc: "Украина/Индия — $50-150 в час. Язык, таймзоны, разница культур. 6 месяцев на старт, без поддержки. Исходный код не всегда отдают.",
        },
        {
          tag: "04",
          title: "Узбекский фрилансер не закончит за 3 месяца",
          desc: "1 разработчик, 3 проекта параллельно. Сегодня есть — завтра нет. Тестов нет, документации нет. Баги в production, ждём 3 дня.",
        },
      ],
    },
    benefits: {
      badge: "Отличие Tezcode",
      title: "Почему",
      titleAccent: "Tezcode Custom",
      subtitle: "14 in-house разработчиков, AI инструменты, локальный CEO, единая ответственность.",
      items: [
        {
          icon: "users",
          title: "14 in-house разработчиков",
          desc: "В офисе в Ташкенте. Не фрилансеры — команда. Заболеет один — другие подстрахуют. Backend, frontend, mobile, AI, DevOps — всё у нас.",
        },
        {
          icon: "bot",
          title: "С AI в 3 раза быстрее",
          desc: "Работаем с Claude (Anthropic AI) + Cursor (AI редактор кода). Месяц работы — за неделю. Качество не падает — код проходит ревью.",
        },
        {
          icon: "clipboard-list",
          title: "Один контракт, один PM",
          desc: "Один контракт — одна цена — один срок. PM (проектный менеджер) даёт еженедельный отчёт. Никаких сюрпризов по цене.",
        },
        {
          icon: "message-circle",
          title: "CEO лично в Telegram, 24/7",
          desc: "Бекзод Мирзаалиев (CEO) — @tezcode_managament. Проблема — пишете напрямую ему. Без тикетов и бюрократии. Ответ за 30 минут.",
        },
      ],
    },
    portfolio: {
      badge: "Реальные проекты",
      title: "Что мы",
      titleAccent: "построили",
      subtitle: "3 канонических примера. Реальные клиенты, цифры, результаты.",
      caseLabel: "Case study (разбор проекта)",
      durationLabel: "Срок",
      savedLabel: "Экономия",
      fullCase: "Полный case study",
      items: [
        {
          slug: "raos",
          name: "RAOS (Pos-Cosmetics)",
          tagline: "Multi-tenant POS для магазинов косметики",
          summary:
            "Касса, склад, CRM, отчёты, multi-tenant — в одной программе. 50+ филиалов.",
          duration: "8 недель",
          saved: "$80K (vs иностранная альт.)",
          tags: ["Next.js", "Postgres", "POS", "Multi-tenant"],
        },
        {
          slug: "ai-office",
          name: "AI Office (OpenClaw)",
          tagline: "AI 12-отдельный виртуальный офис",
          summary:
            "12 AI-отделов (sales, HR, marketing...). Бекзод использует сам — управляет 14 разработчиками и 50+ проектами.",
          duration: "12 недель MVP",
          saved: "$120K (in-house team)",
          tags: ["FastAPI", "Claude API", "i18n 3 яз.", "Multi-agent"],
        },
        {
          slug: "hamshirago",
          name: "HamshiraGo (CoreMed)",
          tagline: "Домашняя медсестра + управление клиникой",
          summary:
            "Мобильное приложение, dashboard клиники, расписание врачей, приём, отчёты. 5 клиник внедрили за 3 месяца.",
          duration: "10 недель",
          saved: "$60K",
          tags: ["React Native", "Node.js", "Healthcare", "PWA"],
        },
      ],
    },
    process: {
      badge: "Процесс",
      title: "4 шага до",
      titleAccent: "production",
      subtitle: "Первые 30 минут — бесплатно. Дальше точная цена и срок.",
      steps: [
        {
          num: "01",
          title: "Консультация — бесплатно",
          desc: "Изучаем ваш бизнес 30-60 минут. Текущие проблемы, нужные функции, бюджет. Без обязательств.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "Техническое ТЗ + предложение",
          desc: "За 3-5 дней: технический документ, цена, срок, состав команды. Письменный контракт.",
          icon: "ruler",
        },
        {
          num: "03",
          title: "MVP",
          desc: "За 2-4 недели — рабочая версия. Демо каждую неделю. Вы видите всё онлайн, даёте feedback.",
          icon: "zap",
        },
        {
          num: "04",
          title: "Production + support",
          desc: "Деплой + 30 дней бесплатной поддержки. Дальше $200-500/мес (зависит от размера проекта).",
          icon: "rocket",
        },
      ],
    },
    pricing: {
      badge: "Диапазоны цен",
      title: "Прозрачное",
      titleAccent: "ценообразование",
      subtitle: "Без скрытых платежей. 3 диапазона по сложности.",
      note: "Точная цена — после ТЗ. Консультация бесплатна.",
      tiers: [
        {
          name: "Стартовый MVP",
          range: "$3K — $8K",
          timeline: "4 недели",
          desc: "Новый бизнес, проверка идеи. 1 ключевая функция + админ-панель.",
          features: [
            "Web или mobile (одно)",
            "Auth (вход пользователей)",
            "Базовый CRUD",
            "Admin dashboard",
            "1 мес. бесплатной поддержки",
          ],
          cta: "Начать",
        },
        {
          name: "Полный продукт",
          range: "$10K — $25K",
          timeline: "2-3 месяца",
          desc: "Средний бизнес. CRM + e-commerce + analytics.",
          features: [
            "Web + mobile (PWA)",
            "Multi-user + роли",
            "Внешние интеграции",
            "Аналитика + отчёты",
            "3 мес. поддержки",
            "Документация",
          ],
          cta: "Консультация",
          featured: true,
        },
        {
          name: "Корпоративный ERP",
          range: "$30K — $100K",
          timeline: "4-6 месяцев",
          desc: "Крупное предприятие, тендеры, банк, индустрия. Полное enterprise-решение.",
          features: [
            "Multi-tenant архитектура",
            "Native iOS + Android",
            "API + интеграции",
            "SSO + аудит",
            "SLA 99.9%",
            "12 мес. поддержки + onsite",
          ],
          cta: "Крупный проект — обсудим",
        },
      ],
    },
    trust: {
      badge: "Знаки доверия",
      title: "5 лет опыта,",
      titleAccent: "150+ проектов",
      stats: [
        { value: "14", label: "In-house разработчиков" },
        { value: "150+", label: "Сделано проектов" },
        { value: "5", label: "Лет опыта" },
        { value: "8", label: "Своих продуктов" },
      ],
      partnersLabel: "Клиенты и партнёры",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "Самые важные 6.",
      items: [
        {
          q: "Чем отличаетесь от других?",
          a: "Три вещи: (1) 14 in-house разработчиков, а не фрилансеры, (2) AI в 3 раза быстрее — Claude/Cursor каждый день, (3) CEO Бекзод в Telegram 24/7, без бюрократии.",
        },
        {
          q: "Когда будет готово?",
          a: "MVP — 2-4 недели, полный продукт — 2-3 мес., корпоративный — 4-6 мес. Каждую неделю — демо и progress-отчёт.",
        },
        {
          q: "Чей будет исходный код?",
          a: "100% ваш. В контракте: код передаётся полностью, GitHub repo на ваш аккаунт или наш — вы решаете. Vendor lock-in нет.",
        },
        {
          q: "Сколько длится поддержка?",
          a: "MVP — 1 мес. бесплатно, полный — 3 мес., корпоративный — 12 мес. Дальше $200-500/мес. Или SLA 99.9% uptime.",
        },
        {
          q: "Сравнение с иностранными студиями?",
          a: "Иностранцы $50-150 в час, мы $20-40. Они 6 мес. — мы 2-3. Без языкового барьера. Качество — равное или лучше.",
        },
        {
          q: "Гарантия возврата денег?",
          a: "Если MVP не принят за 2 недели — 100% возврат. Дальше — оплата по принятым этапам. Риск не на вашей стороне.",
        },
      ],
    },
    finalCta: {
      badge: "Время начать",
      title: "Бесплатная 30-мин",
      titleAccent: "консультация — сегодня",
      subtitle: "Изучим бизнес, дадим реальные предложения. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или забронируйте время через Calendly — 30 минут с Бекзодом.",
      pitch: "Одна программа удваивает бизнес. Попробуйте.",
    },
  },

  // ─────────────────── EN ───────────────────
  en: {
    meta: { badge: "TEZCODE CUSTOM" },
    hero: {
      badge: "Custom software development",
      title1: "Software",
      titleAccent: "built for your business",
      title2: "— in 2 weeks",
      subtitle:
        "When off-the-shelf SaaS doesn't fit your workflow, we build from scratch. ERP, CRM, e-commerce, custom dashboard — whatever you need.",
      trust: "Free 30-min consultation • Payment: 30% upfront",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "View portfolio",
    },
    problems: {
      badge: "The hard truth",
      title: "Why you're",
      titleAccent: "here",
      subtitle: "Because everyone else failed. Tezcode Custom is the last stop.",
      items: [
        {
          tag: "01",
          title: "Off-the-shelf SaaS doesn't fit your business",
          desc: "Bitrix24, AmoCRM, Shopify — generic solutions. Your unique flow, product, customers. You only use 60% of the tool, 40% is wasted features and money.",
        },
        {
          tag: "02",
          title: "Excel + Telegram + Google Forms = chaos",
          desc: "Orders in Excel, customers on Telegram, reports in Google Forms, warehouse in 1C. Pulling data takes 4 hours. No real numbers — wrong decisions.",
        },
        {
          tag: "03",
          title: "Foreign dev studios want $50K, take 6 months",
          desc: "Ukrainian/Indian studios charge $50-150/hour. Language, timezone, culture gap. 6 months to start, no support. Source code not always handed over.",
        },
        {
          tag: "04",
          title: "Local freelancer won't finish in 3 months",
          desc: "1 developer, 3 projects in parallel. Here today, gone tomorrow. No tests, no docs. Bugs in production, you wait 3 days.",
        },
      ],
    },
    benefits: {
      badge: "The Tezcode edge",
      title: "Why",
      titleAccent: "Tezcode Custom",
      subtitle: "14 in-house developers, AI tooling, local CEO, single accountability.",
      items: [
        {
          icon: "users",
          title: "14 in-house developers",
          desc: "In our Tashkent office. Not freelancers — a team. If one is sick, others cover. Backend, frontend, mobile, AI, DevOps — all in-house.",
        },
        {
          icon: "bot",
          title: "3x faster with AI",
          desc: "We use Claude (Anthropic AI) and Cursor (AI code editor) daily. A month of work in one week. Quality stays high — every AI line goes through review.",
        },
        {
          icon: "clipboard-list",
          title: "One contract, one PM",
          desc: "One contract — one price — one timeline. Your PM gives you a weekly progress report. No price surprises.",
        },
        {
          icon: "message-circle",
          title: "CEO on Telegram, 24/7",
          desc: "Bekzod Mirzaaliyev (CEO) — @tezcode_managament. Got a problem? Message him directly. No tickets, no bureaucracy. Reply in 30 minutes.",
        },
      ],
    },
    portfolio: {
      badge: "Real projects",
      title: "What we",
      titleAccent: "built",
      subtitle: "3 canonical examples. Real clients, real numbers, real results.",
      caseLabel: "Case study",
      durationLabel: "Duration",
      savedLabel: "Savings",
      fullCase: "Read full case study",
      items: [
        {
          slug: "raos",
          name: "RAOS (Pos-Cosmetics)",
          tagline: "Multi-tenant POS for cosmetics stores",
          summary: "Register, inventory, CRM, reports, multi-tenant — one app. 50+ stores.",
          duration: "8 weeks",
          saved: "$80K (vs foreign alt.)",
          tags: ["Next.js", "Postgres", "POS", "Multi-tenant"],
        },
        {
          slug: "ai-office",
          name: "AI Office (OpenClaw)",
          tagline: "AI virtual office with 12 departments",
          summary:
            "12 AI departments (sales, HR, marketing...). Bekzod uses it himself to run 14 devs and 50+ projects.",
          duration: "12 weeks MVP",
          saved: "$120K (in-house team)",
          tags: ["FastAPI", "Claude API", "i18n 3 langs", "Multi-agent"],
        },
        {
          slug: "hamshirago",
          name: "HamshiraGo (CoreMed)",
          tagline: "Home nurse + clinic management",
          summary:
            "Mobile app, clinic dashboard, doctor schedule, appointments, reports. 5 clinics onboarded in 3 months.",
          duration: "10 weeks",
          saved: "$60K",
          tags: ["React Native", "Node.js", "Healthcare", "PWA"],
        },
      ],
    },
    process: {
      badge: "Process",
      title: "4 steps to",
      titleAccent: "production",
      subtitle: "First 30 minutes are free. Then every step has a clear price and timeline.",
      steps: [
        {
          num: "01",
          title: "Consultation — free",
          desc: "We study your business for 30-60 minutes. Current pains, needed features, budget. No obligations.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "Tech spec + proposal",
          desc: "Within 3-5 days: technical doc, price, timeline, team. Written contract.",
          icon: "ruler",
        },
        {
          num: "03",
          title: "Build MVP",
          desc: "Working version in 2-4 weeks. Weekly demos. You watch live, give feedback.",
          icon: "zap",
        },
        {
          num: "04",
          title: "Production + support",
          desc: "Deploy + 30 days of free support. Then $200-500/month (depending on scope).",
          icon: "rocket",
        },
      ],
    },
    pricing: {
      badge: "Price ranges",
      title: "Transparent",
      titleAccent: "pricing",
      subtitle: "No hidden fees. 3 ranges based on scope.",
      note: "Exact price after tech spec. Consultation is free.",
      tiers: [
        {
          name: "Starter MVP",
          range: "$3K — $8K",
          timeline: "4 weeks",
          desc: "New business validating an idea. 1 core feature + admin panel.",
          features: [
            "Web or mobile (one)",
            "User auth",
            "Basic CRUD",
            "Admin dashboard",
            "1 month free support",
          ],
          cta: "Start",
        },
        {
          name: "Full product",
          range: "$10K — $25K",
          timeline: "2-3 months",
          desc: "Mid-size business. CRM + e-commerce + analytics.",
          features: [
            "Web + mobile (PWA)",
            "Multi-user + roles",
            "External integrations",
            "Analytics + reports",
            "3 months free support",
            "Documentation",
          ],
          cta: "Book consultation",
          featured: true,
        },
        {
          name: "Enterprise ERP",
          range: "$30K — $100K",
          timeline: "4-6 months",
          desc: "Large enterprise, tenders, banking, industry. Full enterprise solution.",
          features: [
            "Multi-tenant architecture",
            "Native iOS + Android",
            "API + integrations",
            "SSO + audit",
            "SLA 99.9%",
            "12 months support + onsite",
          ],
          cta: "Large project — let's talk",
        },
      ],
    },
    trust: {
      badge: "Trust signals",
      title: "5 years experience,",
      titleAccent: "150+ projects",
      stats: [
        { value: "14", label: "In-house developers" },
        { value: "150+", label: "Projects delivered" },
        { value: "5", label: "Years of experience" },
        { value: "8", label: "Own products" },
      ],
      partnersLabel: "Clients and partners",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "The 6 we hear most.",
      items: [
        {
          q: "How are you different?",
          a: "Three things: (1) 14 in-house developers, not freelancers, (2) 3x faster with AI — Claude/Cursor daily, (3) CEO Bekzod on Telegram 24/7, no bureaucracy.",
        },
        {
          q: "When will it be done?",
          a: "MVP — 2-4 weeks, full product — 2-3 months, enterprise — 4-6 months. Weekly demos and progress reports.",
        },
        {
          q: "Who owns the source code?",
          a: "100% you. The contract states: full code handover, GitHub repo on your account or ours — your call. No vendor lock-in.",
        },
        {
          q: "How long does support last?",
          a: "MVP — 1 month free, full product — 3 months, enterprise — 12 months. Then $200-500/month. Or SLA 99.9% uptime.",
        },
        {
          q: "Compared to foreign studios?",
          a: "Foreign studios charge $50-150/hour, we charge $20-40. They take 6 months, we take 2-3. No language barrier. Quality — equal or better.",
        },
        {
          q: "Money-back guarantee?",
          a: "If MVP isn't accepted in 2 weeks — 100% refund. After that, pay-as-you-accept-milestones. Risk is not on you.",
        },
      ],
    },
    finalCta: {
      badge: "Time to start",
      title: "Free 30-minute",
      titleAccent: "consultation — today",
      subtitle: "We study your business and give real proposals. No obligations.",
      button: "Message on Telegram",
      note: "Or pick a slot via Calendly — 30 minutes with Bekzod.",
      pitch: "One piece of software can 2x your business. Try it.",
    },
  },

  // ─────────────────── AR ───────────────────
  ar: {
    meta: { badge: "TEZCODE CUSTOM" },
    hero: {
      badge: "تطوير برمجيات مخصصة (custom software)",
      title1: "برنامج",
      titleAccent: "مصمم لأعمالك",
      title2: "— في أسبوعين",
      subtitle:
        "عندما لا تناسب حلول SaaS الجاهزة سير عملك، نبني من الصفر. ERP، CRM، تجارة إلكترونية، لوحة تحكم مخصصة — أي ما تحتاج.",
      trust: "استشارة 30 دقيقة مجانية • الدفع: 30% مقدمًا",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "عرض الأعمال",
    },
    problems: {
      badge: "الحقيقة المُرّة",
      title: "لماذا أنت",
      titleAccent: "هنا",
      subtitle: "لأن الآخرين فشلوا. Tezcode Custom هو المحطة الأخيرة.",
      items: [
        {
          tag: "01",
          title: "SaaS الجاهز لا يناسب أعمالك",
          desc: "Bitrix24، AmoCRM، Shopify — حلول عامة. سير عملك ومنتجك وعملاؤك فريدة. تستخدم 60% فقط، 40% ميزات زائدة وأموال ضائعة.",
        },
        {
          tag: "02",
          title: "Excel + Telegram + Google Forms = فوضى",
          desc: "الطلبات في Excel، العملاء على Telegram، التقارير في Forms، المخزون في 1C. جمع البيانات يستغرق 4 ساعات.",
        },
        {
          tag: "03",
          title: "استوديوهات أجنبية تطلب 50 ألف $، تأخذ 6 أشهر",
          desc: "أوكرانيا/الهند $50-150 للساعة. لغة، منطقة زمنية، فجوة ثقافية. 6 أشهر للبدء، بلا دعم.",
        },
        {
          tag: "04",
          title: "مستقل محلي لن ينهي خلال 3 أشهر",
          desc: "مطور واحد، 3 مشاريع متوازية. اليوم موجود، غداً لا. بلا اختبارات، بلا توثيق. أخطاء في الإنتاج، تنتظر 3 أيام.",
        },
      ],
    },
    benefits: {
      badge: "ميزة Tezcode",
      title: "لماذا",
      titleAccent: "Tezcode Custom",
      subtitle: "14 مطور داخلي، أدوات AI، مدير محلي، مسؤولية واحدة.",
      items: [
        {
          icon: "users",
          title: "14 مطور داخلي",
          desc: "في مكتبنا بطشقند. ليس مستقلين — فريق. إذا مرض أحدهم، يعوض الآخرون.",
        },
        {
          icon: "bot",
          title: "أسرع 3 أضعاف مع AI",
          desc: "نستخدم Claude (Anthropic AI) و Cursor (محرر AI) يومياً. شهر عمل في أسبوع. الجودة لا تنخفض.",
        },
        {
          icon: "clipboard-list",
          title: "عقد واحد، مدير مشروع واحد",
          desc: "عقد واحد — سعر واحد — موعد واحد. PM يعطي تقريراً أسبوعياً. لا مفاجآت بالسعر.",
        },
        {
          icon: "message-circle",
          title: "CEO على Telegram، 24/7",
          desc: "بكزود ميرزااليف (CEO) — @tezcode_managament. مشكلة؟ راسله مباشرة. بلا تذاكر وبيروقراطية.",
        },
      ],
    },
    portfolio: {
      badge: "مشاريع حقيقية",
      title: "ما الذي",
      titleAccent: "بنيناه",
      subtitle: "3 أمثلة كنموذج. عملاء، أرقام، نتائج حقيقية.",
      caseLabel: "دراسة الحالة",
      durationLabel: "المدة",
      savedLabel: "التوفير",
      fullCase: "قراءة دراسة الحالة الكاملة",
      items: [
        {
          slug: "raos",
          name: "RAOS (Pos-Cosmetics)",
          tagline: "POS متعدد المستأجرين لمتاجر التجميل",
          summary: "كاشير، مخزون، CRM، تقارير، multi-tenant — تطبيق واحد. 50+ متجر.",
          duration: "8 أسابيع",
          saved: "$80K",
          tags: ["Next.js", "Postgres", "POS", "Multi-tenant"],
        },
        {
          slug: "ai-office",
          name: "AI Office (OpenClaw)",
          tagline: "مكتب AI افتراضي بـ 12 قسماً",
          summary: "12 قسم AI. بكزود يستخدمه ليدير 14 مطور و 50+ مشروع.",
          duration: "12 أسبوع MVP",
          saved: "$120K",
          tags: ["FastAPI", "Claude API", "i18n", "Multi-agent"],
        },
        {
          slug: "hamshirago",
          name: "HamshiraGo (CoreMed)",
          tagline: "ممرضة منزلية + إدارة عيادة",
          summary: "تطبيق جوال، لوحة عيادة، جدول طبيب، حجوزات. 5 عيادات في 3 أشهر.",
          duration: "10 أسابيع",
          saved: "$60K",
          tags: ["React Native", "Node.js", "Healthcare", "PWA"],
        },
      ],
    },
    process: {
      badge: "العملية",
      title: "4 خطوات إلى",
      titleAccent: "الإنتاج",
      subtitle: "أول 30 دقيقة مجانية. ثم سعر وموعد واضحان لكل خطوة.",
      steps: [
        {
          num: "01",
          title: "استشارة — مجانية",
          desc: "ندرس أعمالك 30-60 دقيقة. المشاكل الحالية، الميزات المطلوبة، الميزانية.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "مواصفات تقنية + عرض",
          desc: "خلال 3-5 أيام: وثيقة تقنية، سعر، موعد، فريق. عقد مكتوب.",
          icon: "ruler",
        },
        {
          num: "03",
          title: "بناء MVP",
          desc: "نسخة عاملة خلال 2-4 أسابيع. عرض كل أسبوع. تشاهد مباشر وتعطي feedback.",
          icon: "zap",
        },
        {
          num: "04",
          title: "الإنتاج + الدعم",
          desc: "نشر + 30 يوم دعم مجاني. ثم $200-500 شهرياً.",
          icon: "rocket",
        },
      ],
    },
    pricing: {
      badge: "نطاقات الأسعار",
      title: "تسعير",
      titleAccent: "شفاف",
      subtitle: "بلا رسوم خفية. 3 نطاقات حسب الحجم.",
      note: "السعر الدقيق بعد المواصفات. الاستشارة مجانية.",
      tiers: [
        {
          name: "MVP أولي",
          range: "$3K — $8K",
          timeline: "4 أسابيع",
          desc: "أعمال جديدة لاختبار فكرة. ميزة رئيسية + لوحة إدارة.",
          features: [
            "ويب أو جوال (واحد)",
            "تسجيل دخول المستخدمين",
            "CRUD أساسي",
            "Admin dashboard",
            "شهر دعم مجاني",
          ],
          cta: "ابدأ",
        },
        {
          name: "منتج كامل",
          range: "$10K — $25K",
          timeline: "2-3 أشهر",
          desc: "أعمال متوسطة. CRM + تجارة + تحليلات.",
          features: [
            "ويب + جوال (PWA)",
            "متعدد المستخدمين + أدوار",
            "تكاملات خارجية",
            "تحليلات + تقارير",
            "3 أشهر دعم",
            "توثيق",
          ],
          cta: "احجز استشارة",
          featured: true,
        },
        {
          name: "ERP مؤسسي",
          range: "$30K — $100K",
          timeline: "4-6 أشهر",
          desc: "مؤسسة كبيرة، مناقصات، بنك. حل enterprise كامل.",
          features: [
            "Multi-tenant",
            "iOS + Android أصلي",
            "API + تكاملات",
            "SSO + تدقيق",
            "SLA 99.9%",
            "12 شهر دعم + موقعي",
          ],
          cta: "مشروع كبير — تحدث معنا",
        },
      ],
    },
    trust: {
      badge: "إشارات الثقة",
      title: "5 سنوات خبرة،",
      titleAccent: "150+ مشروع",
      stats: [
        { value: "14", label: "مطور داخلي" },
        { value: "150+", label: "مشروع مسلم" },
        { value: "5", label: "سنوات خبرة" },
        { value: "8", label: "منتج خاص" },
      ],
      partnersLabel: "العملاء والشركاء",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أكثر 6 أسئلة شيوعاً.",
      items: [
        {
          q: "بماذا تختلفون؟",
          a: "ثلاثة أشياء: 14 مطور داخلي، أسرع 3 أضعاف مع AI، CEO على Telegram 24/7 بلا بيروقراطية.",
        },
        {
          q: "متى سيكون جاهزاً؟",
          a: "MVP — 2-4 أسابيع، منتج كامل — 2-3 أشهر، enterprise — 4-6 أشهر. عروض وتقارير أسبوعية.",
        },
        {
          q: "لمن الكود المصدري؟",
          a: "100% لك. العقد ينص: تسليم كامل للكود، repo على حسابك. لا vendor lock-in.",
        },
        {
          q: "كم يستمر الدعم؟",
          a: "MVP — شهر مجاناً، منتج كامل — 3 أشهر، enterprise — 12 شهر. ثم $200-500 شهرياً.",
        },
        {
          q: "مقارنة بالاستوديوهات الأجنبية؟",
          a: "أجنبي $50-150 للساعة، نحن $20-40. 6 أشهر لديهم، 2-3 لدينا. بلا حاجز لغوي.",
        },
        {
          q: "ضمان استرجاع المال؟",
          a: "لو لم يُقبل MVP خلال أسبوعين — استرجاع 100%. ثم الدفع حسب المراحل المقبولة.",
        },
      ],
    },
    finalCta: {
      badge: "حان وقت البدء",
      title: "استشارة 30 دقيقة",
      titleAccent: "مجانية — اليوم",
      subtitle: "ندرس أعمالك، نعطي عروضاً حقيقية. بلا التزامات.",
      button: "راسل عبر Telegram",
      note: "أو احجز موعداً عبر Calendly — 30 دقيقة مع بكزود.",
      pitch: "برنامج واحد يضاعف أعمالك. جرب.",
    },
  },

  // ─────────────────── UK ───────────────────
  uk: {
    meta: { badge: "TEZCODE CUSTOM" },
    hero: {
      badge: "Розробка під замовлення (custom software)",
      title1: "Програма",
      titleAccent: "під ваш бізнес",
      title2: "— за 2 тижні",
      subtitle:
        "Якщо готові SaaS не підходять під ваш робочий процес, ми пишемо з нуля. ERP, CRM, e-commerce, custom dashboard — що потрібно.",
      trust: "Безкоштовна 30-хв консультація • Оплата: 30% передоплата",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Дивитись портфоліо",
    },
    problems: {
      badge: "Гірка правда",
      title: "Чому ви",
      titleAccent: "тут?",
      subtitle: "Бо інші не впоралися. Tezcode Custom — остання зупинка.",
      items: [
        {
          tag: "01",
          title: "Готовий SaaS не підходить вашому бізнесу",
          desc: "Bitrix24, AmoCRM, Shopify — універсальні рішення. Ваш унікальний flow і продукт. Готова програма використовується на 60%, 40% — зайве, гроші марно.",
        },
        {
          tag: "02",
          title: "Excel + Telegram + Google Forms = хаос",
          desc: "Замовлення в Excel, клієнти у Telegram, звіти у Forms, склад у 1C. Збір даних — 4 години. Реальних цифр немає.",
        },
        {
          tag: "03",
          title: "Іноземна студія просить $50K, робить 6 місяців",
          desc: "Україна/Індія — $50-150 за годину. Мова, таймзона. 6 місяців на старт, без підтримки.",
        },
        {
          tag: "04",
          title: "Місцевий фрілансер не закінчить за 3 місяці",
          desc: "1 розробник, 3 проекти паралельно. Сьогодні є — завтра ні. Без тестів, без документації.",
        },
      ],
    },
    benefits: {
      badge: "Відмінність Tezcode",
      title: "Чому",
      titleAccent: "Tezcode Custom",
      subtitle: "14 in-house розробників, AI інструменти, локальний CEO, єдина відповідальність.",
      items: [
        {
          icon: "users",
          title: "14 in-house розробників",
          desc: "В офісі у Ташкенті. Не фрілансери — команда. Backend, frontend, mobile, AI, DevOps — все у нас.",
        },
        {
          icon: "bot",
          title: "Втричі швидше з AI",
          desc: "Працюємо з Claude (Anthropic AI) + Cursor (AI редактор коду). Місяць роботи — за тиждень.",
        },
        {
          icon: "clipboard-list",
          title: "Один контракт, один PM",
          desc: "Один контракт — одна ціна — один термін. PM дає тижневий звіт. Без сюрпризів.",
        },
        {
          icon: "message-circle",
          title: "CEO у Telegram, 24/7",
          desc: "Бекзод Мірзаалієв (CEO) — @tezcode_managament. Проблема — пишете напряму. Відповідь за 30 хв.",
        },
      ],
    },
    portfolio: {
      badge: "Реальні проекти",
      title: "Що ми",
      titleAccent: "збудували",
      subtitle: "3 канонічні приклади. Реальні клієнти, цифри, результати.",
      caseLabel: "Case study",
      durationLabel: "Термін",
      savedLabel: "Економія",
      fullCase: "Повний case study",
      items: [
        {
          slug: "raos",
          name: "RAOS (Pos-Cosmetics)",
          tagline: "Multi-tenant POS для магазинів косметики",
          summary: "Каса, склад, CRM, звіти, multi-tenant — один додаток. 50+ магазинів.",
          duration: "8 тижнів",
          saved: "$80K",
          tags: ["Next.js", "Postgres", "POS", "Multi-tenant"],
        },
        {
          slug: "ai-office",
          name: "AI Office (OpenClaw)",
          tagline: "AI віртуальний офіс із 12 відділами",
          summary: "12 AI-відділів. Бекзод використовує сам — керує 14 розробниками та 50+ проектами.",
          duration: "12 тижнів MVP",
          saved: "$120K",
          tags: ["FastAPI", "Claude API", "i18n", "Multi-agent"],
        },
        {
          slug: "hamshirago",
          name: "HamshiraGo (CoreMed)",
          tagline: "Домашня медсестра + керування клінікою",
          summary: "Мобільний додаток, dashboard клініки, розклад лікарів. 5 клінік за 3 місяці.",
          duration: "10 тижнів",
          saved: "$60K",
          tags: ["React Native", "Node.js", "Healthcare", "PWA"],
        },
      ],
    },
    process: {
      badge: "Процес",
      title: "4 кроки до",
      titleAccent: "production",
      subtitle: "Перші 30 хвилин — безкоштовно. Далі точна ціна та термін.",
      steps: [
        {
          num: "01",
          title: "Консультація — безкоштовно",
          desc: "Вивчаємо бізнес 30-60 хв. Поточні проблеми, потрібні функції, бюджет.",
          icon: "message-circle",
        },
        {
          num: "02",
          title: "Технічне ТЗ + пропозиція",
          desc: "За 3-5 днів: технічний документ, ціна, термін, команда. Письмовий контракт.",
          icon: "ruler",
        },
        {
          num: "03",
          title: "MVP",
          desc: "За 2-4 тижні — робоча версія. Демо щотижня. Ви бачите все онлайн.",
          icon: "zap",
        },
        {
          num: "04",
          title: "Production + підтримка",
          desc: "Деплой + 30 днів безкоштовної підтримки. Далі $200-500/міс.",
          icon: "rocket",
        },
      ],
    },
    pricing: {
      badge: "Діапазони цін",
      title: "Прозоре",
      titleAccent: "ціноутворення",
      subtitle: "Без прихованих платежів. 3 діапазони за складністю.",
      note: "Точна ціна — після ТЗ. Консультація безкоштовна.",
      tiers: [
        {
          name: "Стартовий MVP",
          range: "$3K — $8K",
          timeline: "4 тижні",
          desc: "Новий бізнес, перевірка ідеї. 1 ключова функція + адмін.",
          features: [
            "Web або mobile (одне)",
            "Auth (вхід)",
            "Базовий CRUD",
            "Admin dashboard",
            "1 міс. безкоштовної підтримки",
          ],
          cta: "Почати",
        },
        {
          name: "Повний продукт",
          range: "$10K — $25K",
          timeline: "2-3 місяці",
          desc: "Середній бізнес. CRM + e-commerce + analytics.",
          features: [
            "Web + mobile (PWA)",
            "Multi-user + ролі",
            "Зовнішні інтеграції",
            "Аналітика + звіти",
            "3 міс. підтримки",
            "Документація",
          ],
          cta: "Консультація",
          featured: true,
        },
        {
          name: "Корпоративний ERP",
          range: "$30K — $100K",
          timeline: "4-6 місяців",
          desc: "Велике підприємство, тендери, банк. Повне enterprise-рішення.",
          features: [
            "Multi-tenant архітектура",
            "Native iOS + Android",
            "API + інтеграції",
            "SSO + аудит",
            "SLA 99.9%",
            "12 міс. підтримки + onsite",
          ],
          cta: "Великий проект — обговоримо",
        },
      ],
    },
    trust: {
      badge: "Знаки довіри",
      title: "5 років досвіду,",
      titleAccent: "150+ проектів",
      stats: [
        { value: "14", label: "In-house розробників" },
        { value: "150+", label: "Зроблено проектів" },
        { value: "5", label: "Років досвіду" },
        { value: "8", label: "Власних продуктів" },
      ],
      partnersLabel: "Клієнти та партнери",
    },
    faq: {
      badge: "Часті запитання",
      title: "Питання та",
      titleAccent: "відповіді",
      subtitle: "Найважливіші 6.",
      items: [
        {
          q: "Чим відрізняєтесь?",
          a: "Три речі: 14 in-house розробників, втричі швидше з AI, CEO у Telegram 24/7.",
        },
        {
          q: "Коли буде готово?",
          a: "MVP — 2-4 тижні, повний продукт — 2-3 міс., корпоративний — 4-6 міс. Щотижневі демо.",
        },
        {
          q: "Кому належить вихідний код?",
          a: "100% вам. У контракті: повна передача коду, GitHub на вашому акаунті. Без vendor lock-in.",
        },
        {
          q: "Як довго триває підтримка?",
          a: "MVP — 1 міс. безкоштовно, повний — 3 міс., корпоративний — 12 міс. Далі $200-500/міс.",
        },
        {
          q: "Порівняння з іноземними студіями?",
          a: "Іноземці $50-150 за годину, ми $20-40. Вони 6 міс. — ми 2-3. Без мовного бар'єру.",
        },
        {
          q: "Гарантія повернення грошей?",
          a: "Якщо MVP не прийнятий за 2 тижні — 100% повернення. Далі оплата за прийнятими етапами.",
        },
      ],
    },
    finalCta: {
      badge: "Час починати",
      title: "Безкоштовна 30-хв",
      titleAccent: "консультація — сьогодні",
      subtitle: "Вивчаємо бізнес, даємо реальні пропозиції. Без зобов'язань.",
      button: "Написати у Telegram",
      note: "Або забронюйте час через Calendly — 30 хвилин із Бекзодом.",
      pitch: "Одна програма подвоює бізнес. Спробуйте.",
    },
  },
};

// ─────────────────────────────────────────────────────────────────────
// Mock partner logos (text-only — no external assets needed)
// ─────────────────────────────────────────────────────────────────────
const PARTNERS: { name: string; sector: string }[] = [
  { name: "Pos-Cosmetics", sector: "Retail" },
  { name: "CoreMed", sector: "Healthcare" },
  { name: "OpenClaw", sector: "AI Office" },
  { name: "Ventra", sector: "Analytics" },
  { name: "MaxSavdo", sector: "No-code" },
  { name: "Work-Control", sector: "HR Tech" },
];

// ─────────────────────────────────────────────────────────────────────
// Section: Hero (with parallax mesh)
// ─────────────────────────────────────────────────────────────────────
function HeroSection({ copy }: { copy: Copy }) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div aria-hidden className="tc-grid-bg absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
          }}
          className="tc-chip mb-8"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--tc-blue)]"
          />
          {copy.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
          }}
          className="text-4xl sm:text-5xl lg:text-6xl font-800 leading-[1.05] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-[var(--tc-text-primary)]">{copy.hero.title1}</span>
          <span className="block text-[var(--tc-blue-text)]">{copy.hero.titleAccent}</span>
          <span className="block text-[var(--tc-text-primary)]">{copy.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 },
          }}
          className="text-lg md:text-2xl text-[var(--tc-text-secondary)] max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          {copy.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 },
          }}
          className="inline-flex items-center justify-center gap-2 text-sm md:text-base text-[var(--tc-text-muted)] font-500 mb-12"
        >
          <Check className="w-4 h-4 shrink-0 text-[var(--tc-success)]" />
          {copy.hero.trust}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 },
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic strength={12}>
            <motion.a
              href="#consult"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="tc-btn-primary group relative w-full sm:w-auto text-sm"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {copy.hero.ctaPrimary}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.a>
          </Magnetic>
          <Magnetic strength={10}>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="tc-btn-secondary w-full sm:w-auto text-sm"
            >
              {copy.hero.ctaSecondary}
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section: Problem statement
// ─────────────────────────────────────────────────────────────────────
function ProblemsSection({ copy }: { copy: Copy }) {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-y border-[var(--tc-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <div className="mb-6">
            <span className="tc-chip">{copy.problems.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--tc-text-primary)] mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.problems.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{copy.problems.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-muted)] text-lg md:text-xl">
            {copy.problems.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          stagger={0.12}
        >
          {copy.problems.items.map((item) => (
            <RevealItem key={item.tag}>
              <Tilt3D intensity={5} className="rounded-[var(--tc-radius-lg)]">
                <div className="tc-card tc-card-hover relative h-full p-8 overflow-hidden">
                  <span
                    className="absolute top-6 right-6 text-5xl font-800 text-[var(--tc-blue-text)] opacity-15 select-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    className="relative text-xl md:text-2xl font-700 text-[var(--tc-text-primary)] mb-3 tracking-tight pr-16"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="relative text-[var(--tc-text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Tilt3D>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section: Benefits (Why Tezcode Custom)
// ─────────────────────────────────────────────────────────────────────
function BenefitsSection({ copy }: { copy: Copy }) {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="mb-6">
            <span className="tc-chip">{copy.benefits.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--tc-text-primary)] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.benefits.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{copy.benefits.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-muted)] text-lg md:text-xl">
            {copy.benefits.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          stagger={0.12}
        >
          {copy.benefits.items.map((item, i) => (
            <RevealItem key={i} className={i % 2 === 1 ? "md:mt-12" : ""}>
              <Tilt3D intensity={6} className="rounded-[var(--tc-radius-xl)]">
                <div className="tc-card tc-card-hover relative h-full p-8 md:p-10 overflow-hidden">
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.1 }}
                    className="relative w-12 h-12 rounded-xl bg-[var(--tc-blue-dim)] flex items-center justify-center mb-6"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <ServiceIcon name={item.icon} className="w-6 h-6 text-[var(--tc-blue-text)]" />
                  </motion.div>
                  <h3
                    className="relative text-2xl md:text-3xl font-700 text-[var(--tc-text-primary)] mb-3 tracking-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      transform: "translateZ(25px)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="relative text-[var(--tc-text-secondary)] leading-relaxed"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </Tilt3D>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section: Portfolio
// ─────────────────────────────────────────────────────────────────────
function PortfolioSection({ copy, locale }: { copy: Copy; locale: Lang }) {
  return (
    <section
      id="portfolio"
      className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-y border-[var(--tc-border)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="max-w-3xl mb-20">
          <div className="mb-6">
            <span className="tc-chip">{copy.portfolio.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--tc-text-primary)] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.portfolio.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{copy.portfolio.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-muted)] text-lg md:text-xl">
            {copy.portfolio.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          stagger={0.15}
        >
          {copy.portfolio.items.map((item) => {
            const fullCaseHref = `/${locale === "uz" ? "" : `${locale}/`}case-studies/${item.slug}`;
            return (
              <RevealItem key={item.slug}>
                <Tilt3D intensity={6} className="rounded-[var(--tc-radius-lg)] h-full">
                  <div className="tc-card tc-card-hover relative h-full p-8 flex flex-col">
                    <div className="text-xs font-600 uppercase tracking-[0.25em] text-[var(--tc-blue-text)] mb-3">
                      {copy.portfolio.caseLabel}
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm text-[var(--tc-text-secondary)] mb-5 leading-relaxed">
                      {item.tagline}
                    </p>
                    <p className="text-sm text-[var(--tc-text-secondary)] mb-6 leading-relaxed flex-1">
                      {item.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-[var(--tc-border)]">
                      <div>
                        <div className="text-xs text-[var(--tc-text-muted)] uppercase tracking-wider mb-1">
                          {copy.portfolio.durationLabel}
                        </div>
                        <div className="text-sm font-600 text-[var(--tc-text-primary)]">
                          {item.duration}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tc-text-muted)] uppercase tracking-wider mb-1">
                          {copy.portfolio.savedLabel}
                        </div>
                        <div className="text-sm font-600 text-[var(--tc-success)]">
                          {item.saved}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[10px] font-500 bg-[var(--tc-surface-2)] text-[var(--tc-text-secondary)] border border-[var(--tc-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={fullCaseHref}
                      className="inline-flex items-center gap-1.5 text-sm font-600 text-[var(--tc-blue-text)] hover:text-[var(--tc-blue)] transition-colors tc-link-underline w-fit"
                    >
                      {copy.portfolio.fullCase}
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </Tilt3D>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section: Process timeline
// ─────────────────────────────────────────────────────────────────────
function ProcessSection({ copy }: { copy: Copy }) {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-20">
          <div className="mb-6">
            <span className="tc-chip">{copy.process.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--tc-text-primary)] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.process.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{copy.process.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-muted)] text-lg md:text-xl max-w-2xl mx-auto">
            {copy.process.subtitle}
          </p>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] border-t border-dashed border-[var(--tc-border-bright)]"
          />

          <RevealStagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.15}
          >
            {copy.process.steps.map((step) => {
              return (
                <RevealItem key={step.num}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="tc-card group relative p-6 h-full"
                  >
                    <div className="relative flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[var(--tc-blue-dim)] flex items-center justify-center">
                        <ServiceIcon
                          name={step.icon}
                          className="w-6 h-6 text-[var(--tc-blue-text)]"
                        />
                      </div>
                      <span
                        className="text-4xl font-800 text-[var(--tc-blue-text)] opacity-30"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.num}
                      </span>
                    </div>

                    <h3
                      className="relative text-xl font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="relative text-sm text-[var(--tc-text-secondary)] leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section: Pricing
// ─────────────────────────────────────────────────────────────────────
function PricingSection({ copy }: { copy: Copy }) {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-y border-[var(--tc-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="mb-6">
            <span className="tc-chip">{copy.pricing.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--tc-text-primary)] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.pricing.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{copy.pricing.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-muted)] text-lg md:text-xl">
            {copy.pricing.subtitle}
          </p>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          stagger={0.15}
        >
          {copy.pricing.tiers.map((tier) => {
            const featured = tier.featured === true;
            return (
              <RevealItem key={tier.name}>
                <Tilt3D
                  intensity={featured ? 7 : 5}
                  className="rounded-[var(--tc-radius-xl)] h-full"
                >
                  <div
                    className={[
                      "relative h-full p-8 md:p-10 rounded-[var(--tc-radius-xl)]",
                      "overflow-hidden flex flex-col",
                      featured
                        ? "tc-navy-section lg:scale-[1.03] shadow-[0_24px_60px_rgba(0,64,255,0.25)]"
                        : "tc-card tc-card-hover",
                    ].join(" ")}
                  >
                    {featured && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--tc-blue)] text-white text-[10px] font-700 uppercase tracking-[0.18em]">
                        ★
                      </span>
                    )}
                    <h3
                      className="text-2xl font-700 text-[var(--tc-text-primary)] mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tier.name}
                    </h3>
                    <div
                      className="text-4xl md:text-5xl font-800 text-[var(--tc-text-primary)] mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {tier.range}
                    </div>
                    <div className="text-sm text-[var(--tc-text-muted)] font-500 mb-5">
                      {tier.timeline}
                    </div>
                    <p className="text-sm text-[var(--tc-text-secondary)] mb-6 leading-relaxed">
                      {tier.desc}
                    </p>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {tier.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-sm text-[var(--tc-text-secondary)]"
                        >
                          <svg
                            className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? "text-[#5b8cff]" : "text-[var(--tc-success)]"}`}
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M3 8l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Magnetic strength={10}>
                      <a
                        href="#consult"
                        className={[
                          "w-full text-sm",
                          featured ? "tc-btn-primary" : "tc-btn-secondary",
                        ].join(" ")}
                      >
                        {tier.cta}
                      </a>
                    </Magnetic>
                  </div>
                </Tilt3D>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal className="mt-10 text-center" delay={0.1}>
          <p className="text-sm text-[var(--tc-text-muted)] italic">
            {copy.pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section: Trust signals
// ─────────────────────────────────────────────────────────────────────
function TrustSection({ copy }: { copy: Copy }) {
  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-ink)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6">
            <span className="tc-chip">{copy.trust.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--tc-text-primary)] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.trust.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{copy.trust.titleAccent}</span>
          </h2>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          stagger={0.1}
        >
          {copy.trust.stats.map((stat, i) => (
            <RevealItem key={i}>
              <div className="tc-card text-center p-6">
                <div
                  className="text-4xl md:text-5xl font-800 text-[var(--tc-text-primary)] mb-2 tabular-nums"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--tc-text-muted)]">
                  {stat.label}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.25em] text-[var(--tc-text-muted)]">
            {copy.trust.partnersLabel}
          </div>
        </Reveal>

        <RevealStagger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          stagger={0.08}
        >
          {PARTNERS.map((p) => (
            <RevealItem key={p.name}>
              <div className="tc-card tc-card-hover group relative p-5 text-center">
                <div
                  className="text-sm font-700 text-[var(--tc-text-primary)] mb-1 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--tc-text-muted)]">
                  {p.sector}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section: FAQ (accordion)
// ─────────────────────────────────────────────────────────────────────
function FaqSection({ copy }: { copy: Copy }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqSchema = getFaqSchema(copy.faq.items);

  return (
    <section className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-y border-[var(--tc-border)] overflow-hidden">
      {/* FAQPage structured data — same items as the accordion below, so answer
          engines (AI Overviews, ChatGPT, Perplexity) can cite these Q&A. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <div className="mb-6">
            <span className="tc-chip">{copy.faq.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 text-[var(--tc-text-primary)] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.faq.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{copy.faq.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-muted)] text-lg md:text-xl">
            {copy.faq.subtitle}
          </p>
        </Reveal>

        <RevealStagger className="space-y-3" stagger={0.08}>
          {copy.faq.items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <RevealItem key={i}>
                <div
                  className={[
                    "rounded-[var(--tc-radius-lg)] border bg-[var(--tc-surface-1)] shadow-[var(--tc-shadow-card)] transition-colors overflow-hidden",
                    isOpen
                      ? "border-[var(--tc-blue)]"
                      : "border-[var(--tc-border)] hover:border-[var(--tc-border-bright)]",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-start"
                  >
                    <span
                      className="text-base md:text-lg font-600 text-[var(--tc-text-primary)] tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                      className={[
                        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl",
                        isOpen
                          ? "bg-[var(--tc-blue)] text-white"
                          : "bg-[var(--tc-surface-2)] text-[var(--tc-text-secondary)]",
                      ].join(" ")}
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-[var(--tc-text-secondary)] leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Section: Final CTA
// ─────────────────────────────────────────────────────────────────────
function FinalCtaSection({ copy }: { copy: Copy }) {
  return (
    <section
      id="consult"
      className="tc-navy-section relative py-20 sm:py-28 px-6 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,64,255,0.5), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <Reveal>
          <div className="mb-6">
            <span className="tc-chip">{copy.finalCta.badge}</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-800 text-[var(--tc-text-primary)] mb-6 tracking-tight leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block">{copy.finalCta.title}</span>
            <span className="text-[var(--tc-blue-text)] block">{copy.finalCta.titleAccent}</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--tc-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            {copy.finalCta.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Magnetic strength={12}>
            <motion.a
              href="https://t.me/tezcode_managament"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="tc-btn-primary group text-base gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              {copy.finalCta.button}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-[var(--tc-text-muted)]">
            {copy.finalCta.note}
          </p>
          <p
            className="mt-10 text-xl md:text-2xl text-[var(--tc-text-primary)] font-700"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.finalCta.pitch}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Page entry
// ─────────────────────────────────────────────────────────────────────
export default function ForBusinessesPage() {
  const locale = useLocale() as Lang;
  const copy = COPY[locale] ?? COPY.uz;

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] overflow-hidden"
    >
      <Navbar />
      <HeroSection copy={copy} />
      <ProblemsSection copy={copy} />
      <BenefitsSection copy={copy} />
      <PortfolioSection copy={copy} locale={locale} />
      <ProcessSection copy={copy} />
      <PricingSection copy={copy} />
      <TrustSection copy={copy} />
      <FaqSection copy={copy} />
      <FinalCtaSection copy={copy} />
      <Footer />
          <StickyCTA />

      </main>
  );
}
