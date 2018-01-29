import { 
  LOGIN_USER,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../util/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };      
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

      default:
        return state;
  }
};
