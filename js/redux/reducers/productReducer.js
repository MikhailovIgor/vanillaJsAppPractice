import {DELETE_PRODUCT, GET_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT} from "../types.js";

export function productReducer(state= [], action) {
  console.log(action.type);
  switch (action.type) {
    case DELETE_PRODUCT:
      return state.filter(item => item.id !== action.payload);
    case GET_PRODUCTS:
      return [...action.payload];
    case ADD_PRODUCT:
      return [...state, action.payload];
    case EDIT_PRODUCT:
      return state.map(item => item.id === action.payload.id ? {...action.payload} : {...item});
    default: return state;
  }
}
