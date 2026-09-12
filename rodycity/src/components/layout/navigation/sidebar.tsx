'use client'

import Link from "next/dist/client/link";

export default function Sidebar() {
    return (
        <aside className="backdrop-blur-xl h-screen z-50 m-2 fixed w-100 duration-200 glassmorphism-secondary items-center rounded-4xl flex flex-col">
            <div className="flex flex-col w-full items-center justify-center p-8">
                <h2 className="text-2xl font-bold mb-4"> UNSEEN.TREE</h2>
            </div>
            <ol className="flex flex-col w-full justify-around items-center  text-center p-4 backdrop-blur-xl glassmorphism-primary">
            </ol>                
            <div className="flex flex-col w-full items-center gap-3 justify-center p-8">
                <Link className="bg-white rounded-xl p-2 w-full text-center text-black" href="/">Download your Linktree.</Link>
                <Link className="bg-white rounded-xl p-2 w-full text-center text-black" href="/">Back to rody.city</Link>
            </div>
        </aside>
    );
}