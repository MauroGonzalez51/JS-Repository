import { timeStamps } from "./select.js";

const selectRange = (data) => {
    const { positionStart, positionEnd } = data;
    const steps = positionEnd - positionStart;

    return Array.from({ length: steps + 1 }, (_, index) => {
        return timeStamps({
            hourStart: index + 7 + parseInt(positionStart),
            hourEnd: index + 7 + parseInt(positionStart),
        });
    });
};

export { selectRange };
