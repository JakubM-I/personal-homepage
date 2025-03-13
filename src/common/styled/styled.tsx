import styled from "styled-components";

export const StyledIntroText = styled.p`
    margin-block: 0 12px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textSecondary};
`