import "../css/index.scss";
import "../css/fontawesome.css";
import "../css/brands.css";
import "../css/mobile-menu.scss";

/*
===============================================================================
Constants
===============================================================================
*/

const CSS_CLASS = Object.freeze({
    MOBILE_MENU_OPENED: "mobile-menu-opened",
});

const SELECTOR = Object.freeze({
    MOBILE_MENU_LINKS: ".mobile-menu a",
    MOBILE_MENU_TOGGLERS: "[data-mobile-menu-toggler]",
    SCROLL_TO_TOP_BTN: ".scroll-to-top",
});

/*
===============================================================================
DOM Elements
===============================================================================
*/

const body = document.body;
const mobileMenuLinks = document.querySelectorAll(SELECTOR.MOBILE_MENU_LINKS);
const mobileMenuToggler = document.querySelectorAll(
    SELECTOR.MOBILE_MENU_TOGGLERS,
);
const scrollToTopBtn = document.querySelector(SELECTOR.SCROLL_TO_TOP_BTN);

/*
===============================================================================
Event Listeners
===============================================================================
*/

mobileMenuToggler.forEach((element) =>
    element.addEventListener("click", toggleMobileMenu),
);

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/*
===============================================================================
Helper functions
===============================================================================
*/

function toggleMobileMenu() {
    const shouldOpen = !body.classList.contains(CSS_CLASS.MOBILE_MENU_OPENED);

    if (shouldOpen) {
        openMobileMenu();
        return;
    }

    closeMobileMenu();
}

function closeMobileMenu() {
    body.classList.remove(CSS_CLASS.MOBILE_MENU_OPENED);

    mobileMenuLinks.forEach((link) => (link.tabIndex = -1));
}

function openMobileMenu() {
    body.classList.add(CSS_CLASS.MOBILE_MENU_OPENED);

    mobileMenuLinks.forEach((link) => (link.tabIndex = 0));
}
