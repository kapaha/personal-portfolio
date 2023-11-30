import { createTyped } from "./typed";

import "../css/index.scss";
import "../css/fontawesome.css";
import "../css/solid.css";
import "../css/brands.css";
import "../css/mobile-menu.scss";

/*
===============================================================================
Constants
===============================================================================
*/

const HTML_CLASS = Object.freeze({
    MOBILE_MENU_OPENED: "mobile-menu-opened",
});

const SELECTOR = Object.freeze({
    MOBILE_MENU_LINKS: ".mobile-menu a",
    MOBILE_MENU_TOGGLERS: "[data-mobile-menu-toggler]",
    SCROLL_TO_TOP_BTN: ".scroll-to-top",
    TYPE_EFFECT: "#type-effect",
    TYPE_CURSOR: "#type-cursor",
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
const typeEffectEl = document.querySelector(SELECTOR.TYPE_EFFECT);
const typeCursorEl = document.querySelector(SELECTOR.TYPE_CURSOR);

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

/*
===============================================================================
Main()
===============================================================================
*/

const typed = createTyped(typeEffectEl, typeCursorEl);

typed.start();

/*
===============================================================================
Helper functions
===============================================================================
*/

function toggleMobileMenu() {
    const shouldOpen = !body.classList.contains(HTML_CLASS.MOBILE_MENU_OPENED);

    if (shouldOpen) {
        openMobileMenu();
        return;
    }

    closeMobileMenu();
}

function closeMobileMenu() {
    body.classList.remove(HTML_CLASS.MOBILE_MENU_OPENED);

    mobileMenuLinks.forEach((link) => (link.tabIndex = -1));
}

function openMobileMenu() {
    body.classList.add(HTML_CLASS.MOBILE_MENU_OPENED);

    mobileMenuLinks.forEach((link) => (link.tabIndex = 0));
}
