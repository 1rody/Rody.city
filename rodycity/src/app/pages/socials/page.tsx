"use client";

import { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';

import '@/src/styles/components/ui/bg.css'
import '@/src/styles/pages/socials/socials.css';

export default function socials() {

    const [discordStatus, setDiscordStatus] = useState({online:0, total: 0});
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        fetch('/api/discord') 
        .then((res) => res.json())
        .then((data) => {
            if(!data.error) {
                setDiscordStatus({
                    online: data.online,
                    total: data.total,
                });
            };
            setLoading(false);
        }).catch((err) => {
            console.error("Erro ao buscar dados do Discord:", err);
            setLoading(false);
        });
    }, []); 
  return (
    <>
    <img src="/assets/backgrounds/socials.gif" className='w-full h-screen blur-sm dark:opacity-40' alt="" />
    <section id="socials-container" className="h-screen absolute z-2 scale-95 lg:scale-100  theme-force-dark w-full flex items-center justify-center">
        <div className="socials glassmorphism-secondary items-center justify-center rounded-4xl flex flex-col">
            <div className='flex flex-col w-full items-center justify-center p-3'>
                <div className='text-center pt-10 gap-2'>
                    <Link href="/" className='font-black text-5xl'>RODY</Link>
                    <p className='font-(family-name:--font-jetbrains-mono)'><span>Welcome to my social tree!</span></p>
                </div>
            </div>
            <div className='flex mt-5 p-5 items-center justify-center w-full'>
                <ol className='flex gap-2'>
                    <li className='tech-1 w-full '>
                        <Link href=''>Instagram</Link>
                    </li>
                    <li className='tech-2 w-full'>
                        <Link href=''>X</Link>
                    </li>
                    <li className='tech-3 w-full'>
                        <Link href=''>Github</Link>
                    </li>
                    <li className='tech-4 w-full'>
                        <Link href=''>Linkedin</Link>
                    </li>
                </ol>
            </div>
            <article className='p-3'>

                <p className='mt-10 p-5 font-(family-name:--font-jetbrains-mono) rounded-2xl glassmorphism-secondary'>
                    Hello, Im <strong>rody</strong>! <br /><br /> im a web developer and designer, I love to create web solutions and functional websites.  <br /> <br />I have a passion for learning new technologies and improving my skills.
                </p>
            </article>
            <div className='discord-container w-full  p-5 '>
                <div className='flex flex-col p-4 rounded-3xl glassmorphism-secondary gap-5'>
                    <div className='flex gap-2 items-center justify-between'>
                        <img className='server-pic dark:invert-0 invert-100' src="/assets/icons/RodyLogo.svg" alt="Camel Icon" />
                        <div>
                            <h3 className='text-2xl'>LOWN</h3>
                            <div className='online-container flex flex-wrap lg:flex md:flex text-xs gap-3'>
                                {loading ?  ( <span>Carregando...</span> ) :
                                (
                                    <>
                                        <span>{discordStatus.online}online</span>
                                        <p>of</p>
                                        <span>{discordStatus.total}members</span>
                                    </>
                                )};
                            </div>
                        </div>
                            <div className='p-1 text-xs'>
                                <button className='discord-btn '><Link href=''>Dive in!</Link></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
