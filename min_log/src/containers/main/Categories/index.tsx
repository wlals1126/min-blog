import React from "react";
import * as c from "./style";
import CategoryBlock from "@/components/Main/Caterory";
import { UCategory } from "@/typings/data";

interface Props {
  category: string;
  pageRoot: string;
  Category?: UCategory[];
  postNum?: number;
}

const Categories = ({
  category,
  pageRoot,
  Category = [],
  postNum = 0,
}: Props) => {
  return (
    <c.CategoryContainer>
      <CategoryBlock
        page={pageRoot}
        name="전체글"
        num={postNum}
        current={!category}
      />
      {Category &&
        Category.map((prev) => (
          <CategoryBlock
            key={prev.id}
            page={pageRoot}
            name={prev.name}
            num={prev.postCount ? prev.postCount : 0}
            current={category === prev.name}
          />
        ))}
    </c.CategoryContainer>
  );
};

export default Categories;
