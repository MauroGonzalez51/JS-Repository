const selectsHours = document.querySelectorAll(".select.hour");
const selectDay = document.getElementById("day");

const ROWS = 12;

const DAYS_OF_THE_WEEK = {
    ES: [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo",
    ],

    EN: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ],
};

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
            replacedTimeStamp: `${replaceAll(
                `${hourStart}-${hourEnd}`,
                ":",
                "-"
            )}`,
        };
    });
};

const generateElements = (select, timeStamps) => {
    const fragment = document.createDocumentFragment();

    Object.values(timeStamps)
        .map(({ timeStamp, replacedTimeStamp }, index) => {
            const option = document.createElement("option");

            option.textContent = timeStamp;
            option.value = replacedTimeStamp;
            option.setAttribute("data-position", index);

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

const createWeekElements = () => {
    const { ES, EN } = DAYS_OF_THE_WEEK;

    const fragment = document.createDocumentFragment();

    EN.map((value, index) => {
        const option = document.createElement("option");
        option.textContent = ES[index];
        option.value = value;

        return option;
    }).forEach((element) => fragment.appendChild(element));

    selectDay.appendChild(fragment);
};

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

// ! ----------------------------------------------------------------------------------|>

export {
    generateInitialValues,
    createWeekElements,
    generateTimeStamps,
    DAYS_OF_THE_WEEK,
    replaceAll,
};
