import {
  IS_CREATING_EXPENSE,
  IS_FETCHING_EXPENSES,
  FETCH_EXPENSES_SUCCESS,
  FETCH_EXPENSES_FAILED,
  CREATE_EXPENSE_SUCCESS,
  CREATE_EXPENSE_FAILED,
  CLEAR_EXPENSE_ADDED,
  IS_DELETING_EXPENSE,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_FAILED,
  CLEAR_EXPENSE_DELETED,
  EDIT_EXPENSE_SUCCESS,
  IS_EDITING_AN_EXPENSE,
  EDIT_EXPENSE_FAILED,
} from '../actions/types';

const initialState = {
  isCreating: false,
  expenses: [],
  isLoading: false,
  newExpenseAdded: false,
  isDeleting: false,
  expenseDeleted: false,
  isExpenseUpdating: false,
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
      };
    }

    case IS_DELETING_EXPENSE:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_EXPENSE_SUCCESS:
      return {
        ...state,
        expenseDeleted: true,
        isDeleting: false,
        expenses: state.expenses.filter(item => item.id !== action.payload),
      };
    case IS_EDITING_AN_EXPENSE:
      return {
        ...state,
        isExpenseUpdating: true,
      } ;
    case EDIT_EXPENSE_SUCCESS:
      return {
        ...state,
        expenseDeleted: true,
        isDeleting: false,
        isExpenseUpdating: false,
        expenses: [
          ...state.expenses.filter(
            i =>
              i.id ===
              state.expenses.filter(item => item.id === action.payload.data.id)
                .id,
          ),
          action.payload.data,
        ],
      };
    case EDIT_EXPENSE_FAILED:
    case DELETE_EXPENSE_FAILED:
    case CLEAR_EXPENSE_DELETED:
      return {
        ...state,
        isDeleting: false,
        expenseDeleted: false,
        isExpenseUpdating: false,
      };
    default:
      return state;
  }
}
