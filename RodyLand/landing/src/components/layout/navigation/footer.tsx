'use client'

import Link from 'next/link'
import Image from 'next/image';

export default function Footer() {
    interface Social {
        name: string;
        url: string;
    }
    const socials: Social[] = [
            {name: "Github", url: "https://github.com/1R0-DY"},
            {name: "X", url: "https://x.com/1R0_DY"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/rody-1r0-dy/"},
            {name: "Pinterest", url: "https://www.pinterest.com/1r0dy_/"},
    ];
    return (
        <>

            <footer className="flex flex-col overflow-hidden z-20 items-center justify-center w-full">
                    <div className='w-full overflow-hidden z-2 items-center justify-center'>
                        <Image className="absolute lg:mb-0 mb-20" alt="RodyLanding Title image background" width={1920} height={1080} src="/assets/backgrounds/rody.svg" />
                    </div>
                    <div className='link-section p-10 max-w-2/3 font-black text-center text-(--textblack) items-center gap-10 flex-wrap justify-between  flex w-full mt-10'>
                        <p>&copy; {new Date().getFullYear()} RODY.CITY All rights reserved.</p>
                            <ol translate="no" className='flex gap-10 flex-wrap  z-40  items-center justify-center'>
                                {socials.map((s) => (
                                    <Link className='border-b-1 border-white duration-200 hover:bg-white hover:text-black' key={s.name} href={s.url}>{s.name}</Link>
                                ))}
                            </ol>
                    </div>
            </footer>
        </>
    )
}