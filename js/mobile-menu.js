const openBtn = document.querySelector('[menu-open-btn]');
const closeBtn = document.querySelector('[menu-close-btn]');
const menuContainer = document.querySelector('[menu-container]');


openBtn.addEventListener("click", () => {
    menuContainer.classList.add("menu-fadein");
})

menuContainer.addEventListener("click", () => {
    menuContainer.classList.remove("menu-fadein");
})