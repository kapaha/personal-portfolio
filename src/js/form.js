export function createForm(form, fields) {
    function init() {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const successEl = document.querySelector(".success");
            const errorEl = document.querySelector(".form-error");

            errorEl.classList.add("hidden");
            successEl.classList.add("hidden");

            const shouldSubmit = fields.areValid();

            if (!shouldSubmit) {
                return;
            }

            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            let formHasSubmitted = false;

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            })
                .then((response) => {
                    if (response.status === 200) {
                        formHasSubmitted = true;
                    } else {
                        throw new Error();
                    }
                })
                .catch(() => {})
                .then(function () {
                    if (!formHasSubmitted) {
                        errorEl.classList.remove("hidden");

                        setTimeout(() => {
                            errorEl.classList.add("hidden");
                        }, 3000);

                        return;
                    }

                    form.reset();

                    successEl.classList.remove("hidden");
                    setTimeout(() => {
                        successEl.classList.add("hidden");
                    }, 3000);
                });
        });
    }

    return Object.freeze({ init });
}

export function createField(inputElement, errorElement, validationRules) {
    function getInputValue() {
        return inputElement.value.trim();
    }

    function isValid() {
        errorElement.style.display = "none";

        return validationRules.every((rule) => {
            const rulePassed = rule(getInputValue());

            if (rulePassed) {
                errorElement.style.display = "none";
            } else {
                errorElement.style.display = "block";
            }

            return rulePassed;
        });
    }

    return Object.freeze({
        isValid,
        focus: () => inputElement.focus(),
    });
}

export function createFieldGroup(fields) {
    function areValid() {
        let allValid = true;
        let firstFailingInputFocused = false;

        for (const field of fields) {
            const isValid = field.isValid();

            if (!isValid) {
                allValid = false;
            }

            if (!isValid && !firstFailingInputFocused) {
                field.focus();
                firstFailingInputFocused = true;
            }
        }

        return allValid;
    }

    return Object.freeze({
        areValid,
    });
}

const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

export const validationRules = {
    required(value) {
        return value !== "";
    },

    email(value) {
        return emailRegex.test(value);
    },
};
