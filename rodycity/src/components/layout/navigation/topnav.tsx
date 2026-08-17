"use client";
import Link from "next/link";
import { useClock } from '@/src/hooks/useClock';
import { useWeather } from '@/src/hooks/useWeather';

import { motion, useScroll, useTransform } from 'framer-motion'


import Selectionn from "@/public/assets/misc/Selection.svg"

export default function Navigation() {
    const time = useClock();
    const { temp } = useWeather();

    return (
        <>
            <header className="flex fixed bg-background nav-mobile items-center font-(family-name:--font-jetbrains-mono) justify-around w-full z-50 nav-stroke ">
                <nav className="flex items-center justify-between px-5 w-full gap-5">
                    <ol className="flex items-center justify-center gap-3">
                        <li><Link className="text-sm   hover:text-red-500 transition-all duration-120 hover:line-through" href='/homebrew'>Papers</Link></li>
                        <li><Link className="text-sm   hover:text-red-500 transition-all duration-120 hover:line-through" href='/socials'>Socials</Link></li>
                    </ol>
                    <ol className="flex items-center justify-center gap-10">
                        <li><Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through" href='/'>{time ? time.toLocaleTimeString() : "--:--:--"}</Link></li>
                    </ol>
                </nav>
            </header>
            <motion.header initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="nav-pc items-center  ">
                <nav className=" fixed z-50 flex items-center   justify-between  w-full gap-10 mix-blend-difference text-amber-50 py-10  px-8">
                    <section className=" font-black flex  text-foreground right-0 p-3  z-50 mix-blend-difference font-(family-name:--font-jetbrains-mono) gap-10 ">
                        <div className=" text-xs ml-4 ">
                            {time ? time.toLocaleTimeString() : "--:--:--"}
                            <span className=""> Temp:{temp !== null ? temp : "--"}°C</span>
                            <div className="flex items-end text-right">
                                <p className="scale-75">|/|</p>
                                <p className="scale-75">|O|</p>
                                <p className="scale-75">|W|</p>
                            </div>
                        </div>
                    </section>

                    <section className="flex font-black items-center px-10 transition-all duration-75  rounded-lg z-50  font-(family-name:--font-jetbrains-mono)  gap-3">
                        <section translate="no" className="container-selection font-black flex flex-col text-foreground  right-0 p-3  z-50 mix-blend-difference font-(family-name:--font-jetbrains-mono) gap-10 ">
                            <Link href="/" className="  text-2xl mt-3 uppercase font-black z-28 font-(family-name:--font-ClimateCrisis)"> RODY.CITY </Link>
                        </section>
                    </section>
                </nav>
            </motion.header>

        </>
    )
}
