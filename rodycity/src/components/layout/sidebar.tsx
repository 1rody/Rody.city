"use client";
import Link from "next/link";
import { useClock } from '@/src/hooks/useClock';
import { useWeather } from '@/src/hooks/useWeather';
export default function Sidebar() {

    const time = useClock();
const { temp } = useWeather();


    return (
        <aside className="flex nav-pc  z-50 fixed flex-col h-screen items-center  text-(--color-textblack) justify-between">
            <div  className="bg-foreground p-4 px-11 mb-50 rounded-br-3xl">
                    <img src="/assets/misc/Corner_white.svg" width={33} className="fixed z-1 nav-pc rotate-270 left-42 top-1" alt="" />
                    <Link href='/' className=" font-black uppercase z-25 font-(family-name:--font-geist)">Rody.city</Link>
            </div>
            <div className="container-weather top-59 opacity-0 hover:opacity-100 duration-200 transition-all fixed">
                    <img src="/assets/misc/Corner_dark.svg" width={36} className="fixed z-20 nav-pc top-51  left-1  rotate-180 " alt="" />
                    <img src="/assets/misc/Corner_white.svg" width={36} className="fixed z-20 nav-pc left-1 top-51  rotate-180  " alt="" />
                    <section className="weather-monitor bg-foreground fixed items-center justify-center flex rounded-r-3xl hover:opacity-100 duration-300 transition-all -left-20 hover:left-0 h-2/4">
                            <div className="font-mono flex-col rotate-90  flex  items-center justify-center gap-2">
                                <h2 className="mb-2 text-xl">Weather monitor</h2>
                                <span className="text-5xl">{temp !== null ? temp : "--"}°C</span>
                            </div>
                    </section>
\                    <img src="/assets/misc/Corner_white.svg" width={36} className=" z-20 nav-pc fixed rotate-270 left-1 bottom-61  " alt="" />
            </div>
            <div  className="bg-foreground  p-4 px-11 rounded-tr-3xl font-black uppercase font-(family-name:--font-geist)">
                    <img src="/assets/misc/Corner_white.svg" width={33} className="fixed z-20 nav-pc left-42 rotate-180 bottom-1 " alt="" />
                {time ? time.toLocaleTimeString() : "--:--:--"}
            </div>
            
        </aside>
    )
}


