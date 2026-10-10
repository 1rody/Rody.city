'use client'
//base imports
import Image from "next/image";
import Link from "next/link";

export default function SocialsNav() {
        
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
        <nav className='flex w-full items-center justify-center'>
            <ol className='flex w-full justify-around items-center  text-center p-4'>
                {socials.map((social) => (
                    <li key={social.name}className='bg-white/5 p-2 w-full flex items-center justify-center backdrop-blur-3xl duration-200 hover:bg-black hover:text-black hover:invert-100 first:rounded-l-full last:rounded-r-full'>
                        <Link href={social.url}>
                            <Image alt={`${social.name} icon`} width={28} height={28} src={social.icon} />
                        </Link>
                    </li>
                ))}
                        
            </ol>
        </nav>
    )
}