import '@/styles/pages/utils/utils.css';
import Clock from './_misc/clock'
export default function linktree() {
    return (
        <>
            <section className="h-screen w-full items-center overflow-hidden justify-center">
                <div className='flex items-center flex-col font-jetbrains justify-center h-screen gap-5'>
                    <h2>Fractal Utils</h2>
                    <div className='flex gap-3 text-2xl mb-8'>
                        <p>Local Time: </p>
                        <Clock/>
                    </div>
                    <button  className=" text-2xl"><a href="/utils/draw/">Draw a number</a></button>
                    <button className=" text-2xl"><a href="/utils/names">Spinn names [EM BREVE]</a></button>
                    <button className="text-2xl"><a href="/utils/weather">Weather monitor</a></button>
                </div>
            </section>
        </>
    );
}
