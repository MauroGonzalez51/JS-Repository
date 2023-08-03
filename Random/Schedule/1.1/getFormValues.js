const getFormValuesById = (form) => {
    const inputs = form.querySelectorAll(".form-field__input");
    const selects = form.querySelectorAll(".form-field > .select");

    const inputValues = Object.fromEntries(
        Array.from(inputs).map((input) => [input.id, input.value])
    );

    const selectValues = Object.fromEntries(
        Array.from(selects).map((select) => [select.id, select.value])
    );

    return { ...inputValues, ...selectValues };
};

export { getFormValuesById };
