' use client'

import '@/src/styles/components/footer/footer.css'
import Link from 'next/dist/client/link'
import Image from 'next/image'

import { FaInstagram, FaXTwitter,  FaPinterest, FaLinkedin, FaGithub} from 'react-icons/fa6';

export default function Footer() {
    return (
        <>
            <Image width={3000} height={0} className='z-20 transition-secondary' src="/assets/misc/transition2.svg" alt="transition-svg" />

            <footer className="flex flex-col items-center justify-center w-full">
                    <div className='text-center md:p-0 lg:p-0 p-10'>
                        <h1>RODY.CITY</h1>
                    </div>
                    <div className='link-section p-10 text-center items-center gap-10 flex-wrap justify-between  flex w-full mt-10'>
                        <p>&copy; {new Date().getFullYear()} RODY.CITY All rights reserved.</p>
                            <ol className='flex gap-10 flex-wrap  items-center justify-center'>
                                <li><Link className='flex items-center gap-2' href="#"><FaInstagram />Instagram</Link></li>
                                <li><Link className='flex items-center gap-2' href="#"><FaXTwitter />Twitter</Link></li>
                                <li><Link className='flex items-center gap-2' href="#"><FaPinterest />Pinterest</Link></li>
                                <li><Link className='flex items-center gap-2' href="#"><FaLinkedin />Linkedin</Link></li>
                                <li><Link className='flex items-center gap-2' href="#"><FaGithub />Github</Link></li>
                            </ol>
                        <p className='text-center w-full lg:w-fit md:w-fit sm:w-fit'><Link href="/privacy">Privacy Policy</Link></p>
                    </div>
            </footer>
        </>
    )
}