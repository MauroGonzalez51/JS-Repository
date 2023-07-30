const LOCAL_STORAGE_NAME = "data";

const saveToLocalStorage = (data) => {
    window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(data));
};

const getFromLocalStorage = () => {
    const data = window.localStorage.getItem(LOCAL_STORAGE_NAME);
    return data ? JSON.parse(data) : {};
};

const clearLocalStorage = () => {
    window.localStorage.clear();
}

export { saveToLocalStorage, getFromLocalStorage, clearLocalStorage };
