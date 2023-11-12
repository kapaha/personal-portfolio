import "../css/index.scss";
import "../css/fontawesome.css";
import "../css/brands.css";
import "../css/mobile-menu.scss";

/*
===============================================================================
Elements
===============================================================================
*/

const header = document.querySelector(".header");
const burger = document.querySelector(".hamburger");
const mobileMenuLinks = document.querySelectorAll(".header  a");
const mobileMenuToggler = document.querySelectorAll(
    "[data-mobile-menu-toggler]",
);

/*
===============================================================================
Event Listeners
===============================================================================
*/

mobileMenuToggler.forEach((element) =>
    element.addEventListener("click", toggleMobileMenu),
);

/*
===============================================================================
Helper functions
===============================================================================
*/

function toggleMobileMenu() {
    const shouldClose = header.classList.contains("menu-opened");

    if (shouldClose) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function closeMobileMenu() {
    header.classList.remove("menu-opened");
    burger.classList.remove("is-active");

    mobileMenuLinks.forEach((link) => (link.tabIndex = -1));
}

function openMobileMenu() {
    header.classList.add("menu-opened");
    burger.classList.add("is-active");

    mobileMenuLinks.forEach((link) => (link.tabIndex = 0));
}
