import { Suspense } from "react";
import { PreorderForm } from "@/features/create-preorder";
import { Section } from "@/shared/ui/Section";
import styles from "./PreorderSection.module.css";

function PreorderFormFallback() {
  return <p className={styles.fallback}>Загрузка формы…</p>;
}

export function PreorderSection() {
  return (
    <Section id="preorder" tone="muted">
      <div className={styles.formBlock}>
        <div className={styles.formIntro}>
          <h2 className={styles.formTitle}>Предзаказ</h2>
          <p className={styles.formText}>
            Оставьте заявку — подтвердим участие и способ предоплаты. Полная
            оплата и доступ к материалам — перед стартом.
          </p>
        </div>
        <Suspense fallback={<PreorderFormFallback />}>
          <PreorderForm />
        </Suspense>
      </div>
    </Section>
  );
}
