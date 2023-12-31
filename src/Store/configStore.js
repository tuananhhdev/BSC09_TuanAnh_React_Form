import { combineReducers, createStore } from "redux";

import * as reducers from "./reducer";

const rootReducers = combineReducers({
  ...reducers,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
