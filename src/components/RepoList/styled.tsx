import styled from "styled-components";

export const StyledPortfolio = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-block-end: 72px;
`

export const StyledLogoWrapper = styled.div`
    color: ${({ theme }) => theme.colors.mainBlue};
    margin-block-end: 12px;
`

export const StyledSvg = styled.svg`
    @media (width < 1024px){
        width: clamp(2rem, 1.7727rem + 1.1364vw, 2.5rem);
        height: clamp(2rem, 1.7727rem + 1.1364vw, 2.5rem);
    }
`

export const StyledRepoList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 386px), 1fr));
    gap: 30px;
`
export const StyledRepoItem = styled.div`
    background: ${({ theme }) => theme.colors.blockBg};
    border: 6px solid ${({ theme }) => theme.colors.borders};
    padding: 42px;

    @media (width < 1024px){
        padding: clamp(1.5rem, 0.9886rem + 2.5568vw, 2.625rem);
    }
`

export const StyledRepoTitle = styled.h3`
    font-size: 24px; //-> 16px
    font-weight: 700;
    line-height: 1;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.mainBlue};
    margin-block: 0 24px;

    @media (width < 1024px){
        font-size: clamp(1rem, 0.7727rem + 1.1364vw, 1.5rem);
    }
`

export const StyledRepoDescription = styled.p`
    font-size: 18px; // -> 14px
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (width < 1024px){
        font-size: clamp(0.875rem, 0.7614rem + 0.5682vw, 1.125rem);
    }
`

export const StyledRepoLink = styled.a`
    text-decoration: none;
    position: relative;
    color: ${({ theme }) => theme.colors.mainBlue};

    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 25px;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.mainBlue};
        transition: opacity 0.3s ease-in;
        opacity: 0.2;
    }
    
    &:hover::after {
        opacity: 0.8;
    }
`