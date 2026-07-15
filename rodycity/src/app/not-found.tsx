import Link from 'next/link'

import '@/src/styles/error.css';
import '@/src/styles/globals.css';

export default function NotFound() {
  return (
    <div className="flex no-select flex-col items-center justify-center h-screen w-full gap-20">
      <div className='flex items-center fixed top-80 justify-center gap-5'>
          <p className="">Sorry, :C this page not exist...</p>
          <Link href="/" className=" dashed hover:underline">
            back to rody.city/
          </Link>
      </div>
      <div className='flex items-center justify-center text-center flex-col'>
        <h1 className="error-404  font-bold">404</h1>
      </div>
    </div>
  )
}