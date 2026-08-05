"use client";

import Link from 'next/link'
import Image from 'next/image'

import PapersNav from "@/src/components/layout/navigation/centerbar"
import Hero from "@/src/components/pages/papers/hero"
import PaperSection from '@/src/components/pages/papers/papers';

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
      <PapersNav />
      <Hero/>
      <PaperSection/>
    </>
  );
}