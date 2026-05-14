'use client';

import { useState } from 'react';
import Image from 'next/image';

import  '@/styles/pages/utils/draws/draw.css';

export default function DrawNumbers() {

    const [resultQuantity, setQuantityNumber] = useState(1);
    const [minNumber, setMinNumber] = useState(0);
    const [maxNumber, setMaxNumber] = useState(100);
    const [results, setResults] = useState<number[]>([]);


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

            <section id='draw' className="flex absolute user-select-none flex-col  w-full items-center justify-center">
                <div className='flex flex-col items-center mt-40 justify-center'>
                    <Image className="banner-top z-10" width={1000} height={100} src='/assets/drawn.png' alt="" />
                    <form className='flex items-end flex-col mt-10 mb-5 justify-center gap-4'>
                        <div className='flex gap-5'>
                            <fieldset>
                                <label  htmlFor="draw-results">How many results to draw? (1 to 100)</label>
                                <input value={resultQuantity} onChange={(e) => setQuantityNumber(Number(e.target.value))}  className='text-2xl' name='draw-results' id="draw-results" type="number" min={1} max={100} required placeholder="Max Results" />
                            </fieldset>
                            <input value={minNumber} onChange={(e) => setMinNumber(Number(e.target.value))} className='text-2xl' id="draw-start" type="number" min={1} max={100} required placeholder='Start number'/>
                            <input value={maxNumber} onChange={(e) => setMaxNumber(Number(e.target.value))} className='text-2xl' id="draw-end" type="number" min={1} max={100} required placeholder='Max number'/>
                        </div>
                        <div className='flex items-start text-left justify-end'>
                            <p>Como funciona o sorteador de números? <br /> sorteador utiliza um algoritmo de geração aleatória para criar números dentro do intervalo especificado pelo usuário.</p>
                        </div>
                        <div className="flex gap-5">
                            <button type='button' onClick={handleDraw} id='draw-number'>Make the draw!</button>
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