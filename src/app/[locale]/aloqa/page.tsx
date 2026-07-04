import type { Metadata } from "next";
import { Send,  Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { CookieConsent } from "@/components/CookieConsent";
import { buildPageMetadata } from "@/lib/seo";

const PATH = "/aloqa";

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

type Copy = {
  chip: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  fastest: string;
  phone: string;
  telegram: string;
  email: string;
  address: string;
  addressValue: string;
};

const COPY: Record<Lang, Copy> = {
  uz: {
    chip: "Aloqa",
    title: "Biz bilan",
    titleAccent: "bog'laning",
    subtitle:
      "Savolingiz bormi? Telegram, telefon yoki email orqali yozing — ish kunlari bir necha soat ichida javob beramiz.",
    fastest: "Eng tez javob",
    phone: "Telefon",
    telegram: "Telegram",
    email: "Email",
    address: "Manzil",
    addressValue: "Toshkent, Amir Temur shoh ko'chasi, 10",
  },
  ru: {
    chip: "Контакты",
    title: "Свяжитесь",
    titleAccent: "с нами",
    subtitle:
      "Есть вопрос? Напишите в Telegram, позвоните или на email — в рабочие дни отвечаем в течение нескольких часов.",
    fastest: "Самый быстрый ответ",
    phone: "Телефон",
    telegram: "Telegram",
    email: "Email",
    address: "Адрес",
    addressValue: "Toshkent, Amir Temur shoh ko'chasi, 10",
  },
  en: {
    chip: "Contact",
    title: "Get in",
    titleAccent: "touch",
    subtitle:
      "Have a question? Reach us on Telegram, by phone or email — we reply within a few hours on business days.",
    fastest: "Fastest reply",
    phone: "Phone",
    telegram: "Telegram",
    email: "Email",
    address: "Address",
    addressValue: "Toshkent, Amir Temur shoh ko'chasi, 10",
  },
  ar: {
    chip: "اتصال",
    title: "تواصل",
    titleAccent: "معنا",
    subtitle:
      "لديك سؤال؟ راسلنا عبر تيليجرام أو الهاتف أو البريد الإلكتروني — نرد خلال ساعات قليلة في أيام العمل.",
    fastest: "أسرع رد",
    phone: "الهاتف",
    telegram: "تيليجرام",
    email: "البريد الإلكتروني",
    address: "العنوان",
    addressValue: "Toshkent, Amir Temur shoh ko'chasi, 10",
  },
  uk: {
    chip: "Контакти",
    title: "Зв'яжіться",
    titleAccent: "з нами",
    subtitle:
      "Є питання? Напишіть у Telegram, зателефонуйте або на email — у робочі дні відповідаємо протягом кількох годин.",
    fastest: "Найшвидша відповідь",
    phone: "Телефон",
    telegram: "Telegram",
    email: "Email",
    address: "Адреса",
    addressValue: "Toshkent, Amir Temur shoh ko'chasi, 10",
  },
};

const META: Record<
  Lang,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  uz: {
    title: "Aloqa — Tezcode | Telegram, Telefon, Email",
    description:
      "Tezcode bilan bog'laning: Telegram (@tezcode_managament), telefon +998 91 777 66 09, email tezcode@tezcode.dev. Toshkent, O'zbekiston. Bepul konsultatsiya uchun yozing.",
    ogTitle: "Aloqa — Tezcode",
    ogDescription:
      "Telegram, telefon yoki email orqali bog'laning — bepul konsultatsiya. Toshkent, O'zbekiston.",
  },
  ru: {
    title: "Контакты — Tezcode | Telegram, Телефон, Email",
    description:
      "Свяжитесь с Tezcode: Telegram (@tezcode_managament), telefon +998 91 777 66 09, email tezcode@tezcode.dev. Ташкент, Узбекистан. Напишите для бесплатной консультации.",
    ogTitle: "Контакты — Tezcode",
    ogDescription:
      "Свяжитесь через Telegram, телефон или email — бесплатная консультация. Ташкент, Узбекистан.",
  },
  en: {
    title: "Contact — Tezcode | Telegram, Phone, Email",
    description:
      "Contact Tezcode: Telegram (@tezcode_managament), telefon +998 91 777 66 09, email tezcode@tezcode.dev. Tashkent, Uzbekistan. Write us for a free consultation.",
    ogTitle: "Contact — Tezcode",
    ogDescription:
      "Reach us on Telegram, by phone or email — free consultation. Tashkent, Uzbekistan.",
  },
  ar: {
    title: "اتصال — Tezcode | تيليجرام، واتساب، بريد إلكتروني",
    description:
      "تواصل مع Tezcode: تيليجرام (@tezcode_managament)، الهاتف +998 91 777 66 09، البريد tezcode@tezcode.dev. طشقند، أوزبكستان. راسلنا للحصول على استشارة مجانية.",
    ogTitle: "اتصال — Tezcode",
    ogDescription:
      "تواصل عبر تيليجرام أو واتساب أو البريد الإلكتروني — استشارة مجانية. طشقند، أوزبكستان.",
  },
  uk: {
    title: "Контакти — Tezcode | Telegram, Телефон, Email",
    description:
      "Зв'яжіться з Tezcode: Telegram (@tezcode_managament), telefon +998 91 777 66 09, email tezcode@tezcode.dev. Ташкент, Узбекистан. Напишіть для безкоштовної консультації.",
    ogTitle: "Контакти — Tezcode",
    ogDescription:
      "Зв'яжіться через Telegram, телефоном або email — безкоштовна консультація. Ташкент, Узбекистан.",
  },
};

function toLang(locale: string): Lang {
  return (["uz", "ru", "en", "ar", "uk"].includes(locale) ? locale : "uz") as Lang;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = META[toLang(locale)];
  return buildPageMetadata({
    path: PATH,
    title: m.title,
    description: m.description,
    keywords: [
      "Tezcode aloqa",
      "Tezcode kontakt",
      "Tezcode Telegram",
      "Tezcode telefon",
      "IT kompaniya Toshkent aloqa",
      "контакты Tezcode",
      "contact Tezcode",
    ],
    ogTitle: m.ogTitle,
    ogDescription: m.ogDescription,
  });
}

export default async function AloqaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = COPY[toLang(locale)];

  const channels = [
    {
      icon: Phone,
      name: t.phone,
      value: "+998 91 777 66 09",
      href: "tel:+998917776609",
      external: false,
    },
    {
      icon: Send,
      name: t.telegram,
      value: "@tezcode_managament",
      href: "https://t.me/tezcode_managament",
      external: true,
      hint: t.fastest,
    },
    {
      icon: Mail,
      name: t.email,
      value: "tezcode@tezcode.dev",
      href: "mailto:tezcode@tezcode.dev",
      external: false,
    },
    {
      icon: MapPin,
      name: t.address,
      value: t.addressValue,
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      value: "@tezcode_dev",
      href: "https://www.instagram.com/tezcode_dev/",
      external: true,
    },
    {
      icon: LinkedinIcon,
      name: "LinkedIn",
      value: "tezcode-dev",
      href: "https://www.linkedin.com/company/tezcode-dev/",
      external: true,
    },
  ];

  return (
    <main
      data-theme="light"
      className="relative min-h-screen bg-[var(--tc-ink)] text-[var(--tc-text-primary)] overflow-hidden"
    >
      <Navbar />

      {/* Compact header */}
      <section className="relative pt-32 pb-10 px-6 text-center">
        <div aria-hidden className="tc-grid-bg absolute inset-0" />
        <div className="relative max-w-3xl mx-auto">
          <div className="mb-5">
            <span className="tc-chip">{t.chip}</span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-700 mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.title}{" "}
            <span className="text-[var(--tc-blue-text)]">{t.titleAccent}</span>
          </h1>
          <p className="text-[var(--tc-text-secondary)] text-lg md:text-xl">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="relative px-6 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((c) => {
            const Icon = c.icon;
            const body = (
              <>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-[var(--tc-radius-md)] bg-[var(--tc-blue-dim)] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[var(--tc-blue-text)]" />
                  </div>
                  {c.hint ? (
                    <span className="px-2.5 py-1 rounded-full bg-[var(--tc-blue-dim)] text-[var(--tc-blue-text)] text-[11px] font-600 uppercase tracking-[0.1em]">
                      {c.hint}
                    </span>
                  ) : null}
                </div>
                <h2
                  className="text-lg font-700 text-[var(--tc-text-primary)] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.name}
                </h2>
                <p className="text-sm font-600 text-[var(--tc-blue-text)] break-all">
                  {c.value}
                </p>
              </>
            );

            return c.href ? (
              <a
                key={c.name}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="tc-card tc-card-hover block h-full p-6"
              >
                {body}
              </a>
            ) : (
              <div key={c.name} className="tc-card h-full p-6">
                {body}
              </div>
            );
          })}
        </div>
      </section>

      {/* Location — Tezcode on Yandex Maps (org placemark shows the name) */}
      <section className="relative px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="tc-card overflow-hidden p-0">
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.286546%2C41.366729&z=17&mode=search&oid=199166110107&ol=biz"
              title="Tezcode — Yandex Maps"
              width="100%"
              height="420"
              loading="lazy"
              allowFullScreen
              className="block w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* Contact form (renders its own #contact section) */}
      <ContactForm hideHeader />

      <Footer />

      <FloatingContact />

      <CookieConsent />
    </main>
  );
}
