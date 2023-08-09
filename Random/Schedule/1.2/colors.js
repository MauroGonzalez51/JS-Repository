import { sendColorsToLocalStorage, getColors } from "./localStorage.js";

const primaryColor = document.getElementById("primary-color");
const secondaryColor = document.getElementById("secondary-color");
const tercearyColor = document.getElementById("terceary-color");

const resetButton = document.querySelector(".reset-button");

const colors = {
    primary: primaryColor.value,
    secondary: secondaryColor.value,
    terceary: tercearyColor.value,
};

const defaultColors = {
    primary: "#7E18CF",
    secondary: "#000000",
    terceary: "#ffffff",
};

const setElements = (data) => {
    const { primary, secondary, terceary } = JSON.parse(data);

    if (document.startViewTransition()) {
        document.startViewTransition(() => {
            document.documentElement.style.setProperty("--primary-color", primary);
            document.documentElement.style.setProperty("--secondary-color", secondary);
            document.documentElement.style.setProperty("--terceary-color", terceary);
        });

        return;
    }

    document.documentElement.style.setProperty("--primary-color", primary);
    document.documentElement.style.setProperty("--secondary-color", secondary);
    document.documentElement.style.setProperty("--terceary-color", terceary);
};

const handleColorChange = (event) => {
    const colorName = event.target.id.replace("-color", "");
    colors[colorName] = event.target.value;
    sendColorsToLocalStorage(colors);

    setElements(getColors());
};

window.addEventListener("load", () => {
    setElements(getColors());
});

primaryColor.addEventListener("change", handleColorChange);
secondaryColor.addEventListener("change", handleColorChange);
tercearyColor.addEventListener("change", handleColorChange);

resetButton.addEventListener("click", () => {
    setElements(JSON.stringify(defaultColors));

    sendColorsToLocalStorage(defaultColors);
});
