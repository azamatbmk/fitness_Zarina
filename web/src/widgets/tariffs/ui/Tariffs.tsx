import { tariffs } from "@/entities/program";
import { Section } from "@/shared/ui/Section";
import styles from "./Tariffs.module.css";

export function Tariffs() {
  return (
    <Section id="tariffs" tone="muted">
      <div className={styles.head}>
        <h2 className={styles.title}>Тарифы первого потока</h2>
        <p className={styles.lead}>
          Два варианта. Во втором сразу видно, сколько проверок техники и
          ответов входит — без «безлимитной связи с тренером».
        </p>
      </div>

      <div className={styles.grid}>
        {tariffs.map((tariff) => (
          <article
            key={tariff.id}
            className={[
              styles.card,
              tariff.highlighted ? styles.highlighted : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <h3 className={styles.cardTitle}>{tariff.title}</h3>
            <p className={styles.price}>
              {tariff.price.toLocaleString("ru-RU")} ₽
            </p>
            <p className={styles.deposit}>
              Сейчас предоплата {tariff.deposit.toLocaleString("ru-RU")} ₽
            </p>
            <p className={styles.description}>{tariff.description}</p>
            <ul className={styles.features}>
              {tariff.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a
              className={styles.link}
              href={`/?tariff=${tariff.id}#preorder`}
            >
              Выбрать этот тариф
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
