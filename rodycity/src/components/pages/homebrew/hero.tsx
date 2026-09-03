import Image from 'next/image'

export default function Hero() {
    return (

        <section className='flex items-center flex-col font-departure font-bold '>
            <section id='profile-content' className='flex w-full items-center justify-center '>
                <div className='flex gap-10 flex-col items-center justify-center lg:w-1/3 w-full'>
                    <article className='border-1 w-full border-gray-200/10 flex flex-col '>
                        <h3 className='bg-gray-100 text-black flex w-fit mb-5 underline'> <Image className="" src="/assets/icons/Whoami.svg" width={20} height={20} alt="Whoami" /> WHOAMI </h3>
                        <p className='max-w-3/3 p-5'>
                            - Welcome :&gt; This is my papers page, desgined to be like an old ascii aesthetic cult page, soo... get confortable and chekc out my knoleges and my researches for this web of ideas
                        </p>
                    </article>
                </div>
            </section>
        </section>
    )
}