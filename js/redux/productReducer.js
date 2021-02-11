import {products} from "./productInitialState.js";
import {DELETE_PRODUCT} from "./types.js";

export function productReducer(state= products, action) {
  console.log(action.type);
  switch (action.type) {
    case DELETE_PRODUCT: return state.filter(item => item.id !== action.payload)
    
    default: return state;
  }
}