import { getFormValuesById } from "./getFormValues.js";
import { getAllStorageData } from "./localStorage.js";
import { generateInitialValues } from "./select.js";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(getFormValuesById(event.target));
});

window.addEventListener("load", () => {
    generateInitialValues();
});
