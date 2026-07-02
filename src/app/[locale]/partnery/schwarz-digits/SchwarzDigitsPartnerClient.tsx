"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type Fact = { title: string; desc: string };

type CopyShape = {
  back: string;
  badge: string;
  name: string;
  role: string;
  intro: string;
  aboutTitle: string;
  aboutParas: string[];
  factsTitle: string;
  facts: Fact[];
  meetingTitle: string;
  meetingParas: string[];
  photoGroupCaption: string;
  photoDuoCaption: string;
  partnershipTitle: string;
  partnershipParas: string[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
};

const COPY: Record<Lang, CopyShape> = {
  uz: {
    back: "← Bosh sahifa",
    badge: "Hamkorlik boshlanmoqda",
    name: "Schwarz Digits",
    role: "IT Park Uzbekistan orqali boshlangan xalqaro tanishuv va hamkorlik",
    intro:
      "IT Park Uzbekistan'da bo'lib o'tgan uchrashuvda Tezcode asoschisi Bekzod Mirzaaliyev va hamkorimiz aisolution.uz asoschisi Abbos Xamidov Schwarz Digits vakili bilan birgalikda ko'rishdi. Suhbat davomida tomonlar hamkor bo'lib ishlashga kelishib oldi — bu hali rasmiy shartnoma emas, balki tanishuv va hamkorlikning boshlanishi.",
    aboutTitle: "Schwarz Digits kim?",
    aboutParas: [
      "Schwarz Digits — Lidl va Kaufland tarmoqlariga egalik qiluvchi Schwarz Group'ning raqamli va texnologik bo'linmasi. Kompaniya \"suveren Yevropa AI ekotizimi\"ni qurish ustida ishlaydi — ya'ni Yevropa bizneslari uchun mustaqil, ishonchli AI infratuzilmasini yaratish.",
      "Schwarz Digits Capgemini, Deloitte, SAP va Intel kabi yirik texnologik va konsalting kompaniyalari bilan hamkorlikda ishlaydi. Bu — Yevropaning eng yirik chakana savdo guruhlaridan birining texnologik qanoti sifatida katta miqyosdagi loyihalar bilan shug'ullanadi degani.",
    ],
    factsTitle: "Nega bu muhim",
    facts: [
      { title: "Yevropaning yirik guruhi", desc: "Schwarz Group — Lidl va Kaufland tarmoqlariga ega, qit'adagi eng yirik savdo-texnologik guruhlardan biri." },
      { title: "Suveren AI ekotizimi", desc: "Schwarz Digits Yevropa bizneslari uchun mustaqil AI infratuzilmasini quradi." },
      { title: "Kuchli hamkorlar tarmog'i", desc: "Capgemini, Deloitte, SAP va Intel bilan birgalikda ishlaydi." },
      { title: "O'zbek IT uchun imkoniyat", desc: "Yevropaga nisbatan 3-5 barobar past narx, sifat esa taqqoslanadigan darajada — bu O'zbekiston dasturchilari uchun real imkoniyat." },
    ],
    meetingTitle: "Uchrashuv haqida",
    meetingParas: [
      "Uchrashuv IT Park Uzbekistan tashkil etgan tadbir doirasida bo'lib o'tdi — IT Park mahalliy IT kompaniyalarni xalqaro hamkorlar bilan bog'lovchi asosiy platforma sifatida ishtirok etdi.",
      "Bu — Tezcode uchun alohida emas, balki aisolution.uz bilan birgalikdagi uchrashuv edi: ikkala kompaniya ham bir-biriga hamkor bo'lib, Schwarz Digits vakili bilan birgalikda tanishdi. Suhbat davomida O'zbekiston IT sektorining Yevropa bozori uchun taklif qila oladigan imkoniyatlari — narx-sifat nisbati va tayyor jamoalar — muhokama qilindi.",
      "Bekzod Mirzaaliyevning so'zlariga ko'ra: \"hamkor bo'lib ishlaymiz\" — bu hamkorlikning boshlang'ich bosqichi, aniq shartlar va loyihalar hali kelishilmoqda.",
    ],
    photoGroupCaption: "IT Park Uzbekistan'dagi uchrashuv: Abbos Xamidov (aisolution.uz), Schwarz Digits vakili va Bekzod Mirzaaliyev (Tezcode)",
    photoDuoCaption: "Schwarz Digits vakili va Tezcode asoschisi Bekzod Mirzaaliyev",
    partnershipTitle: "Hamkorlik qanday yo'lga qo'yilmoqda",
    partnershipParas: [
      "Bu hamkorlik hali erta bosqichda — imzolangan shartnoma yoki aniq loyihalar haqida gap yo'q. Lekin IT Park orqali boshlangan bu tanishuv Tezcode uchun Yevropa texnologik ekotizimi bilan aloqa o'rnatishning birinchi qadami bo'ldi.",
      "aisolution.uz bilan hamkorlikda davom etayotgan bu jarayon — O'zbekiston IT kompaniyalarining xalqaro miqyosda tanilishi va yirik Yevropa o'yinchilari bilan ishlash imkoniyatini ko'rsatadi. Keyingi qadamlar aniqlashgach, bu sahifa yangilanadi.",
    ],
    ctaTitle: "Xalqaro loyihalar va hamkorlik haqida gaplashamizmi?",
    ctaText:
      "Bizga yozing — Tezcode jamoasi bilan bog'laning va hamkorlik imkoniyatlarini muhokama qiling.",
    ctaBtn: "Bog'lanish",
  },
  ru: {
    back: "← На главную",
    badge: "Партнёрство начинается",
    name: "Schwarz Digits",
    role: "Международное знакомство и начало партнёрства через IT Park Uzbekistan",
    intro:
      "На встрече в IT Park Uzbekistan основатель Tezcode Бекзод Мирзаалиев и основатель нашего партнёра aisolution.uz Аббос Хамидов вместе познакомились с представителем Schwarz Digits. В ходе разговора стороны договорились работать как партнёры — это ещё не официальный контракт, а начало знакомства и сотрудничества.",
    aboutTitle: "Кто такие Schwarz Digits?",
    aboutParas: [
      "Schwarz Digits — цифровое и технологическое подразделение Schwarz Group, которой принадлежат сети Lidl и Kaufland. Компания строит «суверенную европейскую AI-экосистему» — независимую и надёжную AI-инфраструктуру для европейского бизнеса.",
      "Schwarz Digits сотрудничает с такими крупными технологическими и консалтинговыми компаниями, как Capgemini, Deloitte, SAP и Intel. Это значит, что как технологическое крыло одной из крупнейших ритейл-групп Европы, компания занимается проектами большого масштаба.",
    ],
    factsTitle: "Почему это важно",
    facts: [
      { title: "Крупная европейская группа", desc: "Schwarz Group владеет сетями Lidl и Kaufland — одна из крупнейших торгово-технологических групп континента." },
      { title: "Суверенная AI-экосистема", desc: "Schwarz Digits строит независимую AI-инфраструктуру для европейского бизнеса." },
      { title: "Сильная сеть партнёров", desc: "Работает совместно с Capgemini, Deloitte, SAP и Intel." },
      { title: "Возможность для узбекского IT", desc: "Стоимость разработки в 3-5 раз ниже, чем в Европе, при сопоставимом качестве — реальный шанс для узбекских разработчиков." },
    ],
    meetingTitle: "О встрече",
    meetingParas: [
      "Встреча прошла в рамках мероприятия, организованного IT Park Uzbekistan — как основная площадка, связывающая местные IT-компании с международными партнёрами.",
      "Это была не отдельная встреча только для Tezcode, а совместная встреча с aisolution.uz: обе компании, будучи партнёрами друг друга, вместе познакомились с представителем Schwarz Digits. В ходе беседы обсуждались возможности узбекского IT-сектора для европейского рынка — соотношение цены и качества, готовые команды.",
      "По словам Бекзода Мирзаалиева: «будем работать как партнёры» — это начальный этап сотрудничества, конкретные условия и проекты пока согласовываются.",
    ],
    photoGroupCaption: "Встреча в IT Park Uzbekistan: Аббос Хамидов (aisolution.uz), представитель Schwarz Digits и Бекзод Мирзаалиев (Tezcode)",
    photoDuoCaption: "Представитель Schwarz Digits и основатель Tezcode Бекзод Мирзаалиев",
    partnershipTitle: "Как выстраивается партнёрство",
    partnershipParas: [
      "Это партнёрство пока на раннем этапе — нет подписанного контракта или конкретных проектов. Но это знакомство, начатое через IT Park, стало для Tezcode первым шагом к контакту с европейской технологической экосистемой.",
      "Этот процесс, продолжающийся в сотрудничестве с aisolution.uz, показывает возможность узнаваемости узбекских IT-компаний на международном уровне и работы с крупными европейскими игроками. Когда следующие шаги определятся, эта страница будет обновлена.",
    ],
    ctaTitle: "Хотите обсудить международные проекты и партнёрство?",
    ctaText:
      "Напишите нам — свяжитесь с командой Tezcode и обсудите возможности сотрудничества.",
    ctaBtn: "Связаться",
  },
  en: {
    back: "← Home",
    badge: "Partnership starting",
    name: "Schwarz Digits",
    role: "An introduction and early partnership formed through IT Park Uzbekistan",
    intro:
      "At a meeting hosted by IT Park Uzbekistan, Tezcode founder Bekzod Mirzaaliyev and Abbos Khamidov, founder of our partner aisolution.uz, met together with a representative of Schwarz Digits. During the conversation, the parties agreed to work as partners — this is not yet a formal contract, but the start of an acquaintance and a partnership.",
    aboutTitle: "Who is Schwarz Digits?",
    aboutParas: [
      "Schwarz Digits is the digital and technology arm of Schwarz Group, which owns the Lidl and Kaufland retail chains. The company is building a \"sovereign European AI ecosystem\" — an independent, trustworthy AI infrastructure for European businesses.",
      "Schwarz Digits works alongside major technology and consulting firms such as Capgemini, Deloitte, SAP and Intel. As the technology arm of one of Europe's largest retail groups, it operates at significant scale.",
    ],
    factsTitle: "Why this matters",
    facts: [
      { title: "A major European group", desc: "Schwarz Group owns the Lidl and Kaufland retail chains — one of the continent's largest retail-and-technology groups." },
      { title: "Sovereign AI ecosystem", desc: "Schwarz Digits is building an independent AI infrastructure for European businesses." },
      { title: "A strong partner network", desc: "Works alongside Capgemini, Deloitte, SAP and Intel." },
      { title: "An opening for Uzbek IT", desc: "Development costs 3-5x lower than in Europe, with comparable quality — a real opportunity for Uzbek developers." },
    ],
    meetingTitle: "About the meeting",
    meetingParas: [
      "The meeting took place at an event organized by IT Park Uzbekistan, which serves as the primary platform connecting local IT companies with international partners.",
      "This wasn't a Tezcode-only meeting — it was a joint meeting together with aisolution.uz: both companies, being partners of each other, met the Schwarz Digits representative together. The conversation covered what Uzbekistan's IT sector can offer the European market — cost-to-quality ratio and ready teams.",
      "In Bekzod Mirzaaliyev's words: \"we will work as partners\" — this is an early stage of the collaboration; specific terms and projects are still being worked out.",
    ],
    photoGroupCaption: "The meeting at IT Park Uzbekistan: Abbos Khamidov (aisolution.uz), the Schwarz Digits representative, and Bekzod Mirzaaliyev (Tezcode)",
    photoDuoCaption: "The Schwarz Digits representative with Tezcode founder Bekzod Mirzaaliyev",
    partnershipTitle: "How the partnership is forming",
    partnershipParas: [
      "This partnership is still at an early stage — there is no signed contract or specific projects yet. But this introduction, started through IT Park, was a first step for Tezcode toward the European tech ecosystem.",
      "This process, ongoing alongside aisolution.uz, shows the potential for Uzbek IT companies to be recognized internationally and to work with major European players. This page will be updated as next steps are defined.",
    ],
    ctaTitle: "Want to talk about international projects and partnership?",
    ctaText:
      "Get in touch — reach out to the Tezcode team and discuss collaboration opportunities.",
    ctaBtn: "Contact us",
  },
  ar: {
    back: "← الرئيسية",
    badge: "الشراكة تبدأ",
    name: "Schwarz Digits",
    role: "تعارف دولي وبداية شراكة عبر IT Park Uzbekistan",
    intro:
      "في اجتماع استضافه IT Park Uzbekistan، التقى مؤسس Tezcode بيكزود ميرزاعلييف وعباس حميدوف مؤسس شريكنا aisolution.uz معًا بممثل عن Schwarz Digits. خلال الحديث، اتفق الطرفان على العمل كشركاء — وهذا ليس عقدًا رسميًا بعد، بل بداية تعارف وشراكة.",
    aboutTitle: "من هي Schwarz Digits؟",
    aboutParas: [
      "Schwarz Digits هي الذراع الرقمية والتقنية لمجموعة Schwarz Group، المالكة لسلسلتي Lidl وKaufland. تعمل الشركة على بناء \"نظام بيئي أوروبي سيادي للذكاء الاصطناعي\" — بنية تحتية مستقلة وموثوقة للذكاء الاصطناعي للشركات الأوروبية.",
      "تعمل Schwarz Digits جنبًا إلى جنب مع شركات تقنية واستشارية كبرى مثل Capgemini وDeloitte وSAP وIntel. بصفتها الذراع التقنية لإحدى أكبر مجموعات التجزئة في أوروبا، فإنها تعمل على نطاق واسع.",
    ],
    factsTitle: "لماذا هذا مهم",
    facts: [
      { title: "مجموعة أوروبية كبرى", desc: "تمتلك Schwarz Group سلسلتي Lidl وKaufland — من أكبر مجموعات التجزئة والتقنية في القارة." },
      { title: "نظام بيئي سيادي للذكاء الاصطناعي", desc: "تبني Schwarz Digits بنية تحتية مستقلة للذكاء الاصطناعي للشركات الأوروبية." },
      { title: "شبكة شركاء قوية", desc: "تعمل جنبًا إلى جنب مع Capgemini وDeloitte وSAP وIntel." },
      { title: "فرصة لقطاع تقنية المعلومات الأوزبكي", desc: "تكلفة التطوير أقل بـ 3-5 مرات من أوروبا مع جودة مماثلة — فرصة حقيقية للمطورين الأوزبك." },
    ],
    meetingTitle: "عن الاجتماع",
    meetingParas: [
      "عُقد الاجتماع ضمن فعالية نظمها IT Park Uzbekistan، بصفته المنصة الرئيسية التي تربط شركات تقنية المعلومات المحلية بالشركاء الدوليين.",
      "لم يكن هذا اجتماعًا خاصًا بـ Tezcode فقط، بل اجتماعًا مشتركًا مع aisolution.uz: التقت الشركتان، كونهما شريكتين لبعضهما، بممثل Schwarz Digits معًا. تناول الحديث ما يمكن أن يقدّمه قطاع تقنية المعلومات الأوزبكي للسوق الأوروبية — نسبة التكلفة إلى الجودة والفرق الجاهزة.",
      "وبحسب كلمات بيكزود ميرزاعلييف: \"سنعمل كشركاء\" — وهذه مرحلة مبكرة من التعاون، ولا تزال الشروط والمشاريع المحددة قيد النقاش.",
    ],
    photoGroupCaption: "الاجتماع في IT Park Uzbekistan: عباس حميدوف (aisolution.uz)، وممثل Schwarz Digits، وبيكزود ميرزاعلييف (Tezcode)",
    photoDuoCaption: "ممثل Schwarz Digits مع مؤسس Tezcode بيكزود ميرزاعلييف",
    partnershipTitle: "كيف تتشكل الشراكة",
    partnershipParas: [
      "لا تزال هذه الشراكة في مرحلة مبكرة — لا يوجد عقد موقّع أو مشاريع محددة بعد. لكن هذا التعارف الذي بدأ عبر IT Park كان خطوة أولى لـ Tezcode نحو النظام البيئي التقني الأوروبي.",
      "هذه العملية المستمرة بالتعاون مع aisolution.uz تُظهر إمكانية تعرّف شركات تقنية المعلومات الأوزبكية دوليًا والعمل مع لاعبين أوروبيين كبار. سيتم تحديث هذه الصفحة عند تحديد الخطوات التالية.",
    ],
    ctaTitle: "هل تريد التحدث عن مشاريع دولية وشراكة؟",
    ctaText: "تواصل معنا — تواصل مع فريق Tezcode وناقش فرص التعاون.",
    ctaBtn: "تواصل معنا",
  },
  uk: {
    back: "← На головну",
    badge: "Партнерство починається",
    name: "Schwarz Digits",
    role: "Міжнародне знайомство та початок партнерства через IT Park Uzbekistan",
    intro:
      "На зустрічі, організованій IT Park Uzbekistan, засновник Tezcode Бекзод Мірзаалієв та засновник нашого партнера aisolution.uz Аббос Хамідов разом познайомилися з представником Schwarz Digits. У розмові сторони домовилися працювати як партнери — це ще не офіційний контракт, а початок знайомства й співпраці.",
    aboutTitle: "Хто такі Schwarz Digits?",
    aboutParas: [
      "Schwarz Digits — цифровий і технологічний підрозділ Schwarz Group, якій належать мережі Lidl та Kaufland. Компанія будує «суверенну європейську AI-екосистему» — незалежну й надійну AI-інфраструктуру для європейського бізнесу.",
      "Schwarz Digits співпрацює з такими великими технологічними та консалтинговими компаніями, як Capgemini, Deloitte, SAP та Intel. Як технологічне крило однієї з найбільших рітейл-груп Європи, компанія працює у значному масштабі.",
    ],
    factsTitle: "Чому це важливо",
    facts: [
      { title: "Велика європейська група", desc: "Schwarz Group володіє мережами Lidl та Kaufland — одна з найбільших торговельно-технологічних груп континенту." },
      { title: "Суверенна AI-екосистема", desc: "Schwarz Digits будує незалежну AI-інфраструктуру для європейського бізнесу." },
      { title: "Потужна мережа партнерів", desc: "Працює разом із Capgemini, Deloitte, SAP та Intel." },
      { title: "Можливість для узбецького IT", desc: "Вартість розробки у 3-5 разів нижча, ніж у Європі, за порівнянної якості — реальний шанс для узбецьких розробників." },
    ],
    meetingTitle: "Про зустріч",
    meetingParas: [
      "Зустріч відбулася в рамках заходу, організованого IT Park Uzbekistan — як основний майданчик, що з'єднує місцеві IT-компанії з міжнародними партнерами.",
      "Це була не окрема зустріч лише для Tezcode, а спільна зустріч з aisolution.uz: обидві компанії, будучи партнерами одна одної, разом познайомилися з представником Schwarz Digits. У розмові обговорювалися можливості узбецького IT-сектору для європейського ринку — співвідношення ціни та якості, готові команди.",
      "За словами Бекзода Мірзаалієва: «працюватимемо як партнери» — це початковий етап співпраці, конкретні умови й проєкти ще узгоджуються.",
    ],
    photoGroupCaption: "Зустріч в IT Park Uzbekistan: Аббос Хамідов (aisolution.uz), представник Schwarz Digits і Бекзод Мірзаалієв (Tezcode)",
    photoDuoCaption: "Представник Schwarz Digits та засновник Tezcode Бекзод Мірзаалієв",
    partnershipTitle: "Як формується партнерство",
    partnershipParas: [
      "Це партнерство поки на ранньому етапі — немає підписаного контракту чи конкретних проєктів. Але це знайомство, розпочате через IT Park, стало для Tezcode першим кроком до європейської технологічної екосистеми.",
      "Цей процес, що триває у співпраці з aisolution.uz, показує можливість впізнаваності узбецьких IT-компаній на міжнародному рівні та роботи з великими європейськими гравцями. Коли наступні кроки визначаться, цю сторінку буде оновлено.",
    ],
    ctaTitle: "Хочете обговорити міжнародні проєкти та партнерство?",
    ctaText:
      "Напишіть нам — зв'яжіться з командою Tezcode й обговоріть можливості співпраці.",
    ctaBtn: "Зв'язатися",
  },
};

export function SchwarzDigitsPartnerClient() {
  const locale = useLocale() as Lang;
  const c = COPY[locale] ?? COPY.uz;

  return (
    <main className="relative min-h-screen bg-[var(--tc-ink)] pt-28 pb-24">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 0%, var(--tc-blue-dim), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Back */}
        <Reveal>
          <Link
            href="/"
            className="inline-block text-sm text-[var(--tc-text-muted)] transition-colors hover:text-[var(--tc-text-primary)]"
          >
            {c.back}
          </Link>
        </Reveal>

        {/* Hero */}
        <Reveal className="mt-8 flex flex-col items-center text-center" delay={0.05}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--tc-border)] bg-[var(--tc-surface-1)] px-4 py-1.5 text-xs font-500 text-[var(--tc-blue-text)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--tc-blue-light)]" />
            {c.badge}
          </span>

          <h1
            className="mt-2 text-3xl font-700 text-[var(--tc-text-primary)] md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.name}
          </h1>
          <p className="mt-2 text-base text-[var(--tc-blue-text)]">{c.role}</p>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--tc-text-secondary)]">
            {c.intro}
          </p>
        </Reveal>

        {/* Photos */}
        <RevealStagger className="mt-14 grid gap-4 md:grid-cols-2">
          <RevealItem className="overflow-hidden rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/partners/schwarz-digits-meeting-group.jpg"
                alt={c.photoGroupCaption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="p-4 text-xs leading-relaxed text-[var(--tc-text-muted)]">
              {c.photoGroupCaption}
            </p>
          </RevealItem>
          <RevealItem className="overflow-hidden rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/partners/schwarz-digits-meeting-duo.jpg"
                alt={c.photoDuoCaption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="p-4 text-xs leading-relaxed text-[var(--tc-text-muted)]">
              {c.photoDuoCaption}
            </p>
          </RevealItem>
        </RevealStagger>

        {/* About */}
        <section className="mt-16">
          <Reveal>
            <h2
              className="mb-4 text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.aboutTitle}
            </h2>
            <div className="space-y-4">
              {c.aboutParas.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-[var(--tc-text-secondary)]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Facts */}
        <section className="mt-16">
          <h2
            className="mb-6 text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.factsTitle}
          </h2>
          <RevealStagger className="grid gap-4 md:grid-cols-2">
            {c.facts.map((f, i) => (
              <RevealItem
                key={i}
                className="rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-6 transition-colors hover:border-[var(--tc-border-bright)]"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[var(--tc-radius-sm)] bg-[var(--tc-blue-dim)] text-sm font-700 text-[var(--tc-blue-text)]">
                    {i + 1}
                  </span>
                  <h3 className="font-600 text-[var(--tc-text-primary)]">
                    {f.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[var(--tc-text-muted)]">
                  {f.desc}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </section>

        {/* Meeting */}
        <section className="mt-16">
          <Reveal>
            <h2
              className="mb-4 text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.meetingTitle}
            </h2>
            <div className="space-y-4">
              {c.meetingParas.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-[var(--tc-text-secondary)]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Partnership */}
        <section className="mt-16">
          <Reveal>
            <h2
              className="mb-4 text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.partnershipTitle}
            </h2>
            <div className="space-y-4">
              {c.partnershipParas.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-[var(--tc-text-secondary)]"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-[var(--tc-radius-xl)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-10 text-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(80% 100% at 50% 0%, var(--tc-blue-dim), transparent 70%)",
              }}
            />
            <h2
              className="relative text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.ctaTitle}
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--tc-text-secondary)]">
              {c.ctaText}
            </p>
            <Link
              href="/#contact"
              className="relative mt-6 inline-flex items-center justify-center rounded-[var(--tc-radius-md)] bg-[var(--tc-blue)] px-7 py-3 text-sm font-600 text-white transition-all duration-300 hover:bg-[var(--tc-blue-light)]"
            >
              {c.ctaBtn}
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
