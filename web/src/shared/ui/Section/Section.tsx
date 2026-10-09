import type { ReactNode } from "react";
import { Container } from "@/shared/ui/Container";
import styles from "./Section.module.css";

type SectionTone = "paper" | "ink" | "muted";

type SectionProps = {
  id?: string;
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  tone = "paper",
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[styles.root, styles[tone], className]
        .filter(Boolean)
        .join(" ")}
    >
      <Container>{children}</Container>
    </section>
  );
}
