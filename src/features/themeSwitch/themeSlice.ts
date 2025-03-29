import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ThemeState {
    isDarkMode: boolean;
}

const initialState: ThemeState = {
    isDarkMode: false,
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