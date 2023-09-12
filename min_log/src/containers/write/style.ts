import styled from "styled-components";

export const ConfirmPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  bottom: 0;
  right: 0;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  overflow: hidden;

  & > div {
    width: 400px;
    padding: 1rem;

    h3 {
      margin: 1rem 0 0.5rem 0;

      span {
        font-size: 10px;
        color: #707070;
      }

      &:nth-child(1) {
        margin-top: 0;
      }
    }

    & > textarea {
      font-size: 12px;
      color: #495057;
      width: 100%;
      background: #fff;
      padding: 1rem;
      line-height: 1.6;
      word-break: break-all;
    }
  }
`;

export const SubmitButtonBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.5rem;

  & > div {
    width: 100%;
    padding: 0.7rem 1rem;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: 600;
    color: #707070;
    border: 2px solid #ededed;
    margin-left: 10px;

    &.selected {
      border: 2px solid rgba(95, 58, 154, 0.63);
      color: rgba(95, 58, 154, 0.8);
    }

    &.submit {
      color: #fff;
      border: 2px solid rgba(95, 58, 154, 0.63);
      background: rgba(95, 58, 154, 0.8);
    }

    &:nth-child(1) {
      margin-left: 0;
    }
  }
`;
