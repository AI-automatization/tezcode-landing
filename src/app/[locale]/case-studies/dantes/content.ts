import type { CaseStoryCopy, CaseStoryLang } from "@/components/case-study/CaseStoryClient";

// Dantes case — work in progress. Only what has already been made public:
// the on-site meeting and the report-analysis AI assistants being built.
// No results, contract amounts, staff details or partner names.

export const CONTENT: Record<CaseStoryLang, CaseStoryCopy> = {
  uz: {
    back: "← Barcha keyslar",
    badge: "Keys · Qurilish",
    title: "Dantes: qurilish kompaniyasi uchun hisobotlarni tahlil qiladigan AI yordamchilar",
    intro: "Qurilish kompaniyasi Dantes uchun Tezcode kompaniya hisobotlarini tahlil qilib, rahbarga eng muhim ma'lumotni yetkazadigan AI yordamchilarni ishlab chiqmoqda.",
    stats: [
      { value: "Joyida", label: "jamoa bilan uchrashuv va jarayonlar tahlili" },
      { value: "Hisobotlar", label: "AI tahlil qiladigan asosiy manba" },
      { value: "Rahbar uchun", label: "qisqa va aniq xulosa" },
      { value: "Jarayonda", label: "natijalar shu sahifada e'lon qilinadi" },
    ],
    factsTitle: "Loyiha haqida",
    facts: [
      { label: "Mijoz", value: "Dantes Construction" },
      { label: "Soha", value: "Qurilish" },
      { label: "Mamlakat", value: "O'zbekiston" },
      { label: "Xizmat", value: "AI yordamchilar, hisobot tahlili" },
      { label: "Holat", value: "Ishlab chiqilmoqda" },
    ],
    sideCta: "Konsultatsiya olish",
    problemTitle: "Rahbar har bir hisobotni o'qishga ulgurmaydi",
    problemParas: [
      "Qurilish kompaniyasida har kuni ko'p hisobot va ma'lumot to'planadi. Muhim signal ko'pincha uzun matnlar orasida yo'qolib qoladi, rahbar esa hammasini o'zi o'qib chiqishga majbur bo'ladi.",
    ],
    solutionTitle: "Hisobotlardan muhimini ajratib beradigan AI",
    solutionParas: [
      "Tezcode jamoasi Dantes ofisida jamoa bilan uchrashib, qurilishdagi kundalik ish jarayonlarini o'rgandi va ularni AI yordamida qanday yengillashtirish mumkinligini muhokama qildi.",
      "Hozir kompaniya hisobotlarini tahlil qiladigan va rahbarga muhim ma'lumotni yetkazadigan AI yordamchilar ustida ishlayapmiz. Maqsad — rahbar har bir hisobotni o'qimasdan, nima muhimligini darhol ko'rishi.",
    ],
    gallery: [
      { src: "/cases/dantes/meeting-6.jpg", alt: "Tezcode team visiting Dantes Construction", width: 720, height: 1280 },
      { src: "/cases/dantes/meeting-10.jpg", alt: "Discussing construction workflows with the Dantes team", width: 720, height: 1280 },
      { src: "/cases/dantes/meeting-14.jpg", alt: "Reviewing reports at the Dantes office", width: 720, height: 1280 },
    ],
    featuresTitle: "AI yordamchilar nima qiladi",
    features: [
      { icon: "report", title: "Hisobot tahlili", desc: "Kompaniya hisobotlarini o'qib, asosiy faktlarni ajratadi." },
      { icon: "summary", title: "Rahbarga xulosa", desc: "Eng muhim ma'lumotni rahbarga qisqa va tushunarli ko'rinishda yetkazadi." },
    ],
    timelineTitle: "Loyiha bosqichlari",
    timeline: [
      { phase: "1-bosqich", title: "Joyida tanishuv", desc: "Dantes jamoasi bilan uchrashuv: qurilishdagi ish jarayonlari va AI qayerda yordam berishi muhokama qilindi." },
      { phase: "Hozir", title: "AI yordamchilarni ishlab chiqish", desc: "Hisobotlarni tahlil qilib, rahbarga muhim ma'lumotni yetkazadigan yordamchilar qurilmoqda." },
      { phase: "Keyingi", title: "Natijalar", desc: "Ishga tushirish natijalari tayyor bo'lganda shu sahifada e'lon qilinadi." },
    ],
    ctaTitle: "Qurilish yoki ishlab chiqarish biznesingiz bormi?",
    ctaSecondary: "Boshqa keyslarni ko'rish",
    ctaService: "AI agent yaratish",
  },
  ru: {
    back: "← Все кейсы",
    badge: "Кейс · Строительство",
    title: "Dantes: ИИ-помощники для анализа отчётов в строительной компании",
    intro: "Для строительной компании Dantes Tezcode разрабатывает ИИ-помощников, которые анализируют отчёты компании и доносят главное до руководителя.",
    stats: [
      { value: "На месте", label: "встреча с командой и разбор процессов" },
      { value: "Отчёты", label: "главный источник для анализа ИИ" },
      { value: "Для руководителя", label: "краткая и точная сводка" },
      { value: "В работе", label: "результаты опубликуем здесь" },
    ],
    factsTitle: "О проекте",
    facts: [
      { label: "Клиент", value: "Dantes Construction" },
      { label: "Отрасль", value: "Строительство" },
      { label: "Страна", value: "Узбекистан" },
      { label: "Услуги", value: "ИИ-помощники, анализ отчётов" },
      { label: "Статус", value: "В разработке" },
    ],
    sideCta: "Получить консультацию",
    problemTitle: "Руководитель не успевает читать каждый отчёт",
    problemParas: [
      "В строительной компании каждый день накапливается много отчётов и данных. Важный сигнал часто теряется в длинных текстах, и руководителю приходится читать всё самому.",
    ],
    solutionTitle: "ИИ, который выделяет главное из отчётов",
    solutionParas: [
      "Команда Tezcode встретилась с командой Dantes в их офисе, изучила ежедневные процессы в строительстве и обсудила, как упростить их с помощью ИИ.",
      "Сейчас мы разрабатываем ИИ-помощников, которые анализируют отчёты компании и доносят важную информацию до руководителя. Цель — чтобы руководитель сразу видел главное, не читая каждый отчёт.",
    ],
    gallery: [
      { src: "/cases/dantes/meeting-6.jpg", alt: "Tezcode team visiting Dantes Construction", width: 720, height: 1280 },
      { src: "/cases/dantes/meeting-10.jpg", alt: "Discussing construction workflows with the Dantes team", width: 720, height: 1280 },
      { src: "/cases/dantes/meeting-14.jpg", alt: "Reviewing reports at the Dantes office", width: 720, height: 1280 },
    ],
    featuresTitle: "Что делают ИИ-помощники",
    features: [
      { icon: "report", title: "Анализ отчётов", desc: "Читают отчёты компании и выделяют ключевые факты." },
      { icon: "summary", title: "Сводка для руководителя", desc: "Доносят самое важное до руководителя кратко и понятно." },
    ],
    timelineTitle: "Этапы проекта",
    timeline: [
      { phase: "Этап 1", title: "Знакомство на месте", desc: "Встреча с командой Dantes: обсудили рабочие процессы в строительстве и где поможет ИИ." },
      { phase: "Сейчас", title: "Разработка ИИ-помощников", desc: "Строим помощников, которые анализируют отчёты и доносят важное до руководителя." },
      { phase: "Далее", title: "Результаты", desc: "Результаты запуска опубликуем на этой странице, когда они будут готовы." },
    ],
    ctaTitle: "У вас строительный или производственный бизнес?",
    ctaSecondary: "Смотреть другие кейсы",
    ctaService: "Создание ИИ-агента",
  },
  en: {
    back: "← All case studies",
    badge: "Case Study · Construction",
    title: "Dantes: AI assistants that analyze reports for a construction company",
    intro: "For the construction company Dantes, Tezcode is building AI assistants that analyze the company's reports and deliver the key information to management.",
    stats: [
      { value: "On site", label: "meeting with the team and workflow review" },
      { value: "Reports", label: "the main source the AI analyzes" },
      { value: "For management", label: "a short, precise summary" },
      { value: "In progress", label: "results will be published here" },
    ],
    factsTitle: "About the project",
    facts: [
      { label: "Client", value: "Dantes Construction" },
      { label: "Industry", value: "Construction" },
      { label: "Country", value: "Uzbekistan" },
      { label: "Services", value: "AI assistants, report analysis" },
      { label: "Status", value: "In development" },
    ],
    sideCta: "Get a consultation",
    problemTitle: "Management can't read every report",
    problemParas: [
      "A construction company collects many reports and updates every day. Important signals often get lost in long texts, and management has to read everything themselves.",
    ],
    solutionTitle: "AI that pulls out what matters",
    solutionParas: [
      "The Tezcode team met the Dantes team at their office, studied their day-to-day construction workflows and discussed how AI can make them easier.",
      "We are now building AI assistants that analyze the company's reports and deliver the key information to management, so leaders see what matters without reading every report.",
    ],
    gallery: [
      { src: "/cases/dantes/meeting-6.jpg", alt: "Tezcode team visiting Dantes Construction", width: 720, height: 1280 },
      { src: "/cases/dantes/meeting-10.jpg", alt: "Discussing construction workflows with the Dantes team", width: 720, height: 1280 },
      { src: "/cases/dantes/meeting-14.jpg", alt: "Reviewing reports at the Dantes office", width: 720, height: 1280 },
    ],
    featuresTitle: "What the AI assistants do",
    features: [
      { icon: "report", title: "Report analysis", desc: "Read the company's reports and extract the key facts." },
      { icon: "summary", title: "Summary for management", desc: "Deliver the most important information to management, short and clear." },
    ],
    timelineTitle: "Project stages",
    timeline: [
      { phase: "Stage 1", title: "On-site discovery", desc: "Meeting with the Dantes team: their construction workflows and where AI can help." },
      { phase: "Now", title: "Building the AI assistants", desc: "Assistants that analyze reports and deliver what matters to management are in development." },
      { phase: "Next", title: "Results", desc: "Launch results will be published on this page once they are ready." },
    ],
    ctaTitle: "Running a construction or manufacturing business?",
    ctaSecondary: "Explore other cases",
    ctaService: "AI agent development",
  },
};
