'use client'

import Hero from "@/src/components/landing/hero";
import Topbar from "@/src/components/layout/navigation/Topbar";
import History from "@/src/components/landing/History";

export default function Home() {
  return (
    <>
      <Topbar/>
      <main>
        <Hero />
        <History/>
      </main>
    </>
  );
}
