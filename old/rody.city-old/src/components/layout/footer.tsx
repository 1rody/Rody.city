'use client'

import '@/src/styles/components/footer/footer.css'
import Link from 'next/link'

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
                    <div className='text-center text-black md:p-0 lg:p-0 p-10'>
                        <h1>RODY.CITY</h1>
                    </div>
                    <div className='link-section p-10 text-center text-(--textblack) items-center gap-10 flex-wrap justify-between  flex w-full mt-10'>
                        <p>&copy; {new Date().getFullYear()} RODY.CITY All rights reserved.</p>
                            <ol translate="no" className='flex gap-10 flex-wrap   items-center justify-center'>
                                {socials.map((s) => (
                                    <Link key={s.name} href={s.url}>{s.name}</Link>
                                ))}
                            </ol>
                    </div>
            </footer>
        </>
    )
}