import styled from "styled-components";

export const StyledListBlock = styled.div`
    width: 100%;
    padding: 32px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 16px 58px 0px #090A3308;
    box-shadow: 0px -2px 50px 0px #090A3305;
    margin-block-end: 72px;
`

export const StyledDivider = styled.hr`
    border-top: 1px solid ${({ theme }) => theme.colors.bgNeutral};
    margin-block-start: 15px;
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
        color: ${({ theme }) => theme.colors.mainBlueLM};
        font-size: 21px;
    }
`