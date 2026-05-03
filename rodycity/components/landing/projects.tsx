import './landing_styles/projects.css';

import featured from '@/public/assets/featured.svg';
import Image from 'next/image';


export default function projects() {
    return (
        <>
        <section id="projects-showing" className="flex gap-5 flex-col w-full mb-50 items-center overflow-hidden">
            <Image className=' items-center font-erika no-event user-select-none' src={featured} width={1000} alt="FeaturedBanner" />
            <div className="project-row">
                <article className="project-container">
                    <button  className='project small'>
                        <a href="">
                            <img src="" alt="" />
                            <div className="flex flex-col text-left justify-center p-5 font-inter">
                                <h1 className='text-3xl'>Fractal TREE [EM BREVE]</h1>
                                <p className='text-1xl'>...</p>
                                <div>
                                    <button><a href="">github or website</a></button>
                                </div>
                            </div>
                        </a>
                    </button>
                    <button  className='project '>
                        <a href="">
                            <img src="" alt="" />
                            <div className="flex flex-col text-left justify-center p-5 font-inter">
                                <h1 className='text-3xl'>[EM BREVE]</h1>
                                <p className='text-1xl'>....</p>
                                <div>
                                    <button><a href="">github or website</a></button>
                                </div>
                            </div>
                        </a>
                    </button>
                    <button  className='project small'>
                        <a href="">
                            <img src="" alt="" />
                            <div className="flex flex-col text-left justify-center p-5 font-inter">
                                <h1 className='text-3xl'>[EM BREVE]</h1>
                                <p className='text-1xl'>...</p>
                                <div>
                                    <button><a href="">github or website</a></button>
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