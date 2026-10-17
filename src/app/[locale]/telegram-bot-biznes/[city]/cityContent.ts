import type { ServicePageContent, ServiceLang } from "@/components/service-page/types";
import type { City } from "@/data/cities";
import { CONTENT } from "../content";
import { cityOfficeFaq, cityTrust, composeCityFaq, ruLocative, ukPrep } from "@/data/cityLocal";

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

// City-specific questions prepended to the base FAQ. Only add intents the
// base FAQ does not already cover (no second price / who-to-contact question).
const CITY_FAQ: Record<string, Record<ServiceLang, { q: string; a: string }>> = {
  samarqand: {
    uz: {
      q: "Samarqanddagi turizm biznesi uchun Telegram bot qilasizmi?",
      a: "Ha — mehmonxona, restoran va ekskursiya bizneslari uchun: bot bo'sh vaqt yoki joylarni ko'rsatadi, bronni qabul qiladi, Click/Payme orqali oldindan to'lov oladi, ekskursiya jadvali, manzil va eslatma yuboradi. Buyurtmalar administrator paneli, CRM yoki Google Sheets'ga tushadi. Tezcode shunga o'xshash botlar qurgan — bepul konsultatsiyada ko'ramiz.",
    },
    ru: {
      q: "Делаете ли вы Telegram-бот для туристического бизнеса в Самарканде?",
      a: "Да — для отелей, ресторанов и экскурсий: бот показывает свободное время или места, принимает бронь и предоплату через Click/Payme, отправляет расписание экскурсий, адрес и напоминание. Заказы поступают в админ-панель, CRM или Google Sheets. Tezcode строил подобные боты — на бесплатной консультации разберёмся.",
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

type LocalCityCopy = {
  capabilitySubtitle: string;
  exampleSubtitle: string;
  ctaSubtitle: string;
  faq: { q: string; a: string }[];
};

// City pages need genuinely local information, not only a replaced city name.
const LOCAL_CITY_COPY: Record<string, Partial<Record<ServiceLang, LocalCityCopy>>> = {
  toshkent: {
    uz: {
      capabilitySubtitle: "Toshkentdagi restoran, klinika, o'quv markazi, internet-do'kon va xizmat ko'rsatish bizneslari uchun botni real ish oqimiga moslaymiz. U buyurtma yoki bronni qabul qiladi, Click/Payme orqali to'lov oladi va ma'lumotni CRM, 1C yoki Google Sheets'ga uzatadi.",
      exampleSubtitle: "Toshkentda tezkor javob va ko'p sonli murojaatlarni boshqarish muhim. Telegram bot filiallar bo'yicha buyurtmalarni ajratishi, Yunusoboddan Sergeligacha yetkazib berish hududini tekshirishi va kerakli operatorga murojaatni avtomatik yo'naltirishi mumkin.",
      ctaSubtitle: "Toshkentda Telegram bot yaratish bo'yicha 30 daqiqalik bepul konsultatsiyada jarayoningiz, kerakli integratsiyalar va MVP muddatini aniqlaymiz.",
      faq: [
        { q: "Toshkentdagi bir nechta filial uchun bitta Telegram bot ishlaydimi?", a: "Ha. Bot mijoz joylashuvi yoki tanlagan filialiga qarab buyurtmani kerakli nuqtaga yuboradi, filiallar kesimida CRM yoki admin panelga yozadi va har bir jamoaga alohida xabarnoma jo'natadi." },
      ],
    },
    ru: {
      capabilitySubtitle: "Для ресторанов, клиник, учебных центров, интернет-магазинов и сервисных компаний Ташкента мы встраиваем бота в реальный рабочий процесс. Он принимает заказ или бронь, оплату через Click/Payme и передаёт данные в CRM, 1C или Google Sheets.",
      exampleSubtitle: "В Ташкенте особенно важны быстрый ответ и обработка большого числа обращений. Telegram-бот может разделять заказы по филиалам, проверять зону доставки от Юнусабада до Сергели и автоматически направлять обращение нужному оператору.",
      ctaSubtitle: "На бесплатной 30-минутной консультации по разработке Telegram-бота в Ташкенте определим ваш сценарий, нужные интеграции и срок MVP.",
      faq: [
        { q: "Может ли один Telegram-бот обслуживать несколько филиалов в Ташкенте?", a: "Да. Бот определяет выбранный филиал или локацию клиента, отправляет заказ в нужную точку, записывает данные в CRM или админ-панель по филиалам и уведомляет соответствующую команду." },
      ],
    },
  },
  samarqand: {
    uz: {
      capabilitySubtitle: "Samarqanddagi mehmonxona, turagentlik, restoran va hunarmandchilik do'konlari uchun bot bron, menyu yoki katalog, Click/Payme to'lovi va mehmonlarga avtomatik eslatmani birlashtiradi. O'zbek, rus va ingliz tilidagi alohida oqimlarni ham sozlash mumkin.",
      exampleSubtitle: "Samarqandda turistik mavsum va ko'p tilli mijoz oqimi alohida yondashuv talab qiladi. Bot ekskursiya vaqtlarini ko'rsatadi, mehmonxona yoki restoran bronini qabul qiladi, lokatsiya yuboradi va administratorga tayyor buyurtmani uzatadi.",
      ctaSubtitle: "Samarqanddagi turizm, ovqatlanish yoki savdo biznesingiz uchun Telegram bot ssenariysini bepul konsultatsiyada birga tuzamiz.",
      faq: [
        { q: "Telegram bot xorijiy sayyohlarga bir necha tilda xizmat qila oladimi?", a: "Ha. O'zbek, rus va ingliz tillari uchun alohida menyu va xabarlarni sozlaymiz. Zarur bo'lsa, erkin yozilgan savollarga xizmatlaringiz haqidagi ma'lumot asosida javob beradigan AI qatlamini qo'shamiz." },
      ],
    },
    ru: {
      capabilitySubtitle: "Для гостиниц, турфирм, ресторанов и ремесленных магазинов Самарканда бот объединяет бронирование, меню или каталог, оплату Click/Payme и автоматические напоминания гостям. Можно настроить отдельные сценарии на русском, узбекском и английском языках.",
      exampleSubtitle: "Туристический сезон и многоязычный поток гостей в Самарканде требуют отдельного сценария. Бот показывает время экскурсий, принимает бронь отеля или ресторана, отправляет геолокацию и передаёт готовый заказ администратору.",
      ctaSubtitle: "На бесплатной консультации составим сценарий Telegram-бота для вашего туристического, ресторанного или торгового бизнеса в Самарканде.",
      faq: [
        { q: "Может ли Telegram-бот обслуживать иностранных туристов на нескольких языках?", a: "Да. Настроим отдельные меню и сообщения на русском, узбекском и английском. При необходимости добавим AI-слой, который отвечает на свободно заданные вопросы по информации о ваших услугах." },
      ],
    },
  },
};

// Final FAQ = exactly 5: at most 2 city-specific questions (most useful first)
// + base questions, trimmed from the end while keeping the base price and
// start/contact questions. Empty and duplicate items are dropped.
const dedupeFaq = composeCityFaq;

export function buildTelegramBotCityContent(city: City): ServicePageContent {
  const result: ServicePageContent = {} as ServicePageContent;
  const langs: ServiceLang[] = ["uz", "ru", "en", "ar", "uk"];

  for (const lang of langs) {
    const base = CONTENT[lang] ?? CONTENT.uz;
    const intro = (TELEGRAM_BOT_INTRO[city.slug]?.[lang] ?? TELEGRAM_BOT_INTRO[city.slug]?.uz) ?? "";
    const cityFaq = CITY_FAQ[city.slug]?.[lang] ?? CITY_FAQ[city.slug]?.uz;
    const cityName = city.name[lang] ?? city.name.uz;
    const SERVICE_DESCRIPTION: Record<ServiceLang, string> = {
      uz: `${cityName} bizneslari uchun Telegram bot: buyurtma, to'lov (Click/Payme), eslatma, CRM integratsiyasi. Tezcode, ${cityName} va butun O'zbekiston.`,
      ru: `Telegram-бот для бизнеса ${ruLocative(city)}: заказы, оплата Click/Payme, напоминания, интеграция с CRM. Tezcode.`,
      en: `Telegram bot for businesses in ${cityName}: orders, Click/Payme payments, reminders, CRM integration. Tezcode.`,
      ar: `بوت تيليغرام للشركات في ${cityName}: الطلبات، الدفع عبر Click/Payme، التذكيرات، تكامل CRM. Tezcode.`,
      uk: `Telegram-бот для бізнесу в ${ukPrep(cityName)}: замовлення, оплата Click/Payme, нагадування, інтеграція з CRM. Tezcode.`,
    };
    const localCopy = LOCAL_CITY_COPY[city.slug]?.[lang];

    result[lang] = {
      ...base,
      hero: {
        ...base.hero,
        ...(lang === "ru"
          ? { badge: `Разработка Telegram-ботов — ${cityName}`, title1: "Телеграм-бот для бизнеса", titleAccent: ruLocative(city), title2: "" }
          : { badge: `${cityName}da Telegram bot — Tezcode` }),
        ...(lang === "uz"
          ? { badge: `Telegram bot yaratish — ${cityName}`, title1: `${cityName}da biznes uchun`, titleAccent: "Telegram bot yaratish", title2: "" }
          : {}),
        subtitle: `${intro}\n\n${base.hero.subtitle}`,
        trust: cityTrust(city, lang),
      },
      capabilities: localCopy ? { ...base.capabilities, subtitle: localCopy.capabilitySubtitle } : base.capabilities,
      examples: localCopy ? { ...base.examples, subtitle: localCopy.exampleSubtitle } : base.examples,
      cta: localCopy ? { ...base.cta, subtitle: localCopy.ctaSubtitle } : base.cta,
      faq: {
        ...base.faq,
        items: dedupeFaq([...(cityFaq ? [cityFaq] : []), ...cityOfficeFaq(city, lang), ...(localCopy?.faq ?? [])], base.faq.items),
      },
      service: {
        ...base.service,
        description: SERVICE_DESCRIPTION[lang],
      },
    };
  }

  return result;
}
