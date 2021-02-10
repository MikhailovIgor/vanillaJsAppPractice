import {products} from "./productInitialState.js";
import {INIT, DELETE_PRODUCT} from "./types.js";

export function productReducer(state= products, action) {
  switch (action.type) {
    case INIT: return state;
    
    case DELETE_PRODUCT: return state.filter(item => item.id !== action.payload)
    
    default: return state;
  }
}