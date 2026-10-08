'use client'

//basic imports
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className=" relative flex-col z-6 flex -mt-20  w-full items-center justify-center overflow-hidden bg-white p-20 ">      
              <div id="project-section" className=" flex gap-10 relative mb-10  justify-\ no-select w-full z-10">
                <Link href="/"  className="bg-black hover:scale-105 duration-200 w-150 h-100">

                </Link>
                <Link href="/"  className="bg-black hover:scale-105 duration-200 w-150 h-100">

                </Link>
                <Link href="/"  className="bg-black hover:scale-105 duration-200 w-150 h-100">

                </Link>
            </div>
            <h2 className="text-black z-20 font-black w-full text-left items-center justify-center relative bottom-0 text-9xl">DIVE IN <br />AN OCEAN OF PERSPECTIVES</h2>
        </section>
    )
}
