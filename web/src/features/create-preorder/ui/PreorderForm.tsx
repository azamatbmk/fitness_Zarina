"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { tariffs } from "@/entities/program";
import { isTariffId, type TariffId } from "@/shared/model";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { createPreorder } from "../api/createPreorder";
import type { PreorderFormErrors, PreorderFormState } from "../model/types";
import { validatePreorderForm } from "../model/validate";
import styles from "./PreorderForm.module.css";

function createInitialState(tariffId: TariffId): PreorderFormState {
  return {
    name: "",
    phone: "",
    email: "",
    tariffId,
    comment: "",
  };
}

function resolveTariffId(value: string | null): TariffId {
  return isTariffId(value) ? value : "support";
}

type PreorderFormFieldsProps = {
  initialTariffId: TariffId;
};

function PreorderFormFields({ initialTariffId }: PreorderFormFieldsProps) {
  const [values, setValues] = useState<PreorderFormState>(() =>
    createInitialState(initialTariffId),
  );
  const [errors, setErrors] = useState<PreorderFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState<string | null>(null);

  const selectedTariff = tariffs.find((item) => item.id === values.tariffId);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validatePreorderForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("loading");
    setServerError(null);

    try {
      await createPreorder({
        name: values.name.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
        tariffId: values.tariffId,
        comment: values.comment.trim() || undefined,
      });
      setStatus("success");
      setValues(createInitialState(initialTariffId));
    } catch {
      setStatus("error");
      setServerError(
        "Не удалось отправить заявку. Проверьте, что API запущен, и попробуйте снова.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successTitle}>Заявка принята</p>
        <p className={styles.successText}>
          Свяжусь с вами, чтобы подтвердить тариф и предоплату. Старт потока — в
          дату на лендинге.
        </p>
        <Button type="button" variant="ghost" onClick={() => setStatus("idle")}>
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.tariffs} role="radiogroup" aria-label="Тариф">
        {tariffs.map((tariff) => {
          const selected = values.tariffId === tariff.id;

          return (
            <label
              key={tariff.id}
              className={[styles.tariff, selected && styles.tariffSelected]
                .filter(Boolean)
                .join(" ")}
            >
              <input
                type="radio"
                name="tariffId"
                value={tariff.id}
                checked={selected}
                onChange={() =>
                  setValues((prev) => ({ ...prev, tariffId: tariff.id }))
                }
              />
              <span className={styles.tariffTitle}>{tariff.title}</span>
              <span className={styles.tariffPrice}>
                {tariff.price.toLocaleString("ru-RU")} ₽
              </span>
              <span className={styles.tariffDeposit}>
                предоплата {tariff.deposit.toLocaleString("ru-RU")} ₽
              </span>
            </label>
          );
        })}
      </div>

      <Input
        label="Имя"
        name="name"
        autoComplete="name"
        value={values.name}
        error={errors.name}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, name: event.target.value }))
        }
      />
      <Input
        label="Телефон"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="+7"
        value={values.phone}
        error={errors.phone}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, phone: event.target.value }))
        }
      />
      <Input
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        value={values.email}
        error={errors.email}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
      />

      <label className={styles.comment}>
        <span>Комментарий</span>
        <textarea
          name="comment"
          rows={3}
          value={values.comment}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, comment: event.target.value }))
          }
          placeholder="График, опыт, вопросы"
        />
      </label>

      {selectedTariff ? (
        <p className={styles.hint}>
          Сейчас — предоплата {selectedTariff.deposit.toLocaleString("ru-RU")} ₽.
          Остаток — перед стартом потока.
        </p>
      ) : null}

      {serverError ? <p className={styles.serverError}>{serverError}</p> : null}

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Отправляю…" : "Записаться в первый поток"}
      </Button>
    </form>
  );
}

export function PreorderForm() {
  const searchParams = useSearchParams();
  const tariffFromUrl = resolveTariffId(searchParams.get("tariff"));

  return (
    <PreorderFormFields
      key={tariffFromUrl}
      initialTariffId={tariffFromUrl}
    />
  );
}
