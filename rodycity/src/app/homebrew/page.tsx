"use client";

import Link from 'next/link'
import Image from 'next/image'

import PapersNav from "@/src/components/layout/navigation/centerbar"
import Hero from "@/src/components/pages/papers/hero"
import PaperSection from '@/src/components/pages/papers/papers';
import DiscordWindow from '@/src/components/pages/papers/windows/discord';
import SocialsWindow from '@/src/components/pages/papers/windows/socials';


export default function Redirect() {

  return (
    <>
      <SocialsWindow/>
      <DiscordWindow/>
      <PapersNav />
      <Hero/>
      <PaperSection/>
    </>
  );
}