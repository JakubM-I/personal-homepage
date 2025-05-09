import styled from "styled-components";
import { StyledInfoBlock, StyledSubtitle } from "../../common/styled/styled";

export const StyledErrorHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

export const StyledErrorTiitle = styled.h3`
    margin: 0;
    font-size: 24px;
    line-height: 1;
    text-align: center;
    color: ${({theme}) => theme.colors.textBasic};

    @media (width < 1024px){
        font-size: clamp(1.125rem, 0.9545rem + 0.8523vw, 1.5rem);
    }
`

export const StyledError = styled(StyledInfoBlock)`
    gap: 32px;
`

export const StyledErrorInfo = styled(StyledSubtitle)`
    margin: 0;
    text-align: center;
    line-height: 1.4;
`