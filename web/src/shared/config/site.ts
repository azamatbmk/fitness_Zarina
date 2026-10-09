export const siteConfig = {
  brand: "FORMA",
  trainerName: "[Имя тренера]",
  tagline: "Тренируйся со мной — теперь и дома",
  startDate: "12 мая 2026",
  contactEmail: "hello@forma.studio",
  contactPhone: "+7 (999) 000-00-00",
} as const;

export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001",
} as const;
