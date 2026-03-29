// ABOUTME: Root layout with Runbit Labs fonts (Pragmatica Cond, Pragmatica, Roboto Mono)
// ABOUTME: and site metadata matching runbitlabs.com

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const pragmaticaCond = localFont({
  src: "../fonts/PragmaticaCond-Book.woff2",
  variable: "--font-pragmatica-cond",
  display: "swap",
});

const pragmatica = localFont({
  src: "../fonts/Pragmatica-Book.woff2",
  variable: "--font-pragmatica",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Runbit Labs — The New Intelligence",
  description: "We are Runbit Labs. The AI Transformation Firm",
  openGraph: {
    title: "Runbit Labs — The New Intelligence",
    description: "We are Runbit Labs. The AI Transformation Firm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Runbit Labs — The New Intelligence",
    description: "We are Runbit Labs. The AI Transformation Firm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pragmaticaCond.variable} ${pragmatica.variable} ${robotoMono.variable} lenis`}
    >
      <body className="bg-runbit-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
