import "styled-components";

declare module "styled-components" {
    export interface Theme {
        colors: {
            mainBlueLM: string;
            mainBlueDM: string;
            white: string;
            black: string;
            textSecondary: string;
            bgLightMode: string;
            lightGrey: string;
        };
    }
}