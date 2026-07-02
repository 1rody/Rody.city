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
                    <li><Link className="text-sm   hover:text-red-500 transition-all duration-120 hover:line-through" href='/redirect'>See more</Link></li>
                </ol>
                <ol className="flex items-center justify-center gap-10">
                    <li><Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through"  href='/'>{time ? time.toLocaleTimeString() : "--:--:--"}</Link></li>
                </ol>
            </nav>
        </header>
        </>
    )
}