import { Section } from "@/shared/ui/Section";
import styles from "./SampleWorkout.module.css";

export function SampleWorkout() {
  return (
    <Section tone="ink">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <h2 className={styles.title}>Пример занятия</h2>
          <p className={styles.text}>
            Короткий фрагмент реальной тренировки — чтобы оценить подачу, темп и
            как объясняется техника. Замените на своё видео перед запуском.
          </p>
        </div>
        <div className={styles.player}>
          <div className={styles.frame} role="img" aria-label="Плейсхолдер видео">
            <span>Вставьте видео тренировки</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
