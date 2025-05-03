import styled, { css, keyframes } from "styled-components";
import { StyledInfoBlock } from "../../common/styled/styled";

export const StyledLoading = styled(StyledInfoBlock)`
    gap: 48px;
`

const rotate = keyframes`
    0%{
        transform: rotate(0deg)
    }

    100%{
        transform: rotate(360deg)
    }
`

const styles = css`
    animation: ${rotate} 2s linear infinite running;
`

export const StyledSpinner = styled.img`
    ${styles}

    @media (width < 1024px){
        width: clamp(8.125rem, 7.2727rem + 4.2614vw, 10rem);
        height: auto;
    }
`