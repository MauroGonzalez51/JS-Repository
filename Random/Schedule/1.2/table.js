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

    const { ES } = headers;

    ES.map((header) => {
        const cell = document.createElement("td");
        cell.textContent = capitalize(header);

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
                return cell;
            }

            cell.classList.add(classTimeStamp);
            cell.classList.add(header);

            return cell;
        }).forEach((cell) => row.appendChild(cell));

        tbody.appendChild(row);
    });

    fragment.appendChild(tbody);
    table.appendChild(fragment);
};

const initialTable = () => {
    tableHeader();
    tableBody();
};

export { initialTable };
