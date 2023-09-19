import { loadingEnd, loadingStart } from "@/reducers/loading";
import { loadPostAsync } from "@/reducers/post";
import {
  loadCategoriesAsync,
  loadPostsAsync,
  searchPostsAsync,
} from "@/reducers/posts";
import axios, { AxiosResponse, all } from "axios";
import { put, call, takeLatest, fork } from "redux-saga/effects";

async function loadCategoriesAPI() {
  return await axios.get(`/category`, { timeout: 3000 });
}

function* loadCategories(
  action: ReturnType<typeof loadCategoriesAsync.request>
) {
  try {
    const result: AxiosResponse<any> = yield call(loadCategoriesAPI);
    yield put(loadCategoriesAsync.success(result.data));
  } catch (error: any) {
    console.log(error);
    yield put(loadCategoriesAsync.failure(error));
  }
}

function* watchloadCategories() {
  yield takeLatest(loadCategoriesAsync.request, loadCategories);
}

async function searchPostAPI(query: any) {
  return await axios.get(
    `/post/search?lastId=${query.lastId || 0}&sarch=${encodeURIComponent(
      query.search
    )}`,
    {
      timeout: 3000,
    }
  );
}

function* saerchPost(action: ReturnType<typeof searchPostsAsync.request>) {
  yield put(loadingStart(action.type));
  try {
    const result: AxiosResponse<any> = yield call(
      searchPostAPI,
      action.payload
    );
    yield put(searchPostsAsync.success(result.data));
  } catch (error: any) {
    console.log(error);
    yield put(searchPostsAsync.failure(error));
  }
  yield put(loadingEnd(action.type));
}

function* watchSaerchPosts() {
  yield takeLatest(searchPostsAsync.request, saerchPost);
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
    fork(watchSaerchPosts),
  ]);
}
