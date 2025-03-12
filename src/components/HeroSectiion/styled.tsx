import styled from "styled-components";

export const StyledHeroSection = styled.div`
    width: 100%;
`

export const StyledHeroIntro = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textSecondary};
`

export const StyledHeroTitle = styled.h1`
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.textBasic};
`

export const StyledHeroDescription = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.textSecondary};
`