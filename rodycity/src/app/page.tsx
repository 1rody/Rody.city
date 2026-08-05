//sections
import Hero from "@/src/components/pages/landing/hero"
import About from "@/src/components/pages/landing/about"
import Featured from "@/src/components/pages/landing/featured"
import Footer from "@/src/components/layout/footer";
import Navigation from "@/src/components/layout/navigation/topnav";

import '@/src/styles/components/ui/bg.css';

//misc
import Cookies from "../components/layout/cookies";
import Shell from "../components/layout/misc/shell";
import Stars3d from "../components/layout/misc/bg";

export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Featured />
      <Footer />
      <Cookies />
      <Shell/>
      <Stars3d/>
    </>
  );
}
