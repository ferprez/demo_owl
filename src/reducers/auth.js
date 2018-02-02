import { 
  IS_FETCHING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../util/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  token: null,
  isAuth: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, isAuth: true, token: action.payload.token };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };      
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

      default:
        return state;
  }
};
