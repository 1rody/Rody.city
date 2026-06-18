'use client';

import '@/src/styles/pages/landing/transition.css';

import { motion, useScroll, useTransform} from 'framer-motion';
import { RxOpacity } from 'react-icons/rx';

export default function transition() {
    const { scrollY } = useScroll()

    return (
        <>
        <img className="transition-negative z-15" src="/assets/misc/transition-side.svg" alt="Transition minimal" />
        <section id="light-foreground" className='pt-90 pb-80 material-white '>
            <motion.div  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}   className="h-screen flex flex-col items-center justify-center">
                <h3>Commit an new perspective</h3>
                <div className="image-container ">
                    <img src="/assets/icons/Developer badge.png" width={600} height={100} alt="Developer icon" />
                </div>
            </motion.div>
        </section>
        </>
    )
}