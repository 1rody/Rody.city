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
            <Image width={3000} height={0} className='z-30 bottom-1 sm:bottom-5 absolute transition-primary' src="/assets/misc/transition2.svg" alt="transition-svg" />
            <section id="about" className="flex z-15 pb-20  material-white overflow-hidden items-center justify-center flex-col">
                <div className='flex sm:max-w-4/5 min-h-screen   md:max-w-full overflow-hidden lg:max-w-5/6 w-full pb-50  flex-col p-10 dashed-stroke-tertiary'>
                    <motion.h1 style={{ x }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-5xl font-(family-name:--font-Handjet)   lg:text-left md:text-left text-center mt-30 mb-5'>Design is my language. </motion.h1>
                    <div className='flex flex-wrap lg:flex-nowrap gap-5 w-full'>
                        <article className='bg-(--background)  text-(--foreground) lg:p-10 md:p-10 p-5 rounded-3xl '>
                            <h2 className='text-(length:--super-large-text-secondary) lg:text-left md:text-left sm:text-left text-center font-black'>RODY</h2>
                            <p className='lg:text-xl md:text-md sm:text-md text-md'>
                                I am a Software Engineering student at UCSal and a Front-End Developer & UI/UX Designer.
                                <br />
                                Bridging the gap between clean code and seamless user experiences, I craft modern web applications using using the above technologies. Exploring lightweight protocols like HTMX, I build pixel-perfect, high-performance interfaces with clean, purposeful code.
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
            </section>
            <Image className="z-20 no-select transition-tertiary mt-20 " src="/assets/misc/transition-3.svg" alt="Transition triangle" width={3000} height={300} />

        </>
    )
}