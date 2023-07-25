import { modifiedPasswordStrength } from "./passwordStrength.js";

const findClosestValue = (value) => {
    return Object.values(modifiedPasswordStrength).reduce(
        (closest, current) => {
            return Math.abs(current.value - value) <
                Math.abs(closest.value - value)
                ? current
                : closest;
        }
    );
};

export default findClosestValue;
