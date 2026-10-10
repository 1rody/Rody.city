function hideMenu() {
    const menu = document.getElementById("menu");

    if (!menu || menu.classList.contains("hidden")) return;

    menu.classList.add("menu-hidding");

    menu.addEventListener(
        "animationend",
        () => {
            menu.classList.remove("menu-hidding");
            menu.classList.add("hidden");
        },
        { once: true }
    );
}

export default hideMenu;