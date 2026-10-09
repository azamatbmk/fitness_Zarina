import { reviews } from "@/entities/review";
import { Section } from "@/shared/ui/Section";
import styles from "./Reviews.module.css";

export function Reviews() {
  return (
    <Section tone="paper">
      <div className={styles.head}>
        <h2 className={styles.title}>Отзывы</h2>
        <p className={styles.lead}>
          Пока это отзывы о занятиях в зале. Не выдаём их за отзывы об
          онлайн-программе — честнее так на старте.
        </p>
      </div>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <li key={review.name} className={styles.item}>
            <p className={styles.text}>«{review.text}»</p>
            <p className={styles.name}>{review.name}</p>
            <p className={styles.note}>{review.note}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
