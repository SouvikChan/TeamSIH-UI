let typed = new Typed(".typing", {
    strings: ["Crops", "Seeds", "Wheather", "Tools", "Fertilizer & Pesticides"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;


window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }


    if (document.documentElement.scrollTop > 500) {
        scrollBtn.style.display = "show";
    } else {
        scrollBtn.style.display = "show";
    }
}



let body = document.querySelector("body");
let navBar = document.querySelector(".navbar .menu");
let menuBtn = document.querySelector(".menu-btn i");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvents = "auto";
}


let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    });
}