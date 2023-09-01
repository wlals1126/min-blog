import { ULogin, UUser } from "@/typings/data";
import { UUserState } from "@/typings/reducer";
import { AxiosError } from "axios";
import { createAsyncAction, createReducer, ActionType } from "typesafe-actions";

const initialState = {
  user: null,
  loginErrorReason: "",
};

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginAsync = createAsyncAction(
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
)<ULogin, UUser, AxiosError>();

export const loadUserAsync = createAsyncAction(
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE
)<ULogin, UUser, AxiosError>();

const actions = {
  loginAsync,
  loadUserAsync,
};

type UserAction = ActionType<typeof actions>;

const userReducer = createReducer<UUserState, UserAction>(initialState, {
  [LOGIN_REQUEST]: (state) => ({
    ...state,
  }),
  [LOGIN_SUCCESS]: (state, { payload: user }) => ({
    ...state,
    user: user,
  }),
  [LOGIN_FAILURE]: (state, { payload: error }) => ({
    ...state,
    user: null,
    loginErrorReason: error.message,
  }),
  [LOAD_USER_REQUEST]: (state) => ({
    ...state,
  }),
  [LOAD_USER_SUCCESS]: (state, { payload: user }) => ({
    ...state,
    user: user,
  }),
  [LOAD_USER_FAILURE]: (state, { payload: error }) => ({
    ...state,
    loginErrorReason: error.message,
    user: null,
  }),
});

export default userReducer;
