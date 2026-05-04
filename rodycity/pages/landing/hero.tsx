'use client';


import './landing_styles/hero.css';
import Image from 'next/image';
import { useRef } from 'react'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RodyBanner from '@/public/assets/rody2.png';

import sun from '@/public/assets/sun.svg';
import cloud from '@/public/assets/cloud.svg';
import cataVento from '@/public/assets/catavento.svg';
import semi from '@/public/assets/circulo.svg';
import strokeLine from '@/public/assets/trace.svg';

import '@/app/styles/animations/show.css';
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
            y: 900,
            opacity: 0.2,
            duration: 1,
            stagger: 0.2,
            ease: "power3.in"
        });

        // 2. scroll  
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
                className='banner-top  user-select-none title-group' 
                src={RodyBanner}  
                width={1100} 
                height={1100} 
                alt="JustRody transition" 
                priority 
            />

            <div className='title-group flex flex-col absolute w-full z-10 text-center'>
            <div className=' z-10 h-70 user-select-none position-symbols'>
                <Image className='sun' src={sun} width={220} height={220} alt="sun" />
                <Image className='cloud' src={cloud}  width={200} height={200}  alt="cloud" />
                <Image className='cataVento' src={cataVento}  width={130} height={130}  alt="cata vento" />
                <Image className='semi' src={semi} width={200} height={200} alt="semi circulo" />
                <Image className='strokeLine' src={strokeLine} width={220} height={220} alt="stroke line" />
            </div>
                <h1 className="text-center erika-font title z-5 no-event user-select-none">Web Of IdEaS</h1>
                <div className='mt-10 flex-wrap z-50 flex items-center font-jetbrains justify-center gap-5'>
                    <button  className="primary-button"><Link href="https://nextfur.net/">NextFur</Link></button>
                    <button className="primary-button"><Link href="/fractal_utils">COOL TOOLS FOR YOU</Link></button>
                    <button className="primary-button"><Link href="#whoami">WHOIS RODY</Link></button>
                </div>
            </div>
        </section>
    );
}