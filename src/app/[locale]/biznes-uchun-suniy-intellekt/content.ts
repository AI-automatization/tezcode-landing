import { CONTENT as COUNTRY_CONTENT } from "../ai-ozbekistonda/content";
import type { ServicePageContent, ServicePageCopy } from "@/components/service-page/types";

// Commercial umbrella page for the broad query "biznes uchun sun'iy
// intellekt". The country page remains the entity/location hub; this page
// starts with the buyer's problem and routes visitors to the right solution.
const uz: ServicePageCopy = {
  ...COUNTRY_CONTENT.uz,
  hero: {
    ...COUNTRY_CONTENT.uz.hero,
    badge: "Biznes uchun sun'iy intellekt — Tezcode",
    title1: "Biznesingiz uchun",
    titleAccent: "sun'iy intellekt",
    title2: "yechimlar",
    subtitle:
      "Tezcode bizneslar uchun sun'iy intellekt yechimlarini quradi: AI agent mijoz bilan gaplashadi va ishni bajaradi, chatbot savollarga javob beradi, avtomatizatsiya esa takroriy jarayonlarni qisqartiradi. Toshkentdan O'zbekiston va global loyihalarga xizmat qilamiz. Avval bitta aniq vazifani tanlaymiz, keyin uni CRM, 1C, Telegram yoki saytingizga ulaymiz.",
    ctaSecondary: "Qaysi AI yechim menga mos?",
  },
  capabilities: {
    ...COUNTRY_CONTENT.uz.capabilities,
    title: "Biznesingizga qaysi",
    titleAccent: "AI yechim kerak?",
    subtitle:
      "Sun'iy intellektni shunchaki qo'shmaymiz: avval jarayonni tahlil qilamiz, keyin eng sodda ishlaydigan yechimni tanlaymiz.",
  },
  process: {
    ...COUNTRY_CONTENT.uz.process,
    title: "AI yechimni",
    titleAccent: "4 qadamda tanlaymiz",
    subtitle:
      "Birinchi 30 daqiqa bepul. Sizga kerak bo'lmagan murakkab tizimni taklif qilmaymiz; aniq vazifa, narx va muddat yozma belgilanadi.",
  },
  examples: {
    ...COUNTRY_CONTENT.uz.examples,
    title: "Sun'iy intellekt biznesda",
    titleAccent: "nima qiladi?",
    subtitle:
      "Quyidagi yo'nalishlardan bittasidan boshlash mumkin. Keyin yechimni yangi kanallar va vazifalar bilan kengaytiramiz.",
  },
  faq: {
    ...COUNTRY_CONTENT.uz.faq,
    title: "Biznes uchun AI haqida",
    titleAccent: "savollar",
    subtitle:
      "Biznesingizga sun'iy intellekt joriy qilish, narx, muddat va mos yechim bo'yicha qisqa javoblar.",
    items: [
      {
        q: "Biznesim uchun sun'iy intellekt kerak — nimadan boshlayman?",
        a: "Avval eng ko'p vaqt oladigan bitta jarayonni tanlaymiz: mijozlarga javob berish, buyurtma qabul qilish, hisobot, lidlarni CRMga yozish yoki hujjatlarni qayta ishlash. Bepul konsultatsiyada jarayonni tahlil qilib, AI agent, chatbot yoki avtomatizatsiyadan qaysi biri mosligini aytamiz. Keyin vazifa, integratsiya, narx va muddat yozma taklifda belgilanadi.",
      },
      ...COUNTRY_CONTENT.uz.faq.items,
    ],
  },
  related: {
    ...COUNTRY_CONTENT.uz.related,
    badge: "AI yo'nalishlari",
    title: "Sizga mos AI",
    titleAccent: "xizmatini tanlang",
    subtitle: "Vazifangizga mos AI agent, chatbot, avtomatizatsiya yoki integratsiya yo'nalishini tanlang.",
    links: [
      { href: "/ai-agent", label: "AI agent yaratish", desc: "O'zi qaror qabul qilib, CRM va boshqa tizimlarda ish bajaradigan agent." },
      { href: "/ai-chatbot", label: "AI chatbot yaratish", desc: "Telegram, Instagram, sayt va boshqa kanallarda 24/7 javob beradigan chatbot." },
      { href: "/ai-avtomatizatsiya", label: "AI avtomatlashtirish", desc: "Hisobot, sotuv, buyurtma va hujjat jarayonlarini avtomatlashtirish." },
      { href: "/crm-integratsiya", label: "CRM integratsiya", desc: "AI va mavjud CRM, 1C, Google Sheets hamda to'lov tizimlarini ulash." },
      { href: "/ai-ozbekistonda", label: "O'zbekistondagi AI kompaniya", desc: "Tezcode, xizmat hududi va O'zbekiston bozoridagi AI yo'nalishlari." },
    ],
  },
  service: {
    name: "Biznes uchun sun'iy intellekt — Tezcode",
    description:
      "Biznes uchun sun'iy intellekt yechimlari: AI agentlar, chatbotlar, jarayon avtomatizatsiyasi, AI video analitika va CRM/1C integratsiyasi. Toshkentdan O'zbekiston va global loyihalarga.",
    serviceType: "Sun'iy intellekt yechimlari / AI for business",
  },
};

export const CONTENT: ServicePageContent = { ...COUNTRY_CONTENT, uz };
