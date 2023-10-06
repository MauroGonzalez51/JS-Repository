/**
 *
 * @param {String} year
 * @param {String} month
 * @param {Number} day
 *      day starts with 0 for sunday, 1 for monday, 2 for tuesday, ...
 */

const ACTUAL_DATE = new Date();

const element = document.getElementById("app");

const DAY = 1; // Monday

const getAllDays = (year, month, day) => {
    const date = new Date(year, month);

    const days = [];

    while (date.getMonth() === month) {
        if (date.getDay() === day) {
            days.push(new Date(date));
        }

        date.setDate(date.getDate() + 1);
    }

    return days;
};

const filterDays = (days) => {
    return [days[1], days[days.length - 1]];
};

const countDays = (days) => {
    const CONVERTER = {
        MINIMUM_DAYS: 3,
        RATE: 8.64e7,
    };

    days.forEach((day) => {
        const differenceInMilliseconds = Math.abs(day - ACTUAL_DATE);
        const differenceInDays = Math.floor(
            differenceInMilliseconds / CONVERTER.RATE
        );

        if (differenceInDays <= CONVERTER.MINIMUM_DAYS) {
            element.innerHTML = `<span id='days'>${differenceInDays}</span> dia(s) para el siguiente dia sin moto [${day.toDateString()}]`;
        } else
            element.textContent = `Todo bien por ahora`;
    });
};

window.addEventListener("load", () => {
    const days = getAllDays(
        ACTUAL_DATE.getFullYear(),
        ACTUAL_DATE.getMonth(),
        DAY
    );
    const filteredDays = filterDays(days);

    countDays(filteredDays);
});
