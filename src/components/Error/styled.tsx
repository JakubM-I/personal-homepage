import styled from "styled-components";
import { StyledInfoBlock, StyledSubtitle } from "../../common/styled/styled";

export const StyledErrorHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

export const StyledError = styled(StyledInfoBlock)`
    gap: 32px;
`

export const StyledErrorInfo = styled(StyledSubtitle)`
    margin: 0;
    text-align: center;
`