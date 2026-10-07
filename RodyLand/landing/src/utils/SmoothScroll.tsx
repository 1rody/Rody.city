'use client'

//imports base
import { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";

export let lenis: Lenis;

//function

export default function SmoothScroll({ children }: { children: ReactNode }) {
useEffect(() => {
    lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.1,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}

