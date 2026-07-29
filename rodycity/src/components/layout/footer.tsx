' use client'

import '@/src/styles/components/footer/footer.css'
import Link from 'next/dist/client/link'
import Image from 'next/image'


export default function Footer() {
    interface Social {
        name: string;
        url: string;
    }
    const socials: Social[] = [
            {name: "Github", url: "https://github.com/1rody/"},
            {name: "X", url: "https://x.com/1R0_DY"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/rodolfo-falc%C3%A3o-03b27a379/"},
            {name: "Pinterest", url: "https://br.pinterest.com/1R0_DY/"},
    ];
    return (
        <>
            <Image width={3000} height={0} className='z-20 transition-secondary dark:invert-0 invert-100' src="/assets/misc/transition2.svg" alt="transition-svg Transicao para a seccao do footer" />

            <footer className="flex flex-col overflow-hidden items-center justify-center w-full">
                    <div className='text-center text-(--textblack) md:p-0 lg:p-0 p-10'>
                        <h1>RODY.CITY</h1>
                    </div>
                    <div className='link-section p-10 text-center text-(--textblack) items-center gap-10 flex-wrap justify-between  flex w-full mt-10'>
                        <p>&copy; {new Date().getFullYear()} RODY.CITY All rights reserved.</p>
                            <ol className='flex gap-10 flex-wrap  items-center justify-center'>
                                {socials.map((s) => (
                                    <Link key={s.name} href={s.url}>{s.name}</Link>
                                ))}
                            </ol>
                    </div>
            </footer>
        </>
    )
}