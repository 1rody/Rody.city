import '@/src/styles/pages/socials/socials.css';
import Link from 'next/dist/client/link'

import '@/src/styles/components/ui/bg.css'

export default function socials() {
  return (
    <>
    <section id="socials-container" className="h-screen w-full flex items-center justify-center">
        <div className="socials glassmorphism items-center justify-center rounded-4xl flex flex-col">
            <div className='flex flex-col w-full items-center justify-center p-3'>
                <img className="banner rounded-3xl" src="/assets/backgrounds/giphy.gif" alt="Rody" />
                <div className='text-center p-5 gap-2'>
                    <Link href="/" className='font-black text-5xl'>RODY</Link>
                    <p><span>Welcome to my social tree!</span></p>
                </div>
            </div>
            <article className='p-5'>
                <div className="stacks flex gap-5 items-center justify-around">
                    <img src="/assets/icons/icons8-nextjs.svg" alt="Nextjs" />
                    <img src="/assets/icons/icons8-java.svg" alt="Java" />
                    <img src="/assets/icons/icons8-css3.svg" alt="Css" />
                    <img src="/assets/icons/icons8-typescript.svg" alt="Typescript" />
                    <img src="/assets/icons/icons8-javascript.svg" alt="Javascript" />
                </div>
                <p className='mt-10'>
                    Hello, Im <strong>rody</strong>! <br /><br /> im a web developer and designer, I love to create beautiful and functional websites. I have a passion for learning new technologies and improving my skills. I am always looking for new challenges and opportunities to grow as a developer.
                </p>
            </article>
            <div className='flex mt-5 items-center justify-center w-full'>
                <ol className='flex gap-5'>
                    <li className='hero-primary w-full'>
                        <Link href=''>Instagram</Link>
                    </li>
                    <li className='hero-primary w-full'>
                        <Link href=''>X</Link>
                    </li>
                    <li className='hero-primary w-full'>
                        <Link href=''>Discord</Link>
                    </li>
                    <li className='hero-primary w-full'>
                        <Link href=''>Portfolio</Link>
                    </li>
                </ol>
            </div>
            <div>

            </div>
        </div>
    </section>
    </>
  );
}
