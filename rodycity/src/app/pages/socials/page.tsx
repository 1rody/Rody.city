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
    }, []); // array vazio pra carregar apenas 1 vez por render
  return (
    <>
    <section id="socials-container" className="h-screen theme-force-dark w-full flex items-center justify-center">
        <div className="socials glassmorphism-secondary items-center justify-center rounded-4xl flex flex-col">
            <div className='flex flex-col w-full items-center justify-center p-3'>
                <img className="banner rounded-3xl" src="/assets/backgrounds/giphy.gif" alt="Rody" />
                <div className='text-center p-5 gap-2'>
                    <Link href="/" className='font-black text-5xl'>RODY</Link>
                    <p><span>Welcome to my social tree!</span></p>
                </div>
            </div>
            <article className='p-5'>
                <div className="stacks glassmorphism p-5 rounded-2xl flex gap-5 items-center justify-around">
                    <img src="/assets/icons/icons8-nextjs.svg" alt="Nextjs" />
                    <img src="/assets/icons/icons8-java.svg" alt="Java" />
                    <img src="/assets/icons/icons8-css3.svg" alt="Css" />
                    <img src="/assets/icons/icons8-typescript.svg" alt="Typescript" />
                    <img src="/assets/icons/icons8-javascript.svg" alt="Javascript" />
                </div>
                <p className='mt-10 p-5  rounded-2xl glassmorphism-secondary'>
                    Hello, Im <strong>rody</strong>! <br /><br /> im a web developer and designer, I love to create web solutions and functional websites.  <br /> <br />I have a passion for learning new technologies and improving my skills.
                </p>
            </article>
            <div className='flex mt-5 p-5 items-center justify-center w-full'>
                <ol className='flex gap-5'>
                    <li className='hero-primary w-full'>
                        <Link href=''>Instagram</Link>
                    </li>
                    <li className='hero-primary w-full'>
                        <Link href=''>X</Link>
                    </li>
                    <li className='hero-primary w-full'>
                        <Link href=''>Github</Link>
                    </li>
                    <li className='hero-primary w-full'>
                        <Link href=''>Linkedin</Link>
                    </li>
                </ol>
            </div>
            <div className='discord-container w-full  p-5 '>
                <div className='flex flex-col p-4 rounded-3xl glassmorphism-secondary gap-5'>
                    <div className='flex gap-2 items-center justify-between'>
                        <img className='server-pic' src="/assets/icons/icons8-nextjs.svg" alt="Camel Icon" />
                        <div>
                            <h3 className='text-2xl'>Camel community</h3>
                            <div className='online-container text-xs flex gap-5'>
                                {loading ?  ( <span>Carregando...</span> ) :
                                (
                                    <>
                                        <span>{discordStatus.online} online online</span>
                                        <p>of</p>
                                        <span>{discordStatus.total} members</span>
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
