import styled from "styled-components";

export const StyledPortfolio = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* gap: 8px;/ */
`

export const StyledLogoWrapper = styled.div`
    color: ${({ theme }) => theme.colors.mainBlue};
    margin-block-end: 12px;
`

export const StyledSubtitle = styled.p`
    font: 20px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.baseText};
    margin: 8px 0 24px 0;
`