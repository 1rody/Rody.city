'use client'

//basic imports
import Link from "next/link";
import Image from "next/image";

//other imports
import Stripe from "@/src/components/landing/misc/Stripe";
import showInformation from "@/src/utils/card";

export default function Projects() {
    return (
        <>
            <section id="projects" className=" relative flex-col z-6 flex -mt-20  w-full items-center justify-center overflow-hidden bg-white p-20 ">      
                <div id="project-section" className="lg:flex-nowrap flex-wrap md:flex-nowrap flex gap-10 relative mb-10  justify-\ no-select w-full z-10">
                    <Link href="/" onMouseEnter={showInformation} onMouseLeave={showInformation} className="bg-white border-1 border-black active:scale-95 p-2 hover:scale-105 duration-200 w-150 h-100 flex items-center justify-center">
                        <Image alt="Project image" src="/assets/backgrounds/projects/karasuBanner.png" width={1000} height={100} className="w-full border-black border-1 relative z-10 itens-center justify-center h-full"></Image>
                        <div className="information backdrop-blur-sm p-5 flex  lg:text-left justify-center flex-col w-140 h-90 absolute z-40 hidden text-white">
                            <h2 className="text-3xl font-black">Project name</h2>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, .
                                </p>
                                <p><strong>Click to See more</strong></p>
                            </article>
                        </div>
                    </Link>
                    <Link href="/" onMouseEnter={showInformation} onMouseLeave={showInformation} className="bg-white border-1 border-black active:scale-95 p-2 hover:scale-105 duration-200 w-150 h-100 flex items-center justify-center">
                        <Image alt="Project image" src="/assets/backgrounds/projects/karasuBanner.png" width={1000} height={100} className="w-full border-black border-1 relative z-10 itens-center justify-center h-full"></Image>
                        <div className="information backdrop-blur-sm p-5 flex  lg:text-left justify-center flex-col w-140 h-90 absolute z-40 hidden text-white">
                            <h2 className="text-3xl font-black">Project name</h2>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, .
                                </p>
                                <p><strong>Click to See more</strong></p>
                            </article>
                        </div>
                    </Link>
                    <Link href="/" onMouseEnter={showInformation} onMouseLeave={showInformation} className="bg-white border-1 border-black active:scale-95 p-2 hover:scale-105 duration-200 w-150 h-100 flex items-center justify-center">
                        <Image alt="Project image" src="/assets/backgrounds/projects/karasuBanner.png" width={1000} height={100} className="w-full border-black border-1 relative z-10 itens-center justify-center h-full"></Image>
                        <div className="information backdrop-blur-sm p-5 flex  lg:text-left justify-center flex-col w-140 h-90 absolute z-40 hidden text-white">
                            <h2 className="text-3xl font-black">Project name</h2>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, .
                                </p>
                                <p><strong>Click to See more</strong></p>
                            </article>
                        </div>
                    </Link>
                </div>
                <h2 className="text-black z-2 relative font-black w-full text-left items-center justify-center mb-50 relative bottom-0 text-9xl">DIVE IN <br />AN OCEAN OF PERSPECTIVES</h2>
            </section>
            <div className="flex w-full items-center justify-center overflow-hidden">
                <Stripe/>
            </div>
        </>
    )
}
