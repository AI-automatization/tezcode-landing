import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";
import { FrontixPartnerClient } from "./FrontixPartnerClient";

// Per-locale SERP copy, translated from each locale's own body copy (same
// facts). Titles omit a trailing "Tezcode": the layout template appends it.
const META: Record<
  string,
  { title: string; description: string; ogTitle?: string; ogDescription?: string }
> = {
  uz: {
    title: "FRONTIX — tezcode veb va raqamli mahsulotlar hamkori",
    description:
      "FRONTIX — Toshkentdagi IT kompaniya: sayt, QR menyu, Telegram bot va onlayn buyurtma tizimlari. Tezcode bilan hamkorlikda mijoz veb-mahsulot va AI-avtomatlashtirishni bitta joydan oladi.",
  },
  ru: {
    title: "FRONTIX — партнёр по сайтам и цифровым продуктам, Ташкент",
    description:
      "FRONTIX — IT-компания в Ташкенте: сайты, QR-меню, Telegram-боты и онлайн-заказы. Вместе с Tezcode — веб-продукт и ИИ-автоматизация от одного партнёрства.",
  },
  en: {
    title: "FRONTIX — Web and Digital Product Partner",
    description:
      "FRONTIX, a Tashkent IT company, builds websites, QR menus, Telegram bots and online ordering. With Tezcode, clients get web and AI automation from one partner.",
  },
  ar: {
    title: "FRONTIX — شريك منتجات الويب والمنتجات الرقمية",
    description:
      "FRONTIX شركة تقنية في طشقند تبني المواقع وقوائم QR وبوتات تيليغرام وأنظمة الطلب. مع Tezcode يحصل العميل على الويب والأتمتة من شراكة واحدة.",
  },
  uk: {
    title: "FRONTIX — партнер з вебу та цифрових продуктів",
    description:
      "FRONTIX — IT-компанія в Ташкенті: сайти, QR-меню, Telegram-боти та онлайн-замовлення. Із Tezcode — вебпродукт і AI-автоматизація від одного партнера.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const meta = META[locale] ?? META.uz;
  return buildPageMetadata({
    locale,
    path: "/partnery/frontix",
    title: meta.title,
    description: meta.description,
    keywords: [
      "FRONTIX",
      "tezcode hamkor",
      "sayt yaratish Toshkent",
      "QR menyu",
      "Telegram bot",
      "tezcode partner",
    ],
  });
}

export default function FrontixPartnerPage() {
  return (
    <div data-theme="light" className="bg-[var(--tc-ink)] text-[var(--tc-text-primary)]">
      <Navbar />
      <FrontixPartnerClient />
      <Footer />
    </div>
  );
}
