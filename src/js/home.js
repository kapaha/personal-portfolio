import "./shared.js";

import { createTyper } from "./typer.js";
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
    typeEffect: document.querySelector("#type-effect"),
    typeCursor: document.querySelector("#type-cursor"),
    contactForm: document.querySelector("#contact-form"),
    nameInput: document.querySelector("#name"),
    emailInput: document.querySelector("#email"),
    messageInput: document.querySelector("#message"),
    nameError: document.querySelector("#name-error"),
    emailError: document.querySelector("#email-error"),
    messageError: document.querySelector("#message-error"),
};

// Start typing animation
createTyper(elements.typeEffect, elements.typeCursor).start();

// Initialise contact form
const fields = createFieldGroup([
    createField(elements.nameInput, elements.nameError, [
        validationRules.required,
    ]),
    createField(elements.emailInput, elements.emailError, [
        validationRules.required,
        validationRules.email,
    ]),
    createField(elements.messageInput, elements.messageError, [
        validationRules.required,
    ]),
]);

createForm(elements.contactForm, fields).init();
