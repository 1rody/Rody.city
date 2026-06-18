' use client'

import '@/src/styles/components/footer/footer.css'
import Link from 'next/dist/client/link'
import { FaInstagram, FaXTwitter,  FaPinterest, FaLinkedin, FaGithub} from 'react-icons/fa6';

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col items-center justify-center w-full">
                <section>
                    <div className='link-section flex w-full items-left justify-between gap-10 flex-wrap'>
                        <ol>
                            <li><button><Link href="/">Back to top -&gt;</Link></button></li>
                            <li><button>Socials</button></li>
                        </ol>
                        <div className='flex gap-5'>
                            <ol>
                                <li><button><Link href="#">Linkedin</Link></button></li>
                                <li><button><Link href="#">Github</Link></button></li>
                                <li><button><Link href="#">Discord</Link></button></li>
                            </ol>
                            <ol>
                                <li><Link href="/weather">Weather</Link></li>
                                <li><Link href="/drawns">Drawns</Link></li>
                                <li><Link href="/Blog">Blog</Link></li>
                            </ol>
                        </div>
                    </div>
                    <div className='text-center md:p-0 lg:p-0 p-10'>
                        <h1>RODY</h1>
                    </div>
                    <div className='link-section text-center md:p-0 lg:p-0 p-10 flex w-full items-center dashed mt-5 justify-between gap-10 flex-wrap'>
                        <p>&copy; {new Date().getFullYear()} RODY. All rights reserved.</p>
                        <ol className='flex gap-5 flex items-center justify-center'>
                            <li><Link href="#"><FaInstagram /></Link></li>
                            <li><Link href="#"><FaXTwitter /></Link></li>
                            <li><Link href="#"><FaPinterest /></Link></li>
                            <li><Link href="#"><FaLinkedin /></Link></li>
                            <li><Link href="#"><FaGithub /></Link></li>
                        </ol>
                    </div>
                </section>
            </footer>
        </>
    )
}