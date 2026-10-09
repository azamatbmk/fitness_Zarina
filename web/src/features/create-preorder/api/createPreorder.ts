import {
  isPreorderResponse,
  type PreorderPayload,
  type PreorderResponse,
} from "@/entities/preorder";
import { apiConfig } from "@/shared/config";

export async function createPreorder(
  payload: PreorderPayload,
): Promise<PreorderResponse> {
  const response = await fetch(`${apiConfig.baseUrl}/preorders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Не удалось отправить заявку");
  }

  const data: unknown = await response.json();

  if (!isPreorderResponse(data)) {
    throw new Error("Некорректный ответ сервера");
  }

  return data;
}
