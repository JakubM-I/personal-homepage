export const saveToLocalStorage = (darkMode: boolean) => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
}

export const getFromLocalStorage = () => {
    JSON.parse(localStorage.getItem("darkMode") || "null");
}