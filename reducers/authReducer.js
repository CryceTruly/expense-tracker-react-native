import {
  IS_AUTHENTICATING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESSFULL,
  RESET_PASSWORD_EMAIL_SEND_FAILED,
  RESET_PASSWORD_EMAIL_SEND_SUCCESS,
  IS_SENDING_RESET_EMAIL,
} from '../actions/types';

const initialState = {
  isAuthenticating: false,
  authUser: null,
  accessToken: null,
  isLoggedIn: false,
  isProcessingEmail: false,
  resetEmailSent: false,
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
      return {
        ...state,
        authUser: null,
        accessToken: null,
        isLoggedIn: false,
        isAuthenticating: false,
      };
    case IS_SENDING_RESET_EMAIL:
      return {
        ...state,
        isProcessingEmail: true,
      };
    case LOGIN_FAILED:
    case RESET_PASSWORD_EMAIL_SEND_FAILED:
      return {
        ...state,
        isAuthenticating: false,
        isProcessingEmail: false,
      };

    case RESET_PASSWORD_EMAIL_SEND_SUCCESS:
      return {
        ...state,
        isProcessingEmail: false,
        resetEmailSent: true,
      };
    default:
      return state;
  }
}
