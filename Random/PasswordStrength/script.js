import ICON from "./icon.js";

import {
    containsUppercase,
    containsLowercase,
    verifyLength,
    containsSymbols,
    containsNumbers,
    containsOnlySpaces,
} from "./cases.js";

import findByValue from "./findByValue.js";

import modifyRange from "./modifyRange.js";

import { valuePerRule } from "./passwordStrength.js";

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

let previousValue;

input.addEventListener("input", (event) => {
    const verificationData = [
        { verifyFn: containsUppercase },
        { verifyFn: containsLowercase, increment: 20 },
        { verifyFn: (value) => verifyLength(value, MIN_LENGTH) },
        { verifyFn: containsSymbols },
        { verifyFn: containsNumbers },
        { verifyFn: (value) => !containsOnlySpaces(value) },
    ];

    let value = verificationData.reduce((acc, { verifyFn }) => {
        return verifyFn(input.value) ? (acc += valuePerRule) : acc;
    }, 0);

    previousValue = modifyRange(
        findByValue(value),
        event.target,
        findByValue(previousValue)
    );
});
