import type { Metadata } from "next";
import { Fraunces, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  weight: "variable",
  style: ["normal", "italic"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Yogesh Rawat — Creative Designer | UI/UX & Brand Design",
  description:
    "Yogesh Rawat is a Creative Designer specializing in UI/UX and Brand Design — crafting digital products, brand identities and visual systems.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='16' fill='%23f5f4f0'/%3E%3Crect x='4' y='4' width='92' height='92' rx='13' fill='none' stroke='%2316181a' stroke-width='4'/%3E%3Ctext x='50' y='68' font-size='54' font-family='Georgia,serif' fill='%2316181a' text-anchor='middle'%3EY%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
