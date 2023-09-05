import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0, 16);
  padding: 2rem;

  & > textarea {
    margin-top: 10px;
    width: 100%;
    height: calc(100% - 10rem);
  }

  & > input {
    width: 100%;
    color: #707070;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;

    &:focus {
      color: #212529;
    }
  }
`;

export const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  bottom: 2rem;
  right: 2rem;
  font-size: 12px;

  & > div {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background: #ededed;
    color: #707070;
    cursor: pointer;
    margin-left: 10px;

    &.submit {
      color: #fff;
      background: rgba(95, 58, 154, 0.63);
    }
  }
`;
