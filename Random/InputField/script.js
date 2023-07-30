import getValues from "./getValues.js";

const form = document.querySelector(".input-field__container");
const allInputs = document.querySelectorAll(".input-field__input");

const clearInputs = () => {
    allInputs.forEach((input) => (input.value = ""));
};

window.addEventListener("load", allInputs[0].focus());

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const OTP = getValues(allInputs);

    if (!OTP) return;
    else console.log(OTP);

    allInputs.forEach((input, index) => {
        if (!index) {
            input.classList.add("focus");
            input.focus();
            return;
        }

        input.classList.remove("focus");
    });

    clearInputs();
});

let nextInput, previousInput, focusedInput;

allInputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
        nextInput = event.target.nextElementSibling;

        if (!input.value) return;

        if (nextInput && !nextInput.value && index !== allInputs.length - 1) {
            input.classList.remove("focus");
            nextInput.focus();
            nextInput.classList.add("focus");

            focusedInput = event.target.nextElementSibling;
        }
    });

    input.addEventListener("keyup", (event) => {
        if (event.key === "Backspace" && !event.target.value) {
            previousInput = event.target.previousElementSibling;

            if (previousInput) {
                event.target.classList.remove("focus");
                previousInput.classList.add("focus");
                previousInput.focus();
            }
        }
    });

    input.addEventListener("click", (event) => {
        if (focusedInput) {
            focusedInput.classList.remove("focus");
        }

        input.classList.add("focus");
        focusedInput = input;
        input.focus();
    });
});
