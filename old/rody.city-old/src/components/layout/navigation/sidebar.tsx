'use client'

import Link from "next/link";
import { useState } from "react";

import { downloadLinktree } from "@/src/lib/linktreeZip";
import type { SocialLink, TreeData } from "@/src/lib/linktreeZip";

type TextField = Exclude<keyof TreeData, "socials">;

type SidebarProps = {
    tree: TreeData;
    setTree: (tree: TreeData) => void;
};

export default function Sidebar({ tree, setTree }: SidebarProps) {

    const [building, setBuilding] = useState(false);
    const [open, setOpen] = useState(false);

    const fields = [
        { key: "bgImage", placeholder: "Background url" },
        { key: "bannerImage", placeholder: "Banner url" },
        { key: "name", placeholder: "Your name" },
        { key: "introductionPhrase", placeholder: "Short line under your name" },
        { key: "starterPhrase", placeholder: "Greeting" },
        { key: "description", placeholder: "About you" }
    ] as const;

    const socialFields = [
        { key: "name", placeholder: "Social name" },
        { key: "url", placeholder: "Social url" },
        { key: "icon", placeholder: "Icon url" }
    ] as const;

    function update(key: TextField, value: string) {
        setTree({ ...tree, [key]: value });
    }
    function updateSocial(index: number, key: keyof SocialLink, value: string) {
        setTree({ ...tree, socials: tree.socials.map((social, i) => i === index ? { ...social, [key]: value } : social) });
    }
    function addSocial() {
        setTree({ ...tree, socials: [...tree.socials, { name: "", url: "", icon: "" }] });
    }
    function removeSocial(index: number) {
        setTree({ ...tree, socials: tree.socials.filter((_, i) => i !== index) });
    }
    async function download() {
        setBuilding(true);
        await downloadLinktree(tree);
        setBuilding(false);
    }
    return (
        <>
            <button   type="button"  onClick={() => setOpen(!open)} className="fixed top-4 right-4 z-60 lg:hidden rounded-xl p-3 backdrop-blur-xl glassmorphism-secondary duration-200" >
                {open ? "close" : "edit"}
            </button>

            <aside className={`backdrop-blur-xl h-[calc(100dvh-1rem)] z-50 m-2 fixed top-0 left-0 w-[calc(100%-1rem)] lg:w-100 duration-200 glassmorphism-secondary items-center rounded-4xl flex flex-col
                ${open ? "translate-x-0" : "-translate-x-[105%]"} lg:translate-x-0`}>
                <div className="flex flex-col w-full items-center justify-center p-8 pb-4">
                    <h2 className="text-2xl font-bold"> UNSEEN.TREE</h2>
                </div>
                <form data-lenis-prevent onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full flex-1 min-h-0 overflow-y-auto overscroll-contain justify-start items-center text-center p-4 backdrop-blur-xl glassmorphism-primary">
                    {fields.map((field) => ( <input key={field.key} type="text" value={tree[field.key]}onChange={(e) => update(field.key, e.target.value)}  placeholder={field.placeholder} className="w-full p-2 rounded-xl mb-4 text-white backdrop-blur-2xl bg-white/5duration-200 placeholder:text-white/40    focus:bg-white/10 focus:outline-none" />  ))}
                    <h3 className="w-full text-left text-sm mb-2 text-white/60 font-(family-name:--font-jetbrains-mono)">SOCIALS</h3>
                    {tree.socials.map((social, index) => (
                        <fieldset key={index} className="w-full flex flex-col gap-2 mb-4 p-2 rounded-xl bg-white/5">
                            {socialFields.map((field) => ( <input  key={field.key} type="text" value={social[field.key]} onChange={(e) => updateSocial(index, field.key, e.target.value)}  placeholder={field.placeholder} className="w-full p-2 rounded-xl text-white backdrop-blur-2xl bg-white/5duration-200 placeholder:text-white/40   focus:bg-white/10 focus:outline-none"  /> ))}
                             <button type="button" onClick={() => removeSocial(index)} className="text-sm text-red-400 duration-200 hover:text-red-300">remove</button>
                        </fieldset>
                    ))}
                    <button type="button" onClick={addSocial} className="w-full p-2 rounded-xl bg-white/5 duration-200 hover:bg-white/10">+ add social</button>
                </form>
                <div className="flex flex-col w-full items-center gap-3 justify-center p-8">
                    <button type="button" onClick={download} disabled={building} className="bg-white rounded-xl p-2 w-full text-center text-black duration-200 disabled:opacity-50">
                        {building ? "Building zip..." : "Download linktree"}
                    </button>
                    <Link className="bg-white rounded-xl p-2 w-full text-center text-black" href="/">Back to rody.city</Link>
                </div>
            </aside>
        </>
    );
}
