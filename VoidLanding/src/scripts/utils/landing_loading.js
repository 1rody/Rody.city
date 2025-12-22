//como esse e um site estatico decidi fazer so a versao conceitual de uma loadingbar
const title = document.querySelector('#fade-out');
const loading = document.getElementById('landing-load');


async function loading_bar_landing () {
    const loading_container = document.querySelectorAll('.loading-container');
    const progress_bar = document.querySelectorAll('.progress');

    let progress = 0;
    let timer = 0;

    setInterval(() => {
        progress += 1;

        progress_bar.forEach(bar => {
            bar.style.width = progress + "%";
        });

        if (progress >= 100) {
            progress = 0;
        }
        if (progress >= 80) {
            title.classList.add("anim-fade");
        }
        if (progress >= 98) {
            loading.classList.add("hidden");
        }

    }, 20);


}
loading_bar_landing()
