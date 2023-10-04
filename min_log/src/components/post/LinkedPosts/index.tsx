import React, { useEffect, useState } from "react";
import { ULinkedPosts } from "@/typings/data";
import * as l from "./style";
import Bar from "./Bar";

interface Props {
  categories: ULinkedPosts[];
  categoryRef: React.MutableRefObject<HTMLDivElement>;
}

const LinkedPosts = ({ categories, categoryRef }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [categories]);

  return (
    <l.Box ref={categoryRef}>
      <l.HeadBox>
        {categories.map((prev, i) => (
          <l.LinkedCategoryHead
            key={i}
            style={{ background: `${index === i ? "#fff" : "#f3f3f3"}` }}
            onClick={() => {
              setIndex(i);
            }}
          >
            {prev.name}
          </l.LinkedCategoryHead>
        ))}
      </l.HeadBox>
      <l.PostListBox>
        <div style={{ left: `-${index * 100}%` }}>
          {categories.map((c, i) => (
            <l.PostList key={i}>
              {c.posts.map((post) => {
                return <Bar key={post.id} post={post} />;
              })}
            </l.PostList>
          ))}
        </div>
      </l.PostListBox>
    </l.Box>
  );
};

export default LinkedPosts;
