'use client';
import '@/src/styles/pages/landing/about.css'

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/dist/client/link';
import Image from 'next/image'

export default function About() {
    const { scrollX } = useScroll()
    const x = useTransform(scrollX, [0, 1000], [0, 550]);

    return (
        <>
            <section id="about" className="flex z-15 pb-20  material-white overflow-hidden items-center justify-center flex-col">
                <div className='flex sm:max-w-4/5  md:max-w-full overflow-hidden lg:max-w-5/6 w-full flex-col p-10 dashed-stroke-tertiary'>
                    <motion.h1 style={{ x }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-5xl font-(family-name:--font-Handjet)   lg:text-left md:text-left text-center mt-30 mb-5'>Design is my language. </motion.h1>
                    <div className='flex flex-wrap lg:flex-nowrap gap-5 w-full'>
                        <article className='bg-(--background)  text-(--foreground) lg:p-10 md:p-10 p-5 rounded-3xl '>
                            <h2 className='text-(length:--super-large-text-secondary) lg:text-left md:text-left sm:text-left text-center font-black'>RODY</h2>
                            <p className='lg:text-xl md:text-md sm:text-md text-md'>
                                I am a Software Engineering student at UCSal and a Front-End Developer & UI/UX Designer.
                                <br />
                                 clean code and user experiences, I craft modern web applications using using the above technologies. Exploring protocols like Svelte or Next.js, I build pixel-perfect, high-performance interfaces with clean, purposeful code.
                            </p>
                        </article>
                        <div className='flex flex-col justify-between text-(--color-textblack) w-5/5  '>
                            <div className='flex mb-20 flex-col gap-5'>
                                <Link className='text-lg lg:text-3xl w-full ' href="#">Github</Link>
                                <Link className='text-lg lg:text-3xl w-full' href="#">Linkedin</Link>
                            </div>
                            <div className="mb-10 flex flex-col gap-10 font-(family-name:--font-jetbrains-mono) lg:h-96 lg:overflow-y-auto lg:pr-2">
                                <details name="about-faq" className="group modal-group border-b border-(--background)/20">
                                    <summary className="flex cursor-pointer list-none items-center justify-between w-full font-semibold text-lg">
                                        The difference between UI and UX
                                        <span className="ml-4 transition-transform duration-500 group-open:rotate-45">+</span>
                                    </summary>
                                    <div className="pb-4 space-y-2 text-sm">
                                        <p>
                                            <strong>UI (user interface)</strong> is what the user sees: the layout, the
                                            visual design, the components they interact with. It's driven by design.
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
                                            <Link href="/redirect" className="underline underline-offset-2">
                                                More in my paper
                                            </Link>
                                            .
                                        </p>
                                    </div>
                                </details>
                                <details name="about-faq" className="group modal-group border-b border-(--background)/20">
                                    <summary className="flex cursor-pointer list-none items-center justify-between w-full font-semibold text-lg">
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
                        </div>
                    </div>
                </div>
                <div className='flex sm:max-w-4/5  md:max-w-full overflow-hidden lg:max-w-5/6 w-full flex-col p-10 dashed-stroke-tertiary'>
                    <motion.h1 style={{ x }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-5xl font-(family-name:--font-geist) font-black lg:text-left md:text-left text-center mt-30 mb-5'>My journey so far.</motion.h1>
                    <div className='flex flex-wrap lg:flex-nowrap gap-5 w-full'>
                        <div className='flex  flex-col justify-between text-(--color-textblack) w-5/5  '>
                            <div className='border-l-black border-l-1 ml-1 p-4'>
                                <h2>2026 — NOW</h2>
                                <p>
                                    <strong>Working on Jurasolvo, staff member at NEXTFUR (commissions open), and studying at UCSAL</strong> <br />
                                    Currently studying Software Engineering at UCSAL and working as an intern with automations and front-end at Jurasolvo.
                                </p>
                            </div>
                            <div className='border-l-blue-700 border-l-10 flex   p-2'>
                            </div>
                            <div className='border-l-black border-l-1 ml-1 p-4'>
                                <h2>2025 — 2026</h2>
                                <p>
                                    <strong>Working as a freelancer and studying at Rocketseat</strong> <br />
                                    Studying at Rocketseat — Next.js course — and finishing the Prompt Engineering course.
                                </p>
                            </div>
                            <div className='border-l-blue-700 border-l-10 flex   p-2'>
                            </div>
                            <div className='border-l-black border-l-1 ml-1 p-4'>
                                <h2>2023 — 2025</h2>
                                <p>
                                    <strong>Working with Minecraft server management and deployment, and studying at Origamid</strong> <br />
                                    Studying at Origamid — UI and UX.
                                </p>
                            </div>
                            <div className='border-l-blue-700 border-l-10 flex   p-2'>
                            </div>
                            <div className='border-l-black border-l-1 ml-1 p-4'>
                                <h2>2021 — 2023</h2>
                                <p>
                                    <strong>My first contact with the development world, studying at Origamid</strong> <br />
                                    Studying at Origamid — HTML, CSS and JS basics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Image className="z-20 no-select transition-tertiary mt-20 " src="/assets/misc/transition-3.svg" alt="Transition triangle" width={3000} height={300} />

        </>
    )
}