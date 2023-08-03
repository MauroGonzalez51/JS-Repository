const selectsHours = document.querySelectorAll(".select.hour");

const ROWS = 12;

const replaceAll = (string, initial, newValue) => {
    return string.replaceAll(initial, newValue);
};

// ! ----------------------------------------------------------------------------------|>

/**
 * * Creating the Elements [HOURS]
 * 
 */

const generateTimeStamps = ({ rows = ROWS, start = 0 }) => {
    return Array.from({ length: rows }, (_, index) => {
        const sufix = index + 7 >= 12 ? "PM" : "AM";
        const hourStart = (index + 7 + start).toString().concat(":00");
        const hourEnd = (index + 7 + start).toString().concat(":50");

        return {
            timeStamp: `${hourStart}-${hourEnd}`,
        };
    });
};

const generateElements = (select, timeStamps) => {
    const fragment = document.createDocumentFragment();

    Object.values(timeStamps)
        .map(({ timeStamp }, index) => {
            const option = document.createElement("option");
            const replacedTimeStamp = replaceAll(timeStamp, ":", "-");

            option.textContent = timeStamp;
            option.classList.add(replacedTimeStamp);
            option.value = replacedTimeStamp;
            option.setAttribute("data-position", index + 1);

            return option;
        })
        .forEach((option) => fragment.appendChild(option));

    select.appendChild(fragment);
};

// + -------------------------------------------------------------|>

/**
 * * Creating the Elements [WEEK]
 * 
 */

// ! ----------------------------------------------------------------------------------|>

/**
 * * Generating values (option) and inserting them
 * 
 * @param {element} HTMLOptionElement
 * This is the one to remove the old ones and insert them later
 * 
 * @param {rowStart} number
 * Each (option) has a "data-position" Attribute, based on that it generates
 * the new values
 * 
 */

const generateInitialValues = () => {
    selectsHours.forEach((select) => {
        generateElements(select, generateTimeStamps({}));
    });
};

const generateDinamicValues = (element, rowStart) => {
    rowStart = parseInt(rowStart);

    Array.from(element.children).forEach((child) => element.removeChild(child));

    generateElements(
        element,
        generateTimeStamps({ rows: ROWS - rowStart, start: rowStart })
    );
};

// ! ----------------------------------------------------------------------------------|>

/**
 * * Events [...]
 * 
 * @param {event} event 
 */

const handleChange = (event) => {
    const elementID = event.target.id === "hourStart" ? "hourEnd" : "hourStart";
    const secondSelect = document.getElementById(elementID);

    event.target.removeEventListener("change", handleChange);

    const selectedOption = event.target.selectedOptions[0];

    generateDinamicValues(
        secondSelect,
        selectedOption.getAttribute("data-position")
    );

    secondSelect.removeEventListener("change", handleChange);
};

selectsHours.forEach((select) => {
    select.addEventListener("change", handleChange);
});

// ! ----------------------------------------------------------------------------------|>

export { generateInitialValues };
