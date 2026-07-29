"use client";
import Link from "next/link";
import Image from 'next/image'
import { useClock } from '@/src/hooks/useClock';
import { useWeather } from '@/src/hooks/useWeather';


import SelectionSecondary from "@/public/assets/misc/SelectionSecondary.svg"

import Selectionn from "@/public/assets/misc/Selection.svg"

export default function Navigation() {
    const time = useClock();
    const { temp } = useWeather();

    return (
        <>
        <header className="flex nav-mobile items-center font-(family-name:--font-jetbrains-mono) justify-around w-full z-50 nav-stroke ">
            <nav className="flex items-center justify-between px-5 w-full gap-5">
                <ol className="flex items-center justify-center gap-3">
                    <li><Link className="text-sm   hover:text-red-500 transition-all duration-120 hover:line-through" href='/redirect'>Papers</Link></li>
                    <li><Link className="text-sm   hover:text-red-500 transition-all duration-120 hover:line-through" href='/pages/socials'>Socials</Link></li>
                </ol>
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through"  href='/'>{time ? time.toLocaleTimeString() : "--:--:--"}</Link></li>
                </ol>
            </nav>
        </header>
        <header className="nav-pc items-center  ">
                <nav className=" fixed z-50 flex items-center  justify-between  w-full gap-10 mix-blend-difference text-amber-50  py-3 px-10">
                    <section className=" font-black flex  text-amber-50 right-0 p-3  z-50 mix-blend-difference font-(family-name:--font-jetbrains-mono) gap-10 ">
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
                    <section className="container-selection font-black flex flex-col  text-amber-50 right-0 p-3  z-50 mix-blend-difference font-(family-name:--font-jetbrains-mono) gap-10 ">
                        <Image  alt="Selected" src={Selectionn} width={150} height={50}></Image>
                        <Link href="/" className=" absolute mt-2 text-xl ml-5 uppercase font-black z-48 "> RODY.CITY </Link>
                    </section>
                    <section className="flex font-black items-center hover:scale-105 transition-all duration-75 bg-foreground text-black  rounded-lg z-50  font-(family-name:--font-jetbrains-mono)  gap-3">
                        <p className="scale-75">|/|</p>
                        <Link className="text-xs hover:text-red-600 transition-all  duration-120 hover:line-through" href='/redirect'>[PAPERS]</Link>
                        <Link className="text-xs hover:text-red-600 transition-all  duration-120 hover:line-through" href='#about'>[ABOUT]</Link>
                        <Link className="text-xs hover:text-red-600 transition-all  duration-120 hover:line-through" href='#history'>[HISTORY]</Link>
                        <Link className="text-xs hover:text-red-600 transition-all  duration-120 hover:line-through"  href='/pages/socials'>[SOCIALS]</Link>
                    </section>
                </nav>
        </header>

        </>
    )
}
