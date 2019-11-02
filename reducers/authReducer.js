import {
  IS_AUTHENTICATING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESSFULL,
} from '../actions/types';

const initialState = {
  isAuthenticating: false,
  authUser: null,
  accessToken: null,
  isLoggedIn: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IS_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        authUser: action.payload.user,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isAuthenticating: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        authUser: action.payload.user,
        accessToken: action.payload.user.token,
        isLoggedIn: true,
      };
    case LOGOUT_SUCCESSFULL:
      console.log('logging out');
      
      return {
        ...state,
        authUser: null,
        accessToken: null,
        isLoggedIn: false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticating: false,
      };
    default:
      return state;
  }
}
