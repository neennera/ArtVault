import type { Metadata } from "next";
import { Inter, Gamja_Flower } from "next/font/google";
import "./globals.css";

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
      <body className={`${gamjaFlower.variable} antialiased`}>
        <div className="min-h-screen bg-apricot text-white flex flex-col text-white">
          <header className="w-full py-4 px-6 bg-[var(--color-primary)] shadow-md fixed top-0 left-0">
            <h1 className="text-2xl font-bold">My Website</h1>
          </header>

          <main className="flex flex-1 justify-center items-center p-6 mt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
