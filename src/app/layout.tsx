import React from "react";

import type { Metadata } from "next";
import { Gamja_Flower } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const gamjaFlower = Gamja_Flower({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gamja",
});

export const metadata: Metadata = {
  title: "Art Vault",
  description: "Stories of your art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${gamjaFlower.variable} min-h-screen antialiased`}>
        <div className="bg-apricot flex flex-col">
          <header className="bg-primary fixed top-0 left-0 w-full px-6 py-4 text-white shadow-md">
            <Link href="/" className="text-2xl font-bold">
              My Website
            </Link>
          </header>

          <main className="mt-16 flex flex-1 items-center justify-center p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
