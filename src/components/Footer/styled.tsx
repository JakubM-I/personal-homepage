import styled from "styled-components";

export const StyledFooter = styled.div`
    width: min(100%, 670px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

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
`

export const StyledFooterText = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.textBasic};
`

export const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
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