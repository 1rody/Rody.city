import type { Metadata } from "next";
import { Geist, Erica_One, JetBrains_Mono, Anton_SC } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/globals.css";
import "@/styles/themes.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const antonSc = Anton_SC({
  variable: "--font-anton-sc",
  subsets: ["latin"],
  weight: "400",
});

const erikaOne = Erica_One({
  variable: "--font-erika-one",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const geistPixelSquare = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-pixel/GeistPixel-Square.woff2",
  variable: "--font-geist-pixel-square",
  weight: "500",
});
const geistPixelGrid = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-pixel/GeistPixel-Grid.woff2",
  variable: "--font-geist-pixel-grid",
  weight: "500",
});
const geistPixelCircle = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-pixel/GeistPixel-Circle.woff2",
  variable: "--font-geist-pixel-circle",
  weight: "500",
});
const geistPixelTriangle = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-pixel/GeistPixel-Triangle.woff2",
  variable: "--font-geist-pixel-triangle",
  weight: "500",
});
const geistPixelLine = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-pixel/GeistPixel-Line.woff2",
  variable: "--font-geist-pixel-line",
  weight: "500",
});

export const metadata: Metadata = {
  title: "A creative LanDiNG",
  description: "Created by rody",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${erikaOne.variable}
        ${jetbrainsMono.variable}
        ${antonSc.variable}
        ${geistPixelSquare.variable}
        ${geistPixelGrid.variable}
        ${geistPixelCircle.variable}
        ${geistPixelTriangle.variable}
        ${geistPixelLine.variable}
        h-full antialiased
      `}
    >

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}