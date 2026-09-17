export function RemoteDelivery({ locale }: { locale: string }) {
  if (locale !== "ru") return null;

  return (
    <section id="remote-delivery" className="scroll-mt-20 py-16 sm:py-20 px-6 border-y border-[var(--tc-border)] bg-[var(--tc-surface-1)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-700 tracking-tight mb-5">Команда в Ташкенте. Работаем с бизнесом Центральной Азии</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-[var(--tc-text-secondary)]">Обсуждаем проекты с компаниями Узбекистана, Казахстана, Кыргызстана, Таджикистана и Туркменистана. Разрабатываем сайты, приложения, CRM и ИИ-решения. Встречи, демонстрации и согласование этапов могут проходить онлайн.</p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            ["Понятный объём работ", "Сначала разбираем задачу и текущие инструменты. В предложении фиксируем результат, сроки, стоимость, валюту расчётов и этапы оплаты."],
            ["Язык и интеграции", "Согласуем язык общения и продукта. Местные платёжные сервисы и системы учёта проверяем по документации и доступам вашей компании до оценки подключения."],
            ["Приёмка и поддержка", "Показываем рабочие версии по этапам. Перед запуском проверяем согласованные сценарии, передаём инструкции и определяем условия сопровождения."],
          ].map(([title, description]) => (
            <div key={title}>
              <h3 className="text-xl font-600 mb-3">{title}</h3>
              <p className="leading-relaxed text-[var(--tc-text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
        <a href="/ru/aloqa" className="tc-btn-primary mt-10">Обсудить задачу</a>
      </div>
    </section>
  );
}
