import React from "react";
import PostCard from "@/components/Main/PostCard";
import * as p from "./style";
import { UPost } from "@/typings/data";

interface Props {
  posts: UPost[] | null;
}

const PostCards = ({ posts }: Props) => {
  return (
    <p.PostContainer>
      {posts?.map((prev, i) => (
        <PostCard key={i} post={prev} />
      ))}
    </p.PostContainer>
  );
};

export default PostCards;
