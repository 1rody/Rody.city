'use client'

//basic imports
import Link from "next/link";
import Image from "next/image";

//other imports

import { motion, useScroll, useTransform } from "framer-motion"


//component
export default function Hero() {

    //scroll animation
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0", "60%"]);


    return (
        <motion.section initial={{ opacity: 0 }} style={{ y }} animate={{ opacity: 1 }} id="hero" className="no-select flex h-screen w-full items-center flex-col justify-center gap-4 text-center">
            <Image className="absolute lg:mb-0 mb-20" alt="RodyLanding Title image background" width={1920} height={1080} src="/assets/backgrounds/rody.svg" />
            <Image className="absolute lg:bottom-49  w-full" alt="Plains background" width={1920} height={1080} src="/assets/backgrounds/PixelPlains.svg" />
        </motion.section>
    )
}