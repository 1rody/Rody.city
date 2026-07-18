"use client";

import { useEffect, useState } from 'react';
import Link from 'next/dist/client/link'

import '@/src/styles/components/ui/buttons.css'


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
      <div className="w-full z-10 top-0 relative items-center gap-10 flex  ">
        <Link className="w-full  text-center font-black dashed-stroke" href='/'>Back to landing </Link>
        <Link className="w-full  text-center font-black dashed-stroke" href='/socials'>Socials </Link>
      </div>

    </section>
    </>
  );
}
