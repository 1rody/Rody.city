import Hero from './hero';
import About from './about';
import Projects from './projects';
import Footer from './footer';


import './landing_styles/hero.css';
import '@/app/globals.css';

export default function Landing() {
    return (
        <>
            <Hero/>
            <About/>
            <Projects/>
            <Footer/>
        </>
    )
}