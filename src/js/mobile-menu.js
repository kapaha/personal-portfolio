export function createMobileMenu(
    bodyOpenClass,
    mobileMenuTogglers,
    mobileMenuLinks,
) {
    function _toggleMobileMenu() {
        const shouldOpen = !document.body.classList.contains(bodyOpenClass);

        const classListMethod = shouldOpen ? "add" : "remove";
        const tabIndex = shouldOpen ? 0 : -1;

        document.body.classList[classListMethod](bodyOpenClass);

        mobileMenuLinks.forEach((link) => (link.tabIndex = tabIndex));
    }

    function init() {
        mobileMenuTogglers.forEach((element) =>
            element.addEventListener("click", _toggleMobileMenu),
        );
    }

    return Object.freeze({
        init,
    });
}
