import styled from "styled-components";

export const StyledTitle = styled.h2`
    display: block;
    font-size: 30px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 2px;
    margin: 0;
    color: ${({ theme }) => theme.colors.textBasic};

    @media (width < 1024px){
        font-size: clamp(1.125rem, 0.7841rem + 1.7045vw, 1.875rem);
    }
`