'use client'

import Hero from "@/src/components/landing/Hero";
import Topbar from "@/src/components/layout/navigation/Topbar";
import History from "@/src/components/landing/History";
import About from "@/src/components/landing/About";
import Projects from "@/src/components/landing/Projects";
import Contact from "@/src/components/landing/GetInTouch";
import Footer from "@/src/components/layout/navigation/footer";

export default function Home() {
  return (
    <>
      <Topbar/>
      <main>
        <Hero />
        <History/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
