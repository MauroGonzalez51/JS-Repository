import { headers, capitalize } from "./table.js";

const selects = document.querySelectorAll(".form-field > .select.hour");
const daySelect = document.getElementById("daySelect");

const ROWS = 12;

// ! ---------------------------------------------------------------------------|>

const timeStamps = ({ hourStart = 7, hourEnd = 7, start = 0 }) => {
    hourStart = parseInt(hourStart);
    hourEnd = parseInt(hourEnd);

    return {
        timeStamp: `${(hourStart + start).toString().concat(":00")} - ${(
            hourEnd + start
        )
            .toString()
            .concat(":50")}`,

        classTimeStamp: `${(hourEnd + start)
            .toString()
            .concat(":00")
            .replaceAll(":", "-")}-${(hourEnd + start)
            .toString()
            .concat(":50")
            .replaceAll(":", "-")}`,

        position: hourStart - 7,
    };
};

// ! ---------------------------------------------------------------------------|>

const createOptionElement = ({ timeStamp, classTimeStamp, position }) => {
    const option = document.createElement("option");
    option.value = classTimeStamp;
    option.textContent = timeStamp;
    option.setAttribute("data-position", position);

    return option;
};

const initialValues = () => {
    selects.forEach((select) => {
        const fragment = document.createDocumentFragment();

        Array.from({ length: ROWS }, (_, index) => {
            return timeStamps({
                hourStart: index + 7,
                hourEnd: index + 7,
            });
        })
            .map(({ timeStamp, classTimeStamp, position }) => {
                return createOptionElement({
                    timeStamp: timeStamp,
                    classTimeStamp: classTimeStamp,
                    position: position,
                });
            })
            .forEach((option) => fragment.appendChild(option));

        select.appendChild(fragment);
    });

    const { ES, EN } = structuredClone(headers);
    const fragment = document.createDocumentFragment();

    ES.shift();
    EN.shift();

    ES.map((value, index) => {
        const option = document.createElement("option");
        option.textContent = capitalize(value);
        option.value = EN[index];

        return option;
    }).forEach((option) => fragment.appendChild(option));

    daySelect.appendChild(fragment);
};

// ! ---------------------------------------------------------------------------|>

const [hourStart, hourEnd] = Array.from(selects);

const dinamicValues = (element, positionStart) => {
    const fragment = document.createDocumentFragment();

    positionStart = parseInt(positionStart);

    Array.from(element.children).forEach((children) =>
        element.removeChild(children)
    );

    Array.from({ length: ROWS - positionStart - 1 }, (_, index) => {
        return timeStamps({
            hourStart: index + 7 + positionStart + 1,
            hourEnd: index + 7 + positionStart + 1,
        });
    })
        .map(({ timeStamp, classTimeStamp, position }) => {
            return createOptionElement({
                timeStamp: timeStamp,
                classTimeStamp: classTimeStamp,
                position: position,
            });
        })
        .forEach((option) => fragment.appendChild(option));

    element.appendChild(fragment);
};

hourStart.addEventListener("change", (event) => {
    const position =
        event.target.selectedOptions[0].getAttribute("data-position");

    dinamicValues(hourEnd, position);
});

// ! ---------------------------------------------------------------------------|>

export { initialValues, timeStamps, ROWS };
