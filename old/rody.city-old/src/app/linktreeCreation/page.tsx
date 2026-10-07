"use client";

import Link from 'next/link';
import { useState } from 'react';

import Sidebar from '@/src/components/layout/navigation/sidebar';
import type { TreeData } from '@/src/lib/linktreeZip';
import '@/src/styles/components/ui/bg.css'

export default function LinktreeCreation() {

    const [tree, setTree] = useState<TreeData>({
        bgImage: "/assets/backgrounds/social.gif",
        bannerImage: "/assets/backgrounds/giphy.gif",
        name: "RODY",
        introductionPhrase: "My links in one place.",
        starterPhrase: "Hey, I'm",
        description: "I build websites and interfaces. Currently studying Software Engineering and working with front-end and automations.",
        socials: [
            {
                name: "Instagram",
                url: "https://www.instagram.com/1r0dy_",
                icon: "/assets/icons/icons8-instagram.svg"
            },
            {
                name: "X/twitter",
                url: "https://x.com/1R0_DY",
                icon: "/assets/icons/icons8-x.svg"
            },
            {
                name: "Github",
                url: "https://github.com/1R0-DY",
                icon: "/assets/icons/icons8-github.svg"
            },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/rody-1r0-dy/",
                icon: "/assets/icons/icons8-linkedin.svg"
            },
            {
                name: "Pinterest",
                url: "https://www.pinterest.com/1r0dy_/",
                icon: "/assets/icons/icons8-pinterest.svg"
            }
        ]
    });

    const bgImage = tree.bgImage || "/assets/backgrounds/social.gif";
    const bannerImage = tree.bannerImage || "/assets/backgrounds/giphy.gif";

    return (
        <>
            <Sidebar tree={tree} setTree={setTree} />
            <img src={bgImage} className='w-full h-screen object-cover blur-sm dark:opacity-40' alt="Background image" />
            <section id="socials-container" className="h-screen absolute z-2 scale-95 lg:scale-100 w-full flex items-center justify-center">
                <div className=" backdrop-blur-xl w-100 duration-200 glassmorphism-secondary items-center justify-center rounded-4xl flex flex-col">
                    <div className='flex flex-col w-full items-center justify-center p-5'>
                        <div className='text-center  gap-2'>
                            <img width={430} height={10} src={bannerImage} className='relative -mb-22 h-28 object-cover z-10 rounded-2xl' alt="Banner image" />
                            <Link href="/" className='font-bold text-5xl z-15 font-(family-name:--font-geist) relative'>{tree.name}</Link>
                            <p className=' z-15 font-(family-name:--font-jetbrains-mono) relative'><span>{tree.introductionPhrase}</span></p>
                        </div>
                    </div>
                    <ol className='flex w-full justify-around items-center  text-center p-4'>
                        {tree.socials.map((social, index) => (
                        <li
                            key={index}
                            className='bg-white/5 p-2 w-full flex items-center justify-center  backdrop-blur-3xl duration-200     hover:bg-black hover:text-black hover:invert-100   first:rounded-l-full last:rounded-r-full'  >
                            <Link href={social.url || "/"}>
                            <img alt={`${social.name} icon`} width={28} height={28} src={social.icon || "/assets/icons/RodyLogo.svg"} />
                            </Link>
                        </li>
                        ))}
                    
                    </ol>
                    <article className=' items-center justify-center w-full flex flex-col pb-10 gap-5'>

                        <p className='mt-4 text-sm p-3 max-w-4/5 whitespace-pre-line font-(family-name:--font-jetbrains-mono) rounded-2xl '>
                            {tree.starterPhrase} <strong>{tree.name}</strong> {"\n\n"} {tree.description}
                        </p>
                    </article>
                </div>
                < div className='absolute bottom-10 text-center text-white'>
                    <p className='text-sm'>© {new Date().getFullYear()} {tree.name || "Unseen"}. Built with the unseen tree builder.</p>
                </div>
            </section>
        </>
    );
}
