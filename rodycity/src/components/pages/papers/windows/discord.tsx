import Link from "next/link";

export default function discordWindow() {
    return (
<aside className="fixed top-0 nav-pc font-departure text-gray-50 absolute z-20">
        <div className="container-articles m-2 text-sm backdrop-blur-3xl items-center justify-center text-left flex flex-col">
          <nav className='w-full flex-nowrap flex items-center justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30 border-gray-500 border-b-gray-950'>
            <p className='text-sm text-gray-300 text-nowrap'>rody.city — ~/Discord server</p>
            <div className='flex gap-3'>
              <p className='text-nowrap'><Link href="/">- </Link></p>
              <p className='text-nowrap'><Link href="/papers">x </Link></p>
            </div>
          </nav>
          <div className='flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full border-gray-500'>
            <h3 className='bg-gray-100 text-black flex w-fit underline'>$ CYTHON COMMUNITY</h3>
            <div>
              <p>
                An developer community for <br /> sharing ideas and grow everything!
              </p>
              <Link href="/papers" className="text-gray-500 mt-30 hover:text-gray-700">
                Dive in!
              </Link>
            </div>
          </div>
        </div>
        <div className="container-articles m-2 text-sm left-70 backdrop-blur-3xl items-center justify-center text-left flex flex-col">
          <nav className='w-full flex-nowrap flex items-center justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30 border-gray-500 border-b-gray-950'>
            <p className='text-sm text-gray-300 text-nowrap'>rody.city — ~/Socials</p>
            <div className='flex gap-3'>
              <p className='text-nowrap'><Link href="/">- </Link></p>
              <p className='text-nowrap'><Link href="/papers">x </Link></p>
            </div>
          </nav>
          <div className='flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full border-gray-500'>
            <h3 className='text-white flex w-fit underline'>$ MY contact & my linktree at one place</h3>
            <div>
              <Link href="/papers" className="text-gray-500 mt-30 hover:text-gray-700">
                Follow me on socials!
              </Link>
            </div>
          </div>
        </div>
      </aside>
    )
}