import type { ServicePageContent, ServiceLang } from "@/components/service-page/types";
import type { City } from "@/data/cities";
import { CONTENT } from "../content";

const BIZ_AUTO_INTRO: Record<string, Record<ServiceLang, string>> = {
  toshkent: {
    uz: "Toshkentda yirik savdo tarmoqlari, ko'p filialli kompaniyalar va tez o'suvchi startaplar qo'lda ishlanadigan jarayonlar — Excel, Telegram guruhlar, qog'oz hisobotlar — tufayli vaqt va pul yo'qotmoqda. Tezcode bu jarayonlarni bitta tizimga jamlaydi va avtomatlashtiradi.",
    ru: "В Ташкенте крупные торговые сети, многофилиальные компании и быстрорастущие стартапы теряют время и деньги из-за ручных процессов — Excel, Telegram-групп, бумажных отчётов. Tezcode объединяет эти процессы в единую систему и автоматизирует их.",
    en: "In Tashkent, large retail chains, multi-branch companies and fast-growing startups lose time and money due to manual processes — Excel, Telegram groups, paper reports. Tezcode consolidates these processes into a single system and automates them.",
    ar: "في طشقند، تخسر سلاسل التجزئة الكبيرة والشركات متعددة الفروع والشركات الناشئة سريعة النمو الوقت والمال بسبب العمليات اليدوية — Excel، ومجموعات تيليغرام، والتقارير الورقية. تجمع Tezcode هذه العمليات في نظام واحد وتؤتمتها.",
    uk: "У Ташкенті великі торговельні мережі, компанії з філіями та стартапи втрачають час і гроші через ручні процеси — Excel, Telegram-групи, паперові звіти. Tezcode об'єднує ці процеси в єдину систему та автоматизує їх.",
  },
  samarqand: {
    uz: "Samarqandda turizm, mehmonxona va savdo bizneslari mavsumiy yuklanish va boshqaruv murakkabligiga duch keladi — mehmonlarni kuzatish, buyurtmalar, to'lovlar ko'pincha qo'lda amalga oshiriladi. Tezcode bu jarayonlarni avtomatlashtiradi va nazoratni soddalashtiradi.",
    ru: "В Самарканде туристический, гостиничный и торговый бизнес сталкивается с сезонными нагрузками и сложностью управления — отслеживание гостей, заказы, платежи часто ведутся вручную. Tezcode автоматизирует эти процессы и упрощает контроль.",
    en: "In Samarkand, tourism, hospitality and retail businesses face seasonal loads and management complexity — guest tracking, orders and payments are often done manually. Tezcode automates these processes and simplifies control.",
    ar: "في سمرقند، تواجه أعمال السياحة والضيافة والتجزئة أحمال موسمية وتعقيدات في الإدارة — تتبّع الضيوف والطلبات والمدفوعات غالباً ما تتم يدوياً. تؤتمت Tezcode هذه العمليات وتبسّط السيطرة.",
    uk: "У Самарканді туристичний, готельний та роздрібний бізнес стикається з сезонними навантаженнями та складністю управління — відстеження гостей, замовлення та платежі часто виконуються вручну. Tezcode автоматизує ці процеси та спрощує контроль.",
  },
};

const CITY_FAQ: Record<string, Record<ServiceLang, { q: string; a: string }>> = {
  toshkent: {
    uz: {
      q: "Toshkentdagi kompaniyam uchun qaysi jarayonlarni avtomatlashtirish kerak?",
      a: "Ko'pincha: buyurtma qabul qilish, ombor nazorati, mijoz hisobi va oylik hisobotlar. Bepul konsultatsiyada sizning jarayonlaringizni ko'rib chiqamiz va qaysi biri eng tez ROI berishi haqida aniq tavsiya beramiz.",
    },
    ru: {
      q: "Какие процессы стоит автоматизировать компании в Ташкенте?",
      a: "Чаще всего: приём заказов, контроль склада, учёт клиентов и ежемесячные отчёты. На бесплатной консультации разберём ваши процессы и дадим точную рекомендацию — что даст ROI быстрее всего.",
    },
    en: {
      q: "Which processes should a Tashkent company automate first?",
      a: "Usually: order intake, inventory control, customer tracking and monthly reports. On the free consultation we'll review your specific processes and give a concrete recommendation on what delivers ROI fastest.",
    },
    ar: {
      q: "ما العمليات التي يجب أن تؤتمتها الشركة في طشقند أولاً؟",
      a: "في الغالب: استقبال الطلبات، ومراقبة المخزون، وتتبّع العملاء، والتقارير الشهرية. في الاستشارة المجانية، سنراجع عملياتك بالتحديد ونقدّم توصية واضحة بما يحقق عائداً على الاستثمار بشكل أسرع.",
    },
    uk: {
      q: "Які процеси варто автоматизувати компанії в Ташкенті насамперед?",
      a: "Зазвичай: приймання замовлень, контроль складу, облік клієнтів та щомісячні звіти. На безкоштовній консультації розберемо ваші процеси й дамо точну рекомендацію — що дасть ROI найшвидше.",
    },
  },
  samarqand: {
    uz: {
      q: "Samarqanddagi turizm yoki mehmonxona biznesim uchun nima avtomatlashtiriladi?",
      a: "Bron tizimi, mehmon ro'yxati, to'lov eslatmalari, mavsumiy hisobotlar va personalga vazifa tarqatish. Bepul konsultatsiyada sizning holatingizga mos yechim taklif qilamiz.",
    },
    ru: {
      q: "Что автоматизируется для туристического или гостиничного бизнеса в Самарканде?",
      a: "Система бронирования, реестр гостей, напоминания об оплате, сезонные отчёты и распределение задач персоналу. На бесплатной консультации предложим решение под ваш случай.",
    },
    en: {
      q: "What is automated for a tourism or hotel business in Samarkand?",
      a: "Booking system, guest registry, payment reminders, seasonal reports and task assignment for staff. We'll offer a solution tailored to your case on the free consultation.",
    },
    ar: {
      q: "ما الذي يُؤتمَت لأعمال السياحة أو الفنادق في سمرقند؟",
      a: "نظام الحجز، وسجل الضيوف، وتذكيرات الدفع، والتقارير الموسمية، وتوزيع المهام على الموظفين. سنقدّم حلاً مناسباً لحالتك في الاستشارة المجانية.",
    },
    uk: {
      q: "Що автоматизується для туристичного або готельного бізнесу в Самарканді?",
      a: "Система бронювання, реєстр гостей, нагадування про оплату, сезонні звіти та розподіл завдань персоналу. Запропонуємо рішення під ваш випадок на безкоштовній консультації.",
    },
  },
};

export function buildBiznesAvtoCityContent(city: City): ServicePageContent {
  const result: ServicePageContent = {} as ServicePageContent;
  const langs: ServiceLang[] = ["uz", "ru", "en", "ar", "uk"];

  for (const lang of langs) {
    const base = CONTENT[lang] ?? CONTENT.uz;
    const intro = (BIZ_AUTO_INTRO[city.slug]?.[lang] ?? BIZ_AUTO_INTRO[city.slug]?.uz) ?? "";
    const cityFaq = (CITY_FAQ[city.slug]?.[lang] ?? CITY_FAQ[city.slug]?.uz) ?? { q: "", a: "" };
    const cityName = city.name[lang] ?? city.name.uz;

    result[lang] = {
      ...base,
      hero: {
        ...base.hero,
        badge: `${cityName}da biznes avtomatlashtirish — Tezcode`,
        subtitle: `${intro}\n\n${base.hero.subtitle}`,
        trust: `${cityName} va butun O'zbekiston • Bepul 30 daqiqa konsultatsiya • To'lov: 30% oldindan`,
      },
      faq: {
        ...base.faq,
        items: [{ q: cityFaq.q, a: cityFaq.a }, ...base.faq.items],
      },
      service: {
        ...base.service,
        description: `${cityName} bizneslari uchun jarayon avtomatlashtirish: buyurtma, ombor, CRM, hisobot, to'lov. Tezcode Software Factory. ${cityName} va butun O'zbekiston.`,
      },
    };
  }

  return result;
}
