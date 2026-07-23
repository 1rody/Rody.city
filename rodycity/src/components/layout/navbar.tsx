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
        <header className="flex nav-mobile items-center font-(family-name:--font-jetbrains-mono) justify-around w-full z-50 nav-stroke ">
            <nav className="flex items-center justify-between px-5 w-full gap-5">
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm   hover:text-red-500 transition-all duration-120 hover:line-through" href='/pages/socials'>Socials</Link></li>
                </ol>
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through"  href='/'>{time ? time.toLocaleTimeString() : "--:--:--"}</Link></li>
                </ol>
            </nav>
        </header>
        <header className="nav-pc  1 text-(--color-textblack)">
            <p className="  fixed  left-50  top-5 mix-blend-difference z-50 text-center md:hidden hidden lg:flex text-amber-50">Dive deep into the digital current, transform fluid concepts into pixels, and brace for impact.</p>
            <img src="/assets/misc/Corner_white.svg" width={33} className="fixed z-50 right-71 top-1 hidden dark:block" alt="" />
                <nav className="flex z-50  -mt-2 -mx-5 rounded-3xl fixed p-5 bg-(--foreground)  right-0 font-(family-name:--font-jetbrains-mono) lg:px-20  gap-10 ">
                    <Link className="text-sm hover:text-purple-600 transition-all  duration-120 hover:line-through" href='/redirect'>Papers</Link>
                    <Link className="text-sm  hover:text-purple-600 transition-all  duration-120 hover:line-through"  href='/pages/socials'>Socials</Link>
                </nav>
            <img src="/assets/misc/Corner_white.svg" width={35} className="fixed z-50  right-1 top-12" alt="" />
        </header>
        </>
    )
}
