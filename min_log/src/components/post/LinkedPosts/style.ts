import styled from "styled-components";

export const Box = styled.div`
  margin-top: 2rem;
  width: 100%;
  box-shadow: 0 0.06875rem 0.1875rem rgba(90, 97, 105, 0.1),
    0 0.0375rem 0.40625rem rgba(90, 97, 105, 0.1);
  background: #fff;
`;

export const HeadBox = styled.div`
  min-width: 100%;
  display: -webkit-box;
  overflow: auto;
  background: #f3f3f3;
  overflow-x: auto;
`;

export const LinkedCategoryHead = styled.div`
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background: #fff;
  }
`;

export const PostListBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 320px;
  overflow: hidden;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    width: 100%;
    display: flex;
    transition: 0.5s;
    height: 100%;
  }
`;

export const PostList = styled.div`
  width: 100%;
  display: block;
  min-width: 100%;
  overflow-y: auto;

  a {
    width: 100%;

    & > div {
      padding: 1rem;
      position: relative;
      padding-right: 150px;
      &:hover {
        background: #fafafa;
      }

      .date {
        position: absolute;
        color: #444;
        font-size: 10px;
        font-weight: 400;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;
