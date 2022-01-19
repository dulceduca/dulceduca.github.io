var nav_menu = document.getElementById("mobile-menu")
var nav = document.getElementById("nav")
var nav_bg = document.getElementById("modal-bg")

nav_menu.addEventListener("click", function() {

    nav_menu.classList.add("active")
    nav.classList.add("active")
    nav_bg.classList.add("active")
});

nav_bg.addEventListener("click", function () {

    nav_menu.classList.remove("active")
    nav.classList.remove("active")
    nav_bg.classList.remove("active")
});


document.addEventListener("scroll", function() {

    if (!document.querySelector("main > section.inline-img")) return

    if (scrollY > document.querySelector("main > section.inline-img").offsetHeight) {
        nav_menu.classList.add("invert")
    } else {
        nav_menu.classList.remove("invert")
    }
})

document.getElementById('year').innerHTML = new Date().getFullYear()