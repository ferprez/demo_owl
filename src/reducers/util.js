import {
  TOAST_DASH_MESSAGE,
  TOAST_DASH_CLEAR,
  OPEN_DRAWER,
  CLOSE_DRAWER
} from "../util/actionTypes";

const INITIAL_STATE = {
  message: "",
  show: false,
  drawer: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOAST_DASH_MESSAGE:
      return { ...state, message: action.payload, show: true };
    case TOAST_DASH_CLEAR:
      return { ...state, message: "", show: false };
    case OPEN_DRAWER:
      return { ...state, drawer: true };
    case CLOSE_DRAWER:
      return { ...state, drawer: false };
    default:
      return state;
  }
};
