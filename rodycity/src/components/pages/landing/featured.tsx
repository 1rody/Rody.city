'use client'

import Link from "next/dist/client/link"
import '@/src/styles/pages/landing/featured.css'

import { motion, useScroll, useTransform} from 'framer-motion'

export default function Featured() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 1000], [0, 550]);
    
    return (
        <>
            <img src="/assets/misc/transition-3.svg" alt="Transition triangle" />
            <section id="featured" className="flex  flex-col items-center overflow-hidden pb-50 justify-center">
                <img className="" src="/assets/misc/Featured.svg" width={1600} height={600} alt="Featured" />

                <div className="container-featured items-center justify-center flex-wrap flex gap-20 sm:flex-wrap md:flex-wrap lg:flex-wrap mt-20">
                    <article className=" featured-project flex-col gap-5 flex">
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='440'%20height='250'/%3E" alt="Project Image" />
                        <div className="text-left container-text">
                            <h1>Name</h1>
                            <p>Description</p>
                            <div>
                                <button className="card-btn"><Link href="#">Go to repo</Link></button>
                            </div>
                        </div>
                    </article>
                    <article className=" featured-project large-project flex-col gap-5 flex">
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='440'%20height='250'/%3E" alt="Project Image" />
                        <div className="text-left container-text">
                            <h1>Name</h1>
                            <p>Description</p>
                            <div>
                                <button className="card-btn"><Link href="#">Go to repo</Link></button>
                            </div>
                        </div>
                    </article>
                    <article className=" featured-project flex-col gap-5 flex">
                        <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='440'%20height='250'/%3E" alt="Project Image" />
                        <div className="text-left container-text">
                            <h1>Name</h1>
                            <p>Description</p>
                            <div>
                                <button className="card-btn"><Link href="#">Go to repo</Link></button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}