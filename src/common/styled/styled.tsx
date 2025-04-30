import styled from "styled-components";

export const StyledIntroText = styled.p`
    margin-block: 0 12px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textSecondary};
`

export const StyledSubtitle = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.textBasic};
    margin: 8px 0 24px 0;

    @media (width < 1024px){
        font-size: clamp(1.0625rem, 0.9773rem + 0.4261vw, 1.25rem);
    }
`