import Link from "next/link";

export default function HeroNav() {
    return (
        <nav className="flex z-20 mt-3 nav-pc font-(family-name:--font-jetbrains-mono) px-25 gap-10 ">
            <Link className="text-sm hover:text-red-500 transition-all duration-120 hover:line-through" href='/blog'>Blog</Link>
            <Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through"  href='/redirect'>Tools</Link>
            <Link className="text-sm  hover:text-red-500 transition-all duration-120 hover:line-through"  href='/pages/socials'>Socials</Link>
        </nav>
    );
}