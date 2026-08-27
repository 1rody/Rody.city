"use client";
import Link from "next/link";

import { motion, useScroll, useTransform } from 'framer-motion'


export default function Hero() {
    //resumo para o rody do futuro (no motion0 pra criar o efeito parlax do h1 isei a const Scrollyprogress chavrada peganod os atributos do useScroll do motion)
    //lendo o scroll
    const  { scrollYProgress } = useScroll();

    // e depois de definir isso eu mapeio a rolagem com a const abaixo usando o scroll lido acima
    const y = useTransform(scrollYProgress, [0, 0.2], [0, 300]);
    return (
        <section id="introduction" className="hero  z-5 no-select h-screen  w-full flex flex-col w-full items-center overflow-x-hidden">
            <div className="hover-show-group  text-center relative overflow-x-hidden flex items-center justify-center h-screen w-full p-10">
                <motion.h1
                    initial={{ opacity: 0, y: 40  }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className=" no-interactions text-(length:--super-large-text) font-(family-name:--font-ClimateCrisis) w-full h-full flex rounded-2xl justify-center items-center lg:border border-amber-50/20 font-black leading-none"
                >
                    <motion.span  style={{y}}>RODY</motion.span>
                </motion.h1>

            <div className="absolute hidden lg:flex font-(family-name:--font-geist)  font-black bottom-15 right-15 text-right gap-10">
                <Link className="text-lg hover:scale-95 hover:text-black hover:bg-white p-2 rounded-4xl active:border-b-1 hover:opacity-150 transition-all  duration-120 " href='/homebrew'>PAPERS</Link>
                <Link className="text-lg hover:scale-95 hover:text-black hover:bg-white p-2 rounded-4xl active:border-b-1 hover:opacity-150 transition-all  duration-120 " href='#about'>ABOUT</Link>
                <Link className="text-lg hover:scale-95 hover:text-black hover:bg-white p-2 rounded-4xl active:border-b-1  hover:opacity-150 transition-all  duration-120 " href='/socials'>SOCIALS</Link>
            </div>

            </div>
            <div className="absolute -bottom-14 lg:bottom-8 md:-bottom-24 w-full lg:-mb-42 mb:-mb-25 sm:-mb-5 flex justify-center overflow-hidden">
            </div>
        </section>
    )
}
