import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Providers} from "@/shared/components"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pasantitas",
  description: "Marketplace para pasantías",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <Providers>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
      </Providers>
    </html>
  );
}
