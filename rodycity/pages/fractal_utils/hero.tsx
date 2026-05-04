import './hero.css';

export default function Hero() {
    return (
        <>
            <section className="h-screen w-full items-center overflow-hidden justify-center">
                
                <div className='flex items-center flex-col font-jetbrains justify-center h-screen gap-5'>
                    <button  className=" text-2xl"><a href="/drawn">Drawn a number</a></button>
                    <button className=" text-2xl"><a href="#">Spinn names [EM BREVE]</a></button>
                    <button className="text-2xl"><a href="#">Weather monitor [EM BREVE]</a></button>
                </div>
            </section>
        </>
    )
}