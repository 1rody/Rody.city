'use client'

//basic imports
import Link from "next/link";
import Image from "next/image";

//other imports


//component
export default function Hero() {
    return (
        <section id="hero" className="no-select flex h-screen w-full items-center flex-col items-center justify-center gap-4 text-center">
            <Image className="absolute lg:mb-0 mb-20" alt="RodyLanding Title image background" width={1920} height={1080} src="/assets/backgrounds/rody.svg" />
            <Image className="absolute lg:bottom-49  w-full" alt="Plains background" width={1920} height={1080} src="/assets/backgrounds/PixelPlains.svg" />
        </section>
    )
}