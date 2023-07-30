const getValues = () => {
    const elementsID = [
        { id: "subject-name" },
        { id: "NRC" },
        { id: "hour-start" },
        { id: "hour-end" },
        { id: "room" },
        { id: "day-selected" },
    ];

    const values = elementsID.map(({ id }) => {
        const element = document.getElementById(id);

        return {
            id,
            value: element?.value,
        };
    });

    let sucess = true;

    values.forEach(({ value }) => {
        if (!value) sucess = false;
    });

    return sucess ? values : false;
};

export default getValues;
