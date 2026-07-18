
import Navigation from "@/src/components/layout/navbar"
import Hero from "@/src/components/pages/landing/hero"
import About from "@/src/components/pages/landing/about"
import Featured from "@/src/components/pages/landing/featured"
import Footer from "@/src/components/layout/footer";

import '@/src/styles/components/ui/bg.css';

export default function Page() {
  return (
    <>
        <Navigation/>
        <Hero/>
        <About/>
        <Featured/>
        <Footer/>
    </>
  );
}
