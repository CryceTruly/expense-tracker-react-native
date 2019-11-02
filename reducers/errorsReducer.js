import {
  GET_ALL_ERRORS,
  REGISTER_FAILED,
  CLEAR_ERRORS,
  LOGIN_FAILED,
  FETCH_EXPENSES_FAILED,
} from '../actions/types';

const initialState = {errors: null};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_FAILED:
    case LOGIN_FAILED:
      return {
        ...state,
        errors: action.payload.errors.user,
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
    default:
      return state;
  }
}
