import { applyMiddleware, createStore, compose, StoreEnhancerStoreCreator } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from "next-redux-wrapper";
import reducers from "../reducers";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();

declare module "redux" {
  export interface Store {
    sagaTask: any;
  }
}

const store = createStore(reducers as any, enhancer);
sagaMiddleware.run(sagas);
store.sagaTask = sagaMiddleware.run(sagas);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducers as any, enhancer);
  store.sagaTask = sagaMiddleware.run(sagas)
  return store;
};

const wrapper = createWrapper(configureStore, { 
  debug: process.env.NODE_ENV === 'development' 
});

export default wrapper;
function enhancer(next: StoreEnhancerStoreCreator<{}, {}>): StoreEnhancerStoreCreator<unknown, unknown> {
  throw new Error("Function not implemented.");
}

