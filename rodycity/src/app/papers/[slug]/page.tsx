import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Link from 'next/dist/client/link'

const playSwoosh = () => {
    const audio = new Audio("/assets/sounds/swoosh.mp3"); 
    audio.volume = 0.1;
    audio.play().catch(() => {});
};

export default async function PaperPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'src/content/papers', `${slug}.md`);

    if (!fs.existsSync(filePath)) notFound();

    const { data, content } = matter(fs.readFileSync(filePath, 'utf-8'));

    return (
        <article className="prose mx-auto p-8">
            <Link onClick={playSwoosh} href="/homebrew">Back</Link>
            <h1>{data.title}</h1>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
    );
}