import type { TariffId } from "@/shared/model";

export type PreorderFormState = {
  name: string;
  phone: string;
  email: string;
  tariffId: TariffId;
  comment: string;
};

export type PreorderFormErrors = Partial<
  Record<keyof PreorderFormState, string>
>;
