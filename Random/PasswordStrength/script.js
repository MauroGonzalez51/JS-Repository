import ICON from "./icon.js";

import {
    containsUppercase,
    containsLowercase,
    verifyLength,
    containsSymbols,
    containsNumbers,
} from "./cases.js";

import findByValue from "./findByValue.js";

import modifyRange from "./modifyRange.js";

const MIN_LENGTH = 10;

const input = document.getElementById("password");
const iconContainer = document.querySelector(".change-input-type");
const icon = document.querySelector(".icon");

const replaceClass = (element, classToRemove, classToAdd) => {
    element.classList.remove(classToRemove);
    element.classList.add(classToAdd);
};

iconContainer.addEventListener("click", (event) => {
    event.preventDefault();

    icon.classList.contains(ICON.EYE.className)
        ? replaceClass(icon, ICON.EYE.className, ICON.EYE_SLASH.className)
        : replaceClass(icon, ICON.EYE_SLASH.className, ICON.EYE.className);

    input.type === "text" ? (input.type = "password") : (input.type = "text");

    input.focus();
});

let currentClassLabel;

input.addEventListener("input", (event) => {
    const verificationData = [
        { verifyFn: containsUppercase, increment: 20 },
        { verifyFn: containsLowercase, increment: 20 },
        { verifyFn: (value) => verifyLength(value, MIN_LENGTH), increment: 20 },
        { verifyFn: containsSymbols, increment: 20 },
        { verifyFn: containsNumbers, increment: 20 },
    ];

    let value = verificationData.reduce((acc, { verifyFn, increment }) => {
        return verifyFn(input.value) ? (acc += increment) : acc;
    }, 0);

    currentClassLabel = modifyRange(
        findByValue(value) || {},
        event.target,
        currentClassLabel
    );
});
