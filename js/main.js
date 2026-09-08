/* =========================================================
   HAMBURGER MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


/* Open / close mobile navigation */

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* =========================================================
   CLOSE MENU WHEN A NAVIGATION LINK IS CLICKED
   ========================================================= */

const navLinks = document.querySelectorAll(
    ".nav-menu .nav-link"
);

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================================
   CLOSE MENU WHEN SCREEN BECOMES DESKTOP SIZE
   ========================================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 800) {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});