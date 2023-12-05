import "highlight.js/styles/atom-one-dark.css";

import "./shared.js";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

/*
===============================================================================
Main()
===============================================================================
*/

const elements = {
    code: document.querySelector("code"),
};

// Initialise code formatting
hljs.registerLanguage("javascript", javascript);
hljs.highlightElement(elements.code);
