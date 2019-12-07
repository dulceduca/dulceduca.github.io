var nav_menu = document.getElementById("mobile-menu");
var nav = document.getElementById("nav");
var nav_bg = document.getElementById("modal-bg");

nav_menu.addEventListener("click", function() {
    nav_menu.classList.add("active");
    nav.classList.add("active");
    nav_bg.classList.add("active");
});

nav_bg.addEventListener("click", function () {
    nav_menu.classList.remove("active");
    nav.classList.remove("active");
    nav_bg.classList.remove("active");
});


document.addEventListener("scroll", function() {

    if (scrollY > document.querySelector("main > section.inline-img").offsetHeight) {
        nav_menu.classList.add("invert");      
    } else {
        nav_menu.classList.remove("invert");
    }

    // var height = window.innerHeight;
    // var bg = document.getElementById("bg");
    // var content = document.getElementById("content");

    // var pos = window.scrollY;

    // var tmp = pos / (height / 2);

    // content.style.transform = "translateY(" + (pos / 2) + "px)";
    // content.style.opacity = 1 - (tmp / 1.05);
    // bg.style.transform = "translateY(" + (pos / 2) + "px)"

    // console.log("height of document: " + height);
    // console.log(window.scrollY);
});