import styled from "styled-components";

export const LoginContainer = styled.div`
  padding: 40px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 40px);

  & > div {
    background: #fff;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);

    img {
      width: 280px;
    }

    & > form {
      width: 280px;
      padding: 1rem;

      div {
        line-height: 1.8;
        font-size: 10px;
        padding: 1rem;
        border: 1px solid #ddd;
        border-bottom: none;
        position: relative;

        p {
          width: 60px;
        }

        &:nth-child(3) {
          border-top: 1px solid #ddd;
        }

        input {
          position: absolute;
          right: 0;
          height: 18px;
          font-size: 12px;
          width: 160px;
        }
      }

      & > input[type="submit"] {
        padding: 1rem;
        border: 1px solid #ddd;
        color: #707070;
        width: 100%;
        cursor: pointer;
        font-weight: 500;
        background: #ddd;
        transition: 0.3s;

        &:hover {
          background: rgba(95, 58, 154, 0.63);
          border: 1px solid rgba(95, 58, 154, 0.13);
          color: #fff;
        }
      }
    }
  }
`;
