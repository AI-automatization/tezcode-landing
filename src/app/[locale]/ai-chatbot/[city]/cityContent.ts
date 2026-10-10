import type { ServicePageContent, ServiceLang } from "@/components/service-page/types";
import type { City } from "@/data/cities";
import { CONTENT } from "../content";
import { cityOfficeFaq, cityTrust, ruLocative, ukPrep } from "@/data/cityLocal";

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
      a: "AI chatbot yaratish $339 dan boshlanadi. CRM yoki 1C integratsiyasi qo'shilsa narx oshadi — aniq summani bepul konsultatsiyadan keyin yozma taklifda beramiz. To'lov: 30% oldindan.",
    },
    ru: {
      q: "Сколько стоит ИИ-чатбот для бизнеса в Ташкенте?",
      a: "Разработка ИИ-чат-бота стоит от $339. С интеграцией CRM или 1С цена выше — точную сумму фиксируем в письменном предложении после бесплатной консультации. Оплата: 30% предоплата.",
    },
    en: {
      q: "How much does an AI chatbot cost for businesses in Tashkent?",
      a: "An AI chatbot starts from $339. CRM or 1C integration raises the price — we confirm the exact amount in a written proposal after the free consultation. Payment: 30% upfront.",
    },
    ar: {
      q: "كم تكلفة شات بوت الذكاء الاصطناعي للشركات في طشقند؟",
      a: "يبدأ شات بوت الذكاء الاصطناعي من 339 دولاراً. يرتفع السعر مع تكامل CRM أو 1C — نحدد المبلغ الدقيق في عرض مكتوب بعد الاستشارة المجانية. الدفع: 30% مقدماً.",
    },
    uk: {
      q: "Скільки коштує AI-чатбот для бізнесу в Ташкенті?",
      a: "AI-чатбот коштує від $339. З інтеграцією CRM або 1С ціна вища — точну суму фіксуємо в письмовій пропозиції після безкоштовної консультації. Оплата: 30% передоплата.",
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
    const SERVICE_DESCRIPTION: Record<ServiceLang, string> = {
      uz: `${cityName} bizneslari uchun AI chatbot va yordamchi: 24/7 javob, lid saralash, buyurtma qabul qilish. Telegram, Instagram, WhatsApp, veb-sayt. Tezcode.`,
      ru: `ИИ-чат-бот для бизнеса ${ruLocative(city)}: ответы 24/7, квалификация лидов, приём заказов. Telegram, Instagram, WhatsApp, сайт. Tezcode.`,
      en: `AI chatbot for businesses in ${cityName}: 24/7 replies, lead qualification, order intake. Telegram, Instagram, WhatsApp, website. Tezcode.`,
      ar: `شات بوت ذكاء اصطناعي للشركات في ${cityName}: ردود على مدار الساعة، تأهيل العملاء، استقبال الطلبات. تيليغرام، إنستغرام، واتساب، موقع. Tezcode.`,
      uk: `AI-чатбот для бізнесу в ${ukPrep(cityName)}: відповіді 24/7, кваліфікація лідів, приймання замовлень. Telegram, Instagram, WhatsApp, сайт. Tezcode.`,
    };

    result[lang] = {
      ...base,
      hero: {
        ...base.hero,
        ...(lang === "ru"
          ? { badge: `Разработка чат-ботов — ${cityName}`, title1: "Чат-бот для бизнеса", titleAccent: ruLocative(city), title2: "" }
          : { badge: `${cityName}da AI chatbot — Tezcode` }),
        ...(lang === "uz"
          ? { badge: `Chatbot yaratish — ${cityName}`, title1: `${cityName}da biznes uchun`, titleAccent: "chatbot yaratish", title2: "" }
          : {}),
        subtitle: `${intro}\n\n${base.hero.subtitle}`,
        trust: cityTrust(city, lang),
      },
      faq: {
        ...base.faq,
        items: [{ q: cityFaq.q, a: cityFaq.a }, ...cityOfficeFaq(city, lang), ...base.faq.items],
      },
      service: {
        ...base.service,
        description: SERVICE_DESCRIPTION[lang],
      },
    };
  }

  return result;
}
