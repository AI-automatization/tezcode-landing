"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type Fact = { title: string; desc: string };
type QA = { q: string; a: string };

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
  positionTitle: string;
  positionParas: string[];
  faqTitle: string;
  faq: QA[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
};

const COPY: Record<Lang, CopyShape> = {
  uz: {
    back: "← Bosh sahifa",
    badge: "Hamkorlik boshlanmoqda",
    name: "Schwarz Digits",
    role: "IT Park Uzbekistan orqali Yevropaning yirik AI ekotizimi bilan to'g'ridan-to'g'ri aloqa",
    intro:
      "IT Park Uzbekistan tashkil etgan yopiq konferensiyada Tezcode asoschisi Bekzod Mirzaaliyev Schwarz Digits vakili bilan shaxsan tanishdi va suhbatlashdi — Tezcode nima qilishi, qanday yo'nalishda ishlashi haqida gapirib berdi. Suhbat yakunida tomonlar hamkor bo'lib ishlashga kelishdi.",
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
      "Uchrashuv 2026-yil iyun oxirida Toshkentda, IT Park Uzbekistan tashkil etgan yopiq konferensiya doirasida bo'lib o'tdi. Schwarz Digits vakili \"Partner Ecosystem & Growth\" konsepsiyasini taqdim etdi — Yevropa kompaniyalari EI hududidan tashqarida qanday texnologik alyanslar qurishi, hamkor tanlash mezonlari va bu tarmoqqa qanday kirish mumkinligi haqida.",
      "Konferensiyaning asosiy tezisi: \"Yevropada AI-integratorlar yetishmayapti. Pul bor, vazifalar bor, lekin tez va amaliy tarzda joriy eta oladigan jamoalar yetarli emas.\"",
      "Taqdimotdan so'ng Bekzod Mirzaaliyev Schwarz Digits vakili bilan shaxsan suhbatlashdi — Tezcode nima qilishini, qanday yo'nalishda ishlashini gapirib berdi. Yig'ilishda hamkorimiz aisolution.uz asoschisi Abbos Xamidov ham qatnashdi. Bekzod Mirzaaliyevning so'zlariga ko'ra: \"hamkor bo'lib ishlaymiz.\"",
    ],
    photoGroupCaption: "IT Park Uzbekistan'dagi uchrashuv: Abbos Xamidov (aisolution.uz), Schwarz Digits vakili va Bekzod Mirzaaliyev (Tezcode)",
    photoDuoCaption: "Schwarz Digits vakili va Tezcode asoschisi Bekzod Mirzaaliyev",
    positionTitle: "Tezcode pozitsiyasi: avval mahalliy bozor",
    positionParas: [
      "Ochig'ini aytganda — biz hozir Yevropaga shoshilmayapmiz. Bizning ustuvor vazifamiz — O'zbekistonda AI-avtomatlashtirish bo'yicha №1 bo'lish. Saytdan kelayotgan murojaatlar, asosiy so'rovlar bo'yicha o'sish — bu to'g'ri yo'nalishda ketayotganimizning belgisi.",
      "Lekin bunday uchrashuvlar muhim. Ular yo'nalish to'g'ri ekanini ko'rsatadi, va vaqti kelganda — aloqalar va bozor haqidagi tushuncha allaqachon tayyor bo'ladi.",
    ],
    faqTitle: "Savol-javob",
    faq: [
      { q: "Schwarz Digits nima va nega O'zbekistonga keldi?", a: "Schwarz Digits — Schwarz Group (Lidl, Kaufland)ning raqamli bo'linmasi. Ular suveren Yevropa AI ekotizimini qurishmoqda va Yevropa tashqarisida kuchli muhandislik jamoalariga ega texnologik hamkorlarni izlashmoqda." },
      { q: "Nega Yevropa AI-bozori O'zbekiston kompaniyalari uchun qiziqarli?", a: "Yevropa kompaniyalari yuqori maosh talablari bilan AI-integratorlar yetishmovchiligini boshdan kechirmoqda. Avtomatlashtirish, LLM va CRM-integratsiyalar bo'yicha tajribaga ega o'zbek jamoalari past narxda taqqoslanadigan sifatni taklif qila oladi." },
      { q: "O'zbek IT kompaniyasiga Yevropa bozoriga chiqish uchun nima kerak?", a: "O'lchanadigan natijali real keyslar, inglizcha hujjatlar, ma'lumotlar xavfsizligi bo'yicha asosiy talablarga moslik va — eng muhimi — Yevropa hamkori bilan to'g'ridan-to'g'ri aloqa. Aynan shunday aloqalar IT Park kabi platformalar orqali shakllanadi." },
      { q: "Tezcode Yevropa mijozlari bilan ishlaydimi?", a: "Hozircha O'zbekiston va Markaziy Osiyoga fokuslanganmiz. Schwarz Digits konferensiyasi — Yevropa yo'nalishini o'rganishning birinchi qadami. Hozirgi ustuvorligimiz — mahalliy bozorda avtomatlashtirish yetakchisi bo'lish." },
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
    role: "Прямой контакт с крупной европейской AI-экосистемой через IT Park Uzbekistan",
    intro:
      "На закрытой конференции, организованной IT Park Uzbekistan, основатель Tezcode Бекзод Мирзаалиев лично познакомился и пообщался с представителем Schwarz Digits — рассказал, чем занимается Tezcode и в каком направлении развивается компания. По итогам разговора стороны договорились работать как партнёры.",
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
      "Встреча прошла в конце июня 2026 года в Ташкенте, в рамках закрытой конференции IT Park Uzbekistan. Представитель Schwarz Digits представил концепцию «Partner Ecosystem & Growth» — как европейские компании строят технологические альянсы за пределами ЕС, какие критерии отбора партнёров и что нужно, чтобы попасть в эту сеть.",
      "Ключевой тезис конференции: «Европа испытывает дефицит AI-интеграторов. Там есть деньги, есть задачи, но не хватает команд, которые умеют быстро и практично внедрять».",
      "После презентации Бекзод Мирзаалиев лично пообщался с представителем Schwarz Digits — рассказал о Tezcode и направлении работы компании. На встрече также присутствовал основатель нашего партнёра aisolution.uz Аббос Хамидов. По словам Бекзода Мирзаалиева: «будем работать как партнёры».",
    ],
    photoGroupCaption: "Встреча в IT Park Uzbekistan: Аббос Хамидов (aisolution.uz), представитель Schwarz Digits и Бекзод Мирзаалиев (Tezcode)",
    photoDuoCaption: "Представитель Schwarz Digits и основатель Tezcode Бекзод Мирзаалиев",
    positionTitle: "Позиция Tezcode: сначала локальный рынок",
    positionParas: [
      "Честно о нашей стратегии: мы не гонимся за Европой прямо сейчас. Наш приоритет — стать №1 по AI-автоматизации бизнеса в Узбекистане. Входящие обращения с сайта, рост позиций по ключевым запросам — это сигналы, что движемся правильно.",
      "Но такие встречи важны. Они показывают, что вектор верный, и когда придёт время — контакты и понимание рынка уже будут готовы.",
    ],
    faqTitle: "Вопросы и ответы",
    faq: [
      { q: "Что такое Schwarz Digits и зачем они пришли в Узбекистан?", a: "Schwarz Digits — цифровое подразделение Schwarz Group (Lidl, Kaufland). Они строят суверенную европейскую AI-экосистему и ищут технологических партнёров за пределами Европы — там, где есть сильные инженерные команды." },
      { q: "Почему европейский AI-рынок интересен компаниям из Узбекистана?", a: "Европейские компании испытывают дефицит AI-интеграторов при высоких зарплатных ожиданиях. Узбекские команды с опытом в автоматизации, LLM и CRM-интеграциях могут предложить сопоставимое качество по более низкой стоимости." },
      { q: "Что нужно узбекской IT-компании для выхода на европейский рынок?", a: "Реальные кейсы с измеримым результатом, документация на английском, соответствие базовым требованиям по безопасности данных и — самое важное — прямой контакт с европейским партнёром. Именно такие связи формируются через площадки вроде IT Park." },
      { q: "Tezcode работает с европейскими клиентами?", a: "Сейчас мы сфокусированы на Узбекистане и Центральной Азии. Конференция Schwarz Digits — это первый шаг к изучению европейского направления. Наш текущий приоритет — стать лидером автоматизации на локальном рынке." },
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
    role: "A direct connection to a major European AI ecosystem via IT Park Uzbekistan",
    intro:
      "At a closed conference hosted by IT Park Uzbekistan, Tezcode founder Bekzod Mirzaaliyev personally met and talked with a representative of Schwarz Digits — sharing what Tezcode does and where the company is headed. By the end of the conversation, both sides agreed to work as partners.",
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
      "The meeting took place in late June 2026 in Tashkent, at a closed conference hosted by IT Park Uzbekistan. The Schwarz Digits representative presented their \"Partner Ecosystem & Growth\" concept — how European companies build technology alliances outside the EU, how partners are selected, and what it takes to join that network.",
      "The key point made at the conference: \"Europe is short on AI integrators. There's money, there's demand, but not enough teams who can implement quickly and practically.\"",
      "After the presentation, Bekzod Mirzaaliyev spoke personally with the Schwarz Digits representative — explaining what Tezcode does and where the company is headed. Abbos Khamidov, founder of our partner aisolution.uz, was also present at the meeting. In Bekzod Mirzaaliyev's words: \"we will work as partners.\"",
    ],
    photoGroupCaption: "The meeting at IT Park Uzbekistan: Abbos Khamidov (aisolution.uz), the Schwarz Digits representative, and Bekzod Mirzaaliyev (Tezcode)",
    photoDuoCaption: "The Schwarz Digits representative with Tezcode founder Bekzod Mirzaaliyev",
    positionTitle: "Tezcode's position: the local market first",
    positionParas: [
      "Honestly, about our strategy: we're not chasing Europe right now. Our priority is becoming the #1 AI automation company in Uzbekistan. Inbound leads from the site and rising rankings on key search terms are signs we're on the right track.",
      "But meetings like this matter. They confirm the direction is right, and when the time comes, the connections and market understanding will already be in place.",
    ],
    faqTitle: "Questions and answers",
    faq: [
      { q: "What is Schwarz Digits and why did they come to Uzbekistan?", a: "Schwarz Digits is the digital arm of Schwarz Group (Lidl, Kaufland). They're building a sovereign European AI ecosystem and looking for technology partners outside Europe — in places with strong engineering teams." },
      { q: "Why is the European AI market interesting for Uzbek companies?", a: "European companies face a shortage of AI integrators amid high salary expectations. Uzbek teams with experience in automation, LLMs and CRM integrations can offer comparable quality at a lower cost." },
      { q: "What does an Uzbek IT company need to enter the European market?", a: "Real cases with measurable results, English-language documentation, meeting baseline data-security requirements, and — most importantly — a direct connection to a European partner. Those connections are exactly what platforms like IT Park make possible." },
      { q: "Does Tezcode work with European clients?", a: "Right now we're focused on Uzbekistan and Central Asia. The Schwarz Digits conference is a first step toward exploring the European direction. Our current priority is leading automation in the local market." },
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
    role: "تواصل مباشر مع نظام بيئي أوروبي كبير للذكاء الاصطناعي عبر IT Park Uzbekistan",
    intro:
      "في مؤتمر مغلق نظّمه IT Park Uzbekistan، التقى مؤسس Tezcode بيكزود ميرزاعلييف شخصيًا وتحدث مع ممثل Schwarz Digits — وشرح له ما تقوم به Tezcode والاتجاه الذي تسير فيه الشركة. وفي ختام الحديث، اتفق الطرفان على العمل كشركاء.",
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
      "عُقد الاجتماع في أواخر يونيو 2026 في طشقند، ضمن مؤتمر مغلق نظّمه IT Park Uzbekistan. قدّم ممثل Schwarz Digits مفهوم \"Partner Ecosystem & Growth\" — كيف تبني الشركات الأوروبية تحالفات تقنية خارج الاتحاد الأوروبي، ومعايير اختيار الشركاء، وما هو مطلوب للانضمام إلى هذه الشبكة.",
      "الفكرة الرئيسية في المؤتمر: \"أوروبا تعاني من نقص في مدمجي الذكاء الاصطناعي. هناك أموال وهناك مهام، لكن لا توجد فرق كافية قادرة على التنفيذ بسرعة وبشكل عملي.\"",
      "بعد العرض، تحدث بيكزود ميرزاعلييف شخصيًا مع ممثل Schwarz Digits — وشرح له ما تقوم به Tezcode واتجاه عمل الشركة. وحضر الاجتماع أيضًا عباس حميدوف، مؤسس شريكنا aisolution.uz. وبحسب كلمات بيكزود ميرزاعلييف: \"سنعمل كشركاء.\"",
    ],
    photoGroupCaption: "الاجتماع في IT Park Uzbekistan: عباس حميدوف (aisolution.uz)، وممثل Schwarz Digits، وبيكزود ميرزاعلييف (Tezcode)",
    photoDuoCaption: "ممثل Schwarz Digits مع مؤسس Tezcode بيكزود ميرزاعلييف",
    positionTitle: "موقف Tezcode: السوق المحلي أولاً",
    positionParas: [
      "بصراحة عن استراتيجيتنا: نحن لا نسعى إلى أوروبا الآن. أولويتنا هي أن نكون الشركة رقم 1 في أتمتة الأعمال بالذكاء الاصطناعي في أوزبكستان. الطلبات الواردة من الموقع وارتفاع الترتيب في الكلمات المفتاحية الرئيسية — كلها إشارات على أننا نسير في الاتجاه الصحيح.",
      "لكن مثل هذه الاجتماعات مهمة. فهي تُظهر أن الاتجاه صحيح، وعندما يحين الوقت — ستكون العلاقات وفهم السوق جاهزة بالفعل.",
    ],
    faqTitle: "أسئلة وأجوبة",
    faq: [
      { q: "ما هي Schwarz Digits ولماذا جاءت إلى أوزبكستان؟", a: "Schwarz Digits هي الذراع الرقمية لمجموعة Schwarz Group (Lidl وKaufland). تبني نظامًا بيئيًا أوروبيًا سياديًا للذكاء الاصطناعي وتبحث عن شركاء تقنيين خارج أوروبا، حيث توجد فرق هندسية قوية." },
      { q: "لماذا يهم السوق الأوروبي للذكاء الاصطناعي الشركات الأوزبكية؟", a: "تعاني الشركات الأوروبية من نقص في مدمجي الذكاء الاصطناعي مع توقعات رواتب مرتفعة. يمكن للفرق الأوزبكية ذات الخبرة في الأتمتة وLLM وتكامل CRM تقديم جودة مماثلة بتكلفة أقل." },
      { q: "ماذا تحتاج شركة تقنية معلومات أوزبكية لدخول السوق الأوروبي؟", a: "حالات حقيقية بنتائج قابلة للقياس، توثيق باللغة الإنجليزية، الالتزام بالمتطلبات الأساسية لأمن البيانات، والأهم من ذلك — تواصل مباشر مع شريك أوروبي. هذه الروابط بالتحديد تتشكل عبر منصات مثل IT Park." },
      { q: "هل تعمل Tezcode مع عملاء أوروبيين؟", a: "حاليًا نركز على أوزبكستان وآسيا الوسطى. مؤتمر Schwarz Digits هو خطوة أولى لاستكشاف الاتجاه الأوروبي. أولويتنا الحالية هي أن نكون رواد الأتمتة في السوق المحلي." },
    ],
    ctaTitle: "هل تريد التحدث عن مشاريع دولية وشراكة؟",
    ctaText: "تواصل معنا — تواصل مع فريق Tezcode وناقش فرص التعاون.",
    ctaBtn: "تواصل معنا",
  },
  uk: {
    back: "← На головну",
    badge: "Партнерство починається",
    name: "Schwarz Digits",
    role: "Прямий контакт із великою європейською AI-екосистемою через IT Park Uzbekistan",
    intro:
      "На закритій конференції, організованій IT Park Uzbekistan, засновник Tezcode Бекзод Мірзаалієв особисто познайомився та поспілкувався з представником Schwarz Digits — розповів, чим займається Tezcode і в якому напрямку розвивається компанія. За підсумками розмови сторони домовилися працювати як партнери.",
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
      "Зустріч відбулася наприкінці червня 2026 року в Ташкенті, у рамках закритої конференції IT Park Uzbekistan. Представник Schwarz Digits презентував концепцію «Partner Ecosystem & Growth» — як європейські компанії будують технологічні альянси за межами ЄС, які критерії відбору партнерів і що потрібно, щоб увійти в цю мережу.",
      "Ключова теза конференції: «Європа відчуває дефіцит AI-інтеграторів. Є гроші, є завдання, але бракує команд, які вміють швидко й практично впроваджувати».",
      "Після презентації Бекзод Мірзаалієв особисто поспілкувався з представником Schwarz Digits — розповів про Tezcode та напрямок роботи компанії. На зустрічі також був присутній засновник нашого партнера aisolution.uz Аббос Хамідов. За словами Бекзода Мірзаалієва: «працюватимемо як партнери».",
    ],
    photoGroupCaption: "Зустріч в IT Park Uzbekistan: Аббос Хамідов (aisolution.uz), представник Schwarz Digits і Бекзод Мірзаалієв (Tezcode)",
    photoDuoCaption: "Представник Schwarz Digits та засновник Tezcode Бекзод Мірзаалієв",
    positionTitle: "Позиція Tezcode: спочатку локальний ринок",
    positionParas: [
      "Чесно про нашу стратегію: ми не женемося за Європою прямо зараз. Наш пріоритет — стати №1 з AI-автоматизації бізнесу в Узбекистані. Вхідні звернення з сайту, зростання позицій за ключовими запитами — це сигнали, що рухаємося у правильному напрямку.",
      "Але такі зустрічі важливі. Вони показують, що вектор правильний, і коли настане час — контакти та розуміння ринку вже будуть готові.",
    ],
    faqTitle: "Питання та відповіді",
    faq: [
      { q: "Що таке Schwarz Digits і навіщо вони приїхали в Узбекистан?", a: "Schwarz Digits — цифровий підрозділ Schwarz Group (Lidl, Kaufland). Вони будують суверенну європейську AI-екосистему та шукають технологічних партнерів за межами Європи — там, де є сильні інженерні команди." },
      { q: "Чому європейський AI-ринок цікавий для узбецьких компаній?", a: "Європейські компанії відчувають дефіцит AI-інтеграторів за високих зарплатних очікувань. Узбецькі команди з досвідом в автоматизації, LLM та CRM-інтеграціях можуть запропонувати порівнянну якість за нижчою вартістю." },
      { q: "Що потрібно узбецькій IT-компанії для виходу на європейський ринок?", a: "Реальні кейси з вимірюваним результатом, документація англійською, відповідність базовим вимогам безпеки даних і — найголовніше — прямий контакт із європейським партнером. Саме такі зв'язки формуються через майданчики на кшталт IT Park." },
      { q: "Tezcode працює з європейськими клієнтами?", a: "Наразі ми зосереджені на Узбекистані та Центральній Азії. Конференція Schwarz Digits — це перший крок до вивчення європейського напрямку. Наш поточний пріоритет — стати лідером автоматизації на локальному ринку." },
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

        {/* Position */}
        <section className="mt-16">
          <Reveal>
            <h2
              className="mb-4 text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.positionTitle}
            </h2>
            <div className="space-y-4">
              {c.positionParas.map((p, i) => (
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

        {/* FAQ */}
        <section className="mt-16">
          <Reveal>
            <h2
              className="mb-6 text-xl font-600 text-[var(--tc-text-primary)] md:text-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.faqTitle}
            </h2>
          </Reveal>
          <RevealStagger className="space-y-4">
            {c.faq.map((item, i) => (
              <RevealItem
                key={i}
                className="rounded-[var(--tc-radius-lg)] border border-[var(--tc-border)] bg-[var(--tc-surface-1)] p-6"
              >
                <h3 className="font-600 text-[var(--tc-text-primary)]">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--tc-text-muted)]">
                  {item.a}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
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
