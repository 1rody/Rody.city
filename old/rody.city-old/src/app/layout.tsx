import type { Metadata } from "next";
import { ViewTransition } from 'react'

import SmoothScroll from '@/src/components/layout/smoothScroll'

import { JetBrains_Mono, Chakra_Petch, Handjet, Climate_Crisis, Archivo_Black, } from "next/font/google";
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

const ArchivoBlack = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rody.city"),
  title: "Rody — Front-end & UI",
  description: "Portfolio and papers by Rodolfo Falcão: front-end work, UI notes and experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${chakraPetch.variable} ${HandjetFont.variable} ${climateCrisis.variable} ${departureMono.variable}  ${ArchivoBlack.variable} h-full antialiased`}>
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