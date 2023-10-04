import styled from "styled-components";

export const PostingContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 40px 20px;
  display: flex;

  & > div {
    width: 50%;
    height: calc(100vh - 120px);
  }

  @media screen and (max-width: 1000px) {
    & > div {
      width: 100%;

      &:nth-child(2) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    height: calc(100vh - 40px);

    & > div {
      height: 100%;
      box-shadow: none;
    }
  }
`;
