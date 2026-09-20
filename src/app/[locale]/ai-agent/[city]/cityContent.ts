import type { ServicePageContent, ServiceLang } from "@/components/service-page/types";
import type { City } from "@/data/cities";
import { CONTENT } from "../content";

// Per-city AI-agent intro blurbs — each describes the city's real business character
// and how a custom AI agent applies. Only factual descriptions, no fabricated metrics.
const AI_AGENT_INTRO: Record<string, Record<ServiceLang, string>> = {
  toshkent: {
    uz: "Toshkent — O'zbekistonning eng yirik savdo va biznes markazi: yirik savdo markazlari, ko'p filialli tarmoqlar, tez rivojlanayotgan startaplar va xizmat ko'rsatish sohalari. Bunday muhitda mijozlar oqimi katta, lekin menejerlar vaqti cheklangan — AI agent sotuv, qo'llab-quvvatlash va lid oqimini avtomatlashtiradi.",
    ru: "Ташкент — крупнейший торговый и деловой центр Узбекистана: большие торговые сети, многофилиальные компании, быстрорастущие стартапы и сфера услуг. В такой среде поток клиентов велик, но время менеджеров ограничено — ИИ-агент автоматизирует продажи, поддержку и обработку лидов.",
    en: "Tashkent is Uzbekistan's largest commercial and business hub — major retail chains, multi-branch companies, fast-growing startups and service businesses. In this environment, customer flow is high but manager time is limited — an AI agent automates sales, support and lead processing.",
    ar: "طشقند أكبر مركز تجاري وأعمال في أوزبكستان — سلاسل تجارة كبرى وشركات متعددة الفروع وشركات ناشئة سريعة النمو وقطاع خدمات. في هذه البيئة، تدفق العملاء كبير لكن وقت المديرين محدود — يعمل وكيل الذكاء الاصطناعي على أتمتة المبيعات والدعم ومعالجة العملاء المحتملين.",
    uk: "Ташкент — найбільший торговий та діловий центр Узбекистану: великі торгові мережі, компанії з філіями, стартапи та сфера послуг. У такому середовищі потік клієнтів великий, але час менеджерів обмежений — AI-агент автоматизує продажі, підтримку та обробку лідів.",
  },
  samarqand: {
    uz: "Samarqand — Ipak yo'lining markazida turistik, mehmondo'stlik va hunarmandchilik bizneslari gullab-yashnaydi. Mavsumiy talab yuqori, Telegram va Instagram orqali keluvchi so'rovlar ko'p — AI agent barcha kanalda 24/7 mijozga javob beradi, bron va buyurtmalarni qabul qiladi.",
    ru: "Самарканд — в центре Шёлкового пути процветают туризм, гостеприимство и ремёсла. Сезонный спрос высок, запросов через Telegram и Instagram много — ИИ-агент отвечает клиентам 24/7 по всем каналам, принимает бронирования и заказы.",
    en: "Samarkand — at the crossroads of the Silk Road, tourism, hospitality and craft businesses thrive. Seasonal demand is high and inquiries via Telegram and Instagram are plentiful — an AI agent responds to customers 24/7 across all channels and accepts bookings and orders.",
    ar: "سمرقند — عند مفترق طريق الحرير، تزدهر أعمال السياحة والضيافة والحرف اليدوية. الطلب الموسمي مرتفع والاستفسارات عبر تيليغرام وإنستغرام كثيرة — يرد وكيل الذكاء الاصطناعي على العملاء على مدار الساعة عبر جميع القنوات ويستقبل الحجوزات والطلبات.",
    uk: "Самарканд — на перехресті Великого шовкового шляху процвітають туризм, гостинність та ремесла. Сезонний попит високий, запитів через Telegram та Instagram багато — AI-агент відповідає клієнтам 24/7 по всіх каналах, приймає бронювання та замовлення.",
  },
};

// Per-city FAQ items (prepended to base FAQ so each city page has a unique question)
const CITY_FAQ: Record<string, Record<ServiceLang, { q: string; a: string }>> = {
  toshkent: {
    uz: {
      q: "Toshkentdagi bizneslar uchun AI agent qancha turadi?",
      a: "Tezcode'da AI agent yaratish $400 dan boshlanadi, asosiy AI agent va tariflar sahifalaridagi kabi. Yakuniy narx vazifa, integratsiyalar va kanallarga bog'liq. Bepul konsultatsiyadan keyin ish hajmi, muddat hamda doimiy foydalanish xarajatlari yozma taklifda aniqlashtiriladi.",
    },
    ru: {
      q: "Сколько стоит ИИ-агент для бизнеса в Ташкенте?",
      a: "Разработка ИИ-агента в Tezcode начинается от $400, как указано на основной странице услуги и в тарифах. Итоговая цена зависит от задачи, интеграций и каналов. После бесплатной консультации уточняем объём, сроки и регулярные расходы в письменном предложении.",
    },
    en: {
      q: "How much does an AI agent cost for businesses in Tashkent?",
      a: "AI agent development at Tezcode starts at $400, as listed on our main service and pricing pages. The final price depends on the task, integrations and channels. After a free consultation, the written proposal clarifies the scope, timeline and recurring operating costs.",
    },
    ar: {
      q: "كم تكلفة وكيل الذكاء الاصطناعي للشركات في طشقند؟",
      a: "يبدأ تطوير وكيل الذكاء الاصطناعي لدى Tezcode من 400 دولار، كما هو موضح في صفحة الخدمة الرئيسية والأسعار. تعتمد التكلفة النهائية على المهمة والتكاملات والقنوات. بعد الاستشارة المجانية، نوضح النطاق والمدة وتكاليف التشغيل المتكررة في عرض مكتوب.",
    },
    uk: {
      q: "Скільки коштує AI-агент для бізнесу в Ташкенті?",
      a: "Розробка AI-агента в Tezcode починається від $400, як зазначено на основній сторінці послуги та в тарифах. Остаточна ціна залежить від завдання, інтеграцій і каналів. Після безкоштовної консультації уточнюємо обсяг, строки та регулярні витрати в письмовій пропозиції.",
    },
  },
  samarqand: {
    uz: {
      q: "Samarqanddagi turizm va restoran biznesi uchun AI agent ishlayaptimi?",
      a: "Ha. Bron qabul qilish, mehmonxona savollari, menyu va narxlar bo'yicha javob berish, Instagram/Telegram orqali lidlarni saralash — AI agent bularning hammasini 24/7 qiladi. Bepul konsultatsiyada o'z holatingizga moslab ko'ramiz.",
    },
    ru: {
      q: "Подходит ли ИИ-агент для туристического и ресторанного бизнеса Самарканда?",
      a: "Да. Приём бронирований, ответы на вопросы об отеле, меню и ценах, квалификация лидов через Instagram/Telegram — ИИ-агент делает всё это 24/7. На бесплатной консультации настроим под ваш случай.",
    },
    en: {
      q: "Does an AI agent work for tourism and restaurant businesses in Samarkand?",
      a: "Yes. Accepting bookings, answering hotel and menu questions, qualifying leads via Instagram/Telegram — an AI agent does all of this 24/7. We'll tailor it to your case on the free consultation.",
    },
    ar: {
      q: "هل يناسب وكيل الذكاء الاصطناعي أعمال السياحة والمطاعم في سمرقند؟",
      a: "نعم. استقبال الحجوزات، والإجابة على أسئلة الفندق والقائمة والأسعار، وتأهيل العملاء المحتملين عبر Instagram/Telegram — يقوم وكيل الذكاء الاصطناعي بكل ذلك على مدار الساعة. سنصمّمه لحالتك في الاستشارة المجانية.",
    },
    uk: {
      q: "Чи підходить AI-агент для туристичного та ресторанного бізнесу Самарканда?",
      a: "Так. Прийом бронювань, відповіді на запитання про готель, меню та ціни, кваліфікація лідів через Instagram/Telegram — AI-агент робить усе це 24/7. На безкоштовній консультації налаштуємо під ваш випадок.",
    },
  },
};

export function buildAiAgentCityContent(city: City): ServicePageContent {
  const result: ServicePageContent = {} as ServicePageContent;
  const langs: ServiceLang[] = ["uz", "ru", "en", "ar", "uk"];

  for (const lang of langs) {
    const base = CONTENT[lang] ?? CONTENT.uz;
    const intro = (AI_AGENT_INTRO[city.slug]?.[lang] ?? AI_AGENT_INTRO[city.slug]?.uz) ?? "";
    const cityFaq = (CITY_FAQ[city.slug]?.[lang] ?? CITY_FAQ[city.slug]?.uz) ?? { q: "", a: "" };
    const cityName = city.name[lang] ?? city.name.uz;

    result[lang] = {
      ...base,
      hero: {
        ...base.hero,
        badge: `${base.hero.badge} · ${cityName}`,
        title2: `— ${cityName}`,
        subtitle: `${intro}\n\n${base.hero.subtitle}`,
      },
      faq: {
        ...base.faq,
        items: [
          { q: cityFaq.q, a: cityFaq.a },
          ...base.faq.items,
        ],
      },
      service: {
        ...base.service,
        description: `${intro} ${base.service.description}`.trim(),
      },
    };
  }

  return result;
}
