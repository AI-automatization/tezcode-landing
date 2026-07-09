import type { FaqItem } from "@/components/FaqAccordion";

export type FaqLang = "uz" | "ru" | "en" | "ar" | "uk";

export type FaqBlock = {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  items: FaqItem[];
};

// Home-page FAQ — general "what is Tezcode / who / where / how" questions that
// answer engines get asked most. Facts kept in sync with getOrganizationSchema
// (founded 2024, IT Park resident, Amir Temur 10, Claude/GPT/LangChain stack).
export const HOME_FAQ: Record<FaqLang, FaqBlock> = {
  uz: {
    badge: "Savol-javob",
    title: "Ko'p so'raladigan",
    titleAccent: "savollar",
    subtitle: "Tezcode haqida eng ko'p beriladigan savollarga qisqa javoblar.",
    items: [
      {
        q: "Tezcode nima bilan shug'ullanadi?",
        a: "Tezcode — Toshkentda joylashgan AI Software Factory. Biznes uchun AI avtomatlashtirish, AI agentlar, chatbotlar, POS tizimlari, klinika CRM va buyurtma dasturlar ishlab chiqamiz. 2024-yilda tashkil topgan, IT Park rezidenti.",
      },
      {
        q: "Tezcode qaysi mahsulotlarni taklif qiladi?",
        a: "Tayyor mahsulotlar: RAOS (do'kon uchun POS tizimi), ClinicaGo (klinika CRM), WorkControl (xodim nazorati), HamshiraGo (tibbiy platforma) va WeWatch. Bundan tashqari buyurtma dasturlar va AI avtomatlashtirish xizmatlari.",
      },
      {
        q: "Tezcode qanday AI texnologiyalaridan foydalanadi?",
        a: "Biz Anthropic Claude, OpenAI GPT va LangChain / LangGraph texnologiyalaridan foydalanamiz — tabiiy tilni tushunish, mijoz bilan suhbat, hujjat tahlili va ko'p qadamli avtomatlashtirish uchun.",
      },
      {
        q: "Tezcode qayerda joylashgan?",
        a: "Toshkent shahrida — Amir Temur shoh ko'chasi, 10. Butun O'zbekiston bo'ylab masofadan xizmat ko'rsatamiz.",
      },
      {
        q: "Tezcode bilan hamkorlikni qanday boshlash mumkin?",
        a: "Bepul 30 daqiqalik konsultatsiyadan boshlanadi: biznesingizni tahlil qilamiz va qaysi jarayonlarni avtomatlashtirish foydali ekanini ko'rsatamiz. Telegram yoki sayt orqali bog'laning.",
      },
    ],
  },
  ru: {
    badge: "Вопросы и ответы",
    title: "Часто задаваемые",
    titleAccent: "вопросы",
    subtitle: "Короткие ответы на самые частые вопросы о Tezcode.",
    items: [
      {
        q: "Чем занимается Tezcode?",
        a: "Tezcode — AI Software Factory в Ташкенте. Мы разрабатываем AI-автоматизацию для бизнеса, AI-агентов, чат-ботов, POS-системы, CRM для клиник и заказные программы. Основана в 2024 году, резидент IT Park.",
      },
      {
        q: "Какие продукты предлагает Tezcode?",
        a: "Готовые продукты: RAOS (POS-система для магазинов), ClinicaGo (CRM для клиник), WorkControl (контроль сотрудников), HamshiraGo (медицинская платформа) и WeWatch. А также заказная разработка и услуги AI-автоматизации.",
      },
      {
        q: "Какие AI-технологии использует Tezcode?",
        a: "Мы используем Anthropic Claude, OpenAI GPT и LangChain / LangGraph — для понимания естественного языка, диалога с клиентами, анализа документов и многошаговой автоматизации.",
      },
      {
        q: "Где находится Tezcode?",
        a: "В Ташкенте — улица Амира Темура, 10. Работаем удалённо по всему Узбекистану.",
      },
      {
        q: "Как начать сотрудничество с Tezcode?",
        a: "Начинаем с бесплатной 30-минутной консультации: анализируем ваш бизнес и показываем, какие процессы выгодно автоматизировать. Свяжитесь через Telegram или сайт.",
      },
    ],
  },
  en: {
    badge: "FAQ",
    title: "Frequently asked",
    titleAccent: "questions",
    subtitle: "Short answers to the most common questions about Tezcode.",
    items: [
      {
        q: "What does Tezcode do?",
        a: "Tezcode is an AI Software Factory based in Tashkent. We build AI automation for business, AI agents, chatbots, POS systems, clinic CRM and custom software. Founded in 2024, an IT Park resident.",
      },
      {
        q: "What products does Tezcode offer?",
        a: "Ready-made products: RAOS (POS system for stores), ClinicaGo (clinic CRM), WorkControl (employee monitoring), HamshiraGo (medical platform) and WeWatch. Plus custom development and AI automation services.",
      },
      {
        q: "What AI technologies does Tezcode use?",
        a: "We use Anthropic Claude, OpenAI GPT and LangChain / LangGraph — for natural-language understanding, customer conversations, document analysis and multi-step automation.",
      },
      {
        q: "Where is Tezcode located?",
        a: "In Tashkent — 10 Amir Temur Avenue. We serve clients remotely across all of Uzbekistan.",
      },
      {
        q: "How do I start working with Tezcode?",
        a: "It starts with a free 30-minute consultation: we analyze your business and show which processes are worth automating. Reach out via Telegram or the website.",
      },
    ],
  },
  ar: {
    badge: "الأسئلة الشائعة",
    title: "الأسئلة",
    titleAccent: "الشائعة",
    subtitle: "إجابات موجزة عن أكثر الأسئلة شيوعًا حول Tezcode.",
    items: [
      {
        q: "ماذا تفعل Tezcode؟",
        a: "Tezcode هي مصنع برمجيات ذكاء اصطناعي في طشقند. نطوّر أتمتة الأعمال بالذكاء الاصطناعي، ووكلاء الذكاء الاصطناعي، وروبوتات الدردشة، وأنظمة POS، وCRM للعيادات، وبرمجيات مخصصة. تأسست عام 2024، ومقيمة في IT Park.",
      },
      {
        q: "ما المنتجات التي تقدّمها Tezcode؟",
        a: "منتجات جاهزة: RAOS (نظام POS للمتاجر)، ClinicaGo (CRM للعيادات)، WorkControl (مراقبة الموظفين)، HamshiraGo (منصة طبية) وWeWatch. بالإضافة إلى التطوير المخصص وخدمات أتمتة الذكاء الاصطناعي.",
      },
      {
        q: "ما تقنيات الذكاء الاصطناعي التي تستخدمها Tezcode؟",
        a: "نستخدم Anthropic Claude وOpenAI GPT وLangChain / LangGraph — لفهم اللغة الطبيعية، ومحادثة العملاء، وتحليل المستندات، والأتمتة متعددة الخطوات.",
      },
      {
        q: "أين تقع Tezcode؟",
        a: "في طشقند — شارع أمير تيمور، 10. نخدم العملاء عن بُعد في جميع أنحاء أوزبكستان.",
      },
      {
        q: "كيف أبدأ العمل مع Tezcode؟",
        a: "يبدأ بجلسة استشارية مجانية مدتها 30 دقيقة: نحلّل عملك ونوضّح العمليات التي يجدر أتمتتها. تواصل عبر Telegram أو الموقع.",
      },
    ],
  },
  uk: {
    badge: "Питання та відповіді",
    title: "Часті",
    titleAccent: "запитання",
    subtitle: "Короткі відповіді на найпоширеніші запитання про Tezcode.",
    items: [
      {
        q: "Чим займається Tezcode?",
        a: "Tezcode — AI Software Factory у Ташкенті. Ми розробляємо AI-автоматизацію для бізнесу, AI-агентів, чат-ботів, POS-системи, CRM для клінік і замовні програми. Заснована 2024 року, резидент IT Park.",
      },
      {
        q: "Які продукти пропонує Tezcode?",
        a: "Готові продукти: RAOS (POS-система для магазинів), ClinicaGo (CRM для клінік), WorkControl (контроль співробітників), HamshiraGo (медична платформа) та WeWatch. А також замовна розробка й послуги AI-автоматизації.",
      },
      {
        q: "Які AI-технології використовує Tezcode?",
        a: "Ми використовуємо Anthropic Claude, OpenAI GPT і LangChain / LangGraph — для розуміння природної мови, діалогу з клієнтами, аналізу документів і багатокрокової автоматизації.",
      },
      {
        q: "Де розташована Tezcode?",
        a: "У Ташкенті — вулиця Аміра Темура, 10. Працюємо віддалено по всьому Узбекистану.",
      },
      {
        q: "Як почати співпрацю з Tezcode?",
        a: "Починаємо з безкоштовної 30-хвилинної консультації: аналізуємо ваш бізнес і показуємо, які процеси варто автоматизувати. Зв'яжіться через Telegram або сайт.",
      },
    ],
  },
};

// Pricing-page FAQ — highest-intent "how much / what models / prepayment"
// questions. A pricing page is the top AEO target ("how much does X cost").
export const PRICING_FAQ: Record<FaqLang, FaqBlock> = {
  uz: {
    badge: "Narxlar bo'yicha savollar",
    title: "Narx haqida",
    titleAccent: "savol-javob",
    subtitle: "Tariflar va to'lov modellari haqida eng ko'p beriladigan savollar.",
    items: [
      {
        q: "Tezcode xizmatlari qancha turadi?",
        a: "Narx model va hajmga bog'liq. Tayyor SaaS mahsulotlar oylik obuna asosida, buyurtma dasturlar loyiha bo'yicha (to'lov 30% oldindan), AI avtomatlashtirish esa qamrovga qarab. Aniq narx uchun bepul konsultatsiya oling.",
      },
      {
        q: "Qanday narx modellari mavjud?",
        a: "Uchta model: (1) tayyor SaaS mahsulot — oylik obuna; (2) buyurtma dastur — loyiha narxi, 30% oldindan; (3) AI avtomatlashtirish — qamrov va integratsiyalarga qarab.",
      },
      {
        q: "Buyurtma dasturda to'lov qanday amalga oshiriladi?",
        a: "To'lov 30% oldindan boshlanadi, qolgani kelishilgan bosqichlar (milestone) bo'yicha bosqichma-bosqich. Shaffof, yashirin to'lovsiz.",
      },
      {
        q: "Bepul konsultatsiya bormi?",
        a: "Ha — 30 daqiqalik bepul konsultatsiya. Biznesingizni tahlil qilib, qaysi yechim mos kelishini va taxminiy narxni aytamiz.",
      },
      {
        q: "SaaS obuna va buyurtma dastur o'rtasidagi farq nima?",
        a: "SaaS — tayyor mahsulot (masalan RAOS), tez ishga tushadi, oylik to'lov. Buyurtma dastur sizning ehtiyojingizga maxsus yaratiladi — ko'proq vaqt va investitsiya talab qiladi.",
      },
    ],
  },
  ru: {
    badge: "Вопросы о ценах",
    title: "О ценах —",
    titleAccent: "вопросы и ответы",
    subtitle: "Частые вопросы о тарифах и моделях оплаты.",
    items: [
      {
        q: "Сколько стоят услуги Tezcode?",
        a: "Цена зависит от модели и объёма. Готовые SaaS-продукты — по месячной подписке, заказные программы — по проекту (оплата 30% предоплата), AI-автоматизация — по охвату. Для точной цены закажите бесплатную консультацию.",
      },
      {
        q: "Какие модели ценообразования есть?",
        a: "Три модели: (1) готовый SaaS-продукт — месячная подписка; (2) заказная программа — цена проекта, 30% предоплата; (3) AI-автоматизация — в зависимости от охвата и интеграций.",
      },
      {
        q: "Как происходит оплата заказной программы?",
        a: "Оплата начинается с 30% предоплаты, остальное — поэтапно по согласованным этапам (milestone). Прозрачно, без скрытых платежей.",
      },
      {
        q: "Есть ли бесплатная консультация?",
        a: "Да — бесплатная 30-минутная консультация. Анализируем ваш бизнес и называем подходящее решение и ориентировочную цену.",
      },
      {
        q: "В чём разница между SaaS-подпиской и заказной программой?",
        a: "SaaS — готовый продукт (например RAOS), быстрый запуск, месячная оплата. Заказная программа создаётся под ваши задачи — требует больше времени и инвестиций.",
      },
    ],
  },
  en: {
    badge: "Pricing questions",
    title: "Pricing —",
    titleAccent: "questions & answers",
    subtitle: "Common questions about plans and payment models.",
    items: [
      {
        q: "How much do Tezcode services cost?",
        a: "Price depends on the model and scope. Ready-made SaaS products run on a monthly subscription, custom software is priced per project (30% upfront), and AI automation depends on scope. Book a free consultation for an exact quote.",
      },
      {
        q: "What pricing models are available?",
        a: "Three models: (1) ready-made SaaS product — monthly subscription; (2) custom software — project price, 30% upfront; (3) AI automation — based on scope and integrations.",
      },
      {
        q: "How is payment handled for custom software?",
        a: "Payment starts with 30% upfront, the rest in stages tied to agreed milestones. Transparent, with no hidden fees.",
      },
      {
        q: "Is there a free consultation?",
        a: "Yes — a free 30-minute consultation. We analyze your business and tell you the right solution plus an estimated price.",
      },
      {
        q: "What's the difference between a SaaS subscription and custom software?",
        a: "SaaS is a ready-made product (e.g. RAOS) that launches fast on a monthly fee. Custom software is built specifically for your needs — it takes more time and investment.",
      },
    ],
  },
  ar: {
    badge: "أسئلة عن الأسعار",
    title: "الأسعار —",
    titleAccent: "أسئلة وأجوبة",
    subtitle: "أسئلة شائعة حول الباقات ونماذج الدفع.",
    items: [
      {
        q: "كم تكلفة خدمات Tezcode؟",
        a: "يعتمد السعر على النموذج والنطاق. منتجات SaaS الجاهزة باشتراك شهري، والبرمجيات المخصصة تُسعّر لكل مشروع (دفعة مقدمة 30%)، وأتمتة الذكاء الاصطناعي حسب النطاق. احجز استشارة مجانية لعرض سعر دقيق.",
      },
      {
        q: "ما نماذج التسعير المتاحة؟",
        a: "ثلاثة نماذج: (1) منتج SaaS جاهز — اشتراك شهري؛ (2) برمجيات مخصصة — سعر المشروع، 30% مقدمًا؛ (3) أتمتة الذكاء الاصطناعي — حسب النطاق والتكاملات.",
      },
      {
        q: "كيف يتم الدفع للبرمجيات المخصصة؟",
        a: "يبدأ الدفع بدفعة مقدمة 30%، والباقي على مراحل مرتبطة بمعالم متفق عليها. شفاف وبدون رسوم خفية.",
      },
      {
        q: "هل توجد استشارة مجانية؟",
        a: "نعم — استشارة مجانية مدتها 30 دقيقة. نحلّل عملك ونخبرك بالحل المناسب والسعر التقديري.",
      },
      {
        q: "ما الفرق بين اشتراك SaaS والبرمجيات المخصصة؟",
        a: "SaaS منتج جاهز (مثل RAOS) يبدأ بسرعة برسوم شهرية. أما البرمجيات المخصصة فتُبنى خصيصًا لاحتياجاتك — وتتطلب وقتًا واستثمارًا أكبر.",
      },
    ],
  },
  uk: {
    badge: "Питання про ціни",
    title: "Про ціни —",
    titleAccent: "запитання та відповіді",
    subtitle: "Часті запитання про тарифи та моделі оплати.",
    items: [
      {
        q: "Скільки коштують послуги Tezcode?",
        a: "Ціна залежить від моделі та обсягу. Готові SaaS-продукти — за місячною підпискою, замовні програми — за проєктом (оплата 30% передоплата), AI-автоматизація — за охопленням. Для точної ціни замовте безкоштовну консультацію.",
      },
      {
        q: "Які моделі ціноутворення є?",
        a: "Три моделі: (1) готовий SaaS-продукт — місячна підписка; (2) замовна програма — ціна проєкту, 30% передоплата; (3) AI-автоматизація — залежно від охоплення та інтеграцій.",
      },
      {
        q: "Як відбувається оплата замовної програми?",
        a: "Оплата починається з 30% передоплати, решта — поетапно за узгодженими етапами (milestone). Прозоро, без прихованих платежів.",
      },
      {
        q: "Чи є безкоштовна консультація?",
        a: "Так — безкоштовна 30-хвилинна консультація. Аналізуємо ваш бізнес і називаємо відповідне рішення та орієнтовну ціну.",
      },
      {
        q: "Яка різниця між SaaS-підпискою та замовною програмою?",
        a: "SaaS — готовий продукт (наприклад RAOS), швидкий запуск, місячна оплата. Замовна програма створюється під ваші задачі — потребує більше часу та інвестицій.",
      },
    ],
  },
};
