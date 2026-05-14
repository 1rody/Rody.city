import Hero from '@/app/(landing)/_sections/hero';
import About from '@/app/(landing)/_sections/about';
import Projects from '@/app/(landing)/_sections/projects';

import '@/styles/globals.css';
import '@/styles/animations/show.css';
import '@/styles/utility/selections.css';                    
import '@/styles/buttons/buttons.css';                


export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
    </>
  );
}
