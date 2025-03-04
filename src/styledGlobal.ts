import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body{
        background: ${({ theme }) => theme.colors.bgLightMode};
    }
`

export default StyledGlobal;