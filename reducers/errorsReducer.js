import {
  GET_ALL_ERRORS,
  REGISTER_FAILED,
  CLEAR_ERRORS,
  LOGIN_FAILED,
  FETCH_EXPENSES_FAILED,
  CREATE_EXPENSE_FAILED,
  CLEAR_EXPENSE_ADDED,
  EDIT_EXPENSE_FAILED,
  RESET_PASSWORD_EMAIL_SEND_FAILED,
  LOGOUT_SUCCESSFULL,
} from '../actions/types';

const initialState = {errors: null};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_FAILED:
    case LOGIN_FAILED:
      return {
        ...state,
        errors: action.payload.errors.errors,
      };
    case GET_ALL_ERRORS:
      return state.errors;
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case FETCH_EXPENSES_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    case CREATE_EXPENSE_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    case LOGOUT_SUCCESSFULL:
    case CLEAR_EXPENSE_ADDED:
      return {
        ...state,
        errors: null,
      };
    case RESET_PASSWORD_EMAIL_SEND_FAILED:
    case EDIT_EXPENSE_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
