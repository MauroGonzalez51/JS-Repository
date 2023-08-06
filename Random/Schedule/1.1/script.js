import { getFormValuesById } from "./getFormValues.js";
import { sendToLocalStorage } from "./localStorage.js";
import { generateInitialValues, createWeekElements } from "./select.js";
import { generateTable } from "./table.js";

const capitlizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    sendToLocalStorage(getFormValuesById(event.target));

    generateTable();
});

window.addEventListener("load", () => {
    generateInitialValues();
    
    createWeekElements();

    generateTable();
});

export { capitlizeString };
