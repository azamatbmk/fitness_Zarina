import { isValidPhone } from "@/shared/lib";
import type { PreorderFormErrors, PreorderFormState } from "./types";

export function validatePreorderForm(
  values: PreorderFormState,
): PreorderFormErrors {
  const errors: PreorderFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Укажите имя (минимум 2 символа)";
  }

  if (!values.phone.trim()) {
    errors.phone = "Укажите телефон";
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Проверьте номер телефона";
  }

  if (!values.email.trim()) {
    errors.email = "Укажите email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Некорректный email";
  }

  return errors;
}
