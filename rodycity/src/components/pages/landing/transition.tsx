'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';

import '@/src/styles/pages/landing/transition.css';

export default function transition() {
    return (
        <>
        <Image width={3000} height={0} className="transition-negative z-15" src="/assets/misc/transition-side.svg" alt="Transition minimal" />
        <motion.section id="light-foreground" className='pt-90 pb-80 material-white '>
            <motion.div  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}   className="h-screen flex flex-col items-center justify-center">
                <h3>Commit an new perspective</h3>
                <motion.div className="image-container ">
                    <Image width={600} height={100} src="/assets/icons/Developer badge.png" alt="Developer icon" />
                </motion.div>
            </motion.div>
        </motion.section>
        </>
    )
}