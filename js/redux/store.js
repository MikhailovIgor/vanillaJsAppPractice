import {INIT} from './types.js';

export function createStore(reducer, initialState) {
  let state = reducer(initialState, {type: INIT});
  let subscribers = [];
  
  const getState = () => state;
  
  const dispatch = (action) => {
    // return if the action is asynchronous (Redux-thunk emulation)
    if (action.constructor === Promise) return;
    state = reducer(state, action);
    subscribers.forEach(cb => cb());
  };
  
  const subscribe = callback => {
    subscribers.push(callback);
  };
  
  return {
    getState,
    dispatch,
    subscribe
  };
}
