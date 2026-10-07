'use client'


import Image from 'next/image'

export default function Hero() {
    return (

        <section className='flex items-center flex-col font-departure font-bold '>
            <section id='profile-content' className='flex w-full items-center justify-center '>
                <div className='flex gap-10 flex-col items-center justify-center lg:w-1/3 w-full'>
                    <article className='border-1 w-full border-gray-200/10 flex flex-col '>
                        <h3 className='bg-gray-100 text-black flex w-fit mb-5 underline'> <Image className="" src="/assets/icons/Whoami.svg" width={20} height={20} alt="Whoami" /> WHOAMI </h3>
                        <p className='max-w-3/3 p-5'>
                            -&gt; These are my papers, kept in an old ascii / zine style. Settle in and read through my notes and research.
                        </p>
                    </article>
                </div>
            </section>
        </section>
    )
}