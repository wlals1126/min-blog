import {
  loadCategoriesAsync,
  loadPostsAsync,
  searchPostsAsync,
} from "@/reducers/posts";
import axios, { AxiosResponse } from "axios";
import { call, all, fork, takeLatest, put } from "redux-saga/effects";
import { loadingEnd, loadingStart } from "@/reducers/loading";

async function loadCategoriesAPI() {
  return await axios.get(`/category`, { timeout: 3000 });
}

function* loadCategories(
  action: ReturnType<typeof loadCategoriesAsync.request>
) {
  try {
    const result: AxiosResponse<any> = yield call(loadCategoriesAPI);
    yield put(loadCategoriesAsync.success(result));
  } catch (error: any) {
    console.error(error);
    yield put(loadCategoriesAsync.failure(error));
  }
}

function* watchloadCategories() {
  yield takeLatest(loadCategoriesAsync.request, loadCategories);
}

async function searchPostsAPI(query: any) {
  return await axios.get(
    `/post/search?lastId=${query.lastId || 0}&search=${encodeURIComponent(
      query.search
    )}`,
    {
      timeout: 3000,
    }
  );
}

function* searchPosts(action: ReturnType<typeof searchPostsAsync.request>) {
  yield put(loadingStart(action.type));
  try {
    const result: AxiosResponse<any> = yield call(
      searchPostsAPI,
      action.payload
    );
    yield put(searchPostsAsync.success(result));
  } catch (error: any) {
    console.error(error);
    yield put(searchPostsAsync.failure(error));
  }
  yield put(loadingEnd(action.type));
}

function* watchSearchPosts() {
  yield takeLatest(searchPostsAsync.request, searchPosts);
}

async function loadAllPostsAPI(query: any) {
  return await axios.get(
    `/post?lastId=${query.lastId || 0}&category=${
      query.category ? encodeURIComponent(query.category) : "0"
    }`,
    { timeout: 3000 }
  );
}

function* loadAllPosts(action: ReturnType<typeof loadPostsAsync.request>) {
  yield put(loadingStart(action.type));
  try {
    const result: AxiosResponse<any> = yield call(
      loadAllPostsAPI,
      action.payload
    );
    yield put(loadPostsAsync.success(result));
  } catch (error: any) {
    console.error(error);
    yield put(loadPostsAsync.failure(error));
  }
  yield put(loadingEnd(action.type));
}

function* watchLoadAllPosts() {
  yield takeLatest(loadPostsAsync.request, loadAllPosts);
}

export default function* postsSaga() {
  yield all([
    fork(watchloadCategories),
    fork(watchLoadAllPosts),
    fork(watchSearchPosts),
  ]);
}
