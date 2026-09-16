'use client'

import Link from "next/link"
import Image from 'next/image'

import { motion} from 'framer-motion';

import Arkhan from '@/public/assets/backgrounds/projects/arkhan.png'
import Karasubanner from '@/public/assets/backgrounds/projects/karasuBanner.png';

import '@/src/styles/pages/landing/featured.css'



const playHover = () => {
    const audio = new Audio("/assets/sounds/hover.mp3"); 
    audio.volume = 0.2;
    audio.play().catch(() => {});
};
const playClick = () => {
    const audio = new Audio("/assets/sounds/click.mp3");
    audio.volume = 0.1;
    audio.play().catch(() => {});
};
export default function About() {

    return (
        <>
            <div className="w-full z-19 lg:-mb-8 -mb-2 bg-background overflow-hidden">
                <Image alt="transition" src='/assets/misc/transition2.svg' width={15000} height={100}></Image>
            </div>
            <section id='about' className='flex bg-white pt-20 flex-wrap justify-center '>
                <section className='xl:w-2/5 z-50 lg:max-1/2 w-full font-black text-black text-center lg:text-left items-center'>
                    <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1}} className=' text-(length:--aux-super-text)'>WHOAMI</motion.h2>
                    <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-black">
                        <div >
                            <p >
                                Software Engineering student at UCSal, Front-End Developer, and UI/UX Designer.
                            </p>

                            <p>
                                I study Software Engineering at UCSal and work front-end day to day. I like simple pages that load fast, read well on any screen, and don't break. Mostly Next.js, some Svelte when the project asks for it.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-col gap-10 font-(family-name:--font-jetbrains-mono) lg:overflow-y-auto lg:pr-2">
                            <details onClick={playClick} name="about-faq" className="group modal-group  border-b border-(--background)/20">
                                <summary onMouseEnter={playHover} className="flex cursor-pointer list-none items-center justify-between w-full font-semibold text-lg">
                                    The difference between UI and UX
                                    <span className="ml-4 transition-transform duration-500 group-open:rotate-45">+</span>
                                </summary>
                                <div className="pb-4 space-y-2 text-sm">
                                    <p>
                                        <strong>UI (user interface)</strong> is what the user sees: the layout, the
                                        visual design, the components they interact with. It s driven by design.
                                    </p>
                                    <p>
                                        <strong>UX (user experience)</strong> is how the interface feels to use:
                                        the navigation, the accessibility, how easily someone can accomplish what
                                        they came to do.
                                    </p>
                                    <p>
                                        The two are related but not the same — a site can look good and still be
                                        frustrating to use. Good UX is also judged against intent: an interface
                                        built for a specialist audience has different goals than one meant for
                                        everyone.{" "}
                                        <Link href="/papers/ui-ux" className="underline underline-offset-2">
                                            More in my paper
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </details>
                            <details onClick={playClick} name="about-faq" className="group modal-group  border-b border-(--background)/20">
                                <summary onMouseEnter={playHover}  className="flex cursor-pointer list-none items-center justify-between w-full font-semibold text-lg">
                                    Pricing &amp; Skills
                                    <span className="ml-4 transition-transform duration-500 group-open:rotate-45">+</span>
                                </summary>
                                <div className="pb-4 space-y-1 text-sm">
                                    <p><strong>UI/UX consulting</strong> — from $100</p>
                                    <p><strong>Front-end development (SPA)</strong> — from $200</p>
                                    <p><strong>Front-end development (MPA)</strong> — $60 per page</p>
                                    <p><strong>Branding &amp; Guidelines</strong> — from $200 (UI/UX + branding + landing page)</p>
                                </div>
                            </details>
                        </div>
                    </motion.article>
                </section>
                <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className=" lg:scale-75 pt-50 scale-130 pb-50 lg:-mt-20 mt-5 items-center justify-center flex flex-col gap-2 ">
                    <article  onMouseEnter={playHover} className="featured-project  flex-col gap-5 flex hover:rounded-4xl rounded-3xl">
                        <Image src={Karasubanner} width={1000} height={50} className="" alt="Karasu.sh landingpage image" />
                        <div className="text-left pt-10 scale-75  p-6 font-bold text-white gap-5 container-text duration-200 transition-all rounded-4xl ">
                            <h1 className="font-bold">KARASU.SH</h1>
                            <div>
                                <p>Karasu is a small security project. Every finding from offense goes back into defense.</p>
                                <br />
                                <button className="card-btn"><a href="/projectDownloads/Karasu.zip" download>Concept</a></button>
                                <button className="card-btn"><Link href="https://www.karasu.sh/">VISIT THE WEBSITE </Link></button>
                            </div>
                        </div>
                    </article>
                    <article  onMouseEnter={playHover} className=" featured-project flex-col gap-5 flex hover:rounded-4xl rounded-3xl">
                        <Image src={Arkhan} width={1000} height={50} alt="Project Image" />
                        <div className="text-left pt-10 scale-75 p-6 font-bold text-white gap-5 container-text backdrop-blur-sm duration-200 transition-all rounded-4xl ">
                            <h1 className="font-bold">ARKHAN</h1>
                            <div>
                                <p>
                                    Arkhan is a cybersecurity team inside NextFur. We study infra defense and document what we find.
                                </p>
                                <br />
                                <button className="card-btn"><span>Concept</span></button>
                                <button className="card-btn"><Link href="https://www.arkhan.fun/">VISIT THE WEBSITE </Link></button>
                            </div>
                        </div>
                    </article>
                </motion.section>
            </section>
        </>
    )
}