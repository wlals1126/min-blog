import styled from "styled-components";

export const ScrollButtonBox = styled.div`
  position: sticky;
  width: 0;
  height: 0;
  bottom: 2rem;
  transform: translate(-4.5rem, -6.5rem);

  & > div {
    width: 3rem;
    height: 3rem;
    background: #fff;
    box-shadow: 0 0 7px 1px #ddd;
    border-radius: 1.5rem;
    transform: rotate(90deg);
    cursor: pointer;

    & > img {
      height: 2rem;
      margin: 0.5rem;
    }

    &:nth-child(1) {
      transform: rotate(-90deg);
      margin-bottom: 0.5rem;
    }
  }
`;
