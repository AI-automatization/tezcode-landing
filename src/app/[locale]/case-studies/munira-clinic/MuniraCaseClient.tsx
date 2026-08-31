"use client";

import { Link } from "@/i18n/routing";
import { m } from "motion/react";
import { useLocale } from "next-intl";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Stethoscope } from "lucide-react";

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
  ctaService: string;
};

// TODO(Sardor): mijoz nomi va rozilik — rozilik olingach, sektor yorlig'i
// o'rniga real mijoz nomi qo'yiladi. Sayt bo'yicha tasdiqlangan raqamlar:
// navbat vaqti −40%, kunlik bemor 32→45 (/ai-ozbekistonda bilan mos). Qolgan
// metrikalar (hamshira 30%→12%, to'lov 3 kun→kunda, +45 daq, 4,200 karta)
// real mijoz ma'lumoti bilan tasdiqlanishi kerak.
const COPY: Record<Lang, CopyShape> = {
  uz: {
    back: "← Barcha case study'lar",
    badge: "Case Study · Klinika",
    title:
      "Klinika navbati 40% tezroq, bemor sadoqati 2x oshdi",
    name: "Klinika rahbari",
    role: "Umumiy amaliyot klinikasi · Mirzo Ulug'bek, Toshkent",
    product: "ClinicaGo + HamshiraGo",
    bannerLabel: "Navbat vaqti",
    bannerCaption: "kunlik bemor 32 → 45 (+40%)",
    metricsTitle: "4 ta asosiy ko'rsatkich",
    metrics: [
      { label: "Kunlik bemor", before: "32", after: "45", caption: "+40% sig'im (capacity)" },
      { label: "Hamshira chiqib ketishi", before: "30%/yil", after: "12%/yil", caption: "−60% kadr almashinishi" },
      { label: "Bemor to'lov tezligi", before: "3 kun", after: "kunda", caption: "+30% cash flow" },
      { label: "Doktor screen-time", before: "—", after: "+45 daq/kun", caption: "qog'oz emas, bemorga vaqt" },
    ],
    problemTitle: "3 yillik qog'oz xaos",
    problemParas: [
      "Klinika rahbari Mirzo Ulug'bek tumanidagi 5 ta shifokorli umumiy amaliyot klinikasini boshqaradi. 3 yil oldin to'liq qog'ozda ishlardi: bemor kartochkasi qog'ozda, tashxis qog'ozda, dori retsept qog'ozda. Navbat qog'oz daftarda.",
      "Asosiy muammo — navbat. Bemorlar 1.5-2 soat kutardi. Ko'pchilik kutmasdan ketib qolardi, qaytib kelmaslik darajasi 35% edi. Hamshiralar har 5 daqiqada \"navbat uzunmi?\" deb qarab turardi.",
      "Hamshira ish yuki o'ta og'ir — har bemor uchun 3-4 ta qog'oz to'ldirish, dori berish vaqtini qo'lda yozish, retsept yozish. Kuniga 12 soat ishlardi, oyiga 1 ta hamshira ishdan ketardi.",
      "To'lov tizimi ham chayqalardi — bemor xizmat olganidan keyin kassaga keladi, kassir kartochkadan qancha narx ekanini tekshiradi, qo'lda yozadi. To'lov 3 kungacha cho'zilardi.",
    ],
    solutionTitle: "ClinicaGo + HamshiraGo integratsiyasi",
    solutionParas: [
      "ClinicaGo — klinika boshqaruv tizimi (bemor kartochkasi, tashxis, retsept, to'lov). HamshiraGo — hamshira mobil ilovasi (palata aylanish, dori berish, hayotiy ko'rsatkichlar). Ikkalasi bitta klinika ma'lumot bazasida ishlaydi.",
      "Birinchi 2 hafta — sozlash. 5 ta shifokor kabineti uchun planshet va printer o'rnatildi. Qabulxonaga katta ekran (navbat ko'rsatish), kirish darvozasi yoniga QR-kod (bemor ro'yxatdan o'tish).",
      "3-4 hafta — bemor migratsiyasi. 3 yillik 4,200 ta bemor kartochkasi qog'ozdan ClinicaGo'ga ko'chirildi (jamoamiz 2 nafar talaba bilan birgalikda). Har bemor uchun unique ID, telefon raqami bilan SMS xabarnoma sozlandi.",
      "5-6 hafta — hamshira o'qitish va launch. HamshiraGo mobil ilovasi 8 ta hamshiraga o'rnatildi (har biriga shaxsiy login). Real palata aylanishida foydalanish — har vital sign mobile'da qayd etiladi.",
      "AI tashxis ko'mak (ClinicaGo AI) — shifokor symptom yozsa, AI 3-5 mumkin tashxisni reyting bilan ko'rsatadi (faqat ko'mak sifatida, qaror shifokorda). Bu yangi shifokorlar uchun ayniqsa foydali.",
    ],
    quote1:
      "Avval har kuni 32 ta bemor qabul qilardik, lekin 8-10 nafari kutmasdan ketib qolardi. Endi 45 ta bemor sig'imimiz bor, kutish 25 daqiqadan ortmaydi. Bemorlar \"birinchi marta klinikangizda qulay\" deyishadi.",
    quote1Caption: "Klinika rahbari — ClinicaGo mijozi",
    quote2:
      "Hamshiralar avval kuniga 12 soat ishlardi, charchab ketishardi. HamshiraGo bilan qog'oz ish 70% kamaydi. Endi haqiqiy bemor parvarishiga vaqt yetadi. 2 nafar hamshira maoshi oshirildi va hech kim ishdan ketmadi 6 oydan beri.",
    quote2Caption: "Klinika rahbari — ClinicaGo mijozi",
    timelineTitle: "6 haftalik amalga oshirish",
    timeline: [
      { week: "Hafta 1-2", title: "Apparat sozlash + tizim ulash", desc: "5 ta planshet shifokorlar uchun, qabulxonaga katta ekran, QR-kod tizimi, printer. ClinicaGo server o'rnatish + xavfsizlik (HIPAA-style)." },
      { week: "Hafta 3-4", title: "Ma'lumot migratsiyasi", desc: "4 200 bemor qog'oz kartochkasini ClinicaGo'ga ko'chirish (2 talaba yordamida). Har bemorga unique ID, SMS xabarnoma sozlash." },
      { week: "Hafta 5", title: "Hamshira o'qitish", desc: "8 ta hamshiraga HamshiraGo mobil ilovasi, 4 soat dars + 2 kun real palata aylanishi (parallel — qog'oz va mobile)." },
      { week: "Hafta 6", title: "Full launch + AI ulash", desc: "Qog'oz to'liq olib tashlandi. ClinicaGo AI tashxis ko'mak rejimi ishga tushdi. Birinchi hafta support agent klinikada 8 soat." },
    ],
    stackTitle: "Texnologiya stack'i",
    stack: [
      { name: "ClinicaGo", role: "Klinika boshqaruv tizimi (EHR — electron tibbiy karta)" },
      { name: "HamshiraGo", role: "Hamshira mobil ilovasi (palata aylanish, dori, vital)" },
      { name: "ClinicaGo AI Assistant", role: "Tashxis ko'mak (shifokor uchun)" },
      { name: "SMS Gateway", role: "Bemorlarga real-time eslatma va natija" },
      { name: "QR Registration", role: "Bemor ro'yxatdan o'tish 30 soniyada" },
      { name: "AI Office · Healthcare bo'limi", role: "Klinika statistikasi, prognoz" },
    ],
    ctaTitle: "Sizning klinikangizda ham yordam bera olamiz",
    ctaText:
      "6 hafta — qog'oz xaos'dan zamonaviy klinika tizimiga. Demo so'rang, klinikangiz uchun maxsus ROI hisoblaymiz.",
    ctaBtn: "Demo so'rash",
    ctaSecondary: "Boshqa case'larni ko'rish",
    ctaService: "Klinika CRM haqida",
  },
  ru: {
    back: "← Все кейсы",
    badge: "Кейс · Клиника",
    title:
      "Очередь в клинике сократилась на 40%, а лояльность пациентов удвоилась",
    name: "Руководитель клиники",
    role: "Клиника общей практики · Мирзо-Улугбек, Ташкент",
    product: "ClinicaGo + HamshiraGo",
    bannerLabel: "Время ожидания",
    bannerCaption: "ежедневно 32 → 45 пациентов (+40%)",
    metricsTitle: "4 ключевых показателя",
    metrics: [
      { label: "Пациентов в день", before: "32", after: "45", caption: "+40% пропускной способности" },
      { label: "Уход медсестёр", before: "30%/год", after: "12%/год", caption: "−60% текучести" },
      { label: "Скорость оплаты", before: "3 дня", after: "в день", caption: "+30% cash flow" },
      { label: "Время врача на пациента", before: "—", after: "+45 мин/день", caption: "не на бумаги, а на пациента" },
    ],
    problemTitle: "3 года бумажного хаоса",
    problemParas: [
      "Руководитель управляет клиникой общей практики с 5 врачами в Мирзо-Улугбеке. 3 года всё было на бумаге: карта пациента, диагноз, рецепт, очередь — всё в тетрадях.",
      "Главная боль — очередь. Пациенты ждали 1.5-2 часа. Многие уходили, не дождавшись; отказ — 35%. Медсёстры каждые 5 минут проверяли длину очереди.",
      "Нагрузка на медсестёр непосильная — 3-4 бумаги на каждого пациента, ручная запись времени дачи лекарств, рецепты. 12-часовой день, 1 медсестра уходила каждый месяц.",
      "Оплата тоже хаотична — пациент идёт в кассу после приёма, кассир смотрит карту, цены вручную, запись вручную. Платёж растягивался до 3 дней.",
    ],
    solutionTitle: "Интеграция ClinicaGo + HamshiraGo",
    solutionParas: [
      "ClinicaGo — система управления клиникой (карта, диагноз, рецепт, оплата). HamshiraGo — мобильное приложение для медсестёр (обход палат, лекарства, витальные показатели). Обе работают на одной БД клиники.",
      "Первые 2 недели — установка. 5 кабинетов получили планшеты и принтеры. В приёмной большой экран (очередь), на входе QR-код (регистрация).",
      "3-4 неделя — миграция пациентов. 4 200 карт за 3 года перенесли с бумаги в ClinicaGo (помогли 2 студента). У каждого пациента unique ID, настроены SMS-уведомления.",
      "5-6 неделя — обучение медсестёр и запуск. HamshiraGo установили 8 медсёстрам (личный логин). Реальный обход — все витальные показатели фиксируются в приложении.",
      "ИИ-помощь в диагнозе (ClinicaGo AI) — врач вводит симптомы, ИИ показывает 3-5 возможных диагнозов с рейтингом (только подсказка, решает врач). Особенно полезно для новых врачей.",
    ],
    quote1:
      "Раньше принимали 32 пациента в день, но 8-10 уходили, не дождавшись. Теперь 45 пациентов, ожидание не более 25 минут. Пациенты говорят \"впервые в клинике комфортно\".",
    quote1Caption: "Руководитель клиники — клиент ClinicaGo",
    quote2:
      "Раньше медсёстры по 12 часов на ногах, выгорали. С HamshiraGo бумажная работа сократилась на 70%. Теперь хватает времени на реальный уход. 2 медсестрам подняли зарплату, и за 6 месяцев никто не ушёл.",
    quote2Caption: "Руководитель клиники — клиент ClinicaGo",
    timelineTitle: "6 недель внедрения",
    timeline: [
      { week: "Недели 1-2", title: "Оборудование + подключение", desc: "5 планшетов врачам, большой экран в приёмной, QR-код, принтер. Установка сервера ClinicaGo + безопасность (HIPAA-style)." },
      { week: "Недели 3-4", title: "Миграция данных", desc: "4 200 пациентов с бумаги в ClinicaGo (с 2 студентами). У каждого unique ID, настройка SMS-уведомлений." },
      { week: "Неделя 5", title: "Обучение медсестёр", desc: "8 медсестёр получили HamshiraGo, 4 часа обучения + 2 дня реального обхода (параллельно бумага + мобайл)." },
      { week: "Неделя 6", title: "Полный запуск + ИИ", desc: "Бумагу убрали. ClinicaGo AI запущен в режиме помощи. Первая неделя — агент поддержки в клинике 8 часов." },
    ],
    stackTitle: "Технологический стек",
    stack: [
      { name: "ClinicaGo", role: "Система управления клиникой (EHR — электронная карта)" },
      { name: "HamshiraGo", role: "Мобильное приложение медсестры (обход, лекарства, витальные)" },
      { name: "ClinicaGo AI Assistant", role: "Помощь в диагнозе для врача" },
      { name: "SMS Gateway", role: "Real-time уведомления и результаты пациентам" },
      { name: "QR Registration", role: "Регистрация пациента за 30 секунд" },
      { name: "AI Office · Healthcare", role: "Аналитика клиники, прогнозы" },
    ],
    ctaTitle: "Вашей клинике тоже поможем",
    ctaText:
      "6 недель — от бумажного хаоса к современной системе. Запросите демо, посчитаем ROI для вашей клиники.",
    ctaBtn: "Запросить демо",
    ctaSecondary: "Смотреть другие кейсы",
    ctaService: "О CRM для клиник",
  },
  en: {
    back: "← All case studies",
    badge: "Case Study · Clinic",
    title:
      "Queue time down 40%, patient loyalty doubled",
    name: "Clinic director",
    role: "General practice clinic · Mirzo Ulugbek, Tashkent",
    product: "ClinicaGo + HamshiraGo",
    bannerLabel: "Queue time",
    bannerCaption: "daily patients 32 → 45 (+40%)",
    metricsTitle: "4 key metrics",
    metrics: [
      { label: "Daily patients", before: "32", after: "45", caption: "+40% capacity" },
      { label: "Nurse turnover", before: "30%/yr", after: "12%/yr", caption: "−60% turnover" },
      { label: "Payment speed", before: "3 days", after: "same day", caption: "+30% cash flow" },
      { label: "Doctor face-time", before: "—", after: "+45 min/day", caption: "less paperwork, more patient" },
    ],
    problemTitle: "3 years of paper chaos",
    problemParas: [
      "The director runs a 5-doctor general practice clinic in Mirzo Ulugbek. For 3 years everything was on paper: patient chart, diagnosis, prescription, queue — all in notebooks.",
      "The main pain — the queue. Patients waited 1.5-2 hours. Many left without being seen; the no-show rate hit 35%. Nurses checked the queue length every 5 minutes.",
      "Nurse workload was crushing — 3-4 forms per patient, hand-written med times, hand-written prescriptions. 12-hour days, one nurse leaving every month.",
      "Payments were also chaotic — after the visit the patient went to the register, the cashier checked the chart, looked up prices manually, wrote it all by hand. Settlement took up to 3 days.",
    ],
    solutionTitle: "ClinicaGo + HamshiraGo integration",
    solutionParas: [
      "ClinicaGo — clinic management system (chart, diagnosis, prescription, payment). HamshiraGo — nurse mobile app (rounds, meds, vitals). Both share a single clinic database.",
      "First 2 weeks — setup. 5 doctor rooms got tablets and printers. The waiting area got a big screen (queue display); the entrance got a QR code (self check-in).",
      "Weeks 3-4 — patient migration. 4,200 paper charts from 3 years were moved into ClinicaGo (helped by 2 students from our team). Each patient got a unique ID and SMS notifications.",
      "Weeks 5-6 — nurse training and launch. HamshiraGo installed on tablets for 8 nurses (personal logins). Real ward rounds — every vital sign captured in-app.",
      "ClinicaGo AI Assistant — doctor enters symptoms, AI suggests 3-5 possible diagnoses with ranking (purely advisory, doctor decides). Especially useful for newer doctors.",
    ],
    quote1:
      "We used to see 32 patients per day but 8-10 left without being seen. Now we handle 45 patients, wait time under 25 minutes. Patients say it's the first time they feel comfortable at our clinic.",
    quote1Caption: "Clinic director — ClinicaGo customer",
    quote2:
      "Nurses used to do 12-hour days and burn out. With HamshiraGo, paperwork dropped 70%. Now there's time for actual patient care. We raised 2 nurses' salaries, and nobody has left in 6 months.",
    quote2Caption: "Clinic director — ClinicaGo customer",
    timelineTitle: "6-week rollout",
    timeline: [
      { week: "Weeks 1-2", title: "Hardware + system", desc: "5 tablets for doctors, big screen in waiting area, QR code, printers. ClinicaGo server install + security (HIPAA-style)." },
      { week: "Weeks 3-4", title: "Data migration", desc: "4,200 paper charts into ClinicaGo (with 2 students). Unique ID per patient, SMS notifications configured." },
      { week: "Week 5", title: "Nurse training", desc: "8 nurses got HamshiraGo, 4 hours of training + 2 real shift days (paper + mobile in parallel)." },
      { week: "Week 6", title: "Full launch + AI", desc: "Paper retired. ClinicaGo AI Assistant in advisory mode. Support agent on-site 8 hours/day the first week." },
    ],
    stackTitle: "Tech stack",
    stack: [
      { name: "ClinicaGo", role: "Clinic management system (EHR — electronic health record)" },
      { name: "HamshiraGo", role: "Nurse mobile app (rounds, meds, vitals)" },
      { name: "ClinicaGo AI Assistant", role: "Differential diagnosis support for doctors" },
      { name: "SMS Gateway", role: "Real-time patient reminders and results" },
      { name: "QR Registration", role: "Patient self check-in in 30 seconds" },
      { name: "AI Office · Healthcare", role: "Clinic analytics, forecasts" },
    ],
    ctaTitle: "We can help your clinic too",
    ctaText:
      "6 weeks — from paper chaos to a modern clinic system. Request a demo, we'll prepare a custom ROI for your clinic.",
    ctaBtn: "Request demo",
    ctaSecondary: "Explore other cases",
    ctaService: "About the clinic CRM",
  },
  ar: {
    back: "← كل دراسات الحالة",
    badge: "دراسة حالة · عيادة",
    title:
      "تقليل وقت الانتظار 40٪، ومضاعفة ولاء المرضى",
    name: "مدير العيادة",
    role: "عيادة طب عام · ميرزو أولوغبيك، طشقند",
    product: "ClinicaGo + HamshiraGo",
    bannerLabel: "وقت الانتظار",
    bannerCaption: "المرضى يوميًا 32 → 45 (+40٪)",
    metricsTitle: "4 مؤشرات أساسية",
    metrics: [
      { label: "المرضى يوميًا", before: "32", after: "45", caption: "+40٪ سعة" },
      { label: "ترك التمريض", before: "30٪/سنة", after: "12٪/سنة", caption: "−60٪ دوران" },
      { label: "سرعة الدفع", before: "3 أيام", after: "نفس اليوم", caption: "+30٪ تدفق نقدي" },
      { label: "وقت الطبيب مع المريض", before: "—", after: "+45 د/يوم", caption: "بدل الورق، للمريض" },
    ],
    problemTitle: "3 سنوات من فوضى الورق",
    problemParas: [
      "مدير العيادة يدير عيادة طب عام مع 5 أطباء في ميرزو أولوغبيك. 3 سنوات كل شيء على الورق: بطاقة المريض، التشخيص، الوصفة، الطابور — في الدفاتر.",
      "المشكلة الكبرى — الطابور. ينتظر المرضى 1.5-2 ساعة. كثيرون يغادرون قبل الدور (نسبة 35٪). الممرضات يفحصن الطابور كل 5 دقائق.",
      "عبء العمل على الممرضات هائل — 3-4 أوراق لكل مريض، وقت الدواء يدويًا، الوصفات يدويًا. أيام 12 ساعة، ممرضة تغادر كل شهر.",
      "الدفع فوضوي أيضًا — بعد الفحص، يذهب المريض للكاشير، يبحث في البطاقة، يكتب يدويًا. التسوية تمتد إلى 3 أيام.",
    ],
    solutionTitle: "تكامل ClinicaGo + HamshiraGo",
    solutionParas: [
      "ClinicaGo — نظام إدارة العيادة (البطاقة، التشخيص، الوصفة، الدفع). HamshiraGo — تطبيق محمول للممرضات (الجولة، الأدوية، العلامات الحيوية). كلاهما على قاعدة بيانات واحدة للعيادة.",
      "أول أسبوعين — التركيب. 5 غرف أطباء تلقت أجهزة لوحية وطابعات. قاعة الانتظار شاشة كبيرة، عند المدخل رمز QR للتسجيل الذاتي.",
      "الأسابيع 3-4 — ترحيل المرضى. 4,200 بطاقة ورقية من 3 سنوات إلى ClinicaGo (بمساعدة طالبين). معرّف فريد لكل مريض، إعداد إشعارات SMS.",
      "الأسابيع 5-6 — تدريب الممرضات والإطلاق. تثبيت HamshiraGo على 8 أجهزة (تسجيل دخول شخصي). الجولات الحقيقية — كل علامة حيوية تُسجل في التطبيق.",
      "مساعد التشخيص (ClinicaGo AI) — يدخل الطبيب الأعراض، يقترح الذكاء الاصطناعي 3-5 تشخيصات محتملة مع ترتيب (استشاري فقط، القرار للطبيب). مفيد خاصة للأطباء الجدد.",
    ],
    quote1:
      "كنا نستقبل 32 مريضًا يوميًا، لكن 8-10 يغادرون. الآن نتعامل مع 45 مريضًا، وقت انتظار أقل من 25 دقيقة. يقول المرضى \"لأول مرة نشعر بالراحة في عيادتكم\".",
    quote1Caption: "مدير العيادة — عميل ClinicaGo",
    quote2:
      "كانت الممرضات 12 ساعة على أقدامهن، يحترقن. مع HamshiraGo قلّ الورق 70٪. الآن يبقى وقت لرعاية حقيقية. رفعنا راتب ممرضتين، ولم يغادر أحد منذ 6 أشهر.",
    quote2Caption: "مدير العيادة — عميل ClinicaGo",
    timelineTitle: "تطبيق خلال 6 أسابيع",
    timeline: [
      { week: "الأسبوعان 1-2", title: "المعدات + النظام", desc: "5 أجهزة لوحية للأطباء، شاشة كبيرة، QR، طابعات. تثبيت خادم ClinicaGo + أمان (HIPAA-style)." },
      { week: "الأسبوعان 3-4", title: "ترحيل البيانات", desc: "4,200 بطاقة ورقية إلى ClinicaGo (مع طالبين). معرّف فريد لكل مريض، إعداد SMS." },
      { week: "الأسبوع 5", title: "تدريب الممرضات", desc: "8 ممرضات تلقّين HamshiraGo، 4 ساعات تدريب + يومان جولة حقيقية (ورق + هاتف بالتوازي)." },
      { week: "الأسبوع 6", title: "إطلاق كامل + AI", desc: "إيقاف الورق. ClinicaGo AI في وضع المساعدة. دعم في الموقع 8 ساعات يوميًا في الأسبوع الأول." },
    ],
    stackTitle: "الحزمة التقنية",
    stack: [
      { name: "ClinicaGo", role: "نظام إدارة العيادة (سجل طبي إلكتروني)" },
      { name: "HamshiraGo", role: "تطبيق ممرضة محمول (جولة، أدوية، علامات)" },
      { name: "ClinicaGo AI Assistant", role: "دعم التشخيص التفريقي للطبيب" },
      { name: "SMS Gateway", role: "تذكير فوري ونتائج للمرضى" },
      { name: "QR Registration", role: "تسجيل المريض في 30 ثانية" },
      { name: "AI Office · Healthcare", role: "تحليلات وتوقعات العيادة" },
    ],
    ctaTitle: "يمكننا مساعدة عيادتكم أيضًا",
    ctaText: "6 أسابيع — من فوضى الورق إلى نظام عيادة حديث. اطلب عرضًا ونحضّر ROI خاص بعيادتكم.",
    ctaBtn: "اطلب عرضًا",
    ctaSecondary: "تصفّح كل الحالات",
    ctaService: "عن CRM للعيادات",
  },
  uk: {
    back: "← Усі кейси",
    badge: "Кейс · Клініка",
    title:
      "Черга в клініці скоротилася на 40%, лояльність пацієнтів подвоїлась",
    name: "Керівник клініки",
    role: "Клініка загальної практики · Мірзо-Улугбек, Ташкент",
    product: "ClinicaGo + HamshiraGo",
    bannerLabel: "Час очікування",
    bannerCaption: "щодня 32 → 45 пацієнтів (+40%)",
    metricsTitle: "4 ключові показники",
    metrics: [
      { label: "Пацієнтів на день", before: "32", after: "45", caption: "+40% пропускної здатності" },
      { label: "Плинність медсестер", before: "30%/рік", after: "12%/рік", caption: "−60% плинності" },
      { label: "Швидкість оплати", before: "3 дні", after: "у день", caption: "+30% cash flow" },
      { label: "Час лікаря на пацієнта", before: "—", after: "+45 хв/день", caption: "не на папери, на пацієнта" },
    ],
    problemTitle: "3 роки паперового хаосу",
    problemParas: [
      "Керівник керує клінікою загальної практики з 5 лікарями в Мірзо-Улугбеку. 3 роки все було на папері: картка пацієнта, діагноз, рецепт, черга — у зошитах.",
      "Головний біль — черга. Пацієнти чекали 1.5-2 години. Багато йшли, не дочекавшись, відмова — 35%. Медсестри щоп'ять хвилин перевіряли довжину черги.",
      "Навантаження на медсестер непосильне — 3-4 папери на кожного пацієнта, ручний запис часу видачі ліків, рецепти. 12-годинний день, 1 медсестра йшла щомісяця.",
      "Оплата теж хаотична — пацієнт йде до каси після прийому, касир дивиться картку, ціни вручну, запис вручну. Платіж розтягувався до 3 днів.",
    ],
    solutionTitle: "Інтеграція ClinicaGo + HamshiraGo",
    solutionParas: [
      "ClinicaGo — система управління клінікою (картка, діагноз, рецепт, оплата). HamshiraGo — мобільний додаток для медсестер (обхід палат, ліки, вітальні показники). Обидві на одній БД клініки.",
      "Перші 2 тижні — встановлення. 5 кабінетів отримали планшети й принтери. У приймальні великий екран (черга), на вході QR-код (реєстрація).",
      "3-4 тиждень — міграція пацієнтів. 4 200 карток за 3 роки перенесли з паперу в ClinicaGo (допомогли 2 студенти). Кожному пацієнту унікальний ID, SMS-сповіщення.",
      "5-6 тиждень — навчання медсестер та запуск. HamshiraGo встановили 8 медсестрам (особистий логін). Реальний обхід — усі вітальні фіксуються в додатку.",
      "AI-помічник у діагнозі (ClinicaGo AI) — лікар вводить симптоми, AI показує 3-5 можливих діагнозів з рейтингом (лише підказка, вирішує лікар). Особливо корисно для нових лікарів.",
    ],
    quote1:
      "Раніше приймали 32 пацієнти на день, але 8-10 йшли не дочекавшись. Тепер 45 пацієнтів, очікування не більше 25 хвилин. Пацієнти кажуть \"вперше у клініці комфортно\".",
    quote1Caption: "Керівник клініки — клієнт ClinicaGo",
    quote2:
      "Раніше медсестри по 12 годин на ногах, вигорали. З HamshiraGo папір зменшився на 70%. Тепер вистачає часу на справжній догляд. 2 медсестрам підвищили зарплату, і за 6 місяців ніхто не пішов.",
    quote2Caption: "Керівник клініки — клієнт ClinicaGo",
    timelineTitle: "6 тижнів впровадження",
    timeline: [
      { week: "Тижні 1-2", title: "Обладнання + підключення", desc: "5 планшетів лікарям, великий екран у приймальні, QR-код, принтер. Встановлення ClinicaGo + безпека (HIPAA-style)." },
      { week: "Тижні 3-4", title: "Міграція даних", desc: "4 200 пацієнтів з паперу в ClinicaGo (з 2 студентами). Унікальний ID для кожного, SMS-сповіщення." },
      { week: "Тиждень 5", title: "Навчання медсестер", desc: "8 медсестрам HamshiraGo, 4 години навчання + 2 дні реального обходу (паралельно папір + мобайл)." },
      { week: "Тиждень 6", title: "Повний запуск + AI", desc: "Папір прибрали. ClinicaGo AI у режимі допомоги. Перший тиждень — агент підтримки у клініці 8 годин." },
    ],
    stackTitle: "Технологічний стек",
    stack: [
      { name: "ClinicaGo", role: "Система управління клінікою (EHR — електронна картка)" },
      { name: "HamshiraGo", role: "Мобільний додаток медсестри (обхід, ліки, вітальні)" },
      { name: "ClinicaGo AI Assistant", role: "Допомога в діагнозі для лікаря" },
      { name: "SMS Gateway", role: "Real-time сповіщення та результати пацієнтам" },
      { name: "QR Registration", role: "Реєстрація пацієнта за 30 секунд" },
      { name: "AI Office · Healthcare", role: "Аналітика клініки, прогнози" },
    ],
    ctaTitle: "Вашій клініці теж допоможемо",
    ctaText:
      "6 тижнів — від паперового хаосу до сучасної системи. Запросіть демо, порахуємо ROI для вашої клініки.",
    ctaBtn: "Запросити демо",
    ctaSecondary: "Дивитись інші кейси",
    ctaService: "Про CRM для клінік",
  },
};

export function MuniraCaseClient() {
  const locale = useLocale() as Lang;
  const t = COPY[locale] ?? COPY.uz;

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] pt-24 pb-28 overflow-hidden"
    >
      <div aria-hidden className="tc-grid-bg absolute inset-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="tc-chip mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--tc-blue)]" />
            {t.badge}
          </div>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-700 mb-8 tracking-tight leading-[1.1] text-[var(--tc-text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}
          </h1>
          <div className="flex items-center gap-4 mb-10">
            <div className="relative shrink-0 w-16 h-16 rounded-full flex items-center justify-center ring-2 ring-[var(--tc-blue)]/30 bg-[var(--tc-blue-dim)]">
              <Stethoscope aria-hidden className="h-7 w-7 text-[var(--tc-blue-text)]" strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <div
                className="text-[var(--tc-text-primary)] font-700 text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.name}
              </div>
              <div className="text-sm text-[var(--tc-text-muted)]">{t.role}</div>
              <div className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-500 bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)]">
                {t.product}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Key banner — styled like the home stats card */}
        <Reveal>
          <div className="tc-card relative mb-16 p-8 md:p-10 overflow-hidden">
            <div className="relative">
              <div className="text-xs text-[var(--tc-text-muted)] uppercase tracking-[0.3em] mb-2">
                {t.bannerLabel}
              </div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span
                  className="text-5xl md:text-7xl font-800 text-[var(--tc-success)] tabular-nums"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  −<CountUp value={40} />%
                </span>
              </div>
              <div className="mt-3 text-sm text-[var(--tc-text-muted)]">
                {t.bannerCaption}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-700 text-[var(--tc-text-primary)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.metricsTitle}
          </h2>
        </Reveal>
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16" stagger={0.08}>
          {t.metrics.map((m, i) => (
            <RevealItem key={i}>
              <div className="tc-card p-6 h-full">
                <div className="text-xs text-[var(--tc-text-muted)] uppercase tracking-widest mb-3">
                  {m.label}
                </div>
                <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                  <span className="text-sm text-[var(--tc-text-muted)] line-through tabular-nums">
                    {m.before}
                  </span>
                  <span className="text-[var(--tc-text-muted)]">→</span>
                  <span
                    className="text-2xl md:text-3xl font-700 text-[var(--tc-success)] tabular-nums"
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
            className="text-2xl md:text-3xl font-700 text-[var(--tc-text-primary)] mb-6"
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
          <blockquote className="tc-card relative my-16 p-8 md:p-10">
            <div className="absolute -top-4 left-8 text-5xl text-[var(--tc-blue-text)] leading-none font-700 select-none">
              "
            </div>
            <p
              className="text-xl md:text-2xl text-[var(--tc-text-primary)] leading-relaxed font-500 italic mb-4"
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
            className="text-2xl md:text-3xl font-700 text-[var(--tc-text-primary)] mb-6"
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
          <blockquote className="tc-card relative my-16 p-8 md:p-10">
            <div className="absolute -top-4 left-8 text-5xl text-[var(--tc-blue-text)] leading-none font-700 select-none">
              "
            </div>
            <p
              className="text-xl md:text-2xl text-[var(--tc-text-primary)] leading-relaxed font-500 italic mb-4"
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
            className="text-2xl md:text-3xl font-700 text-[var(--tc-text-primary)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.timelineTitle}
          </h2>
        </Reveal>
        <RevealStagger className="space-y-5 mb-16" stagger={0.1}>
          {t.timeline.map((step, i) => (
            <RevealItem key={i}>
              <div className="relative pl-8 pb-2 border-l border-[var(--tc-border)]">
                <span className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--tc-blue)]" />
                <div className="text-xs text-[var(--tc-blue-text)] uppercase tracking-[0.2em] mb-1">
                  {step.week}
                </div>
                <h3
                  className="text-lg md:text-xl font-700 text-[var(--tc-text-primary)] mb-2"
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
            className="text-2xl md:text-3xl font-700 text-[var(--tc-text-primary)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.stackTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {t.stack.map((s, i) => (
              <div
                key={i}
                className="tc-card p-5"
              >
                <div
                  className="font-700 text-[var(--tc-text-primary)] text-base mb-1"
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
          <div className="tc-navy-section relative mt-20 p-10 md:p-14 rounded-[var(--tc-radius-xl)] text-center overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--tc-blue)] opacity-20 blur-3xl"
            />
            <h2
              className="text-2xl md:text-4xl font-700 mb-4 relative text-[var(--tc-text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.ctaTitle}
            </h2>
            <p className="text-[var(--tc-text-secondary)] text-base md:text-lg max-w-2xl mx-auto mb-8 relative">
              {t.ctaText}
            </p>
            <div className="flex flex-wrap justify-center gap-3 relative">
              <m.a
                href="/aloqa"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="tc-btn-primary text-sm"
              >
                {t.ctaBtn}
              </m.a>
              <Link
                href="/case-studies"
                className="tc-btn-secondary text-sm"
              >
                {t.ctaSecondary}
              </Link>
              <Link
                href="/klinika-crm"
                className="tc-btn-secondary text-sm"
              >
                {t.ctaService}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      </main>
  );
}
