export function createForm(form, fields) {
    function init() {
        form.addEventListener("submit", (event) => {
            const shouldSubmit = fields.areValid();

            if (!shouldSubmit) {
                event.preventDefault();
            }
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
