import {DELETE_PRODUCT, SET_PRODUCTS} from "./types.js";

export function productReducer(state= [], action) {
  console.log(action.type);
  switch (action.type) {
    case DELETE_PRODUCT:
      return state.filter(item => item.id !== action.payload);
    case SET_PRODUCTS:
      return [...action.payload];
    default: return state;
  }
}
