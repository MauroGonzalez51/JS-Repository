import getValues from "./getValues.js";
import insertValues from "./insertValues.js";
import {
    saveToLocalStorage,
    getFromLocalStorage,
    clearLocalStorage,
} from "./localStorage.js";
import { createTable } from "./table.js";

let data = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
};

const form = document.querySelector(".form");
const createTableBtn = document.getElementById("generateTable");
const clearLocalStorageBtn = document.getElementById("clearLocalStorage");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const values = getValues();

    if (!values) return;

    insertValues(data, values);

    saveToLocalStorage(data);

    createTable(getFromLocalStorage());
});

createTableBtn.addEventListener("click", (event) => {
    createTable(getFromLocalStorage());
});

clearLocalStorageBtn.addEventListener("click", (event) => {
    clearLocalStorage();
});

window.addEventListener("load", () => {
    const localStorageData = getFromLocalStorage();

    if (Object.entries(localStorageData).length >= 1) {
        data = localStorageData;
    }
});
