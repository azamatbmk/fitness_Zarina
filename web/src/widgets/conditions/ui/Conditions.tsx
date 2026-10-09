import { siteConfig } from "@/shared/config";
import { Section } from "@/shared/ui/Section";
import styles from "./Conditions.module.css";

const items = [
  {
    title: "Срок доступа",
    text: "Материалы потока открываются на 4 недели со старта. Точные даты придут после подтверждения заявки.",
  },
  {
    title: "Поддержка",
    text: "В тарифе «С моей поддержкой» — 2 проверки техники и еженедельный общий разбор. Сроки ответа и формат видео фиксируем в оферте.",
  },
  {
    title: "Оплата",
    text: "Сейчас — предоплата. Остаток — перед стартом. Способ оплаты согласуем после заявки.",
  },
  {
    title: "Возврат",
    text: "Условия возврата нужно утвердить с юристом до приёма денег и опубликовать рядом с формой.",
  },
];

export function Conditions() {
  return (
    <Section tone="paper">
      <div className={styles.head}>
        <h2 className={styles.title}>Условия участия</h2>
        <p className={styles.lead}>
          Перед запуском оплаты замените черновик на согласованную оферту.
        </p>
      </div>
      <dl className={styles.list}>
        {items.map((item) => (
          <div key={item.title} className={styles.item}>
            <dt>{item.title}</dt>
            <dd>{item.text}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.contacts}>
        Вопросы:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
        {" · "}
        <a href={`tel:${siteConfig.contactPhone.replace(/[^\d+]/g, "")}`}>
          {siteConfig.contactPhone}
        </a>
      </p>
    </Section>
  );
}
