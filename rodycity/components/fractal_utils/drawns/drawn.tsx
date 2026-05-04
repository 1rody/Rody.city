'use client';

import { useState } from 'react';
import Image from 'next/image';

import  './drawn.css';
import drawnBanner from "@/public/assets/drawn.png";
import backgroundBanner from "@/public/assets/rody2.png";

export default function DrawnNumbers() {

    //value serve para definir qual a constante em que o valor do input sera armazenado;
    // setminnumber em onchange serve para pegar o evendo de change e o valor mudando o numero;

    //constantes para o sorteio
    const [resultQuantity, setQuantityNumber] = useState(1);
    const [minNumber, setMinNumber] = useState(0);
    const [maxNumber, setMaxNumber] = useState(100);
    const [results, setResults] = useState([]);

    function handleDraw(e: React.FormEvent) {

        e.preventDefault();

        switch (true) {
            case (resultQuantity > 100):
                console.log("Muita coisa! Limite de 100.");
                return; 
            case (resultQuantity < 1):
                console.log("Quantidade inválida.");
                return;
            case (minNumber >= maxNumber):
                console.log("O início não pode ser maior ou igual ao fim.");
                return;
            default:
                console.log("Tudo certo, sorteando...");
        }

    const newResults = [];

    for (let i = 0; i < resultQuantity; i++) {
        const number = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        newResults.push(number);
    }

    setResults(newResults);
    console.log(newResults); //checkar se o codigo esta funcionando e se os results estao sendo gerados : ou oq voce ta fazendo no meu codigo? humm seja bem vindo :3

    }

    return (
        <>  
            <div className='flex items-center justify-center no-pointer-event user-select-none w-full'>
                <Image className="banner-top relative z-2" width={1000} src={backgroundBanner} alt="" />
            </div>

            <section id='drawn' className="flex absolute user-select-none flex-col  w-full items-center justify-center">
                <div className='mt-20'>
                    <button className="font-inter relative z-50"><a href="/">Back to Landing</a></button>
                    <button className="font-inter relative z-50"><a href="/fractal_utils">Back to the tools page</a></button>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image className="banner-top z-10" width={1000} src={drawnBanner} alt="" />
                    <form className='flex items-end flex-col mt-10 mb-5 justify-center gap-4'>
                        <div className='flex gap-5'>
                            
                            <input value={resultQuantity} onChange={(e) => setQuantityNumber(Number(e.target.value))}  className='text-2xl' id="drawn-results" type="number" minLength={1} maxLength={100} required placeholder="Max Results" />
                            <input value={minNumber} onChange={(e) => setMinNumber(Number(e.target.value))} className='text-2xl' id="drawn-start" type="number" minLength={1} maxLength={100} required placeholder='Start number'/>
                            <input value={maxNumber} onChange={(e) => setMaxNumber(Number(e.target.value))} className='text-2xl' id="drawn-end" type="number" minLength={1} maxLength={100} required placeholder='Max number'/>
                        </div>
                        <div className='flex items-start text-left justify-end'>
                            <p>Como funciona o sorteador de números? <br /> sorteador utiliza um algoritmo de geração aleatória para criar números dentro do intervalo especificado pelo usuário.</p>
                        </div>
                        <div className="flex gap-5">
                            <button type='button' onClick={handleDraw} id='drawn-number'>Make the drawn!</button>
                        </div>
                    </form>
                    <section>
                        <div className='flex flex-wrap result-section gap-5'>
                            {results.map((num, index) => (
                                <div key={index} className='results text-2xl'>
                                    {num}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}