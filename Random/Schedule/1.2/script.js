import { getFormValues } from "./formValues.js";
import { initialValues } from "./select.js";
import { selectRange } from "./selectRange.js";
import { initialTable } from "./table.js";
import { createElements } from "./elements.js";
import { sendToLocalStorage, clearLocalStorage } from "./localStorage.js";

const form = document.querySelector(".form");

const generateTableBtn = document.getElementById("generateTable");
const clearLocalStorageBtn = document.getElementById("clearLocalStorage");

const clearInputs = (form) => {
    form.querySelectorAll("input").forEach((element) => (element.value = ""));
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = getFormValues(event.target);

    const hourLabels = selectRange(data).map(({ classTimeStamp }) => {
        return {
            hourLabel: classTimeStamp,
        };
    });

    hourLabels.forEach((hourLabel) => {
        const { hourStart, hourEnd, ...rest } = data;

        sendToLocalStorage({ ...rest, hourLabel });
    });

    initialTable();
    createElements();

    clearInputs(form);
});

window.addEventListener("load", () => {
    initialValues();
});

generateTableBtn.addEventListener("click", () => {
    initialTable();
    createElements();
});

clearLocalStorageBtn.addEventListener("click", () => {
    clearLocalStorage();
    window.location.reload();
});
