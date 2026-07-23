"use client";

import Sidebar from '@/src/components/layout/sidebar';
import Link from 'next/dist/client/link'
import Image from 'next/image'

  interface Paper {
    name: string;
    slug: string;
    id: string;
  }

export default function Redirect() {

    const papers: Paper[] = [
      { name: "How to setup a Minecraft server", slug: "mc-server", id: "1" },
      { name: "Javascript and Typescript diferences", slug: "js-ts", id: "2" },
      { name: "Why use async functions?", slug: "async", id: "3" },
      { name: "What is the diference of UI and UX", slug: "ui-ux", id: "4" },
    ];


  return (
    <>
      <Sidebar />
      <section className="h-scree flex flex-col items-center">
        <div className="container-articles">
          <ol className="flex gap-4 flex-col  flex-wrap h-screen items-center justify-center">
            {papers.map((paper) => (
              <li key={paper.id}>
                <Link
                  href={`/papers/${paper.slug}`}
                  className="bg-foreground flex flex-col text-black p-4 text-center hover:scale-105 rounded-sm lg:w-2xl md:w-lg  w-fit transition-all duration-200">
                  <span className="font-medium">{paper.name}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <div className="shell-external  h-screen w-full hidden fixed lg:block md:block no-select no-interact">
        <div className="shell-internal h-screen w-full fixed no-select no-interact">
        </div>
      </div>
    </>
  );
}
