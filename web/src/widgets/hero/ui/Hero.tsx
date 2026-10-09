import { program, tariffs } from "@/entities/program";
import { siteConfig } from "@/shared/config";
import { Container } from "@/shared/ui/Container";
import styles from "./Hero.module.css";

export function Hero() {
  const fromPrice = Math.min(...tariffs.map((item) => item.price));

  return (
    <section className={styles.root} id="top" aria-label="Главный экран">
      <div className={styles.media} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <Container className={styles.content}>
        <p className={styles.brand}>{siteConfig.brand}</p>
        <h1 className={styles.title}>{program.title}</h1>
        <p className={styles.subtitle}>{program.subtitle}</p>
        <div className={styles.meta}>
          <span>Старт: {siteConfig.startDate}</span>
          <span>от {fromPrice.toLocaleString("ru-RU")} ₽</span>
        </div>
        <div className={styles.actions}>
          <a className={styles.primary} href="#preorder">
            Записаться в первый поток
          </a>
          <a className={styles.secondary} href="#program">
            Смотреть программу
          </a>
        </div>
      </Container>
    </section>
  );
}
