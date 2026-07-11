'use client'

import { ReactLenis, type LenisRef } from 'lenis/react'
import { frame, cancelFrame } from 'motion/react'
import { useEffect, useRef, useState } from 'react'



export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<lenisRef>(null);
    const [reduced, setReduced] = useState(false)
 useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduced) return
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp)
    }
    frame.update(update, true) 
    return () => cancelFrame(update)
  }, [reduced])

  if (reduced) return <>{children}</> 
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}