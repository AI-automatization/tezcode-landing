import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "404 — Sahifa topilmadi | Tezcode",
  robots: { index: false, follow: true },
};

type Lang = "uz" | "ru" | "en" | "ar" | "uk";

const COPY: Record<Lang, { title: string; home: string }> = {
  uz: { title: "Sahifa topilmadi", home: "Bosh sahifaga qaytish" },
  ru: { title: "Страница не найдена", home: "Вернуться на главную" },
  en: { title: "Page not found", home: "Back to home" },
  ar: { title: "الصفحة غير موجودة", home: "العودة إلى الرئيسية" },
  uk: { title: "Сторінку не знайдено", home: "Повернутися на головну" },
};

export default async function NotFound() {
  const locale = (await getLocale()) as Lang;
  const t = COPY[locale] ?? COPY.uz;

  return (
    <main
      data-theme="light"
      className="flex min-h-screen w-full flex-col items-center justify-center px-6 text-center"
    >
      <span
        className="text-8xl font-extrabold tracking-tight sm:text-9xl"
        style={{ color: "var(--tc-blue)" }}
      >
        404
      </span>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl text-[color:var(--tc-text-primary)]">
        {t.title}
      </h1>
      <Link href="/" className="tc-btn-primary mt-8 text-sm">
        {t.home}
      </Link>
    </main>
  );
}
