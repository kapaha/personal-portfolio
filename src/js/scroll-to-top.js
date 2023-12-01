export function createScrollToTop(element) {
    function init() {
        element.classList.add("hidden");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                element.classList.remove("hidden");
            } else {
                element.classList.add("hidden");
            }
        });
    }

    return Object.freeze({
        init,
    });
}
