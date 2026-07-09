import type { ServicePageContent } from "@/components/service-page/types";

// Content for /ai-agent — Tezcode's SPEARHEAD page. Target keywords:
// "AI agent yaratish", "AI agentlar", "biznes uchun AI agent", "AI agent Toshkent",
// "AI agent development Uzbekistan", "AI агент Ташкент".
// Answer-first structure: the hero + capabilities open by answering "AI agent nima?"
// and drawing the agent vs chatbot vs plain-automation line — the query every
// buyer starts with in 2026.
// Only confirmed Tezcode facts:
//   - We BUILD custom AI agents for businesses as a service.
//   - AI Office (12 department agents) is our OWN product, status: in development —
//     an R&D approach/capability, NOT a finished/live product. Never oversell it.
//   - IT Park Uzbekistan resident (certificate №6237, 2026).
//   - Honest outcome ranges from the home page: "10 manual tasks → 1 AI agent",
//     manual routine typically −60–70% (ROI calculator range). No invented stats.
//   - Payment: 30% upfront. Phone +998917776609 (recently updated — keep).
export const CONTENT: ServicePageContent = {
  uz: {
    hero: {
      badge: "AI agentlar — Tezcode",
      title1: "Biznes uchun",
      titleAccent: "AI agent",
      title2: "yaratish",
      subtitle:
        "AI agent nima? Bu — savolga javob berib qo'ya qoladigan chatbot emas, balki ishni o'zi bajaradigan raqamli xodim: mijoz nima xohlayotganini tushunadi, o'zi qaror qabul qiladi, CRM, Telegram va 1C kabi tizimlaringizda amal bajaradi va jarayonni boshidan oxirigacha o'zi olib boradi. Tezcode savdo, buyurtma, hisobot va HR jarayonlari uchun o'zbek tilini tushunadigan AI agentlar quradi — bitta agentdan tortib ko'p agentli 'AI ofis' yondashuvigacha.",
      trust:
        "Toshkent va butun O'zbekiston • IT Park rasmiy rezidenti • Bepul 30 daqiqa konsultatsiya • To'lov: 30% oldindan",
      ctaPrimary: "Bepul konsultatsiya so'rang",
      ctaSecondary: "Chatbotdan farqi nimada?",
    },
    capabilities: {
      badge: "Farqni aniq bilib oling",
      title: "AI agent, chatbot, avtomatizatsiya —",
      titleAccent: "farqi nimada?",
      subtitle:
        "Uchchalasi ham bozorda 'avtomatlashtirish' deb sotiladi, lekin qiladigan ishi boshqa-boshqa. Qisqa taqqoslash: oddiy avtomatizatsiya — qoidaga qarab bajaradi; chatbot — savolga javob beradi; AI agent — vaziyatni tushunadi, qaror qiladi va ishni oxirigacha o'zi bajaradi. Quyida har birini ochib beramiz, shunda nimaga pul to'layotganingizni aniq bilasiz.",
      items: [
        {
          icon: "wrench",
          title: "Oddiy avtomatizatsiya: qoida bo'yicha",
          desc: "'Agar X bo'lsa — Y qil' tamoyilida ishlaydi: Excel makroslar, triggerli skriptlar, oddiy botlar. Tez va arzon, lekin qoidadan tashqaridagi vaziyatni tushunmaydi — mijoz savolni sal boshqacha yozsa, jarayon to'xtab qoladi.",
        },
        {
          icon: "message-circle",
          title: "Chatbot: savolga javob beradi",
          desc: "Oldindan yozilgan stsenariy yoki AI asosida savollarga javob qaytaradi. Mijoz bilan muloqotni yaxshilaydi, lekin javobdan keyingi ish — buyurtmani rasmiylashtirish, CRMga yozish, to'lovni tekshirish — baribir odamning bo'ynida qoladi.",
        },
        {
          icon: "bot",
          title: "AI agent: ishni o'zi bajaradi",
          desc: "Javob beribgina qolmaydi: kontekstni tushunadi, o'zi qaror qabul qiladi va tizimlarda amal bajaradi — CRMga yozadi, to'lovni tekshiradi, hisobot tuzadi, eslatma yuboradi — jarayonni yakunigacha o'zi olib boradi.",
        },
        {
          icon: "check-circle-2",
          title: "Qachon chatbot yetarli?",
          desc: "Vazifa faqat savol-javob bo'lsa — narxlar, ish vaqti, manzil, xizmatlar ro'yxati — AI chatbot arzonroq va tezroq yechim. Bunday holatda agentga ortiqcha pul sarflash shart emas — buni konsultatsiyada halol aytamiz.",
        },
        {
          icon: "zap",
          title: "Qachon AI agent kerak?",
          desc: "Javobdan keyin amal kerak bo'lsa: buyurtmani qabul qilish, to'lovni tekshirish, lidni CRMga yozish, follow-up yuborish, hisobot tuzish. Ya'ni sizga 'gaplashadigan' emas, 'ish bajaradigan' tizim kerak bo'lganda.",
        },
        {
          icon: "puzzle",
          title: "Ular birga ishlaydi",
          desc: "AI agent chatbotni o'z ichiga oladi: mijoz bilan muloqot — kirish eshigi, orqasida esa qaror va amal turadi. Ko'p loyihani chatbotdan boshlab, keyin bosqichma-bosqich to'liq agentga o'stiramiz — xarajat ham shunga mos taqsimlanadi.",
        },
      ],
    },
    process: {
      badge: "Qanday quriladi",
      title: "5 qadamda ishlaydigan",
      titleAccent: "AI agentgacha",
      subtitle:
        "Birinchi 30 daqiqa bepul. Keyin har qadam yozma stsenariy, aniq narx va aniq muddat bilan boradi — 'keyin ko'ramiz' degan gap bo'lmaydi.",
      steps: [
        {
          num: "01",
          title: "Audit",
          desc: "Jarayonlaringizni birga ko'rib chiqamiz: qaysi ish ko'p vaqt oladi, qayerda xato va kechikish ko'p, qaysi vazifani agent o'z bo'yniga olishi mumkin. Bu — 30 daqiqalik bepul konsultatsiya, majburiyatsiz.",
          icon: "search",
        },
        {
          num: "02",
          title: "Agent dizayni",
          desc: "Agent qanday qarorlar qabul qiladi, qaysi holatda ishni odamga uzatadi, nimalarga haqqi yo'q — hammasi yozma stsenariyda belgilanadi. Narx va muddat ham shu bosqichda aniq bo'ladi.",
          icon: "clipboard-list",
        },
        {
          num: "03",
          title: "Integratsiya",
          desc: "Agentni ishlayotgan tizimlaringizga ulaymiz: Telegram, AmoCRM, Bitrix24, 1C, POS, Google Sheets, Click/Payme to'lovlari va veb-sayt. Agent sizning real muhitingiz ichida amal bajaradi.",
          icon: "link-2",
        },
        {
          num: "04",
          title: "Sinov",
          desc: "Real suhbatlar va real ma'lumotda sinaymiz: agent to'g'ri qaror qilyaptimi, qachon odamga uzatyapti, qayerda adashyapti. Siz test qilasiz, fikr berasiz — biz sozlaymiz.",
          icon: "check-circle-2",
        },
        {
          num: "05",
          title: "24/7 ishga tushirish + monitoring",
          desc: "Agent kechayu kunduz ishlay boshlaydi. Biz qarorlar sifatini kuzatib boramiz, xatolarni tuzatamiz va agentni asta-sekin yangi vazifalar bilan kengaytiramiz.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "Konkret stsenariylar",
      title: "Qanday agentlar",
      titleAccent: "quramiz",
      subtitle:
        "Quyidagilar biz quradigan agentlarning real ko'rinishlari. Natija bo'yicha halol mo'ljal: 10 ta qo'l ishi o'rnini 1 ta AI agent bosadi, takroriy qo'l mehnati odatda 60–70% ga kamayadi — aniq raqam sizning jarayonlaringizga bog'liq va konsultatsiyada birga hisoblanadi.",
      items: [
        {
          tag: "01",
          title: "Savdo agenti",
          desc: "Lid kelishi bilan suhbatni boshlaydi: ehtiyojni aniqlaydi, qiziqish darajasini belgilaydi (Cold/Warm/Hot), ma'lumotni CRMga o'zi yozadi, taklif yuboradi va javob bo'lmasa follow-up eslatmalarini o'zi jo'natadi. Menejerga faqat tayyor, 'issiq' mijoz keladi.",
        },
        {
          tag: "02",
          title: "Buyurtma agenti",
          desc: "Telegram yoki saytda buyurtmani qabul qiladi, Click/Payme to'lovini tekshiradi, buyurtmani CRM yoki 1Cga o'zi yozadi va mijozga holat haqida xabar berib boradi — qabuldan yetkazishgacha odam aralashuvisiz.",
        },
        {
          tag: "03",
          title: "Hisobot agenti",
          desc: "Har kuni belgilangan vaqtda savdo, buyurtma va kassa ma'lumotlarini tizimlardan o'zi yig'adi, tahlil qiladi va rahbarga Telegramda tayyor kunlik xulosa yuboradi. 'Bugun qancha sotdik?' degan savol o'z-o'zidan javob topadi.",
        },
        {
          tag: "04",
          title: "HR / davomat agenti",
          desc: "Xodimlar davomatini kuzatadi, kechikish va yo'qlikni qayd qiladi, ichki so'rovlarga (ta'til, ma'lumotnoma, jadval) birinchi javobni beradi va oy oxirida davomat xulosasini o'zi tayyorlaydi.",
        },
        {
          tag: "05",
          title: "Qo'llab-quvvatlash agenti",
          desc: "Sizning bazangiz — narxlar, hujjatlar, xizmatlar — asosida RAG orqali aniq javob beradi, takroriy savollarni o'zi yopadi, murakkab holatni to'liq kontekst bilan operatorga uzatadi. 24/7, o'zbek va rus tilida.",
        },
        {
          tag: "06",
          title: "Ko'p agentli 'AI ofis'",
          desc: "Bir nechta agent bo'limlar kabi birga ishlaydi: savdo, qo'llab-quvvatlash, hisobot. Bu yondashuvni o'z mahsulotimiz — 12 bo'lim agentli AI Office — ustida sinab kelmoqdamiz. Hozircha ishlab chiqilmoqda, tayyor mahsulot sifatida va'da qilmaymiz.",
        },
      ],
    },
    cta: {
      badge: "Boshlash vaqti",
      title: "Birinchi agentingizni",
      titleAccent: "birga aniqlaymiz",
      subtitle:
        "30 daqiqalik bepul konsultatsiyada qaysi vazifani AI agent o'z bo'yniga olishini va bu sizga qancha vaqt tejashini birga hisoblaymiz. Majburiyat yo'q.",
      button: "Telegram'da gaplashish",
      note: "Yoki tezcode@tezcode.dev ga yozing yoki +998917776609 ga qo'ng'iroq qiling.",
    },
    faq: {
      badge: "Tez-tez beriladigan savollar",
      title: "Savol va",
      titleAccent: "javoblar",
      subtitle: "AI agent yaratish haqida eng ko'p so'raladigan 15 savol.",
      items: [
        {
          q: "AI agent nima?",
          a: "AI agent — bu ishni o'zi bajaradigan AI tizim: mijoz yoki xodim so'rovini tushunadi, o'zi qaror qabul qiladi, ulangan tizimlarda (CRM, Telegram, 1C) amal bajaradi va jarayonni boshidan oxirigacha olib boradi. Oddiy misol: lid keldi — agent gaplashdi, ma'lumotni CRMga yozdi, taklif yubordi, follow-up qildi. Menejerga tayyor 'issiq' mijoz keladi, xolos.",
        },
        {
          q: "AI agent chatbotdan nimasi bilan farq qiladi?",
          a: "Farqni uch qatorda aytish mumkin. Oddiy avtomatizatsiya: qat'iy qoida bo'yicha bajaradi, vaziyatni tushunmaydi. Chatbot: savolga javob beradi, lekin keyingi ish odamda qoladi. AI agent: tushunadi, qaror qiladi va ishni o'zi bajaradi — CRMga yozadi, to'lovni tekshiradi, hisobot tuzadi. Batafsil taqqoslash 'chatbot va AI agent farqi' maqolamizda bor.",
        },
        {
          q: "Narxi qancha turadi?",
          a: "AI agent $400 dan boshlanadi. Aniq narx vazifa murakkabligi, integratsiyalar soni va kanallariga bog'liq — oddiy savol-javob agenti bilan ko'p tizimga ulanadigan, qaror qabul qiladigan agent narxi boshqa-boshqa. Aniq summani bepul konsultatsiyadan keyin yozma taklifda beramiz. To'lov 30% oldindan, qolgani loyiha bosqichlari bo'yicha.",
        },
        {
          q: "Qancha vaqtda tayyor bo'ladi?",
          a: "Oddiy agent — 1-2 hafta. Bir nechta tizimga ulanadigan, murakkabroq agent — 2-4 haftada ishlaydigan MVP. Keyin agent real ishda sinaladi va bosqichma-bosqich kengaytiriladi. Aniq muddat stsenariy tasdiqlangach yozma beriladi.",
        },
        {
          q: "Qaysi tizimlar bilan ishlaydi?",
          a: "Telegram, AmoCRM, Bitrix24, 1C, POS tizimlari, Google Sheets, Click/Payme to'lovlari va veb-saytingiz bilan integratsiya quramiz. Tizimingizda API bo'lsa, agentni unga ham ulash mumkin — konsultatsiyada ro'yxatni birga tekshiramiz.",
        },
        {
          q: "Agent xato qilsa kim javob beradi?",
          a: "Agentning vakolati stsenariyda oldindan cheklanadi: muhim qarorlar (masalan, katta chegirma, pul qaytarish) odam tasdig'iga chiqariladi, qolganini agent o'zi bajaradi. Ishga tushirishdan oldin sinov davri bo'ladi, keyin biz qarorlar sifatini monitoring qilamiz va xatoni tuzatamiz. Tomonlarning javobgarligi shartnomada yozma belgilanadi.",
        },
        {
          q: "Ma'lumotlarim qayerda saqlanadi?",
          a: "Agent faqat siz bergan ma'lumot doirasida ishlaydi. Ma'lumotlar kelishilgan serverda saqlanadi — talab qilsangiz, o'z serveringizda yoki yopiq muhitda joylashtiramiz. Maxfiylik shartlari shartnomada belgilanadi va mijoz bazangiz uchinchi tomonlarga berilmaydi.",
        },
        {
          q: "Kichik biznesga arziydimi?",
          a: "Ko'pincha aynan kichik biznesda agent ta'siri tezroq seziladi — 2-3 kishilik jamoada takroriy ishni agent olsa, jamoa sotuvga vaqt ajratadi. Bitta tor vazifadan boshlash mumkin (masalan, faqat buyurtma qabul qilish). Agar sizga faqat savol-javob kerak bo'lsa, agent emas, arzonroq chatbot yetadi — buni halol aytamiz.",
        },
        {
          q: "Agentni qanday nazorat qilaman?",
          a: "Agentning barcha suhbatlari va amallari qayd etib boriladi (log). Xohlasangiz 'odam tasdiqlaydi' rejimini yoqamiz — agent muhim amallarni faqat sizning tasdig'ingiz bilan bajaradi. Kunlik yoki haftalik xulosalarni ham agent o'zi yuboradi, istalgan paytda uni to'xtatib turishingiz mumkin.",
        },
        {
          q: "Menda texnik bilim yo'q — muammomi?",
          a: "Yo'q. Agentni qurish, ulash va sozlash — bizning ishimiz. Sizdan jarayonni bilish yetarli: mijoz bilan qanday ishlaysiz, buyurtma qanday yuradi. Telegram ishlatishni bilsangiz, agentdan foydalanishni ham 15 daqiqada o'rganasiz — jamoangizni biz o'rgatamiz.",
        },
        {
          q: "O'zbek tilini tushunadimi?",
          a: "Ha — bu bizning asosiy ustunligimiz. Agent o'zbek tilida (lotin va kiril) hamda rus tilida ishlaydi, kerak bo'lsa ingliz tili ham qo'shiladi. Mijoz qaysi tilda va qanday uslubda yozsa, agent shu tilda tabiiy javob beradi.",
        },
        {
          q: "Nega aynan Tezcode?",
          a: "Biz AI agentlarni faqat mijozlarga qurmaymiz — o'zimiz ham kunlik ishlatamiz va o'z mahsulotimiz AI Office (12 bo'lim agentli AI orkestrator) ustida ishlayapmiz, ya'ni agentlar qayerda sinishini amalda bilamiz. Tezcode — IT Park Uzbekistan rasmiy rezidenti (guvohnoma №6237). To'lov 30% oldindan — natijani ko'rmaguningizcha katta summa so'ramaymiz.",
        },
        {
          q: "Biznesim uchun AI agent qildirmoqchiman — kimga murojaat qilaman?",
          a: "Tezcode'ga murojaat qiling — Toshkentdagi AI Software Factory, IT Park Uzbekistan rasmiy rezidenti. Biz agentni tayyor shablondan emas, aynan sizning tizimlaringizga (CRM, 1C, Google Sheets, Telegram) ulangan holda quramiz. +998 91 777 66 09 ga qo'ng'iroq qiling yoki Telegram'da yozing — avval 30 daqiqalik bepul konsultatsiyada vazifangizni birga aniqlaymiz.",
        },
        {
          q: "AI agent yasab beradigan kompaniya Toshkentda bormi?",
          a: "Ha — Tezcode, manzil: Toshkent, Amir Temur shoh ko'chasi, 10. Biz biznesdagi takroriy, ko'p bosqichli ishlarni — lidlar bilan yozishma, buyurtma qabul qilish, CRMga yozish, hisobot tuzish — o'z bo'yniga oladigan AI agentlar quramiz. Bepul konsultatsiyada qaysi vazifani agentga topshirish mumkinligini birga ko'rib chiqamiz.",
        },
        {
          q: "AI agent buyurtma qilsam narxi qancha, qancha vaqtda tayyor bo'ladi?",
          a: "AI agent $400 dan boshlanadi. Aniq summa integratsiyalar soni va stsenariy murakkabligiga bog'liq — uni bepul konsultatsiyadan keyin yozma taklifda beramiz. Muddat: ishlaydigan MVP odatda bir necha haftada tayyor bo'ladi (oddiy agent — 1-2 hafta, murakkabrog'i — 2-4 hafta). To'lov 30% oldindan, qolgani loyiha bosqichlari bo'yicha.",
        },
      ],
    },
    tech: {
      badge: "Texnologiyalar",
      title: "Qanday",
      titleAccent: "texnologiyalar bilan",
      subtitle:
        "AI agentlarni isbotlangan, zamonaviy texnologiyalar bilan quramiz — 'sehrli quti' emas, aniq nomlangan vositalar. Har vazifaga eng mosini tanlaymiz.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "Tabiiy tilni tushunish, suhbat va murakkab vazifalarni bajarish uchun asosiy model.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "Uzun kontekst, hujjat tahlili va ishonchli, xavfsiz javoblar talab qilinadigan vazifalar uchun.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "Ko'p qadamli agent mantiqi: vositalarni (tools) chaqirish, qaror daraxti va bir nechta agentni boshqarish.",
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          desc: "Agent sizning bazangiz — hujjat, narx, FAQ — asosida aniq javob beradi, to'qib chiqarmaydi.",
        },
        {
          name: "Vektor baza (pgvector / Pinecone)",
          desc: "Ma'lumotni ma'no bo'yicha qidirish — agent katta hujjatlardan kerakli qismni tez topadi.",
        },
        {
          name: "Integratsiya (Telegram, CRM, 1C, POS)",
          desc: "Telegram Bot API, AmoCRM, Bitrix24, 1C, POS, Google Sheets, Click/Payme — agent real tizimingiz ichida ishlaydi.",
        },
      ],
    },
    pricing: {
      badge: "Narx",
      title: "Narx nimaga",
      titleAccent: "bog'liq?",
      subtitle:
        "Aniq narxni bepul konsultatsiyadan keyin yozma taklifda beramiz — auditgacha havoga raqam aytmaymiz. Narx asosan uchta narsaga bog'liq:",
      factors: [
        {
          title: "Vazifa murakkabligi",
          desc: "Oddiy savol-javob agentimi yoki ko'p qadamli, qaror qabul qiladigan va bir nechta jarayonni (buyurtma, to'lov, hisobot) boshqaradigan agentmi — ish hajmi shunga qarab o'zgaradi.",
        },
        {
          title: "Integratsiyalar soni",
          desc: "Qancha tashqi tizimga ulanadi (CRM, 1C, to'lov, sayt, POS, ombor) — har bir integratsiya alohida ishlab chiqiladi va sinaladi.",
        },
        {
          title: "Til va kanallar",
          desc: "Necha tilda (uz/ru/en) va necha kanalda (Telegram, Instagram, sayt, WhatsApp) ishlaydi — har kanal alohida ulanish va sinov demak.",
        },
      ],
      note: "To'lov 30% oldindan boshlanadi — qolgani loyiha bosqichlari bo'yicha to'lanadi. Har bosqich natijasini ko'rib, keyin to'laysiz.",
    },
    related: {
      badge: "Bog'liq xizmatlar",
      title: "Sizga yana",
      titleAccent: "foydali bo'lishi mumkin",
      subtitle: "AI agentga yaqin yechimlar va foydali qo'llanmalar.",
      links: [
        {
          href: "/ai-chatbot",
          label: "AI chatbot xizmati",
          desc: "24/7 mijoz xizmati va lid yig'ish uchun AI chatbot — agentning eng keng tarqalgan ko'rinishi.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "Telegram bot",
          desc: "Buyurtma, to'lov va Mini App bilan biznes uchun Telegram bot.",
        },
        {
          href: "/ai-avtomatizatsiya",
          label: "AI avtomatizatsiya",
          desc: "Biznes jarayonlarini sun'iy intellekt bilan avtomatlashtirish.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "Biznes avtomatlashtirish",
          desc: "Takroriy qo'l ishlarini avtomatlashtirib, vaqt va xarajatni tejash.",
        },
        {
          href: "/blog/biznes-uchun-ai-agent-yaratish",
          label: "Qo'llanma: AI agent yaratish",
          desc: "AI agent nima, qanday ishlaydi va 6 qadamda qanday yaratiladi — to'liq qo'llanma.",
        },
        {
          href: "/blog/ai-chatbot-va-ai-agent-farqi",
          label: "Chatbot va AI agent farqi",
          desc: "Farqi nimada va qaysi biri aynan sizning biznesingizga kerak.",
        },
      ],
    },
    service: {
      name: "AI agent yaratish — Tezcode",
      description:
        "Biznes uchun AI agent yaratish: savdo agenti (lid → CRM → follow-up), buyurtma agenti, hisobot agenti, HR/davomat agenti, qo'llab-quvvatlash agenti va ko'p agentli 'AI ofis' yondashuvi. Telegram/CRM/1C/POS integratsiyasi, o'zbek va rus tilida. IT Park rezidenti. Toshkent va butun O'zbekiston.",
      serviceType: "AI agent yaratish / AI agent development",
    },
  },

  ru: {
    hero: {
      badge: "AI-агенты — Tezcode",
      title1: "Создание",
      titleAccent: "AI-агента",
      title2: "для бизнеса",
      subtitle:
        "Что такое AI-агент? Это не чат-бот, который просто отвечает на вопрос, а цифровой сотрудник, который сам выполняет работу: понимает, чего хочет клиент, сам принимает решения, действует в ваших системах — CRM, Telegram, 1C — и ведёт процесс от начала до конца. Tezcode строит AI-агентов, понимающих узбекский язык, для продаж, заказов, отчётов и HR-процессов — от одного агента до мультиагентного подхода «AI-офис».",
      trust:
        "Ташкент и весь Узбекистан • Официальный резидент IT Park • Бесплатная 30-мин консультация • Оплата: 30% предоплата",
      ctaPrimary: "Бесплатная консультация",
      ctaSecondary: "Чем отличается от чат-бота?",
    },
    capabilities: {
      badge: "Разберитесь в разнице",
      title: "AI-агент, чат-бот, автоматизация —",
      titleAccent: "в чём разница?",
      subtitle:
        "Все три продаются на рынке как «автоматизация», но делают разное. Коротко: простая автоматизация выполняет по правилу; чат-бот отвечает на вопрос; AI-агент понимает ситуацию, принимает решение и сам доводит работу до конца. Ниже раскрываем каждый вариант, чтобы вы точно знали, за что платите.",
      items: [
        {
          icon: "wrench",
          title: "Простая автоматизация: по правилу",
          desc: "Работает по принципу «если X — сделай Y»: Excel-макросы, триггерные скрипты, простые боты. Быстро и дёшево, но ситуацию вне правил не понимает — клиент напишет чуть иначе, и процесс встаёт.",
        },
        {
          icon: "message-circle",
          title: "Чат-бот: отвечает на вопрос",
          desc: "Отвечает по заранее написанному сценарию или на базе AI. Улучшает общение с клиентом, но работа после ответа — оформить заказ, записать в CRM, проверить оплату — всё равно остаётся на человеке.",
        },
        {
          icon: "bot",
          title: "AI-агент: сам выполняет работу",
          desc: "Не просто отвечает: понимает контекст, сам принимает решения и действует в системах — пишет в CRM, проверяет оплату, готовит отчёт, отправляет напоминания — и доводит процесс до конца.",
        },
        {
          icon: "check-circle-2",
          title: "Когда достаточно чат-бота?",
          desc: "Если задача — только вопросы-ответы: цены, часы работы, адрес, список услуг — AI-чат-бот дешевле и быстрее. В таком случае переплачивать за агента не нужно — говорим это честно на консультации.",
        },
        {
          icon: "zap",
          title: "Когда нужен AI-агент?",
          desc: "Когда после ответа нужно действие: принять заказ, проверить оплату, записать лид в CRM, отправить follow-up, подготовить отчёт. То есть когда вам нужна система, которая «делает», а не только «разговаривает».",
        },
        {
          icon: "puzzle",
          title: "Они работают вместе",
          desc: "AI-агент включает в себя чат-бот: общение с клиентом — входная дверь, а за ней стоят решения и действия. Многие проекты мы начинаем с чат-бота и поэтапно выращиваем его в полноценного агента — расходы распределяются соответственно.",
        },
      ],
    },
    process: {
      badge: "Как строится",
      title: "5 шагов до рабочего",
      titleAccent: "AI-агента",
      subtitle:
        "Первые 30 минут бесплатно. Дальше каждый шаг идёт с письменным сценарием, точной ценой и точным сроком — без «потом посмотрим».",
      steps: [
        {
          num: "01",
          title: "Аудит",
          desc: "Вместе разбираем ваши процессы: какая работа отнимает время, где больше всего ошибок и задержек, какую задачу может взять на себя агент. Это бесплатная 30-минутная консультация, без обязательств.",
          icon: "search",
        },
        {
          num: "02",
          title: "Дизайн агента",
          desc: "Какие решения агент принимает сам, в каких случаях передаёт человеку, на что не имеет права — всё фиксируется в письменном сценарии. Цена и срок тоже становятся точными на этом этапе.",
          icon: "clipboard-list",
        },
        {
          num: "03",
          title: "Интеграция",
          desc: "Подключаем агента к вашим рабочим системам: Telegram, AmoCRM, Bitrix24, 1C, POS, Google Sheets, оплаты Click/Payme и сайт. Агент действует внутри вашей реальной среды.",
          icon: "link-2",
        },
        {
          num: "04",
          title: "Тестирование",
          desc: "Проверяем на реальных диалогах и реальных данных: правильно ли агент решает, когда передаёт человеку, где ошибается. Вы тестируете, даёте обратную связь — мы настраиваем.",
          icon: "check-circle-2",
        },
        {
          num: "05",
          title: "Запуск 24/7 + мониторинг",
          desc: "Агент начинает работать круглосуточно. Мы следим за качеством его решений, исправляем ошибки и постепенно расширяем агента новыми задачами.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "Конкретные сценарии",
      title: "Каких агентов",
      titleAccent: "мы строим",
      subtitle:
        "Ниже — реальные варианты агентов, которых мы строим. Честный ориентир по результату: 1 AI-агент заменяет 10 ручных операций, повторяющийся ручной труд обычно снижается на 60–70% — точная цифра зависит от ваших процессов и считается вместе на консультации.",
      items: [
        {
          tag: "01",
          title: "Агент продаж",
          desc: "Начинает диалог, как только пришёл лид: выявляет потребность, определяет уровень интереса (Cold/Warm/Hot), сам записывает данные в CRM, отправляет предложение и, если нет ответа, сам шлёт follow-up-напоминания. Менеджеру приходит уже готовый, «горячий» клиент.",
        },
        {
          tag: "02",
          title: "Агент заказов",
          desc: "Принимает заказ в Telegram или на сайте, проверяет оплату Click/Payme, сам записывает заказ в CRM или 1C и информирует клиента о статусе — от приёма до доставки без участия человека.",
        },
        {
          tag: "03",
          title: "Агент отчётов",
          desc: "Каждый день в назначенное время сам собирает данные о продажах, заказах и кассе из систем, анализирует и отправляет руководителю готовую ежедневную сводку в Telegram. Вопрос «сколько мы сегодня продали?» отвечает сам себе.",
        },
        {
          tag: "04",
          title: "HR / агент учёта посещаемости",
          desc: "Следит за посещаемостью сотрудников, фиксирует опоздания и отсутствия, даёт первый ответ на внутренние запросы (отпуск, справка, график) и в конце месяца сам готовит сводку по посещаемости.",
        },
        {
          tag: "05",
          title: "Агент поддержки",
          desc: "Отвечает точно на основе вашей базы — цены, документы, услуги — через RAG, сам закрывает повторяющиеся вопросы, сложный случай передаёт оператору с полным контекстом. 24/7, на узбекском и русском.",
        },
        {
          tag: "06",
          title: "Мультиагентный «AI-офис»",
          desc: "Несколько агентов работают вместе как отделы: продажи, поддержка, отчётность. Этот подход мы обкатываем на собственном продукте — AI Office с агентами 12 отделов. Пока он в разработке, как готовый продукт не обещаем.",
        },
      ],
    },
    cta: {
      badge: "Время начать",
      title: "Определим вашего первого",
      titleAccent: "агента вместе",
      subtitle:
        "На бесплатной 30-минутной консультации вместе посчитаем, какую задачу возьмёт на себя AI-агент и сколько времени это вам сэкономит. Без обязательств.",
      button: "Написать в Telegram",
      note: "Или напишите на tezcode@tezcode.dev либо позвоните +998917776609.",
    },
    faq: {
      badge: "Частые вопросы",
      title: "Вопросы и",
      titleAccent: "ответы",
      subtitle: "15 самых частых вопросов о создании AI-агентов.",
      items: [
        {
          q: "Что такое AI-агент?",
          a: "AI-агент — это AI-система, которая сама выполняет работу: понимает запрос клиента или сотрудника, сама принимает решения, действует в подключённых системах (CRM, Telegram, 1C) и ведёт процесс от начала до конца. Простой пример: пришёл лид — агент пообщался, записал данные в CRM, отправил предложение, сделал follow-up. Менеджеру приходит уже готовый «горячий» клиент.",
        },
        {
          q: "Чем AI-агент отличается от чат-бота?",
          a: "Разницу можно уложить в три строки. Простая автоматизация: выполняет по жёсткому правилу, ситуацию не понимает. Чат-бот: отвечает на вопрос, но дальнейшая работа остаётся на человеке. AI-агент: понимает, решает и сам выполняет работу — пишет в CRM, проверяет оплату, готовит отчёт. Подробное сравнение — в нашей статье «разница между чат-ботом и AI-агентом».",
        },
        {
          q: "Сколько это стоит?",
          a: "AI-агент от $400. Точная цена зависит от сложности задачи, количества интеграций и каналов — простой агент вопрос-ответ и агент, подключённый к нескольким системам и принимающий решения, стоят по-разному. Точную сумму даём в письменном предложении после бесплатной консультации. Оплата — 30% предоплата, остальное по этапам проекта.",
        },
        {
          q: "За какое время будет готов?",
          a: "Простой агент — 1-2 недели. Более сложный, подключённый к нескольким системам — рабочий MVP за 2-4 недели. Затем агент проверяется в реальной работе и расширяется поэтапно. Точный срок даётся письменно после утверждения сценария.",
        },
        {
          q: "С какими системами работает?",
          a: "Строим интеграции с Telegram, AmoCRM, Bitrix24, 1C, POS-системами, Google Sheets, оплатами Click/Payme и вашим сайтом. Если у вашей системы есть API, агента можно подключить и к ней — список проверим вместе на консультации.",
        },
        {
          q: "Если агент ошибётся — кто отвечает?",
          a: "Полномочия агента заранее ограничиваются в сценарии: важные решения (например, крупная скидка, возврат денег) выносятся на подтверждение человеку, остальное агент делает сам. Перед запуском есть тестовый период, затем мы мониторим качество решений и исправляем ошибки. Ответственность сторон письменно фиксируется в договоре.",
        },
        {
          q: "Где хранятся мои данные?",
          a: "Агент работает только в рамках предоставленных вами данных. Данные хранятся на согласованном сервере — по требованию размещаем на вашем сервере или в закрытой среде. Условия конфиденциальности фиксируются в договоре, ваша клиентская база третьим лицам не передаётся.",
        },
        {
          q: "Стоит ли это малому бизнесу?",
          a: "Часто именно в малом бизнесе эффект агента заметнее — если в команде из 2-3 человек рутину заберёт агент, команда освободит время для продаж. Начать можно с одной узкой задачи (например, только приём заказов). А если вам нужны только вопросы-ответы, хватит более дешёвого чат-бота — говорим это честно.",
        },
        {
          q: "Как я контролирую агента?",
          a: "Все диалоги и действия агента протоколируются (лог). По желанию включаем режим «человек подтверждает» — важные действия агент выполняет только с вашего подтверждения. Ежедневные или еженедельные сводки агент тоже отправляет сам, и в любой момент его можно приостановить.",
        },
        {
          q: "У меня нет технических знаний — это проблема?",
          a: "Нет. Построить, подключить и настроить агента — наша работа. От вас достаточно знания процесса: как вы работаете с клиентом, как идёт заказ. Если умеете пользоваться Telegram, работу с агентом освоите за 15 минут — вашу команду обучим мы.",
        },
        {
          q: "Понимает ли узбекский язык?",
          a: "Да — это наше ключевое преимущество. Агент работает на узбекском (латиница и кириллица) и русском, при необходимости добавляется английский. На каком языке и в каком стиле пишет клиент — на том языке агент и отвечает, естественно.",
        },
        {
          q: "Почему именно Tezcode?",
          a: "Мы строим AI-агентов не только клиентам — сами пользуемся ими ежедневно и развиваем собственный продукт AI Office (AI-оркестратор с агентами 12 отделов), то есть на практике знаем, где агенты ломаются. Tezcode — официальный резидент IT Park Uzbekistan (свидетельство №6237). Оплата — 30% предоплата: не просим крупную сумму, пока вы не увидите результат.",
        },
        {
          q: "Хочу заказать AI-агента для бизнеса — к кому обратиться в Ташкенте?",
          a: "Обратитесь в Tezcode — AI Software Factory в Ташкенте, официальный резидент IT Park Uzbekistan. Мы строим AI-агентов не по шаблону, а под ваши системы: CRM, 1C, Google Sheets, Telegram. Позвоните на +998 91 777 66 09 или напишите в Telegram — сначала на бесплатной 30-минутной консультации вместе определим задачу.",
        },
        {
          q: "Есть ли в Ташкенте компания, которая делает AI-агентов?",
          a: "Да — Tezcode, адрес: Ташкент, проспект Амира Темура, 10. Мы строим AI-агентов, которые берут на себя повторяющуюся многошаговую работу: переписку с лидами, приём заказов, запись в CRM, отчёты. На бесплатной консультации вместе разберём, какую задачу можно передать агенту.",
        },
        {
          q: "Сколько стоит AI-агент и как быстро он будет готов?",
          a: "AI-агент от $400. Точная сумма зависит от количества интеграций и сложности сценария — её даём в письменном предложении после бесплатной консультации. По срокам: рабочий MVP обычно готов за несколько недель (простой агент — 1-2 недели, посложнее — 2-4 недели). Оплата — 30% предоплата, остальное по этапам проекта.",
        },
      ],
    },
    tech: {
      badge: "Технологии",
      title: "На каких",
      titleAccent: "технологиях",
      subtitle:
        "Строим AI-агентов на проверенных современных технологиях — не «волшебная коробка», а конкретно названные инструменты. Под каждую задачу подбираем оптимальную.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "Основная модель для понимания естественного языка, диалога и выполнения сложных задач.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "Для задач с длинным контекстом, анализом документов и надёжными, безопасными ответами.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "Многошаговая логика агента: вызов инструментов (tools), дерево решений и оркестрация нескольких агентов.",
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          desc: "Агент отвечает на основе вашей базы — документы, цены, FAQ — и не выдумывает.",
        },
        {
          name: "Векторная база (pgvector / Pinecone)",
          desc: "Поиск данных по смыслу — агент быстро находит нужное в больших документах.",
        },
        {
          name: "Интеграция (Telegram, CRM, 1C, POS)",
          desc: "Telegram Bot API, AmoCRM, Bitrix24, 1C, POS, Google Sheets, Click/Payme — агент работает внутри вашей системы.",
        },
      ],
    },
    pricing: {
      badge: "Цена",
      title: "От чего зависит",
      titleAccent: "цена?",
      subtitle:
        "Точную цену даём в письменном предложении после бесплатной консультации — не называем цифру «в воздух» до аудита. Цена зависит в основном от трёх вещей:",
      factors: [
        {
          title: "Сложность задачи",
          desc: "Простой агент вопрос-ответ или многошаговый, принимающий решения и управляющий несколькими процессами (заказ, оплата, отчёт) — объём работы меняется соответственно.",
        },
        {
          title: "Количество интеграций",
          desc: "К скольким внешним системам подключается (CRM, 1C, оплата, сайт, POS, склад) — каждая интеграция отдельно разрабатывается и тестируется.",
        },
        {
          title: "Языки и каналы",
          desc: "На скольких языках (uz/ru/en) и в скольких каналах (Telegram, Instagram, сайт, WhatsApp) работает — каждый канал это отдельное подключение и тесты.",
        },
      ],
      note: "Оплата начинается с 30% предоплаты — остальное по этапам проекта. Видите результат этапа — потом платите.",
    },
    related: {
      badge: "Связанные услуги",
      title: "Вам также может",
      titleAccent: "быть полезно",
      subtitle: "Близкие к AI-агенту решения и полезные руководства.",
      links: [
        {
          href: "/ai-chatbot",
          label: "AI-чат-бот",
          desc: "AI-чат-бот для поддержки 24/7 и сбора лидов — самая частая форма агента.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "Telegram-бот",
          desc: "Telegram-бот для бизнеса с заказами, оплатой и Mini App.",
        },
        {
          href: "/ai-avtomatizatsiya",
          label: "AI-автоматизация",
          desc: "Автоматизация бизнес-процессов с помощью искусственного интеллекта.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "Автоматизация бизнеса",
          desc: "Автоматизируем рутину, экономим время и расходы.",
        },
        {
          href: "/blog/biznes-uchun-ai-agent-yaratish",
          label: "Гид: создание AI-агента",
          desc: "Что такое AI-агент, как работает и как создаётся за 6 шагов — полное руководство.",
        },
        {
          href: "/blog/ai-chatbot-va-ai-agent-farqi",
          label: "Чат-бот vs AI-агент",
          desc: "В чём разница и что именно нужно вашему бизнесу.",
        },
      ],
    },
    service: {
      name: "Создание AI-агентов — Tezcode",
      description:
        "Создание AI-агентов для бизнеса: агент продаж (лид → CRM → follow-up), агент заказов, агент отчётов, HR-агент, агент поддержки и мультиагентный подход «AI-офис». Интеграция с Telegram/CRM/1C/POS, на узбекском и русском. Резидент IT Park. Ташкент и весь Узбекистан.",
      serviceType: "Создание AI-агентов / AI agent development",
    },
  },

  en: {
    hero: {
      badge: "AI agents — Tezcode",
      title1: "AI agent",
      titleAccent: "development",
      title2: "for business",
      subtitle:
        "What is an AI agent? Not a chatbot that merely answers a question, but a digital employee that does the work itself: it understands what the customer wants, makes decisions on its own, acts inside your systems — CRM, Telegram, 1C — and carries the process from start to finish. Tezcode builds AI agents that understand Uzbek for sales, orders, reporting and HR processes — from a single agent to a multi-agent 'AI office' approach.",
      trust:
        "Tashkent and all of Uzbekistan • Official IT Park resident • Free 30-min consultation • Payment: 30% upfront",
      ctaPrimary: "Book free consultation",
      ctaSecondary: "How is it different from a chatbot?",
    },
    capabilities: {
      badge: "Know the difference",
      title: "AI agent, chatbot, automation —",
      titleAccent: "what's the difference?",
      subtitle:
        "All three get sold as 'automation', but they do different things. In short: plain automation executes by rule; a chatbot answers a question; an AI agent understands the situation, makes a decision and carries the work through itself. Below we unpack each one so you know exactly what you are paying for.",
      items: [
        {
          icon: "wrench",
          title: "Plain automation: by rule",
          desc: "Works on 'if X then do Y': Excel macros, trigger scripts, simple bots. Fast and cheap, but it doesn't understand anything outside the rules — if the customer phrases it slightly differently, the process stalls.",
        },
        {
          icon: "message-circle",
          title: "Chatbot: answers a question",
          desc: "Replies from a pre-written script or an AI model. It improves customer communication, but the work after the answer — placing the order, logging to CRM, checking payment — still lands on a human.",
        },
        {
          icon: "bot",
          title: "AI agent: does the work itself",
          desc: "It doesn't just reply: it understands context, makes its own decisions and acts inside your systems — writes to CRM, verifies payment, builds a report, sends reminders — and carries the process to completion.",
        },
        {
          icon: "check-circle-2",
          title: "When is a chatbot enough?",
          desc: "If the task is pure Q&A — prices, opening hours, address, service list — an AI chatbot is the cheaper and faster answer. In that case there is no point overpaying for an agent — we say so honestly in the consultation.",
        },
        {
          icon: "zap",
          title: "When do you need an AI agent?",
          desc: "When an action must follow the answer: take the order, verify payment, log the lead to CRM, send a follow-up, build a report. In other words, when you need a system that 'does', not one that only 'talks'.",
        },
        {
          icon: "puzzle",
          title: "They work together",
          desc: "An AI agent contains a chatbot: conversation with the customer is the front door, with decisions and actions behind it. We start many projects with a chatbot and grow it step by step into a full agent — the cost is spread accordingly.",
        },
      ],
    },
    process: {
      badge: "How it's built",
      title: "5 steps to a working",
      titleAccent: "AI agent",
      subtitle:
        "The first 30 minutes are free. After that every step comes with a written scenario, an exact price and an exact deadline — no 'we'll see later'.",
      steps: [
        {
          num: "01",
          title: "Audit",
          desc: "We review your processes together: which work eats time, where errors and delays pile up, which task an agent can take over. This is a free 30-minute consultation, no obligations.",
          icon: "search",
        },
        {
          num: "02",
          title: "Agent design",
          desc: "Which decisions the agent makes itself, when it hands off to a human, what it is not allowed to do — everything is fixed in a written scenario. Price and timeline also become exact at this stage.",
          icon: "clipboard-list",
        },
        {
          num: "03",
          title: "Integration",
          desc: "We connect the agent to your working systems: Telegram, AmoCRM, Bitrix24, 1C, POS, Google Sheets, Click/Payme payments and your website. The agent acts inside your real environment.",
          icon: "link-2",
        },
        {
          num: "04",
          title: "Testing",
          desc: "We test on real conversations and real data: is the agent deciding correctly, when does it hand off to a human, where does it slip. You test, give feedback — we tune.",
          icon: "check-circle-2",
        },
        {
          num: "05",
          title: "24/7 launch + monitoring",
          desc: "The agent starts working around the clock. We monitor the quality of its decisions, fix mistakes and gradually extend the agent with new tasks.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "Concrete scenarios",
      title: "The agents",
      titleAccent: "we build",
      subtitle:
        "Below are real shapes of the agents we build. An honest outcome benchmark: 1 AI agent replaces 10 manual tasks, and repetitive manual work typically drops by 60–70% — the exact number depends on your processes and is calculated together in the consultation.",
      items: [
        {
          tag: "01",
          title: "Sales agent",
          desc: "Starts the conversation the moment a lead arrives: uncovers the need, grades interest (Cold/Warm/Hot), logs the data to CRM itself, sends an offer and, if there's no reply, sends follow-up reminders on its own. The manager only gets a ready, 'hot' customer.",
        },
        {
          tag: "02",
          title: "Order agent",
          desc: "Takes the order on Telegram or the website, verifies the Click/Payme payment, logs the order to CRM or 1C itself and keeps the customer updated on status — from intake to delivery without human involvement.",
        },
        {
          tag: "03",
          title: "Reporting agent",
          desc: "Every day at a set time it gathers sales, order and cash-desk data from your systems, analyses it and sends the owner a ready daily summary in Telegram. The question 'how much did we sell today?' answers itself.",
        },
        {
          tag: "04",
          title: "HR / attendance agent",
          desc: "Tracks employee attendance, records lateness and absences, gives the first reply to internal requests (leave, references, schedules) and prepares the monthly attendance summary itself.",
        },
        {
          tag: "05",
          title: "Support agent",
          desc: "Answers precisely from your knowledge base — prices, documents, services — via RAG, closes repetitive questions itself and escalates complex cases to an operator with full context. 24/7, in Uzbek and Russian.",
        },
        {
          tag: "06",
          title: "Multi-agent 'AI office'",
          desc: "Several agents work together as departments: sales, support, reporting. We are proving this approach on our own product — AI Office with 12 department agents. It is still in development; we don't promise it as a finished product.",
        },
      ],
    },
    cta: {
      badge: "Time to start",
      title: "Let's scope your first",
      titleAccent: "agent together",
      subtitle:
        "In a free 30-minute consultation we'll work out together which task an AI agent should take over and how much time it will save you. No obligations.",
      button: "Message on Telegram",
      note: "Or email tezcode@tezcode.dev or call +998917776609.",
    },
    faq: {
      badge: "Frequently asked",
      title: "Questions &",
      titleAccent: "answers",
      subtitle: "The 15 most common questions about AI agent development.",
      items: [
        {
          q: "What is an AI agent?",
          a: "An AI agent is an AI system that does the work itself: it understands a customer's or employee's request, makes its own decisions, acts in the connected systems (CRM, Telegram, 1C) and carries the process from start to finish. Simple example: a lead arrives — the agent talks, logs the data to CRM, sends an offer, follows up. The manager just receives a ready 'hot' customer.",
        },
        {
          q: "How is an AI agent different from a chatbot?",
          a: "The difference fits in three lines. Plain automation: executes a rigid rule, understands nothing outside it. Chatbot: answers the question, but the follow-on work stays with a human. AI agent: understands, decides and does the work itself — writes to CRM, verifies payment, builds reports. See our 'chatbot vs AI agent' article for the full comparison.",
        },
        {
          q: "How much does it cost?",
          a: "An AI agent starts from $400. The exact price depends on task complexity, number of integrations and channels — a simple Q&A agent and a decision-making agent connected to several systems cost very differently. We give the exact figure in a written proposal after the free consultation. Payment: 30% upfront, the rest per project stage.",
        },
        {
          q: "How long until it's ready?",
          a: "A simple agent — 1-2 weeks. A more complex one connected to several systems — a working MVP in 2-4 weeks. The agent is then proven in real work and extended step by step. An exact deadline is given in writing once the scenario is approved.",
        },
        {
          q: "Which systems does it work with?",
          a: "We build integrations with Telegram, AmoCRM, Bitrix24, 1C, POS systems, Google Sheets, Click/Payme payments and your website. If your system has an API, the agent can be connected to it too — we check the list together in the consultation.",
        },
        {
          q: "If the agent makes a mistake — who is responsible?",
          a: "The agent's authority is limited upfront in the scenario: important decisions (e.g. a large discount, a refund) go to a human for approval, the rest the agent handles itself. There is a test period before launch, then we monitor decision quality and fix errors. Each side's responsibility is fixed in writing in the contract.",
        },
        {
          q: "Where is my data stored?",
          a: "The agent works only within the data you provide. Data lives on an agreed server — on request we deploy on your own server or in a closed environment. Confidentiality terms are fixed in the contract, and your customer base is never shared with third parties.",
        },
        {
          q: "Is it worth it for a small business?",
          a: "Often the agent's impact shows fastest in small businesses — if an agent takes the routine off a 2-3 person team, the team gets its time back for selling. You can start with one narrow task (e.g. order intake only). And if all you need is Q&A, a cheaper chatbot is enough — we say so honestly.",
        },
        {
          q: "How do I control the agent?",
          a: "Every conversation and action of the agent is logged. If you want, we enable a 'human approves' mode — the agent performs important actions only with your confirmation. It also sends daily or weekly summaries itself, and you can pause it at any moment.",
        },
        {
          q: "I have no technical background — is that a problem?",
          a: "No. Building, connecting and tuning the agent is our job. From you, knowing the process is enough: how you work with customers, how an order flows. If you can use Telegram, you'll learn to work with the agent in 15 minutes — we train your team.",
        },
        {
          q: "Does it understand Uzbek?",
          a: "Yes — that is our key advantage. The agent works in Uzbek (Latin and Cyrillic) and Russian, with English added when needed. Whatever language and style the customer writes in, the agent replies naturally in the same language.",
        },
        {
          q: "Why Tezcode?",
          a: "We don't just build AI agents for clients — we use them daily ourselves and are developing our own product, AI Office (an AI orchestrator with 12 department agents), so we know in practice where agents break. Tezcode is an official IT Park Uzbekistan resident (certificate No. 6237). Payment starts at 30% upfront — we don't ask for a large sum before you see results.",
        },
        {
          q: "I want to get an AI agent built for my business — who do I contact?",
          a: "Contact Tezcode — an AI Software Factory in Tashkent and an official IT Park Uzbekistan resident. We build AI agents wired to your own systems — CRM, 1C, Google Sheets, Telegram — not from a template. Call +998 91 777 66 09 or message us on Telegram; we start with a free 30-minute consultation to define the task together.",
        },
        {
          q: "Is there a company in Tashkent that builds AI agents?",
          a: "Yes — Tezcode, at Amir Temur Avenue 10, Tashkent. We build AI agents that take over repetitive multi-step work: talking to leads, taking orders, logging to CRM, preparing reports. In a free consultation we work out together which task is worth handing to an agent.",
        },
        {
          q: "If I order an AI agent, how much does it cost and how fast is it ready?",
          a: "An AI agent starts from $400. The exact sum depends on the number of integrations and scenario complexity — you get it in a written proposal after the free consultation. Timeline: a working MVP is typically ready in a few weeks (a simple agent in 1-2 weeks, a more complex one in 2-4). Payment is 30% upfront, the rest per project stage.",
        },
      ],
    },
    tech: {
      badge: "Technologies",
      title: "Built with the",
      titleAccent: "right technologies",
      subtitle:
        "We build AI agents on proven, modern technologies — not a 'magic box' but concretely named tools. We pick the best fit for each task.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "The core model for natural-language understanding, conversation and complex tasks.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "For long context, document analysis and tasks that need reliable, safe answers.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "Multi-step agent logic: tool calling, decision trees and orchestrating several agents.",
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          desc: "The agent answers from your knowledge base — documents, prices, FAQ — without making things up.",
        },
        {
          name: "Vector database (pgvector / Pinecone)",
          desc: "Semantic search — the agent quickly finds the right part of large documents.",
        },
        {
          name: "Integration (Telegram, CRM, 1C, POS)",
          desc: "Telegram Bot API, AmoCRM, Bitrix24, 1C, POS, Google Sheets, Click/Payme — the agent acts inside your system.",
        },
      ],
    },
    pricing: {
      badge: "Pricing",
      title: "What the price",
      titleAccent: "depends on",
      subtitle:
        "We give an exact price in a written proposal after the free consultation — we don't quote numbers into thin air before the audit. The price mainly depends on three things:",
      factors: [
        {
          title: "Task complexity",
          desc: "A simple Q&A agent, or a multi-step one that makes decisions and runs several processes (orders, payments, reporting) — the scope of work changes accordingly.",
        },
        {
          title: "Number of integrations",
          desc: "How many external systems it connects to (CRM, 1C, payments, website, POS, inventory) — each integration is developed and tested separately.",
        },
        {
          title: "Languages and channels",
          desc: "How many languages (uz/ru/en) and channels (Telegram, Instagram, website, WhatsApp) it works across — each channel means its own connection and tests.",
        },
      ],
      note: "Payment starts with a 30% deposit — the rest is paid per project stage. You see each stage's result, then you pay.",
    },
    related: {
      badge: "Related services",
      title: "You might also",
      titleAccent: "find useful",
      subtitle: "Solutions close to AI agents, plus helpful guides.",
      links: [
        {
          href: "/ai-chatbot",
          label: "AI chatbot service",
          desc: "An AI chatbot for 24/7 support and lead capture — the most common form of agent.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "Telegram bot",
          desc: "A Telegram bot for business with orders, payments and Mini App.",
        },
        {
          href: "/ai-avtomatizatsiya",
          label: "AI automation",
          desc: "Automating business processes with artificial intelligence.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "Business automation",
          desc: "Automate routine work to save time and cost.",
        },
        {
          href: "/blog/biznes-uchun-ai-agent-yaratish",
          label: "Guide: building an AI agent",
          desc: "What an AI agent is, how it works and how it's built in 6 steps — full guide.",
        },
        {
          href: "/blog/ai-chatbot-va-ai-agent-farqi",
          label: "Chatbot vs AI agent",
          desc: "What the difference is and which one your business needs.",
        },
      ],
    },
    service: {
      name: "AI agent development — Tezcode",
      description:
        "Building AI agents for business: sales agent (lead → CRM → follow-up), order agent, reporting agent, HR/attendance agent, support agent and a multi-agent 'AI office' approach. Telegram/CRM/1C/POS integration, Uzbek and Russian. IT Park resident. Tashkent and all of Uzbekistan.",
      serviceType: "AI agent development",
    },
  },

  ar: {
    hero: {
      badge: "وكلاء الذكاء الاصطناعي — Tezcode",
      title1: "تطوير",
      titleAccent: "وكيل ذكاء اصطناعي",
      title2: "للأعمال",
      subtitle:
        "ما هو وكيل الذكاء الاصطناعي؟ ليس شات بوت يكتفي بالإجابة عن سؤال، بل موظف رقمي ينفّذ العمل بنفسه: يفهم ما يريده العميل، يتخذ القرارات بنفسه، يتصرف داخل أنظمتك — CRM وTelegram و1C — ويقود العملية من البداية إلى النهاية. تبني Tezcode وكلاء ذكاء اصطناعي يفهمون اللغة الأوزبكية للمبيعات والطلبات والتقارير وعمليات الموارد البشرية — من وكيل واحد إلى نهج «المكتب الذكي» متعدد الوكلاء.",
      trust:
        "طشقند وكل أوزبكستان • عضو رسمي في IT Park • استشارة 30 دقيقة مجانية • الدفع: 30% مقدمًا",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "ما الفرق عن الشات بوت؟",
    },
    capabilities: {
      badge: "اعرف الفرق بدقة",
      title: "وكيل ذكي، شات بوت، أتمتة —",
      titleAccent: "ما الفرق؟",
      subtitle:
        "الثلاثة تُباع في السوق باسم «الأتمتة»، لكن عملها مختلف. باختصار: الأتمتة البسيطة تنفّذ حسب قاعدة؛ الشات بوت يجيب عن سؤال؛ وكيل الذكاء الاصطناعي يفهم الموقف ويتخذ القرار ويُكمل العمل بنفسه حتى النهاية. نفصّل كل واحد أدناه لتعرف بالضبط مقابل ماذا تدفع.",
      items: [
        {
          icon: "wrench",
          title: "الأتمتة البسيطة: حسب القاعدة",
          desc: "تعمل بمبدأ «إذا حدث X فافعل Y»: ماكروهات Excel وسكربتات مشروطة وبوتات بسيطة. سريعة ورخيصة، لكنها لا تفهم ما هو خارج القواعد — إن كتب العميل بصيغة مختلفة قليلاً، تتوقف العملية.",
        },
        {
          icon: "message-circle",
          title: "الشات بوت: يجيب عن السؤال",
          desc: "يرد وفق سيناريو مكتوب مسبقاً أو نموذج ذكاء اصطناعي. يحسّن التواصل مع العميل، لكن العمل بعد الإجابة — تسجيل الطلب، الكتابة في CRM، التحقق من الدفع — يبقى على عاتق الإنسان.",
        },
        {
          icon: "bot",
          title: "وكيل الذكاء الاصطناعي: ينفّذ العمل بنفسه",
          desc: "لا يكتفي بالرد: يفهم السياق، يتخذ قراراته بنفسه ويتصرف داخل الأنظمة — يكتب في CRM، يتحقق من الدفع، يعدّ تقريراً، يرسل تذكيرات — ويقود العملية إلى نهايتها.",
        },
        {
          icon: "check-circle-2",
          title: "متى يكفي الشات بوت؟",
          desc: "إذا كانت المهمة سؤالاً وجواباً فقط — الأسعار، ساعات العمل، العنوان، قائمة الخدمات — فالشات بوت الذكي حل أرخص وأسرع. في هذه الحالة لا داعي لدفع زيادة مقابل وكيل — نقول ذلك بصدق في الاستشارة.",
        },
        {
          icon: "zap",
          title: "متى تحتاج وكيل ذكاء اصطناعي؟",
          desc: "عندما يلزم فعلٌ بعد الإجابة: قبول الطلب، التحقق من الدفع، تسجيل العميل المحتمل في CRM، إرسال متابعة، إعداد تقرير. أي عندما تحتاج نظاماً «يعمل» لا نظاماً «يتكلم» فقط.",
        },
        {
          icon: "puzzle",
          title: "يعملان معاً",
          desc: "وكيل الذكاء الاصطناعي يتضمن الشات بوت: المحادثة مع العميل هي الباب الأمامي، وخلفها القرارات والأفعال. نبدأ مشاريع كثيرة بشات بوت ثم ننمّيه تدريجياً إلى وكيل كامل — وتتوزع التكلفة تبعاً لذلك.",
        },
      ],
    },
    process: {
      badge: "كيف يُبنى",
      title: "5 خطوات إلى وكيل",
      titleAccent: "ذكاء اصطناعي عامل",
      subtitle:
        "أول 30 دقيقة مجانية. بعدها تسير كل خطوة بسيناريو مكتوب وسعر دقيق وموعد دقيق — لا مكان لعبارة «نرى لاحقاً».",
      steps: [
        {
          num: "01",
          title: "التدقيق",
          desc: "نراجع عملياتك معاً: أي عمل يستهلك الوقت، أين تكثر الأخطاء والتأخيرات، أي مهمة يمكن للوكيل توليها. هذه استشارة مجانية مدتها 30 دقيقة، بلا التزام.",
          icon: "search",
        },
        {
          num: "02",
          title: "تصميم الوكيل",
          desc: "أي قرارات يتخذها الوكيل بنفسه، متى يسلّم العمل لإنسان، وما لا يحق له فعله — كل ذلك يُثبَّت في سيناريو مكتوب. ويصبح السعر والموعد دقيقين في هذه المرحلة.",
          icon: "clipboard-list",
        },
        {
          num: "03",
          title: "التكامل",
          desc: "نربط الوكيل بأنظمتك العاملة: Telegram وAmoCRM وBitrix24 و1C وPOS وGoogle Sheets ومدفوعات Click/Payme وموقعك. يتصرف الوكيل داخل بيئتك الحقيقية.",
          icon: "link-2",
        },
        {
          num: "04",
          title: "الاختبار",
          desc: "نختبر على محادثات حقيقية وبيانات حقيقية: هل يقرر الوكيل بشكل صحيح، متى يسلّم لإنسان، أين يخطئ. أنت تختبر وتعطي ملاحظات — ونحن نضبط.",
          icon: "check-circle-2",
        },
        {
          num: "05",
          title: "إطلاق 24/7 + مراقبة",
          desc: "يبدأ الوكيل العمل على مدار الساعة. نراقب جودة قراراته، نصحح الأخطاء ونوسّع الوكيل تدريجياً بمهام جديدة.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "سيناريوهات ملموسة",
      title: "الوكلاء الذين",
      titleAccent: "نبنيهم",
      subtitle:
        "فيما يلي صور حقيقية للوكلاء الذين نبنيهم. مؤشر نتائج صادق: وكيل ذكاء اصطناعي واحد يحل محل 10 مهام يدوية، والعمل اليدوي المتكرر ينخفض عادة بنسبة 60–70% — الرقم الدقيق يعتمد على عملياتك ويُحسب معاً في الاستشارة.",
      items: [
        {
          tag: "01",
          title: "وكيل المبيعات",
          desc: "يبدأ الحوار فور وصول العميل المحتمل: يكتشف الحاجة، يحدد مستوى الاهتمام (Cold/Warm/Hot)، يسجّل البيانات في CRM بنفسه، يرسل عرضاً، وإن لم يأتِ رد يرسل تذكيرات المتابعة بنفسه. لا يصل إلى المدير إلا عميل جاهز «ساخن».",
        },
        {
          tag: "02",
          title: "وكيل الطلبات",
          desc: "يستقبل الطلب في Telegram أو الموقع، يتحقق من دفعة Click/Payme، يسجّل الطلب في CRM أو 1C بنفسه ويُطلع العميل على الحالة — من الاستلام إلى التسليم دون تدخل بشري.",
        },
        {
          tag: "03",
          title: "وكيل التقارير",
          desc: "كل يوم في وقت محدد يجمع بنفسه بيانات المبيعات والطلبات والصندوق من الأنظمة، يحللها ويرسل للمدير خلاصة يومية جاهزة في Telegram. سؤال «كم بعنا اليوم؟» يجيب عن نفسه.",
        },
        {
          tag: "04",
          title: "وكيل الموارد البشرية / الحضور",
          desc: "يتابع حضور الموظفين، يسجّل التأخير والغياب، يعطي الرد الأول على الطلبات الداخلية (إجازة، شهادة، جدول) ويعدّ خلاصة الحضور الشهرية بنفسه.",
        },
        {
          tag: "05",
          title: "وكيل الدعم",
          desc: "يجيب بدقة اعتماداً على قاعدتك — الأسعار والمستندات والخدمات — عبر RAG، يغلق الأسئلة المتكررة بنفسه ويحوّل الحالة المعقدة إلى موظف مع السياق الكامل. 24/7 بالأوزبكية والروسية.",
        },
        {
          tag: "06",
          title: "«المكتب الذكي» متعدد الوكلاء",
          desc: "عدة وكلاء يعملون معاً كأقسام: مبيعات، دعم، تقارير. نجرّب هذا النهج على منتجنا الخاص — AI Office بوكلاء 12 قسماً. ما زال قيد التطوير، ولا نعد به كمنتج جاهز.",
        },
      ],
    },
    cta: {
      badge: "وقت البدء",
      title: "لنحدد وكيلك",
      titleAccent: "الأول معاً",
      subtitle:
        "في استشارة مجانية مدتها 30 دقيقة نحسب معاً أي مهمة سيتولاها وكيل الذكاء الاصطناعي وكم من الوقت سيوفر لك. بلا التزام.",
      button: "راسلنا عبر Telegram",
      note: "أو راسل tezcode@tezcode.dev أو اتصل بـ ‎+998917776609.",
    },
    faq: {
      badge: "أسئلة شائعة",
      title: "أسئلة و",
      titleAccent: "إجابات",
      subtitle: "أكثر 15 سؤالاً شيوعاً عن تطوير وكلاء الذكاء الاصطناعي.",
      items: [
        {
          q: "ما هو وكيل الذكاء الاصطناعي؟",
          a: "وكيل الذكاء الاصطناعي نظام ذكاء اصطناعي ينفّذ العمل بنفسه: يفهم طلب العميل أو الموظف، يتخذ قراراته بنفسه، يتصرف في الأنظمة المتصلة (CRM، Telegram، 1C) ويقود العملية من البداية إلى النهاية. مثال بسيط: وصل عميل محتمل — تحدث الوكيل، سجّل البيانات في CRM، أرسل عرضاً، وتابع. يصل إلى المدير عميل «ساخن» جاهز فحسب.",
        },
        {
          q: "بماذا يختلف وكيل الذكاء الاصطناعي عن الشات بوت؟",
          a: "يمكن تلخيص الفرق في ثلاثة أسطر. الأتمتة البسيطة: تنفّذ قاعدة صارمة ولا تفهم الموقف. الشات بوت: يجيب عن السؤال لكن العمل التالي يبقى على الإنسان. وكيل الذكاء الاصطناعي: يفهم ويقرر وينفّذ العمل بنفسه — يكتب في CRM، يتحقق من الدفع، يعدّ التقارير. المقارنة الكاملة في مقالنا «الفرق بين الشات بوت ووكيل الذكاء الاصطناعي».",
        },
        {
          q: "كم التكلفة؟",
          a: "يبدأ وكيل الذكاء الاصطناعي من $400. يعتمد السعر الدقيق على تعقيد المهمة وعدد التكاملات والقنوات — وكيل سؤال-جواب بسيط ووكيل يتخذ القرارات ومتصل بعدة أنظمة يختلفان في السعر كثيراً. نعطي الرقم الدقيق في عرض مكتوب بعد الاستشارة المجانية. الدفع: 30% مقدماً والباقي حسب مراحل المشروع.",
        },
        {
          q: "كم يستغرق حتى يجهز؟",
          a: "وكيل بسيط — 1-2 أسبوع. وكيل أكثر تعقيداً متصل بعدة أنظمة — MVP عامل خلال 2-4 أسابيع. ثم يُختبر الوكيل في العمل الحقيقي ويُوسَّع تدريجياً. يُعطى الموعد الدقيق كتابةً بعد اعتماد السيناريو.",
        },
        {
          q: "مع أي أنظمة يعمل؟",
          a: "نبني تكاملات مع Telegram وAmoCRM وBitrix24 و1C وأنظمة POS وGoogle Sheets ومدفوعات Click/Payme وموقعك. إذا كان لنظامك API فيمكن ربط الوكيل به أيضاً — نراجع القائمة معاً في الاستشارة.",
        },
        {
          q: "إذا أخطأ الوكيل — من المسؤول؟",
          a: "تُحدَّد صلاحيات الوكيل مسبقاً في السيناريو: القرارات المهمة (مثل خصم كبير أو استرداد مال) تُرفع لموافقة إنسان، والباقي ينفّذه الوكيل بنفسه. قبل الإطلاق توجد فترة اختبار، ثم نراقب جودة القرارات ونصحح الأخطاء. مسؤولية الطرفين تُثبَّت كتابةً في العقد.",
        },
        {
          q: "أين تُخزَّن بياناتي؟",
          a: "يعمل الوكيل فقط ضمن البيانات التي تقدّمها. تُخزَّن البيانات على خادم متفق عليه — وعند الطلب ننشرها على خادمك الخاص أو في بيئة مغلقة. شروط السرية تُثبَّت في العقد، وقاعدة عملائك لا تُشارك مع أطراف ثالثة.",
        },
        {
          q: "هل يستحق للأعمال الصغيرة؟",
          a: "غالباً يظهر أثر الوكيل أسرع في الأعمال الصغيرة — إذا أخذ الوكيل الروتين عن فريق من 2-3 أشخاص، يتفرغ الفريق للبيع. يمكن البدء بمهمة ضيقة واحدة (مثل استقبال الطلبات فقط). وإذا كنت تحتاج سؤالاً وجواباً فقط، فيكفي شات بوت أرخص — نقول ذلك بصدق.",
        },
        {
          q: "كيف أراقب الوكيل؟",
          a: "تُسجَّل جميع محادثات الوكيل وأفعاله (سجل). إن رغبت نفعّل وضع «الإنسان يوافق» — لا ينفّذ الوكيل الأفعال المهمة إلا بموافقتك. كما يرسل الخلاصات اليومية أو الأسبوعية بنفسه، ويمكنك إيقافه مؤقتاً في أي لحظة.",
        },
        {
          q: "ليست لدي معرفة تقنية — هل هذه مشكلة؟",
          a: "لا. بناء الوكيل وربطه وضبطه — عملنا نحن. يكفي منك معرفة العملية: كيف تتعامل مع العميل، كيف يسير الطلب. إن كنت تستخدم Telegram فستتقن التعامل مع الوكيل خلال 15 دقيقة — وندرّب فريقك نحن.",
        },
        {
          q: "هل يفهم اللغة الأوزبكية؟",
          a: "نعم — وهذه ميزتنا الأساسية. يعمل الوكيل بالأوزبكية (اللاتينية والسيريلية) والروسية، وتُضاف الإنجليزية عند الحاجة. بأي لغة وبأي أسلوب يكتب العميل، يرد الوكيل بشكل طبيعي باللغة نفسها.",
        },
        {
          q: "لماذا Tezcode بالذات؟",
          a: "نحن لا نبني وكلاء الذكاء الاصطناعي للعملاء فقط — بل نستخدمهم يومياً ونطوّر منتجنا الخاص AI Office (منسّق ذكاء اصطناعي بوكلاء 12 قسماً)، أي نعرف عملياً أين يتعطل الوكلاء. Tezcode عضو رسمي في IT Park Uzbekistan (شهادة رقم 6237). الدفع يبدأ بـ30% مقدماً — لا نطلب مبلغاً كبيراً قبل أن ترى النتيجة.",
        },
        {
          q: "أريد بناء وكيل ذكاء اصطناعي لشركتي — بمن أتصل؟",
          a: "تواصل مع Tezcode — مصنع برمجيات ذكاء اصطناعي في طشقند وعضو رسمي في IT Park Uzbekistan. نبني وكلاء ذكاء اصطناعي مرتبطين بأنظمتك أنت — CRM و1C وGoogle Sheets وTelegram — وليس من قالب جاهز. اتصل على ‎+998 91 777 66 09 أو راسلنا على Telegram — نبدأ باستشارة مجانية لمدة 30 دقيقة لتحديد المهمة معاً.",
        },
        {
          q: "هل توجد في طشقند شركة تبني وكلاء ذكاء اصطناعي؟",
          a: "نعم — Tezcode، العنوان: طشقند، شارع أمير تيمور 10. نبني وكلاء ذكاء اصطناعي يتولون العمل المتكرر متعدد الخطوات: التحدث مع العملاء المحتملين، استقبال الطلبات، التسجيل في CRM، إعداد التقارير. في استشارة مجانية نحدد معاً أي مهمة يستحق تسليمها للوكيل.",
        },
        {
          q: "إذا طلبت وكيل ذكاء اصطناعي — كم التكلفة ومتى يجهز؟",
          a: "يبدأ وكيل الذكاء الاصطناعي من $400. يعتمد المبلغ الدقيق على عدد التكاملات وتعقيد السيناريو — نعطيه في عرض مكتوب بعد الاستشارة المجانية. المدة: MVP عامل يجهز عادةً خلال بضعة أسابيع (وكيل بسيط في 1-2 أسبوع، والأكثر تعقيداً في 2-4 أسابيع). الدفع 30% مقدماً والباقي حسب مراحل المشروع.",
        },
      ],
    },
    tech: {
      badge: "التقنيات",
      title: "بأي",
      titleAccent: "تقنيات",
      subtitle:
        "نبني وكلاء الذكاء الاصطناعي بتقنيات حديثة ومُثبتة — ليست «صندوقاً سحرياً» بل أدوات مسماة بدقة. نختار الأنسب لكل مهمة.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "النموذج الأساسي لفهم اللغة الطبيعية والحوار وتنفيذ المهام المعقدة.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "للمهام ذات السياق الطويل وتحليل المستندات والإجابات الموثوقة والآمنة.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "منطق الوكيل متعدد الخطوات: استدعاء الأدوات وشجرة القرار وتنسيق عدة وكلاء.",
        },
        {
          name: "RAG (التوليد المعزَّز بالاسترجاع)",
          desc: "يجيب الوكيل اعتماداً على قاعدتك — المستندات والأسعار والأسئلة الشائعة — دون اختلاق.",
        },
        {
          name: "قاعدة بيانات متجهة (pgvector / Pinecone)",
          desc: "بحث دلالي — يجد الوكيل بسرعة الجزء المطلوب من المستندات الكبيرة.",
        },
        {
          name: "التكامل (Telegram، CRM، 1C، POS)",
          desc: "Telegram Bot API وAmoCRM وBitrix24 و1C وPOS وGoogle Sheets وClick/Payme — يعمل الوكيل داخل نظامك.",
        },
      ],
    },
    pricing: {
      badge: "السعر",
      title: "على ماذا",
      titleAccent: "يعتمد السعر؟",
      subtitle:
        "نعطي السعر الدقيق في عرض مكتوب بعد الاستشارة المجانية — لا نذكر رقماً «في الهواء» قبل التدقيق. يعتمد السعر أساساً على ثلاثة أمور:",
      factors: [
        {
          title: "تعقيد المهمة",
          desc: "وكيل سؤال-جواب بسيط أم وكيل متعدد الخطوات يتخذ القرارات ويدير عدة عمليات (الطلب، الدفع، التقرير) — يتغير حجم العمل تبعاً لذلك.",
        },
        {
          title: "عدد عمليات التكامل",
          desc: "بكم نظام خارجي يتصل (CRM، 1C، الدفع، الموقع، POS، المخزون) — كل تكامل يُطوَّر ويُختبر على حدة.",
        },
        {
          title: "اللغات والقنوات",
          desc: "بكم لغة (uz/ru/en) وكم قناة (Telegram، Instagram، الموقع، WhatsApp) يعمل — كل قناة تعني ربطاً واختبارات مستقلة.",
        },
      ],
      note: "يبدأ الدفع بدفعة مقدمة 30% — والباقي حسب مراحل المشروع. ترى نتيجة كل مرحلة ثم تدفع.",
    },
    related: {
      badge: "خدمات ذات صلة",
      title: "قد يفيدك",
      titleAccent: "أيضاً",
      subtitle: "حلول قريبة من وكيل الذكاء الاصطناعي وأدلة مفيدة.",
      links: [
        {
          href: "/ai-chatbot",
          label: "خدمة شات بوت ذكي",
          desc: "شات بوت ذكي للدعم 24/7 وجمع العملاء المحتملين — أكثر أشكال الوكيل شيوعاً.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "بوت تيليجرام",
          desc: "بوت تيليجرام للأعمال مع الطلبات والدفع وتطبيق مصغّر.",
        },
        {
          href: "/ai-avtomatizatsiya",
          label: "أتمتة بالذكاء الاصطناعي",
          desc: "أتمتة عمليات الأعمال بالذكاء الاصطناعي.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "أتمتة الأعمال",
          desc: "أتمتة العمل الروتيني لتوفير الوقت والتكلفة.",
        },
        {
          href: "/blog/biznes-uchun-ai-agent-yaratish",
          label: "دليل: بناء وكيل ذكي",
          desc: "ما هو وكيل الذكاء الاصطناعي وكيف يعمل وكيف يُبنى في 6 خطوات — دليل كامل.",
        },
        {
          href: "/blog/ai-chatbot-va-ai-agent-farqi",
          label: "شات بوت أم وكيل ذكي",
          desc: "ما الفرق وأيهما يحتاجه عملك.",
        },
      ],
    },
    service: {
      name: "تطوير وكلاء الذكاء الاصطناعي — Tezcode",
      description:
        "بناء وكلاء ذكاء اصطناعي للأعمال: وكيل مبيعات (عميل محتمل ← CRM ← متابعة)، وكيل طلبات، وكيل تقارير، وكيل موارد بشرية/حضور، وكيل دعم ونهج «المكتب الذكي» متعدد الوكلاء. تكامل Telegram/CRM/1C/POS، بالأوزبكية والروسية. عضو IT Park. طشقند وكل أوزبكستان.",
      serviceType: "تطوير وكلاء الذكاء الاصطناعي / AI agent development",
    },
  },

  uk: {
    hero: {
      badge: "AI-агенти — Tezcode",
      title1: "Створення",
      titleAccent: "AI-агента",
      title2: "для бізнесу",
      subtitle:
        "Що таке AI-агент? Це не чат-бот, який просто відповідає на запитання, а цифровий співробітник, який сам виконує роботу: розуміє, чого хоче клієнт, сам ухвалює рішення, діє у ваших системах — CRM, Telegram, 1C — і веде процес від початку до кінця. Tezcode будує AI-агентів, що розуміють узбецьку мову, для продажів, замовлень, звітів та HR-процесів — від одного агента до мультиагентного підходу «AI-офіс».",
      trust:
        "Ташкент і весь Узбекистан • Офіційний резидент IT Park • Безкоштовна 30-хв консультація • Оплата: 30% передоплата",
      ctaPrimary: "Безкоштовна консультація",
      ctaSecondary: "Чим відрізняється від чат-бота?",
    },
    capabilities: {
      badge: "Розберіться в різниці",
      title: "AI-агент, чат-бот, автоматизація —",
      titleAccent: "у чому різниця?",
      subtitle:
        "Усі три продаються на ринку як «автоматизація», але роблять різне. Коротко: проста автоматизація виконує за правилом; чат-бот відповідає на запитання; AI-агент розуміє ситуацію, ухвалює рішення і сам доводить роботу до кінця. Нижче розкриваємо кожен варіант, щоб ви точно знали, за що платите.",
      items: [
        {
          icon: "wrench",
          title: "Проста автоматизація: за правилом",
          desc: "Працює за принципом «якщо X — зроби Y»: Excel-макроси, тригерні скрипти, прості боти. Швидко і дешево, але ситуацію поза правилами не розуміє — клієнт напише трохи інакше, і процес зупиняється.",
        },
        {
          icon: "message-circle",
          title: "Чат-бот: відповідає на запитання",
          desc: "Відповідає за заздалегідь написаним сценарієм або на базі AI. Покращує спілкування з клієнтом, але робота після відповіді — оформити замовлення, записати в CRM, перевірити оплату — все одно лишається на людині.",
        },
        {
          icon: "bot",
          title: "AI-агент: сам виконує роботу",
          desc: "Не просто відповідає: розуміє контекст, сам ухвалює рішення і діє в системах — пише в CRM, перевіряє оплату, готує звіт, надсилає нагадування — і доводить процес до кінця.",
        },
        {
          icon: "check-circle-2",
          title: "Коли достатньо чат-бота?",
          desc: "Якщо завдання — лише запитання-відповіді: ціни, години роботи, адреса, перелік послуг — AI-чат-бот дешевший і швидший. У такому разі переплачувати за агента не треба — кажемо це чесно на консультації.",
        },
        {
          icon: "zap",
          title: "Коли потрібен AI-агент?",
          desc: "Коли після відповіді потрібна дія: прийняти замовлення, перевірити оплату, записати лід у CRM, надіслати follow-up, підготувати звіт. Тобто коли вам потрібна система, що «робить», а не лише «розмовляє».",
        },
        {
          icon: "puzzle",
          title: "Вони працюють разом",
          desc: "AI-агент містить чат-бот: спілкування з клієнтом — вхідні двері, а за ними стоять рішення та дії. Багато проєктів ми починаємо з чат-бота і поетапно вирощуємо його в повноцінного агента — витрати розподіляються відповідно.",
        },
      ],
    },
    process: {
      badge: "Як будується",
      title: "5 кроків до робочого",
      titleAccent: "AI-агента",
      subtitle:
        "Перші 30 хвилин безкоштовно. Далі кожен крок іде з письмовим сценарієм, точною ціною та точним терміном — без «потім подивимось».",
      steps: [
        {
          num: "01",
          title: "Аудит",
          desc: "Разом розбираємо ваші процеси: яка робота забирає час, де найбільше помилок і затримок, яке завдання може взяти агент. Це безкоштовна 30-хвилинна консультація, без зобов'язань.",
          icon: "search",
        },
        {
          num: "02",
          title: "Дизайн агента",
          desc: "Які рішення агент ухвалює сам, коли передає людині, на що не має права — все фіксується в письмовому сценарії. Ціна і термін теж стають точними на цьому етапі.",
          icon: "clipboard-list",
        },
        {
          num: "03",
          title: "Інтеграція",
          desc: "Підключаємо агента до ваших робочих систем: Telegram, AmoCRM, Bitrix24, 1C, POS, Google Sheets, оплати Click/Payme і сайт. Агент діє всередині вашого реального середовища.",
          icon: "link-2",
        },
        {
          num: "04",
          title: "Тестування",
          desc: "Перевіряємо на реальних діалогах і реальних даних: чи правильно агент вирішує, коли передає людині, де помиляється. Ви тестуєте, даєте відгук — ми налаштовуємо.",
          icon: "check-circle-2",
        },
        {
          num: "05",
          title: "Запуск 24/7 + моніторинг",
          desc: "Агент починає працювати цілодобово. Ми стежимо за якістю його рішень, виправляємо помилки і поступово розширюємо агента новими завданнями.",
          icon: "rocket",
        },
      ],
    },
    examples: {
      badge: "Конкретні сценарії",
      title: "Яких агентів",
      titleAccent: "ми будуємо",
      subtitle:
        "Нижче — реальні варіанти агентів, яких ми будуємо. Чесний орієнтир за результатом: 1 AI-агент замінює 10 ручних операцій, повторювана ручна праця зазвичай знижується на 60–70% — точна цифра залежить від ваших процесів і рахується разом на консультації.",
      items: [
        {
          tag: "01",
          title: "Агент продажів",
          desc: "Починає діалог, щойно прийшов лід: виявляє потребу, визначає рівень інтересу (Cold/Warm/Hot), сам записує дані в CRM, надсилає пропозицію і, якщо немає відповіді, сам шле follow-up-нагадування. Менеджеру приходить уже готовий, «гарячий» клієнт.",
        },
        {
          tag: "02",
          title: "Агент замовлень",
          desc: "Приймає замовлення в Telegram або на сайті, перевіряє оплату Click/Payme, сам записує замовлення в CRM чи 1C та інформує клієнта про статус — від прийому до доставки без участі людини.",
        },
        {
          tag: "03",
          title: "Агент звітів",
          desc: "Щодня у визначений час сам збирає дані про продажі, замовлення й касу із систем, аналізує і надсилає керівнику готове щоденне зведення в Telegram. Питання «скільки ми сьогодні продали?» відповідає саме собі.",
        },
        {
          tag: "04",
          title: "HR / агент обліку відвідуваності",
          desc: "Стежить за відвідуваністю співробітників, фіксує запізнення і відсутність, дає першу відповідь на внутрішні запити (відпустка, довідка, графік) і наприкінці місяця сам готує зведення відвідуваності.",
        },
        {
          tag: "05",
          title: "Агент підтримки",
          desc: "Відповідає точно на основі вашої бази — ціни, документи, послуги — через RAG, сам закриває повторювані питання, складний випадок передає оператору з повним контекстом. 24/7, узбецькою та російською.",
        },
        {
          tag: "06",
          title: "Мультиагентний «AI-офіс»",
          desc: "Кілька агентів працюють разом як відділи: продажі, підтримка, звітність. Цей підхід ми обкатуємо на власному продукті — AI Office з агентами 12 відділів. Поки він у розробці, як готовий продукт не обіцяємо.",
        },
      ],
    },
    cta: {
      badge: "Час починати",
      title: "Визначимо вашого першого",
      titleAccent: "агента разом",
      subtitle:
        "На безкоштовній 30-хвилинній консультації разом порахуємо, яке завдання візьме на себе AI-агент і скільки часу це вам заощадить. Без зобов'язань.",
      button: "Написати в Telegram",
      note: "Або напишіть на tezcode@tezcode.dev чи зателефонуйте +998917776609.",
    },
    faq: {
      badge: "Часті запитання",
      title: "Запитання та",
      titleAccent: "відповіді",
      subtitle: "15 найчастіших запитань про створення AI-агентів.",
      items: [
        {
          q: "Що таке AI-агент?",
          a: "AI-агент — це AI-система, яка сама виконує роботу: розуміє запит клієнта чи співробітника, сама ухвалює рішення, діє в підключених системах (CRM, Telegram, 1C) і веде процес від початку до кінця. Простий приклад: прийшов лід — агент поспілкувався, записав дані в CRM, надіслав пропозицію, зробив follow-up. Менеджеру приходить уже готовий «гарячий» клієнт.",
        },
        {
          q: "Чим AI-агент відрізняється від чат-бота?",
          a: "Різницю можна вкласти у три рядки. Проста автоматизація: виконує за жорстким правилом, ситуацію не розуміє. Чат-бот: відповідає на запитання, але подальша робота лишається на людині. AI-агент: розуміє, вирішує і сам виконує роботу — пише в CRM, перевіряє оплату, готує звіт. Детальне порівняння — у нашій статті «різниця між чат-ботом і AI-агентом».",
        },
        {
          q: "Скільки це коштує?",
          a: "AI-агент від $400. Точна ціна залежить від складності завдання, кількості інтеграцій і каналів — простий агент запитання-відповідь і агент, підключений до кількох систем та здатний ухвалювати рішення, коштують по-різному. Точну суму даємо в письмовій пропозиції після безкоштовної консультації. Оплата — 30% передоплата, решта за етапами проєкту.",
        },
        {
          q: "За який час буде готовий?",
          a: "Простий агент — 1-2 тижні. Складніший, підключений до кількох систем — робочий MVP за 2-4 тижні. Далі агент перевіряється в реальній роботі та розширюється поетапно. Точний термін дається письмово після затвердження сценарію.",
        },
        {
          q: "З якими системами працює?",
          a: "Будуємо інтеграції з Telegram, AmoCRM, Bitrix24, 1C, POS-системами, Google Sheets, оплатами Click/Payme та вашим сайтом. Якщо у вашої системи є API, агента можна підключити і до неї — список перевіримо разом на консультації.",
        },
        {
          q: "Якщо агент помилиться — хто відповідає?",
          a: "Повноваження агента заздалегідь обмежуються у сценарії: важливі рішення (наприклад, велика знижка, повернення грошей) виносяться на підтвердження людині, решту агент робить сам. Перед запуском є тестовий період, потім ми моніторимо якість рішень і виправляємо помилки. Відповідальність сторін письмово фіксується в договорі.",
        },
        {
          q: "Де зберігаються мої дані?",
          a: "Агент працює лише в межах наданих вами даних. Дані зберігаються на погодженому сервері — на вимогу розміщуємо на вашому сервері або в закритому середовищі. Умови конфіденційності фіксуються в договорі, ваша клієнтська база третім особам не передається.",
        },
        {
          q: "Чи варте це малому бізнесу?",
          a: "Часто саме в малому бізнесі ефект агента помітніший — якщо в команді з 2-3 людей рутину забере агент, команда звільнить час для продажів. Почати можна з одного вузького завдання (наприклад, лише прийом замовлень). А якщо вам потрібні лише запитання-відповіді, вистачить дешевшого чат-бота — кажемо це чесно.",
        },
        {
          q: "Як я контролюю агента?",
          a: "Усі діалоги та дії агента протоколюються (лог). За бажанням вмикаємо режим «людина підтверджує» — важливі дії агент виконує лише з вашого підтвердження. Щоденні чи щотижневі зведення агент теж надсилає сам, і будь-якої миті його можна призупинити.",
        },
        {
          q: "У мене немає технічних знань — це проблема?",
          a: "Ні. Побудувати, підключити і налаштувати агента — наша робота. Від вас достатньо знання процесу: як ви працюєте з клієнтом, як іде замовлення. Якщо вмієте користуватися Telegram, роботу з агентом опануєте за 15 хвилин — вашу команду навчимо ми.",
        },
        {
          q: "Чи розуміє узбецьку мову?",
          a: "Так — це наша ключова перевага. Агент працює узбецькою (латиниця і кирилиця) та російською, за потреби додається англійська. Якою мовою і в якому стилі пише клієнт — тією мовою агент і відповідає, природно.",
        },
        {
          q: "Чому саме Tezcode?",
          a: "Ми будуємо AI-агентів не лише клієнтам — самі користуємось ними щодня і розвиваємо власний продукт AI Office (AI-оркестратор з агентами 12 відділів), тобто на практиці знаємо, де агенти ламаються. Tezcode — офіційний резидент IT Park Uzbekistan (свідоцтво №6237). Оплата — 30% передоплати: не просимо велику суму, поки ви не побачите результат.",
        },
        {
          q: "Хочу замовити AI-агента для бізнесу — до кого звернутися в Ташкенті?",
          a: "Зверніться в Tezcode — AI Software Factory в Ташкенті, офіційний резидент IT Park Uzbekistan. Ми будуємо AI-агентів не за шаблоном, а під ваші системи: CRM, 1C, Google Sheets, Telegram. Зателефонуйте на +998 91 777 66 09 або напишіть у Telegram — спершу на безкоштовній 30-хвилинній консультації разом визначимо завдання.",
        },
        {
          q: "Чи є в Ташкенті компанія, яка робить AI-агентів?",
          a: "Так — Tezcode, адреса: Ташкент, проспект Аміра Темура, 10. Ми будуємо AI-агентів, які беруть на себе повторювану багатокрокову роботу: листування з лідами, прийом замовлень, запис у CRM, звіти. На безкоштовній консультації разом розберемо, яке завдання можна передати агенту.",
        },
        {
          q: "Скільки коштує AI-агент і як швидко він буде готовий?",
          a: "AI-агент від $400. Точна сума залежить від кількості інтеграцій і складності сценарію — її даємо в письмовій пропозиції після безкоштовної консультації. Щодо термінів: робочий MVP зазвичай готовий за кілька тижнів (простий агент — 1-2 тижні, складніший — 2-4 тижні). Оплата — 30% передоплата, решта за етапами проєкту.",
        },
      ],
    },
    tech: {
      badge: "Технології",
      title: "На яких",
      titleAccent: "технологіях",
      subtitle:
        "Будуємо AI-агентів на перевірених сучасних технологіях — не «чарівна коробка», а конкретно названі інструменти. Під кожну задачу добираємо оптимальну.",
      items: [
        {
          name: "OpenAI GPT-4o",
          desc: "Основна модель для розуміння природної мови, діалогу та виконання складних задач.",
        },
        {
          name: "Claude (Anthropic)",
          desc: "Для задач із довгим контекстом, аналізом документів і надійними, безпечними відповідями.",
        },
        {
          name: "LangChain / LangGraph",
          desc: "Багатокрокова логіка агента: виклик інструментів, дерево рішень і оркестрація кількох агентів.",
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          desc: "Агент відповідає на основі вашої бази — документи, ціни, FAQ — і не вигадує.",
        },
        {
          name: "Векторна база (pgvector / Pinecone)",
          desc: "Пошук даних за змістом — агент швидко знаходить потрібне у великих документах.",
        },
        {
          name: "Інтеграція (Telegram, CRM, 1C, POS)",
          desc: "Telegram Bot API, AmoCRM, Bitrix24, 1C, POS, Google Sheets, Click/Payme — агент діє всередині вашої системи.",
        },
      ],
    },
    pricing: {
      badge: "Ціна",
      title: "Від чого залежить",
      titleAccent: "ціна?",
      subtitle:
        "Точну ціну даємо в письмовій пропозиції після безкоштовної консультації — не називаємо цифру «в повітря» до аудиту. Ціна залежить переважно від трьох речей:",
      factors: [
        {
          title: "Складність задачі",
          desc: "Простий агент запитання-відповідь чи багатокроковий, що ухвалює рішення і керує кількома процесами (замовлення, оплата, звіт) — обсяг роботи змінюється відповідно.",
        },
        {
          title: "Кількість інтеграцій",
          desc: "До скількох зовнішніх систем підключається (CRM, 1C, оплата, сайт, POS, склад) — кожна інтеграція окремо розробляється і тестується.",
        },
        {
          title: "Мови та канали",
          desc: "Скількома мовами (uz/ru/en) і в скількох каналах (Telegram, Instagram, сайт, WhatsApp) працює — кожен канал це окреме підключення і тести.",
        },
      ],
      note: "Оплата починається з 30% передоплати — решта за етапами проєкту. Бачите результат етапу — потім платите.",
    },
    related: {
      badge: "Пов'язані послуги",
      title: "Вам також може",
      titleAccent: "бути корисно",
      subtitle: "Близькі до AI-агента рішення та корисні посібники.",
      links: [
        {
          href: "/ai-chatbot",
          label: "AI-чат-бот",
          desc: "AI-чат-бот для підтримки 24/7 і збору лідів — найпоширеніша форма агента.",
        },
        {
          href: "/telegram-bot-biznes",
          label: "Telegram-бот",
          desc: "Telegram-бот для бізнесу із замовленнями, оплатою та Mini App.",
        },
        {
          href: "/ai-avtomatizatsiya",
          label: "AI-автоматизація",
          desc: "Автоматизація бізнес-процесів за допомогою штучного інтелекту.",
        },
        {
          href: "/biznes-avtomatlashtirish",
          label: "Автоматизація бізнесу",
          desc: "Автоматизуємо рутину, заощаджуємо час і витрати.",
        },
        {
          href: "/blog/biznes-uchun-ai-agent-yaratish",
          label: "Гід: створення AI-агента",
          desc: "Що таке AI-агент, як працює і як створюється за 6 кроків — повний посібник.",
        },
        {
          href: "/blog/ai-chatbot-va-ai-agent-farqi",
          label: "Чат-бот vs AI-агент",
          desc: "У чому різниця і що саме потрібно вашому бізнесу.",
        },
      ],
    },
    service: {
      name: "Створення AI-агентів — Tezcode",
      description:
        "Створення AI-агентів для бізнесу: агент продажів (лід → CRM → follow-up), агент замовлень, агент звітів, HR-агент, агент підтримки та мультиагентний підхід «AI-офіс». Інтеграція з Telegram/CRM/1C/POS, узбецькою та російською. Резидент IT Park. Ташкент і весь Узбекистан.",
      serviceType: "Створення AI-агентів / AI agent development",
    },
  },
};
