'use client';


import { useState, useEffect } from "react";
import "@/styles/components/navigation/fixed/fixedNav.css";

import Image from "next/image";
import Link from "next/dist/client/link";

export default function NavLanding() {
    const [localTime, setLocalTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }
    , []);
    
    return (
    <header className="flex w-full topbar-pc absolute z-50 justify-center items-center">
        <div className="flex w-full justify-around items-center">
            <div>
                <div className="stroke-white"></div>
            </div>
            <div className='flex gap-5 font-jetbrains  justify-center'>
                <button className="nav-button-primary">
                    <Link href="/fractal_tree">Socials</Link>
                </button>
                <button  className="hidden nav-button-primary md:flex">
                    <Link href="/papers"> //under deplyment</Link>
                </button>
            </div>
            <div className='flex nav-center gap-5 justify-center'>
                <button className="flex nav-button w-full gap-1 text-2xl flex items-center">
                    <Link  href="/"><Image className="rody-brand" src='/assets/RodyLogo.png' width={200} height={50} alt="Rody Logo" /></Link>
                </button>
            </div>
            <div className='flex gap-5 font-jetbrains justify-center '>
                <button  className="hidden nav-button-primary md:flex">
                    <Link href="">Github</Link>
                </button>
                <button  className=" nav-button-primary">
                    <p>{localTime.toLocaleTimeString()}</p>
                </button>
            </div>
            <div>
                <div className="stroke-white"></div>
            </div>
        </div>
    </header>
    )
}