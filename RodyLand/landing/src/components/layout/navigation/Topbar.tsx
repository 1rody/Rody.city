'use client'

//nextjs base imports
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useEffect } from "react";

import toggleMenu from "@/src/utils/ToggleMenu";

export default function Topbar() {
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 ">    
                <nav className="flex items-center justify-between p-5">   
                    <Link href="/" className="flex items-center gap-2">
                        <Image className="w-7" width={100} height={100} src="/assets/icons/RodyLogo.svg" alt="Logo" />
                    </Link>
                    <div>

                    </div>
                    <div>
                        <button id="menubutton" onClick={toggleMenu} className="text-white  z-20 font-bold py-2 px-4 active:scale-95 duration-200 rounded-4xl hover:bg-white hover:text-black transition-colors duration-300">
                            MENU
                        </button>
                    </div> 
                </nav>
            </header>
            <section id="menu" className="hidden  p-10 text-black z-35 sideswap fixed right-0 top-0  w-1/4 h-full bg-white bg-opacity-90 ">
                    <p className="text-3xl font-black">
                        NAVIGATION
                    </p>
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
                    <p className="text-3xl font-black">
                        GET IN CONTACT
                    </p>
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
            </section>
        </>

    )
}