const getAllStorageData = () => {
    const keys = Object.keys(localStorage);

    return keys.map((key) => {
        const value = localStorage.getItem(key);
        return { key, value };
    });
};


export { getAllStorageData };
