import { siteConfig } from "@/shared/config";
import { Container } from "@/shared/ui/Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root}>
      <Container className={styles.inner}>
        <p className={styles.brand}>{siteConfig.brand}</p>
        <p className={styles.text}>
          Первый поток онлайн-программы. Не приложение — продукт с датой старта.
        </p>
        <p className={styles.copy}>
          © 2026 {siteConfig.brand}
        </p>
      </Container>
    </footer>
  );
}
