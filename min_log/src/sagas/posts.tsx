import { loadCategoriesAsync, loadPostsAsync } from "@/reducers/posts";
import axios from "axios";
import { call, all, fork, takeLatest, put } from "redux-saga/effects";

async function loadAllPostsAPI(query: any) {
  return await axios.get(`/post`);
}

function* loadAllPosts(
  action: ReturnType<typeof loadPostsAsync.request>
): Generator<any, void, any> {
  try {
    const result = yield call(loadAllPostsAPI, action.payload);
    yield put(loadPostsAsync.success(result.data));
  } catch (error: any) {
    console.error(error);
    yield put(loadPostsAsync.failure(error));
  }
}

function* watchLoadAllPosts() {
  yield takeLatest(loadPostsAsync.request, loadAllPosts);
}

export default function* postsSaga() {
  yield all([fork(watchLoadAllPosts)]);
}
