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
export const StyledRepoItem = styled.div`
    background: ${({ theme }) => theme.colors.blockBg};
    border: 6px solid ${({ theme }) => theme.colors.borders};
`

export const StyledRepoTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.mainBlue};
    margin-block: 0 24px;
`

export const StyledRepoDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.textSecondary};
`

export const StyledRepoLink = styled.a`
    color: ${({ theme }) => theme.colors.mainBlue};
    
`