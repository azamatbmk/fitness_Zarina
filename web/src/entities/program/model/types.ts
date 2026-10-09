import type { TariffId } from "@/shared/model";

export type ProgramTariff = {
  id: TariffId;
  title: string;
  price: number;
  deposit: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};
