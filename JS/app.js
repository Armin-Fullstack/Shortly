const menuBtn = document.getElementById("menu-btn")

const showMenu = () => {
    menuBtn.classList.toggle("open")
}

menuBtn.addEventListener("click" , showMenu)