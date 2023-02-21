const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

const showMenu = () => {
    menuBtn.classList.toggle("open")
    mobileMenu.classList.toggle("block")
    mobileMenu.classList.toggle("hidden")

}

menuBtn.addEventListener("click" , showMenu)