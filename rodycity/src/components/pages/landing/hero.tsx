"use client";
import Link from "next/link";

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';


import { motion, useScroll, useTransform} from 'framer-motion'

export default function Hero() {

    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date()); 
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <section id='introduction' className="hero no-select   flex flex-col w-full ">
            
            <section className="flex w-full items-center justify-center relative overflow-hidden lg:-mb-40 mb-50">
                    <motion.div  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }} className="absolute z-5 w-10/12  w-full flex-col relative flex">
                            <div className='flex w-full flex-wrap justify-between pb-5'>
                                <div className='mb-50 lg:mb-0 md:mb-0   p-5'>
                                    <motion.h1   initial={{ opacity: 0, y: 40 }}  animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}  className=" w-full  mt-20 z-1 dashed-stroke md:mt-18 lg:mt-15 no-interactions absolute text-(length:--super-large-text) font-black ">DEPLOY IDEAS</motion.h1>
                                    <div className="flex w-full absolute justify-between">
                                        <p className=" text-3xl lg:pl-5 z-4 mb-5 font-(family-name:--font-jetbrains-mono) no-interactions">RODY.CITY</p>
                                    </div>
                                </div>
                                <div className='flex flex-col z-10 no-interactions justify-center md:mt-100 lg:w-fit lg:mt-0  dashed-stroke-secondary relative lg:h-screen   lg:p-20 sm:p-20 md:p-20 p-5 mt-50 w-full items-center'>
                                    <Link className="text-5xl anim-wigle nav-pc  absolute text-black font-(family-name:--font-Handjet) lg:p-10 md:p-5  sm:p-3 p-3 lg:bottom-25 md:hidden sm:bottom-10 w-full bg-(--foreground) hover:text-red-500 transition-all duration-120 hover:line-through"  href='/'>{time ? time.toLocaleTimeString() : "--:--:--"}  GMT</Link>
                                    <img src="/assets/icons/RodyLogo.svg" className="dark:invert-0 invert-100" width={200} alt="RODY BRAND LOGO" />
                                    <p className="absolute md:hidden text-2xl left-5 bottom-15">This site is under deployment.</p>
                                </div>
                                    <p className="absolute text-3xl max-w-1/3 left-5  lg:top-100 md:top-80 nav-pc">Dive deep into the digital current, transform fluid concepts into pixels, and brace for impact.</p>
                            </div>
                    </motion.div>
            </section>
            <section>
                <div className=' relative flex flex-col items-center justify-center bottom-1 lg:bottom-0.5'>
                    <ChevronDown className='floating' size={24} />
                    <p className='scroll-down-keyframes' >Scroll to see more</p>
                </div>
            </section>
        </section>
    )
}
