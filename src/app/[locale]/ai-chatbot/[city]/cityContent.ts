import type { ServicePageContent, ServiceLang } from "@/components/service-page/types";
import type { City } from "@/data/cities";
import { CONTENT } from "../content";

const AI_CHATBOT_INTRO: Record<string, Record<ServiceLang, string>> = {
  toshkent: {
    uz: "Toshkentda ko'plab bizneslar Telegram, Instagram va WhatsApp orqali mijozlar bilan muloqot qiladi — lekin operatorlar har 24 soat javob bera olmaydi. AI chatbot barcha kanalda kechayu kunduz ishlaydi, savollarga javob beradi va lidlarni saralaydi.",
    ru: "В Ташкенте многие компании общаются с клиентами через Telegram, Instagram и WhatsApp — но операторы не могут отвечать круглосуточно. ИИ-чатбот работает на всех каналах 24/7, отвечает на вопросы и квалифицирует лидов.",
    en: "In Tashkent many businesses communicate with customers via Telegram, Instagram and WhatsApp — but operators can't respond around the clock. An AI chatbot works across all channels 24/7, answers questions and qualifies leads.",
    ar: "في طشقند، تتواصل كثير من الشركات مع العملاء عبر تيليغرام وإنستغرام وواتساب — لكن المشغّلين لا يستطيعون الردّ على مدار الساعة. يعمل شات بوت الذكاء الاصطناعي عبر جميع القنوات 24/7، ويردّ على الأسئلة ويؤهّل العملاء المحتملين.",
    uk: "У Ташкенті багато компаній спілкуються з клієнтами через Telegram, Instagram та WhatsApp — але оператори не можуть відповідати цілодобово. AI-чатбот працює по всіх каналах 24/7, відповідає на запитання та кваліфікує лідів.",
  },
  samarqand: {
    uz: "Samarqandda turistlar va mahalliy mijozlar ko'pincha Telegram va Instagram orqali savol beradi — mehmonxona, restoran, muzey narxlari, ish vaqti. AI chatbot barcha savolga darhol javob beradi, bron qabul qiladi va operator vaqtini tejaydi.",
    ru: "В Самарканде туристы и местные клиенты часто задают вопросы через Telegram и Instagram — о ценах на отели, рестораны, музеи, часах работы. ИИ-чатбот сразу отвечает на все вопросы, принимает бронирования и экономит время операторов.",
    en: "In Samarkand tourists and local customers often ask questions via Telegram and Instagram — about hotel, restaurant and museum prices, opening hours. An AI chatbot replies instantly, accepts bookings and saves operator time.",
    ar: "في سمرقند، يطرح السياح والعملاء المحليون أسئلة كثيراً عبر تيليغرام وإنستغرام — عن أسعار الفنادق والمطاعم والمتاحف وساعات العمل. يردّ شات بوت الذكاء الاصطناعي فوراً على جميع الأسئلة ويستقبل الحجوزات ويوفّر وقت المشغّلين.",
    uk: "У Самарканді туристи та місцеві клієнти часто ставлять запитання через Telegram та Instagram — про ціни на готелі, ресторани, музеї, години роботи. AI-чатбот відповідає миттєво, приймає бронювання та економить час операторів.",
  },
};

const CITY_FAQ: Record<string, Record<ServiceLang, { q: string; a: string }>> = {
  toshkent: {
    uz: {
      q: "Toshkentdagi bizneslar uchun AI chatbot qancha turadi?",
      a: "Oddiy FAQ chatbot — 300–800 USD, CRM/1C integratsiyali chatbot — 800–2500 USD. Bepul konsultatsiyada aniq hisob-kitob qilamiz.",
    },
    ru: {
      q: "Сколько стоит ИИ-чатбот для бизнеса в Ташкенте?",
      a: "Простой FAQ-чатбот — 300–800 USD, чатбот с интеграцией CRM/1С — 800–2500 USD. На бесплатной консультации рассчитаем точно.",
    },
    en: {
      q: "How much does an AI chatbot cost for businesses in Tashkent?",
      a: "A simple FAQ chatbot — $300–$800; a chatbot with CRM/1C integration — $800–$2,500. We'll give an exact estimate on the free consultation.",
    },
    ar: {
      q: "كم تكلفة شات بوت الذكاء الاصطناعي للشركات في طشقند؟",
      a: "شات بوت أسئلة شائعة بسيط — 300–800 دولار؛ شات بوت مع تكامل CRM/1C — 800–2500 دولار. سنقدّم تقديراً دقيقاً في الاستشارة المجانية.",
    },
    uk: {
      q: "Скільки коштує AI-чатбот для бізнесу в Ташкенті?",
      a: "Простий FAQ-чатбот — 300–800 USD; чатбот з інтеграцією CRM/1С — 800–2500 USD. На безкоштовній консультації розрахуємо точно.",
    },
  },
  samarqand: {
    uz: {
      q: "Samarqanddagi turizm biznesi uchun AI chatbot ishlayaptimi?",
      a: "Ha — mehmonxona, restoran, ekskursiya savollari, bron qabul qilish, narxlar ro'yxati. Telegram va Instagram'da 24/7 ishlaydi. Bepul konsultatsiyada ko'ramiz.",
    },
    ru: {
      q: "Подходит ли ИИ-чатбот для туристического бизнеса Самарканда?",
      a: "Да — вопросы об отеле, ресторане, экскурсиях, приём бронирований, прайс-листы. Работает в Telegram и Instagram 24/7. На бесплатной консультации настроим.",
    },
    en: {
      q: "Does an AI chatbot work for tourism businesses in Samarkand?",
      a: "Yes — hotel, restaurant and tour questions, bookings, price lists. Works in Telegram and Instagram 24/7. We'll set it up on the free consultation.",
    },
    ar: {
      q: "هل يناسب شات بوت الذكاء الاصطناعي أعمال السياحة في سمرقند؟",
      a: "نعم — أسئلة الفندق والمطعم والجولات، واستقبال الحجوزات، وقوائم الأسعار. يعمل في تيليغرام وإنستغرام على مدار الساعة. سنضبطه في الاستشارة المجانية.",
    },
    uk: {
      q: "Чи підходить AI-чатбот для туристичного бізнесу Самарканда?",
      a: "Так — запитання про готель, ресторан, екскурсії, бронювання, прайс-листи. Працює в Telegram та Instagram 24/7. Налаштуємо на безкоштовній консультації.",
    },
  },
};

export function buildAiChatbotCityContent(city: City): ServicePageContent {
  const result: ServicePageContent = {} as ServicePageContent;
  const langs: ServiceLang[] = ["uz", "ru", "en", "ar", "uk"];

  for (const lang of langs) {
    const base = CONTENT[lang] ?? CONTENT.uz;
    const intro = (AI_CHATBOT_INTRO[city.slug]?.[lang] ?? AI_CHATBOT_INTRO[city.slug]?.uz) ?? "";
    const cityFaq = (CITY_FAQ[city.slug]?.[lang] ?? CITY_FAQ[city.slug]?.uz) ?? { q: "", a: "" };
    const cityName = city.name[lang] ?? city.name.uz;

    result[lang] = {
      ...base,
      hero: {
        ...base.hero,
        badge: `${cityName}da AI chatbot — Tezcode`,
        subtitle: `${intro}\n\n${base.hero.subtitle}`,
        trust: `${cityName} va butun O'zbekiston • Bepul 30 daqiqa konsultatsiya • To'lov: 30% oldindan`,
      },
      faq: {
        ...base.faq,
        items: [{ q: cityFaq.q, a: cityFaq.a }, ...base.faq.items],
      },
      service: {
        ...base.service,
        description: `${cityName} bizneslari uchun AI chatbot va yordamchi: 24/7 javob, lid saralash, buyurtma qabul qilish. Telegram, Instagram, WhatsApp, veb-sayt. Tezcode.`,
      },
    };
  }

  return result;
}
