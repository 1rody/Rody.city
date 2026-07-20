"use client";

import Sidebar from '@/src/components/layout/sidebar';

export default function Redirect() {
  return (
    <>
      <Sidebar />
      <section className="h-screen w-full flex flex-col items-center ">
        <div className='container-articles'>

        </div>
      </section>
      <div className="shell-external  h-screen w-full hidden fixed lg:block md:block no-select no-interact">
        <div className="shell-internal h-screen w-full fixed no-select no-interact">
        </div>
      </div>
    </>
  );
}
