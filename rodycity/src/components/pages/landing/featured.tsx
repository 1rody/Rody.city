'use client'

import Link from "next/dist/client/link"
import '@/src/styles/pages/landing/featured.css'
import Image from 'next/image'

import Karasubanner from '@/public/assets/backgrounds/projects/karasuBanner.png';

import { motion, useScroll, useTransform} from 'framer-motion'

export default function Featured() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 1000], [0, 550]);
    
    return (
        <>
            <section id="featured" className="flex no-select flex-col items-center overflow-hidden pb-50 justify-center">
                <Image className="filter-invert-image " src="/assets/misc/Featured.svg" width={1300} height={600} alt="Featured" />

                <div className="container-featured  items-center justify-center flex-wrap flex gap-20 sm:flex md:flex lg:flex-nowrap mt-20">
                    <article className=" featured-project flex-col gap-5 flex hover:rounded-4xl rounded-3xl">
                        <Image src={Karasubanner} width={1000} height={50}  alt="Project Image" />
                        <div className="text-left pt-10  p-6 font-bold text-white gap-5 container-text backdrop-blur-sm duration-200 transition-all rounded-4xl ">
                            <h1 className="font-bold">KARASU.SH</h1>
                                <div>
                                <p>Karasu is a security company that unifies offense, defense, and intelligence — Red Team, Blue Team, and Intel. One crow, three fronts, where every offensive discovery strengthens the defense. </p>                    
                                <br />
                                <button className="card-btn"><Link href="/pages/concepts/karasu/">Concept </Link></button>
                                <button className="card-btn"><Link href="https://www.karasu.sh/">VISIT THE WEBSITE </Link></button>
                            </div>
                        </div>
                    </article>
                    <article className=" featured-project flex-col gap-5 flex hover:rounded-4xl rounded-3xl">
                        <Image src={Karasubanner} width={1000} height={50}  alt="Project Image" />
                        <div className="text-left pt-10  p-6 font-bold text-white gap-5 container-text backdrop-blur-sm duration-200 transition-all rounded-4xl ">
                            <h1 className="font-bold">KARASU.SH</h1>
                                <div>
                                <p>Karasu is a security company that unifies offense, defense, and intelligence — Red Team, Blue Team, and Intel. One crow, three fronts, where every offensive discovery strengthens the defense. </p>                    
                                <br />
                                <button className="card-btn"><Link href="/pages/concepts/karasu/">Concept </Link></button>
                                <button className="card-btn"><Link href="https://www.karasu.sh/">VISIT THE WEBSITE </Link></button>
                            </div>
                        </div>
                    </article>
                    <article className=" featured-project flex-col gap-5 flex hover:rounded-4xl rounded-3xl">
                        <Image src={Karasubanner} width={1000} height={50}  alt="Project Image" />
                        <div className="text-left pt-10  p-6 font-bold text-white gap-5 container-text backdrop-blur-sm duration-200 transition-all rounded-4xl ">
                            <h1 className="font-bold">KARASU.SH</h1>
                                <div>
                                <p>Karasu is a security company that unifies offense, defense, and intelligence — Red Team, Blue Team, and Intel. One crow, three fronts, where every offensive discovery strengthens the defense. </p>                    
                                <br />
                                <button className="card-btn"><Link href="/pages/concepts/karasu/">Concept </Link></button>
                                <button className="card-btn"><Link href="https://www.karasu.sh/">VISIT THE WEBSITE </Link></button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}