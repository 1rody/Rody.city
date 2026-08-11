'use client'

import Image from 'next/image'
import { useRef, useState } from "react";

//resumo pra eu do futuro oilhja resump constantes obivamentes de pose + funcoes que pegam se esta draggin(sim nao current = true) e nisso o offset de x e definido pelo pos, o
//ou seja o usestate define se e drag ou nao se for drag o pos muda e se o pos mudar ele executa a funcao que muda a pose das windows.
export default function Me() {
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
        <div onPointerDown={down} onPointerMove={move} onPointerUp={up} style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} className="absolute top-10  nav-pc left-10 lg:left-10 mt-10">
                    <section className='border-1  border-gray-200/10'>
                        <div className='p-3'>
                            <p>ME.jpg</p>
                        </div>
                        <div className='p-3'>
                            <Image alt='Profilepic' width={300} height={300} src="/assets/icons/pfp2.jpg"></Image>
                        </div>
                    </section>
        </div>
    )
}