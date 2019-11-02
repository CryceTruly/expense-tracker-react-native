import {
  IS_CREATING_EXPENSE,
  IS_FETCHING_EXPENSES,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSES_FAILED,
} from '../actions/types';

const initialState = {
  isCreating: false,
  expenses: [],
  isLoading: false,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case IS_CREATING_EXPENSE:
      return {
        ...state,
        isCreating: true,
      };
    case IS_FETCHING_EXPENSES:
      return {
        ...state,
        isLoading: true,
        expenses: null,
      };
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isLoading: false,
        expenses: action.payload,
      };
    case FETCH_EXPENSES_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
