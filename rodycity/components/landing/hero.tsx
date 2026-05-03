'use client';

import './landing_styles/hero.css';
import Image from 'next/image';
import { useRef } from 'react'; // Importar o useRef
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RodyBanner from '@/public/assets/rody2.png';
import '@/app/styles/animations/show.css';



// Registro do plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Introduction() {
    const container = useRef<HTMLDivElement>(null); // Ref

    useGSAP(() => {
        // 1. anim de entrada (Fade-in)
        gsap.from('.title-group > *', {
            y: 900,
            opacity: 0.2,
            duration: 1,
            stagger: 0.2,
            ease: "power3.in"
        });

        // 2. scroll Animation 
        gsap.to('.title-group', {
            scrollTrigger: {
                trigger: "#introduction",
                start: "top 1%",      
                end: "bottom",    
                scrub: true,          
            },
            scale: 0.8,
            y: -5800,                  
            opacity: 0,                            
        });

    }, { scope: container });

    return (
        <section ref={container} id="introduction" className="relative  h-screen items-center flex justify-center w-full overflow-hidden">
            <Image 
                className='banner-top title-group' 
                src={RodyBanner}  
                width={1100} 
                height={1100} 
                alt="JustRody transition" 
                priority 
            />
            
            <div className='title-group flex flex-col absolute z-10 text-center'>
                <h1 className="text-center erika-font title z-5 no-event user-select-none">HELLO WORLD</h1>
                <div className='mt-10 z-50 flex items-center font-jetbrains justify-center gap-5'>
                    <button  className="hover:line-through"><a href="https://nextfur.net/">NextFur</a></button>
                    <button className="hover:line-through"><a href="/fractal_utils">COOL TOOLS FOR YOUR DAY</a></button>
                    <button className="hover:line-through"><a href="#whoami">WHOIS RODY</a></button>
                </div>
            </div>
        </section>
    );
}