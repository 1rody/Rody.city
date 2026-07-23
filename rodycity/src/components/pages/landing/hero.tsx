"use client";
import Image from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion'


export default function Hero() {

    return (
        <section id="introduction" className="hero no-select h-screen flex flex-col w-full overflow-hidden">
            <div className="hover-show-group text-(--foreground)  text-6xl text-center flex-wrap  flex items-center justify-center absolute w-full h-screen">
                <h1 className='nav-pc'>ENGINEER </h1>
                <Image src="/assets/icons/RodyLogo.svg" className="hover:scale-125 duration-300" height={400} width={300} alt="" />
                <h1 className='nav-pc'>WHAT'S NEXT.</h1>
            </div>

            <div className="absolute bottom-0 w-full lg:-mb-50 mb:-mb-25 sm:-mb-5 flex justify-center overflow-hidden">
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.6 }}className="deploy-text no-interactions text-(length:--super-large-text) font-(family-name:--font-ClimateCrisis) font-black leading-none text-center"> DEPLOY </motion.h1>
            </div>
        </section>
    )
}
