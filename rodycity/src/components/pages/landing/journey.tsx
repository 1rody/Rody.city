'use client'

import Stripes from '@/src/components/layout/misc/stripes'
import { motion } from 'motion/react'

export default function Journey() {
    return (
        <>
            <Stripes />
            <section id="journey" className='flex lg:gap-30 gap-5 pt-50 bg-black pb-50 flex-wrap  z-10 overflow-hidden justify-center  w-full'>
                <div  className="mt-60">
                    <motion.h2 transition={{ duration: 0.2 }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-white text-8xl">making</motion.h2>
                    <motion.h2 transition={{ duration: 0.3 }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-white text-8xl">systems</motion.h2>
                    <motion.h2 transition={{ duration: 0.4 }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-white text-8xl">that</motion.h2>
                    <motion.h2 transition={{ duration: 0.5 }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}className="text-white text-8xl">adapt</motion.h2>
                    <motion.h2 transition={{ duration: 0.6 }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-white text-8xl">for you</motion.h2>
                </div>
                <div className="lg:mt-70  md:mt-70  mt-20 flex text-white/50 flex-wrap lg:flex-nowrap gap-5">
                    <div className='flex  flex-col  w-5/5  '>
                        <motion.div transition={{ duration: 0.2 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='border-l-white  border-l-10 flex   p-2'>
                        </motion.div>
                        <motion.div transition={{ duration: 0.2 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='border-l-white/50 border-l-1 ml-1 p-4'>
                            <h2>2026 — NOW</h2>
                            <p>
                                <strong className="text-white">Working on Jurasolvo, staff member at NEXTFUR (commissions open), and studying at UCSAL</strong> <br />
                                Currently studying Software Engineering at UCSAL and working as  <br />an intern with automations and front-end at Jurasolvo.
                            </p>
                        </motion.div>
                        <motion.div transition={{ duration: 0.2 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='border-l-white  border-l-10 flex   p-2'>
                        </motion.div>
                        <motion.div transition={{ duration: 0.3 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='border-l-white/50 border-l-1 ml-1 p-4'>
                            <h2>2025 — 2026</h2>
                            <p>
                                <strong className="text-white">Working as a freelancer and studying at Rocketseat</strong> <br />
                                Studying at Rocketseat — Next.js course — and finishing the Prompt Engineering course.
                            </p>
                        </motion.div>
                        <motion.div transition={{ duration: 0.2 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='border-l-white  border-l-10 flex   p-2'>
                        </motion.div>
                        <motion.div transition={{ duration: 0.4 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='border-l-white/50 border-l-1 ml-1 p-4'>
                            <h2>2023 — 2025</h2>
                            <p>
                                <strong className="text-white">Working with Minecraft server management and deployment, and studying at Origamid</strong> <br />
                                Studying at Origamid — UI and UX.
                            </p>
                        </motion.div>
                        <motion.div transition={{ duration: 0.2 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='border-l-white  border-l-10 flex   p-2'>
                        </motion.div>
                        <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='border-l-white/50 border-l-1 ml-1 p-4'>
                            <h2>2021 — 2023</h2>
                            <p>
                                <strong className="text-white">My first contact with the development world, studying at Origamid</strong> <br />
                                Studying at Origamid — HTML, CSS and JS basics.
                            </p>
                        </motion.div>
                        <motion.div transition={{ duration: 0.2 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='border-l-white  border-l-10 flex   p-2'>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}