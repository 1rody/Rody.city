'use client'
//base imports
import Image from "next/image";


export default function About() {
    return (
        <>
        <Image className=" z-6 -mb-1 relative" width={3000} height={100} alt="Transition image" src="/assets/backgrounds/TransitionStroke.svg" />
        <section id="about" className="bg-white z-6 relative flex-col  w-full flex items-center justify-center">
            <div className="w-full lg:flex-nowrap flex-wrap flex items-center justify-center">
                <div className="lg:w-1/4 md:w-1/4 w-full  border-l-1 h-screen p-5 flex flex-col items-center justify-center border-black">
                    <section
                        id="bento-box"
                        className="flex flex-wrap items-start gap-2 "
                    >
                        <div className="bg-black hover:scale-105 duration-200 px-10 py-14 text-4xl font-bold text-white">
                            [NEXT.JS]
                        </div>

                        <div className="bg-black px-8  hover:scale-105 duration-200  py-10 text-3xl font-bold text-white">
                            [REACT]
                        </div>
                        <div className="bg-black hover:scale-105 duration-200  px-10 py-8 text-xl font-bold text-white">
                            [JAVA]
                        </div>
                        <div className="bg-black hover:scale-105 duration-200  px-10 py-8 text-2xl font-bold text-white">
                            [JAVASCRIPT]
                        </div>
                        <div className="bg-black hover:scale-105 duration-200  px-6 py-6 text-xl font-bold text-white">
                            [TS]
                        </div>
                        <div className="bg-black hover:scale-105 duration-200  px-8 py-12 text-xl font-bold text-white">
                            [SVELTE]
                        </div>
                        <div className="bg-black hover:scale-105 duration-200  px-6 py-6 text-xl font-bold text-white">
                            [Figma]
                        </div>
                    </section>
                </div>
                <section id="whoami" className="lg:w-1/2 md:w-1/2 w-full border-r-1 h-screen p-5 flex flex-col items-center justify-center text-right border-black">
                    <h1 className="lg:text-9xl md:text-6xl text-5xl text-black text-right w-full font-black">WHOAMI</h1>
                    <article className="text-black flex flex-col gap-4 font-medium max-w-6xl text-2xl">
                            <p id="introduction">
                                Im rodolfo, a Software Engineering student at UCSal passionate on front-end development and Ui/UX design.
                            </p>
                            <p>
                                Software Engineering student at UCSal, Front-End Developer, and UI/UX Designer. <br />
                                I study Software Engineering at UCSal and work front-end day to day. I like simple pages that load fast, read well on any screen, and don&apos;t break. My favorite stack is Next.js, but i like Svelte when the project asks for it.
                            </p>
                    </article>
                </section>
            </div>
            <div className="w-full  justify-center -mt-30 flex">
                <section id="questions" className="border-l-1 text-black h-100 justify-end text-end border-r-1 w-3/4 border-black">
                    <details className="border-b-1 border-t-1 border-black">
                        <summary className="text-2xl p-4 font-black">WHAT IS UI AND UX</summary>
                        <p className="p-4 text-xl">
                            UI (user interface) is what the user sees: the layout, the visual design, the components they interact with. It s driven by design.
                            UX (user experience) is how the interface feels to use: the navigation, the accessibility, how easily someone can accomplish what they came to do.
                            The two are related but not the same — a site can look good and still be frustrating to use. Good UX is also judged against intent: an interface built for a specialist audience has different goals than one meant for everyone. More in my paper.
                        </p>
                    </details>
                    <details className="border-b-1  border-black">
                        <summary className="text-2xl p-4 font-black">SCOPE & DEVELOPER METHOD</summary>
                        <p className="p-4 text-xl">
                            UI (user interface) is what the user sees: the layout, the visual design, the components they interact with. It s driven by design.
                            UX (user experience) is how the interface feels to use: the navigation, the accessibility, how easily someone can accomplish what they came to do.
                            The two are related but not the same — a site can look good and still be frustrating to use. Good UX is also judged against intent: an interface built for a specialist audience has different goals than one meant for everyone. More in my paper.
                        </p>
                    </details>
                    <details className="border-b-1  border-black">
                        <summary className="text-2xl p-4 font-black">PRICING TABLE</summary>
                        <p className="p-4 text-xl">
                            UI (user interface) is what the user sees: the layout, the visual design, the components they interact with. It s driven by design.
                            UX (user experience) is how the interface feels to use: the navigation, the accessibility, how easily someone can accomplish what they came to do.
                            The two are related but not the same — a site can look good and still be frustrating to use. Good UX is also judged against intent: an interface built for a specialist audience has different goals than one meant for everyone. More in my paper.
                        </p>
                    </details>

                </section>
            </div>
        </section>
        </>
    )
}