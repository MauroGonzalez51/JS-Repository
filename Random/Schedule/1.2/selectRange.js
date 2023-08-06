import { timeStamps } from "./select.js";

const selectRange = (data) => {
    const { positionStart, positionEnd } = data;
    const steps = positionEnd - positionStart;

    Array.from({ length: steps + 1 }, (_, index) => {
        return timeStamps({
            hourStart: index + 7 + parseInt(positionStart),
            hourEnd: index + 7 + parseInt(positionStart),
        });
    }).forEach(({ classTimeStamp }) => console.log(classTimeStamp));
};

export { selectRange };
