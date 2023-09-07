import styled from "styled-components";

export const ThumbnailBox = styled.div`
  width: 100%;
  background: #ededed;
  position: relative;
  overflow: hidden;

  & > div.imageBox {
    min-width: 100%;
    display: flex;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s;

    img {
      width: 100%;
      display: block;
      object-fit: cover;
      margin: 0 auto;
    }
  }

  & > div.paddingBox {
    height: 0;
    width: 100%;
    padding-top: 70%;
  }

  & > div.buttonBox {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;

    & > div {
      padding: 0.7rem 1rem;
      background: #fff;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
      font-weight: 600;
      color: #707070;

      &:nth-child(1) {
        color: rgba(95, 58, 154, 0.8);
        margin-right: 10px;
      }
    }
  }

  button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background: none;

    &.left {
      left: 0;
      transform: translateY(-50%) rotate(180deg);
    }
    &.right {
      right: 0;
    }
  }
`;
