const modal = document.getElementById("modal-nav");
const openModalBtb = document.getElementById("modal-open-btn");

openModalBtb.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.toggle("hidden");

});

document.addEventListener("click", (e) => {
    if (!modal.contains(e.target) && !openModalBtb.contains(e.target)) {
        modal.classList.add("hidden");
    }
});

