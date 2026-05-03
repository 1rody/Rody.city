'use client';

import './landing_styles/footer.css';
import Image from 'next/image';
import { useRef } from 'react'; // Importar o useRef
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import instagram from '@/public/assets/icons8-instagram-logo-50.png'
import discord from '@/public/assets/icons8-discord-50.png'
import xtwitter from '@/public/assets/icons8-x-50.png'
import whiteTransition from '@/public/assets/transition-white.svg'

import RodyNameBanner from '@/public/assets/NameLeftRody.svg'
import '@/app/styles/animations/show.css';


// Registro do plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function LandingFooter() {
    const container = useRef<HTMLDivElement>(null); // Ref
    useGSAP(() => {
        // 1. anim de entrada (Fade-in)
        gsap.from('.footer-group > *', {
            y: 200,
            opacity: 0.2,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // 2. scroll Animation 
        gsap.to('.footer-group ', {
            scrollTrigger: {
                trigger: "#footer",
                start: "top 10%",      
                end: "bottom 10%",    
                scrub: true,          
            },            
            opacity: 1,                            
        });

    }, { scope: container });
    
    return (
        <>
            <Image className=''  src={whiteTransition}   width={3000} alt="transition-white" />
            <footer id='footer' ref={container} className="flex mt-50 p-8 flex-col items-center justify-center"> 
                <section id="contact-landing" className="flex w-full items-center justify-around">
                    <div>
                        <Image className='banner'  src={RodyNameBanner}   width={600}  height={600} alt="Rody name"  priority />
                    </div>
                    <div className='flex items-center  footer-group  justify-center gap-10'>
                        <div id='socials' className='foreground-secondary flex items-start gap-8 p-6 flex-col'>
                            <button><a className='flex items-center justify-center font-jetbrains gap-5 text-2xl' href=""> <Image className='banner' src={instagram} width={30}  height={30} alt="Social media logo"  /><p>Instagram</p></a></button>
                            <button><a className='flex items-center justify-center font-jetbrains gap-5 text-2xl' href=""> <Image className='banner' src={xtwitter} width={30}  height={30} alt="Social media logo"  /><p>X/ Twitter</p></a></button>
                            <button><a className='flex items-center justify-center font-jetbrains gap-5 text-2xl' href=""> <Image className='banner' src={discord} width={30}  height={30} alt="Social media logo"  /><p>Discord</p></a></button>
                        </div>
                        <div id='others' className='foreground-secondary flex gap-8 p-6 text-left items-end  flex-col'>
                            <button><a className='flex items-center justify-center font-jetbrains gap-5 text-2xl' href=""><p>Papers</p></a></button>
                            <button><a className='flex items-center justify-center font-jetbrains gap-5 text-2xl' href=""><p>Linkedin</p></a></button>
                            <button><a className='flex items-center justify-center font-jetbrains gap-5 text-2xl' href="/fractal_tree"><p>Linktree</p></a></button>
                        </div>
                    </div>
                </section>
                <span className='separator'>.</span>
                <section id="allrights-rody" className='w-full mt-10 flex items-center justify-center'>
                    <h2>Made with love by RODY | All Rights reserverd to Rody @2026</h2>
                </section>
            </footer>
        </>
    )
}