import { siteConfig } from "@/shared/config";
import { Container } from "@/shared/ui/Container";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.root}>
      <Container className={styles.inner}>
        <a className={styles.brand} href="#top">
          {siteConfig.brand}
        </a>
        <nav className={styles.nav} aria-label="Навигация">
          <a href="#program">Программа</a>
          <a href="#tariffs">Тарифы</a>
          <a href="#preorder">Предзаказ</a>
        </nav>
        <a className={styles.cta} href="#preorder">
          Записаться
        </a>
      </Container>
    </header>
  );
}
