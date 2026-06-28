"use client";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Navigation() {

    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date()); 
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <header className="flex nav-pc items-center font-(family-name:--font-jetbrains-mono) justify-around w-full z-50 nav-stroke p-1 transition-all duration-120">
            <nav className="flex items-center justify-around  w-full gap-5">
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm fo hover:text-red-500 transition-all duration-120 hover:line-through" href='/blog'>Blog</Link></li>
                    <li><Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through"  href='/redirect'>Tools</Link></li>
                </ol>
                <ol>
                    <li><Link href='/'><img className="filter-invert-image " src="/assets/icons/RodyLogo.svg" width={30} alt="RodyLogo" /></Link></li>
                </ol>
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through"  href='/pages/socials'>Socials</Link></li>
                    <li><Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through"  href='/'>{time ? time.toLocaleTimeString() : "--:--:--"}</Link></li>
                </ol>
            </nav>
        </header>
        <header className="flex nav-mobile items-center font-(family-name:--font-jetbrains-mono) justify-around w-full z-50 fixed nav-stroke ">
            <nav className="flex items-center justify-around  w-full gap-5">
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm   hover:text-red-500 transition-all duration-120 hover:line-through" href='/redirect'>See more</Link></li>
                </ol>
                <ol>
                    <li><Link href='/'><img src="/assets/icons/RodyLogo.svg" width={30} alt="RodyLogo" /></Link></li>
                </ol>
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through"  href='/'>{time ? time.toLocaleTimeString() : "--:--:--"}</Link></li>
                </ol>
            </nav>
        </header>
        </>
    )
}