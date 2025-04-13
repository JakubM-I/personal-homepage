import "styled-components";

declare module "styled-components" {
    export interface Theme {
        colors: {
            mainBg: string;
            blockBg: string;
            mainBlue: string;
            divider: string;
            textBasic: string;
            textSecondary: string;
            buttonTxt: string;
            borders: string
            shadow: string;
            themeBtnBorder: string;
        };
    }
}