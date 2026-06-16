'use client';


import { useState, useEffect } from "react";
import "@/styles/components/navigation/float/floatNav.css";

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
    <header className="flex w-full topbar-pc z-50 fixed justify-center items-center">
        <div className="flex w-7xl justify-around items-center">
            <div className='flex gap-5  justify-center'>
                <button className="nav-button-primary">
                    <Link href="/fractal_tree">Socials</Link>
                </button>
                <button  className="hidden nav-button-primary md:flex">
                    <Link href="/papers">Papers</Link>
                </button>
            </div>
            <div className='flex nav-center gap-5 justify-center'>
                <button className="flex nav-button w-full gap-1 text-2xl flex items-center">
                    <Link  href="/"><Image className="rody-brand" src='/assets/RodyLogo.png'  width={200} height={50} alt="Rody Logo" /></Link>
                </button>
            </div>
            <div className='flex gap-5  justify-center '>
                <button  className="hidden nav-button-primary md:flex">
                    <Link href="">Github</Link>
                </button>
                <button  className=" nav-button-primary">
                    <p>{localTime.toLocaleTimeString()}</p>
                </button>
            </div>
        </div>
    </header>
    )
}