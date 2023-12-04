import "../css/index.scss";
import "../css/fontawesome.css";
import "../css/solid.css";
import "../css/brands.css";
import "../css/mobile-menu.scss";

import { createMobileMenu } from "./mobile-menu";
import { createScrollToTop } from "./scroll-to-top";

/*
===============================================================================
Main()
===============================================================================
*/

const elements = {
    scrollToTop: document.querySelector(".scroll-to-top"),
    messageError: document.querySelector("#message-error"),
    mobileMenuLinks: document.querySelectorAll(".mobile-menu a"),
    mobileMenuTogglers: document.querySelectorAll("[data-mobile-menu-toggler]"),
};

// Initialise scroll to top
createScrollToTop(elements.scrollToTop).init();

// Initialise mobile menu
createMobileMenu(
    "mobile-menu-opened",
    elements.mobileMenuTogglers,
    elements.mobileMenuLinks,
).init();
