import styled from "styled-components";

export const StyledHeroSection = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    gap: 72px;
    justify-content: flex-start;
    align-items: center;
    margin-block-start: 89px;
    margin-block-end: 72px;
    position: relative;
`

export const StyledButtomWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    `

export const StyledThemeButton = styled.button`
    appearance: none;
    width: 47px;
    height: 25px;
    border: 1px solid ${({ theme }) => theme.colors.themeBtnBorder};
    border-radius: 13px;
    cursor: pointer;
`

export const StyledHeroImage = styled.img`
    width: min(100%, 398px);
    height: auto;
    aspect-ratio: 1/1;
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
`

export const StyledHeroDescription = styled.p`
    margin-block: 0 32px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.textSecondary};
`

export const StyledButton = styled.button`
    appearance: none;
    border: 1px solid ${({ theme }) => theme.colors.borders};
    border-radius: 4px;
    padding: 12px 16px;
    cursor: pointer;
    font-family: inherit;
    font-size: 20px;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.buttonTxt};
    transition: box-shadow 350ms ease-in, background 0.5s ease-in;

    &:hover {
        box-shadow: -2px -2px 0px 0px ${({ theme }) => theme.colors.shadow}, 
        2px 2px 0px 0px ${({ theme }) => theme.colors.shadow}, 
        -2px 2px 0px 0px ${({ theme }) => theme.colors.shadow}, 
        2px -2px 0px 0px ${({ theme }) => theme.colors.shadow};
    }
`
