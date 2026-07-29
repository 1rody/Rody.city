"use client";

import Link from 'next/dist/client/link'

  interface Paper {
    name: string;
    slug: string;
    id: string;
    post_date: string;
  }

export default function Redirect() {

    const papers: Paper[] = [
      { name: "How setup a Minecraft server", slug: "mc-server", id: "1", post_date: "dd/mm/yyyy" },
      { name: "JS/TS diferences", slug: "js-ts", id: "2", post_date: "dd/mm/yyyy" },
      { name: "Why use async functions?", slug: "async", id: "3", post_date: "dd/mm/yyyy" },
      { name: "the diference of UI and UX", slug: "ui-ux", id: "4", post_date: "dd/mm/yyyy" },
    ];


  return (
    <>
      <section className="h-scree font-(family-name:--font-jetbrains-mono) text-indigo-50 flex flex-col items-center">
        <div className="container-articles m-2 lg:max-w-2/5 text-sm h-screen backdrop-blur-3xl items-center justify-center text-left flex flex-col">
          <nav className=' w-full flex-nowrap flex rounded-tl-md rounded-tr-md items-center justify-between  lg:pr-5 lg:pl-5 border-1 bg-indigo-950/30 border-gray-500 border-b-blue-950  justify-between '>
            <p className='text-sm text-indigo-300 text-nowrap'>rody.city — ~/papers</p>
            <p className='text-nowrap'><Link href="/">[ BACK ]</Link></p>
          </nav>
          <div className='flex flex-wrap rounded-bl-md rounded-br-md lg:flex-nowrap border-1 border-gray-500'>
            <article className='w-full p-5  gap-5 text-gray-400  flex flex-col'>
              <h2><span className='text-indigo-500'>rody:~$</span> ./Search_papers</h2>
              <pre className='scale-90 text-indigo-600'>{`
  ██████╗  ██████╗ ██████╗ ██╗   ██╗
  ██╔══██╗██╔═══██╗██╔══██╗╚██╗ ██╔╝
  ██████╔╝██║   ██║██║  ██║ ╚████╔╝ 
  ██╔══██╗██║   ██║██║  ██║  ╚██╔╝  
  ██║  ██║╚██████╔╝██████╔╝   ██║   
  ╚═╝  ╚═╝ ╚═════╝ ╚═════╝    ╚═╝
            `}</pre>
              <h3 className='bg-indigo-100 text-black flex w-fit underline'>read my papers ~</h3>
              <p className='max-w-3/3'>
                - Welcome :&gt;  to my papers page<br />  <br />  this is my space for sharing knowledge and everything  I learn along my development journey
              </p>
            </article>
            <ol className="flex gap-3 w-full  flex-col scale-75 lg:scale-100 paper-cli flex-wrap items-left p-5 ">
              {papers.map((paper) => (
                <li key={paper.id}>
                  <Link
                    href={`/papers/${paper.slug}`}
                    className="flex flex-col text-gray- w-fit  hover:gap-5  text-indigo-800 text-left transition-all duration-200">
                    <span className="font-medium"> {paper.post_date} | <span className=' hover:bg-indigo-100 hover:text-black text-indigo-100'> [{paper.name}]</span></span>
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
