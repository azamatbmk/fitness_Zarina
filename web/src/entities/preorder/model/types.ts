import type { TariffId } from "@/shared/model";

export type PreorderPayload = {
  name: string;
  phone: string;
  email: string;
  tariffId: TariffId;
  comment?: string;
};

export type PreorderResponse = {
  id: string;
  createdAt: string;
};

export function isPreorderResponse(value: unknown): value is PreorderResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  if (!("id" in value) || !("createdAt" in value)) {
    return false;
  }

  return (
    typeof value.id === "string" &&
    value.id.length > 0 &&
    typeof value.createdAt === "string" &&
    value.createdAt.length > 0
  );
}
