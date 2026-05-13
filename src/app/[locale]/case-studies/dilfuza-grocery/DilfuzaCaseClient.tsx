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
    badge: "Case Study · Savdo",
    title:
      "Oziq-ovqat do'koni 30 kun ichida POS'ga o'tdi va oyiga 800K so'm tejaydi",
    name: "Dilfuza X.",
    role: "Oziq-ovqat do'koni egasi · Yunusobod, Toshkent",
    product: "RAOS POS",
    bannerLabel: "Oylik tejov",
    bannerCaption: "kassa xato + ombor + xodim vaqti",
    metricsTitle: "4 ta asosiy ko'rsatkich",
    metrics: [
      {
        label: "Kassa xatosi",
        before: "95%",
        after: "0.5%",
        caption: "har 100 chekdan 1 ta xato qolmadi",
      },
      {
        label: "Ombor sanash",
        before: "4 soat",
        after: "15 daqiqa",
        caption: "barcode scanner orqali",
      },
      {
        label: "Mijoz sodiqlik (qaytish)",
        before: "—",
        after: "+18%",
        caption: "loyalty program (sadoqat dasturi)",
      },
      {
        label: "Ish vaqti",
        before: "12 soat",
        after: "10 soat",
        caption: "kuniga 2 soat tejaldi",
      },
    ],
    problemTitle: "Qanday muammo bor edi",
    problemParas: [
      "Dilfuza opa Yunusobod tumanida o'rta kattalikdagi oziq-ovqat do'kon olib boradi — kuniga taxminan 200-250 chek. Boshlanishida hammasi Excel jadvalida edi: kunlik tushum, ombor qoldig'i, yetkazib beruvchi to'lovi — barchasi qo'lda yozilardi.",
      "Asosiy muammo — kassirlar smenadan oldin va keyin hisob qaynatishi. Kassa apparati alohida, Excel alohida — har kuni oxirida 2-3 soat \"raqam to'g'rilash\" ketardi. Bir oyda 1.2-1.5M so'm yetishmovchilik chiqar edi (Excel chaos — chalkash jadval).",
      "Ombor (sklad) holati umuman noma'lum: qaysi mahsulot tugagan, qaysisi qotib qolgan — bilib bo'lmasdi. Yetkazib beruvchi keldi deganda, har gal kerakli mahsulot ro'yxati telefon orqali tuziladi va ko'pincha noto'g'ri bo'lardi.",
      "Mijozlar bilan ham aloqa yo'q edi. Doimiy mijoz kim, qaysi mahsulot ko'p sotiladi, qaysi soat eng band — hech qanday ma'lumot yo'q. \"Oddiygina ishlayapmiz\" — Dilfuza opaning so'zlari.",
    ],
    solutionTitle: "Tezcode bilan yechim",
    solutionParas: [
      "RAOS POS dasturini tanladik — har do'kon uchun mo'ljallangan, oddiy interface (ko'rinish), kassir 1 kunda o'rganadigan. Asboblar to'plami: kassa apparati, barcode scanner (chiziq-kod o'qigich), termal printer (chek bosish uchun).",
      "Birinchi hafta — sozlash. Tezcode jamoasi do'konga keldi, mahsulot bazasi (3,400 ta SKU) Excel'dan RAOS'ga import qilindi. Har mahsulotga barcode biriktirildi (yangilari uchun printer chiqarib berdi).",
      "Ikkinchi hafta — kassir o'qitish. 3 ta kassir, har biri 4 soatlik dars: chek ochish, qaytarish, kassa yopish, hisobot. Real holatlarda mashq qildirildi.",
      "Uchinchi hafta — launch (ishga tushirish). Kuniga 2 soat support agenti (yordamchi) online turdi — har qanday savol darhol javob oldi. Telegram bot orqali kunlik tushum hisoboti Dilfuza opaga avtomat yuborildi.",
      "To'rtinchi hafta — optimizatsiya. AI Office Sales bo'limi ulandi: kunlik tushum tahlili, eng ko'p sotilgan mahsulot, eng tezda tugaydigan ombor pozitsiyasi — barchasi avtomat hisobot bo'lib keladi.",
    ],
    quote1:
      "Avval har kuni kechqurun 2 soat \"raqam to'g'rilash\" qilardim. Endi telefonimda Telegram'da kunlik hisobot keladi — 1 daqiqada hammasini ko'raman. Bu ozodlik!",
    quote1Caption: "Dilfuza X., 2026-yil mart",
    quote2:
      "Eng yoqqani — ombor avtomat sanaydi. Avval qaysi mahsulot tugagan bilmasdim, mijoz kelib so'rasa noqulay bo'lardi. Endi ertalab telefonni ochaman, 6 ta mahsulot ozaygan — buyurtma qilaman tamom.",
    quote2Caption: "Dilfuza X., 2026-yil aprel",
    timelineTitle: "30 kunlik amalga oshirish",
    timeline: [
      {
        week: "Hafta 1",
        title: "Sozlash + ma'lumot import",
        desc: "Asboblar o'rnatish (POS terminal, scanner, printer). 3,400 ta mahsulot Excel'dan RAOS'ga import. Barcode chiqarish va biriktirish.",
      },
      {
        week: "Hafta 2",
        title: "Kassir o'qitish",
        desc: "3 ta kassir × 4 soatlik dars. Real chek ochish, qaytarish, kassa yopish, kunlik hisobot. Test rejimida 100+ amaliyot.",
      },
      {
        week: "Hafta 3",
        title: "Launch (ishga tushirish)",
        desc: "Birinchi haqiqiy kun. Support agent 8 soat online. Telegram bot orqali kunlik tushum hisoboti Dilfuza opaga avtomat.",
      },
      {
        week: "Hafta 4",
        title: "Optimizatsiya + AI ulanish",
        desc: "AI Office Sales bo'limi ulandi: top-10 mahsulot, ombor avtomat ogohlantirish, mijoz qaytish tahlili. Loyalty program (sadoqat dasturi) ishga tushdi.",
      },
    ],
    stackTitle: "Texnologiya stack'i",
    stack: [
      { name: "RAOS POS", role: "Asosiy savdo nuqtasi dasturi (kassa)" },
      { name: "AI Office · Sales bo'limi", role: "Tushum tahlili, ombor prognoz" },
      { name: "Telegram Bot", role: "Kunlik avtomat hisobot Dilfuza opaga" },
      { name: "Barcode Scanner + Printer", role: "Mahsulot identifikatsiyasi" },
    ],
    ctaTitle: "Sizning do'koningizga ham yordam bera olamiz",
    ctaText:
      "30 kun — Excel chaos'dan tartibli POS'ga. Demo so'rang, biz sizning do'koningiz uchun tahlil tayyorlaymiz.",
    ctaBtn: "Demo so'rash",
    ctaSecondary: "Boshqa case'larni ko'rish",
  },
  ru: {
    back: "← Все кейсы",
    badge: "Кейс · Розница",
    title:
      "Продуктовый магазин перешёл на POS за 30 дней и экономит 800K сум/месяц",
    name: "Дилфуза Х.",
    role: "Владелица продуктового магазина · Юнусабад, Ташкент",
    product: "RAOS POS",
    bannerLabel: "Месячная экономия",
    bannerCaption: "ошибки кассы + склад + время сотрудников",
    metricsTitle: "4 ключевых показателя",
    metrics: [
      { label: "Ошибки кассы", before: "95%", after: "0.5%", caption: "1 ошибка на 100 чеков — норма" },
      { label: "Инвентаризация", before: "4 часа", after: "15 минут", caption: "через barcode-сканер" },
      { label: "Лояльность (возврат клиента)", before: "—", after: "+18%", caption: "программа лояльности" },
      { label: "Рабочее время", before: "12 ч", after: "10 ч", caption: "−2 часа в день" },
    ],
    problemTitle: "В чём была проблема",
    problemParas: [
      "Дилфуза опа держит магазин среднего размера в Юнусабаде — около 200-250 чеков в день. В начале всё было в Excel-таблицах: дневная выручка, складские остатки, оплаты поставщикам — всё вручную.",
      "Главная проблема — кассиры сводили цифры до и после смены. Касса отдельно, Excel отдельно — каждый вечер уходило 2-3 часа на \"подгонку чисел\". В месяц выходила недостача 1.2-1.5M сум (хаос Excel).",
      "Состояние склада совсем неизвестно: какой товар закончился, какой залежался — невозможно понять. Когда приезжал поставщик, список составлялся по телефону и часто оказывался неверным.",
      "С клиентами тоже не было связи. Кто постоянный покупатель, какой товар уходит лучше, какой час самый загруженный — никаких данных. \"Просто работаем\" — слова Дилфузы опа.",
    ],
    solutionTitle: "Решение с Tezcode",
    solutionParas: [
      "Выбрали RAOS POS — заточенный под магазины, простой интерфейс, кассир осваивает за 1 день. Комплект: POS-терминал, barcode-сканер, термопринтер чеков.",
      "Первая неделя — установка. Команда Tezcode приехала, импортировали базу товаров (3 400 SKU) из Excel в RAOS. Каждому товару привязали barcode (для новых — распечатали).",
      "Вторая неделя — обучение кассиров. 3 кассира по 4 часа каждый: открытие чека, возврат, закрытие смены, отчёт. Тренировались на реальных сценариях.",
      "Третья неделя — запуск. Агент поддержки 8 часов был онлайн каждый день. Telegram-бот отправлял дневную выручку Дилфузе опа автоматически.",
      "Четвёртая неделя — оптимизация. Подключили отдел Sales в AI Office: аналитика выручки, топ-товары, прогноз склада — всё автоматически.",
    ],
    quote1:
      "Раньше каждый вечер 2 часа \"подгоняла цифры\". Теперь телефон, Telegram, отчёт — 1 минута и всё понятно. Это свобода!",
    quote1Caption: "Дилфуза Х., март 2026",
    quote2:
      "Больше всего нравится — склад сам считает. Раньше не знала, какой товар закончился — было неудобно перед клиентами. Теперь утром открываю телефон, 6 товаров заканчиваются — заказала, готово.",
    quote2Caption: "Дилфуза Х., апрель 2026",
    timelineTitle: "30 дней внедрения",
    timeline: [
      { week: "Неделя 1", title: "Установка + импорт данных", desc: "Установка оборудования (POS, сканер, принтер). Импорт 3 400 товаров из Excel в RAOS. Печать и привязка barcode." },
      { week: "Неделя 2", title: "Обучение кассиров", desc: "3 кассира × 4 часа. Реальные сценарии: чек, возврат, закрытие смены, отчёт. 100+ операций в тестовом режиме." },
      { week: "Неделя 3", title: "Запуск", desc: "Первый реальный день. Агент поддержки 8 часов онлайн. Telegram-бот отправляет дневную выручку автоматически." },
      { week: "Неделя 4", title: "Оптимизация + AI", desc: "Подключили AI Office Sales: топ-10 товаров, автоалерты склада, аналитика возврата клиентов. Запущена программа лояльности." },
    ],
    stackTitle: "Технологический стек",
    stack: [
      { name: "RAOS POS", role: "Основное ПО кассы" },
      { name: "AI Office · Отдел Sales", role: "Аналитика выручки, прогноз склада" },
      { name: "Telegram Bot", role: "Ежедневный авто-отчёт Дилфузе опа" },
      { name: "Barcode Scanner + Printer", role: "Идентификация товаров" },
    ],
    ctaTitle: "Вашему магазину тоже поможем",
    ctaText: "30 дней — от Excel-хаоса к упорядоченному POS. Запросите демо, подготовим разбор для вашего магазина.",
    ctaBtn: "Запросить демо",
    ctaSecondary: "Смотреть другие кейсы",
  },
  en: {
    back: "← All case studies",
    badge: "Case Study · Retail",
    title:
      "Grocery store moved from Excel to POS in 30 days and saves 800K UZS/month",
    name: "Dilfuza X.",
    role: "Grocery store owner · Yunusabad, Tashkent",
    product: "RAOS POS",
    bannerLabel: "Monthly savings",
    bannerCaption: "register errors + inventory + staff time",
    metricsTitle: "4 key metrics",
    metrics: [
      { label: "Register errors", before: "95%", after: "0.5%", caption: "barely 1 error per 100 receipts" },
      { label: "Inventory count", before: "4 hours", after: "15 minutes", caption: "via barcode scanner" },
      { label: "Customer return rate", before: "—", after: "+18%", caption: "loyalty program" },
      { label: "Working hours", before: "12 h", after: "10 h", caption: "−2 hours per day" },
    ],
    problemTitle: "The problem before",
    problemParas: [
      "Dilfuza runs a mid-size grocery store in Yunusabad with ~200-250 receipts per day. Everything started in Excel: daily revenue, inventory, supplier payments — all by hand.",
      "Main pain: cashiers reconciling cash before and after each shift. Cash register on one side, Excel on the other — 2-3 hours every evening just \"matching numbers\". Monthly shortage averaged 1.2-1.5M UZS (Excel chaos).",
      "Stock visibility was zero. Which product was out, which was sitting forever — no way to tell. Supplier visits relied on phone-call lists that were often wrong.",
      "No customer relationship either. Who's a regular, what sells well, which hour is busiest — no data. \"We just work\" — Dilfuza's words.",
    ],
    solutionTitle: "Tezcode solution",
    solutionParas: [
      "We chose RAOS POS — built for retail, simple UI, a cashier learns it in 1 day. Hardware kit: POS terminal, barcode scanner, thermal receipt printer.",
      "Week 1 — setup. Tezcode team came to the store, imported 3,400 SKUs from Excel into RAOS. Every product got a barcode (printed on the spot for new ones).",
      "Week 2 — cashier training. 3 cashiers × 4 hours each: opening a receipt, returns, closing shift, daily report. Trained on real scenarios.",
      "Week 3 — launch. A support agent stayed online 8 hours/day for instant questions. A Telegram bot auto-sent the daily revenue report to Dilfuza.",
      "Week 4 — optimization. AI Office Sales department plugged in: revenue analytics, top sellers, stock forecast — all automatic.",
    ],
    quote1:
      "Before, I spent 2 hours every evening \"matching numbers\". Now my Telegram pings me the daily report — 1 minute, all clear. That's freedom!",
    quote1Caption: "Dilfuza X., March 2026",
    quote2:
      "My favorite — stock counts itself. Before, I didn't know what was out and felt embarrassed in front of customers. Now I open my phone in the morning, 6 products are running low — one order and done.",
    quote2Caption: "Dilfuza X., April 2026",
    timelineTitle: "30-day rollout",
    timeline: [
      { week: "Week 1", title: "Setup + data import", desc: "Install POS, scanner, printer. Import 3,400 SKUs from Excel to RAOS. Print and attach barcodes." },
      { week: "Week 2", title: "Cashier training", desc: "3 cashiers × 4 hours each. Real scenarios: receipt, return, shift close, daily report. 100+ ops in test mode." },
      { week: "Week 3", title: "Launch", desc: "First real day. Support agent 8 hours online. Telegram bot delivers daily revenue automatically." },
      { week: "Week 4", title: "Optimization + AI", desc: "AI Office Sales connected: top-10 sellers, auto stock alerts, return-customer analytics. Loyalty program live." },
    ],
    stackTitle: "Tech stack",
    stack: [
      { name: "RAOS POS", role: "Core point-of-sale software" },
      { name: "AI Office · Sales dept", role: "Revenue analytics, stock forecasting" },
      { name: "Telegram Bot", role: "Daily auto-report to owner" },
      { name: "Barcode Scanner + Printer", role: "Product identification" },
    ],
    ctaTitle: "We can help your store too",
    ctaText: "30 days — from Excel chaos to clean POS. Request a demo, we'll prep an analysis for your store.",
    ctaBtn: "Request demo",
    ctaSecondary: "Explore other cases",
  },
  ar: {
    back: "← كل دراسات الحالة",
    badge: "دراسة حالة · تجزئة",
    title:
      "بقالة انتقلت من Excel إلى نقاط البيع خلال 30 يومًا ووفّرت 800 ألف سوم شهريًا",
    name: "دلفوزة خ.",
    role: "مالكة بقالة · يونسآباد، طشقند",
    product: "RAOS POS",
    bannerLabel: "التوفير الشهري",
    bannerCaption: "أخطاء الكاشير + المخزون + وقت الموظفين",
    metricsTitle: "4 مؤشرات أساسية",
    metrics: [
      { label: "أخطاء الكاشير", before: "95٪", after: "0.5٪", caption: "خطأ واحد لكل 100 إيصال" },
      { label: "جرد المخزون", before: "4 ساعات", after: "15 دقيقة", caption: "عبر قارئ الباركود" },
      { label: "ولاء العملاء", before: "—", after: "+18٪", caption: "برنامج ولاء" },
      { label: "ساعات العمل", before: "12 س", after: "10 س", caption: "−ساعتان يوميًا" },
    ],
    problemTitle: "ما كانت المشكلة",
    problemParas: [
      "دلفوزة تدير بقالة متوسطة الحجم في يونسآباد بنحو 200-250 إيصال يوميًا. في البداية كان كل شيء في Excel: الإيرادات اليومية، المخزون، مدفوعات الموردين — كله يدويًا.",
      "المشكلة الكبرى — موازنة الكاشير قبل وبعد كل وردية. النقدية على جهة وExcel على جهة، 2-3 ساعات كل مساء لمطابقة الأرقام. كان النقص الشهري يصل إلى 1.2-1.5 مليون سوم.",
      "حالة المخزون مجهولة تمامًا — أي منتج نفد، أي منتج راكد. زيارات الموردين تعتمد على قوائم هاتفية كثيرًا ما تكون خاطئة.",
      "ولا علاقة مع العملاء أيضًا. لا بيانات عن الزبائن الدائمين، ولا عن الأكثر مبيعًا، ولا عن أوقات الذروة.",
    ],
    solutionTitle: "الحل مع Tezcode",
    solutionParas: [
      "اخترنا RAOS POS — مصمم للبقالة، واجهة بسيطة، الكاشير يتعلمه في يوم. المعدات: محطة POS، قارئ باركود، طابعة إيصالات حرارية.",
      "الأسبوع الأول — التركيب. زار فريق Tezcode المتجر، استورد 3,400 منتج من Excel إلى RAOS، وربط كل منتج بباركود.",
      "الأسبوع الثاني — تدريب الكاشيرات. 3 كاشيرات × 4 ساعات لكل واحدة على سيناريوهات حقيقية.",
      "الأسبوع الثالث — الإطلاق. وكيل دعم 8 ساعات يوميًا. بوت Telegram يرسل تقرير الإيرادات اليومي تلقائيًا.",
      "الأسبوع الرابع — التحسين. اتصال قسم Sales في AI Office: تحليلات الإيرادات، الأكثر مبيعًا، توقعات المخزون — كله آلي.",
    ],
    quote1:
      "في السابق كنت أقضي ساعتين كل مساء لمطابقة الأرقام. الآن يصلني التقرير اليومي على Telegram — دقيقة واحدة وكل شيء واضح. هذه حرية!",
    quote1Caption: "دلفوزة خ.، مارس 2026",
    quote2:
      "أكثر ما أحب — المخزون يحسب نفسه. كنت أحرج أمام الزبائن. الآن أفتح الهاتف صباحًا، 6 منتجات تنفد — أطلبها وانتهى الأمر.",
    quote2Caption: "دلفوزة خ.، أبريل 2026",
    timelineTitle: "تطبيق خلال 30 يومًا",
    timeline: [
      { week: "الأسبوع 1", title: "تركيب + استيراد البيانات", desc: "تركيب POS وقارئ وطابعة. استيراد 3,400 منتج من Excel إلى RAOS. طباعة الباركود وربطه." },
      { week: "الأسبوع 2", title: "تدريب الكاشيرات", desc: "3 كاشيرات × 4 ساعات على سيناريوهات حقيقية. 100+ عملية تجريبية." },
      { week: "الأسبوع 3", title: "الإطلاق", desc: "اليوم الحقيقي الأول. دعم 8 ساعات يوميًا. تقرير Telegram اليومي تلقائي." },
      { week: "الأسبوع 4", title: "التحسين + AI", desc: "اتصال قسم Sales: أعلى 10 منتجات، تنبيهات المخزون، تحليل العائدين. تشغيل برنامج الولاء." },
    ],
    stackTitle: "الحزمة التقنية",
    stack: [
      { name: "RAOS POS", role: "برنامج نقاط البيع الأساسي" },
      { name: "AI Office · قسم Sales", role: "تحليلات الإيرادات، توقع المخزون" },
      { name: "Telegram Bot", role: "تقرير يومي تلقائي للمالكة" },
      { name: "Barcode Scanner + Printer", role: "تعريف المنتجات" },
    ],
    ctaTitle: "يمكننا مساعدة متجركم أيضًا",
    ctaText: "30 يومًا من فوضى Excel إلى نقاط بيع منظمة. اطلب عرضًا، نحضّر تحليلًا لمتجركم.",
    ctaBtn: "اطلب عرضًا",
    ctaSecondary: "تصفّح كل الحالات",
  },
  uk: {
    back: "← Усі кейси",
    badge: "Кейс · Роздріб",
    title:
      "Продуктовий магазин перейшов з Excel на POS за 30 днів і економить 800K сум/місяць",
    name: "Дилфуза Х.",
    role: "Власниця продуктового магазину · Юнусабад, Ташкент",
    product: "RAOS POS",
    bannerLabel: "Місячна економія",
    bannerCaption: "помилки каси + склад + час співробітників",
    metricsTitle: "4 ключові показники",
    metrics: [
      { label: "Помилки каси", before: "95%", after: "0.5%", caption: "1 помилка на 100 чеків" },
      { label: "Інвентаризація", before: "4 год", after: "15 хв", caption: "через barcode-сканер" },
      { label: "Лояльність клієнтів", before: "—", after: "+18%", caption: "програма лояльності" },
      { label: "Робочий час", before: "12 год", after: "10 год", caption: "−2 години на день" },
    ],
    problemTitle: "У чому була проблема",
    problemParas: [
      "Дилфуза опа тримає середній магазин у Юнусабаді — близько 200-250 чеків на день. Спочатку все було в Excel: денний виторг, склад, оплати постачальникам — усе вручну.",
      "Головна проблема — касири зводили цифри до і після зміни. Каса окремо, Excel окремо — 2-3 години кожен вечір на \"підгонку чисел\". Місячна нестача — 1.2-1.5M сум.",
      "Стан складу взагалі невідомий: який товар закінчився, який залежався — неможливо зрозуміти. Списки для постачальників часто були помилковими.",
      "З клієнтами теж жодного зв'язку. Хто постійний, що добре продається, коли пік — жодних даних.",
    ],
    solutionTitle: "Рішення з Tezcode",
    solutionParas: [
      "Обрали RAOS POS — заточений під магазини, простий інтерфейс, касир освоює за 1 день. Комплект: POS-термінал, barcode-сканер, термопринтер чеків.",
      "Тиждень 1 — встановлення. Команда Tezcode приїхала, імпортувала 3 400 SKU з Excel у RAOS. Кожному товару прив'язали barcode.",
      "Тиждень 2 — навчання касирів. 3 касири × 4 години. Реальні сценарії: чек, повернення, закриття зміни, звіт.",
      "Тиждень 3 — запуск. Агент підтримки 8 годин онлайн. Telegram-бот надсилає денний виторг автоматично.",
      "Тиждень 4 — оптимізація. Підключили відділ Sales AI Office: аналітика виторгу, топ-товари, прогноз складу — все автоматично.",
    ],
    quote1:
      "Раніше щовечора 2 години \"підганяла цифри\". Тепер Telegram, звіт — 1 хвилина, все ясно. Це свобода!",
    quote1Caption: "Дилфуза Х., березень 2026",
    quote2:
      "Найкраще — склад сам рахує. Раніше не знала, що закінчилось, і ніяковіла перед клієнтами. Тепер відкриваю телефон зранку, 6 товарів закінчуються — замовила, готово.",
    quote2Caption: "Дилфуза Х., квітень 2026",
    timelineTitle: "30-денне впровадження",
    timeline: [
      { week: "Тиждень 1", title: "Встановлення + імпорт даних", desc: "Встановлення POS, сканера, принтера. Імпорт 3 400 товарів з Excel у RAOS. Друк і прив'язка barcode." },
      { week: "Тиждень 2", title: "Навчання касирів", desc: "3 касири × 4 години. Реальні сценарії. 100+ операцій у тестовому режимі." },
      { week: "Тиждень 3", title: "Запуск", desc: "Перший реальний день. Підтримка 8 годин онлайн. Telegram-бот надсилає виторг автоматично." },
      { week: "Тиждень 4", title: "Оптимізація + AI", desc: "AI Office Sales підключено: топ-10 товарів, авто-алерти складу, аналітика повернень. Програма лояльності запущена." },
    ],
    stackTitle: "Технологічний стек",
    stack: [
      { name: "RAOS POS", role: "Основне ПЗ каси" },
      { name: "AI Office · Відділ Sales", role: "Аналітика виторгу, прогноз складу" },
      { name: "Telegram Bot", role: "Щоденний авто-звіт власниці" },
      { name: "Barcode Scanner + Printer", role: "Ідентифікація товарів" },
    ],
    ctaTitle: "Вашому магазину теж допоможемо",
    ctaText: "30 днів — від хаосу Excel до впорядкованого POS. Запросіть демо, підготуємо аналіз для вашого магазину.",
    ctaBtn: "Запросити демо",
    ctaSecondary: "Дивитись інші кейси",
  },
};

export function DilfuzaCaseClient() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

  return (
    <main className="relative min-h-screen bg-[var(--tc-ink)] pt-24 pb-32 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute top-20 right-0 w-[600px] h-[600px] opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--tc-gold) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Back link */}
        <Reveal>
          <Link
            href="/case-studies"
            className="inline-block text-sm text-[var(--tc-text-muted)] hover:text-[var(--tc-gold)] transition-colors mb-8"
          >
            {t.back}
          </Link>
        </Reveal>

        {/* Hero */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--tc-gold)]/10 border border-[var(--tc-gold)]/30 text-xs font-500 text-[var(--tc-gold)] mb-6 uppercase tracking-[0.3em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-gold)] animate-pulse" />
            {t.badge}
          </div>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-700 mb-8 tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h1>
          <div className="flex items-center gap-4 mb-10">
            <div className="relative shrink-0 w-16 h-16 rounded-full overflow-hidden ring-2 ring-[var(--tc-gold)]/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/customers/customer-1.jpg"
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
              <div className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-500 bg-[var(--tc-gold)]/10 text-[var(--tc-gold)]">
                {t.product}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Key metric banner */}
        <Reveal>
          <div className="relative mb-16 p-8 md:p-10 rounded-[var(--tc-radius-xl)] border border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 to-[var(--tc-surface-2)] overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-emerald-400 opacity-10 blur-3xl"
            />
            <div className="relative">
              <div className="text-xs text-emerald-400 uppercase tracking-[0.3em] mb-2">
                {t.bannerLabel}
              </div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span
                  className="text-5xl md:text-7xl font-800 text-emerald-400 tabular-nums"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  +<CountUp value={800000} />
                </span>
                <span className="text-lg text-[var(--tc-text-secondary)]">so'm/oy</span>
              </div>
              <div className="mt-3 text-sm text-[var(--tc-text-muted)]">
                {t.bannerCaption}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Sub metrics */}
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
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-sm text-[var(--tc-text-muted)] line-through tabular-nums">
                    {m.before}
                  </span>
                  <span className="text-[var(--tc-text-muted)]">→</span>
                  <span
                    className="text-2xl md:text-3xl font-700 text-[var(--tc-gold)] tabular-nums"
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

        {/* Problem */}
        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-700 text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.problemTitle}
          </h2>
          <div className="prose prose-invert space-y-4 mb-16 max-w-none">
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

        {/* Quote 1 */}
        <Reveal>
          <blockquote className="relative my-16 p-8 md:p-10 rounded-[var(--tc-radius-xl)] border border-[var(--tc-gold)]/30 bg-[var(--tc-surface-2)]">
            <div className="absolute -top-4 left-8 text-5xl text-[var(--tc-gold)] leading-none font-700 select-none">
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

        {/* Solution */}
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

        {/* Quote 2 */}
        <Reveal>
          <blockquote className="relative my-16 p-8 md:p-10 rounded-[var(--tc-radius-xl)] border border-[var(--tc-blue)]/30 bg-[var(--tc-surface-2)]">
            <div className="absolute -top-4 left-8 text-5xl text-[var(--tc-blue)] leading-none font-700 select-none">
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

        {/* Timeline */}
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
                <span className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--tc-gold)] tc-glow-gold" />
                <div className="text-xs text-[var(--tc-gold)] uppercase tracking-[0.2em] mb-1">
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

        {/* Stack */}
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

        {/* CTA */}
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
