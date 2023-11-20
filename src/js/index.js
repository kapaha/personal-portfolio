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

const SELECTORS = Object.freeze({
    MOBILE_MENU_LINKS: ".mobile-menu a",
    MOBILE_MENU_TOGGLERS: "[data-mobile-menu-toggler]",
});

/*
===============================================================================
DOM Elements
===============================================================================
*/

const body = document.body;
const mobileMenuLinks = document.querySelectorAll(SELECTORS.MOBILE_MENU_LINKS);
const mobileMenuToggler = document.querySelectorAll(
    SELECTORS.MOBILE_MENU_TOGGLERS,
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
