import styled, { css } from "styled-components";
import { ThemeSwitcherProps } from "../../common/interfaces/interfaces";

export const StyledHeroSection = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    gap: 72px;
    justify-content: flex-start;
    align-items: center;
    /* margin-block-start: 89px; */
    margin-block-end: 72px;

    @media (width < 1024px){
        gap: clamp(1.875rem, 0.005rem + 7.0234vw, 4.5rem);
        /* margin-block-start: clamp(1.25rem, -1.8098rem + 11.5192vw, 5.5625rem); */
    }

    @media (width < 768px){
        padding-block-start: clamp(0rem, 4.9123rem + -10.2339vw, 2.1875rem);
    }

    @media (width <= 425px){
        flex-direction: column;
        gap: 14px;
        align-items: flex-start;
        justify-content: flex-start;
        padding-block-start: 0;
    }
`

export const StyledButtomWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
`

export const StyledThemeSwitchTxt = styled.span`
    display: block;
    font-size: 12px;
    color: ${({theme}) => theme.colors.textSecondary};

    @media (width <= 425px){
        display: none;
    }
`

export const StyledThemeButton = styled.button`
    appearance: none;
    width: 48px;
    height: 26px;
    border: 1px solid ${({ theme }) => theme.colors.themeBtnBorder};
    background: ${({theme}) => theme.colors.themeBtnBackground};
    border-radius: 13px;
    padding-inline: 3px;
    cursor: pointer;
`

export const StyledThemeSwitcher = styled.span<ThemeSwitcherProps>`
    display: flex;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.themeBtnSwitcher};  
    color: ${({theme}) => theme.colors.themeBtnSwitcherIcon};
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;

    ${({dark}) => dark && css`
        transform: translateX(19px);
    `}
`

export const StyledHeroImage = styled.img`
    width: min(100%, 398px);
    height: auto;
    aspect-ratio: 1/1;

    @media (width <= 425px){
        width: min(100%, 133px);
    }
`

export const StyledHeroContent = styled.div`
    display: flex;
`


export const StyledHeroTitle = styled.h1`
    margin-block: 0 35px;
    font-size: 32px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.textBasic};

    @media (width < 1024px){
        font-size: clamp(1.375rem, 1.0909rem + 1.4205vw, 2rem);
    }
`

export const StyledHeroDescription = styled.p`
    margin-block: 0 32px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (width < 1024px){
        font-size: clamp(1.0625rem, 0.9773rem + 0.4261vw, 1.25rem);
    }
`

