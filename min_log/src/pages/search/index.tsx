import { LoadingBall } from "@/components/layout/LoadingFilter";
import PostCards from "@/containers/main/PostCards";
import useInput from "@/hooks/useInput";
import { RootState } from "@/reducers";
import { LOAD_SEARCH_REQUEST } from "@/reducers/posts";
import { LOAD_USER_REQUSET } from "@/reducers/user";
import { MainContainer, SearchInput } from "@/styles/Main";
import axios from "axios";
import Error from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";

interface SearchProps {
  search: string;
}

const Search = ({ search }: SearchProps) => {
  const {
    posts,
    isLoaddingPosts,
    EndOfPosts,
    loadPostsErrorReason,
    findPostCount,
  } = useSelector((state: RootState) => state.posts);
  const loading = useSelector((state: RootState) => state.loading);
  const [keyword, SetKeyword] = useInput("");
  const dispatch = useDispatch();
  const router = useRouter();

  const onSearchPosts = useCallback((keyword: any) => {
    router.push(`/search?search=${keyword}`);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 10
      ) {
        if (!(loadPostsErrorReason || isLoaddingPosts || EndOfPosts)) {
          console.log({ loadPostsErrorReason, isLoaddingPosts, EndOfPosts });
          const lastId = posts[posts.length - 1]?.id;
          dispatch({
            type: LOAD_SEARCH_REQUEST,
            payload: {
              search: search,
              lastId: lastId,
            },
          });
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [posts, EndOfPosts, isLoaddingPosts, loadPostsErrorReason]);

  return (
    <>
      <Head>
        <title>검색</title>
        <meta property="og:title" content="유지민의 개발 블로그" />
        <meta property="og:url" content="https://ulog.vercel.app/search" />
        <meta property="og:description" content="검색 페이지" />
        <meta property="og:image" content="" />
      </Head>
      <MainContainer>
        <SearchInput>
          <img src="/search.svg/" />
          <input
            type="text"
            value={keyword}
            onChange={SetKeyword}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onSearchPosts(keyword);
              }
            }}
          />
        </SearchInput>
        {loadPostsErrorReason ? (
          <Error
            statusCode={loadPostsErrorReason === "timeout" ? 408 : 503}
            message="알 수 없는 에러가 발생했어요"
          />
        ) : (
          <>
            {search && (
              <p>
                총 <b>{findPostCount}</b>개의 글을 찾았어요!
              </p>
            )}
            <PostCards posts={posts} />
          </>
        )}
        {loading["posts/LOAD_SEARCH_REQUEST"] && <LoadingBall />}
      </MainContainer>
    </>
  );
};

// export async function getServerSideProps(context: { req: { headers: { cookie: any; }; }; store: { dispatch: (arg0: { type: any; payload?: { search: any; }; }) => void; sagaTask: { toPromise: () => any; }; }; query: string; }) {
// 	const cookie = context.req ? context.req.headers.cookie : '';
// 	axios.defaults.headers.Cookie = '';
// 	if (context.req && cookie) {
// 		axios.defaults.headers.Cookie = cookie;
// 	}
// 	context.store.dispatch({
// 		type: LOAD_USER_REQUSET,
// 	});
// 	if (context.query.search)
// 		context.store.dispatch({
// 			type: LOAD_SEARCH_REQUEST,
// 			payload: {
// 				search: context.query.search,
// 			},
// 		});
// 	context.store.dispatch(END);
// 	await context.store.sagaTask.toPromise();
// 	return { props: { search: context.query.search ? context.query.search : '' } };
// };

export async function getServerSideProps(context: { req: any; store: any; query: any; }) {
  const { req, store, query } = context;

  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({ type: LOAD_USER_REQUSET });

  if (query.search) {
    context.store.dispatch({
      type: LOAD_SEARCH_REQUEST,
      payload: {
        search: query.search,
      },
    });
  }

  await store.sagaTask.toPromise();

  return {
    props: {
      search: query.search || '',
    },
  };
}

export default Search;
