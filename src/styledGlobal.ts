import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body{
        background: ${({ theme }) => theme.colors.mainBg};
        transition: background 0.5s ease-in;
    }
`

export default StyledGlobal;