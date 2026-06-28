import Link from 'next/link'

import '@/src/styles/error.css';
import '@/src/styles/globals.css';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-20">
      <div className='flex items-center justify-center text-center flex-col'>
        <h1 className="error-404  font-bold">404</h1>
        <p className="">Page not found.</p>
      </div>
      <Link href="/" className="mt-6 hero-primary hover:underline">
        back to landing -
      </Link>
    </div>
  )
}