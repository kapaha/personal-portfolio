import "../css/index.scss";
import "../css/fontawesome.css";
import "../css/solid.css";
import "../css/brands.css";
import "../css/mobile-menu.scss";

import { createTyper } from "./typer";
import { createMobileMenu } from "./mobile-menu";
import { createScrollToTop } from "./scroll-to-top";
import {
    createForm,
    createField,
    createFieldGroup,
    validationRules,
} from "./form";

/*
===============================================================================
Main()
===============================================================================
*/

const elements = {
    scrollToTop: document.querySelector(".scroll-to-top"),
    typeEffect: document.querySelector("#type-effect"),
    typeCursor: document.querySelector("#type-cursor"),
    contactForm: document.querySelector("#contact-form"),
    nameInput: document.querySelector("#name"),
    emailInput: document.querySelector("#email"),
    messageInput: document.querySelector("#message"),
    nameError: document.querySelector("#name-error"),
    emailError: document.querySelector("#email-error"),
    messageError: document.querySelector("#message-error"),
    mobileMenuLinks: document.querySelectorAll(".mobile-menu a"),
    mobileMenuTogglers: document.querySelectorAll("[data-mobile-menu-toggler]"),
};

// Start typing animation
createTyper(elements.typeEffect, elements.typeCursor).start();

// Initialise scroll to top
createScrollToTop(elements.scrollToTop).init();

// Initialise mobile menu
createMobileMenu(
    "mobile-menu-opened",
    elements.mobileMenuTogglers,
    elements.mobileMenuLinks,
).init();

// Initialise contact form
const fields = createFieldGroup([
    createField(elements.nameInput, elements.nameError, [
        validationRules.required,
    ]),
    createField(elements.emailInput, elements.emailError, [
        validationRules.required,
    ]),
    createField(elements.messageInput, elements.messageError, [
        validationRules.required,
    ]),
]);

createForm(elements.contactForm, fields).init();
