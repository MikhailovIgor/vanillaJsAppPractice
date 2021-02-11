import {INIT} from './types.js';

export function createStore(reducer, initialState) {
  let state = reducer(initialState, {type: INIT});
  let subscribers = [];
  
  const getState = () => state;
  
  const dispatch = (action) => {
    state = reducer(state, action);
    subscribers.forEach(cb => cb());
  };
  
  const subscribe = callback => {
    subscribers.push(callback);
  };
  
  return {
    getState, dispatch, subscribe
  };
}