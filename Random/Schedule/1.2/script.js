import { getFormValues } from "./formValues.js";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(getFormValues(event.target));
});
