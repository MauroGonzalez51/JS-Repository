const getValues = (inputs) => {
    const insertedValues = Array.from(inputs).filter((item) => item.value);

    return insertedValues.length === inputs.length
        ? Array.from(inputs)
              .map((item) => item.value)
              .join("")
        : null;
};

export default getValues;
