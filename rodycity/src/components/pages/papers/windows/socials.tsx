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
        <div onPointerDown={down} onPointerMove={move} onPointerUp={up}  style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}  className="  z-50  container-articles absolute m-2 text-sm left-70 backdrop-blur-3xl items-center justify-center text-left flex flex-col">
          <nav className='w-full flex-nowrap flex items-center justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30 border-gray-500 border-b-gray-950'>
            <p className='text-sm text-gray-300 text-nowrap'>rody.city — ~/Socials</p>
            <div className='flex gap-3'>
              <p className='text-nowrap'><Link href="/">- </Link></p>
              <p className='text-nowrap'><Link href="/papers">x </Link></p>
            </div>
          </nav>
          <div className='flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full border-gray-500'>
            <h3 className='text-white flex w-fit underline'>$ MY contact & my linktree at one place</h3>
            <div>
              <Link href="/papers" className="text-gray-500 mt-30 hover:text-gray-700">
                Follow me on socials!
              </Link>
            </div>
          </div>
        </div>
    )
}