"use client";

import Link from 'next/dist/client/link';
import Image from 'next/image'

import '@/src/styles/components/ui/bg.css'

export default function socials() {


    return (
        <>
            <Image width={0} height={0} src="/assets/backgrounds/social.gif" className='w-full h-screen blur-sm dark:opacity-40' alt="Background image" />
            <section id="socials-container" className="h-screen absolute z-2 scale-95 lg:scale-100 w-full flex items-center justify-center">
                <div className=" backdrop-blur-xl w-100 duration-200 glassmorphism-secondary items-center justify-center rounded-4xl flex flex-col">
                    <div className='flex flex-col w-full items-center justify-center p-5'>
                        <div className='text-center  gap-2'>
                            <Image width={430} height={10} src="/assets/backgrounds/giphy.gif" className='relative -mb-22 h-28 z-10 rounded-2xl' alt="Banner image" />
                            <Link href="/" className='font-bold text-5xl z-15 font-(family-name:--font-geist) relative'>RODY</Link>
                            <p className=' z-15 font-(family-name:--font-jetbrains-mono) relative'><span>Welcome to my social tree!</span></p>
                        </div>
                    </div>
                    <ol className='flex w-full justify-around items-center  text-center p-4'>
                        <li className='hover:bg-black hover:text-black hover:invert-100 bg-white/5 rounded-l-2xl p-2 items-center justify-center flex hover:rounded-full backdrop-blur-3xl w-full'>
                            <Link href='https://www.instagram.com/1r0dy_?igsh=MXV1aTZzdHRuemwxZQ%3D%3D&igsi=MXV1aTZzdHRuemwxZQ%3D%3D&utm_source=qr'>
                                <Image alt='Instagram icon' width={28} height={28} src="/assets/icons/icons8-instagram.svg"></Image>
                            </Link>
                        </li>
                        <li className='hover:bg-black hover:text-black hover:invert-100 bg-white/5 p-2  duration-200  items-center justify-center flex hover:rounded-full backdrop-blur-3xl w-full'>
                            <Link href='https://x.com/1R0_DY'>
                                <Image alt='X/Twitter icon' width={28} height={28} src="/assets/icons/icons8-x.svg"></Image>
                            </Link>
                        </li>
                        <li className='hover:bg-black hover:text-black hover:invert-100 bg-white/5 p-2  duration-200  items-center justify-center flex hover:rounded-full backdrop-blur-3xl w-full'>
                            <Link href='https://github.com/1rody'>
                                <Image alt='github icon' width={28} height={28} src="/assets/icons/icons8-github.svg"></Image>
                            </Link>
                        </li>
                        <li className='hover:bg-black hover:text-black hover:invert-100  bg-white/5  duration-200  p-2 items-center justify-center flex hover:rounded-full backdrop-blur-3xl w-full'>
                            <Link href='https://br.pinterest.com/1R0_DY/'>
                                <Image alt='pinterest icon' width={28} height={28} src="/assets/icons/icons8-pinterest.svg"></Image>
                            </Link>
                        </li>
                        <li className='hover:bg-black hover:text-black hover:invert-100 rounded-r-2xl duration-200  bg-white/5 p-2 items-center justify-center flex hover:rounded-full backdrop-blur-3xl w-full'>
                            <Link href='https://www.linkedin.com/in/rodolfo-falc%C3%A3o-03b27a379/'>
                                <Image alt='linkedin icon' width={28} height={28} src="/assets/icons/icons8-linkedin.svg"></Image>
                            </Link>
                        </li>
                    </ol>
                    <article className=' items-center justify-center w-full flex flex-col pb-10 gap-5'>

                        <p className='mt-4 text-sm p-3 max-w-4/5 font-(family-name:--font-jetbrains-mono) rounded-2xl '>
                            Hello, Im <strong>rody</strong>! <br /><br /> im a web developer and designer, I love to create web solutions and functional websites.  <br /> <br />I have a passion for learning new technologies and improving my skills.
                        </p>
                    </article>
                </div>
                < div className='absolute bottom-10 text-center text-white'>
                    <p className='text-sm'>© {new Date().getFullYear()} RODY LINKTREE. wanna build your own?  <Link className='text-blue-500' href='https://github.com/rodolfoalves/rodycity' target='_blank' rel='noopener noreferrer'>click here</Link></p>
                </div>
            </section>
        </>
    );
}
