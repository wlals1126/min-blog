import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface Block {
  current: boolean;
}

const Block = styled.a<Block>`
  border-radius: 0.5rem;
  box-shadow: 0 0.06875rem 0.1875rem rgba(90, 97, 105, 0.1),
    0 0.0375rem 0.40625rem rgba(90, 97, 105, 0.1);
  padding: 0.5rem 1rem;
  margin: 0 10px 10px 0;
  font-size: 13px;
  font-weight: ${(props) => (props.current ? "600" : "inherit")};
  color: ${(props) => (props.current ? "#fff" : "inherit")};
  background: ${(props) =>
    props.current ? "linear-gradient(135deg, #3B87CA, #633094);" : "#fff"};
`;

interface Props {
  pageRoot: string;
  name: string;
  num: number;
  current: boolean;
}

const CategoryBlock = ({ pageRoot = "", name, num = 0, current }: Props) => {
  return (
    <Link
      href={`/${pageRoot}${name === "전체글" ? "" : `cateroty=${name}`}`}
      legacyBehavior
    >
      <Block current={current}>
        {name} ({num})
      </Block>
    </Link>
  );
};

export default CategoryBlock;
