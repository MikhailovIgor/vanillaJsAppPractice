import {init} from './actions.js'

export function createStore(reducer, initialState) {
  let state = reducer(initialState, init());
  let subscribers = [];
  
  const getState = () => state;
  
  const dispatch = (action) => {
    console.log(action.type);
    state = reducer(state, action);
    subscribers.forEach(cb => cb())
  };
  
  const subscribe = callback => {
    subscribers.push(callback);
    // return () => subscribers.filter(cb => cb !== callback);
  }
   return {
     getState, dispatch, subscribe
   };
}