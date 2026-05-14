
import '@/app/styles/utility/glassmorphism.css'
import './hero.css'

import Image from 'next/image'

import RodyLogo from '@/public/assets/rody.svg'

import instagram from '@/public/assets/icons8-instagram-logo-50.png'
import discord from '@/public/assets/icons8-discord-50.png'
import xtwitter from '@/public/assets/icons8-x-50.png'
import city from '@/public/assets/icons8-website-50.png'


export default function introduction() {
    return (
        <>
            <div className='background'></div>
            <section className=" items-center flex  justify-center w-full">
                <section id='rodytree' className="blur-glass z-50 mt-5">
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col items-center justify-center mt-4 gap-5'>
                        <div className='profile-pic '>
                            <Image src={RodyLogo} alt="Profile-pic"  />
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <h1 className='font-erika text-4xl'>RODY</h1>
                            <p className='font-jetbrains'>~/ Always online!</p>
                        </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <span></span>
                            <div className=' items-center justify-center flex gap-5'>
                                <button className='p-2'>
                                    <a href="">
                                        <Image src={instagram} width={28} height={28} alt="Social Media Logo" />
                                    </a>
                                </button>
                                <button className='p-2'>
                                    <a href="">
                                        <Image src={discord} width={28} height={28} alt="Social Media Logo" />
                                    </a>
                                </button>
                                <button className='p-2'>
                                    <a href="">
                                        <Image src={xtwitter} width={28} height={28} alt="Social Media Logo" />
                                    </a>
                                </button>
                                <button className='p-2'>
                                    <a href="/">
                                        <Image src={city} width={28} height={28} alt="Social Media Logo" />
                                    </a>
                                </button>
                            </div>
                            <span className='mb-5'></span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='flex flex-col w-full font-jetbrains gap-2 mb-5'>
                                <button className='flex items-center justify-between p-5'>
                                        <div className='flex gap-2'>
                                            <Image src={instagram} width={38} height={28} alt="Social Media Logo" />
                                            <div className='flex justify-center flex-col text-left'>
                                                <h1>CamelCommunity</h1>
                                                <p>An cool Description...</p>
                                            </div>
                                        </div>
                                        <a className='redirect' href="">ENTRAR</a>
                                </button>
                                <button className='flex items-center justify-between p-5'>
                                        <div className='flex gap-2'>
                                            <Image src={instagram} width={38} height={28} alt="Social Media Logo" />
                                            <div className='flex flex-col justify-center text-left'>
                                                <h1>NextFur</h1>
                                                <p>From furryes to furryes</p>
                                            </div>
                                        </div>
                                        <a className='redirect' href="">ENTRAR</a>
                                </button>
                            </div>
                            <article className='blur-glass'>
                                <p>
                                    <span>
                                        Sobre mim
                                    </span>
                                    <br /><br />
                                    Hi, I'm Rodolfo, but you can call me Rody. I'm a passionate front-end developer dedicated to building innovative interfaces using modern technologies like Next.js, React, and EJS. Currently,
                                </p>
                            </article>
                        </div>
                        <div className='flex mt-6'>
                            <iframe src="https://open.spotify.com/embed/playlist/6slqYj7NKlgRRq7AFkgx1N?utm_source=oembed" ></iframe>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}