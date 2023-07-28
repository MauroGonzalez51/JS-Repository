import { ConvertionUnits } from "./ConvertionUnits.js";

const createElements = () => {
    let selectList = document.querySelectorAll(".select");

    selectList.forEach((container) => {
        let fragment = document.createDocumentFragment();

        Object.entries(ConvertionUnits)
            .map(([value, { label }]) => {
                let option = document.createElement("option");
                option.textContent = `${label || "N/A" } [${value}]`;
                option.value = value;

                return option;
            })
            .forEach((element) => fragment.appendChild(element));

        container.appendChild(fragment);
    });
};

export default createElements;
