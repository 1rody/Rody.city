"use client";
import Link from "next/link";
import { useClock } from '@/src/hooks/useClock';
import { useWeather } from '@/src/hooks/useWeather';
export default function Sidebar() {

    const time = useClock();
const { temp } = useWeather();


    return (
        <aside className="flex z-50 fixed flex-col h-screen items-center justify-between">
            <div  className="bg-foreground text-black p-4 px-11 mb-50 rounded-br-3xl">
                    <img src="/assets/misc/Corner_dark.svg" width={33} className="fixed z-20 nav-pc rotate-270 left-43 top-2 " alt="" />
                    <img src="/assets/misc/Corner_white.svg" width={33} className="fixed z-20 nav-pc rotate-270 left-43 top-2" alt="" />
                    <Link href='/' className="z-50 font-black uppercase font-(family-name:--font-geist)">Rody.city</Link>
            </div>
            <div className="container-weather top-59 opacity-0 hover:opacity-100 duration-200 transition-all fixed">
                    <img src="/assets/misc/Corner_dark.svg" width={36} className="fixed z-20 nav-pc top-51  left-1  rotate-180 " alt="" />
                    <img src="/assets/misc/Corner_white.svg" width={36} className="fixed z-20 nav-pc left-1 top-51  rotate-180  " alt="" />
                    <section className="weather-monitor bg-foreground fixed items-center justify-center flex rounded-r-3xl hover:opacity-100 duration-300 transition-all -left-20 hover:left-0 h-2/4">
                            <div className="font-mono flex-col rotate-90   text-black flex  items-center justify-center gap-2">
                                <h2 className="mb-2 text-xl">Weather monitor</h2>
                                <span className="text-5xl">{temp !== null ? temp : "--"}°C</span>
                            </div>
                    </section>
                    <img src="/assets/misc/Corner_dark.svg" width={36} className=" z-20 nav-pc fixed rotate-270 left-1 bottom-61 " alt="" />
                    <img src="/assets/misc/Corner_white.svg" width={36} className=" z-20 nav-pc fixed rotate-270 left-1 bottom-61  " alt="" />
            </div>
            <div  className="bg-foreground text-black  p-4 px-11 rounded-tr-3xl font-black uppercase font-(family-name:--font-geist)">
                    <img src="/assets/misc/Corner_dark.svg" width={33} className="fixed z-20 nav-pc  left-43 bottom-2 rotate-180 " alt="" />
                    <img src="/assets/misc/Corner_white.svg" width={33} className="fixed z-20 nav-pc left-43 rotate-180 bottom-2 " alt="" />
                {time ? time.toLocaleTimeString() : "--:--:--"}
            </div>
            
        </aside>
    )
}


