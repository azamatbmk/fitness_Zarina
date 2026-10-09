import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, id, className, ...props }: InputProps) {
  const fieldId = id ?? props.name;

  return (
    <label className={styles.root} htmlFor={fieldId}>
      <span className={styles.label}>{label}</span>
      <input
        id={fieldId}
        className={[styles.field, error && styles.invalid, className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {error ? <span className={styles.error}>{error}</span> : null}
    </label>
  );
}
