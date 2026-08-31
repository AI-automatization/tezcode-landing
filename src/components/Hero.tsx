"use client";

import { m } from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  Bot,
  Check,
  FileText,
  Globe,
  LayoutGrid,
  Megaphone,
  MessageSquare,
  Phone,
  Send,
  ShoppingCart,
  Stethoscope,
  Users,
  Video,
  Workflow,
} from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { Link } from "@/i18n/routing";

// Right-side visual copy — rotating "what we automate" scenarios.
// Each slide: a business everyone recognizes + old way → new result.
type VisualSlide = {
  title: string;
  desc: string;
  tasks: [string, string, string];
  oldLabel: string;
  newLabel: string;
};

type VisualCopy = {
  header: string;
  live: string;
  slides: VisualSlide[];
  chip1: string;
  statVal: string;
  statLabel: string;
};

const VISUAL_COPY: Record<string, VisualCopy> = {
  uz: {
    header: "AI nimalarni qila oladi?",
    live: "jonli",
    slides: [
      {
        title: "AI chatbot",
        desc: "Har bir mijoz savoliga AI kechayu kunduz o'zi javob beradi.",
        tasks: ["Savollarga darhol javob", "Narx va katalog yuborish", "Buyurtmani qabul qilish"],
        oldLabel: "Javob: 2 soat",
        newLabel: "1 soniyada",
      },
      {
        title: "AI qo'ng'iroqlar",
        desc: "Voice AI qo'ng'iroqlarga o'zi javob berib, buyurtma oladi.",
        tasks: ["Qo'ng'iroqqa avtomatik javob", "Buyurtmani yozib olish", "Suhbatni matnga o'girish"],
        oldLabel: "30% qo'ng'iroq o'tkaziladi",
        newLabel: "100% javob",
      },
      {
        title: "AI savdo tahlili",
        desc: "AI sotuvlaringizni o'rganib, nima qilish kerakligini aytadi.",
        tasks: ["Qaysi tovar yaxshi ketadi", "Narx bo'yicha takliflar", "Tugayotgan tovar ogohlantirishi"],
        oldLabel: "Sezgi bilan qaror",
        newLabel: "AI tahlili bilan",
      },
      {
        title: "AI hisobot va prognoz",
        desc: "Hisobotlar o'zi tuziladi, kelasi oy prognozi tayyor bo'ladi.",
        tasks: ["Kunlik xulosa", "Savdo prognozi", "G'ayrioddiy holatni aniqlash"],
        oldLabel: "Excel: 3 soat",
        newLabel: "1 daqiqada",
      },
      {
        title: "AI hujjat ishlari",
        desc: "AI hujjatlarni o'qiydi, to'ldiradi va tekshiradi.",
        tasks: ["Hujjatdan ma'lumot olish", "Shartnoma va akt to'ldirish", "Xatolarni tekshirish"],
        oldLabel: "Qo'lda ko'chirish",
        newLabel: "Avtomatik",
      },
      {
        title: "AI marketing",
        desc: "Post, e'lon va tavsiflarni AI o'zi yozib beradi.",
        tasks: ["Post va e'lon matnlari", "Mahsulot tavsiflari", "Kontent rejasi"],
        oldLabel: "Kontent: 1 kun",
        newLabel: "5 daqiqada",
      },
      {
        title: "AI Telegram bot",
        desc: "Buyurtmalarni bot qabul qilib, tizimga o'zi tushiradi.",
        tasks: ["Buyurtma qabul qilish", "To'lovni tekshirish", "Mijozga status xabari"],
        oldLabel: "Qo'ng'iroq kutish",
        newLabel: "Bot 24/7",
      },
      {
        title: "AI navbat va qabul",
        desc: "Yozilish va navbatni AI boshqaradi — klinika, salon, servis.",
        tasks: ["Onlayn yozilish", "Navbatni taqsimlash", "SMS eslatmalar"],
        oldLabel: "Navbat: 40 daqiqa",
        newLabel: "40% tezroq",
      },
      {
        title: "AI xodimlar tahlili",
        desc: "Jamoa samaradorligini AI kuzatib, xulosa beradi.",
        tasks: ["Davomat va faollik", "Vazifalar taqsimoti", "Haftalik AI xulosa"],
        oldLabel: "Nazorat: 1 soat/kun",
        newLabel: "O'z-o'zidan",
      },
      {
        title: "AI agentlar",
        desc: "AI agent butun jarayonni boshidan oxirigacha o'zi yuritadi.",
        tasks: ["Bo'limlararo ishlarni bog'laydi", "O'zi qaror qabul qiladi", "Sizga faqat xulosa beradi"],
        oldLabel: "10 ta qo'l ishi",
        newLabel: "1 ta AI agent",
      },
      {
        title: "AI video analitika",
        desc: "AI mavjud kameralaringizni aqlli qiladi — odam sanaydi, yuz taniydi, xavfsizlikni nazorat qiladi.",
        tasks: ["Odam aniqlash va sanash", "Yuz tanib davomat", "Kaska va avto raqam nazorati"],
        oldLabel: "Qo'lda kuzatuv",
        newLabel: "AI o'zi kuzatadi",
      },
    ],
    chip1: "24/7 avtomatik",
    statVal: "+40%",
    statLabel: "sotuv",
  },
  ru: {
    header: "Что умеет ИИ?",
    live: "онлайн",
    slides: [
      {
        title: "ИИ-чат-бот",
        desc: "ИИ сам отвечает на каждый вопрос клиента 24/7.",
        tasks: ["Мгновенные ответы на вопросы", "Отправка цен и каталога", "Приём заказов"],
        oldLabel: "Ответ: 2 часа",
        newLabel: "1 секунда",
      },
      {
        title: "ИИ-звонки",
        desc: "Голосовой ИИ сам отвечает на звонки и принимает заказы.",
        tasks: ["Автоответ на звонки", "Запись заказа", "Расшифровка разговора в текст"],
        oldLabel: "Теряется 30% звонков",
        newLabel: "100% ответов",
      },
      {
        title: "ИИ-анализ продаж",
        desc: "ИИ изучает ваши продажи и подсказывает, что делать.",
        tasks: ["Какой товар идёт лучше", "Рекомендации по ценам", "Оповещение о низких остатках"],
        oldLabel: "Решения по наитию",
        newLabel: "Решения с ИИ-анализом",
      },
      {
        title: "ИИ-отчёты и прогноз",
        desc: "Отчёты собираются сами, прогноз на месяц готов.",
        tasks: ["Ежедневная сводка", "Прогноз продаж", "Обнаружение аномалий"],
        oldLabel: "Excel: 3 часа",
        newLabel: "1 минута",
      },
      {
        title: "ИИ-документы",
        desc: "ИИ читает, заполняет и проверяет документы.",
        tasks: ["Извлечение данных из документов", "Заполнение договоров и актов", "Проверка ошибок"],
        oldLabel: "Переписывание вручную",
        newLabel: "Автоматически",
      },
      {
        title: "ИИ-маркетинг",
        desc: "ИИ сам пишет посты, объявления и описания.",
        tasks: ["Тексты постов и объявлений", "Описания товаров", "Контент-план"],
        oldLabel: "Контент: 1 день",
        newLabel: "5 минут",
      },
      {
        title: "ИИ Telegram-бот",
        desc: "Бот принимает заказы и сам заносит их в систему.",
        tasks: ["Приём заказов", "Проверка оплаты", "Статус для клиента"],
        oldLabel: "Ожидание звонка",
        newLabel: "Бот 24/7",
      },
      {
        title: "ИИ-запись и очередь",
        desc: "Записью и очередью управляет ИИ — клиника, салон, сервис.",
        tasks: ["Онлайн-запись", "Распределение очереди", "SMS-напоминания"],
        oldLabel: "Очередь: 40 минут",
        newLabel: "На 40% быстрее",
      },
      {
        title: "ИИ-анализ команды",
        desc: "ИИ следит за эффективностью команды и делает выводы.",
        tasks: ["Посещаемость и активность", "Распределение задач", "Еженедельная ИИ-сводка"],
        oldLabel: "Контроль: 1 час/день",
        newLabel: "Само собой",
      },
      {
        title: "ИИ-агенты",
        desc: "ИИ-агент сам ведёт весь процесс от начала до конца.",
        tasks: ["Связывает отделы между собой", "Сам принимает решения", "Вам — только итоги"],
        oldLabel: "10 ручных операций",
        newLabel: "1 ИИ-агент",
      },
      {
        title: "ИИ-видеоаналитика",
        desc: "ИИ делает ваши камеры умными — считает людей, распознаёт лица, контролирует безопасность.",
        tasks: ["Детекция и подсчёт людей", "Учёт по лицу", "Контроль каски и автономеров"],
        oldLabel: "Ручной надзор",
        newLabel: "ИИ следит сам",
      },
    ],
    chip1: "24/7 автоматизация",
    statVal: "+40%",
    statLabel: "продажи",
  },
  en: {
    header: "What can AI do?",
    live: "live",
    slides: [
      {
        title: "AI chatbot",
        desc: "AI answers every customer question around the clock.",
        tasks: ["Instant answers to questions", "Sends prices & catalog", "Takes orders"],
        oldLabel: "Reply: 2 hours",
        newLabel: "1 second",
      },
      {
        title: "AI phone calls",
        desc: "Voice AI answers calls and takes orders by itself.",
        tasks: ["Auto-answers every call", "Writes the order down", "Transcribes conversations"],
        oldLabel: "30% of calls missed",
        newLabel: "100% answered",
      },
      {
        title: "AI sales analysis",
        desc: "AI studies your sales and tells you what to do next.",
        tasks: ["What sells best", "Pricing suggestions", "Low-stock alerts"],
        oldLabel: "Gut-feel decisions",
        newLabel: "AI-backed decisions",
      },
      {
        title: "AI reports & forecast",
        desc: "Reports build themselves, next month's forecast included.",
        tasks: ["Daily summary", "Sales forecast", "Anomaly detection"],
        oldLabel: "Excel: 3 hours",
        newLabel: "1 minute",
      },
      {
        title: "AI paperwork",
        desc: "AI reads, fills in and checks your documents.",
        tasks: ["Extracts data from documents", "Fills contracts & acts", "Catches mistakes"],
        oldLabel: "Manual retyping",
        newLabel: "Automatic",
      },
      {
        title: "AI marketing",
        desc: "Posts, ads and descriptions — AI writes them for you.",
        tasks: ["Post & ad copy", "Product descriptions", "Content plan"],
        oldLabel: "Content: 1 day",
        newLabel: "5 minutes",
      },
      {
        title: "AI Telegram bot",
        desc: "A bot takes orders and pushes them into your system.",
        tasks: ["Order intake", "Payment verification", "Status updates to customer"],
        oldLabel: "Waiting on calls",
        newLabel: "Bot 24/7",
      },
      {
        title: "AI booking & queue",
        desc: "AI runs booking and queues — clinics, salons, services.",
        tasks: ["Online booking", "Queue distribution", "SMS reminders"],
        oldLabel: "Queue: 40 min",
        newLabel: "40% faster",
      },
      {
        title: "AI team insights",
        desc: "AI tracks team performance and reports back.",
        tasks: ["Attendance & activity", "Task assignment", "Weekly AI summary"],
        oldLabel: "Oversight: 1 hr/day",
        newLabel: "Runs itself",
      },
      {
        title: "AI agents",
        desc: "An AI agent runs the whole process end to end.",
        tasks: ["Connects departments", "Makes decisions itself", "You get just the outcome"],
        oldLabel: "10 manual steps",
        newLabel: "1 AI agent",
      },
      {
        title: "AI video analytics",
        desc: "AI makes your existing cameras smart — counts people, recognizes faces, monitors safety.",
        tasks: ["Detect and count people", "Face-based attendance", "Helmet & plate control"],
        oldLabel: "Manual monitoring",
        newLabel: "AI watches for you",
      },
    ],
    chip1: "24/7 automated",
    statVal: "+40%",
    statLabel: "sales",
  },
  ar: {
    header: "ماذا يستطيع الذكاء الاصطناعي؟",
    live: "مباشر",
    slides: [
      {
        title: "روبوت دردشة ذكي",
        desc: "الذكاء الاصطناعي يجيب على كل سؤال على مدار الساعة.",
        tasks: ["إجابات فورية على الأسئلة", "إرسال الأسعار والكتالوج", "استقبال الطلبات"],
        oldLabel: "الرد: ساعتان",
        newLabel: "ثانية واحدة",
      },
      {
        title: "مكالمات ذكية",
        desc: "الذكاء الصوتي يرد على المكالمات ويستقبل الطلبات بنفسه.",
        tasks: ["رد تلقائي على المكالمات", "تدوين الطلب", "تحويل المحادثة إلى نص"],
        oldLabel: "30% مكالمات مفقودة",
        newLabel: "رد بنسبة 100%",
      },
      {
        title: "تحليل مبيعات ذكي",
        desc: "الذكاء الاصطناعي يدرس مبيعاتك ويخبرك بما تفعله.",
        tasks: ["ما الأكثر مبيعًا", "اقتراحات الأسعار", "تنبيهات نفاد المخزون"],
        oldLabel: "قرارات بالحدس",
        newLabel: "قرارات بتحليل AI",
      },
      {
        title: "تقارير وتوقعات ذكية",
        desc: "التقارير تُعد نفسها مع توقعات الشهر القادم.",
        tasks: ["ملخص يومي", "توقعات المبيعات", "كشف الحالات الشاذة"],
        oldLabel: "Excel: 3 ساعات",
        newLabel: "دقيقة واحدة",
      },
      {
        title: "مستندات ذكية",
        desc: "الذكاء الاصطناعي يقرأ المستندات ويعبئها ويدققها.",
        tasks: ["استخراج البيانات من المستندات", "تعبئة العقود والمحاضر", "كشف الأخطاء"],
        oldLabel: "نسخ يدوي",
        newLabel: "تلقائي",
      },
      {
        title: "تسويق ذكي",
        desc: "المنشورات والإعلانات والأوصاف — يكتبها AI بنفسه.",
        tasks: ["نصوص المنشورات والإعلانات", "أوصاف المنتجات", "خطة المحتوى"],
        oldLabel: "المحتوى: يوم كامل",
        newLabel: "5 دقائق",
      },
      {
        title: "بوت Telegram ذكي",
        desc: "البوت يستقبل الطلبات ويدخلها إلى النظام بنفسه.",
        tasks: ["استقبال الطلبات", "التحقق من الدفع", "إشعار الحالة للعميل"],
        oldLabel: "انتظار المكالمات",
        newLabel: "بوت 24/7",
      },
      {
        title: "حجز وطوابير ذكية",
        desc: "الذكاء الاصطناعي يدير الحجز والطوابير — عيادات وصالونات وخدمات.",
        tasks: ["حجز أونلاين", "توزيع الطوابير", "تذكيرات SMS"],
        oldLabel: "الانتظار: 40 دقيقة",
        newLabel: "أسرع بنسبة 40%",
      },
      {
        title: "تحليل فريق ذكي",
        desc: "الذكاء الاصطناعي يتابع أداء الفريق ويقدم الخلاصة.",
        tasks: ["الحضور والنشاط", "توزيع المهام", "ملخص أسبوعي من AI"],
        oldLabel: "المراقبة: ساعة/يوم",
        newLabel: "يعمل تلقائيًا",
      },
      {
        title: "وكلاء ذكيون",
        desc: "وكيل AI يدير العملية كاملة من البداية إلى النهاية.",
        tasks: ["يربط الأقسام ببعضها", "يتخذ القرارات بنفسه", "تصلك الخلاصة فقط"],
        oldLabel: "10 خطوات يدوية",
        newLabel: "وكيل AI واحد",
      },
      {
        title: "تحليلات الفيديو بالذكاء الاصطناعي",
        desc: "الذكاء الاصطناعي يجعل كاميراتك ذكية — يعدّ الأشخاص، يتعرّف على الوجوه، ويراقب السلامة.",
        tasks: ["كشف الأشخاص وعدّهم", "الحضور عبر بصمة الوجه", "مراقبة الخوذة ولوحات المركبات"],
        oldLabel: "مراقبة يدوية",
        newLabel: "الذكاء الاصطناعي يراقب",
      },
    ],
    chip1: "أتمتة 24/7",
    statVal: "+40%",
    statLabel: "المبيعات",
  },
  uk: {
    header: "Що вміє AI?",
    live: "наживо",
    slides: [
      {
        title: "AI-чатбот",
        desc: "AI сам відповідає на кожне питання клієнта 24/7.",
        tasks: ["Миттєві відповіді на питання", "Надсилання цін і каталогу", "Приймання замовлень"],
        oldLabel: "Відповідь: 2 години",
        newLabel: "1 секунда",
      },
      {
        title: "AI-дзвінки",
        desc: "Voice AI сам відповідає на дзвінки та приймає замовлення.",
        tasks: ["Автовідповідь на дзвінки", "Запис замовлення", "Розшифровка розмови в текст"],
        oldLabel: "30% дзвінків втрачено",
        newLabel: "100% відповідей",
      },
      {
        title: "AI-аналіз продажів",
        desc: "AI вивчає ваші продажі та підказує, що робити.",
        tasks: ["Який товар іде краще", "Рекомендації щодо цін", "Попередження про залишки"],
        oldLabel: "Рішення навмання",
        newLabel: "Рішення з AI-аналізом",
      },
      {
        title: "AI-звіти та прогноз",
        desc: "Звіти збираються самі, прогноз на місяць готовий.",
        tasks: ["Щоденне зведення", "Прогноз продажів", "Виявлення аномалій"],
        oldLabel: "Excel: 3 години",
        newLabel: "1 хвилина",
      },
      {
        title: "AI-документи",
        desc: "AI читає, заповнює та перевіряє документи.",
        tasks: ["Витяг даних із документів", "Заповнення договорів і актів", "Перевірка помилок"],
        oldLabel: "Переписування вручну",
        newLabel: "Автоматично",
      },
      {
        title: "AI-маркетинг",
        desc: "Пости, оголошення та описи AI пише сам.",
        tasks: ["Тексти постів і оголошень", "Описи товарів", "Контент-план"],
        oldLabel: "Контент: 1 день",
        newLabel: "5 хвилин",
      },
      {
        title: "AI Telegram-бот",
        desc: "Бот приймає замовлення й сам заносить їх у систему.",
        tasks: ["Приймання замовлень", "Перевірка оплати", "Статус для клієнта"],
        oldLabel: "Очікування дзвінка",
        newLabel: "Бот 24/7",
      },
      {
        title: "AI-запис і черга",
        desc: "Записом і чергою керує AI — клініка, салон, сервіс.",
        tasks: ["Онлайн-запис", "Розподіл черги", "SMS-нагадування"],
        oldLabel: "Черга: 40 хвилин",
        newLabel: "На 40% швидше",
      },
      {
        title: "AI-аналіз команди",
        desc: "AI стежить за ефективністю команди й робить висновки.",
        tasks: ["Відвідуваність і активність", "Розподіл завдань", "Щотижневе AI-зведення"],
        oldLabel: "Контроль: 1 год/день",
        newLabel: "Само собою",
      },
      {
        title: "AI-агенти",
        desc: "AI-агент сам веде весь процес від початку до кінця.",
        tasks: ["Пов'язує відділи між собою", "Сам ухвалює рішення", "Вам — лише підсумки"],
        oldLabel: "10 ручних операцій",
        newLabel: "1 AI-агент",
      },
      {
        title: "AI-відеоаналітика",
        desc: "AI робить ваші камери розумними — рахує людей, розпізнає обличчя, контролює безпеку.",
        tasks: ["Виявлення та підрахунок людей", "Облік за обличчям", "Контроль каски та автономерів"],
        oldLabel: "Ручний нагляд",
        newLabel: "AI стежить сам",
      },
    ],
    chip1: "24/7 автоматизація",
    statVal: "+40%",
    statLabel: "продажі",
  },
};

// One icon per slide, same order across locales.
const SLIDE_ICONS = [
  MessageSquare,
  Phone,
  ShoppingCart,
  BarChart3,
  FileText,
  Megaphone,
  Send,
  Stethoscope,
  Users,
  Workflow,
  Video,
] as const;
const SLIDE_INTERVAL_MS = 4000;

// IT Park Uzbekistan resident trust chip — localized "resident" word.
const RESIDENT_LABEL: Record<string, string> = {
  uz: "IT Park Uzbekistan rezidenti",
  ru: "Резидент IT Park Uzbekistan",
  en: "IT Park Uzbekistan resident",
  ar: "مقيم في IT Park Uzbekistan",
  uk: "Резидент IT Park Uzbekistan",
};

// Direction chips under the subheadline — the 4 things visitors actually
// search for ("sayt", "bot", "chatbot", "CRM"), each linking to its page.
const DIRECTIONS = [
  { key: "dir_web", href: "/tezcode-custom", icon: Globe },
  { key: "dir_bot", href: "/telegram-bot-biznes", icon: Send },
  { key: "dir_ai", href: "/ai-chatbot", icon: Bot },
  { key: "dir_crm", href: "/crm-integratsiya", icon: Workflow },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const residentLabel = RESIDENT_LABEL[locale] ?? RESIDENT_LABEL.uz;
  const trustParts = t("trust")
    .split("·")
    .map((s) => s.replace(/[✓✔]/g, "").trim())
    .filter(Boolean);

  return (
    <section className="relative pt-32 sm:pt-36 pb-16 px-6 bg-[var(--tc-ink)] overflow-hidden">
      {/* Faint grid backdrop */}
      <div aria-hidden className="tc-grid-bg absolute inset-0" />
      {/* One soft blue blob, top-right */}
      <div
        aria-hidden
        className="absolute -top-40 end-[-12%] w-[36rem] h-[36rem] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(0,64,255,0.06)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* ── LEFT: text ── */}
          <div className="text-center lg:text-start">
            {/* Badge */}
            <m.div
              initial={false}
              animate={fadeUp.visible(0)}
              className="tc-chip mb-7"
            >
              <m.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "linear-gradient(135deg, var(--tc-blue), #7c3aed)" }}
              />
              {t("badge")}
            </m.div>

            {/* Headline — LCP: paints immediately (initial={false}) */}
            <m.h1
              initial={false}
              className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl font-800 tracking-tight sm:leading-[1.05] text-[var(--tc-text-primary)] mb-6 break-words"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("headline")}
            </m.h1>

            {/* Subheadline */}
            <m.p
              initial={false}
              animate={fadeUp.visible(0.15)}
              className="text-lg text-[var(--tc-text-secondary)] max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              {t("subheadline")}
            </m.p>

            {/* Direction chips — "sayt / bot / chatbot / CRM" self-selection */}
            <m.nav
              initial={false}
              animate={fadeUp.visible(0.2)}
              aria-label={t("directions_aria")}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6"
            >
              {DIRECTIONS.map(({ key, href, icon: Icon }) => (
                <Link
                  key={key}
                  href={href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-1)] px-3.5 py-1.5 text-[13px] font-500 text-[var(--tc-text-secondary)] transition-colors hover:border-[var(--tc-blue)] hover:text-[var(--tc-blue-text)]"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0 text-[var(--tc-blue-text)]" strokeWidth={2} />
                  {t(key)}
                </Link>
              ))}
            </m.nav>

            {/* Risk-reversal trust checkmarks */}
            <m.div
              initial={false}
              animate={fadeUp.visible(0.25)}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mb-9"
            >
              {trustParts.map((part) => (
                <span
                  key={part}
                  className="inline-flex items-center gap-1.5 text-sm font-500 text-[var(--tc-text-secondary)]"
                >
                  <Check className="w-4 h-4 shrink-0 text-[var(--tc-success)]" strokeWidth={2.5} />
                  {part}
                </span>
              ))}
            </m.div>

            {/* CTAs */}
            <m.div
              initial={false}
              animate={fadeUp.visible(0.35)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4"
            >
              <m.a
                href="/aloqa"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="tc-btn-primary text-sm"
              >
                {t("cta_primary")}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </m.a>
              <m.a
                href="#products"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="tc-btn-secondary text-sm"
              >
                <LayoutGrid className="w-4 h-4 text-[var(--tc-blue-text)]" />
                {t("cta_secondary")}
              </m.a>
            </m.div>

            {/* IT Park resident badge */}
            <m.a
              href="/biz-haqimizda"
              initial={false}
              animate={fadeUp.visible(0.45)}
              className="mt-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-500 text-[var(--tc-success)] transition-colors"
              style={{
                background: "rgba(5,150,105,0.08)",
                border: "1px solid rgba(5,150,105,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-success)] animate-pulse" />
              {residentLabel}
              <span className="opacity-50">·</span>
              <span className="opacity-80">№6237</span>
            </m.a>
          </div>

          {/* ── RIGHT: business-outcome dashboard mockup ── */}
          <HeroVisual />
        </div>

        <HeroStats t={t} />
      </div>
    </section>
  );
}

// ── Right-side visual: rotating "what we automate" scenarios.
// Recognizable businesses cycle every few seconds, each showing
// the old way → the automated result. ──
function HeroVisual() {
  const locale = useLocale();
  const c = VISUAL_COPY[locale] ?? VISUAL_COPY.uz;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % c.slides.length),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [paused, c.slides.length]);

  const slide = c.slides[active];
  const Icon = SLIDE_ICONS[active] ?? Bot;

  return (
    <m.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      {/* rotating automation showcase card */}
      <div
        className="tc-card rounded-[24px] p-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* header */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-xs font-600 uppercase tracking-[0.14em] text-[var(--tc-text-muted)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.header}
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-600 text-[var(--tc-success)]"
            style={{ background: "rgba(5,150,105,0.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-success)] animate-pulse" />
            {c.live}
          </span>
        </div>

        {/* rotating slide */}
        <div className="min-h-[24rem] sm:min-h-[22rem]">
          <AnimatePresence mode="wait">
            <m.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--tc-blue-dim)] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[var(--tc-blue-text)]" strokeWidth={2} />
                </span>
                <h3
                  className="text-xl sm:text-2xl font-700 text-[var(--tc-text-primary)] leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {slide.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[var(--tc-text-secondary)] leading-relaxed mb-4">
                {slide.desc}
              </p>

              {/* what exactly gets automated */}
              <div className="flex flex-col gap-2 mb-5">
                {slide.tasks.map((task, i) => (
                  <m.div
                    key={task}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.15 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3 rounded-xl bg-[var(--tc-surface-2)] px-3.5 py-2.5"
                  >
                    <span className="w-6 h-6 shrink-0 rounded-lg bg-[var(--tc-blue-dim)] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[var(--tc-blue-text)]" strokeWidth={2.5} />
                    </span>
                    <span className="text-[13px] sm:text-sm font-500 text-[var(--tc-text-primary)] truncate">
                      {task}
                    </span>
                  </m.div>
                ))}
              </div>

              {/* old way → automated result */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-500 line-through decoration-[1.5px]"
                  style={{ background: "rgba(220,38,38,0.07)", color: "#dc2626" }}
                >
                  {slide.oldLabel}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[var(--tc-text-muted)] rtl:rotate-180" />
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-600 text-[var(--tc-success)]"
                  style={{ background: "rgba(5,150,105,0.09)" }}
                >
                  <Check className="w-4 h-4 shrink-0" strokeWidth={2.5} />
                  {slide.newLabel}
                </span>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        {/* slide indicators */}
        <div className="flex items-center gap-2 pt-4 border-t border-[var(--tc-border)]">
          {c.slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={s.title}
              onClick={() => setActive(i)}
              className="flex h-6 items-center justify-center px-1 -my-2"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-7 bg-[var(--tc-blue)]"
                    : "w-1.5 bg-[var(--tc-border-bright)] group-hover:bg-[var(--tc-text-muted)]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* floating chip — top-right */}
      <m.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="tc-card absolute -top-4 -end-3 hidden sm:inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-600 text-[var(--tc-text-primary)]"
      >
        <Bot className="w-3.5 h-3.5 text-[var(--tc-blue-text)]" />
        {c.chip1}
      </m.div>

      {/* floating stat — bottom-left */}
      <m.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="tc-card absolute -bottom-4 -start-3 hidden sm:inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-600 text-[var(--tc-text-primary)]"
      >
        <ArrowUp className="w-3.5 h-3.5 text-[var(--tc-success)]" strokeWidth={2.5} />
        <span className="text-[var(--tc-success)]">{c.statVal}</span>
        {c.statLabel}
      </m.div>
    </m.div>
  );
}

function HeroStats({ t }: { t: ReturnType<typeof useTranslations<"hero">> }) {
  const stats: { value: number; suffix: string; label: string }[] = [
    { value: 50, suffix: "+", label: t("stat_clients") },
    { value: 8, suffix: "", label: t("stat_products") },
    { value: 150, suffix: "+", label: t("stat_projects") },
    { value: 5, suffix: "+", label: t("stat_years") },
  ];

  return (
    <m.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="tc-card rounded-[24px] mt-16 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[var(--tc-border)] overflow-hidden"
    >
      {stats.map((stat, i) => (
        <div key={i} className="p-6 text-center">
          <div style={{ fontFamily: "var(--font-display)" }}>
            <CountUp
              value={stat.value}
              suffix={stat.suffix}
              duration={2.2}
              className="text-4xl font-800 text-[var(--tc-text-primary)] tabular-nums"
            />
          </div>
          <div className="text-xs uppercase tracking-widest text-[var(--tc-text-muted)] mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </m.div>
  );
}
