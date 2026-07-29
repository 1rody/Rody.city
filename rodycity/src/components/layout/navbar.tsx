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
                <nav className="container-selection fixed z-50 flex items-center  justify-between  w-full gap-10 mix-blend-difference text-amber-50  p-5">
                    <div className=" font-black flex flex-col  text-amber-50 right-0 p-3  z-50 mix-blend-difference font-(family-name:--font-jetbrains-mono) gap-10 ">
                        <Image  alt="Selected" src={Selectionn} width={150} height={50}></Image>
                        <Link href="/" className=" absolute mt-2 text-xl  uppercase font-black z-48 ">- RODY.city -</Link>
                    </div>
                    <div className="flex font-black items-center bg-foreground text-black  rounded-lg z-50  font-(family-name:--font-jetbrains-mono)  gap-3">
                        <p className="scale-75">|/|</p>
                        <Link className="text-xs hover:text-red-600 transition-all  duration-120 hover:line-through" href='/redirect'>[Papers]</Link>
                        <Link className="text-xs hover:text-red-600 transition-all  duration-120 hover:line-through"  href='/pages/socials'>[Socials]</Link>
                        <p className="scale-75">|/|</p>
                    </div>
                    <nav className=" font-black flex  text-amber-50 right-0 p-3  z-50 mix-blend-difference font-(family-name:--font-jetbrains-mono) gap-10 ">
                        <Image  alt="Selected" className="  absolute top-6 z-45" src={SelectionSecondary} width={180} height={50}></Image>
                        <div className=" text-xs ml-4 ">
                            {time ? time.toLocaleTimeString() : "--:--:--"}
                            <span className=""> Temp:{temp !== null ? temp : "--"}°C</span>
                            <div className="flex items-end text-right">
                                <p className="scale-75">|/|</p>
                                <p className="scale-75">|O|</p>
                                <p className="scale-75">|W|</p>
                            </div>
                        </div>
                    </nav>
                </nav>
        </header>

        </>
    )
}
