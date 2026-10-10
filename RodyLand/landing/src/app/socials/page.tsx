'use client'
//base imports
import Image from "next/image";
import Link from "next/link";

//sections
import SocialsNav from "@/src/components/layout/navigation/SocialBar"

export default function Socials() {

    const bgImage = "/assets/backgrounds/social.gif";
    const bannerImage = "/assets/backgrounds/giphy.gif";

    const name = "RODY";
    const introductionPhrase = "My links in one place.";

    const description = "I build websites and interfaces. Currently studying Software Engineering and working with front-end and automations.";
    const starterPhrase = "Hey, I'm";

    const socials = [
            {
                name: "Instagram",
                url: "https://www.instagram.com/1r0dy_?igsh=MXV1aTZzdHRuemwxZQ%3D%3D&igsi=MXV1aTZzdHRuemwxZQ%3D%3D&utm_source=qr",
                icon: "/assets/icons/icons8-instagram.svg"
            },
            {
                name: "X/twitter",
                url: "https://x.com/1R0_DY",
                icon: "/assets/icons/icons8-x.svg"
            },
            {
                name: "Github",
                url: "https://github.com/1R0-DY",
                icon: "/assets/icons/icons8-github.svg"
            },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/rody-1r0-dy/",
                icon: "/assets/icons/icons8-linkedin.svg"
            },
            {
                name: "Pinterest",
                url: "https://www.pinterest.com/1r0dy_/",
                icon: "/assets/icons/icons8-pinterest.svg"
            } 
        ];

  return (
    <main className="flex h-screen w-full items-center justify-center flex-col">
        <Image width={0} height={0} src={bgImage} className='w-full h-screen blur-sm dark:opacity-40' alt="Background image" />
        <section id="socials-container" className="h-screen absolute z-2 scale-95 lg:scale-100 w-full flex items-center justify-center">
            <section id="card" className=" backdrop-blur-xl w-100 duration-200 glassmorphism-secondary items-center justify-center rounded-4xl flex flex-col" >
                    <header className='flex flex-col w-full items-center justify-center p-5'>
                        <div className='text-center  gap-2'>
                            <Image width={430} height={10} src={bannerImage} className='relative -mb-22 h-28 z-10 rounded-2xl' alt="Banner image" />
                            <Link href="/" className='font-bold text-5xl z-15 font-(family-name:--font-geist) relative'>{name}</Link>
                            <p className=' z-15 font-(family-name:--font-jetbrains-mono) relative'><span>{introductionPhrase}</span></p>
                        </div>
                    </header>
                    <SocialsNav/>
                    <article className=' items-center justify-center w-full flex flex-col pb-10 gap-5'>
                        <p className='mt-4 text-sm p-3 max-w-4/5 font-(family-name:--font-jetbrains-mono) rounded-2xl '>
                            {starterPhrase} <strong>{name}</strong> <br /><br /> {description}
                        </p>
                    </article>
            </section>
                < footer className='absolute bottom-10 text-center text-white'>
                    <p className='text-sm'>© {new Date().getFullYear()} {name}. Made with the unseen linktree builder — <Link className='text-blue-500' href='/linktreeCreation' target='_blank' rel='noopener noreferrer'>make yours</Link></p>
                </footer>
        </section>
    </main>
  );
}


