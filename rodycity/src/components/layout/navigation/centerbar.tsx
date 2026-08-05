'use client'

import { usePathname } from "next/dist/client/components/navigation";
import Link from 'next/link'


export default function PapersNav() {

  const pathname = usePathname();

    return (
      <section className=" font-departure w-full overflow-hidden text-gray-50 flex flex-col items-center">
        <div className=" m-2 lg:max-w-2/5 text-sm backdrop-blur-3xl w-full items-center justify-center text-left flex flex-col">
            <section className='flex flex-col items-center justify-center w-full'>
                <div className='flex  items-center justify-between w-full'>
                    <pre className='font-departure text-xs text-sm/6 text-orange-300 mt-20'>{`
    ██████╗  ██████╗ ██████╗ ██╗   ██╗
    ██╔══██╗██╔═══██╗██╔══██╗╚██╗ ██╔╝
    ██████╔╝██║   ██║██║  ██║ ╚████╔╝   
    ██║  ██║╚██████╔╝██████╔╝   ██║   
    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝    ╚═╝
                `}</pre>
                <h2 className='text-gray-400 text-sm'>Welcome to my papers page</h2>
                </div>
                <nav className='dashed-corners w-full flex-nowrap flex items-center justify-between lg:pr-5 lg:pl-5 '>
                <ol className="flex gap-3 w-full scale-75 lg:scale-100 paper-cli flex-wrap items-left p-5 ">
                    <li><p className='text-nowrap duration-200 hover:bg-orange-300 hover:text-black'><Link href="/">[  ~/ ]</Link></p></li>
                    <li><p className='text-nowrap duration-200 hover:bg-orange-300 hover:text-black'><Link href="/socials">[ Socials ]</Link></p></li>
                </ol>
                <p className='text-sm text-orange-300 text-nowrap'>rody.city{pathname}</p>
                </nav>
            </section>
            </div>
        </section>
    )

}