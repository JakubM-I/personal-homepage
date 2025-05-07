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

export const StyledInfoBlock = styled.div`
    width: 100%;
    padding-block: 88px 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (width < 1024px){
        padding-block: clamp(3rem, 1.8636rem + 5.6818vw, 5.5rem)
        clamp(1.25rem, 0.1136rem + 5.6818vw, 3.75rem);
    }
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

    @media (width < 1024px){
        font-size: clamp(1.125rem, 1.0682rem + 0.2841vw, 1.25rem);
    }
`