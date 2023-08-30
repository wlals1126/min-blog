import React from "react";
import { MainContainer } from "@/styles/Main";
import Categories from "@/containers/main/Categories";
import PostCards from "@/containers/main/PostCards";
import Error from "./_error";
import Head from "next/head"
import LoadingFilter from "@/components/layout/LoadingFilter";

interface IdxProps {
  category: string
}

const Index = ({ category }: IdxProps) => {
  return (
    <>
    <Head>
    <meta property="og:title" content="유지민의 테크 블로그" />
				<meta property="og:url" content="ulog.vercel.app/" />
				<meta property="og:description" content="다양한 경험에 도전하는 개발자 유지민입니다." />
				<meta
					property="og:image"
					content=""
				/>
    </Head>
    </>
  );
};

export default Index;
