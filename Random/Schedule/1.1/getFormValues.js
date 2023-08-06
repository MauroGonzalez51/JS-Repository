const getFormValuesById = (form) => {
    const inputs = form.querySelectorAll(".form-field__input");
    const selects = form.querySelectorAll(".form-field > .select");

    const inputValues = Object.fromEntries(
        Array.from(inputs).map((input) => [input.id, input.value])
    );

    const selectValues = Object.fromEntries(
        Array.from(selects).map((select) => [select.id, select.value])
    );

    const selectedHourStart = document
        .getElementById("hourStart")
        .selectedOptions[0].getAttribute("data-position");
        
    const selectedHourEnd = document
        .getElementById("hourEnd")
        .selectedOptions[0].getAttribute("data-position");

    return {
        ...inputValues,
        ...selectValues,
        selectedHourStart,
        selectedHourEnd,
    };
};

export { getFormValuesById };
