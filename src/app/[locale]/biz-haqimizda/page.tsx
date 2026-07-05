"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceIcon } from "@/components/service-page/ServiceIcon";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type Copy = {
  hero: { badge: string; title1: string; titleAccent: string; subtitle: string };
  stats: { value: string; label: string }[];
  story: { badge: string; title: string; titleAccent: string; paragraphs: string[] };
  values: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: { icon: string; title: string; desc: string }[];
  };
  cta: { title: string; titleAccent: string; subtitle: string; button: string; note: string };
};

const COPY: Record<Lang, Copy> = {
  uz: {
    hero: {
      badge: "Biz haqimizda",
      title1: "Toshkentdagi",
      titleAccent: "AI Software Factory",
      subtitle:
        "Tezcode — biznesni sun'iy intellekt bilan avtomatlashtiradigan mahsulot fabrikasi. Kichik do'kondan korporatsiyagacha — har biznes uchun yechim.",
    },
    stats: [
      { value: "2024", label: "Ta'sis yili" },
      { value: "14+", label: "In-house dasturchi" },
      { value: "8+", label: "Mahsulot" },
      { value: "6", label: "Yo'nalish" },
    ],
    story: {
      badge: "Bizning yo'l",
      title: "Bir g'oyadan",
      titleAccent: "fabrikagacha",
      paragraphs: [
        "Tezcode 2024-yilda Toshkentda tashkil etilgan. Asoschimiz — Bekzod Mirzaaliyev. Biz IT Park rezidentimiz.",
        "Bugun Tezcode — 14 dan ortiq in-house dasturchidan iborat AI Software Factory: 6 yo'nalish (Systems, Custom, AI, Teams, Labs, Academy) va RAOS, AI Office, CoreMed, WorkControl kabi mahsulotlar.",
        "Missiyamiz oddiy: har bir biznesni AI bilan tizimlashtirish. Freelancer emas — barcha jarayon bitta ishonchli jamoada.",
      ],
    },
    values: {
      badge: "Qadriyatlarimiz",
      title: "Bizni nima",
      titleAccent: "ajratib turadi",
      subtitle: "To'rtta tamoyil — har loyihada.",
      items: [
        { icon: "check-circle-2", title: "Shaffof to'lov — 30% oldindan", desc: "Boshlash uchun atigi 30% — qolgani loyiha bosqichlari bo'yicha to'lanadi." },
        { icon: "users", title: "Lokal jamoa", desc: "Toshkentdagi ofisimizda. To'g'ridan-to'g'ri aloqa, til va vaqt mintaqasi muammosi yo'q." },
        { icon: "bot", title: "AI-first", desc: "Claude va zamonaviy AI vositalari kundalik ishimizda. Tezroq, lekin sifatni saqlagan holda." },
        { icon: "package", title: "Kod sizniki", desc: "Manba kod 100% sizga tegishli. Vendor lock-in yo'q — istalgan vaqtda mustaqilsiz." },
      ],
    },
    cta: {
      title: "Loyihangizni",
      titleAccent: "boshlaymizmi?",
      subtitle: "30 daqiqalik bepul konsultatsiyada eng yaxshi yechimni topamiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing — Bekzod bilan bevosita bog'lanasiz.",
    },
  },
  ru: {
    hero: {
      badge: "О компании",
      title1: "AI Software Factory",
      titleAccent: "в Ташкенте",
      subtitle:
        "Tezcode — фабрика продуктов, которая автоматизирует бизнес с помощью искусственного интеллекта. От небольшого магазина до корпорации — решение для каждого.",
    },
    stats: [
      { value: "2024", label: "Год основания" },
      { value: "14+", label: "In-house разработчиков" },
      { value: "8+", label: "Продуктов" },
      { value: "6", label: "Направлений" },
    ],
    story: {
      badge: "Наш путь",
      title: "От идеи",
      titleAccent: "до фабрики",
      paragraphs: [
        "Tezcode основана в 2024 году в Ташкенте. Наш основатель — Бекзод Мирзаалиев. Мы резиденты IT Park.",
        "Сегодня Tezcode — это AI Software Factory из более чем 14 in-house разработчиков: 6 направлений (Systems, Custom, AI, Teams, Labs, Academy) и продукты RAOS, AI Office, CoreMed, WorkControl.",
        "Наша миссия проста: систематизировать каждый бизнес с помощью AI. Не фрилансеры — весь процесс в одной надёжной команде.",
      ],
    },
    values: {
      badge: "Наши ценности",
      title: "Что нас",
      titleAccent: "отличает",
      subtitle: "Четыре принципа — в каждом проекте.",
      items: [
        { icon: "check-circle-2", title: "Прозрачная оплата — 30% предоплата", desc: "Для старта достаточно 30% — остальное по этапам проекта." },
        { icon: "users", title: "Локальная команда", desc: "В нашем офисе в Ташкенте. Прямая связь, без проблем с языком и часовым поясом." },
        { icon: "bot", title: "AI-first", desc: "Claude и современные AI-инструменты в ежедневной работе. Быстрее, сохраняя качество." },
        { icon: "package", title: "Код принадлежит вам", desc: "Исходный код на 100% ваш. Никакого vendor lock-in — вы независимы в любой момент." },
      ],
    },
    cta: {
      title: "Начнём ваш",
      titleAccent: "проект?",
      subtitle: "На бесплатной 30-минутной консультации найдём лучшее решение. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или пишите на tezcode@tezcode.dev — свяжетесь напрямую с Бекзодом.",
    },
  },
  en: {
    hero: {
      badge: "About us",
      title1: "An AI Software Factory",
      titleAccent: "in Tashkent",
      subtitle:
        "Tezcode is a product factory that automates business with artificial intelligence. From a small shop to an enterprise — a solution for every business.",
    },
    stats: [
      { value: "2024", label: "Founded" },
      { value: "14+", label: "In-house developers" },
      { value: "8+", label: "Products" },
      { value: "6", label: "Divisions" },
    ],
    story: {
      badge: "Our journey",
      title: "From an idea",
      titleAccent: "to a factory",
      paragraphs: [
        "Tezcode was founded in 2024 in Tashkent. Our founder is Bekzod Mirzaaliyev. We are an IT Park resident.",
        "Today Tezcode is an AI Software Factory of 14+ in-house developers: 6 divisions (Systems, Custom, AI, Teams, Labs, Academy) and products like RAOS, AI Office, CoreMed and WorkControl.",
        "Our mission is simple: systematize every business with AI. Not freelancers — the whole process in one reliable team.",
      ],
    },
    values: {
      badge: "Our values",
      title: "What sets",
      titleAccent: "us apart",
      subtitle: "Four principles — in every project.",
      items: [
        { icon: "check-circle-2", title: "Transparent payment — 30% upfront", desc: "Just 30% to start — the rest is paid per project stage." },
        { icon: "users", title: "Local team", desc: "In our Tashkent office. Direct contact, no language or time-zone friction." },
        { icon: "bot", title: "AI-first", desc: "Claude and modern AI tools in our daily work. Faster, while keeping quality." },
        { icon: "package", title: "You own the code", desc: "The source code is 100% yours. No vendor lock-in — you stay independent." },
      ],
    },
    cta: {
      title: "Shall we start",
      titleAccent: "your project?",
      subtitle: "In a free 30-minute consultation we'll find the best solution. No commitment.",
      button: "Chat on Telegram",
      note: "Or email tezcode@tezcode.dev — you'll reach Bekzod directly.",
    },
  },
  ar: {
    hero: {
      badge: "من نحن",
      title1: "مصنع برمجيات بالذكاء الاصطناعي",
      titleAccent: "في طشقند",
      subtitle:
        "Tezcode مصنع منتجات يُؤتمت الأعمال بالذكاء الاصطناعي. من متجر صغير إلى مؤسسة كبيرة — حل لكل عمل.",
    },
    stats: [
      { value: "2024", label: "سنة التأسيس" },
      { value: "+14", label: "مطور داخلي" },
      { value: "+8", label: "منتجات" },
      { value: "6", label: "أقسام" },
    ],
    story: {
      badge: "مسيرتنا",
      title: "من فكرة",
      titleAccent: "إلى مصنع",
      paragraphs: [
        "تأسست Tezcode عام 2024 في طشقند. مؤسسنا هو بكزود ميرزااليف. نحن مقيمون في IT Park.",
        "اليوم Tezcode مصنع برمجيات بالذكاء الاصطناعي يضم أكثر من 14 مطورًا داخليًا: 6 أقسام (Systems وCustom وAI وTeams وLabs وAcademy) ومنتجات مثل RAOS وAI Office وCoreMed وWorkControl.",
        "مهمتنا بسيطة: تنظيم كل عمل بالذكاء الاصطناعي. لسنا مستقلين — كل العملية في فريق واحد موثوق.",
      ],
    },
    values: {
      badge: "قيمنا",
      title: "ما الذي",
      titleAccent: "يميّزنا",
      subtitle: "أربعة مبادئ — في كل مشروع.",
      items: [
        { icon: "check-circle-2", title: "دفع شفاف — 30% مقدمًا", desc: "يكفي 30% للبدء — والباقي حسب مراحل المشروع." },
        { icon: "users", title: "فريق محلي", desc: "في مكتبنا بطشقند. تواصل مباشر دون مشاكل اللغة أو المنطقة الزمنية." },
        { icon: "bot", title: "الذكاء الاصطناعي أولًا", desc: "Claude وأدوات الذكاء الاصطناعي الحديثة في عملنا اليومي. أسرع مع الحفاظ على الجودة." },
        { icon: "package", title: "الكود ملكك", desc: "الكود المصدري ملكك 100%. لا احتكار مورّد — تبقى مستقلًا في أي وقت." },
      ],
    },
    cta: {
      title: "هل نبدأ",
      titleAccent: "مشروعك؟",
      subtitle: "في استشارة مجانية مدتها 30 دقيقة سنجد الحل الأفضل. دون أي التزام.",
      button: "تحدث عبر تيليجرام",
      note: "أو راسلنا على tezcode@tezcode.dev — ستصل إلى بكزود مباشرة.",
    },
  },
  uk: {
    hero: {
      badge: "Про компанію",
      title1: "AI Software Factory",
      titleAccent: "у Ташкенті",
      subtitle:
        "Tezcode — фабрика продуктів, що автоматизує бізнес за допомогою штучного інтелекту. Від невеликого магазину до корпорації — рішення для кожного.",
    },
    stats: [
      { value: "2024", label: "Рік заснування" },
      { value: "14+", label: "In-house розробників" },
      { value: "8+", label: "Продуктів" },
      { value: "6", label: "Напрямків" },
    ],
    story: {
      badge: "Наш шлях",
      title: "Від ідеї",
      titleAccent: "до фабрики",
      paragraphs: [
        "Tezcode заснована у 2024 році в Ташкенті. Наш засновник — Бекзод Мірзаалієв. Ми резиденти IT Park.",
        "Сьогодні Tezcode — це AI Software Factory з понад 14 in-house розробників: 6 напрямків (Systems, Custom, AI, Teams, Labs, Academy) та продукти RAOS, AI Office, CoreMed, WorkControl.",
        "Наша місія проста: систематизувати кожен бізнес за допомогою AI. Не фрілансери — весь процес в одній надійній команді.",
      ],
    },
    values: {
      badge: "Наші цінності",
      title: "Що нас",
      titleAccent: "вирізняє",
      subtitle: "Чотири принципи — у кожному проєкті.",
      items: [
        { icon: "check-circle-2", title: "Прозора оплата — 30% передоплата", desc: "Для старту достатньо 30% — решта за етапами проєкту." },
        { icon: "users", title: "Локальна команда", desc: "У нашому офісі в Ташкенті. Прямий зв'язок, без проблем із мовою та часовим поясом." },
        { icon: "bot", title: "AI-first", desc: "Claude та сучасні AI-інструменти в щоденній роботі. Швидше, зберігаючи якість." },
        { icon: "package", title: "Код належить вам", desc: "Вихідний код на 100% ваш. Жодного vendor lock-in — ви незалежні будь-коли." },
      ],
    },
    cta: {
      title: "Почнемо ваш",
      titleAccent: "проєкт?",
      subtitle: "На безкоштовній 30-хвилинній консультації знайдемо найкраще рішення. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або пишіть на tezcode@tezcode.dev — зв'яжетеся напряму з Бекзодом.",
    },
  },
};

// IT Park residency certificate block (localized).
const RESIDENT: Record<Lang, { badge: string; title: string; subtitle: string; view: string }> = {
  uz: {
    badge: "Rasmiy maqom",
    title: "IT Park Uzbekistan rezidenti",
    subtitle: 'Tezcode ("TEZ KOD" MCHJ) — Texnopark rezidentlarining Yagona reestriga 2026-yil 18-iyunda kiritildi. Guvohnoma №6237.',
    view: "To'liq guvohnomani ochish",
  },
  ru: {
    badge: "Официальный статус",
    title: "Резидент IT Park Uzbekistan",
    subtitle: 'Tezcode (ООО "TEZ KOD") внесён в Единый реестр резидентов технопарка 18 июня 2026 года. Свидетельство №6237.',
    view: "Открыть полное свидетельство",
  },
  en: {
    badge: "Official status",
    title: "IT Park Uzbekistan resident",
    subtitle: 'Tezcode ("TEZ KOD" LLC) was entered into the technopark residents\' unified registry on 18 June 2026. Certificate №6237.',
    view: "Open the full certificate",
  },
  ar: {
    badge: "مكانة رسمية",
    title: "مقيم في IT Park Uzbekistan",
    subtitle: 'Tezcode ("TEZ KOD" ذ.م.م) أُدرج في السجل الموحّد لمقيمي الحديقة التقنية بتاريخ 18 يونيو 2026. الشهادة رقم 6237.',
    view: "افتح الشهادة كاملة",
  },
  uk: {
    badge: "Офіційний статус",
    title: "Резидент IT Park Uzbekistan",
    subtitle: 'Tezcode (ТОВ "TEZ KOD") внесений до Єдиного реєстру резидентів технопарку 18 червня 2026 року. Свідоцтво №6237.',
    view: "Відкрити повне свідоцтво",
  },
};

export default function AboutPage() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;
  const r = RESIDENT[locale] ?? RESIDENT.uz;

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] overflow-hidden"
    >
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center">
        <div aria-hidden className="tc-grid-bg absolute inset-0" />
        <Reveal className="relative max-w-3xl mx-auto">
          <span className="tc-chip mb-5">{t.hero.badge}</span>
          <h1
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.hero.title1}{" "}
            <span className="text-[var(--tc-blue-text)]">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {t.hero.subtitle}
          </p>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="px-6 pb-24">
        <RevealStagger className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="tc-card text-center p-6">
                <div
                  className="text-4xl md:text-5xl font-800 text-[var(--tc-text-primary)] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-[0.12em] text-[var(--tc-text-muted)]">
                  {s.label}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Story */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-10">
            <span className="tc-chip">{t.story.badge}</span>
            <h2
              className="text-3xl md:text-5xl font-700 mt-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.story.title}{" "}
              <span className="text-[var(--tc-blue-text)]">{t.story.titleAccent}</span>
            </h2>
          </Reveal>
          <div className="space-y-5">
            {t.story.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-[var(--tc-text-secondary)] text-lg leading-relaxed">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 bg-[var(--tc-surface-0)] border-y border-[var(--tc-border)] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <span className="tc-chip">{t.values.badge}</span>
            <h2
              className="text-3xl md:text-5xl font-700 mt-4 mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.values.title}{" "}
              <span className="text-[var(--tc-blue-text)]">{t.values.titleAccent}</span>
            </h2>
            <p className="text-[var(--tc-text-secondary)] text-lg">{t.values.subtitle}</p>
          </Reveal>
          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.items.map((v) => (
              <RevealItem key={v.title}>
                <div className="tc-card tc-card-hover h-full p-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--tc-blue-dim)] flex items-center justify-center mb-4">
                    <ServiceIcon name={v.icon} className="w-6 h-6 text-[var(--tc-blue-text)]" />
                  </div>
                  <h3
                    className="text-lg font-700 text-[var(--tc-text-primary)] mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--tc-text-muted)] leading-relaxed">{v.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* IT Park residency certificate */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-1)] text-xs font-600 uppercase tracking-[0.14em] text-[var(--tc-success)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-success)]" />
              {r.badge}
            </span>
            <h2
              className="text-3xl md:text-5xl font-700 mt-4 mb-3 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {r.title}
            </h2>
            <p className="text-[var(--tc-text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
              {r.subtitle}
            </p>
            <a
              href="/it-park-guvohnoma.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="tc-card tc-card-hover group block overflow-hidden p-0 bg-white"
            >
              <Image
                src="/it-park-guvohnoma.jpg"
                width={1280}
                height={887}
                alt='IT Park Uzbekistan rezidentlik guvohnomasi — "TEZ KOD" MCHJ, №6237'
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <p className="mt-4 text-sm text-[var(--tc-text-muted)]">{r.view} →</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="tc-navy-section py-20 sm:py-28 px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-700 mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.cta.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{t.cta.titleAccent}</span>
          </h2>
          <p className="text-[var(--tc-text-secondary)] text-lg mb-8">{t.cta.subtitle}</p>
          <Magnetic>
            <a
              href="https://t.me/tezcode_managament"
              target="_blank"
              rel="noopener noreferrer"
              className="tc-btn-primary inline-flex items-center gap-2"
            >
              {t.cta.button}
            </a>
          </Magnetic>
          <p className="text-[var(--tc-text-muted)] text-sm mt-5">{t.cta.note}</p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
