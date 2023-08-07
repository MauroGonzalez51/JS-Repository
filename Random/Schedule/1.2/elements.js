import {
    getAllStorageData,
    removeItemFromLocalStorage,
} from "./localStorage.js";

import { initialTable } from "./table.js";

const table = document.querySelector(".table");

const selectCell = ({ daySelect, hourLabel }) => {
    const escapedClassName = CSS.escape(hourLabel);
    return table.querySelector(`.${escapedClassName}.${daySelect}`);
};

const insertData = (element, { ...args }) => {
    const { key, ...params } = args;

    const fragment = document.createDocumentFragment();

    const container = document.createElement("div");
    container.classList.add("content");
    container.setAttribute("data-key", key);

    Object.entries(params)
        .map(([_, value], index) => {
            const div = document.createElement("div");
            div.textContent = value;

            if (!index) div.classList.add("subject-name");

            return div;
        })
        .forEach((div) => container.appendChild(div));

    fragment.appendChild(container);
    element.appendChild(fragment);

    container.addEventListener("click", (event) => {
        const key = event.target.parentElement.getAttribute("data-key");

        if (!window.confirm("¿Quieres elimiar este elemento?")) return;

        removeItemFromLocalStorage(key);
        
        initialTable();
    });
};

const createElements = () => {
    getAllStorageData().forEach(({ value }) => {
        const {
            subject,
            NRC,
            classroom,
            daySelect,
            hourLabel: { hourLabel },
            key,
        } = JSON.parse(value);

        insertData(selectCell({ daySelect, hourLabel }), {
            subject,
            NRC,
            classroom,
            key,
        });
    });
};

export { createElements };
