import { Theme } from "styled-components";

export const colors = {
    mainBlueLM: "#0366D6",
    mainBlueDM: "#2188FF",
    white: "#ffffff",
    black: "#252525",
    bgLightMode: "#FBFBFE",
    lightGrey: "#E5E5E5",
    darkGrey: "#6E7E91",
    bgNeutral: "#D1D5DA4D",
    semiDark: "#363636B8",
    semiGrey: "#D1D5DA1A"
}

export const lightTheme: Theme = {
    colors: {
        mainBg: colors.bgLightMode,
        blockBg: colors.white,
        mainBlue: colors.mainBlueLM,
        divider: colors.bgNeutral,
        textBasic: colors.black,
        textSecondary: colors.darkGrey,
        buttonTxt: colors.white,
        borders: colors.bgNeutral
    }
};

export const darkTheme: Theme = {
    colors: {
        mainBg: colors.black,
        blockBg: colors.semiDark,
        mainBlue: colors.mainBlueDM,
        divider: colors.semiGrey,
        textBasic: colors.white,
        textSecondary: colors.white,
        buttonTxt: colors.white,
        borders: colors.semiGrey
    }
};