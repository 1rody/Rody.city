'use client'; // Required for client-side hooks
import { useEffect, useState } from 'react';
import "./bottomdock.css";
export default function bottomBar() {
    const [time, setTime] = useState('');


    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
        
            const formattedTime = now.toLocaleTimeString('pt-BR', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            setTime(formattedTime);
        };
        
        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId); 
    }, []);

    return (
    <footer className="flex w-full z-2 no-select  justify-between bottom-0 no-pointer-event fixed items-center">
            <nav className="bottombar-pc flex p-14 ">
                .
            </nav>
            <nav className="bottombar-pc flex p-14 mr-custom">
                <ol className="infos jetbrains-font justify-end  w-full text-1xl">
                    <li className="nav-btn flex flex-col">
                        <button className="flex gap-2 justify-end w-full flex items-center">
                            <p>Local time:</p>
                            <a className="clock text-2xl" href=""><span>{time}</span></a>
                            
                        </button>
                    </li>
                    <li>
                        <p><span></span>All rights resererved</p>
                        <p className="mt-4">////////////</p>
                    </li>
                </ol>
            </nav>
    </footer>
    );
}