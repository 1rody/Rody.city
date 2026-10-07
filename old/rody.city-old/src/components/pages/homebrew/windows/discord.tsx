'use client'

import Link from "next/link";
import { useRef, useState } from "react";

export default function DiscordWindow() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const offset = useRef({ x: 0, y: 0 });
    const dragging = useRef(false);
    // visibilidade da janela (o X só alterna esse estado, sem navegar)
    const [open, setOpen] = useState(true);

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

    // se fechou (X), não renderiza nada
    if (!open) return null;


    return (
        <div style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} className=" font-departure font-bold z-50 container-articles absolute m-2 text-sm backdrop-blur-3xl lg:scale-100  items-center md:scale-75 justify-center text-left flex lg:right-10 nav-pc top-90 flex-col">
          <nav onPointerDown={down} onPointerMove={move} onPointerUp={up} className='w-full flex-nowrap flex items-center z-50 justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30  border-gray-200/10 border-b-gray-950 cursor-grab active:cursor-grabbing'>
            <p className='text-sm text-gray-300 text-nowrap'>rody.city — ~/Discord server</p>
            <div className='flex gap-3'>
              <p className='text-nowrap'><Link href="/">- </Link></p>
              <p className='text-nowrap'><button type="button" onPointerDown={(e) => e.stopPropagation()} onClick={() => setOpen(false)}>x </button></p>
            </div>
          </nav>
          <div className='flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full border-gray-200/10'>
            <h3 className='bg-gray-100 text-black flex w-fit underline'>$ CYTHON COMMUNITY</h3> 
            <div>
              <p>
                <br /><br />
                My community server.
              </p>
              <Link href="/homebrew" className="text-gray-500 mt-30 hover:text-gray-700">
                Join us
              </Link>
            </div>
          </div>
        </div>
    )
}