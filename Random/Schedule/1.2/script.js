import { getFormValues } from "./formValues.js";
import { initialValues } from "./select.js";
import { selectRange } from "./selectRange.js";
import { initialTable } from "./table.js";
import { createElements } from "./elements.js";
import { sendToLocalStorage } from "./localStorage.js";

const form = document.querySelector(".form");

/**
 * TODO
 *
 * * Take form input > send it to localStorage
 * * create the elements in the table
 *
 */

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

    // createElements();
});

window.addEventListener("load", () => {
    initialValues();
    initialTable();
    // createElements();
});
