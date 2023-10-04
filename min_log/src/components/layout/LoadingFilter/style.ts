import styled, { keyframes } from "styled-components";

const bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(25px);
    }
    60% {
        transform: translateY(-25px);
    }
    80% {
        transform: translateY(0);
    }
`;

export const LoadingBalls = styled.div`
  width: 100%;
`;
export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  z-index: 999;
`;
