export function createTyper(
    typedElement,
    cursorElement,
    {
        removeIntervalMs = 150,
        removeStartDelayMs = 1500,
        wordList = ["Hello", "World"],
    } = {},
) {
    if (!typedElement) {
        console.error("Please supply typed element argument.");
        return;
    }

    if (!cursorElement) {
        console.error("Please supply cursor element argument.");
        return;
    }

    let removerIntervalId = null;
    let adderIntervalId = null;
    let currentWordIndex = 0;
    let word = wordList[currentWordIndex];

    function startAddingLetters() {
        let index = 1;

        adderIntervalId = setInterval(() => {
            if (typedElement.textContent === word) {
                clearInterval(adderIntervalId);

                startRemovingLetters();

                return;
            }

            typedElement.textContent = word.slice(0, index);

            index += 1;
        }, removeIntervalMs);
    }

    async function startRemovingLetters() {
        await new Promise((resolve) => {
            cursorElement.classList.add("animate-pulse");
            setTimeout(resolve, removeStartDelayMs);
        });

        cursorElement.classList.remove("animate-pulse");

        removerIntervalId = setInterval(() => {
            if (!typedElement.textContent.length) {
                clearInterval(removerIntervalId);

                currentWordIndex =
                    currentWordIndex === wordList.length - 1
                        ? 0
                        : currentWordIndex + 1;

                word = wordList[currentWordIndex];

                startAddingLetters();

                return;
            }

            typedElement.textContent = typedElement.textContent.slice(0, -1);
        }, removeIntervalMs);
    }

    return Object.freeze({ start: startRemovingLetters });
}
