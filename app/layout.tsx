import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { CurrencyProvider } from "@/components/CurrencyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ascension Clicker",
  description: "Clicker game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CurrencyProvider>
          {children}
          <Analytics />
        </CurrencyProvider>
      </body>
    </html>
  );
}
