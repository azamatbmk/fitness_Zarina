import { siteConfig } from "@/shared/config";
import { Section } from "@/shared/ui/Section";
import styles from "./AboutTrainer.module.css";

export function AboutTrainer() {
  return (
    <Section tone="paper">
      <div className={styles.grid}>
        <div className={styles.photo} aria-hidden="true" />
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Тренер</p>
          <h2 className={styles.title}>{siteConfig.trainerName}</h2>
          <p className={styles.text}>
            Веду женские группы в своём зале и собираю онлайн-поток для тех, кто
            хочет продолжать заниматься дома по той же системе: понятная нагрузка,
            техника без хаоса и регулярность без перегруза.
          </p>
          <p className={styles.text}>
            В зале — живой формат. Дома — короткие комплексы на дни, когда не
            получается приехать, и отдельный план на поездки.
          </p>
        </div>
      </div>
    </Section>
  );
}
