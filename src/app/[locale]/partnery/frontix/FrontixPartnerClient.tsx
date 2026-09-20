"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type Stat = { value: string; label: string };
type Offering = { title: string; desc: string };

type CopyShape = {
  back: string;
  badge: string;
  name: string;
  role: string;
  intro: string;
  statsTitle: string;
  statsNote: string;
  stats: Stat[];
  aboutTitle: string;
  aboutParas: string[];
  offeringsTitle: string;
  offerings: Offering[];
  partnershipTitle: string;
  partnershipParas: string[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
};

// Every figure below is FRONTIX's own published number (frontix.uz), labelled as
// theirs rather than presented as a joint result.
const COPY: Record<Lang, CopyShape> = {
  uz: {
    back: "← Bosh sahifa",
    badge: "Hamkor",
    name: "FRONTIX",
    role: "Veb va raqamli mahsulotlar bo'yicha hamkor",
    intro:
      "FRONTIX — Toshkentdagi IT kompaniya: sayt, QR menyu, Telegram bot va onlayn buyurtma tizimlarini quradi. Tezcode esa ustiga AI qatlamini qo'shadi — mijoz bitta hamkorlikdan ham veb-mahsulot, ham avtomatlashtirish oladi.",
    statsTitle: "FRONTIX raqamlarda",
    statsNote: "Ma'lumot FRONTIX o'z saytida e'lon qilgan ko'rsatkichlardan olingan.",
    stats: [
      { value: "30+", label: "mamnun mijoz" },
      { value: "12+", label: "jamoa a'zosi" },
      { value: "4+", label: "yillik tajriba" },
      { value: "2021", label: "tashkil etilgan yil" },
    ],
    aboutTitle: "FRONTIX haqida",
    aboutParas: [
      "FRONTIX — 2021-yildan beri Toshkentda ishlaydigan IT kompaniya. Bizneslar uchun konversiyaga yo'naltirilgan korporativ saytlar, QR menyular, Telegram botlar va onlayn buyurtma tizimlarini ishlab chiqadi.",
      "Jamoa mahsulotni ishga tushirish bilan cheklanmaydi: ichki jarayonlarni avtomatlashtirish va alohida buyurtma asosidagi dasturiy yechimlar ham ularning yo'nalishida.",
    ],
    offeringsTitle: "Nimalarni quradi",
    offerings: [
      { title: "Korporativ saytlar", desc: "Tez yuklanadigan, konversiyaga yo'naltirilgan zamonaviy saytlar." },
      { title: "QR menyu", desc: "Restoran va kafelar uchun raqamli menyu — o'zgarish bir zumda ko'rinadi." },
      { title: "Telegram botlar", desc: "Buyurtma qabul qilish va mijoz bilan muloqotni avtomatlashtirish." },
      { title: "Onlayn buyurtma tizimlari", desc: "Buyurtma va yetkazib berishni boshqaradigan to'liq platformalar." },
    ],
    partnershipTitle: "Hamkorlik qanday ishlaydi",
    partnershipParas: [
      "Tezcode — AI Software Factory: biz AI-avtomatlashtirish, chatbot, CRM integratsiya va video tahlil yechimlarini quramiz. FRONTIX esa veb va raqamli mahsulot tarafini oladi.",
      "Ish har bir tomonning kuchli yo'nalishiga qarab taqsimlanadi: sayt yoki buyurtma tizimi kerak bo'lsa — FRONTIX, AI qatlam va integratsiya kerak bo'lsa — Tezcode. Hamkorlik ikki tomonlama: FRONTIX ham o'z saytida Tezcode'ni hamkor sifatida ko'rsatadi.",
    ],
    ctaTitle: "Loyihangiz uchun mos jamoani tanlaymizmi?",
    ctaText:
      "Bizga yozing — vazifangizni muhokama qilib, uni kim va qanday bajarishini aniq aytamiz.",
    ctaBtn: "Bog'lanish",
  },
  ru: {
    back: "← На главную",
    badge: "Партнёр",
    name: "FRONTIX",
    role: "Партнёр по веб- и цифровым продуктам",
    intro:
      "FRONTIX — IT-компания в Ташкенте: делает сайты, QR-меню, Telegram-ботов и системы онлайн-заказов. Tezcode добавляет сверху слой ИИ — клиент получает от одного партнёрства и веб-продукт, и автоматизацию.",
    statsTitle: "FRONTIX в цифрах",
    statsNote: "Показатели взяты из данных, опубликованных FRONTIX на своём сайте.",
    stats: [
      { value: "30+", label: "довольных клиентов" },
      { value: "12+", label: "человек в команде" },
      { value: "4+", label: "года опыта" },
      { value: "2021", label: "год основания" },
    ],
    aboutTitle: "О FRONTIX",
    aboutParas: [
      "FRONTIX — IT-компания, работающая в Ташкенте с 2021 года. Разрабатывает для бизнеса корпоративные сайты, ориентированные на конверсию, QR-меню, Telegram-ботов и системы онлайн-заказов.",
      "Команда не ограничивается запуском продукта: автоматизация внутренних процессов и заказная разработка тоже в их профиле.",
    ],
    offeringsTitle: "Что они делают",
    offerings: [
      { title: "Корпоративные сайты", desc: "Быстрые современные сайты, ориентированные на конверсию." },
      { title: "QR-меню", desc: "Цифровое меню для ресторанов и кафе — изменения видны сразу." },
      { title: "Telegram-боты", desc: "Автоматизация приёма заказов и общения с клиентами." },
      { title: "Системы онлайн-заказов", desc: "Полноценные платформы для заказов и доставки." },
    ],
    partnershipTitle: "Как устроено партнёрство",
    partnershipParas: [
      "Tezcode — AI Software Factory: мы строим ИИ-автоматизацию, чат-ботов, CRM-интеграции и видеоаналитику. FRONTIX берёт на себя веб- и цифровую часть продукта.",
      "Работа распределяется по сильным сторонам каждой стороны: нужен сайт или система заказов — FRONTIX, нужен слой ИИ и интеграции — Tezcode. Партнёрство взаимное: FRONTIX также указывает Tezcode партнёром у себя на сайте.",
    ],
    ctaTitle: "Подобрать команду под ваш проект?",
    ctaText:
      "Напишите нам — обсудим задачу и честно скажем, кто и как её закроет.",
    ctaBtn: "Связаться",
  },
  en: {
    back: "← Home",
    badge: "Partner",
    name: "FRONTIX",
    role: "Web and digital product partner",
    intro:
      "FRONTIX is an IT company in Tashkent building websites, QR menus, Telegram bots and online ordering systems. Tezcode adds the AI layer on top, so a client gets both the web product and the automation from one partnership.",
    statsTitle: "FRONTIX by the numbers",
    statsNote: "Figures as published by FRONTIX on their own site.",
    stats: [
      { value: "30+", label: "satisfied clients" },
      { value: "12+", label: "people on the team" },
      { value: "4+", label: "years of experience" },
      { value: "2021", label: "founded" },
    ],
    aboutTitle: "About FRONTIX",
    aboutParas: [
      "FRONTIX has been working out of Tashkent since 2021, building conversion-focused corporate websites, QR menus, Telegram bots and online ordering systems for businesses.",
      "The team does not stop at launching a product: automating internal processes and custom software are part of their scope too.",
    ],
    offeringsTitle: "What they build",
    offerings: [
      { title: "Corporate websites", desc: "Fast, modern sites built around conversion." },
      { title: "QR menus", desc: "Digital menus for restaurants and cafes — edits show up instantly." },
      { title: "Telegram bots", desc: "Automated order intake and customer communication." },
      { title: "Online ordering systems", desc: "Full platforms for orders and delivery." },
    ],
    partnershipTitle: "How the partnership works",
    partnershipParas: [
      "Tezcode is an AI Software Factory: we build AI automation, chatbots, CRM integrations and video analytics. FRONTIX takes the web and digital product side.",
      "Work is split by each side's strength: a website or ordering system goes to FRONTIX, the AI layer and integrations go to Tezcode. The partnership is mutual — FRONTIX lists Tezcode as a partner on their site too.",
    ],
    ctaTitle: "Want the right team for your project?",
    ctaText:
      "Get in touch — we'll go through the task and tell you plainly who should handle it and how.",
    ctaBtn: "Contact us",
  },
  ar: {
    back: "← الرئيسية",
    badge: "شريك",
    name: "FRONTIX",
    role: "شريك في منتجات الويب والمنتجات الرقمية",
    intro:
      "FRONTIX شركة تقنية في طشقند تبني المواقع وقوائم QR وبوتات تيليغرام وأنظمة الطلب عبر الإنترنت. وتضيف Tezcode طبقة الذكاء الاصطناعي فوقها، فيحصل العميل على منتج الويب والأتمتة من شراكة واحدة.",
    statsTitle: "FRONTIX بالأرقام",
    statsNote: "الأرقام كما نشرتها FRONTIX على موقعها.",
    stats: [
      { value: "30+", label: "عميل راضٍ" },
      { value: "12+", label: "فردًا في الفريق" },
      { value: "4+", label: "سنوات خبرة" },
      { value: "2021", label: "سنة التأسيس" },
    ],
    aboutTitle: "عن FRONTIX",
    aboutParas: [
      "تعمل FRONTIX من طشقند منذ عام 2021، وتبني للشركات مواقع مؤسسية موجّهة نحو التحويل وقوائم QR وبوتات تيليغرام وأنظمة الطلب عبر الإنترنت.",
      "ولا يتوقف الفريق عند إطلاق المنتج: أتمتة العمليات الداخلية والبرمجيات حسب الطلب ضمن نطاق عملهم أيضًا.",
    ],
    offeringsTitle: "ما الذي يبنونه",
    offerings: [
      { title: "مواقع مؤسسية", desc: "مواقع سريعة وحديثة مبنية حول التحويل." },
      { title: "قوائم QR", desc: "قوائم رقمية للمطاعم والمقاهي — التعديلات تظهر فورًا." },
      { title: "بوتات تيليغرام", desc: "أتمتة استقبال الطلبات والتواصل مع العملاء." },
      { title: "أنظمة الطلب عبر الإنترنت", desc: "منصات كاملة للطلبات والتوصيل." },
    ],
    partnershipTitle: "كيف تعمل الشراكة",
    partnershipParas: [
      "Tezcode مصنع برمجيات للذكاء الاصطناعي: نبني الأتمتة بالذكاء الاصطناعي والبوتات وتكاملات CRM وتحليل الفيديو. وتتولى FRONTIX جانب الويب والمنتج الرقمي.",
      "يُقسَّم العمل وفق نقاط قوة كل طرف: الموقع أو نظام الطلبات إلى FRONTIX، وطبقة الذكاء الاصطناعي والتكاملات إلى Tezcode. والشراكة متبادلة — تدرج FRONTIX أيضًا Tezcode كشريك على موقعها.",
    ],
    ctaTitle: "هل تريد الفريق المناسب لمشروعك؟",
    ctaText:
      "راسلنا — سنراجع مهمتك ونقول لك بوضوح من ينفّذها وكيف.",
    ctaBtn: "تواصل معنا",
  },
  uk: {
    back: "← На головну",
    badge: "Партнер",
    name: "FRONTIX",
    role: "Партнер з вебу та цифрових продуктів",
    intro:
      "FRONTIX — IT-компанія в Ташкенті: створює сайти, QR-меню, Telegram-ботів і системи онлайн-замовлень. Tezcode додає згори шар AI — клієнт отримує від одного партнерства і вебпродукт, і автоматизацію.",
    statsTitle: "FRONTIX у цифрах",
    statsNote: "Показники взято з даних, опублікованих FRONTIX на власному сайті.",
    stats: [
      { value: "30+", label: "задоволених клієнтів" },
      { value: "12+", label: "людей у команді" },
      { value: "4+", label: "роки досвіду" },
      { value: "2021", label: "рік заснування" },
    ],
    aboutTitle: "Про FRONTIX",
    aboutParas: [
      "FRONTIX працює в Ташкенті з 2021 року. Створює для бізнесу корпоративні сайти, орієнтовані на конверсію, QR-меню, Telegram-ботів і системи онлайн-замовлень.",
      "Команда не обмежується запуском продукту: автоматизація внутрішніх процесів і замовна розробка теж у їхньому профілі.",
    ],
    offeringsTitle: "Що вони роблять",
    offerings: [
      { title: "Корпоративні сайти", desc: "Швидкі сучасні сайти, орієнтовані на конверсію." },
      { title: "QR-меню", desc: "Цифрове меню для ресторанів і кафе — зміни видно одразу." },
      { title: "Telegram-боти", desc: "Автоматизація прийому замовлень і спілкування з клієнтами." },
      { title: "Системи онлайн-замовлень", desc: "Повноцінні платформи для замовлень і доставки." },
    ],
    partnershipTitle: "Як влаштоване партнерство",
    partnershipParas: [
      "Tezcode — AI Software Factory: ми будуємо AI-автоматизацію, чат-ботів, CRM-інтеграції та відеоаналітику. FRONTIX бере на себе веб- і цифрову частину продукту.",
      "Робота розподіляється за сильними сторонами кожної сторони: потрібен сайт чи система замовлень — FRONTIX, потрібен шар AI та інтеграції — Tezcode. Партнерство взаємне: FRONTIX теж вказує Tezcode партнером у себе на сайті.",
    ],
    ctaTitle: "Підібрати команду під ваш проєкт?",
    ctaText:
      "Напишіть нам — обговоримо завдання і чесно скажемо, хто і як його закриє.",
    ctaBtn: "Зв'язатися",
  },
};

export function FrontixPartnerClient() {
  const locale = useLocale() as Lang;
  const c = COPY[locale] ?? COPY.uz;

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] pt-28 pb-24"
    >
      {/* Faint grid background */}
      <div aria-hidden className="tc-grid-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Hero */}
        <Reveal className="mt-8 flex flex-col items-center text-center" delay={0.05}>
          <span className="tc-chip mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--tc-blue)]" />
            {c.badge}
          </span>

          <div className="tc-card flex h-28 w-28 items-center justify-center rounded-[var(--tc-radius-xl)] p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/partners/frontix-logo.svg"
              alt="FRONTIX logo"
              className="h-full w-full object-contain"
            />
          </div>

          <h1
            className="mt-6 text-3xl font-700 text-[var(--tc-text-primary)] md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.name}
          </h1>
          <p className="mt-2 text-base text-[var(--tc-blue-text)]">{c.role}</p>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--tc-text-secondary)]">
            {c.intro}
          </p>
        </Reveal>

        {/* Stats */}
        <section className="mt-16">
          <h2 className="mb-6 text-center text-xs font-600 uppercase tracking-widest text-[var(--tc-text-muted)]">
            {c.statsTitle}
          </h2>
          <RevealStagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {c.stats.map((s, i) => (
              <RevealItem key={i} className="tc-card p-6 text-center">
                <div
                  className="text-3xl font-800 text-[var(--tc-text-primary)] md:text-4xl tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-xs leading-snug text-[var(--tc-text-muted)]">
                  {s.label}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
          <p className="mt-4 text-center text-xs text-[var(--tc-text-muted)]">
            {c.statsNote}
          </p>
        </section>

        {/* About */}
        <section className="mt-16">
          <Reveal>
            <h2
              className="mb-4 text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.aboutTitle}
            </h2>
            <div className="space-y-4">
              {c.aboutParas.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-[var(--tc-text-secondary)]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Offerings */}
        <section className="mt-16">
          <h2
            className="mb-6 text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.offeringsTitle}
          </h2>
          <RevealStagger className="grid gap-4 md:grid-cols-2">
            {c.offerings.map((o, i) => (
              <RevealItem key={i} className="tc-card tc-card-hover p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[var(--tc-radius-sm)] bg-[var(--tc-blue-dim)] text-sm font-700 text-[var(--tc-blue-text)]">
                    {i + 1}
                  </span>
                  <h3 className="font-600 text-[var(--tc-text-primary)]">{o.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[var(--tc-text-muted)]">
                  {o.desc}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </section>

        {/* Partnership */}
        <section className="mt-16">
          <Reveal>
            <h2
              className="mb-4 text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.partnershipTitle}
            </h2>
            <div className="space-y-4">
              {c.partnershipParas.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-[var(--tc-text-secondary)]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal className="mt-20">
          <div className="tc-navy-section relative overflow-hidden rounded-[var(--tc-radius-xl)] p-10 text-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(80% 100% at 50% 0%, var(--tc-blue-dim), transparent 70%)",
              }}
            />
            <h2
              className="relative text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--tc-text-secondary)]">
              {c.ctaText}
            </p>
            <Link href="/aloqa" className="tc-btn-primary relative mt-6 text-sm">
              {c.ctaBtn}
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
