export const TARIFF_IDS = ["solo", "support"] as const;

export type TariffId = (typeof TARIFF_IDS)[number];

export function isTariffId(value: unknown): value is TariffId {
  return (
    typeof value === "string" &&
    (TARIFF_IDS as readonly string[]).includes(value)
  );
}
