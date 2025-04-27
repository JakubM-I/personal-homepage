import styled from "styled-components";

export const StyledListBlock = styled.div`
    width: 100%;
    padding: 32px;
    background: ${({ theme }) => theme.colors.blockBg};
    box-shadow: 0px 16px 58px 0px #090A3308;
    box-shadow: 0px -2px 50px 0px #090A3305;
    margin-block-end: 72px;

    @media (width < 1024px){
        padding: clamp(1rem, 0.5455rem + 2.2727vw, 2rem);
    }

`

export const StyledDivider = styled.hr`
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
    margin-block: 15px 32px;

    @media (width < 1024px){
        margin-block-end: clamp(0.75rem, 0.1818rem + 2.8409vw, 2rem);
    }
`


export const StyledList = styled.ul`
    padding: 0;
    padding-inline-start: 22px;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(283px, 1fr));
    gap: 10px;
`

export const StyledListitem = styled.li`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
    line-height: 1;
    letter-spacing: 2px;

    &::marker{
        color: ${({ theme }) => theme.colors.mainBlue};
        font-size: 21px;
    }

    @media (width < 1024px){
        font-size: clamp(0.875rem, 0.7614rem + 0.5682vw, 1.125rem);
    }
`