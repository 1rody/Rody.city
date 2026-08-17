'use client'

import Stripes from '@/src/components/layout/misc/stripes'

export default function Journey() {
    return (
        <>
            <Stripes />
            <section id="journey" className='flex lg:gap-30 gap-5 pt-50 bg-black pb-50 flex-wrap  lg:mt-300 md:mt-320 mt-300 z-10 overflow-hidden justify-center  w-full'>
                <div  className="mt-60">
                    <h2 className="text-white text-8xl">making</h2>
                    <h2 className="text-white text-8xl">systems</h2>
                    <h2 className="text-white text-8xl">that</h2>
                    <h2 className="text-white text-8xl">adapt</h2>
                    <h2 className="text-white text-8xl">for you</h2>
                </div>
                <div className="lg:mt-70  md:mt-70  mt-20 flex text-white/50 flex-wrap lg:flex-nowrap gap-5">
                    <div className='flex  flex-col  w-5/5  '>
                        <div className='border-l-white  border-l-10 flex   p-2'>
                        </div>
                        <div className='border-l-white/50 border-l-1 ml-1 p-4'>
                            <h2>2026 — NOW</h2>
                            <p>
                                <strong className="text-white">Working on Jurasolvo, staff member at NEXTFUR (commissions open), and studying at UCSAL</strong> <br />
                                Currently studying Software Engineering at UCSAL and working as  <br />an intern with automations and front-end at Jurasolvo.
                            </p>
                        </div>
                        <div className='border-l-white  border-l-10 flex   p-2'>
                        </div>
                        <div className='border-l-white/50 border-l-1 ml-1 p-4'>
                            <h2>2025 — 2026</h2>
                            <p>
                                <strong className="text-white">Working as a freelancer and studying at Rocketseat</strong> <br />
                                Studying at Rocketseat — Next.js course — and finishing the Prompt Engineering course.
                            </p>
                        </div>
                        <div className='border-l-white border-l-10 flex   p-2'>
                        </div>
                        <div className='border-l-white/50 border-l-1 ml-1 p-4'>
                            <h2>2023 — 2025</h2>
                            <p>
                                <strong className="text-white">Working with Minecraft server management and deployment, and studying at Origamid</strong> <br />
                                Studying at Origamid — UI and UX.
                            </p>
                        </div>
                        <div className='border-l-white border-l-10 flex   p-2'>
                        </div>
                        <div className='border-l-white/50 border-l-1 ml-1 p-4'>
                            <h2>2021 — 2023</h2>
                            <p>
                                <strong className="text-white">My first contact with the development world, studying at Origamid</strong> <br />
                                Studying at Origamid — HTML, CSS and JS basics.
                            </p>
                        </div>
                        <div className='border-l-white rounded-full border-l-10 flex   p-2'>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}