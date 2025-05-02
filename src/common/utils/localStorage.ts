import { SavedThemeProps } from "../interfaces/interfaces";

export const saveToLocalStorage = (darkMode: boolean) => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
}

export const loadFromLocalStorage = (): SavedThemeProps => {
    const darkMode = JSON.parse(localStorage.getItem("darkMode") || "null");
    return {darkMode}
}