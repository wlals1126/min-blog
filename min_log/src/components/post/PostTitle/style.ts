import styled from "styled-components";

interface Props {
  isUser?: boolean;
}

export const TitleContainer = styled.div<Props>`
  position: relative;
  min-height: 30px;

  ${(props) => props.isUser && "padding-right: 70px"}

  & > div {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    width: 70px;
    height: 100%;

    a,
    & > div {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background: #ededed;
      padding: 8px;
      cursor: pointer;

      img {
        width: 14px;
        height: 14px;
      }

      &:nth-child(1) {
        margin-right: 10px;
      }
    }
  }
`;
