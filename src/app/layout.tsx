import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const gamjaFlower = Inter({
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
      <body className={`${gamjaFlower.variable} antialiased`}>{children}</body>
    </html>
  );
}
