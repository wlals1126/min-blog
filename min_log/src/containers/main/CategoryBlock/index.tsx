import React from "react";
import * as h from "./style";
import CategoryBlock from "@/components/Main/CateroryBlock";
import { UCategory } from "@/typings/data";

interface HeadCategoriesProps {
  category: string;
  pageRoot: string;
  Category?: UCategory[];
  postNum?: number;
}

const HeadCategories = ({
  category,
  pageRoot,
  Category = [],
  postNum = 0,
}: HeadCategoriesProps) => {
  return (
    <h.CategoryContainer>
      <CategoryBlock
        pageRoot={pageRoot}
        name="전체글"
        num={postNum}
        current={!category}
      />
      {Category &&
        Category.map((prev) => (
          <CategoryBlock
            key={prev.id}
            pageRoot={pageRoot}
            name={prev.name}
            num={prev.postCount ? prev.postCount : 0}
            current={category === prev.name}
          />
        ))}
    </h.CategoryContainer>
  );
};

export default HeadCategories;
