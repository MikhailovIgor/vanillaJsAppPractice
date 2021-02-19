import {DELETE_PRODUCT, GET_PRODUCTS} from "../types.js";

export function productReducer(state= [], action) {
  console.log(action.type);
  switch (action.type) {
    case DELETE_PRODUCT:
      return state.filter(item => item.id !== action.payload);
    case GET_PRODUCTS:
      return [...action.payload];
    default: return state;
  }
}
