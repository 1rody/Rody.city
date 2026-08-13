"use client";

import Link from 'next/link'
import Image from 'next/image'



export default function Profile() {

    return (
        <>
            <main className='flex items-center flex-col font-departure font-bold '>
                    <section id='profile-header' className='flex   lg:w-1/3 w-full  text-5xl items-center justify-center'>
                        <div className='border-b-1 w-2/4 border-b-gray-200/30 p-1'>

                        </div >
                        <p>RO_DY</p>
                        <div className='border-b-1 w-2/4 border-b-gray-200/30 p-1'>

                        </div>
                    </section>
                    <section id='profile-content' className='flex mb-10 mt-20 w-full items-center justify-center '>
                        <div className='flex gap-10 flex-col items-center justify-center lg:w-1/3 w-full'>
                            <article className='border-1 w-full border-gray-200/10 flex flex-col '>
                                <div className='flex  border-b-1 border-b-gray-200/10 p-3 mb-5 justify-between w-full'>
                                    <h2>[0x00]</h2>
                                    <p>RODY</p>
                                </div>
                                <div className='p-3'>
                                    <p>
                                        WELCOME TO MY PROFILE! <br /><br />

                                        <Link className='hover:text-red-500' href='/'>- BACK TO LANDING</Link><br />
                                        <Link className='hover:text-red-500' href='/'>- BACK CHECK MY PAPERS</Link>
                                    </p>
                                </div>
                            </article>
                            <article className='border-1 w-full border-gray-200/10 flex flex-col '>
                                <div className='flex  border-b-1 border-b-gray-200/10 p-3 mb-5 justify-between w-full'>
                                    <h2>[DC]</h2>
                                    <p>LOWN COMMUNITY</p>
                                </div>
                                <div className='p-3'>
                                    <p>
                                        CHECK MY DISCORD SERVER. <br /><br />

                                        <Link className='hover:text-red-500' href='/'>- Discord server</Link><br />
                                    </p>
                                </div>
                            </article>
                        </div>
                    </section>
            </main>
        </>
    );
}