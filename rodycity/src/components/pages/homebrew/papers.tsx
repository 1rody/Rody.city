import Link from "next/link";

interface Paper {
    name: string;
    slug: string;
    id: string;
    post_date: string;
}

const playHover = () => {
    const audio = new Audio("/assets/sounds/hover.mp3"); 
    audio.volume = 0.2;
    audio.play().catch(() => {});
};
const playClick = () => {
    const audio = new Audio("/assets/sounds/click.mp3");
    audio.volume = 0.1;
    audio.play().catch(() => {});
};

export default function PaperSection() {

    const papers: Paper[] = [
        { name: "Librewolf", slug: "librewolf", id: "1", post_date: "12/08/2026" },
        { name: "Why async - renewed", slug: "async2", id: "2", post_date: "01/09/2026" },
        { name: "Java basics", slug: "java", id: "3", post_date: "11/09/2026" },
        { name: "Here my friends websites", slug: "friends", id: "4", post_date: "01/08/2026" },
        { name: "How setup a Minecraft server", slug: "mc-server", id: "11", post_date: "30/08/2025" },
        { name: "JS/TS diferences", slug: "js-ts", id: "12", post_date: "30/08/2025" },
        { name: "Why use async functions?", slug: "async", id: "13", post_date: "30/08/2025" },
        { name: "the diference of UI and UX", slug: "ui-ux", id: "14", post_date: "30/08/2025" },

    ];

    return (

        <section className='flex items-center flex-col font-departure font-bold '>
            <section id='profile-content' className='flex w-full items-center justify-center '>
                <div className='flex gap-10 flex-col items-center justify-center lg:w-1/3 w-full'>
                    <article className='border-1 w-full border-gray-200/10 flex flex-col '>
                        <ol className="flex gap-3 w-full flex-col scale-75 lg:scale-100 paper-cli flex-wrap items-left p-5">
                            {papers.map((paper) => (
                                <li key={paper.id}>
                                    <Link onClick={playClick} onMouseEnter={playHover}
                                        href={`/papers/${paper.slug}`}
                                        className="flex flex-col w-fit hover:gap-5 text-gray-800 text-left transition-all duration-200">
                                        <span className="font-medium"> {paper.post_date} | <span className='hover:bg-gray-100 hover:text-black text-gray-100'> [{paper.name}]</span></span>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </article>
                </div>
            </section>
        </section>
    )
}