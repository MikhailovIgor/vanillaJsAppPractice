import {createStore} from './store.js';
import {rootReducer} from './reducers/rootReducer.js';

const { getState, dispatch, subscribe } = createStore(rootReducer);

export {
  getState,
  subscribe,
  dispatch
};