import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { UCategory } from "@/typings/data";

const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;

  & > a,
  & > div {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background: #ededed;
    color: #495057;
    font-size: 12px;
    margin: 0 1rem 1rem 0;
  }
`;

interface Props {
  categories: UCategory[];
  style?: object;
  aflg: boolean;
}

const Categories = ({ categories, style = {}, aflg }: Props) => {
  return (
    <CategoriesContainer style={style}>
      {categories &&
        categories.map((prev, i) => (
          <div key={i}>
            {aflg ? (
              <Link href={`/category=${prev.name}`}>
                <a>{prev.name}</a>
              </Link>
            ) : (
              <div>{prev.name}</div>
            )}
          </div>
        ))}
    </CategoriesContainer>
  );
};

export default Categories;
