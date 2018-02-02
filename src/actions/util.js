import { TOAST_DASH_MESSAGE, TOAST_DASH_CLEAR, OPEN_DRAWER, CLOSE_DRAWER } from "../util/actionTypes";

export function showToast(message) {
  return {
    type: TOAST_DASH_MESSAGE,
    payload: message
  }
};

export function clearToast() {
  return {
    type: TOAST_DASH_CLEAR
  }
};

export function openDrawer() {
  return {
    type: OPEN_DRAWER
  }
};

export function closeDrawer() {
  return {
    type: CLOSE_DRAWER
  }
};