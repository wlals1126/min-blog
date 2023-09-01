import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import reducers from "../reducers";

const configureStore = () => {
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware())
      : composeWithDevTools(applyMiddleware());
  const store = createStore(reducers as any, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
