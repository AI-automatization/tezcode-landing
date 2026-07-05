import type { ServicePageContent, ServiceLang } from "@/components/service-page/types";
import type { City } from "@/data/cities";
import { CONTENT } from "../content";

const TELEGRAM_BOT_INTRO: Record<string, Record<ServiceLang, string>> = {
  toshkent: {
    uz: "Toshkentda Telegram O'zbekistonning eng ommalashgan messenger — mijozlar buyurtma beradi, narx so'raydi va savol beradi aynan Telegramda. Tezcode biznesingiz uchun Telegram bot yasaydi: buyurtma, to'lov, eslatma va CRM integratsiyasi.",
    ru: "В Ташкенте Telegram — самый популярный мессенджер Узбекистана: клиенты делают заказы, узнают цены и задают вопросы именно в Telegram. Tezcode создаёт Telegram-бот для вашего бизнеса: заказы, оплата, напоминания и интеграция с CRM.",
    en: "In Tashkent, Telegram is Uzbekistan's most popular messenger — customers order, check prices and ask questions right in Telegram. Tezcode builds a Telegram bot for your business: orders, payments, reminders and CRM integration.",
    ar: "في طشقند، تيليغرام هو أكثر تطبيقات المراسلة شيوعاً في أوزبكستان — يطلب العملاء ويستفسرون عن الأسعار ويطرحون الأسئلة مباشرةً فيه. تبني Tezcode روبوت تيليغرام لعملك: طلبات، مدفوعات، تذكيرات وتكامل CRM.",
    uk: "У Ташкенті Telegram — найпопулярніший месенджер Узбекистану: клієнти роблять замовлення, дізнаються ціни й ставлять запитання саме в Telegram. Tezcode створює Telegram-бот для вашого бізнесу: замовлення, оплата, нагадування та інтеграція з CRM.",
  },
  samarqand: {
    uz: "Samarqandda mehmonxonalar, restoranlar va ekskursiya kompaniyalari Telegram orqali bron va buyurtma qabul qiladi. Tezcode Telegram bot yasaydi: bron, to'lov (Click/Payme), eslatma va administrator paneli.",
    ru: "В Самарканде отели, рестораны и экскурсионные компании принимают бронирования и заказы через Telegram. Tezcode создаёт Telegram-бот: бронирование, оплата (Click/Payme), напоминания и панель администратора.",
    en: "In Samarkand hotels, restaurants and tour companies accept bookings and orders via Telegram. Tezcode builds a Telegram bot: bookings, payment (Click/Payme), reminders and an admin panel.",
    ar: "في سمرقند، تستقبل الفنادق والمطاعم وشركات الجولات الحجوزات والطلبات عبر تيليغرام. تبني Tezcode روبوت تيليغرام: حجوزات، ودفع (Click/Payme)، وتذكيرات، ولوحة مشرف.",
    uk: "У Самарканді готелі, ресторани та екскурсійні компанії приймають бронювання та замовлення через Telegram. Tezcode створює Telegram-бот: бронювання, оплата (Click/Payme), нагадування та панель адміністратора.",
  },
};

const CITY_FAQ: Record<string, Record<ServiceLang, { q: string; a: string }>> = {
  toshkent: {
    uz: {
      q: "Toshkentdagi bizneslar uchun Telegram bot qancha turadi?",
      a: "Oddiy buyurtma/savol boti — 200–600 USD, Click/Payme to'lov va CRM integratsiyali bot — 600–2000 USD. Bepul konsultatsiyada aniq hisob-kitob qilamiz.",
    },
    ru: {
      q: "Сколько стоит Telegram-бот для бизнеса в Ташкенте?",
      a: "Простой бот для заказов/вопросов — 200–600 USD, бот с оплатой Click/Payme и интеграцией CRM — 600–2000 USD. На бесплатной консультации рассчитаем точно.",
    },
    en: {
      q: "How much does a Telegram bot cost for businesses in Tashkent?",
      a: "A simple order/Q&A bot — $200–$600; a bot with Click/Payme payment and CRM integration — $600–$2,000. Exact estimate on the free consultation.",
    },
    ar: {
      q: "كم تكلفة روبوت تيليغرام للشركات في طشقند؟",
      a: "روبوت بسيط للطلبات والأسئلة — 200–600 دولار؛ روبوت مع دفع Click/Payme وتكامل CRM — 600–2000 دولار. تقدير دقيق في الاستشارة المجانية.",
    },
    uk: {
      q: "Скільки коштує Telegram-бот для бізнесу в Ташкенті?",
      a: "Простий бот для замовлень/запитань — 200–600 USD; бот з оплатою Click/Payme та інтеграцією CRM — 600–2000 USD. Точний розрахунок на безкоштовній консультації.",
    },
  },
  samarqand: {
    uz: {
      q: "Samarqanddagi turizm biznesi uchun Telegram bot qilasizmi?",
      a: "Ha — bron, to'lov (Click/Payme), ekskursiya jadvali, mijozlarga eslatma. Tezcode shunga o'xshash botlar qurgan. Bepul konsultatsiyada ko'ramiz.",
    },
    ru: {
      q: "Делаете ли вы Telegram-бот для туристического бизнеса в Самарканде?",
      a: "Да — бронирование, оплата (Click/Payme), расписание экскурсий, напоминания клиентам. Tezcode строил подобные боты. На бесплатной консультации разберёмся.",
    },
    en: {
      q: "Do you build Telegram bots for tourism businesses in Samarkand?",
      a: "Yes — bookings, payment (Click/Payme), tour schedules, customer reminders. Tezcode has built similar bots. We'll discuss on the free consultation.",
    },
    ar: {
      q: "هل تبنون روبوت تيليغرام لأعمال السياحة في سمرقند؟",
      a: "نعم — حجوزات، ودفع (Click/Payme)، وجداول الجولات، وتذكيرات العملاء. بنت Tezcode روبوتات مماثلة. سنناقش في الاستشارة المجانية.",
    },
    uk: {
      q: "Чи робите ви Telegram-бот для туристичного бізнесу в Самарканді?",
      a: "Так — бронювання, оплата (Click/Payme), розклад екскурсій, нагадування клієнтам. Tezcode будував подібні боти. Обговоримо на безкоштовній консультації.",
    },
  },
};

export function buildTelegramBotCityContent(city: City): ServicePageContent {
  const result: ServicePageContent = {} as ServicePageContent;
  const langs: ServiceLang[] = ["uz", "ru", "en", "ar", "uk"];

  for (const lang of langs) {
    const base = CONTENT[lang] ?? CONTENT.uz;
    const intro = (TELEGRAM_BOT_INTRO[city.slug]?.[lang] ?? TELEGRAM_BOT_INTRO[city.slug]?.uz) ?? "";
    const cityFaq = (CITY_FAQ[city.slug]?.[lang] ?? CITY_FAQ[city.slug]?.uz) ?? { q: "", a: "" };
    const cityName = city.name[lang] ?? city.name.uz;

    result[lang] = {
      ...base,
      hero: {
        ...base.hero,
        badge: `${cityName}da Telegram bot — Tezcode`,
        subtitle: `${intro}\n\n${base.hero.subtitle}`,
        trust: `${cityName} va butun O'zbekiston • Bepul 30 daqiqa konsultatsiya • To'lov: 30% oldindan`,
      },
      faq: {
        ...base.faq,
        items: [{ q: cityFaq.q, a: cityFaq.a }, ...base.faq.items],
      },
      service: {
        ...base.service,
        description: `${cityName} bizneslari uchun Telegram bot: buyurtma, to'lov (Click/Payme), eslatma, CRM integratsiyasi. Tezcode, ${cityName} va butun O'zbekiston.`,
      },
    };
  }

  return result;
}
