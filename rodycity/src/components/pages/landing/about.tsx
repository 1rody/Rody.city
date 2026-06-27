'use client';
import '@/src/styles/pages/landing/about.css'

import { motion, useScroll, useTransform} from 'framer-motion';
import Link from 'next/dist/client/link';
import Image from 'next/image'

export default function About() {
    const { scrollX } = useScroll()
    const x = useTransform(scrollX, [0, 1000], [0, 550]);

    return (
        <>
        <Image width={3000} height={0} className='z-10 transition-primary' src="/assets/misc/transition.svg" alt="transition-svg" />
        <section id="about" className="flex material-red z-10 items-center justify-center flex-col">
            <motion.h1 style={{x }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='  text-center mt-30 mb-45'>Design is my language. </motion.h1>
            <div className='w-full flex items-center justify-center'>
                <motion.article style={{x }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='card rounded-xl transition-transform cursor-cell hover:scale-105  flex flex-col items-center p-8  gap-8 justify-center'>
                    <div className='flex flex-col text-center'>
                        <h1 className='font-black lg:text-7xl md:text-3xl'>[RODY]</h1>
                        <h2  className='font-black lg:text-sm md:text-3xl' >[Front-end/ UI/UX ]</h2>
                    </div>
                    <div>
                        <h3 className=' text-center p-4'>
                            I am a Software Engineering student at UCSal and a Front-End Developer & UI/UX Designer. <br /><br />
                            Bridging the gap between clean code and seamless user experiences, I craft modern web applications using using the above technologies.
                            Exploring lightweight protocols like HTMX, I build pixel-perfect, high-performance interfaces with clean, purposeful code.
                        </h3>
                        <div className='flex w-full items-center justify-center p-5'>
                            <button className='dashed-primary'>
                                <Link href="/assets/docs/curriculum.pdf" download>Download curriculum</Link>
                            </button>
                        </div>
                    </div>
                    <div className='flex relative flex-wrap container-stacks items-center justify-center gap-3'>
                        <p className='tech-2'>NextJs</p>
                        <p className='tech-4'>Figma</p>
                        <p className='tech-3 '>React</p>
                        <p className='tech-4'>Typescript</p>
                        <p className='tech-2'>Html/CSS</p>
                        <p className='tech-5 '>JAVA</p>
                    </div>
                    <div>

                    </div>
                </motion.article>
            </div>
            <motion.h1  style={{x }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className=' text-center pb-40'>code is my syntax.</motion.h1>

        </section>
            <Image className="z-50 " src="/assets/misc/transition-3.svg" alt="Transition triangle" width={3000} height={0}/>

        </>
    )
}