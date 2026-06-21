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

const COPY: Record<Lang, CopyShape> = {
  uz: {
    back: "← Bosh sahifa",
    badge: "Rasmiy hamkor",
    name: "AI Solution",
    role: "tezcode rasmiy joriy etish (integration) hamkori",
    intro:
      "AI Solution — tezcode AI-mahsulotlarini O'zbekiston bizneslariga kalit topshiriq joriy qiladigan rasmiy hamkorimiz. tezcode mahsulotni ishlab chiqadi, AI Solution esa uni mijozning real biznes jarayonlariga ulaydi va qo'llab-quvvatlaydi.",
    statsTitle: "Raqamlarda",
    stats: [
      { value: "120+", label: "joriy qilingan biznes" },
      { value: "9", label: "soha (retail, klinika, logistika...)" },
      { value: "40+", label: "soat/hafta tejov" },
      { value: "30%", label: "operatsion xarajat kamayishi" },
    ],
    aboutTitle: "AI Solution haqida",
    aboutParas: [
      "AI Solution — O'zbekiston va Markaziy Osiyo bo'ylab bizneslarni AI bilan avtomatlashtiruvchi kompaniya. Ovozli AI-agentlar, chatbotlar va analitika orqali kompaniyalarga vaqt va xarajatni tejashga yordam beradi.",
      "Ular tajribali integrator sifatida mahsulotni nafaqat ulaydi, balki jamoani o'qitadi, jarayonlarni sozlaydi va rus hamda o'zbek tillarida qo'llab-quvvatlaydi.",
    ],
    offeringsTitle: "Nimalarni joriy qiladi",
    offerings: [
      { title: "Ovozli AI-agentlar", desc: "Qo'ng'iroqlarni qabul qiladi, maslahat beradi va mijozlarni jonli operatorsiz yozib oladi." },
      { title: "AI chatbotlar", desc: "Telegram, Instagram va WhatsApp'da 24/7 mijozlar bilan ishlaydi." },
      { title: "tezcode mahsulotlari", desc: "AI Office, RAOS va boshqa tezcode yechimlarini kalit topshiriq sozlaydi." },
      { title: "Analitika va integratsiya", desc: "CRM, to'lov va biznes tizimlarini bir joyga bog'laydi." },
    ],
    partnershipTitle: "Hamkorlik qanday ishlaydi",
    partnershipParas: [
      "tezcode — AI Software Factory: biz AI-mahsulotlarni ishlab chiqamiz, sinaymiz va rivojlantiramiz. AI Solution — bu mahsulotlarni mijozning biznesiga joriy qiluvchi tajribali integrator.",
      "Natijada mijoz ikki tomonlama foyda oladi: tekshirilgan, ishonchli tezcode mahsuloti + uni to'g'ri sozlab, qo'llab-quvvatlovchi mahalliy jamoa. Bu — tez ishga tushish va uzoq muddatli barqaror natija.",
    ],
    ctaTitle: "tezcode mahsulotini biznesingizga joriy qilmoqchimisiz?",
    ctaText:
      "Bizga yozing — loyihangizni muhokama qilamiz va sizning biznesingiz uchun eng mos yechimni tanlaymiz.",
    ctaBtn: "Bog'lanish",
  },
  ru: {
    back: "← На главную",
    badge: "Официальный партнёр",
    name: "AI Solution",
    role: "Официальный партнёр tezcode по внедрению (интеграции)",
    intro:
      "AI Solution — наш официальный партнёр, который внедряет AI-продукты tezcode в бизнес Узбекистана под ключ. tezcode разрабатывает продукт, а AI Solution интегрирует его в реальные бизнес-процессы клиента и сопровождает.",
    statsTitle: "В цифрах",
    stats: [
      { value: "120+", label: "внедрений в бизнесе" },
      { value: "9", label: "отраслей (ретейл, клиники, логистика...)" },
      { value: "40+", label: "часов/неделю экономии" },
      { value: "30%", label: "снижение операционных затрат" },
    ],
    aboutTitle: "Об AI Solution",
    aboutParas: [
      "AI Solution — компания, автоматизирующая бизнес с помощью AI по всему Узбекистану и Центральной Азии. Голосовые AI-агенты, чат-боты и аналитика помогают компаниям экономить время и затраты.",
      "Как опытный интегратор, они не просто подключают продукт, а обучают команду, настраивают процессы и оказывают поддержку на русском и узбекском языках.",
    ],
    offeringsTitle: "Что внедряют",
    offerings: [
      { title: "Голосовые AI-агенты", desc: "Принимают звонки, консультируют и фиксируют клиентов без живого оператора." },
      { title: "AI чат-боты", desc: "Работают с клиентами 24/7 в Telegram, Instagram и WhatsApp." },
      { title: "Продукты tezcode", desc: "Внедряют AI Office, RAOS и другие решения tezcode под ключ." },
      { title: "Аналитика и интеграции", desc: "Связывают CRM, платежи и бизнес-системы в единый контур." },
    ],
    partnershipTitle: "Как устроено партнёрство",
    partnershipParas: [
      "tezcode — это AI Software Factory: мы разрабатываем, тестируем и развиваем AI-продукты. AI Solution — опытный интегратор, который внедряет эти продукты в бизнес клиента.",
      "В итоге клиент получает двойную выгоду: проверенный, надёжный продукт tezcode + локальную команду, которая правильно его настроит и будет сопровождать. Это быстрый запуск и устойчивый результат.",
    ],
    ctaTitle: "Хотите внедрить продукт tezcode в свой бизнес?",
    ctaText:
      "Напишите нам — обсудим ваш проект и подберём оптимальное решение для вашего бизнеса.",
    ctaBtn: "Связаться",
  },
  en: {
    back: "← Home",
    badge: "Official partner",
    name: "AI Solution",
    role: "Official tezcode implementation (integration) partner",
    intro:
      "AI Solution is our official partner that implements tezcode's AI products for businesses across Uzbekistan, end-to-end. tezcode builds the product, and AI Solution integrates it into the client's real business processes and provides ongoing support.",
    statsTitle: "By the numbers",
    stats: [
      { value: "120+", label: "businesses implemented" },
      { value: "9", label: "industries (retail, clinics, logistics...)" },
      { value: "40+", label: "hours/week saved" },
      { value: "30%", label: "operational cost reduction" },
    ],
    aboutTitle: "About AI Solution",
    aboutParas: [
      "AI Solution is a company automating businesses with AI across Uzbekistan and Central Asia. Through voice AI agents, chatbots and analytics, they help companies save time and cut costs.",
      "As an experienced integrator, they don't just connect a product — they train the team, configure the processes and provide support in Russian and Uzbek.",
    ],
    offeringsTitle: "What they implement",
    offerings: [
      { title: "Voice AI agents", desc: "Answer calls, advise and capture customers without a live operator." },
      { title: "AI chatbots", desc: "Work with customers 24/7 on Telegram, Instagram and WhatsApp." },
      { title: "tezcode products", desc: "Deploy AI Office, RAOS and other tezcode solutions end-to-end." },
      { title: "Analytics & integrations", desc: "Connect CRM, payments and business systems into one loop." },
    ],
    partnershipTitle: "How the partnership works",
    partnershipParas: [
      "tezcode is an AI Software Factory: we build, test and evolve AI products. AI Solution is the experienced integrator that brings those products into the client's business.",
      "The client gets a double benefit: a proven, reliable tezcode product + a local team that configures and supports it correctly. That means a fast launch and a durable result.",
    ],
    ctaTitle: "Want to bring a tezcode product into your business?",
    ctaText:
      "Get in touch — we'll discuss your project and pick the best solution for your business.",
    ctaBtn: "Contact us",
  },
  ar: {
    back: "← الرئيسية",
    badge: "شريك رسمي",
    name: "AI Solution",
    role: "شريك التنفيذ (التكامل) الرسمي لـ tezcode",
    intro:
      "AI Solution هو شريكنا الرسمي الذي ينفّذ منتجات tezcode الذكية للأعمال في أوزبكستان بشكل كامل. تطوّر tezcode المنتج، وتقوم AI Solution بدمجه في العمليات الفعلية للعميل وتوفير الدعم المستمر.",
    statsTitle: "بالأرقام",
    stats: [
      { value: "120+", label: "عملاً تم تنفيذه" },
      { value: "9", label: "قطاعات (تجزئة، عيادات، لوجستيات...)" },
      { value: "40+", label: "ساعة/أسبوع توفير" },
      { value: "30%", label: "خفض التكاليف التشغيلية" },
    ],
    aboutTitle: "حول AI Solution",
    aboutParas: [
      "AI Solution شركة تعمل على أتمتة الأعمال بالذكاء الاصطناعي في جميع أنحاء أوزبكستان وآسيا الوسطى. عبر وكلاء الصوت الذكيين وروبوتات المحادثة والتحليلات تساعد الشركات على توفير الوقت والتكاليف.",
      "بوصفها مُكاملاً ذا خبرة، لا تكتفي بربط المنتج، بل تدرّب الفريق وتضبط العمليات وتقدّم الدعم بالروسية والأوزبكية.",
    ],
    offeringsTitle: "ماذا ينفّذون",
    offerings: [
      { title: "وكلاء صوتيون بالذكاء الاصطناعي", desc: "يردّون على المكالمات ويقدّمون المشورة ويسجّلون العملاء دون مشغّل بشري." },
      { title: "روبوتات محادثة ذكية", desc: "تعمل مع العملاء على مدار الساعة عبر Telegram وInstagram وWhatsApp." },
      { title: "منتجات tezcode", desc: "تنفيذ AI Office وRAOS وحلول tezcode الأخرى بشكل كامل." },
      { title: "التحليلات والتكاملات", desc: "تربط CRM والمدفوعات وأنظمة الأعمال في حلقة واحدة." },
    ],
    partnershipTitle: "كيف تعمل الشراكة",
    partnershipParas: [
      "tezcode هو مصنع برمجيات الذكاء الاصطناعي: نبني المنتجات ونختبرها ونطوّرها. AI Solution هو المُكامل ذو الخبرة الذي يُدخل هذه المنتجات إلى أعمال العميل.",
      "يحصل العميل على فائدة مزدوجة: منتج tezcode موثوق ومُجرّب + فريق محلي يضبطه ويدعمه بشكل صحيح. أي إطلاق سريع ونتيجة مستدامة.",
    ],
    ctaTitle: "هل تريد إدخال منتج tezcode إلى عملك؟",
    ctaText: "تواصل معنا — سنناقش مشروعك ونختار الحل الأمثل لعملك.",
    ctaBtn: "تواصل معنا",
  },
  uk: {
    back: "← На головну",
    badge: "Офіційний партнер",
    name: "AI Solution",
    role: "Офіційний партнер tezcode із впровадження (інтеграції)",
    intro:
      "AI Solution — наш офіційний партнер, який впроваджує AI-продукти tezcode у бізнес Узбекистану під ключ. tezcode розробляє продукт, а AI Solution інтегрує його в реальні бізнес-процеси клієнта та супроводжує.",
    statsTitle: "У цифрах",
    stats: [
      { value: "120+", label: "впроваджень у бізнесі" },
      { value: "9", label: "галузей (ретейл, клініки, логістика...)" },
      { value: "40+", label: "годин/тиждень економії" },
      { value: "30%", label: "зниження операційних витрат" },
    ],
    aboutTitle: "Про AI Solution",
    aboutParas: [
      "AI Solution — компанія, що автоматизує бізнес за допомогою AI по всьому Узбекистану та Центральній Азії. Голосові AI-агенти, чат-боти й аналітика допомагають компаніям економити час і витрати.",
      "Як досвідчений інтегратор, вони не просто підключають продукт, а навчають команду, налаштовують процеси й надають підтримку російською та узбецькою мовами.",
    ],
    offeringsTitle: "Що впроваджують",
    offerings: [
      { title: "Голосові AI-агенти", desc: "Приймають дзвінки, консультують і фіксують клієнтів без живого оператора." },
      { title: "AI чат-боти", desc: "Працюють із клієнтами 24/7 у Telegram, Instagram і WhatsApp." },
      { title: "Продукти tezcode", desc: "Впроваджують AI Office, RAOS та інші рішення tezcode під ключ." },
      { title: "Аналітика та інтеграції", desc: "Поєднують CRM, платежі й бізнес-системи в єдиний контур." },
    ],
    partnershipTitle: "Як працює партнерство",
    partnershipParas: [
      "tezcode — це AI Software Factory: ми розробляємо, тестуємо й розвиваємо AI-продукти. AI Solution — досвідчений інтегратор, що впроваджує ці продукти в бізнес клієнта.",
      "Клієнт отримує подвійну вигоду: перевірений, надійний продукт tezcode + локальну команду, яка правильно його налаштує й супроводжуватиме. Це швидкий запуск і стійкий результат.",
    ],
    ctaTitle: "Хочете впровадити продукт tezcode у свій бізнес?",
    ctaText:
      "Напишіть нам — обговоримо ваш проєкт і підберемо оптимальне рішення для вашого бізнесу.",
    ctaBtn: "Зв'язатися",
  },
};

export function AisolutionPartnerClient() {
  const locale = useLocale() as Lang;
  const c = COPY[locale] ?? COPY.uz;

  return (
    <main className="relative min-h-screen bg-[var(--tc-ink)] pt-28 pb-24">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, var(--tc-blue-dim), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Back */}
        <Reveal>
          <Link
            href="/"
            className="inline-block text-sm text-[var(--tc-text-muted)] transition-colors hover:text-[var(--tc-text-primary)]"
          >
            {c.back}
          </Link>
        </Reveal>

        {/* Hero */}
        <Reveal className="mt-8 flex flex-col items-center text-center" delay={0.05}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-1)] px-4 py-1.5 text-xs font-500 text-[var(--tc-blue-text)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--tc-blue-light)]" />
            {c.badge}
          </span>

          <div className="flex h-28 w-28 items-center justify-center rounded-[var(--tc-radius-xl)] bg-white/5 p-4 ring-1 ring-[var(--tc-border)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/partners/aisolution-logo.png"
              alt="AI Solution logo"
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
              <RevealItem
                key={i}
                className="rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-6 text-center"
              >
                <div
                  className="text-2xl font-700 text-[var(--tc-blue-text)] md:text-3xl"
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
              <RevealItem
                key={i}
                className="rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-6 transition-colors hover:border-[var(--tc-border-bright)]"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[var(--tc-radius-sm)] bg-[var(--tc-blue-dim)] text-sm font-700 text-[var(--tc-blue-text)]">
                    {i + 1}
                  </span>
                  <h3 className="font-600 text-[var(--tc-text-primary)]">
                    {o.title}
                  </h3>
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
          <div className="relative overflow-hidden rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-10 text-center">
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
            <Link
              href="/#contact"
              className="relative mt-6 inline-flex items-center justify-center rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] px-7 py-3 text-sm font-600 text-white transition-all duration-300 hover:bg-[var(--tc-blue-light)]"
            >
              {c.ctaBtn}
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
