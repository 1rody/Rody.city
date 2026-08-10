'use client'

import Link from "next/link";
import { useRef, useState } from "react";


export default function SocialsWindow() {

    const [pos, setPos] = useState({ x: 0, y: 0 });
    const offset = useRef({ x: 0, y: 0 });
    const dragging = useRef(false);

  function down(e: React.PointerEvent) {
    dragging.current = true;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function move(e: React.PointerEvent) {
    if (!dragging.current) return;
    setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
  }
  function up() { dragging.current = false; }
   
    return (
        <div onPointerDown={down} onPointerMove={move} onPointerUp={up}  style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}  className=" font-departure font-bold z-50  container-articles absolute m-2 text-sm right-10 top-10 nav-pc backdrop-blur-3xl md:scale-75 items-center justify-center text-left flex flex-col">
          <nav className='w-full flex-nowrap flex items-center justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30  border-gray-200/10'>
            <p className='text-sm text-gray-300 text-nowrap'>rody.city — ~/Socials</p>
            <div className='flex gap-3'>
              <p className='text-nowrap'><Link href="/">- </Link></p>
              <p className='text-nowrap'><Link href="/papers">x </Link></p>
            </div>
          </nav>
          <div className='flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full  border-gray-200/10'>
                    <pre className='font-departure text-xs text-sm/6 text-orange-300 '>{`
    ██████╗  ██████╗ ██████╗ ██╗   ██╗
    ██╔══██╗██╔═══██╗██╔══██╗╚██╗ ██╔╝
    ██████╔╝██║   ██║██║  ██║ ╚████╔╝   
    ██║  ██║╚██████╔╝██████╔╝   ██║   
    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝    ╚═╝
                `}</pre>
          </div>
        </div>
    )
}