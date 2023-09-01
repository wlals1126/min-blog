import { createReducer, createAsyncAction, ActionType } from "typesafe-actions";
import { UPost, UUser, UCategory } from "@/typings/data";
import { UPostsState } from "@/typings/reducer";
import { AxiosError, AxiosResponse } from "axios";

const initialState: UPostsState = {
  Category: [],
  posts: [],
  numberOfPosts: 0,
  isLoaddingPosts: false,
  loadPostsErrorReason: null,
  EndOfPosts: false,
  findPostCount: 0,
};

export const LOAD_POSTS_REQUEST = "posts/LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "posts/LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "posts/LOAD_POSTS_FAILURE";

export const LOAD_CATEGORIES_REQUEST = "posts/LOAD_CATEGORIES_REQUEST";
export const LOAD_CATEGORIES_SUCCESS = "posts/LOAD_CATEGORIES_SUCCESS";
export const LOAD_CATEGORIES_FAILURE = "posts/LOAD_CATEGORIES_FAILURE";

export const LOAD_SEARCH_REQUEST = "posts/LOAD_SEARCH_REQUEST";
export const LOAD_SEARCH_SUCCESS = "posts/LOAD_SEARCH_SUCCESS";
export const LOAD_SEARCH_FAILURE = "posts/LOAD_SEARCH_FAILURE";

interface loadPostRequestPayload {
  category?: string;
  search?: string;
  lastId?: number;
}

export const loadPostsAsync = createAsyncAction(
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE
)<loadPostRequestPayload, AxiosResponse<UPost[]>, AxiosError>();

interface ISearchPostsPayload {
  posts: UPost[];
  findPostCount: number;
}

export const searchPostsAsync = createAsyncAction(
  LOAD_SEARCH_REQUEST,
  LOAD_SEARCH_SUCCESS,
  LOAD_SEARCH_FAILURE
)<loadPostRequestPayload, AxiosResponse<ISearchPostsPayload>, AxiosError>();

interface LoadCategoryType {
  categories: UCategory[] & { postCount: number }[];
  numberOfPosts: number;
}

export const loadCategoriesAsync = createAsyncAction(
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAILURE
)<null, AxiosResponse<LoadCategoryType>, AxiosError>();

const actions = {
  loadPostsAsync,
  loadCategoriesAsync,
  searchPostsAsync,
};

type PostsAction = ActionType<typeof actions>;

const postsReducer = createReducer<UPostsState, PostsAction>(initialState, {
  [LOAD_POSTS_REQUEST]: (state) => ({
    ...state,
    isLoaddingPosts: true,
  }),
  [LOAD_POSTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoaddingPosts: false,
    posts: state.posts.concat(payload.data),
    EndOfPosts: payload.data.length !== 8,
  }),
  [LOAD_POSTS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    isLoaddingPosts: false,
    loadPostsErrorReason:
      error.code === "ECONNABORTED" ? "timeout" : error.message,
  }),
  [LOAD_SEARCH_REQUEST]: (state) => ({
    ...state,
    isLoaddingPosts: true,
  }),
  [LOAD_SEARCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoaddingPosts: false,
    posts: state.posts.concat(payload.data.posts),
    findPostCount: payload.data.findPostCount,
    EndOfPosts: payload.data.posts.length !== 8,
  }),
  [LOAD_SEARCH_FAILURE]: (state, { payload: error }) => ({
    ...state,
    isLoaddingPosts: false,
    loadPostsErrorReason:
      error.code === "ECONNABORTED" ? "timeout" : error.message,
  }),
  [LOAD_CATEGORIES_REQUEST]: (state) => ({
    ...state,
  }),
  [LOAD_CATEGORIES_SUCCESS]: (state, { payload }) => ({
    ...state,
    Category: payload.data.categories,
    numberOfPosts: payload.data.numberOfPosts,
  }),
  [LOAD_CATEGORIES_FAILURE]: (state, { payload: error }) => ({
    ...state,
  }),
});

export default postsReducer;
