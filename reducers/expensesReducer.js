import {
  IS_CREATING_EXPENSE,
  IS_FETCHING_EXPENSES,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSES_FAILED,
  CREATE_EXPENSE_SUCCESS,
  CREATE_EXPENSE_FAILED,
  CLEAR_EXPENSE_ADDED,
} from '../actions/types';

const initialState = {
  isCreating: false,
  expenses: [],
  isLoading: false,
  newExpenseAdded: false,
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
    case CREATE_EXPENSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCreating: false,
        expenses: [...state.expenses, action.payload],
        newExpenseAdded: true,
      };
    case CREATE_EXPENSE_FAILED:
      return {
        ...state,
        isLoading: false,
        isCreating: false,
        expenses: state.expenses,
        newExpenseAdded: false,
      };

    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        isCreating: false,
        isLoading: false,
        expenses: action.payload,
        newExpenseAdded: false,
      };
    case FETCH_EXPENSES_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case CLEAR_EXPENSE_ADDED: {
      return {
        ...state,
        newExpenseAdded: false,
      };;
    }
    default:
      return state;
  }
}
