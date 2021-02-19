import {createStore} from './store.js';
import {rootReducer} from './reducers/rootReducer.js';

const { getState, dispatch, subscribe } = createStore(rootReducer, []);//корректно ли в initialState пустой массив вставлять в нашем случае?

export {
  getState,
  subscribe,
  dispatch
};
