import Link from "next/link";
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="font-departure justify-center  w-full overflow-hidden text-gray-50 flex flex-col items-center">
            <div className='flex flex-wrap  lg:max-w-2/5 lg:flex-nowrap w-full'>
                <article className='w-full p-5 gap-5 text-gray-400 flex flex-col'>
                    <h3 className='bg-gray-100 text-black flex w-fit underline'> <Image className="" src="/assets/icons/Whoami.svg" width={20} height={20} alt="Whoami" /> WHOAMI </h3>
                    <p className='max-w-3/3'>
                    - Welcome :&gt; This is my papers page, desgined to be like an old ascii aesthetic cult page, soo... get confortable and chekc out my knoleges and my researches for this web of ideas
                    </p>
                    <h3 className='bg-gray-100 text-black flex w-fit underline'>Changelogs ~</h3>
                    <p className='max-w-3/3'>
                    [01/08/2026] Now we have an new design and an more responsive ui for mobile users!
                    </p>
                </article>
            </div>
        </section>
    )
}