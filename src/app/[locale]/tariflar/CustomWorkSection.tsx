"use client";

import { useLocale } from "next-intl";
import { ArrowUpRight, ShieldCheck, Wallet } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Link } from "@/i18n/routing";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

// Prices below are the published "from" prices on each service page —
// keep them in sync with the service pages, never invent new figures here.
const SERVICE_PATHS = [
  "/telegram-bot-biznes",
  "/ai-chatbot",
  "/ai-agent",
  "/biznes-avtomatlashtirish",
  "/crm-integratsiya",
  "/ai-video-analitika",
  "/tezcode-custom",
] as const;

type Item = {
  name: string;
  desc: string;
  price: string;
};

type Copy = {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  items: [Item, Item, Item, Item, Item, Item, Item];
  noteUpfront: string;
  noteSource: string;
  linkLabel: string;
};

const COPY: Record<Lang, Copy> = {
  uz: {
    badge: "Buyurtma ishlar",
    title: "Buyurtma ishlar —",
    titleAccent: "bir martalik loyihalar",
    subtitle:
      "Bot, chatbot, integratsiya yoki MVP buyurtma qilmoqchimisiz? Boshlang'ich narxlar quyida — aniq summa vazifangizga qarab yozma taklifda beriladi.",
    items: [
      { name: "Telegram bot", desc: "Buyurtma qabul qilish, Click/Payme to'lov, Mini App do'kon", price: "$279 dan" },
      { name: "AI chatbot", desc: "Telegram, Instagram va saytda 24/7 mijoz xizmati", price: "$339 dan" },
      { name: "AI agent", desc: "Javob beribgina qolmay, ishni o'zi bajaradigan raqamli xodim", price: "$400 dan" },
      { name: "Jarayon avtomatlashtirish", desc: "Savdo, ombor, hisobot — eng ko'p vaqt oladigan jarayonlar", price: "$400 dan" },
      { name: "CRM / 1C integratsiya", desc: "amoCRM, Bitrix24, 1C ni barcha kanallar bilan ulash", price: "$700 dan" },
      { name: "AI video analitika", desc: "Mavjud IP kameralarni aqlli qilish — bir martalik ulash", price: "$990 dan" },
      { name: "MVP / buyurtma dastur", desc: "Noldan qurilgan mahsulot: ERP, CRM, marketplace — 2-4 haftada", price: "$1000 dan" },
    ],
    noteUpfront: "To'lov: 30% oldindan, qolgani bosqichma-bosqich",
    noteSource: "Source code 100% sizniki",
    linkLabel: "Batafsil",
  },
  ru: {
    badge: "Работы на заказ",
    title: "Работы на заказ —",
    titleAccent: "разовые проекты",
    subtitle:
      "Хотите заказать бота, чат-бота, интеграцию или MVP? Стартовые цены ниже — точную сумму дадим письменным предложением под вашу задачу.",
    items: [
      { name: "Telegram-бот", desc: "Приём заказов, оплата Click/Payme, магазин Mini App", price: "от $279" },
      { name: "ИИ-чат-бот", desc: "Поддержка клиентов 24/7 в Telegram, Instagram и на сайте", price: "от $339" },
      { name: "ИИ-агент", desc: "Цифровой сотрудник, который не просто отвечает, а сам выполняет работу", price: "от $400" },
      { name: "Автоматизация процессов", desc: "Продажи, склад, отчёты — самые трудоёмкие процессы", price: "от $400" },
      { name: "Интеграция CRM / 1C", desc: "Подключение amoCRM, Bitrix24, 1C ко всем каналам", price: "от $700" },
      { name: "ИИ-видеоаналитика", desc: "Делаем существующие IP-камеры умными — разовое подключение", price: "от $990" },
      { name: "MVP / заказной продукт", desc: "Продукт с нуля: ERP, CRM, marketplace — за 2-4 недели", price: "от $1000" },
    ],
    noteUpfront: "Оплата: 30% предоплата, остальное поэтапно",
    noteSource: "Исходный код 100% ваш",
    linkLabel: "Подробнее",
  },
  en: {
    badge: "Custom work",
    title: "Custom work —",
    titleAccent: "one-time projects",
    subtitle:
      "Want to order a bot, chatbot, integration or an MVP? Starting prices are below — the exact quote comes as a written proposal for your task.",
    items: [
      { name: "Telegram bot", desc: "Order taking, Click/Payme payments, Mini App store", price: "from $279" },
      { name: "AI chatbot", desc: "24/7 customer support on Telegram, Instagram and your website", price: "from $339" },
      { name: "AI agent", desc: "A digital employee that doesn't just reply but does the work", price: "from $400" },
      { name: "Process automation", desc: "Sales, warehouse, reporting — your most time-consuming processes", price: "from $400" },
      { name: "CRM / 1C integration", desc: "Connecting amoCRM, Bitrix24 and 1C to all your channels", price: "from $700" },
      { name: "AI video analytics", desc: "Make existing IP cameras smart — one-time setup", price: "from $990" },
      { name: "MVP / custom software", desc: "A product built from scratch: ERP, CRM, marketplace — in 2-4 weeks", price: "from $1000" },
    ],
    noteUpfront: "Payment: 30% upfront, the rest in stages",
    noteSource: "Source code is 100% yours",
    linkLabel: "Details",
  },
  ar: {
    badge: "أعمال حسب الطلب",
    title: "أعمال حسب الطلب —",
    titleAccent: "مشاريع لمرة واحدة",
    subtitle:
      "تريد طلب بوت أو شات بوت أو تكامل أو MVP؟ الأسعار المبدئية أدناه — السعر الدقيق يأتي كعرض مكتوب حسب مهمتك.",
    items: [
      { name: "بوت تيليجرام", desc: "استقبال الطلبات، دفع Click/Payme، متجر Mini App", price: "من $279" },
      { name: "شات بوت AI", desc: "دعم عملاء 24/7 على تيليجرام وإنستغرام وموقعك", price: "من $339" },
      { name: "وكيل AI", desc: "موظف رقمي لا يكتفي بالرد بل ينفّذ العمل بنفسه", price: "من $400" },
      { name: "أتمتة العمليات", desc: "المبيعات والمخزون والتقارير — أكثر العمليات استهلاكًا للوقت", price: "من $400" },
      { name: "تكامل CRM / 1C", desc: "ربط amoCRM وBitrix24 و1C بجميع القنوات", price: "من $700" },
      { name: "تحليلات الفيديو بالAI", desc: "نجعل كاميرات IP الحالية ذكية — إعداد لمرة واحدة", price: "من $990" },
      { name: "MVP / برمجيات مخصصة", desc: "منتج من الصفر: ERP، CRM، سوق إلكتروني — خلال 2-4 أسابيع", price: "من $1000" },
    ],
    noteUpfront: "الدفع: 30% مقدمًا والباقي على مراحل",
    noteSource: "الكود المصدري ملكك 100%",
    linkLabel: "التفاصيل",
  },
  uk: {
    badge: "Роботи на замовлення",
    title: "Роботи на замовлення —",
    titleAccent: "разові проєкти",
    subtitle:
      "Хочете замовити бота, чат-бота, інтеграцію чи MVP? Стартові ціни нижче — точну суму дамо письмовою пропозицією під ваше завдання.",
    items: [
      { name: "Telegram-бот", desc: "Прийом замовлень, оплата Click/Payme, магазин Mini App", price: "від $279" },
      { name: "AI чат-бот", desc: "Підтримка клієнтів 24/7 у Telegram, Instagram і на сайті", price: "від $339" },
      { name: "AI-агент", desc: "Цифровий співробітник, який не просто відповідає, а сам виконує роботу", price: "від $400" },
      { name: "Автоматизація процесів", desc: "Продажі, склад, звіти — найбільш трудомісткі процеси", price: "від $400" },
      { name: "Інтеграція CRM / 1C", desc: "Підключення amoCRM, Bitrix24 і 1C до всіх каналів", price: "від $700" },
      { name: "AI-відеоаналітика", desc: "Робимо наявні IP-камери розумними — разове підключення", price: "від $990" },
      { name: "MVP / замовний продукт", desc: "Продукт з нуля: ERP, CRM, marketplace — за 2-4 тижні", price: "від $1000" },
    ],
    noteUpfront: "Оплата: 30% передоплата, решта поетапно",
    noteSource: "Вихідний код 100% ваш",
    linkLabel: "Детальніше",
  },
};

export function CustomWorkSection() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

  return (
    <section
      id="buyurtma"
      className="relative py-20 sm:py-28 px-6 bg-[var(--tc-surface-0)] border-t border-[var(--tc-border)]"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="mb-5">
            <span className="tc-chip">{t.badge}</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-[var(--tc-text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{t.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-muted)] text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </Reveal>

        <RevealStagger className="flex flex-col gap-3" stagger={0.06}>
          {t.items.map((item, i) => (
            <RevealItem key={SERVICE_PATHS[i]}>
              <Link
                href={SERVICE_PATHS[i]}
                className="tc-card tc-card-hover group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-6"
              >
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-lg font-700 text-[var(--tc-text-primary)] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--tc-text-secondary)]">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                  <span
                    className="text-xl font-800 text-[var(--tc-text-primary)] whitespace-nowrap"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.price}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-600 text-[var(--tc-blue-text)]">
                    {t.linkLabel}
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-sm text-[var(--tc-text-secondary)]">
          <span className="inline-flex items-center gap-2">
            <Wallet className="w-4 h-4 text-[var(--tc-blue-text)]" aria-hidden />
            {t.noteUpfront}
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--tc-success)]" aria-hidden />
            {t.noteSource}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
