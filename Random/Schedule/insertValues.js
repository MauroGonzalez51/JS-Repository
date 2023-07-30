const insertValues = (data, dataToInsert) => {
    // const daySelected = dataToInsert.pop().value;
    // if (!Array.isArray(data[daySelected])) {
    //     data[daySelected] = [];
    // }
    // data[daySelected] = [...data[daySelected], { ...dataToInsert }];

    const { value: daySelected } = dataToInsert.at(-1);

    let [index] = Object.keys(data).filter((key, index) => {
        return key === daySelected ? [index] : false;
    });

    data[index] = [...data[index], { ...dataToInsert }];

};

export default insertValues;
