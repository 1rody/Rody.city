import "./topbar.css";
export default function topBar() {
    return (
    <header className="flex w-full topbar-pc p-6 z-50 fixed justify-around items-center">
            <nav className="flex ">
                <ol className="infos jetbrains-font text-2lg">
                    <li className="nav-btn">
                        <button className="flex w-full gap-1 text-2xl flex items-center">
                            <a  href="/"><strong >RODY</strong></a>
                        </button>
                    </li>
                </ol>
                <ol>
                    <p>BETA///</p>
                </ol>
            </nav>
            <nav className="topbar-pc flex">
                <div className='flex gap-5 justify-center'>
                    <button className="hidden nav-button-primary md:flex">
                        <a href="/fractal_tree">Linktree</a>
                    </button>
                    <button  className="hidden nav-button-primary md:flex">
                        <a href="/papers">Papers</a>
                    </button>
                    <button  className="hidden nav-button-primary md:flex">
                        <a href="">Github</a>
                    </button>
                </div>
            </nav>
            <nav className="topbar-pc ml-10 flex">
                <div className='flex gap-5 justify-center'>
                    <button className="hidden nav-button-secondary lg:flex md:flex">
                        <a href="">Discord</a>
                    </button>
                </div>
            </nav>
    </header>
    )
}