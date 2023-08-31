import React from "react";
import { MainContainer } from "@/styles/Main";
import Categories from "@/containers/main/Categories";
import PostCards from "@/containers/main/PostCards";
// eslint-disable-next-line @next/next/no-document-import-in-page
import { DocumentContext } from "next/document";

interface IndexProps {
  category: string;
}

const Index = ({ category }: IndexProps) => {
  return (
    <MainContainer>
      <Categories category={category} pageRoot="" />
      <PostCards posts={null} />
    </MainContainer>
  );
};

Index.getInitialProps = async (props: DocumentContext) => {
  return { category: props.query.category };
};

export default Index;
