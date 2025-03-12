import styled from "styled-components";

export const StyledHeroSection = styled.div`
    width: 100%;
`
export const StyledHeroContent = styled.div`
    display: flex;
    flex-direction: c;
`

export const StyledHeroIntro = styled.p`
    margin-block: 0 12px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textSecondary};
`

export const StyledHeroTitle = styled.h1`
    margin-block: 0 35px;
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.textBasic};
`

export const StyledHeroDescription = styled.p`
    margin-block: 0 32px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.textSecondary};
    `
