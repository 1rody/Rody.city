"use client";

import { useEffect, useState } from 'react';
import Link from 'next/dist/client/link'

import '@/src/styles/components/ui/buttons.css'
import '@/src/styles/pages/redirect/redirect.css'


export default function Redirect() {
      const [time, setTime] = useState<Date | null>(new Date()); ;
  
      useEffect(() => {
          setTime(new Date()); 
          const interval = setInterval(() => setTime(new Date()), 1000);
          return () => clearInterval(interval);
      }, []);

  return (
    <>
    <section className="h-screen w-full flex flex-col items-center ">
      <div className="w-full z-10 top-0 relative items-center">
        <Link className="w-full fixed text-center font-black dashed-stroke" href='/'>RODY.REDIRECT</Link>
      </div>
      <ol className="flex h-screen w-full p-10 items-center justify-center z-5 flex-col gap-5 text-center">
        <div>
            <h1>{time ? time.toLocaleTimeString() : "--:--:--"}</h1>
        </div>
        <li className="dashed-primary  w-full lg:w-2xl  md:w-xl">
          <Link href='/pages/draws'>Drawns</Link>
        </li>
        <li className="dashed-primary  w-full  lg:w-2xl  md:w-xl">
          <Link href='/pages/weather'>weather Monitor</Link>
        </li>
        <li className="dashed-primary  w-full  lg:w-2xl  md:w-xl">
          <Link href='/pages/socials'>Linktree</Link>
        </li>
        <li className="dashed-primary  w-full  lg:w-2xl md:w-xl">
          <Link href='/pages/blog'>Papers</Link>
        </li>
      </ol>

    </section>
    </>
  );
}
