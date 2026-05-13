"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type CopyShape = {
  back: string;
  badge: string;
  title: string;
  name: string;
  role: string;
  product: string;
  bannerLabel: string;
  bannerCaption: string;
  metricsTitle: string;
  metrics: { label: string; before: string; after: string; caption: string }[];
  problemTitle: string;
  problemParas: string[];
  solutionTitle: string;
  solutionParas: string[];
  quote1: string;
  quote1Caption: string;
  quote2: string;
  quote2Caption: string;
  timelineTitle: string;
  timeline: { week: string; title: string; desc: string }[];
  stackTitle: string;
  stack: { name: string; role: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  ctaSecondary: string;
};

const COPY: Record<Lang, CopyShape> = {
  uz: {
    back: "← Barcha case study'lar",
    badge: "Case Study · Savdo + Hisobot",
    title:
      "Buxgalterga oyiga 2M so'm to'lash o'rniga RAOS o'zi hisobot chiqaradi",
    name: "Aziz aka",
    role: "Elektronika do'koni egasi · 2 ta filial, Chilonzor",
    product: "RAOS POS + Accounting",
    bannerLabel: "Oylik tejov",
    bannerCaption: "buxgalter ish haqi o'rniga avtomat hisobot",
    metricsTitle: "4 ta asosiy ko'rsatkich",
    metrics: [
      { label: "Hisobot tayyorlash", before: "8 soat", after: "5 daqiqa", caption: "har oy oxirida avtomat eksport" },
      { label: "Soliq deklaratsiyasi", before: "qo'lda", after: "avtomat", caption: "RAOS → Soliq.uz to'g'ridan-to'g'ri" },
      { label: "KASSA APPARATIga eksport", before: "qo'lda 4 soat", after: "real-time", caption: "fiscal printer bilan integratsiya" },
      { label: "Ombor yo'qotish", before: "12%", after: "0.6%", caption: "barcode + serial number tracking (kuzatuv)" },
    ],
    problemTitle: "5 yillik buxgalter — har oyi 2M so'm",
    problemParas: [
      "Aziz aka Chilonzor tumanida 2 ta elektronika do'koni boshqaradi — telefonlar, kompyuter qismlari, kichik maishiy texnika. Tushum kuniga 3-5M so'm, oyiga 100-150M so'm aylanma.",
      "5 yil davomida bitta buxgalter ishlatib keldi — oyiga 2M so'm + soliq (rasmiy 30%, real 25%). Buxgalter har oy 4-5 kun ishlardi: chek to'plash, Excel'ga yozish, Soliq.uz'ga deklaratsiya yuborish, kassa apparati hisoboti.",
      "Asosiy muammo — har inspeksiya kelganda \"tartibsiz hujjat\" deyiladi. Chek bor, Excel boshqa, kassa apparati uchinchi xil raqam. Soliq inspektorlari 2 marta po'st tashlagan, har marta 3-4 hafta tushuntirish kerak bo'lgan.",
      "Buxgalter kasal bo'lsa yoki ta'tilda bo'lsa — hisobot kechikadi. Bir marta deklaratsiyani kechiktirish uchun 850K so'm jarima to'lagan. \"Buxgalter zarur\" deb fikrlagan, lekin haqiqatda buxgalter o'zi ham qo'lda ishlardi — RAOS shu ishni avtomat qiladi.",
    ],
    solutionTitle: "RAOS POS + Accounting moduli",
    solutionParas: [
      "RAOS POS asosiy ish, ustiga Accounting moduli ulandi. Asboblar to'plami: 2 ta POS terminal (har do'kon uchun), barcode scanner, fiscal printer (kassa apparati funktsiyasi bilan rasmiy ro'yxatdan o'tgan).",
      "Birinchi 10 kun — ma'lumot migratsiyasi (ko'chirish). 5 yillik Excel jadvali RAOS'ga import qilindi. 2,800 ta mahsulot katalogi, har bittasiga barcode va serial number (telefonlar uchun majburiy).",
      "Soliq.uz integratsiyasi (ulanish) — RAOS uchun rasmiy sertifikatlangan moduli mavjud. API kalit oldik, RAOS har savdoni real-time soliq xizmatiga yuboradi. Oxirida oy deklaratsiyasi 1 tugma orqali to'liq tayyor.",
      "Kassa apparati to'g'ridan-to'g'ri integratsiya. RAOS chek ochsa, fiscal printer avtomat chiqaradi va Soliq.uz'ga avtomat yuboradi. Avval 4 soatlik qo'lda ish — endi real-time, xato yo'q.",
      "1 oy o'tib buxgalter bilan xayrlashildi (yaxshilikcha, ish topgan boshqa do'konda). Aziz aka oyiga 2M so'm + buxgalter xonasi (250K so'm ijara) + buxgalter texnika (kompyuter, printer) — jami 2.4M so'm tejaydi.",
    ],
    quote1:
      "5 yil buxgalterga ishondim, har oy 2M to'lardim. Endi tushunaman — buxgalter o'zi ham Excel'da qo'lda yozardi. RAOS shu ishni 5 daqiqada avtomat qiladi. Ortga qaytsam, 5 yil avval boshlagan bo'lardim.",
    quote1Caption: "Aziz aka, 2026-yil fevral",
    quote2:
      "Soliq inspektor keldi, deklaratsiyani so'radi. RAOS'dan PDF eksport qildim, bittada hammasi tayyor — chek, ombor, savdo. Inspektor 10 daqiqada ko'rib chiqdi va ketdi. Avval 3 hafta tushuntirish kerak edi.",
    quote2Caption: "Aziz aka, 2026-yil mart",
    timelineTitle: "30 kunlik amalga oshirish",
    timeline: [
      { week: "Hafta 1", title: "Sozlash + 2 do'kon ulash", desc: "2 ta POS terminal, scanner, fiscal printer o'rnatish. Soliq.uz API sertifikat. Tezcode jamoasi har do'konda 2 kun." },
      { week: "Hafta 2", title: "Ma'lumot migratsiyasi", desc: "2,800 mahsulot Excel'dan import. Barcode chiqarish, serial number tracking sozlash. Buxgalter Excel — RAOS'ga ko'chirish." },
      { week: "Hafta 3", title: "Test rejimi + o'qitish", desc: "Buxgalter va kassirlar bilan birga ishlash. Eski va yangi tizim parallel, har kun solishtirish. 100+ savdo test." },
      { week: "Hafta 4", title: "Full launch + buxgalter chiqishi", desc: "RAOS asosiy, buxgalter bilan rasmiy yakun. Birinchi oylik deklaratsiya RAOS orqali — 5 daqiqada Soliq.uz'ga yuborildi." },
    ],
    stackTitle: "Texnologiya stack'i",
    stack: [
      { name: "RAOS POS", role: "Asosiy savdo nuqtasi dasturi" },
      { name: "RAOS Accounting", role: "Avtomat hisobot, deklaratsiya, balans" },
      { name: "Soliq.uz API", role: "Real-time soliq xizmatiga ma'lumot uzatish" },
      { name: "Fiscal Printer", role: "Kassa apparati funksiyasi (rasmiy)" },
      { name: "AI Office · Finance bo'limi", role: "Oylik P&L, kategoriya tahlili" },
      { name: "Telegram Bot", role: "Kunlik tushum + ombor xabarnomalari" },
    ],
    ctaTitle: "Sizning do'koningizga ham buxgaltersiz",
    ctaText:
      "RAOS Accounting moduli + Soliq.uz integratsiya bilan oyiga 1.5-3M so'm tejash mumkin. Demo so'rang, sizning do'koningiz uchun ROI hisoblaymiz.",
    ctaBtn: "Demo so'rash",
    ctaSecondary: "Boshqa case'larni ko'rish",
  },
  ru: {
    back: "← Все кейсы",
    badge: "Кейс · Розница + Учёт",
    title:
      "Вместо 2M сум бухгалтеру — RAOS делает отчёты сам",
    name: "Азиз ака",
    role: "Владелец 2 магазинов электроники · Чиланзар",
    product: "RAOS POS + Accounting",
    bannerLabel: "Месячная экономия",
    bannerCaption: "вместо зарплаты бухгалтера — авто-отчёты",
    metricsTitle: "4 ключевых показателя",
    metrics: [
      { label: "Подготовка отчёта", before: "8 часов", after: "5 минут", caption: "авто-экспорт в конце месяца" },
      { label: "Налоговая декларация", before: "вручную", after: "автомат", caption: "RAOS → Soliq.uz напрямую" },
      { label: "Экспорт в кассу", before: "4 часа вручную", after: "real-time", caption: "интеграция с fiscal printer" },
      { label: "Потери склада", before: "12%", after: "0.6%", caption: "barcode + serial number (отслеживание)" },
    ],
    problemTitle: "5 лет бухгалтера — каждый месяц 2M сум",
    problemParas: [
      "Азиз ака держит 2 магазина электроники в Чиланзаре — телефоны, комплектующие, мелкая бытовая техника. Дневная выручка 3-5M, месячный оборот 100-150M сум.",
      "5 лет — один бухгалтер, 2M сум/мес + налоги. Каждый месяц 4-5 дней работы: чеки в кучу, Excel, декларация в Soliq.uz, отчёт по кассе.",
      "Главная проблема — каждая инспекция говорила \"бумаги в беспорядке\". Чек один, Excel другой, касса третий. Дважды наказывали штрафами, каждый раз 3-4 недели объяснений.",
      "Бухгалтер заболел/в отпуске — отчёт задержан. Однажды штраф 850K сум за просрочку. Думал \"бухгалтер нужен\", но он сам тоже вёл в Excel вручную — RAOS делает это автоматически.",
    ],
    solutionTitle: "RAOS POS + модуль Accounting",
    solutionParas: [
      "RAOS POS как основа, поверх — модуль Accounting. Комплект: 2 POS-терминала (по магазину), сканер, fiscal printer (с функцией кассы, сертифицирован).",
      "Первые 10 дней — миграция данных. 5 лет Excel импортировали в RAOS. 2 800 товаров, каждому barcode + serial number (для телефонов обязательно).",
      "Интеграция с Soliq.uz — у RAOS есть официальный сертифицированный модуль. Получили API-ключ, RAOS отправляет каждую продажу в реальном времени. Декларация в конце месяца — 1 кнопка.",
      "Прямая интеграция с кассой. RAOS открывает чек — fiscal printer печатает и отправляет в Soliq.uz. Раньше 4 часа ручной работы — теперь real-time, без ошибок.",
      "Через месяц попрощались с бухгалтером (по-доброму, нашёл работу в другом магазине). Экономия: 2M зарплата + 250K аренда комнаты + техника = 2.4M/мес.",
    ],
    quote1:
      "5 лет верил бухгалтеру, платил 2M в месяц. Теперь понимаю — он тоже вёл всё в Excel вручную. RAOS делает это за 5 минут. Если бы знал — начал бы 5 лет назад.",
    quote1Caption: "Азиз ака, февраль 2026",
    quote2:
      "Пришёл налоговый инспектор, попросил декларацию. Экспортировал PDF из RAOS — всё готово: чеки, склад, продажи. Инспектор 10 минут посмотрел и ушёл. Раньше 3 недели объяснений.",
    quote2Caption: "Азиз ака, март 2026",
    timelineTitle: "30 дней внедрения",
    timeline: [
      { week: "Неделя 1", title: "Установка + 2 магазина", desc: "2 POS-терминала, сканер, fiscal printer. API-сертификат Soliq.uz. Команда Tezcode 2 дня в каждом магазине." },
      { week: "Неделя 2", title: "Миграция данных", desc: "2 800 товаров из Excel. Печать barcode, настройка serial number. Перенос бухгалтерского Excel в RAOS." },
      { week: "Неделя 3", title: "Тестовый режим + обучение", desc: "Совместная работа с бухгалтером и кассирами. Старая и новая системы параллельно. 100+ тестовых продаж." },
      { week: "Неделя 4", title: "Полный запуск + расставание", desc: "RAOS — основа, прощание с бухгалтером. Первая месячная декларация — 5 минут в Soliq.uz." },
    ],
    stackTitle: "Технологический стек",
    stack: [
      { name: "RAOS POS", role: "Основное ПО кассы" },
      { name: "RAOS Accounting", role: "Авто-отчёты, декларации, баланс" },
      { name: "Soliq.uz API", role: "Real-time передача в налоговую" },
      { name: "Fiscal Printer", role: "Функция кассового аппарата (официально)" },
      { name: "AI Office · Finance", role: "Месячный P&L, аналитика по категориям" },
      { name: "Telegram Bot", role: "Дневные уведомления о выручке/складе" },
    ],
    ctaTitle: "Вашему магазину тоже — без бухгалтера",
    ctaText:
      "Модуль RAOS Accounting + интеграция с Soliq.uz экономят 1.5-3M сум/мес. Запросите демо, посчитаем ROI для вашего магазина.",
    ctaBtn: "Запросить демо",
    ctaSecondary: "Смотреть другие кейсы",
  },
  en: {
    back: "← All case studies",
    badge: "Case Study · Retail + Accounting",
    title:
      "Instead of paying an accountant 2M UZS/month, RAOS files the reports itself",
    name: "Aziz aka",
    role: "Owner of 2 electronics stores · Chilanzar",
    product: "RAOS POS + Accounting",
    bannerLabel: "Monthly savings",
    bannerCaption: "auto-reports replace the accountant's salary",
    metricsTitle: "4 key metrics",
    metrics: [
      { label: "Report preparation", before: "8 hours", after: "5 minutes", caption: "auto export at month-end" },
      { label: "Tax declaration", before: "manual", after: "automatic", caption: "RAOS → Soliq.uz direct" },
      { label: "Fiscal printer export", before: "4 h manual", after: "real-time", caption: "integrated fiscal printer" },
      { label: "Inventory shrinkage", before: "12%", after: "0.6%", caption: "barcode + serial tracking" },
    ],
    problemTitle: "5 years of an accountant — 2M UZS every month",
    problemParas: [
      "Aziz aka runs two electronics stores in Chilanzar — phones, PC parts, small home appliances. Daily revenue 3-5M, monthly turnover 100-150M UZS.",
      "For 5 years one accountant: 2M UZS/month + taxes. 4-5 days every month: collecting receipts, Excel, Soliq.uz declaration, register report.",
      "Main pain — every inspection found \"messy paperwork\". Receipts one number, Excel another, the register a third. Two penalty rounds, 3-4 weeks of explanations each.",
      "If the accountant got sick or took leave — late filing. Once a 850K UZS fine for delay. He thought \"an accountant is essential\", but the accountant himself was doing Excel by hand — RAOS automates exactly that.",
    ],
    solutionTitle: "RAOS POS + Accounting module",
    solutionParas: [
      "RAOS POS as the base, Accounting module on top. Hardware: 2 POS terminals (one per store), scanner, fiscal printer (certified register function).",
      "First 10 days — data migration. 5 years of Excel into RAOS. 2,800 SKUs, each with a barcode + serial number (required for phones).",
      "Soliq.uz integration — RAOS has an officially certified module. We got the API key, RAOS pushes every sale in real time. Month-end declaration: one button.",
      "Direct fiscal printer integration. RAOS opens a receipt, the fiscal printer prints and pushes to Soliq.uz. The 4-hour manual job became real-time, zero errors.",
      "After a month we parted ways with the accountant (kindly, he found work elsewhere). Savings: 2M salary + 250K office rent + equipment = 2.4M/month.",
    ],
    quote1:
      "Five years I trusted the accountant, 2M every month. Now I see — he was just doing Excel by hand too. RAOS does it in 5 minutes. If I'd known, I'd have started 5 years ago.",
    quote1Caption: "Aziz aka, February 2026",
    quote2:
      "A tax inspector came, asked for the declaration. I exported a PDF from RAOS — receipts, inventory, sales, all in one. He spent 10 minutes and left. Used to take 3 weeks of explaining.",
    quote2Caption: "Aziz aka, March 2026",
    timelineTitle: "30-day rollout",
    timeline: [
      { week: "Week 1", title: "Setup + 2 stores online", desc: "2 POS terminals, scanner, fiscal printer. Soliq.uz API certificate. Tezcode team on-site 2 days per store." },
      { week: "Week 2", title: "Data migration", desc: "2,800 products from Excel. Print barcodes, configure serial tracking. Move the accountant's Excel into RAOS." },
      { week: "Week 3", title: "Test mode + training", desc: "Working alongside the accountant and cashiers. Old + new systems in parallel, daily reconciliation. 100+ test sales." },
      { week: "Week 4", title: "Full launch + farewell", desc: "RAOS becomes the source of truth, formal farewell with the accountant. First monthly declaration filed in 5 minutes." },
    ],
    stackTitle: "Tech stack",
    stack: [
      { name: "RAOS POS", role: "Core point-of-sale software" },
      { name: "RAOS Accounting", role: "Auto reports, declarations, balance sheet" },
      { name: "Soliq.uz API", role: "Real-time tax authority sync" },
      { name: "Fiscal Printer", role: "Certified cash-register function" },
      { name: "AI Office · Finance dept", role: "Monthly P&L, category analytics" },
      { name: "Telegram Bot", role: "Daily revenue + inventory alerts" },
    ],
    ctaTitle: "Your store can run without an accountant too",
    ctaText:
      "RAOS Accounting + Soliq.uz integration saves 1.5-3M UZS/month. Request a demo, we'll calculate the ROI for your store.",
    ctaBtn: "Request demo",
    ctaSecondary: "Explore other cases",
  },
  ar: {
    back: "← كل دراسات الحالة",
    badge: "دراسة حالة · تجزئة + محاسبة",
    title: "بدل دفع 2 مليون سوم للمحاسب — RAOS يصدر التقارير بنفسه",
    name: "عزيز أكا",
    role: "مالك متجرَين للإلكترونيات · شيلانزار",
    product: "RAOS POS + Accounting",
    bannerLabel: "التوفير الشهري",
    bannerCaption: "تقارير آلية بدل راتب المحاسب",
    metricsTitle: "4 مؤشرات أساسية",
    metrics: [
      { label: "إعداد التقرير", before: "8 ساعات", after: "5 دقائق", caption: "تصدير آلي نهاية الشهر" },
      { label: "الإقرار الضريبي", before: "يدوي", after: "آلي", caption: "RAOS → Soliq.uz مباشرة" },
      { label: "التصدير للكاشير الضريبي", before: "4 ساعات يدوي", after: "فوري", caption: "تكامل مع fiscal printer" },
      { label: "خسائر المخزون", before: "12٪", after: "0.6٪", caption: "باركود + رقم تسلسلي" },
    ],
    problemTitle: "5 سنوات محاسب — 2 مليون سوم شهريًا",
    problemParas: [
      "عزيز أكا يدير متجرَي إلكترونيات في شيلانزار — هواتف، قطع كمبيوتر، أجهزة منزلية صغيرة. إيراد يومي 3-5 مليون، دوران شهري 100-150 مليون سوم.",
      "5 سنوات محاسب واحد: 2 مليون سوم/شهر + ضرائب. 4-5 أيام كل شهر: جمع الإيصالات، Excel، إقرار Soliq.uz، تقرير الكاشير.",
      "المشكلة — كل تفتيش يكشف \"أوراقًا فوضوية\". الإيصال رقم، Excel رقم، الكاشير رقم ثالث. تم تغريمنا مرتين بشروحات 3-4 أسابيع كل مرة.",
      "إذا مرض المحاسب أو ذهب في إجازة — تأخير. مرة دفع غرامة 850 ألف سوم. كان يظن أن المحاسب ضروري، لكن المحاسب نفسه يستخدم Excel يدويًا — RAOS يفعل ذلك آليًا.",
    ],
    solutionTitle: "RAOS POS + وحدة Accounting",
    solutionParas: [
      "RAOS POS كأساس، فوقه وحدة Accounting. المعدات: محطتا POS، قارئ، fiscal printer (وظيفة كاشير معتمدة).",
      "أول 10 أيام — ترحيل البيانات. 5 سنوات من Excel إلى RAOS. 2,800 منتج، باركود ورقم تسلسلي لكل واحد.",
      "تكامل Soliq.uz — RAOS لديه وحدة معتمدة رسميًا. مفتاح API، إرسال كل بيع لحظيًا. الإقرار الشهري: زر واحد.",
      "تكامل مباشر مع fiscal printer. RAOS يفتح الإيصال، الطابعة تطبع وترسل تلقائيًا. كان 4 ساعات يدوي — الآن فوري بلا أخطاء.",
      "بعد شهر افترقنا عن المحاسب وديًا. التوفير: 2 مليون راتب + 250 ألف إيجار غرفة + معدات = 2.4 مليون شهريًا.",
    ],
    quote1:
      "5 سنوات وثقت في المحاسب، 2 مليون كل شهر. الآن أفهم — كان يستخدم Excel يدويًا. RAOS يفعل ذلك في 5 دقائق. لو علمت لبدأت قبل 5 سنوات.",
    quote1Caption: "عزيز أكا، فبراير 2026",
    quote2:
      "جاء مفتش الضرائب وطلب الإقرار. صدّرت PDF من RAOS — كل شيء جاهز: إيصالات، مخزون، مبيعات. نظر 10 دقائق وذهب. كنا نحتاج 3 أسابيع شرح.",
    quote2Caption: "عزيز أكا، مارس 2026",
    timelineTitle: "تطبيق خلال 30 يومًا",
    timeline: [
      { week: "الأسبوع 1", title: "تركيب + متجران", desc: "محطتا POS، قارئ، fiscal printer. شهادة Soliq.uz API. فريق Tezcode يومان في كل متجر." },
      { week: "الأسبوع 2", title: "ترحيل البيانات", desc: "2,800 منتج من Excel. طباعة الباركود، ضبط الأرقام التسلسلية. نقل Excel المحاسبي إلى RAOS." },
      { week: "الأسبوع 3", title: "وضع تجريبي + تدريب", desc: "العمل مع المحاسب والكاشيرات. النظامان متوازيان مع مطابقة يومية. أكثر من 100 عملية بيع تجريبية." },
      { week: "الأسبوع 4", title: "الإطلاق الكامل + الوداع", desc: "RAOS يصبح المصدر، وداع رسمي للمحاسب. أول إقرار شهري — 5 دقائق إلى Soliq.uz." },
    ],
    stackTitle: "الحزمة التقنية",
    stack: [
      { name: "RAOS POS", role: "البرنامج الأساسي للكاشير" },
      { name: "RAOS Accounting", role: "تقارير آلية، إقرارات، ميزانية" },
      { name: "Soliq.uz API", role: "إرسال فوري إلى الضرائب" },
      { name: "Fiscal Printer", role: "وظيفة كاشير ضريبي معتمدة" },
      { name: "AI Office · Finance", role: "P&L شهري، تحليل بالفئات" },
      { name: "Telegram Bot", role: "إشعارات يومية للإيراد/المخزون" },
    ],
    ctaTitle: "متجركم أيضًا — بلا محاسب",
    ctaText:
      "وحدة RAOS Accounting + تكامل Soliq.uz توفر 1.5-3 مليون سوم شهريًا. اطلب عرضًا ونحسب ROI لمتجركم.",
    ctaBtn: "اطلب عرضًا",
    ctaSecondary: "تصفّح كل الحالات",
  },
  uk: {
    back: "← Усі кейси",
    badge: "Кейс · Роздріб + Облік",
    title: "Замість 2M сум бухгалтеру — RAOS сам робить звіти",
    name: "Азіз ака",
    role: "Власник 2 магазинів електроніки · Чиланзар",
    product: "RAOS POS + Accounting",
    bannerLabel: "Місячна економія",
    bannerCaption: "автозвіти замість зарплати бухгалтера",
    metricsTitle: "4 ключові показники",
    metrics: [
      { label: "Підготовка звіту", before: "8 годин", after: "5 хвилин", caption: "авто-експорт наприкінці місяця" },
      { label: "Податкова декларація", before: "вручну", after: "автомат", caption: "RAOS → Soliq.uz напряму" },
      { label: "Експорт на касу", before: "4 год вручну", after: "real-time", caption: "інтеграція з fiscal printer" },
      { label: "Втрати складу", before: "12%", after: "0.6%", caption: "barcode + serial відстеження" },
    ],
    problemTitle: "5 років бухгалтера — щомісяця 2M сум",
    problemParas: [
      "Азіз ака тримає 2 магазини електроніки в Чиланзарі — телефони, комплектуючі, дрібна побутова техніка. Денний виторг 3-5M, місячний оборот 100-150M сум.",
      "5 років — один бухгалтер, 2M сум/міс + податки. Щомісяця 4-5 днів роботи: чеки у купу, Excel, декларація в Soliq.uz, звіт по касі.",
      "Головна проблема — кожна інспекція знаходила \"папери у безладі\". Чек одне, Excel інше, каса третє. Двічі штрафували, кожного разу 3-4 тижні пояснень.",
      "Бухгалтер захворів чи у відпустці — звіт затримано. Одного разу штраф 850K сум. Думав \"бухгалтер потрібен\", але він теж вів усе в Excel вручну — RAOS робить це автоматично.",
    ],
    solutionTitle: "RAOS POS + модуль Accounting",
    solutionParas: [
      "RAOS POS як основа, зверху — модуль Accounting. Комплект: 2 POS-термінали (по магазину), сканер, fiscal printer (сертифікована функція каси).",
      "Перші 10 днів — міграція даних. 5 років Excel імпортовано до RAOS. 2 800 товарів, кожному barcode + serial number.",
      "Інтеграція з Soliq.uz — у RAOS є офіційно сертифікований модуль. Отримали API-ключ, RAOS надсилає кожен продаж у реальному часі. Місячна декларація — 1 кнопка.",
      "Пряма інтеграція з касою. RAOS відкриває чек — fiscal printer друкує і надсилає в Soliq.uz. Раніше 4 години — тепер real-time, без помилок.",
      "Через місяць попрощалися з бухгалтером (по-доброму). Економія: 2M зарплата + 250K оренда кімнати + техніка = 2.4M/міс.",
    ],
    quote1:
      "5 років вірив бухгалтеру, 2M щомісяця. Тепер розумію — він теж вів усе в Excel вручну. RAOS робить це за 5 хвилин. Якби знав — почав би 5 років тому.",
    quote1Caption: "Азіз ака, лютий 2026",
    quote2:
      "Прийшов податковий інспектор, попросив декларацію. Експортував PDF з RAOS — усе готове. Інспектор 10 хвилин подивився і пішов. Раніше 3 тижні пояснень.",
    quote2Caption: "Азіз ака, березень 2026",
    timelineTitle: "30 днів впровадження",
    timeline: [
      { week: "Тиждень 1", title: "Встановлення + 2 магазини", desc: "2 POS-термінали, сканер, fiscal printer. API-сертифікат Soliq.uz. Команда Tezcode 2 дні в кожному магазині." },
      { week: "Тиждень 2", title: "Міграція даних", desc: "2 800 товарів з Excel. Друк barcode, налаштування serial number. Перенос бухгалтерського Excel у RAOS." },
      { week: "Тиждень 3", title: "Тестовий режим + навчання", desc: "Спільна робота з бухгалтером і касирами. Старий і новий паралельно. 100+ тестових продажів." },
      { week: "Тиждень 4", title: "Повний запуск + прощання", desc: "RAOS — основа, прощання з бухгалтером. Перша місячна декларація — 5 хвилин у Soliq.uz." },
    ],
    stackTitle: "Технологічний стек",
    stack: [
      { name: "RAOS POS", role: "Основне ПЗ каси" },
      { name: "RAOS Accounting", role: "Автозвіти, декларації, баланс" },
      { name: "Soliq.uz API", role: "Real-time передача до податкової" },
      { name: "Fiscal Printer", role: "Функція касового апарата (офіційно)" },
      { name: "AI Office · Finance", role: "Місячний P&L, аналітика категорій" },
      { name: "Telegram Bot", role: "Денні сповіщення виторгу/складу" },
    ],
    ctaTitle: "Вашому магазину теж — без бухгалтера",
    ctaText:
      "Модуль RAOS Accounting + інтеграція Soliq.uz економлять 1.5-3M сум/міс. Запросіть демо, порахуємо ROI для вашого магазину.",
    ctaBtn: "Запросити демо",
    ctaSecondary: "Дивитись інші кейси",
  },
};

export function AzizCaseClient() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

  return (
    <main className="relative min-h-screen bg-[var(--tc-ink)] pt-24 pb-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-20 right-0 w-[600px] h-[600px] opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--tc-blue) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal>
          <Link
            href="/case-studies"
            className="inline-block text-sm text-[var(--tc-text-muted)] hover:text-[var(--tc-blue)] transition-colors mb-8"
          >
            {t.back}
          </Link>
        </Reveal>

        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-blue)]/10 border border-[var(--tc-blue)]/30 text-xs font-500 text-[var(--tc-blue)] mb-6 uppercase tracking-[0.3em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-blue)] animate-pulse" />
            {t.badge}
          </div>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-700 mb-8 tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h1>
          <div className="flex items-center gap-4 mb-10">
            <div className="relative shrink-0 w-16 h-16 rounded-full overflow-hidden ring-2 ring-[var(--tc-blue)]/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/customers/customer-2.jpg"
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div
                className="text-white font-700 text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.name}
              </div>
              <div className="text-sm text-[var(--tc-text-muted)]">{t.role}</div>
              <div className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-500 bg-[var(--tc-blue)]/10 text-[var(--tc-blue)]">
                {t.product}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Key banner — red/blue accent since it's about COST cut */}
        <Reveal>
          <div className="relative mb-16 p-8 md:p-10 rounded-[var(--tc-radius-xl)] border border-[var(--tc-blue)]/40 bg-gradient-to-br from-[var(--tc-blue)]/10 to-[var(--tc-surface-2)] overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--tc-blue)] opacity-10 blur-3xl"
            />
            <div className="relative">
              <div className="text-xs text-[var(--tc-blue)] uppercase tracking-[0.3em] mb-2">
                {t.bannerLabel}
              </div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span
                  className="text-5xl md:text-7xl font-800 text-[var(--tc-blue)] tabular-nums"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  −<CountUp value={2000000} />
                </span>
                <span className="text-lg text-[var(--tc-text-secondary)]">so'm/oy</span>
              </div>
              <div className="mt-3 text-sm text-[var(--tc-text-muted)]">
                {t.bannerCaption}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-700 text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.metricsTitle}
          </h2>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16" stagger={0.08}>
          {t.metrics.map((m, i) => (
            <RevealItem key={i}>
              <div className="p-6 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)] h-full">
                <div className="text-xs text-[var(--tc-text-muted)] uppercase tracking-widest mb-3">
                  {m.label}
                </div>
                <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                  <span className="text-sm text-[var(--tc-text-muted)] line-through tabular-nums">
                    {m.before}
                  </span>
                  <span className="text-[var(--tc-text-muted)]">→</span>
                  <span
                    className="text-2xl md:text-3xl font-700 text-[var(--tc-blue)] tabular-nums"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {m.after}
                  </span>
                </div>
                <div className="text-xs text-[var(--tc-text-secondary)] leading-relaxed">
                  {m.caption}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-700 text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.problemTitle}
          </h2>
          <div className="space-y-4 mb-16">
            {t.problemParas.map((p, i) => (
              <p
                key={i}
                className="text-[var(--tc-text-secondary)] text-base md:text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <blockquote className="relative my-16 p-8 md:p-10 rounded-[var(--tc-radius-xl)] border border-[var(--tc-blue)]/30 bg-[var(--tc-surface-2)]">
            <div className="absolute -top-4 left-8 text-5xl text-[var(--tc-blue)] leading-none font-700 select-none">
              "
            </div>
            <p
              className="text-xl md:text-2xl text-white leading-relaxed font-500 italic mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.quote1}
            </p>
            <footer className="text-xs text-[var(--tc-text-muted)] uppercase tracking-[0.2em]">
              — {t.quote1Caption}
            </footer>
          </blockquote>
        </Reveal>

        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-700 text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.solutionTitle}
          </h2>
          <div className="space-y-4 mb-16">
            {t.solutionParas.map((p, i) => (
              <p
                key={i}
                className="text-[var(--tc-text-secondary)] text-base md:text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <blockquote className="relative my-16 p-8 md:p-10 rounded-[var(--tc-radius-xl)] border border-[var(--tc-gold)]/30 bg-[var(--tc-surface-2)]">
            <div className="absolute -top-4 left-8 text-5xl text-[var(--tc-gold)] leading-none font-700 select-none">
              "
            </div>
            <p
              className="text-xl md:text-2xl text-white leading-relaxed font-500 italic mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.quote2}
            </p>
            <footer className="text-xs text-[var(--tc-text-muted)] uppercase tracking-[0.2em]">
              — {t.quote2Caption}
            </footer>
          </blockquote>
        </Reveal>

        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-700 text-white mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.timelineTitle}
          </h2>
        </Reveal>
        <RevealStagger className="space-y-5 mb-16" stagger={0.1}>
          {t.timeline.map((step, i) => (
            <RevealItem key={i}>
              <div className="relative pl-8 pb-2 border-l border-[var(--tc-border)]">
                <span className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--tc-blue)] tc-glow-blue" />
                <div className="text-xs text-[var(--tc-blue)] uppercase tracking-[0.2em] mb-1">
                  {step.week}
                </div>
                <h3
                  className="text-lg md:text-xl font-700 text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[var(--tc-text-secondary)] text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-700 text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.stackTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {t.stack.map((s, i) => (
              <div
                key={i}
                className="p-5 rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-2)]"
              >
                <div
                  className="font-700 text-white text-base mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.name}
                </div>
                <div className="text-sm text-[var(--tc-text-muted)] leading-relaxed">
                  {s.role}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mt-20 p-10 md:p-14 rounded-[var(--tc-radius-xl)] border border-[var(--tc-gold)]/40 bg-gradient-to-br from-[var(--tc-surface-2)] to-[var(--tc-surface-1)] text-center overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--tc-gold)] opacity-10 blur-3xl"
            />
            <h2
              className="text-2xl md:text-4xl font-700 mb-4 relative"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.ctaTitle}
            </h2>
            <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-2xl mx-auto mb-8 relative">
              {t.ctaText}
            </p>
            <div className="flex flex-wrap justify-center gap-3 relative">
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block px-8 py-3.5 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] text-white font-600 text-sm tc-glow-blue"
              >
                {t.ctaBtn}
              </motion.a>
              <Link
                href="/case-studies"
                className="inline-block px-8 py-3.5 rounded-[var(--tc-radius-md)] border border-[var(--tc-border-bright)] text-[var(--tc-text-primary)] font-600 text-sm hover:border-[var(--tc-gold)] transition-colors"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
