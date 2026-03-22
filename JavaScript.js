const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector(".nav-menu")

// Abrir/cerrar menú
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})

// Cerra menú al hacer clic afuera
document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("active")
    }
})