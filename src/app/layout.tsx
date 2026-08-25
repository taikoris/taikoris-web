import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taikoris.com"),
  title: {
    default: "TAIKORIS — The Great Power, Enthroned",
    template: "%s · TAIKORIS",
  },
  description:
    "TAIKORIS is a technology company built on eight ideas — technology, AI, insight, knowledge, oversight, research, integrity, security.",
  openGraph: {
    title: "TAIKORIS — The Great Power, Enthroned",
    description:
      "A technology company built on eight ideas. Every letter of the name is one of them.",
    url: "https://taikoris.com",
    siteName: "TAIKORIS",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-night text-ink antialiased">{children}</body>
    </html>
  );
}
