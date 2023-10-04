import axios from "axios";
import post from "./post";
import posts from "./posts";
import user from "./user";
import { all, call } from "redux-saga/effects";

axios.defaults.baseURL = process.env.SERVER_URL;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

export default function* rootSaga() {
  yield all([call(user), call(post), call(posts)]);
}
