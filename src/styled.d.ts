import "styled-components";

declare module "styled-components" {
    export interface Theme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            accent: string;
        };
        fonts: {
            primary: string;
            secondary: string;
        };
    }
}