import {OPEN_MODAL, CLOSE_MODAL} from "../types.js";

export function modalReducer(state= {isOpened: false}, action) {
  console.log(action.type);
  switch (action.type) {
    case OPEN_MODAL:
      return {isOpened: true};
    case CLOSE_MODAL:
      return {isOpened: false};
    default: return state;
  }
}
