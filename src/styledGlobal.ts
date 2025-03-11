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
    }
`

export default StyledGlobal;