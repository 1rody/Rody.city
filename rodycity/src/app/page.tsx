//sections
import Hero from "@/src/components/pages/landing/hero"
import About from "@/src/components/pages/landing/about"
import Journey from "@/src/components/pages/landing/journey"
import Footer from "@/src/components/layout/footer";
import Navigation from "@/src/components/layout/navigation/topnav";

import '@/src/styles/components/ui/bg.css';

//misc

import Stars3d from "../components/layout/misc/bg";

export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />
      <Journey/>
      <About />
      <Footer />
      <Stars3d/>
    </>
  );
}
