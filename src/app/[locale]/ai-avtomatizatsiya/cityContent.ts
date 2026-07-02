import type {
  ServiceLang,
  ServicePageContent,
  ServicePageCopy,
} from "@/components/service-page/types";
import type { City } from "@/data/cities";
import { CONTENT } from "./content";

// Builds a full 5-locale ServicePageContent for a single city by deep-cloning the
// base AI-automation copy and overriding the city-aware fields. A UNIQUE per-city
// AI-automation intro blurb (AI_INTRO below — NOT the POS-flavoured city.intro from
// cities.ts) is injected so it renders visibly in the HTML (prepended to the hero
// subtitle + used as the examples subtitle), and a city-specific FAQ item is
// prepended so the FAQ schema is unique per city too. This keeps each /ai-
// avtomatizatsiya/<city> page genuinely distinct (no thin "doorway page").
//
// Only confirmed facts are used — the AI capability claims come straight from the
// base content; the intros describe each city's real economic character. No
// fabricated client counts or numbers.

// Per-city AI-automation intro blurbs (uz/ru/en/ar/uk). Each describes the city's
// real business character and how AI automation applies — distinct per city.
const AI_INTRO: Record<string, Record<ServiceLang, string>> = {
  toshkent: {
    uz: "Toshkent — O'zbekistonning savdo va biznes poytaxti: yirik savdo markazlari, ko'p filialli tarmoqlar, savdo, xizmat va kichik biznesning zich markazi. Bunday sur'atda Tezcode'ning sun'iy intellekt yechimlari mijozlar bilan muloqotni, savdo va lid oqimini, hisobot hamda hujjatlarni avtomatlashtirib, jamoaning vaqtini tejaydi.",
    ru: "Ташкент — торговая и деловая столица Узбекистана: крупные торговые центры, сети с филиалами и плотный центр торговли, услуг и малого бизнеса. В таком темпе ИИ-решения Tezcode автоматизируют общение с клиентами, обработку продаж и заявок, отчётность и работу с документами, экономя время команды.",
    en: "Tashkent is Uzbekistan's commercial and business capital — large malls, multi-branch chains and a dense hub of trade, services and small business. At this pace, Tezcode's AI solutions automate customer communication, sales and lead handling, reporting and document processing, freeing up your team's time.",
    ar: "طشقند هي العاصمة التجارية والاقتصادية لأوزبكستان — مراكز تجارية كبرى وسلاسل متعددة الفروع ومركز كثيف للتجارة والخدمات والأعمال الصغيرة. وبهذا الإيقاع، تعمل حلول Tezcode للذكاء الاصطناعي على أتمتة التواصل مع العملاء ومعالجة المبيعات والطلبات وإعداد التقارير ومعالجة المستندات، مما يوفّر وقت فريقك.",
    uk: "Ташкент — торгова та ділова столиця Узбекистану: великі торгові центри, мережі з філіями та щільний осередок торгівлі, послуг і малого бізнесу. У такому темпі ШІ-рішення Tezcode автоматизують спілкування з клієнтами, обробку продажів і заявок, звітність та роботу з документами, заощаджуючи час команди.",
  },
  samarqand: {
    uz: "Samarqand — Ipak yo'lining qadimiy chorrahasi, bugun turistik oqim, mehmondo'stlik, hunarmandchilik va tez rivojlanayotgan do'kon hamda kafelar bilan yashaydigan shahar. Mavsumiy talab yuqori bo'lgan bunday muhitda Tezcode'ning sun'iy intellekt yechimlari mijozlar bilan muloqotni, bron va buyurtmalarni, hisobotlarni avtomatlashtirib, biznesni bir maromda boshqarishga yordam beradi.",
    ru: "Самарканд — древний перекрёсток Великого шёлкового пути, живущий сегодня потоком туристов, гостеприимством, ремёслами и быстро растущими магазинами и кафе. В такой среде с сезонным спросом ИИ-решения Tezcode автоматизируют общение с клиентами, бронирования и заказы, отчётность, помогая вести бизнес ровно и без перегрузки.",
    en: "Samarkand is an ancient Silk Road crossroads, alive today with tourism, hospitality, crafts and fast-growing shops and cafes. In this seasonally driven environment, Tezcode's AI solutions automate customer communication, bookings and orders, and reporting, helping businesses run smoothly without overload.",
    ar: "سمرقند مفترق طرق قديم على طريق الحرير، تنبض اليوم بالسياحة والضيافة والحرف اليدوية والمتاجر والمقاهي سريعة النمو. وفي هذه البيئة ذات الطلب الموسمي، تعمل حلول Tezcode للذكاء الاصطناعي على أتمتة التواصل مع العملاء والحجوزات والطلبات والتقارير، مما يساعد الأعمال على العمل بسلاسة دون إرهاق.",
    uk: "Самарканд — давнє перехрестя Великого шовкового шляху, що сьогодні живе потоком туристів, гостинністю, ремеслами та швидко зростаючими магазинами й кафе. У такому середовищі із сезонним попитом ШІ-рішення Tezcode автоматизують спілкування з клієнтами, бронювання та замовлення, звітність, допомагаючи вести бізнес рівно й без перевантаження.",
  },
  buxoro: {
    uz: "Buxoro — asrlar davomida savdogarlar shahri bo'lib kelgan, gumbazli savdo rastalari, zardo'zlik, gilam va sovg'a hunarmandchiligi hamda kundalik savdo bilan mashhur joy. Bunday kichik va oilaviy bizneslar uchun Tezcode'ning sun'iy intellekt yechimlari mijozlar bilan muloqotni, buyurtma va savdo oqimini, hisobotlarni avtomatlashtirib, kam kuch bilan ko'proq natija olishga imkon beradi.",
    ru: "Бухара — веками город купцов, известный купольными торговыми рядами, золотым шитьём, коврами, сувенирными ремёслами и повседневной торговлей. Для таких небольших и семейных компаний ИИ-решения Tezcode автоматизируют общение с клиентами, обработку заказов и продаж, отчётность, позволяя получать больше при меньших усилиях.",
    en: "Bukhara was a city of merchants for centuries, famed for its domed trading rows, gold embroidery, carpets, souvenir crafts and everyday trade. For such small and family-run businesses, Tezcode's AI solutions automate customer communication, order and sales handling, and reporting, helping them achieve more with less effort.",
    ar: "كانت بخارى لقرون مدينة التجار، تشتهر بصفوفها التجارية المقببة والتطريز الذهبي والسجاد وحرف الهدايا والتجارة اليومية. ولمثل هذه الأعمال الصغيرة والعائلية، تعمل حلول Tezcode للذكاء الاصطناعي على أتمتة التواصل مع العملاء ومعالجة الطلبات والمبيعات والتقارير، مما يساعدها على تحقيق المزيد بجهد أقل.",
    uk: "Бухара століттями була містом купців, відомим купольними торговими рядами, золотим шиттям, килимами, сувенірними ремеслами та повсякденною торгівлею. Для таких невеликих і сімейних компаній ШІ-рішення Tezcode автоматизують спілкування з клієнтами, обробку замовлень і продажів, звітність, дозволяючи досягати більшого з меншими зусиллями.",
  },
  andijon: {
    uz: "Andijon — Farg'ona vodiysining yirik savdo va sanoat markazi, zich aholisi, keng dehqon bozorlari va faol tadbirkorligi bilan ajralib turadi. Bunday yuqori aylanmali biznes muhitida AI avtomatizatsiya mijozlar bilan muloqotni, sotuv so'rovlarini va kunlik hisobotlarni avtomatlashtirib, vaqt va kuchni tejaydi.",
    ru: "Андижан — крупный торгово-промышленный центр Ферганской долины, выделяющийся плотным населением, обширными дехканскими базарами и активным предпринимательством. В такой бизнес-среде с высоким оборотом AI-автоматизация берёт на себя общение с клиентами, обработку заявок на продажу и ежедневную отчётность, экономя время и силы.",
    en: "Andijan is a major trade and industrial hub of the Fergana Valley, marked by a dense population, large farmers' bazaars and an active entrepreneurial spirit. In such a high-turnover business environment, AI automation takes over customer conversations, sales inquiries and daily reporting, saving time and effort.",
    ar: "أنديجان مركز تجاري وصناعي كبير في وادي فرغانة، يتميّز بكثافة سكانية وأسواق فلاحية واسعة وروح ريادية نشطة. في بيئة أعمال عالية الحركة كهذه، تتولّى أتمتة الذكاء الاصطناعي التواصل مع العملاء ومعالجة طلبات البيع والتقارير اليومية، فتوفّر الوقت والجهد.",
    uk: "Андижан — великий торгово-промисловий центр Ферганської долини, що вирізняється щільним населенням, просторими дехканськими базарами та активним підприємництвом. У такому бізнес-середовищі з високим оборотом AI-автоматизація бере на себе спілкування з клієнтами, обробку запитів на продаж і щоденну звітність, заощаджуючи час і сили.",
  },
  namangan: {
    uz: "Namangan — Farg'ona vodiysidagi yirik shaharlardan biri, kuchli to'qimachilik, tikuvchilik va dehqonchilik an'analari hamda ko'plab oilaviy bizneslari bilan tanilgan. Ishlab chiqarish va savdo bilan band bunday korxonalar uchun AI avtomatizatsiya mijozlarga javob berish, buyurtmalarni qabul qilish va hujjatlarni rasmiylashtirishni avtomatlashtiradi.",
    ru: "Наманган — один из крупнейших городов Ферганской долины, известный сильными традициями текстиля, пошива и сельского хозяйства, а также множеством семейных предприятий. Для таких производственно-торговых бизнесов AI-автоматизация берёт на себя ответы клиентам, приём заказов и оформление документов.",
    en: "Namangan is one of the largest cities of the Fergana Valley, known for strong textile, tailoring and farming traditions and many family-run businesses. For such production-and-trade enterprises, AI automation handles customer replies, order intake and document processing.",
    ar: "نمنغان من أكبر مدن وادي فرغانة، معروفة بتقاليد قوية في النسيج والخياطة والزراعة وبكثرة المشاريع العائلية. لمثل هذه المشاريع الإنتاجية والتجارية، تتولّى أتمتة الذكاء الاصطناعي الردّ على العملاء واستقبال الطلبات ومعالجة المستندات.",
    uk: "Наманган — одне з найбільших міст Ферганської долини, відоме сильними традиціями текстилю, пошиття та сільського господарства, а також безліччю сімейних підприємств. Для таких виробничо-торговельних бізнесів AI-автоматизація бере на себе відповіді клієнтам, приймання замовлень та оформлення документів.",
  },
  fargona: {
    uz: "Farg'ona — keng, rejali ko'chalari bilan ajralib turadigan vodiy markazi, kuchli qishloq xo'jaligi, oziq-ovqat savdosi va o'sib borayotgan tadbirkorlik bilan yashaydi. Tez aylanmali bunday bizneslar uchun AI avtomatizatsiya mijozlar so'rovlarini, sotuv va yetkazib berish jarayonlarini hamda hisobotlarni avtomatlashtirib boradi.",
    ru: "Фергана — центр долины с широкими, регулярными улицами, живущий сильным сельским хозяйством, продуктовой торговлей и растущим предпринимательством. Для таких быстрооборотных бизнесов AI-автоматизация берёт на себя запросы клиентов, процессы продаж и доставки, а также отчётность.",
    en: "Fergana is a valley center distinguished by wide, regular streets, living off strong agriculture, grocery trade and growing entrepreneurship. For such fast-moving businesses, AI automation handles customer inquiries, sales and delivery processes, and reporting.",
    ar: "فرغانة مركز الوادي بشوارعه الواسعة المنتظمة، تعيش على زراعة قوية وتجارة بقالة وريادة أعمال متنامية. لمثل هذه الأعمال سريعة الحركة، تتولّى أتمتة الذكاء الاصطناعي استفسارات العملاء وعمليات البيع والتوصيل والتقارير.",
    uk: "Фергана — центр долини з широкими, регулярними вулицями, що живе сильним сільським господарством, продуктовою торгівлею та зростаючим підприємництвом. Для таких швидкооборотних бізнесів AI-автоматизація бере на себе запити клієнтів, процеси продажу й доставки, а також звітність.",
  },
  nukus: {
    uz: "Nukus — Qoraqalpog'istonning poytaxti, keng hududga tarqalgan aholiga xizmat ko'rsatuvchi mintaqaning savdo va ma'muriy markazi. Ana shunday geografik sharoitda AI avtomatizatsiya mijozlar bilan muloqotni, so'rovlarni qabul qilishni va hujjat hamda hisobotlarni tayyorlashni avtomatlashtirib, biznesni masofadan ham uzluksiz boshqarish imkonini beradi.",
    ru: "Нукус — столица Каракалпакстана, торговый и административный центр региона, обслуживающий население на обширной территории. В таких географических условиях AI-автоматизация берёт на себя общение с клиентами, приём заявок и подготовку документов и отчётов, позволяя вести бизнес стабильно даже на расстоянии.",
    en: "Nukus is the capital of Karakalpakstan, the region's trade and administrative center serving a population spread across a vast territory. In these conditions AI automation takes over customer communication, request handling and the preparation of documents and reports, letting businesses run smoothly even at a distance.",
    ar: "نوكوس عاصمة قره قلباقستان والمركز التجاري والإداري للإقليم الذي يخدم سكاناً منتشرين على مساحة شاسعة. في مثل هذه الظروف الجغرافية تتولّى أتمتة الذكاء الاصطناعي التواصل مع العملاء واستقبال الطلبات وإعداد المستندات والتقارير، بما يتيح إدارة الأعمال بسلاسة حتى عن بُعد.",
    uk: "Нукус — столиця Каракалпакстану, торговий та адміністративний центр регіону, що обслуговує населення на великій території. За таких географічних умов AI-автоматизація бере на себе спілкування з клієнтами, приймання заявок і підготовку документів та звітів, дозволяючи вести бізнес стабільно навіть на відстані.",
  },
  qarshi: {
    uz: "Qarshi — Qashqadaryo viloyatining markazi, qadimiy savdo yo'llari ustida joylashgan gaz-energetika va qishloq xo'jaligi mintaqasi, markaziy bozor va kundalik savdo bilan ajralib turadi. AI avtomatizatsiya bunday bizneslar uchun mijozlar so'rovlari va sotuvlarni qayta ishlashni, hisobot va hujjatlarni tayyorlashni avtomatlashtirib, kunlik ish yukini sezilarli yengillashtiradi.",
    ru: "Карши — центр Кашкадарьинской области на древних торговых путях, регион газа, энергетики и сельского хозяйства с центральным базаром и активной повседневной торговлей. Для такого бизнеса AI-автоматизация берёт на себя обработку обращений клиентов и продаж, подготовку отчётов и документов, заметно облегчая ежедневную нагрузку.",
    en: "Qarshi is the center of the Qashqadaryo region, set on ancient trade routes — a land of gas, energy and agriculture with a busy central bazaar and everyday trade. For businesses of this kind, AI automation handles customer inquiries and sales processing, report and document preparation, noticeably easing the daily workload.",
    ar: "قارشي مركز ولاية قشقداريا على طرق تجارية قديمة، منطقة غاز وطاقة وزراعة تتميّز بسوقها المركزي وتجارتها اليومية النشطة. لمثل هذه الأعمال تتولّى أتمتة الذكاء الاصطناعي معالجة استفسارات العملاء والمبيعات وإعداد التقارير والمستندات، ما يخفّف عبء العمل اليومي بشكل ملحوظ.",
    uk: "Карші — центр Кашкадар'їнської області на давніх торгових шляхах, регіон газу, енергетики та сільського господарства з центральним базаром і активною повсякденною торгівлею. Для такого бізнесу AI-автоматизація бере на себе обробку звернень клієнтів і продажів, підготовку звітів та документів, помітно полегшуючи щоденне навантаження.",
  },
  jizzax: {
    uz: "Jizzax — Toshkent va Samarqand orasidagi muhim tranzit va savdo nuqtasi, paxtachilik va don yetishtirish mintaqasi, trassa bo'yidagi do'konlar va yangi savdo nuqtalari bilan tez rivojlanmoqda. AI avtomatizatsiya o'sayotgan biznesga mijozlar bilan muloqot, lid va sotuvlarni qayta ishlash hamda hisobot tayyorlashni avtomatlashtirib, kengayish bilan birga boshqaruvni soddalashtiradi.",
    ru: "Джизак — важный транзитный и торговый пункт между Ташкентом и Самаркандом, регион хлопководства и зерна, который быстро растёт благодаря придорожным магазинам и новым торговым точкам. AI-автоматизация помогает растущему бизнесу, беря на себя общение с клиентами, обработку лидов и продаж и подготовку отчётов, упрощая управление по мере расширения.",
    en: "Jizzakh is an important transit and trade point between Tashkent and Samarkand, a region of cotton and grain growing fast on the back of roadside shops and new outlets. AI automation supports this growing business by handling customer communication, lead and sales processing and report preparation, simplifying management as it expands.",
    ar: "جيزاك نقطة عبور وتجارة مهمة بين طشقند وسمرقند، منطقة قطن وحبوب تنمو بسرعة بفضل المتاجر على جانب الطريق والمنافذ الجديدة. تدعم أتمتة الذكاء الاصطناعي هذا النشاط المتنامي عبر تولّي التواصل مع العملاء ومعالجة العملاء المحتملين والمبيعات وإعداد التقارير، ما يبسّط الإدارة مع التوسّع.",
    uk: "Джизак — важливий транзитний і торговий пункт між Ташкентом і Самаркандом, регіон бавовництва й зерна, що швидко зростає завдяки придорожнім магазинам і новим торговим точкам. AI-автоматизація допомагає зростаючому бізнесу, беручи на себе спілкування з клієнтами, обробку лідів і продажів та підготовку звітів, спрощуючи управління в міру розширення.",
  },
  navoiy: {
    uz: "Navoiy — yirik kon-metallurgiya va sanoat shahri bo'lib, bu yerda zamonaviy supermarketlar, kiyim va elektronika do'konlari, restoran-kafelar barqaror talab bilan ishlaydi. Sanoat va xizmat biznesi uchun Tezcode yechimlari mijozlarga javoblar, sotuv va so'rovlarni qayta ishlash hamda hisobotlarni avtomatlashtiradi.",
    ru: "Навои — крупный горно-металлургический и промышленный город, где со стабильным спросом работают современные супермаркеты, магазины одежды и электроники, рестораны и кафе. Для промышленного и сервисного бизнеса AI-решения Tezcode автоматизируют ответы клиентам, обработку заявок и продаж, а также формирование отчётов.",
    en: "Navoiy is a major mining-metallurgical and industrial city, where modern supermarkets, clothing and electronics stores, restaurants and cafes run on stable demand. For industrial and service businesses, Tezcode's AI solutions automate customer replies, lead and sales handling, and report generation.",
    ar: "نوائي مدينة تعدينية ومعدنية وصناعية كبيرة، تعمل فيها بطلب مستقر متاجر سوبر ماركت حديثة ومتاجر ملابس وإلكترونيات ومطاعم ومقاهٍ. لشركات الصناعة والخدمات، تؤتمت حلول Tezcode بالذكاء الاصطناعي الردود على العملاء ومعالجة الطلبات والمبيعات وإعداد التقارير.",
    uk: "Навої — велике гірничо-металургійне та промислове місто, де зі стабільним попитом працюють сучасні супермаркети, магазини одягу та електроніки, ресторани й кафе. Для промислового та сервісного бізнесу AI-рішення Tezcode автоматизують відповіді клієнтам, обробку заявок і продажів та формування звітів.",
  },
  urganch: {
    uz: "Urganch — Xorazm viloyatining markazi va Xiva turizmiga eshik bo'lgan shahar bo'lib, markaziy bozor, kundalik savdo yonida turistlarga mo'ljallangan sovg'a va hunarmandchilik do'konlari faol. Turizm va savdo biznesi uchun Tezcode yechimlari mijozlar bilan muloqotni, so'rov va buyurtmalarni qayta ishlashni hamda hujjat va hisobotlarni avtomatlashtiradi.",
    ru: "Ургенч — центр Хорезмской области и ворота к туризму Хивы, где рядом с центральным базаром и повседневной торговлей активны сувенирные и ремесленные магазины для туристов. Для туристического и торгового бизнеса AI-решения Tezcode автоматизируют общение с клиентами, обработку запросов и заказов, а также работу с документами и отчётами.",
    en: "Urgench is the center of the Khorezm region and the gateway to Khiva's tourism, where souvenir and craft shops for tourists thrive alongside the central bazaar and everyday trade. For tourism and trade businesses, Tezcode's AI solutions automate customer communication, request and order handling, and document and report processing.",
    ar: "أورغنش مركز ولاية خوارزم وبوابة سياحة خيوة، حيث تنشط متاجر الهدايا والحرف للسياح إلى جانب السوق المركزي والتجارة اليومية. لشركات السياحة والتجارة، تؤتمت حلول Tezcode بالذكاء الاصطناعي التواصل مع العملاء ومعالجة الطلبات والحجوزات والتعامل مع المستندات والتقارير.",
    uk: "Ургенч — центр Хорезмської області та ворота до туризму Хіви, де поряд із центральним базаром і повсякденною торгівлею активні сувенірні та ремісничі магазини для туристів. Для туристичного й торгового бізнесу AI-рішення Tezcode автоматизують спілкування з клієнтами, обробку запитів і замовлень та роботу з документами й звітами.",
  },
  termiz: {
    uz: "Termiz — O'zbekistonning eng janubidagi chegara shahri bo'lib, Afg'oniston bilan savdo va tranzit oqimida muhim nuqta; chegara savdosi, ulgurji bazalar va import tovarlari shahar bozorini jonlantiradi. Savdo va logistika biznesi uchun Tezcode yechimlari mijozlar so'rovlari, buyurtmalar va hujjatlarni qayta ishlashni hamda hisobotlarni avtomatlashtiradi.",
    ru: "Термез — самый южный приграничный город Узбекистана, важный пункт в торговле и транзите с Афганистаном; приграничная торговля, оптовые базы и импортные товары оживляют рынок города. Для торгового и логистического бизнеса AI-решения Tezcode автоматизируют обработку клиентских запросов, заказов и документов, а также формирование отчётов.",
    en: "Termez is Uzbekistan's southernmost border city and an important point in trade and transit with Afghanistan, where cross-border trade, wholesale depots and imported goods enliven the city's market. For trade and logistics businesses, Tezcode's AI solutions automate customer request, order and document handling, as well as report generation.",
    ar: "ترمذ أقصى مدينة حدودية جنوب أوزبكستان ونقطة مهمة في التجارة والعبور مع أفغانستان، حيث تنشّط التجارة الحدودية ومستودعات الجملة والسلع المستوردة سوق المدينة. لشركات التجارة والخدمات اللوجستية، تؤتمت حلول Tezcode بالذكاء الاصطناعي معالجة طلبات العملاء والطلبيات والمستندات وإعداد التقارير.",
    uk: "Термез — найпівденніше прикордонне місто Узбекистану та важливий пункт у торгівлі й транзиті з Афганістаном, де прикордонна торгівля, оптові бази й імпортні товари пожвавлюють ринок міста. Для торгового та логістичного бізнесу AI-рішення Tezcode автоматизують обробку клієнтських запитів, замовлень і документів, а також формування звітів.",
  },
};

// Locale-specific phrasing for the prepended city FAQ (delivery is remote across UZ).
const CITY_FAQ: Record<ServiceLang, (city: string) => { q: string; a: string }> = {
  uz: (city) => ({
    q: `Tezcode ${city}da AI avtomatizatsiya qiladimi?`,
    a: `Ha. Tezcode butun O'zbekiston bo'ylab, jumladan ${city}da ham AI avtomatizatsiya xizmatini ko'rsatadi. Konsultatsiya, audit, ishlab chiqish va qo'llab-quvvatlash masofadan amalga oshiriladi — biznesingiz ${city}ning istalgan nuqtasida bo'lsa ham. Yechimni jarayoningizga moslab quramiz va Telegram, CRM, 1C yoki Google Sheets kabi tizimlaringizga ulaymiz.`,
  }),
  ru: (city) => ({
    q: `Tezcode внедряет AI-автоматизацию в ${city}?`,
    a: `Да. Tezcode оказывает услуги AI-автоматизации по всему Узбекистану, в том числе в ${city}. Консультация, аудит, разработка и поддержка проводятся удалённо — где бы ни находился ваш бизнес в ${city}. Решение настраивается под ваши процессы и подключается к таким системам, как Telegram, CRM, 1C или Google Sheets.`,
  }),
  en: (city) => ({
    q: `Does Tezcode do AI automation in ${city}?`,
    a: `Yes. Tezcode provides AI automation across all of Uzbekistan, including ${city}. Consultation, audit, development and support are done remotely — wherever your business is in ${city}. We tailor the solution to your processes and connect it to systems like Telegram, CRM, 1C or Google Sheets.`,
  }),
  ar: (city) => ({
    q: `هل تقدّم Tezcode أتمتة الذكاء الاصطناعي في ${city}؟`,
    a: `نعم. تقدّم Tezcode خدمات أتمتة الذكاء الاصطناعي في جميع أنحاء أوزبكستان، بما في ذلك ${city}. تتم الاستشارة والتدقيق والتطوير والدعم عن بُعد — أينما كان عملك في ${city}. نُصمّم الحل وفق عملياتك ونربطه بأنظمة مثل Telegram وCRM و1C أو Google Sheets.`,
  }),
  uk: (city) => ({
    q: `Tezcode впроваджує AI-автоматизацію в ${city}?`,
    a: `Так. Tezcode надає послуги AI-автоматизації по всьому Узбекистану, зокрема в ${city}. Консультація, аудит, розробка та підтримка проводяться віддалено — де б не був ваш бізнес у ${city}. Рішення налаштовується під ваші процеси та підключається до таких систем, як Telegram, CRM, 1C або Google Sheets.`,
  }),
};

// Locale-specific trust line (city-aware).
const CITY_TRUST: Record<ServiceLang, (city: string) => string> = {
  uz: (city) => `Bepul 30 daqiqa konsultatsiya • ${city} va butun O'zbekiston`,
  ru: (city) => `Бесплатная 30-минутная консультация • ${city} и весь Узбекистан`,
  en: (city) => `Free 30-min consultation • ${city} and all of Uzbekistan`,
  ar: (city) => `استشارة مجانية 30 دقيقة • ${city} وكل أوزبكستان`,
  uk: (city) => `Безкоштовна 30-хвилинна консультація • ${city} і весь Узбекистан`,
};

// City-aware hero title. `title1` renders white, `titleAccent` renders in the
// gradient — composed as two lines, so they must read naturally together WITHOUT
// repeating each other.
const HERO_TITLE: Record<
  ServiceLang,
  (city: string) => { title1: string; titleAccent: string }
> = {
  uz: (city) => ({ title1: `${city}da biznesni`, titleAccent: "AI bilan avtomatlashtiring" }),
  ru: (city) => ({ title1: "AI-автоматизация бизнеса в", titleAccent: city }),
  en: (city) => ({ title1: "AI business automation in", titleAccent: city }),
  ar: (city) => ({ title1: "أتمتة الأعمال بالذكاء الاصطناعي في", titleAccent: city }),
  uk: (city) => ({ title1: "AI-автоматизація бізнесу в", titleAccent: city }),
};

// City-aware service schema name / description / type.
const SERVICE_TEXT: Record<
  ServiceLang,
  (city: string, region: string) => { name: string; description: string; serviceType: string }
> = {
  uz: (city, region) => ({
    name: `AI avtomatizatsiya — ${city} uchun | Tezcode`,
    description: `${city} (${region}) bizneslari uchun AI avtomatizatsiya: mijoz xizmati, hisobot, sotuv va hujjat jarayonlarini sun'iy intellekt bilan avtomatlashtirish. ${city} va butun O'zbekiston bo'ylab masofaviy konsultatsiya, ishlab chiqish va qo'llab-quvvatlash.`,
    serviceType: `AI avtomatizatsiya / biznes jarayonlarini avtomatlashtirish — ${city}`,
  }),
  ru: (city, region) => ({
    name: `AI-автоматизация — для ${city} | Tezcode`,
    description: `AI-автоматизация для бизнеса ${city} (${region}): автоматизация клиентского сервиса, отчётности, продаж и работы с документами с помощью искусственного интеллекта. Удалённая консультация, разработка и поддержка в ${city} и по всему Узбекистану.`,
    serviceType: `AI-автоматизация / автоматизация бизнес-процессов — ${city}`,
  }),
  en: (city, region) => ({
    name: `AI automation — for ${city} | Tezcode`,
    description: `AI automation for businesses in ${city} (${region}): automating customer service, reporting, sales and document workflows with artificial intelligence. Remote consultation, development and support in ${city} and across Uzbekistan.`,
    serviceType: `AI automation / business-process automation — ${city}`,
  }),
  ar: (city, region) => ({
    name: `أتمتة الذكاء الاصطناعي — لـ ${city} | Tezcode`,
    description: `أتمتة الذكاء الاصطناعي لشركات ${city} (${region}): أتمتة خدمة العملاء والتقارير والمبيعات وسير عمل المستندات بالذكاء الاصطناعي. استشارة وتطوير ودعم عن بُعد في ${city} وكل أوزبكستان.`,
    serviceType: `أتمتة الذكاء الاصطناعي / أتمتة العمليات — ${city}`,
  }),
  uk: (city, region) => ({
    name: `AI-автоматизація — для ${city} | Tezcode`,
    description: `AI-автоматизація для бізнесу ${city} (${region}): автоматизація клієнтського сервісу, звітності, продажів і роботи з документами за допомогою штучного інтелекту. Віддалена консультація, розробка та підтримка в ${city} і по всьому Узбекистану.`,
    serviceType: `AI-автоматизація / автоматизація бізнес-процесів — ${city}`,
  }),
};

function buildCopyForLocale(locale: ServiceLang, city: City): ServicePageCopy {
  // Deep clone the base copy so we never mutate the shared CONTENT object.
  const base: ServicePageCopy = structuredClone(CONTENT[locale]);
  const cityName = city.name[locale];
  const region = city.region[locale];
  // Unique AI-automation intro for this city (falls back to uz if a locale is missing).
  const intro = AI_INTRO[city.slug]?.[locale] ?? AI_INTRO[city.slug]?.uz ?? "";

  // Hero: city-aware title (title1 + accent composed naturally), trust, and prepend
  // the UNIQUE city blurb to the subtitle so the distinct text renders in the HTML.
  const heroTitle = HERO_TITLE[locale](cityName);
  base.hero.title1 = heroTitle.title1;
  base.hero.titleAccent = heroTitle.titleAccent;
  base.hero.title2 = "";
  base.hero.trust = CITY_TRUST[locale](cityName);
  base.hero.subtitle = intro ? `${intro} ${base.hero.subtitle}` : base.hero.subtitle;

  // Examples subtitle = the unique blurb too (second visible placement).
  if (intro) base.examples.subtitle = intro;

  // Prepend a city-specific FAQ item (also enriches the FAQ schema per city).
  base.faq.items = [CITY_FAQ[locale](cityName), ...base.faq.items];

  // City-aware Service schema text.
  base.service = SERVICE_TEXT[locale](cityName, region);

  return base;
}

export function buildCityContent(city: City): ServicePageContent {
  const locales: ServiceLang[] = ["uz", "ru", "en", "ar", "uk"];
  return locales.reduce((acc, locale) => {
    acc[locale] = buildCopyForLocale(locale, city);
    return acc;
  }, {} as ServicePageContent);
}
