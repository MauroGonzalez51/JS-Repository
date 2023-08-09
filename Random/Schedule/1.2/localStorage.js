const lENGTH = 7;

const getAllStorageData = () => {
    const keys = Object.keys(localStorage);

    return keys.map((key) => {
        const value = localStorage.getItem(key);
        return { key, value };
    });
};

const sendToLocalStorage = (data) => {
    const key = Array.from(
        { length: lENGTH },
        (value) => (value = Math.floor(Math.random() * 9))
    ).join("");

    window.localStorage.setItem(key, JSON.stringify({ ...data, key: key }));
};

const removeItemFromLocalStorage = (key) => {
    window.localStorage.removeItem(key);
};

const clearLocalStorage = () => {
    window.localStorage.clear();
};

const sendColorsToLocalStorage = (data) => {
    window.localStorage.setItem("colors", JSON.stringify(data));
};

const getColors = () => {
    return window.localStorage.getItem("colors");
};

export {
    getAllStorageData,
    sendToLocalStorage,
    removeItemFromLocalStorage,
    clearLocalStorage,
    sendColorsToLocalStorage,
    getColors
};
