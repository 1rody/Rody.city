
import Hero from "@/src/components/pages/landing/hero"
import About from "@/src/components/pages/landing/about"
import Featured from "@/src/components/pages/landing/featured"
import Footer from "@/src/components/layout/footer";
import Navigation from "@/src/components/layout/navbar"

import '@/src/styles/components/ui/bg.css';

export default function Page() {
  return (
    <>
        <Navigation />
        <div className="shell-external  h-screen w-full hidden fixed lg:block md:block no-select no-interact">
          <div className="shell-internal h-screen w-full fixed no-select no-interact">
          </div>
        </div>
      <Hero />
      <About />
      <Featured />
      <Footer />
    </>
  );
}
