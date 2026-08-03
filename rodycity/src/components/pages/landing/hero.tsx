"use client";
import Image from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion'


export default function Hero() {

    return (
        <section id="introduction" className="hero z-5 no-select h-screen flex flex-col w-full overflow-hidden">
            <div className="hover-show-group text-(--foreground) lg:scale-95 md:scale-75 text-center flex-wrap  flex items-center justify-center absolute w-full h-screen">
                <h1 className='nav-pc mb-46 text-7xl md:text-5xl '>ENGINEER </h1>
                <h1 className='nav-pc mb-0 absolute mr-150 text-xl'>CREATE </h1>
                <h1 className='nav-pc mb-0 absolute ml-50 text-xl'>PUSH </h1>
                <h1 className='nav-pc mt-0 absolute mr-240 text-xl'>PLAN </h1>
                <h1 className='nav-pc  absolute ml-190 text-xl'>USE </h1>
                <Image src="/assets/icons/RodyLogo.svg" className=" duration-300" height={400} width={300} alt="" />
                <h1 className='nav-pc mt-46 text-7xl  md:text-5xl'>WHAT&apos;S NEXT</h1>
            </div>

            <div className="absolute -bottom-14 lg:bottom-8 md:-bottom-24 w-full lg:-mb-42 mb:-mb-25 sm:-mb-5 flex justify-center overflow-hidden">
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.6 }}className="deploy-text no-interactions text-(length:--super-large-text) font-(family-name:--font-ClimateCrisis) font-black leading-none text-center"> DEPLOY </motion.h1>
            </div>
        </section>
    )
}
