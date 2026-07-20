import Link from "next/link";

export default function HeroNav() {
    return (
        <>
        <img src="/assets/misc/Corner_dark.svg" width={33} className="fixed z-50 nav-pc  right-88 top-2 dark:hidden" alt="" />
        <img src="/assets/misc/Corner_white.svg" width={33} className="fixed z-50 nav-pc  right-88 top-2 hidden dark:block" alt="" />
            <nav className="flex z-50  -mt-2 -mx-5 rounded-3xl nav-pc fixed p-5 bg-(--foreground)  right-0 font-(family-name:--font-jetbrains-mono) lg:px-20  gap-10 ">
                <Link className="text-sm hover:text-purple-600 transition-all mix-blend-difference duration-120 hover:line-through" href='/blog'>Blog</Link>
                <Link className="text-sm  hover:text-purple-600 transition-all mix-blend-difference duration-120 hover:line-through"  href='/redirect'>Tools</Link>
                <Link className="text-sm  hover:text-purple-600 transition-all mix-blend-difference duration-120 hover:line-through"  href='/pages/socials'>Socials</Link>
            </nav>
        <img src="/assets/misc/Corner_white.svg" width={35} className="fixed z-50 nav-pc  right-2 top-13" alt="" />
        <img src="/assets/misc/Corner_white.svg" width={35} className="fixed z-50 nav-pc  right-2 top-13" alt="" />


        </>
    );
}