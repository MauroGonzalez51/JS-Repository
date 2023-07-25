const resultRange = document.getElementById("result__input");

const resultLabel = document.getElementById("result__label");
let { textContent } = resultLabel;

const resetDefault = ({ color = "#000", background = "#000", classLabel }) => {
    resultRange.style.setProperty("--value", 0);
    resultRange.classList.add("default");
    resultRange.classList.remove(classLabel);
    
    resultLabel.style.color = color;
    resultLabel.textContent = textContent;
};

const modifyRange = (options, input, previousOptions) => {
    if (!input.value) {
        let { classLabel } = previousOptions;
        resetDefault({ classLabel });
        return;
    }

    resultRange.classList.remove(previousOptions.classLabel);
    resultRange.classList.remove("default");

    const { color, label, classLabel, value } = options;

    // *
    resultRange.style.setProperty("--value", value);

    // *
    resultRange.classList.add(classLabel);

    // *
    resultLabel.style.color = color;

    // *
    resultLabel.textContent = label;

    return value;
};

export default modifyRange;
