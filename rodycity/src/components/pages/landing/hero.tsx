"use client";
import Image from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion'


export default function Hero() {

    return (
        <section id="introduction" className="hero z-5 no-select h-screen  w-full flex flex-col w-full overflow-x-hidden">
            <div className="hover-show-group w-full text-(--foreground) resp-scale flex-nowrap text-center relative  overflow-x-hidden flex items-center justify-center absolute w-full h-screen">
                <h1 className='nav-pc mb-46 lg:text-7xl md:text-5xl '>ENGINEER </h1>
                <h2 className='nav-pc mb-0 absolute -translate-x-60 text-sm hover:bg-red-500 duration-200 active:scale-95'>CREATE </h2>
                <h2 className='nav-pc mb-0 absolute translate-x-25 text-sm hover:bg-red-500 active:scale-95'>PUSH </h2>
                <h2 className='nav-pc mt-0 absolute -translate-x-90 text-sm hover:bg-red-500 duration-200 active:scale-95'>PLAN </h2>
                <h2 className='nav-pc absolute translate-x-60 text-sm hover:bg-red-500 duration-200 active:scale-95'>USE </h2>
                <Image src="/assets/icons/RodyLogo.svg" className="hover:scale-110 hover:rotate-12 duration-300" height={400} width={300} alt="Rody brand logo" />
                <h1 className='nav-pc mt-46 lg:text-7xl  md:text-5xl whitespace-nowrap'>WHAT&apos;S NEXT</h1>
            </div>

            <div className="absolute -bottom-14 lg:bottom-8 md:-bottom-24 w-full lg:-mb-42 mb:-mb-25 sm:-mb-5 flex justify-center overflow-hidden">
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.6 }}className="deploy-text no-interactions text-(length:--super-large-text) font-(family-name:--font-ClimateCrisis) font-black leading-none text-center"> DEPLOY </motion.h1>
            </div>
        </section>
    )
}
