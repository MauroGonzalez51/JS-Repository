import { convertionRates } from "./ConvertionUnits.js";

const getValues = () => {
    const { value: initialUnit } = document.getElementById("initial__units");
    const { value: targetUnit } = document.getElementById("target__units");
    const { value: initialValue } = document.getElementById("initial__value");

    return { initialUnit, targetUnit, initialValue };
};

const convertUnits = () => {
    const { initialUnit, targetUnit, initialValue } = getValues();
    const conversionRate = convertionRates({ initialUnit, targetUnit })
    
    const targetValue = initialValue * conversionRate;

    document.getElementById("target__value").value = targetValue
};

export default convertUnits;
