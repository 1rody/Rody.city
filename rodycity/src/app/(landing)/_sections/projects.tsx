'use client';

import '@/styles/pages/landing/projects.css';

import Image from 'next/image';
import Link from 'next/dist/client/link';

export default function projects() {
    return (
        <>
        
        <section id="projects-showing" className="flex gap-5 flex-col w-full mb-50 items-center overflow-hidden">
            <Image className='no-invert items-center font-erika no-event user-select-none' src='assets/featured.svg' width={1000} height={50} alt="FeaturedBanner" />
            <div className="ffex items-center justify-center w-full flex-wrap gap-5">
                <article className="project-container pb-10 mb-10 flex items-center justify-center w-full flex-wrap gap-10">
                    <button  className='project '>
                        <a href="">
                            <img src="" alt="" />
                            <div className="flex flex-col text-left justify-center p-5 font-inter">
                                <h1 className='text-3xl'>Fractal TREE [EM BREVE]</h1>
                                <p className='text-1xl'>...</p>
                                <div>
                                    <button><Link href="">github or website</Link></button>
                                </div>
                            </div>
                        </a>
                    </button>
                    <button  className='project scale-pj'>
                        <a href="">
                            <img src="" alt="" />
                            <div className="flex flex-col text-left justify-center p-5 font-inter">
                                <h1 className='text-3xl'>[EM BREVE]</h1>
                                <p className='text-1xl'>....</p>
                                <div>
                                    <button><Link href="">github or website</Link></button>
                                </div>
                            </div>
                        </a>
                    </button>
                    <button  className='project '>
                        <a href="">
                            <img src="" alt="" />
                            <div className="flex flex-col text-left justify-center p-5 font-inter">
                                <h1 className='text-3xl'>[EM BREVE]</h1>
                                <p className='text-1xl'>...</p>
                                <div>
                                    <button><Link href="">github or website</Link></button>
                                </div>
                            </div>
                        </a>
                    </button>
                </article>
            </div>
        </section>
        </>
    )
}