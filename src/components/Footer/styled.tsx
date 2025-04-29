import styled from "styled-components";
import { StyledIntroText } from "../../common/styled/styled";

export const StyledFooter = styled.div`
    width: min(100%, 670px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;

    @media (width < 1024px){
        gap: clamp(0.75rem, 0.4091rem + 1.7045vw, 1.5rem);
    }

`

export const StyledFooterIntroText = styled(StyledIntroText)`
    line-height: 1;
    margin: 0;
`

export const StyledFooterEmail = styled.a`
    text-decoration: none;
    margin: 0;
    font-size: 32px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 2px;
    cursor: pointer;
    transition: color 0.3s ease-in;
    color: ${({ theme }) => theme.colors.textBasic};
    &:hover {
        color: ${({ theme }) => theme.colors.mainBlue};
    }

    @media (width < 1024px){
        font-size: clamp(1.125rem, 0.7273rem + 1.9886vw, 2rem);
    }
`

export const StyledFooterText = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.textBasic};

    @media (width < 1024px){
        font-size: clamp(0.875rem, 0.7614rem + 0.5682vw, 1.125rem);
    }
`

export const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    margin-block-start: 56px;

    @media (width < 1024px){
        margin-block-start: clamp(2.5rem, 2.0455rem + 2.2727vw, 3.5rem);
    }
`

export const StyledLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textBasic};
    transition: color 0.3s ease-in;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.mainBlue};
    }
`