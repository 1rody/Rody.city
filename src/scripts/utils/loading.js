const terminal = document.getElementById('terminal');

setTimeout(() => {
    window.location.replace('../papers.html');
}, 5000);

async function startLoading() {
    await init_terminal();
    fetch_terminal();
}

startLoading();


async function init_terminal () {
    const ascii_intro = document.createElement('pre');
    ascii_intro.innerHTML = `
 ________  ________  ________      ___    ___ 
   _____               __   ______           __        
 _|     |.--.--.-----.|  |_|   __ \.-----.--|  |.--.--.
|       ||  |  |__ --||   _|      <|  _  |  _  ||  |  |
|_______||_____|_____||____|___|__||_____|_____||___  |
                                                |_____| 
    `;
    terminal.appendChild(ascii_intro)
    await new Promise(resolve => setTimeout(resolve, 200));

    const text_content = [       
        'Drivers.sys',
        'index.html',
        'still_alive.html',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem',
        'portal_gun.exe',
        'cake_is_a_lie.txt',
        'black_mesa_protocols.sys',
        'rodyu.conf',
        'popos_frontend.js',
        'hacking_tools_kali.sh',
        'no_ai_module_gpt.js',
        'void_network_adapter.sys',
        'cosmic_interface_loader.dll',
        'Are_u_reading_this?.js',
        'blackhole.sys',
        'void_interface_loader.dll'
    ];

    for (let i = 0; i < text_content.length; i++) {

        const load_text = text_content[i];

        const template = `
        <p>
            <span class="status-bracke">[ <span class="status-ok">OK </span>] </span>
            {{loading_texts}}
        </p>`;

        const unifyed_array = template.replace("{{loading_texts}}", load_text);

        terminal.innerHTML += unifyed_array;

        await new Promise(resolve => setTimeout(resolve, 200));
    }
}

//transformar isso em um array e usar loop

function fetch_terminal () {
    const fetch = document.createElement('div');
    const fetch_ascii = document.createElement('pre');
    const fetch_text = document.createElement('p');

    fetch.classList.add('fetch')
    fetch.appendChild(fetch_ascii);
    fetch.appendChild(fetch_text);

    fetch_text.innerHTML = `

        @Void.Terminal <br>
        OS: PopOS 24.04 cosimic interface <br>
        Host: JustRody :D <br>
        Kernel: GlaDOS (aperture labs edition) <br>
        Uptime: 23h Core Ultra 5 (sofrendo) <br>
        GPU: NVIDIA RTX 5070 (...) <br>
        Memory: 32768MiB / 32768MiB <br>
        <div> </div>
    
    `;
    fetch_ascii.innerHTML = `
                                                     
   ********************************+++****                 
    +++++++++++++++++++++++++++++++++++++++***                    
     *++++++++++++++++++++++++++++++++++++++++*      
        *++++++++++++++++++++++++++++**+*+++++++**        
         *++++++++++++*               *++++++++++*        
           *++++++++++++*              +++++*+++++*       
            +++++++++++++++           *++++++++++*       
            ++++++++++++++++++       *+++*++++++*        
            ++++++++++++++++++++++++++++++++++**         
            +++++++++ *+++++++++++++++++++++**           
            +++++++++  *++++++++++++++++++**                    
            ++++++++++++++++++++***++++++++*             
            ++++++++++++++++**  **++*++++++++*           
            ++++++++++++++*       **+*+++++++++          
            ++++++++++**           **++*+++++*+**        
            +++++++**                **++*++*++++**      
            ++++**                     **+++++++++**     
            +**                         **++++++++++*    
                                 
    
    `;

    terminal.appendChild(fetch);
}


