import styled, { css, keyframes } from "styled-components";

export const StyledLoading = styled.div`
    width: 100%;
    padding-block: 88px 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;

    @media (width < 1024px){
        padding-block: clamp(3rem, 1.8636rem + 5.6818vw, 5.5rem)
        clamp(1.25rem, 0.1136rem + 5.6818vw, 3.75rem);
    }
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