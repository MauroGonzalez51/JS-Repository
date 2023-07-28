import createElements from "./CreateElements.js";
import convertUnits from "./ConvertUnits.js";

window.addEventListener("load", createElements());

document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault();
    convertUnits();
});

document.querySelector(".button").addEventListener("click", () => {
    convertUnits();
});
