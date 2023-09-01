import React, { useEffect } from "react";
import { MainContainer } from "@/styles/Main";
import HeadCategories from "@/containers/main/HeadCategories";
import PostCards from "@/containers/main/PostCards";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers";
import { LOAD_POST_REQUEST } from "@/reducers/post";
import Head from "next/head";
import Error from "next/error";
import { LoadingBall } from "@/components/layout/LoadingFilter";

interface IndexProps {
  category: string;
}

const Index = ({ category }: IndexProps) => {
  const {
    posts,
    Category,
    isLoaddingPosts,
    EndOfPosts,
    numberOfPosts,
    postsErrorReason,
  } = useSelector((state: RootState) => state.posts);
  const loading = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.clientHeight - 10
      ) {
        if (!(postsErrorReason || isLoaddingPosts || EndOfPosts)) {
          dispatch({
            type: LOAD_POST_REQUEST,
            payload: {
              category: category,
              lastId: posts[posts.length - 1]?.id,
            },
          });
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [posts, isLoaddingPosts, EndOfPosts, postsErrorReason]);

  return (
    <>
      <Head>
        <meta property="og:title" content="유지민의 개발 블로그" />
        <meta property="og:url" content="https://ulog.vercel.app" />
        <meta
          property="og:description"
          content="다양한 경험에 도전하는 개발자 유지민입니다."
        />
        <meta property="og:image" content="" />
      </Head>
      {postsErrorReason ? (
        <Error
          statusCode={postsErrorReason === "time out" ? 408 : 503}
          message="알 수 없는 오류가 발생했어요"
        />
      ) : (
        <MainContainer>
          <HeadCategories
            category={category}
            Category={Category}
            pageRoot=""
            postNum={numberOfPosts}
          />
          <PostCards posts={posts} />
          {loading["post/LOAD_POST_REQUEST"] && <LoadingBall />}
        </MainContainer>
      )}
    </>
  );
};

export default Index;
