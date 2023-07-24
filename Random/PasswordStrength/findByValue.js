import passwordStrength from "./passwordStrength.js";

const findByValue = (value) => {
    return Object.values(passwordStrength).find((item) => item.value === value);
};

export default findByValue
