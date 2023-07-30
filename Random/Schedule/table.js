import insertElement from "./insertElement.js";

const table = document.querySelector(".table");

const createInitialTable = () => {
    const tableHeaders = [
        "N/A",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ];

    const rows = 12;

    const hoursArray = Array.from({ length: rows }, (_, index) => {
        const sufix = index + 7 >= 12 ? "PM" : "AM";
        const hourStart = `${(index + 7).toString().concat(":00")}`;
        const hourEnd = `${(index + 7).toString().concat(":50")}`;

        return {
            timeStamp: `${hourStart}${sufix} - ${hourEnd}${sufix}`,
            className: `${hourStart.replaceAll(":", "-")}-${hourEnd.replaceAll(
                ":",
                "-"
            )}`,
        };
    });

    const createTableHeader = () => {
        let fragment = document.createDocumentFragment();
        let row = document.createElement("tr");

        tableHeaders.forEach((item) => {
            let cell = document.createElement("td");
            cell.classList.add("cell");
            cell.classList.add("table-header");
            cell.textContent = item.charAt(0).toUpperCase() + item.slice(1);
            row.appendChild(cell);
        });

        fragment.appendChild(row);

        table.appendChild(fragment);
    };

    createTableHeader();

    hoursArray
        .map(({ timeStamp, className }) => {
            let fragment = document.createDocumentFragment();

            let row = document.createElement("tr");

            tableHeaders.forEach((item, index) => {
                let cell = document.createElement("td");
                cell.classList.add("cell");

                if (!index) {
                    cell.textContent = timeStamp;
                }

                if (index) {
                    cell.classList.add(item);
                    cell.classList.add(className);
                }

                row.appendChild(cell);
            });

            fragment.appendChild(row);
            return fragment;
        })
        .forEach((fragment) => {
            table.appendChild(fragment);
        });
};

/**
 * * Forma de buscar en la tabla
 *
 * Queda algo asi, [Por clases]
 *
 * class="monday 7-00-7-50"
 *
 * Que es basicamente
 *
 * + dia
 *
 * + hourStart-hourEnd
 * ! Pero antes de eso haber reemplazado ":" por "-"
 *
 *
 *
 */

const removePreviousTable = () => {
    Array.from(table.children).forEach((item) => {
        table.removeChild(item);
    });
};

const searchCell = (day, entrie) => {
    const [_, __, { value: hourStart }, { value: hourEnd }] =
        Object.values(entrie);

    const className = `${hourStart.replaceAll(":", "-")}-${hourEnd.replaceAll(
        ":",
        "-"
    )}`;

    const escapedClassName = CSS.escape(className);

    return table.querySelector(`.${day}.${escapedClassName}`);
};

const insertDataInTable = (data) => {
    Object.entries(data).forEach(([day, dataPerDay]) => {
        dataPerDay.forEach((entrie) => {
            const cell = searchCell(day, entrie);

            cell && insertElement(cell, entrie);
        });
    });
};

const createTable = (data) => {
    removePreviousTable();

    createInitialTable();

    document.querySelector("table").parentElement.classList.add("visible");

    insertDataInTable(data);
};

export { createTable };
