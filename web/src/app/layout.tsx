import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { siteConfig } from "@/shared/config";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-display-face",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body-face",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.brand} — ${siteConfig.tagline}`,
  description:
    "Четырёхнедельная онлайн-программа тренировок. Предзаказ первого потока.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
