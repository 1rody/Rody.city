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
            <Image width={3000} height={0} className='z-20 transition-primary' src="/assets/misc/transition2.svg" alt="transition-svg" />
            <section id="about" className="flex z-10 material-white items-center justify-center flex-col">
                <div className='flex sm:max-w-4/5 md:max-w-full lg:max-w-4/6 w-full pb-50  flex-col p-10 dashed-stroke-tertiary'>
                    <motion.h1 style={{ x }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='text-5xl font-(family-name:--font-Handjet)  lg:text-left md:text-left text-center mt-30 mb-5'>Design is my language. </motion.h1>
                    <div className='flex flex-wrap lg:flex-nowrap gap-5 w-full'>
                        <article className='bg-(--background) lg:p-10 md:p-10 p-5 rounded-3xl '>
                            <h2 className='text-(length:--super-large-text-secondary) lg:text-left md:text-left sm:text-left text-center font-black'>RODY</h2>
                            <p className='lg:text-xl md:text-md sm:text-md text-md'>
                                I am a Software Engineering student at UCSal and a Front-End Developer & UI/UX Designer.
                                <br />
                                Bridging the gap between clean code and seamless user experiences, I craft modern web applications using using the above technologies. Exploring lightweight protocols like HTMX, I build pixel-perfect, high-performance interfaces with clean, purposeful code.
                            </p>
                        </article>
                        <div className='flex flex-col justify-between w-5/5 '>
                            <div className='flex mb-20 flex-col gap-5'>
                                <Link className='text-lg lg:text-3xl w-full text-black ' href="#">Github</Link>
                                <Link className='text-lg lg:text-3xl w-full text-black' href="#">Linkedin</Link>
                            </div>
                            <div className='mb-10  flex flex-col text-black gap-10'>
                                <details className='modal-group  border-b border-(--background)/20'>
                                    <summary className='flex  cursor-pointer list-none font-semibold text-lg items-center justify-between w-full'>
                                        The diferences of UI and UX
                                        <span className="ml-4 transition-all duration-500  group-open:rotate-45">+</span>
                                    </summary>
                                    <p>
                                        Content
                                    </p>
                                </details>
                                <details className='modal-group border-b border-(--background)/20'>
                                    <summary className='flex cursor-pointer list-none font-semibold text-lg items-center justify-between w-full'>
                                        How to setup a MINECRAFT server
                                        <span className="ml-4 transition-all duration-500 group-open:rotate-45">+</span>
                                    </summary>
                                    <p>
                                        Content
                                    </p>
                                </details>
                                <details className='modal-group border-b border-(--background)/20'>
                                    <summary className='flex cursor-pointer list-none font-semibold text-lg items-center justify-between w-full'>
                                        Pricing & Skills
                                        <span className="ml-4 transition-all duration-500 group-open:rotate-45">+</span>
                                    </summary>
                                    <p>
                                        Content
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Image className="z-20 no-select transition-tertiary" src="/assets/misc/transition-3.svg" alt="Transition triangle" width={3000} height={3} />

        </>
    )
}