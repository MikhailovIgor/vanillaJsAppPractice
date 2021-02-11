import {createStore} from "./store.js";
import {productReducer} from "./productReducer.js";

const { getState, dispatch, subscribe } = createStore(productReducer, []);

export {
  getState,
  subscribe,
  dispatch
};
