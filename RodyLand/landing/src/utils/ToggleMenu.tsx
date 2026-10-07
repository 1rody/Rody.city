
let isOpen = 0;

function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuButton = document.getElementById("menubutton");

    menu?.classList.toggle("hidden");
    isOpen = 1;

    if (isOpen === 1) {
        menuButton?.classList.add("bg-black", "text-white",);
        isOpen = 0;
    }


}   

export default toggleMenu;