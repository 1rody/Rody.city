"use client";
import Link from "next/link";
import { useEffect, useState } from 'react';

import '@/src/styles/components/navigation/navigation.css';


export default function Navigation() {

    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date()); 
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <header className="flex nav-pc items-center justify-around w-full z-50 nav-stroke ">
            <nav className="flex items-center justify-around  w-full gap-5">
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm" href='/blog'>Blog</Link></li>
                    <li><Link className="text-sm"  href='/redirect'>Tools</Link></li>
                </ol>
                <ol>
                    <li><Link href='/'><img src="/assets/icons/RodyLogo.svg" width={30} alt="RodyLogo" /></Link></li>
                </ol>
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm"  href='/pages/socials'>Socials</Link></li>
                    <li><Link className="text-sm"  href='/'>{time ? time.toLocaleTimeString() : "--:--:--"}</Link></li>
                </ol>
            </nav>
        </header>
        <header className="flex nav-mobile items-center justify-around w-full z-50 fixed nav-stroke ">
            <nav className="flex items-center justify-around  w-full gap-5">
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm" href='/redirect'>See more</Link></li>
                </ol>
                <ol>
                    <li><Link href='/'><img src="/assets/icons/RodyLogo.svg" width={30} alt="RodyLogo" /></Link></li>
                </ol>
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm"  href='/'>{time ? time.toLocaleTimeString() : "--:--:--"}</Link></li>
                </ol>
            </nav>
        </header>
        </>
    )
}