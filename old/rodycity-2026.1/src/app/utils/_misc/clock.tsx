'use client';

import { clear } from "console";
import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(()=> (
            setTime(new Date())
        ), 100)
        return () => clearInterval(interval);
    });
    return (
        <div>
            {time.toLocaleTimeString()}
        </div>
    );  
}