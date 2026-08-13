'use client'

import Link from "next/link";
import { useRef, useState } from "react";

//resumo pra eu do futuro oilhja resump constantes obivamentes de pose + funcoes que pegam se esta draggin(sim nao current = true) e nisso o offset de x e definido pelo pos, o
//ou seja o usestate define se e drag ou nao se for drag o pos muda e se o pos mudar ele executa a funcao que muda a pose das windows.
export default function StatusWindow() {
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
        <div onPointerDown={down} onPointerMove={move} onPointerUp={up} style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} className=" font-departure font-bold z-50 container-articles absolute m-2 text-sm backdrop-blur-3xl lg:scale-100  items-center md:scale-75 justify-center text-left flex lg:left-10 nav-pc top-120 flex-col">
          <nav className='w-full flex-nowrap flex items-center z-50 justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30  border-gray-200/10 border-b-gray-950'>
            <p className='text-sm text-gray-300 text-nowrap'>rody.city — STATUS</p>
            <div className='flex gap-3'>
              <p className='text-nowrap'><Link href="/">- </Link></p>
              <p className='text-nowrap'><Link href="/papers">x </Link></p>
            </div>
          </nav>
          <div className='flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full border-gray-200/10'>
            <div>
              <p>
                $ ./status <br /><br />

                <span className="text-red-500">host</span>   ....... rody.city <br />
                <span className="text-red-500">served</span>   ..... vercel <br />
                <span className="text-red-500">updated</span>   .... 2026-08-12 <br />
                <span className="text-red-500">engine</span>   ..... NEXTJS <br />
              </p>
            </div>
          </div>
        </div>
    )
}