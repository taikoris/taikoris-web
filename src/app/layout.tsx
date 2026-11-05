import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taikoris.com"),
  title: {
    default: "TAIKORIS — Enterprise Cyber Defense & Sovereign Intelligence",
    template: "%s · TAIKORIS Enterprise",
  },
  description:
    "Enterprise-grade attack surface intelligence, autonomous vulnerability auditing, and sovereign neuro-symbolic systems built for modern corporate infrastructure.",
  openGraph: {
    title: "TAIKORIS — Enterprise Cyber Defense & Sovereign Intelligence",
    description:
      "Enterprise-grade attack surface intelligence and sovereign vulnerability auditing. Zero noise. 100% deterministic verification.",
    url: "https://taikoris.com",
    siteName: "TAIKORIS Enterprise",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${mono.variable}`}
    >
      <body className="bg-night text-ink antialiased selection:bg-primary/30 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
