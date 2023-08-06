import { generateTimeStamps, DAYS_OF_THE_WEEK, replaceAll } from "./select.js";
import { capitlizeString } from "./script.js";
import { getAllStorageData } from "./localStorage.js";

const table = document.querySelector(".table");
const { EN: headers } = structuredClone(DAYS_OF_THE_WEEK);
headers.unshift("N/A");

// ! ----------------------------------------------------------------------------------|>

const cellElement = (cell, { ...propertyes }) => {
    const fragment = document.createDocumentFragment();

    const container = document.createElement("div");
    container.classList.add("content");

    const { key, ...rest } = propertyes;

    Object.entries(rest)
        .map(([key, value]) => {
            let div = document.createElement("div");
            div.textContent = value;
            div.setAttribute("data-key", key);
            return div;
        })
        .forEach((elementContainer) => {
            elementContainer.addEventListener("click", (event) => {
                const key = event.target.getAttribute("data-key");
                console.log(key);
            });

            fragment.appendChild(elementContainer);
        });

    container.appendChild(fragment);
};

// ! ----------------------------------------------------------------------------------|>

const searchCell = ({ day, className }) => {
    const escapedClassName = CSS.escape(className);
    return table.querySelector(`.${day}.${escapedClassName}`);
};

const selectRange = (start, end, day) => {
    start = parseInt(start);
    end = parseInt(end);

    const range = generateTimeStamps({ start: start, rows: end - start + 1 });

    const cells = range.map(({ replacedTimeStamp }) => {
        searchCell({ day: day, className: replacedTimeStamp });
    });

    return cells;
};

const insertDataInTable = () => {
    getAllStorageData().forEach(({ value }) => {
        const data = JSON.parse(value);

        const {
            subjectName,
            NRC,
            classroom,
            day,
            selectedHourStart: start,
            selectedHourEnd: end,
            key,
        } = data;

        console.log(start, end, day);

        console.log(selectRange(start, end, day));

        // .forEach((cell) => {
        //     console.log(cell);

        //     cellElement(cell, {
        //         subjectName: subjectName,
        //         NRC: NRC,
        //         classroom: classroom,
        //         key: key,
        //     });
        // });
    });
};

// ! ----------------------------------------------------------------------------------|>

const generateTableHeaders = () => {
    const fragment = document.createDocumentFragment();

    const row = document.createElement("tr");

    headers
        .map((value) => {
            const cell = document.createElement("td");
            cell.textContent = capitlizeString(value);

            return cell;
        })
        .forEach((cell) => fragment.appendChild(cell));

    row.appendChild(fragment);
    table.appendChild(row);
};

const generateTable = () => {
    removePreviousTable();

    generateTableHeaders();

    generateTimeStamps({}).forEach(({ timeStamp, replacedTimeStamp }) => {
        const fragment = document.createDocumentFragment();

        const row = document.createElement("tr");

        headers
            .map((value, index) => {
                const cell = document.createElement("td");

                if (!index) {
                    cell.textContent = timeStamp;
                }

                if (index) {
                    cell.classList.add(replacedTimeStamp, value);
                }

                return cell;
            })
            .forEach((element) => fragment.appendChild(element));

        row.appendChild(fragment);
        table.appendChild(row);
    });

    insertDataInTable();
};

const removePreviousTable = () => {
    Array.from(table.children).forEach((children) =>
        table.removeChild(children)
    );
};

// ! ----------------------------------------------------------------------------------|>

export { generateTable };
