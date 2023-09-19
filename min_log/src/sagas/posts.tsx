import { loadingEnd, loadingStart } from "@/reducers/loading";
import { loadPostAsync, removePostAsync, writePostAsync } from "@/reducers/post";
import { CLOSE_CONFIRM_POST } from "@/reducers/posting";
import axios, { AxiosResponse } from "axios";
import { call, all, fork, takeLatest, put } from "redux-saga/effects";

async function removePostAPI(id: any) {
	return await axios.delete(`/post/${id}`);
}

function* removePost(action: ReturnType<typeof removePostAsync.request>) {
	yield put(loadingStart(action.type));
	try {
		const result: AxiosResponse<any> = yield call(removePostAPI, action.payload);
		yield put(removePostAsync.success(result.data));
	} catch (error: any) {
		console.error(error);
		yield put(removePostAsync.failure(error));
	}
	yield put(loadingEnd(action.type));
}

function* watchRemovePost() {
	yield takeLatest(removePostAsync.request, removePost);
}

async function writePostAPI(postData: any) {
	if (postData.isEditingId) {
		return await axios.patch(`/post/${postData.isEditingId}`, postData);
	} else {
		return await axios.post(`/post`, postData);
	}
}

function* writePost(action: ReturnType<typeof writePostAsync.request>) {
	yield put(loadingStart(action.type));
	try {
		const result: AxiosResponse<any> = yield call(writePostAPI, action.payload);
		result.data.isEdited = true;
		yield put(writePostAsync.success(result.data));
	} catch (error: any) {
		console.error(error);
		yield put({ type: CLOSE_CONFIRM_POST });
		yield put(writePostAsync.failure(error));
	}
	yield put(loadingEnd(action.type));
}

function* watchWritePost() {
	yield takeLatest(writePostAsync.request, writePost);
}

async function loadPostAPI(id: any) {
	return await axios.get(`/post/${id}`);
}

function* loadPost(action: ReturnType<typeof loadPostAsync.request>) {
	yield put(loadingStart(action.type));
	try {
		const result: AxiosResponse<any> = yield call(loadPostAPI, action.payload);
		yield put(loadPostAsync.success(result));
	} catch (error: any) {
		console.error(error);
		yield put(loadPostAsync.failure(error));
	}
	yield put(loadingEnd(action.type));
}

function* watchLoadPost() {
	yield takeLatest(loadPostAsync.request, loadPost);
}

export default function* postSaga() {
	yield all([fork(watchLoadPost), fork(watchWritePost), fork(watchRemovePost)]);
}
