import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClientBody } from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Devcation 2025 - Futuristic Tech Event",
  description: "A week-long technical festival organized by Google Developer Groups celebrating diversity in the TechForGood Domain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={cn("min-h-screen antialiased font-sans", inter.variable)}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
