import {OPEN_MODAL, CLOSE_MODAL, EDIT_PRODUCT} from "../types.js";

export function modalReducer(state= {isOpened: false}, action) {
  console.log(action.type);
  switch (action.type) {
    case OPEN_MODAL:
      return {isOpened: true};
    case CLOSE_MODAL:
      return {isOpened: false};
    case EDIT_PRODUCT:
      return ;
    default: return state;
  }
}
