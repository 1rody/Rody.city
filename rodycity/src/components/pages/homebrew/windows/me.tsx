'use client'

import Image from 'next/image'

export default function Me() {

    return (
        <div  className="absolute top-10  nav-pc left-10 lg:left-10 mt-10">
            <section className='border-1  border-gray-200/10'>
                <div className='p-3'>
                    <p>ME.jpg</p>
                </div>
                <div className='p-3 no-select'>
                    <Image alt='Profilepic' width={300} height={300} src="/assets/icons/pfp2.jpg"></Image>
                </div>
            </section>
        </div>
    )
}