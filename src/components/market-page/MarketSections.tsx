import { ArrowRight, Bot, Code, Smartphone, Workflow } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { EUROPE_PATH, REGION_PATH, localizedPath } from "@/lib/markets";
import { getRegionServicePath, getRegionUiCopy } from "@/content/regions";

const SERVICE_ICONS = [Code, Bot, Bot, Bot, Workflow, Workflow, Bot, Workflow] as const;

export function MarketServices({ locale }: { locale: Locale }) {
  const copy = getRegionUiCopy(locale);
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-700 mb-4">{copy.servicesTitle}</h2>
        <p className="text-[var(--tc-text-secondary)] max-w-3xl mb-10">{copy.servicesIntro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.services.map((service, index) => {
            const Icon = SERVICE_ICONS[index] ?? Smartphone;
            const href = localizedPath(locale, getRegionServicePath(index));
            return (
              <article key={href} className="tc-card p-6 flex flex-col gap-4">
                <Icon className="w-7 h-7 text-[var(--tc-blue-text)]" aria-hidden />
                <h3 className="text-xl font-600">{service.title}</h3>
                <p className="text-[var(--tc-text-secondary)] leading-relaxed flex-1">{service.body}</p>
                <a href={href} className="text-[var(--tc-blue-text)] font-600 hover:underline">{service.link}</a>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-[var(--tc-text-secondary)]">{copy.servicesOutro} <a href="#contact" className="text-[var(--tc-blue-text)] hover:underline">{copy.servicesCta}</a></p>
      </div>
    </section>
  );
}

export function MarketDelivery({ locale }: { locale: Locale }) {
  const copy = getRegionUiCopy(locale);
  return (
    <section className="tc-navy-section py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-700 mb-10">{copy.deliveryTitle}</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.deliverySteps.map(({ title, body }, index) => (
            <li key={title}>
              <span className="text-sm font-mono text-[var(--tc-blue-text)]">0{index + 1}</span>
              <h3 className="text-xl font-600 mt-3 mb-3">{title}</h3>
              <p className="text-[var(--tc-text-secondary)] leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function MarketRegions({ locale }: { locale: Locale }) {
  const copy = getRegionUiCopy(locale);
  return (
    <section className="py-16 px-6 bg-[var(--tc-surface-0)] border-y border-[var(--tc-border)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-700 mb-4">{copy.regionsTitle}</h2>
        <p className="max-w-3xl text-[var(--tc-text-secondary)] mb-8">{copy.regionsIntro}</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {copy.countries.map((country) => <span key={country} className="tc-chip">{country}</span>)}
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <a href={localizedPath(locale, REGION_PATH)} className="tc-card tc-card-hover p-7 flex flex-col gap-3">
            <h3 className="text-xl font-600">{copy.centralAsiaName}</h3>
            <p className="text-[var(--tc-text-secondary)]">{copy.centralAsiaDescription}</p>
            <span className="text-[var(--tc-blue-text)] flex items-center gap-2">{copy.regionLink} <ArrowRight className="w-4 h-4" aria-hidden /></span>
          </a>
          <a href={localizedPath(locale, EUROPE_PATH)} className="tc-card tc-card-hover p-7 flex flex-col gap-3">
            <h3 className="text-xl font-600">{copy.europeName}</h3>
            <p className="text-[var(--tc-text-secondary)]">{copy.europeDescription}</p>
            <span className="text-[var(--tc-blue-text)] flex items-center gap-2">{copy.regionLink} <ArrowRight className="w-4 h-4" aria-hidden /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
