import React from "react";
import { MainContainer } from "@/styles/Main";
import HeadCategories from "@/containers/main/HeadCategories";
import PostCards from "@/containers/main/PostCards";

interface IndexProps {
  category: string;
}

const Index = ({ category }: IndexProps) => {
  return (
    <MainContainer>
      <HeadCategories category={category} pageRoot="" />
      <PostCards posts={null} />
    </MainContainer>
  );
};

export default Index;
