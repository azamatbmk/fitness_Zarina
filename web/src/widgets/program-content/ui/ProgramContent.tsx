import { program } from "@/entities/program";
import { Section } from "@/shared/ui/Section";
import styles from "./ProgramContent.module.css";

export function ProgramContent() {
  return (
    <Section id="program" tone="muted">
      <div className={styles.head}>
        <h2 className={styles.title}>Что внутри программы</h2>
        <p className={styles.lead}>
          Один понятный поток на 4 недели — без каталога из десятков курсов.
        </p>
      </div>

      <ul className={styles.facts}>
        <li>
          <span>Длительность</span>
          <strong>{program.durationWeeks} недели</strong>
        </li>
        <li>
          <span>Нагрузка</span>
          <strong>{program.sessionsPerWeek} занятия в неделю</strong>
        </li>
        <li>
          <span>Уровень</span>
          <strong>{program.level}</strong>
        </li>
        <li>
          <span>Инвентарь</span>
          <strong>{program.equipment}</strong>
        </li>
      </ul>

      <ul className={styles.includes}>
        {program.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className={styles.note}>{program.delivery}</p>
    </Section>
  );
}
