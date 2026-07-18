import Link from "next/link";

export default function HeroNav() {
    return (
        <nav className="flex z-50 mix-blend-difference mt-3 nav-pc fixed  right-0 font-(family-name:--font-jetbrains-mono) lg:px-20  gap-10 ">
            <Link className="text-sm hover:text-purple-600 transition-all duration-120 hover:line-through" href='/blog'>Blog</Link>
            <Link className="text-sm  hover:text-purple-600 transition-all duration-120 hover:line-through"  href='/redirect'>Tools</Link>
            <Link className="text-sm  hover:text-purple-600 transition-all duration-120 hover:line-through"  href='/pages/socials'>Socials</Link>
        </nav>
    );
}