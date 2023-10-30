import React, { useEffect } from "react";
import Posting from ".";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import { useRouter } from "next/router";
import Error from "../_error";
import axios from "axios";
import { LOAD_USER_REQUSET } from "@/reducers/user";
import { LOAD_POST_REQUEST } from "@/reducers/post";
import { END } from "redux-saga";

const ExitingPost = () => {
  const { post, isEditedPost } = useSelector((state: RootState) => state.post);
  const router = useRouter();

  useEffect(() => {
    if (isEditedPost) {
      alert("게시물이 수정되었습니다.");
      router.push(`/post/${post.id}`);
    }
  }, [isEditedPost]);

  if (post) return <Posting post={post} />;
  else return <Error statusCode={404} message={null} />;
};

// export async function getServerSideProps(context: { req: { headers: { cookie: any; }; }; store: { dispatch: (arg0: { type: any; payload?: any; }) => void; sagaTask: { toPromise: () => any; }; }; params: { id: any; }; query: { category: any; }; }) {
// 	const cookie = context.req ? context.req.headers.cookie : '';
// 	axios.defaults.headers.Cookie = '';
// 	if (context.req && cookie) {
// 		axios.defaults.headers.Cookie = cookie;
// 	}
// 	context.store.dispatch({
// 		type: LOAD_USER_REQUSET,
// 	});
// 	context.store.dispatch({
// 		type: LOAD_POST_REQUEST,
// 		payload: context.params?.id,
// 	});
// 	context.store.dispatch(END);
// 	await context.store.sagaTask.toPromise();
// 	return { props: { category: context.query.category ? context.query.category : '' } };
// };

export async function getServerSideProps(context: { req: any; store: any; params: any; query: any; }) {
  const { req, store, params, query } = context;

  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  store.dispatch({ type: LOAD_USER_REQUSET });

  if (params && params.id) {
    store.dispatch({
      type: LOAD_POST_REQUEST,
      payload: params.id,
    });
  }

  await store.sagaTask.toPromise();

  return {
    props: {
      category: query.category || '',
    },
  };
}

export default ExitingPost;
