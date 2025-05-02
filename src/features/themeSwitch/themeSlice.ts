import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { loadFromLocalStorage } from "../../common/utils/localStorage";
import { SavedThemeProps } from "../../common/interfaces/interfaces";

interface ThemeState {
    isDarkMode: boolean;
}

const savedTheme: SavedThemeProps = loadFromLocalStorage();

const initialState: ThemeState = {
    isDarkMode: savedTheme?.darkMode || false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toogleTheme: (state: ThemeState) => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})

export const themeStateSelector = (state: RootState) => state.theme;
export const isDarkModeSelector = (state: RootState) => themeStateSelector(state).isDarkMode;

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;