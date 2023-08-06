const selects = document.querySelectorAll(".form-field > .select");

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

const createOptionElement = ({ timeStamp, classTimeStamp }) => {
    const option = document.createElement("option");
    option.value = classTimeStamp;
    option.textContent = timeStamp;

    return option;
};

const initialValues = () => {
    selects.forEach((select) => {
        const fragment = document.createDocumentFragment();

        const data = Array.from({ length: ROWS }, (value, index) => {
            return timeStamps({
                hourStart: index + 7,
                hourEnd: index + 7,
            });
        });

        data.map(({ timeStamp, classTimeStamp }) => {
            return createOptionElement({
                timeStamp: timeStamp,
                classTimeStamp: classTimeStamp,
            });
        }).forEach((option) => fragment.appendChild(option));

        select.appendChild(fragment);
    });
};

// ! ---------------------------------------------------------------------------|>

export { initialValues };
