const resultRange = document.getElementById("result__input");
const resultLabel = document.getElementById("result__label");

const modifyRange = (options, input, previousClassLabel) => {
    const { color = "#000", label = "", value, classLabel } = options;

    if (input.value.length) {
        resultLabel.textContent = label;
        resultLabel.style.color = color;

        resultRange.style.setProperty("--value", value);

        if (previousClassLabel) {
            resultRange.classList.remove(previousClassLabel);
        }
        
        resultRange.classList.add(classLabel);
    } else {
        resultLabel.textContent = "Waiting for input ...";
        resultLabel.classList.add("default");
        resultLabel.style.color = color;

        resultRange.style.setProperty("--value", 0);

        if (previousClassLabel) {
            resultRange.classList.remove(previousClassLabel);
        }
    }

    return classLabel; 
};

export default modifyRange;
