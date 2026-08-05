import type { Metadata } from "next";
import { ViewTransition } from 'react'

import SmoothScroll from '@/src/components/layout/smoohScroll'

import { Geist, Geist_Mono, JetBrains_Mono, Chakra_Petch, Handjet, Climate_Crisis } from "next/font/google";
import localFont from "next/font/local";
import "@/src/styles/globals.css";

const departureMono = localFont({
  src: "./fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
  display: "swap",
});

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

const climateCrisis = Climate_Crisis({
  variable: "--font-ClimateCrisis",
  weight: ["400"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${chakraPetch.variable} ${HandjetFont.variable} ${climateCrisis.variable} ${departureMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ViewTransition update="page">
          <SmoothScroll>
                  {children}
          </SmoothScroll>
        </ViewTransition>
        <div className="stars-3d" aria-hidden="true">
          <div className="stars-3d__layer" />
          <div className="stars-3d__layer" />
          <div className="stars-3d__layer" />
          <div className="stars-3d__layer" />
        </div>
      </body>
    </html>
  );
}