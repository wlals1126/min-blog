import React from "react";
import * as h from "./style";
import { DefaultBox } from "@/styles/default";
import CategoryBlock from "@/components/Main/Caterory";

interface HeadCategoriesProps {
  category: string;
  pageRoot: string;
}

const dummyCategory = [
  {
    id: 1,
    name: "카테고리1",
    num: 33,
  },
  {
    id: 2,
    name: "카테고리2",
    num: 33,
  },
  {
    id: 3,
    name: "카테고리3",
    num: 33,
  },
];

const HeadCategories = ({ category, pageRoot }: HeadCategoriesProps) => {
  return (
    <h.CategoryContainer>
      <CategoryBlock
        pageRoot={pageRoot}
        name="전체글"
        num={99}
        current={!category}
      />
      {dummyCategory.map((prev) => (
        <CategoryBlock
          key={prev.id}
          pageRoot={pageRoot}
          name={prev.name}
          num={prev.num}
          current={category === prev.name}
        />
      ))}
    </h.CategoryContainer>
  );
};

export default HeadCategories;
