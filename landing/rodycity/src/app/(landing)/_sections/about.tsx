'use client';

//css
import '@/styles/pages/landing/stripes.css';
import '@/styles/pages/landing/about.css';
import '@/styles/pages/landing/prices.css';

//react + gsap

import Image from 'next/image';
import { useRef } from 'react'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Globe } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() { 
    //consts de gsap e text
    const stripesRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null); 
    const priceRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Animação de entrada quando a seção aparece na tela
        gsap.from('.price-card > *', {
            y: -20,
            opacity: 0.8,
            duration: 2,
            stagger: 0.2,
            ease: "power3.out"
        });

        // 2. scroll Animation 
        gsap.to('.price-card', {
            scrollTrigger: {
                trigger: "#introduction",
                start: "top",      
                end: "bottom",    
                scrub: true,          
            },
            y: 100,                  
            opacity: 1,               
            scale: 1,               
        });
    }, { scope: priceRef });


    //scopo do gsap
    useGSAP(() => {
    gsap.from('.whoami-group > *', {
        scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.to('.whoami-group', {
        scrollTrigger: {
            trigger: '.whoami-group',
            start: "top 10%",   
            end: "bottom 10%",  
            scrub: 1,
        },
        y: -100,     
        opacity: 1,  
        scale: 0.9,
    });

    }, { scope: aboutRef });



    //escopo 2 do gsap
    useGSAP(() => {
        gsap.from('.globe-grow > *', {
            scrollTrigger: {
                trigger: stripesRef.current,
                start: "top 80%", 
                toggleActions: "play none none reverse", 
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // 2. Scroll Animation
        gsap.from('.globe-grow', {
            scrollTrigger: {
                trigger: '.globe-grow', 
                start: "top 40%",          
                end: "top 30%",            
                scrub: 1,                 
            },                      
            opacity: 0,                    
            scale: 2    ,                    
        });


        gsap.from('.section-hide > *', {
            scrollTrigger: {
                trigger: stripesRef.current,
                start: "top 80%", 
                toggleActions: "play none none reverse", 
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // 2. Scroll Animation
        gsap.from('.section-hide', {
            scrollTrigger: {
                trigger: '.globe-grow', 
                start: "top 40%",          
                end: "top 30%",            
                scrub: 1,                 
            },            
            y: 500,          
            opacity: 0,                    
            scale: 2    ,                    
        });
    }, { scope: stripesRef });

    return (
        <>
        <Image className='no-invert z-10 relative image flex items-center justify-center' width={3000} height={700} src='assets/transition3.svg' alt='transition img'/>
        <section ref={stripesRef} className="z-3 relative stripes-row overflow-hidden w-full gap-5 align-center justify-center font-inter text-8xl flex flex-col">

                <section className='z-2 items-center justify-center globe-grow globe flex'>
                    <Image className='select no-event select-globe  user-select-none' src='/assets/SelectionSecond.svg' width={500} height={400} alt="selection-image" />
                    <Globe size={480} className="grow-unshow-anim" />
                </section>
                <section className='overflow-hidden '>
                    {['A web of  A web of ideas A web of ideas A web of ideas A web of ideas A web of ideas A web of ideas '].map((phrases) => (
                    <div key={phrases} className='container-stripes bg-2'>
                            <div className="text-stripe-right flex gap-5">
                                {phrases}
                            </div>
                            <div className="text-stripe-left flex  gap-5">
                                {phrases}
                            </div>
                    </div>           
                    ))}
                </section>
        </section>
        <Image className=' z-10 absolute image-secondary flex items-center justify-center' width={5000} height={2000} src='/assets/transition-white.svg' alt='transition img'/>
        <section ref={aboutRef}  id='whoami' className="how-pricing flex flex-col secondary-bg items-center justify-center">
                    <div className='whoami-group flex items-center justify-center'>
                        <Image className='pt-40 image flex items-center justify-center' width={1100} height={800} src='/assets/whoami.svg' alt='whoamibanner'/>
                    </div>
                    <div id='about' className='about-rody flex-wrap flex flex-col gap-2 '>
                            <div className='flex flex-col w-full'>
                                <article className='text-xl text-left p-8 flex flex-col'>
                                    <p>
                                        Hi, I&apos;m  Rodolfo, but you can call me Rody. <br />
                                        I&apos;m a passionate <strong className='green'>front-end</strong> developer dedicated to building innovative interfaces using modern technologies
                                        like <strong className='blue'>Next.js</strong>, <strong className='red'>React</strong>, and <strong className='yellow'>EJS</strong>. Currently, <br /> <br />
                                        I&apos; pursuing a degree in Software Engineering at UCSal while expanding my skills through Origamid and Rocketseat.
                                    </p>
                                </article>
                                <article className='text-xl text-left p-8 flex flex-col gap-6'>
                                    <p>
                                        I created this space to experiment with new ideas and serve as my personal landing page.
                                        To me, nothing is cooler than mixing creativity with code to build incredible things.
                                    </p>
                                </article>
                                <section className='tech-stack p-5 flex flex-wrap  items-center justify-around gap-3 mt-4 w-full'>
                                    {['HTML', 'CSS', 'TAILWINDCSS', 'NEXTJS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'JAVA'].map((tech) => (
                                        <button key={tech} className="px-4 py-2 border jetbrains-font">
                                            {tech}
                                        </button>
                                    ))}
                                </section>
                            </div>
                    </div>
                    <div className="container-prices  flex-wrap items-center justify-center flex flex-warp gap-2">
                        <div className='flex flex-col whoami-group  gap-2 p-5 fade-on-anim'>
                            <article>
                            <h1 className='text-2xl'>Front-end Development</h1>
                                <p>
                                    Modern and responsive interfaces using: <br /> <br /> <strong> TailwindCSS, Javascript, Html, HTMX, CSS, Next.JS and React</strong>
                                    <br />
                                    <br /> <br />
                                    From layout to code, in multiple styles brutalism, modernism, minimalism, retro and more.
                                    <br /><br /><br />
                                    Starting at brl 180
                                </p>
                            </article>
                        </div>
                        <div className='flex flex-col whoami-group gap-5 p-5 fade-on-anim'>
                            <article>
                                <h1 className='text-2xl'>UI/UX and design</h1>
                                <p>
                                    Creating intuitive, responsive and efficient UI for your website, app, or brand. <br /> <br />blending great UX with accessibility best practices.
                                    <br /> <br />
                                    Using tools like: <strong> Figma, Canva, Affinity and other designs tools.</strong>
                                    <br /><br />

                                    <br /><br />
                                    Starting form BRL 80
                                </p>
                            </article>
                        </div>
                        <div className='flex flex-col whoami-group gap-5 p-5 fade-on-anim'>
                            <article>
                                <h1 className='text-2xl'>Other Tech services</h1>
                                <p>
                                    Consulting, prompt engineering and Java development. flexible support for your project's needs, minecraft builds/development, or whatever the stage.
                                    <br /><br />
                                    <strong>Prompt engineering, Java development(currentily studing java), Suport for your project needs </strong>
                                    <br /> <br /> <br />
                                    Starting form BRL 40
                                </p>
                            </article>
                        </div>
                    </div>
        </section>  
        <Image className=' image flex items-center justify-center' height={50} width={3000} src='assets/transition-black.svg' alt='transition img'/>

        </>
    )
}
