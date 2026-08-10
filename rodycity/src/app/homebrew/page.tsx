"use client";

import Link from 'next/link'
import Image from 'next/image'

import Hero from "@/src/components/pages/homebrew/hero"
import PaperSection from '@/src/components/pages/homebrew/papers';
import DiscordWindow from '@/src/components/pages/homebrew/windows/discord';
import SocialsWindow from '@/src/components/pages/homebrew/windows/socials';
import Profile from '@/src/components/pages/homebrew/profile';

export default function Redirect() {

  return (
    <>
      <Profile/>
      <SocialsWindow/>
      <DiscordWindow/>
      <Hero/>
      <PaperSection/>
    </>
  );
}