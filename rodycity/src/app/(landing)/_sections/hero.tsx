'use client';


import '@/styles/pages/landing/hero.css';

import Image from 'next/image';
import { useRef } from 'react'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import Link from 'next/dist/client/link';


// reg do plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Introduction() {
    const container = useRef<HTMLDivElement>(null); // Ref

    useGSAP(() => {
        // 1. anim de entrada (Fade-in)
        gsap.from('.title-group > *', {
            y: -500,
            opacity: 0,
            duration: .2,
            stagger: 0.2,
            ease: "power3.in",
        });
        gsap.to('.title-group > *', {
            y: -0,
            opacity: 1,
            duration: .2,
            stagger: 0.2,
            ease: "power3.in",
        });
        // 2. scroll  
        gsap.to('.title-group', {
            scrollTrigger: {
                trigger: ".introduction",
                start: "top 1%",      
                end: "bottom",    
                scrub: true,        
            },
            y: 3800,                  
            opacity: 0,                            
        });

    }, { scope: container });

    return (
        <>

        <section ref={container} id="introduction" className="introduction relative  h-screen items-center flex justify-center w-full overflow-hidden">
            <div className='h-screen w-full items-center justify-center flex'><div className='dashed-y h-screen absolute'></div></div>

            <div className='title-group flex flex-col mt-140 md:mt-30 lg:mt-30 sm:mt-30 items-center absolute  w-full z-10 '>
                <p className='font-jetbrains user-select-none mb-10 md:mb-0 p-8 text-center no-event'>Walking throw <span className='no-invert'>void</span>, creating an universe <span className='no-invert'>pixel</span> by <span className='no-invert'>pixel</span> in a</p>
                <div className='dashed-x p-9 w-full text-center justify-center flex flex-col items-center'>
                    <Image className='select no-event   user-select-none' src='assets/Selection.svg' width={1450} height={1200} alt="selection-image" />
                    <h1 className="text-center anton-font title z-5 no-event user-select-none">WEB OF IDEAS</h1>
                </div>
                 <div className=' mt-10 mb-30 w-full p-5 z-50 flex flex-wrap items-center font-jetbrains justify-center gap-5'>
                    <button  className="primary-button w-full md:w-fit hover:line-through"><Link href="https://nextfur.net/">NextFur</Link></button>
                    <button className="primary-button w-full md:w-fit hover:line-through"><Link href="/utils">COOL TOOLS FOR YOU</Link></button>                
                </div>
            </div>
        </section>
        </>
    );
}