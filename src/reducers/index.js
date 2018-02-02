import { combineReducers } from 'redux';

import { routerReducer } from "react-router-redux";

import auth from './auth';
import util from './util';

export default combineReducers({
  auth,
  util,
  router: routerReducer
});