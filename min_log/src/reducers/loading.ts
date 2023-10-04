import { ActionType, createReducer, createAction } from "typesafe-actions";

const LOADING_START = "loading/LOADING_START";
const LOADING_END = "loading/LOADING_END";

export const loadingStart = createAction(LOADING_START)<string>();
export const loadingEnd = createAction(LOADING_END)<string>();

const actions = { loadingStart, loadingEnd };

type LoadingAction = ActionType<typeof actions>;

type LoadingState = {
  [key: string]: boolean;
};

const initialState: LoadingState = {};

const loadingReducer = createReducer<LoadingState, LoadingAction>(
  initialState,
  {
    [LOADING_START]: (state, { payload }) => ({
      ...state,
      [payload]: true,
    }),
    [LOADING_END]: (state, { payload }) => ({
      ...state,
      [payload]: false,
    }),
  }
);

export default loadingReducer;
