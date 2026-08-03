
"use client";

import { useState } from "react";

export default function Cookies() {

    const [showModal, setShowModal] = useState(true);


    return (
        showModal && (
            <section className="cookies fixed bottom-0 duration-200  left-0 w-full z-50 bg-(--foreground) text-(--textblack) p-5 flex items-center justify-center gap-5">
                <p className="text-sm">This website uses cookies to enhance the user experience. By continuing to browse the site, you agree to our use of cookies. all of the functions like weather and others are client-side. so no data is sent to our servers.</p>
                <button onClick={() => setShowModal(false)} className="bg-(--textblack) text-(--foreground) px-4 py-2 rounded-3xl hover:bg-blue-500 hover:text-(--textblack) transition-all duration-150">Accept</button>
            </section>  
        )

    )
}