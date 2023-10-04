import { loadingEnd, loadingStart } from "@/reducers/loading";
import {
    LOAD_USER_REQUSET,
  LOGIN_REQUEST,
  loadUserAsync,
  loginAsync,
} from "@/reducers/user";
import axios, { AxiosResponse } from "axios";
import {
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
  all,
} from "redux-saga/effects";

function loadUserAPI() {
  return axios.get(`/user`);
}

function* loadUser() {
  try {
    const result: AxiosResponse<any> = yield call(loadUserAPI);
    yield put(loadUserAsync.success(result.data));
  } catch (error: any) {
    console.log(error);
    yield put(loadUserAsync.failure(error));
  }
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUSET, loadUser);
}

async function loginAPI(loginData: any) {
  return axios.post(`/user`, loginData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function* login(action: ReturnType<typeof loginAsync.request>) {
  yield put(loadingStart(action.type));
  try {
    const result: AxiosResponse<any> = yield call(loginAPI, action.payload);
    yield put(loginAsync.success(result.data));
  } catch (error: any) {
    console.log(error);
    yield put(loginAsync.failure(error));
  }
  yield put(loadingEnd(action.type));
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLoadUser)]);
}
