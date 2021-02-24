import {OPEN_MODAL_ADD, CLOSE_MODAL, OPEN_MODAL_FOR_EDIT} from "../types.js";

export function modalReducer(state= {isOpened: false, product: null}, action) {
  console.log(action.type);
  switch (action.type) {
    case OPEN_MODAL_ADD:
      return {isOpened: true, product: state.product};
    case CLOSE_MODAL:
      return {isOpened: false, product: null};
    case OPEN_MODAL_FOR_EDIT:
      return {isOpened: true, product: action.payload};
    default: return state;
  }
}
