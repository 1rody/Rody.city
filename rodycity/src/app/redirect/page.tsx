"use client";

import Link from 'next/link'

interface Paper {
  name: string;
  slug: string;
  id: string;
  post_date: string;
}

export default function Redirect() {

  const papers: Paper[] = [
    { name: "Why async - renewed", slug: "async2", id: "1", post_date: "01/09/2026" },
    { name: "Java basics", slug: "java", id: "2", post_date: "11/09/2026" },
    { name: "Here my friends websites", slug: "friends", id: "3", post_date: "01/08/2026" },
    { name: "How setup a Minecraft server", slug: "mc-server", id: "11", post_date: "30/08/2025" },
    { name: "JS/TS diferences", slug: "js-ts", id: "12", post_date: "30/08/2025" },
    { name: "Why use async functions?", slug: "async", id: "13", post_date: "30/08/2025" },
    { name: "the diference of UI and UX", slug: "ui-ux", id: "14", post_date: "30/08/2025" },
  ];


  return (
    <>
    <aside className="fixed top-0 nav-pc font-departure text-gray-50 absolute z-20">
      <div className="container-articles m-2  text-sm  backdrop-blur-3xl items-center justify-center text-left flex flex-col">
        <nav className=' w-full flex-nowrap flex items-center justify-between  lg:pr-5 lg:pl-5 border-1 bg-gray-950/30 border-gray-500 border-b-gray-950 '>
          <p className='text-sm text-gray-300 text-nowrap'>rody.city — ~/Discord server</p>
          <div className='flex gap-3'>
            <p className='text-nowrap'><Link href="/">- </Link></p>
            <p className='text-nowrap'><Link href="/papers">x </Link></p>
          </div>
        </nav>
        <div className='flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full border-gray-500'>
              <h3 className='bg-gray-100 text-black flex w-fit underline'>$ CYTHON COMMUNITY</h3>
              <div>
                <p className=''>
                  An developer community for <br /> sharing ideas and grow everything!
                </p>
                <Link href="/papers" className="text-gray-500 mt-30 hover:text-gray-700">
                  Dive in!
                </Link>
              </div>
        </div>
      </div>
      <div className="container-articles m-2  text-sm  left-70 backdrop-blur-3xl items-center justify-center text-left flex flex-col">
        <nav className=' w-full flex-nowrap flex items-center justify-between  lg:pr-5 lg:pl-5 border-1 bg-gray-950/30 border-gray-500 border-b-gray-950 '>
          <p className='text-sm text-gray-300 text-nowrap'>rody.city — ~/Socials</p>
          <div className='flex gap-3'>
            <p className='text-nowrap'><Link href="/">- </Link></p>
            <p className='text-nowrap'><Link href="/papers">x </Link></p>
          </div>
        </nav>
        <div className='flex flex-wrap p-10 flex-col lg:flex-nowrap border-1 w-full border-gray-500'>
              <h3 className=' text-white flex w-fit underline'>$ MY contact & my linktree at one place</h3>
              <div>
                <Link href="/papers" className="text-gray-500 mt-30 hover:text-gray-700">
                  Follow me on socials!
                </Link>
              </div>
        </div>
      </div>
    </aside>
      <section className=" font-departure w-full overflow-hidden text-gray-50 flex flex-col items-center">
        <div className="container-articles m-2 lg:max-w-2/5 text-sm backdrop-blur-3xl w-full items-center justify-center text-left flex flex-col">
          <nav className=' w-full flex-nowrap flex items-center justify-between lg:pr-5 lg:pl-5 '>
            <p className='text-sm text-gray-300 text-nowrap'>rody.city/homebrew</p>
            <p className='text-nowrap'><Link href="/">[ Back ~/ ]</Link></p>
          </nav>
          <div className='flex flex-wrap lg:flex-nowrap w-full'>
            <article className='w-full p-5 gap-5 text-gray-400 dashed-bottom flex flex-col'>
              <pre className='font-departure text-gray-600 mt-20'>{`
██████╗  ██████╗ ██████╗ ██╗   ██╗
██╔══██╗██╔═══██╗██╔══██╗╚██╗ ██╔╝
██████╔╝██║   ██║██║  ██║ ╚████╔╝ 
██╔══██╗██║   ██║██║  ██║  ╚██╔╝  
██║  ██║╚██████╔╝██████╔╝   ██║   
╚═╝  ╚═╝ ╚═════╝ ╚═════╝    ╚═╝
            `}</pre>
              <h3 className='bg-gray-100 text-black flex w-fit underline'>read my papers ~</h3>
              <p className='max-w-3/3'>
                - Welcome :&gt; This is my papers page, desgined to be like an old ascii aesthetic cult page, soo... get confortable and chekc out my knoleges and my researches for this web of ideas
              </p>
              <h3 className='bg-gray-100 text-black flex w-fit underline'>Changelogs ~</h3>
              <p className='max-w-3/3'>
                [01/08/2026] Now we have an new design and an more responsive ui for mobile users!
              </p>
            </article>
          </div>
        </div>
        <div className="container-articles m-2 lg:max-w-2/5 text-sm w-full backdrop-blur-3xl items-center justify-center text-left flex flex-col">
          <nav className=' w-full flex-nowrap flex items-center justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30 border-gray-500 border-b-gray-950 '>
            <p className='text-sm text-gray-300 text-nowrap'>rody.city — ~/papers</p>
            <div className='flex gap-3'>
              <p className='text-nowrap'><Link href="/">- </Link></p>
              <p className='text-nowrap'><Link href="/papers">x </Link></p>
            </div>
          </nav>
          <div className='flex flex-wrap lg:flex-nowrap border-1 w-full border-gray-500'>
            <ol className="flex gap-3 w-full flex-col scale-75 lg:scale-100 paper-cli flex-wrap items-left p-5 ">
              {papers.map((paper) => (
                <li key={paper.id}>
                  <Link
                    href={`/papers/${paper.slug}`}
                    className="flex flex-col text-gray- w-fit hover:gap-5 text-gray-800 text-left transition-all duration-200">
                    <span className="font-medium"> {paper.post_date} | <span className=' hover:bg-gray-100 hover:text-black text-gray-100'> [{paper.name}]</span></span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}