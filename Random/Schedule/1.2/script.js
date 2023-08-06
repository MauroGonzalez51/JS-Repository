import { getFormValues } from "./formValues.js";
import { initialValues } from "./select.js";
import { selectRange } from "./selectRange.js";
import { initialTable } from "./table.js";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    selectRange(getFormValues(event.target));
});

window.addEventListener("load", () => {
    initialValues();
    initialTable();
});
