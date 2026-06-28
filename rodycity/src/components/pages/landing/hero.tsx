'use client'

import { ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform} from 'framer-motion'

export default function Hero() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 1000], [0, 550]);

    return (
        <section id='introduction' className="hero w-full items-center justify-center h-screen flex ">
            <div className="h-screen relative flex-col w-full flex items-center justify-center">
                <motion.div style={{ y }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="absolute z-5 dashed-stroke-secondary w-10/12 h-screen gap-2 flex-col relative items-center justify-center flex text-center">
                    <motion.img  className='absolute z-5 mb-4 hover:scale-90 transition-all duration-200' src="/assets/misc/Selection.svg" width={1800} height={50} alt="" />
                    <motion.h1   initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}  className=" w-full fixed text-center text-(length:--super-large-text) font-black dashed-stroke ">DEPLOY</motion.h1>
                    <motion.p  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}  className='dashed-stroke mb-95 text-(length:--aux-super-text)  font-(family-name:--font-jetbrains-mono)'>Dive deep into the digital current, transform fluid concepts into pixels, and brace for impact.</motion.p>
                </motion.div>
                <div className=' relative flex flex-col items-center justify-center bottom-28 lg:bottom-0.5'>
                    <ChevronDown className='floating' size={24} />
                    <p className='scroll-down-keyframes'>Scroll to see more</p>
                </div>
            </div>
        </section>
    )
}