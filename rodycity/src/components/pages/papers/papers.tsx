import Link from "next/link";
import Image from 'next/image'

interface Paper {
  name: string;
  slug: string;
  id: string;
  post_date: string;
}

export default function PaperSection() {

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
        <section className="font-departure justify-center  w-full overflow-hidden text-gray-50 flex flex-col items-center">
                    <div className="container-articles m-2 lg:max-w-2/5 text-sm w-full backdrop-blur-3xl items-center justify-center text-left flex flex-col">
                    <nav className='w-full flex-nowrap flex items-center justify-between lg:pr-5 lg:pl-5 border-1 bg-gray-950/30 border-gray-500 border-b-gray-950'>
                        <p className='text-sm text-gray-300 text-nowrap'>rody.city — ~/papers</p>
                        <div className='flex gap-3'>
                        <p className='text-nowrap'><Link href="/">- </Link></p>
                        <p className='text-nowrap'><Link href="/papers">x </Link></p>
                        </div>
                    </nav>
                    <div className='flex flex-wrap lg:flex-nowrap border-1 w-full border-gray-500'>
                        <ol className="flex gap-3 w-full flex-col scale-75 lg:scale-100 paper-cli flex-wrap items-left p-5">
                        {papers.map((paper) => (
                            <li key={paper.id}>
                            <Link
                                href={`/papers/${paper.slug}`}
                                className="flex flex-col w-fit hover:gap-5 text-gray-800 text-left transition-all duration-200">
                                <span className="font-medium"> {paper.post_date} | <span className='hover:bg-gray-100 hover:text-black text-gray-100'> [{paper.name}]</span></span>
                            </Link>
                            </li>
                        ))}
                        </ol>
                    </div>
                    </div>
        </section>
    )
}