import {
  createAction,
  createReducer,
  ActionType,
  action,
} from "typesafe-actions";
import { UCategory } from "@/typings/data";

interface PostingState {
  isEditingId: number;
  body: string;
  categories: UCategory[];
  isOpen?: boolean;
}

const initialState: PostingState = {
  isEditingId: 0,
  body: "",
  categories: [],
  isOpen: false,
};

export const OPEN_CONFIRM_POST = "posting/OPEN_CONFIRM_POST";
export const CLOSE_CONFIRM_POST = "posting/CLOSE_CONFIRM_POST";

export const openPosting = createAction(OPEN_CONFIRM_POST)<PostingState>();
export const closePosting = createAction(CLOSE_CONFIRM_POST)();

const actions = {
  openPosting,
  closePosting,
};

type PostingAction = ActionType<typeof actions>;

const postingReducer = createReducer<PostingState, PostingAction>(
  initialState,
  {
    [OPEN_CONFIRM_POST]: (state, { payload: data }) => ({
      isEditingId: data.isEditingId,
      isOpen: true,
      body: data.body,
      categories: data.categories,
    }),
    [CLOSE_CONFIRM_POST]: (state) => ({
      isEditingId: 0,
      isOpen: false,
      body: "",
      categories: [],
    }),
  }
);

export default postingReducer;
