
import Image from 'next/image'

export default function Stripes() {
    return (
        <>
        <section className=' '>
            <div className='xl:-bottom-100 -bottom-150  md:-bottom-150  flex gap-10 items-center overflow-hidden w-full h-120 -mr-2  justify-center z-40 absolute '>
                <div className='flex anim-scrolling  gap-0  bg-black -mt-15 -rotate-2 relative -mr-50 '>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                </div>
                <div className='flex anim-scrolling  gap-0 -ml-600 bg-black  rotate-4 relative '>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                    <Image className=' bg-black p-4' alt='stripe' src="/assets/misc/stripe.svg" width={1000} height={100}></Image>
                </div>
            </div>
        </section>
        </>
    )
}