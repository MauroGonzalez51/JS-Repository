import { ROWS, timeStamps } from "./select.js";

const table = document.querySelector(".table");

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const headers = {
    ES: [
        "N/A",
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo",
    ],

    EN: [
        "N/A",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ],
};

const tableHeader = () => {
    const fragment = document.createDocumentFragment();

    // * Container
    const thead = document.createElement("thead");

    // * row
    const row = document.createElement("tr");

    const { EN } = headers;

    EN.map((header) => {
        const cell = document.createElement("td");
        cell.textContent = capitalize(header);
        cell.classList.add("cell");

        return cell;
    }).forEach((cell) => row.appendChild(cell));

    thead.appendChild(row);
    fragment.appendChild(thead);
    table.appendChild(fragment);
};

const tableBody = () => {
    const { EN } = headers;

    const tbody = document.createElement("tbody");

    const fragment = document.createDocumentFragment();

    Array.from({ length: ROWS }, (_, index) => {
        return timeStamps({
            hourStart: index + 7,
            hourEnd: index + 7,
        });
    }).forEach(({ timeStamp, classTimeStamp }) => {
        const row = document.createElement("tr");

        EN.map((header, index) => {
            const cell = document.createElement("td");

            if (!index) {
                cell.textContent = timeStamp;
                cell.classList.add("cell");
                return cell;
            }

            cell.classList.add(classTimeStamp);
            cell.classList.add(header);
            cell.classList.add("cell");

            return cell;
        }).forEach((cell) => row.appendChild(cell));

        tbody.appendChild(row);
    });

    fragment.appendChild(tbody);
    table.appendChild(fragment);
};

const initialTable = () => {
    Array.from(table.children).forEach((children) =>
        table.removeChild(children)
    );

    tableHeader();

    tableBody();

    table.parentElement.classList.add("visible");
};

export { initialTable, headers, capitalize };
