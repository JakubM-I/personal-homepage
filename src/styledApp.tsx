import styled from "styled-components";

export const StyledAppWrapper = styled.div`
    width: min(100%, 1244px);
    margin-inline: auto;
    padding-inline: 14px;
    padding-block: 119px 109px;

    @media (width < 1024px){
        padding-block-start: clamp(1.3125rem, -1.4716rem + 13.9205vw, 7.4375rem);
        padding-block-end: clamp(1.9375rem, -0.2784rem + 11.0795vw, 6.8125rem); 
    }
`