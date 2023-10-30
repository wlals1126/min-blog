import React, { useEffect, useRef } from "react";
import dayjs from "dayjs";
import { DateP } from "@/styles/default";
import Categories from "@/containers/share/Categories";
import PostBody from "@/../src/components/write/PostBody";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import Head from "next/head";
import Error from "../_error";
import PostTitle from "@/components/post/PostTitle";
import LoadingFilter from "@/components/layout/LoadingFilter";
import styled from "styled-components";
import { DefaultBox } from "@/styles/default";
import LinkedPosts from "@/components/post/LinkedPosts";
import ScrollMoveButtons from "@/components/post/ScrollMoveButtons";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import { LOAD_USER_REQUSET } from "@/reducers/user";
import { LOAD_POST_REQUEST } from "@/reducers/post";
import { END } from "redux-saga";

const Container = styled(DefaultBox)`
  padding: 40px 20px;
  max-width: 800px;

  & > p {
    margin: 1rem 0 1rem 0;
  }
  & > img {
    margin-top: 2rem;
    width: 100%;
  }

  & > div.bodyContainer {
    background: #fff;
    box-shadow: 0 0.06875rem 0.1875rem rgba(90, 97, 105, 0.1),
      0 0.0375rem 0.40625rem rgba(90, 97, 105, 0.1);
  }

  #help-notice {
    display: none;
  }
`;

const PostPage = () => {
  const { post, isRemovedPost, linkedPosts } = useSelector(
    (state: RootState) => state.post
  );
  const { user } = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const router = useRouter();
  const pageRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const categoryRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (isRemovedPost) {
      alert("포스트가 삭제되었습니다.");
      router.push("/");
    }
  }, [isRemovedPost]);

  return (
    <>
      {loading["post/REMOVE_POST_REQUEST"] && <LoadingFilter />}
      {post ? (
        <>
          <Head>
            <title>{post.title}</title>
            <meta name="description" content={post.description} />
            <meta property="og:title" content={post.title} />
            <meta
              property="og:url"
              content={`https://ulog.vercel.app//post/${post.id}`}
            />
            <meta property="og:description" content={post.description} />
            <meta
              property="og:image"
              content={post.thumbnail ? post.thumbnail : ""}
            />
          </Head>
          <Container ref={pageRef}>
            <PostTitle title={post.title} id={post.id} isUser={user && true} />
            <DateP>{dayjs(post.createdAt).format("YYYY년 MM월 DD일")}</DateP>
            <Categories categories={post.categoryPosts} aflg={false} />
            {post.thumbnail && post.body.indexOf(post.thumbnail) === -1 && (
              <img src={post.thumbnail} alt="post_thumbnail" />
            )}
            <div className="bodyContainer">
              <PostBody setTitle={false} body={post.body} />
            </div>
            {post.categoryPosts && (
              <>
                <LinkedPosts
                  categoryRef={categoryRef}
                  categories={linkedPosts}
                />
                <ScrollMoveButtons
                  pageRef={pageRef}
                  categoryRef={categoryRef}
                />
              </>
            )}
          </Container>
        </>
      ) : (
        <Error statusCode={404} message={null} />
      )}
    </>
  );
};

export async function getServerSideProps(context: { req: { headers: { cookie: any; }; }; store: { dispatch: (arg0: { type: any; payload?: any; }) => void; sagaTask: { toPromise: () => any; }; }; params: { id: any; }; query: { category: any; }; }) {
	const cookie = context.req ? context.req.headers.cookie : '';
	axios.defaults.headers.Cookie = '';
	if (context.req && cookie) {
		axios.defaults.headers.Cookie = cookie;
	}
	context.store.dispatch({
		type: LOAD_USER_REQUSET,
	});
	if (context.params) {
		context.store.dispatch({
			type: LOAD_POST_REQUEST,
			payload: context.params.id,
		});
	}
	context.store.dispatch(END);
	await context.store.sagaTask.toPromise();
	return { props: { category: context.query.category ? context.query.category : '' } };
};

export default PostPage;
