'use client'

//nextjs base imports
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useEffect } from "react";

import toggleMenu from "@/src/utils/ToggleMenu";
import { Menu } from "lucide-react";

export default function Topbar() {
    const [localTime, setLocalTime] = useState<Date | null>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }
    , []);

    return (
        <>
            <header className="fixed border-b-1 border-white/14  mix-blend-difference  top-0 left-0 w-full z-30 ">    
                <nav className="flex  items-center justify-between ">   
                    <Link href="/" className="flex border-r border-white/14 p-3 items-center gap-2">
                        <Image className="w-7" width={100} height={100} src="/assets/icons/RodyLogo.svg" alt="Logo" />
                    </Link>
                    <div className="border-r border-l border-white/14 lg:flex  hidden">
                        <ol className="gap-4 flex items-center justify-center text-xs">
                            <li className="hidden md:flex gap-4 p-3 text-white font-bold">
                                <Link href="/">
                                    WELCOME TO A CALMER AND MORE RELAXING LAND ON THE INTERNET.... 
                                </Link>
                            </li>
                        </ol>
                    </div>
                    <div className="border-l border-white/14 p-3">
                        <button id="menubutton" onClick={toggleMenu} className="text-white  font-bold py-2 px-4 active:scale-95 duration-200 hover:bg-white hover:text-black transition-colors duration-300">
                            <Menu />
                        </button>
                    </div> 
                </nav>
            </header>
            <section id="menu" className="hidden md:w-2/4 w-full  border-l-1 border-black p-6 text-black z-50 md:z-39 lg:z-39 sideswap fixed right-0 top-0  lg:w-1/6 h-full bg-white bg-opacity-90 ">
                <div className="flex items-center gap-3 w-full justify-center ">
                    <p className="text-3xl font-black">
                        NAVIGATION
                    </p>
                    <div className="w-full items-center justify-center border-1 border-black border-dashed"></div>
                        <button id="menubutton" onClick={toggleMenu} className="text-black flex  font-bold active:scale-95 duration-200  py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300">
                            CLOSE
                        </button>
                </div>
                <ol className="flex flex-col gap-4 p-10 text-2xl">
                    <li className="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                        <Link href="/">
                            ABOUT
                        </Link>
                    </li>
                    <li className="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                        <Link href="/projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li className="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                        <Link href="/socials">
                            SOCIALS
                        </Link>
                    </li>
                    <li className="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                        <Link href="/papers">
                            PAPERS
                        </Link>
                    </li>
                </ol>
                <div className="flex items-center gap-3 w-full justify-center ">
                    <p className="text-3xl font-black">
                        GET IN CONTACT
                    </p>
                    <div className="w-full items-center justify-center border-1 border-black border-dashed"></div>
                </div>
                <ol  className="flex flex-col gap-4 p-10 text-2xl">
                    <li className="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                        <Link href="/contact">
                            github
                        </Link>
                    </li>
                    <li className="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                        <Link href="/contact">
                            Discord
                        </Link>
                    </li>
                    <li className="hover:bg-gray-200 active:scale-95 w-fit flex duration-200">
                        <Link href="/contact">
                            Linkedin
                        </Link>
                    </li>
                </ol>
                  <div className="flex items-center justify-center gap-5 p-5 text-black font-black text-3xl absolute bottom-0 ">
                        <p className="">CLOCK {localTime?.toLocaleTimeString()}</p>
                  </div>
            </section>
        </>

    )
}