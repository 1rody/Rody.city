import type { Metadata } from "next";
import { ViewTransition } from 'react'

import SmoothScroll from '@/src/components/layout/smoohScroll'

import { Geist, Geist_Mono, Badeen_Display, JetBrains_Mono, Chakra_Petch, Handjet } from "next/font/google";
import "@/src/styles/globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-Chakra", 
  weight: ["700"], 
  subsets: ["latin"],
});
const HandjetFont = Handjet({
  variable: "--font-Handjet", 
  weight: ["700"], 
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const badeenDisplay = Badeen_Display({
  variable: "--font-badeen-display",
  weight: "400",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RODY | DEPLOY YOUR IDEAS",
  description: "Developed by Rodolfo falcao, with figma, nextjs, tailwindcss and other technologies...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${badeenDisplay.variable} ${jetbrainsMono.variable} ${chakraPetch.variable} ${HandjetFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ViewTransition update="page">
          <SmoothScroll>
                  {children}
          </SmoothScroll>
        </ViewTransition>
      </body>
    </html>
  );
}