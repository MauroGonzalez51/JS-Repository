import { getFormValues } from "./formValues.js";
import { initialValues } from "./select.js";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(getFormValues(event.target));
});

window.addEventListener("load", () => {
    initialValues();
});


