import Axios from 'axios';
import {
  FETCH_EXPENSES_SUCCESS,
  IS_FETCHING_EXPENSES,
  FETCH_EXPENSES_FAILED,
  CLEAR_ERRORS,
  IS_CREATING_EXPENSE,
  CREATE_EXPENSE_SUCCESS,
  CREATE_EXPENSE_FAILED,
  CLEAR_EXPENSE_ADDED,
  DELETE_EXPENSE_FAILED,
  DELETE_EXPENSE_SUCCESS,
  IS_DELETING_EXPENSE,
  CLEAR_EXPENSE_DELETED,
  EDIT_EXPENSE_FAILED,
  EDIT_EXPENSE_SUCCESS,
  IS_EDITING_AN_EXPENSE,
} from '../types';

export const getAllExpenses = token => dispatch => {
  dispatch({
    type: IS_FETCHING_EXPENSES,
  });
  dispatch({
    type: CLEAR_ERRORS,
  });
  Axios.get('https://expense-tracker-v1-prod.herokuapp.com/api/expenses/', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(res => {
      dispatch({
        type: CLEAR_ERRORS,
      });
      dispatch({
        type: FETCH_EXPENSES_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch(err => {
      if (err.request) {
        dispatch({
          type: FETCH_EXPENSES_FAILED,
          payload: {
            message:
              'Something is not right,are you sure you have an active connection.',
          },
        });
      } else {
        dispatch({
          type: FETCH_EXPENSES_FAILED,
          payload: err.respose.data,
        });
      }
    });
};

export const addNewExpense = (expense, token) => dispatch => {
  dispatch({
    type: IS_CREATING_EXPENSE,
  });
  dispatch({
    type: CLEAR_ERRORS,
  });
  Axios.post(
    'https://expense-tracker-v1-prod.herokuapp.com/api/expenses/',
    expense,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  )
    .then(res => {
      dispatch({
        type: CLEAR_ERRORS,
      });
      dispatch({
        type: CREATE_EXPENSE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      if (!err.response) {
        dispatch({
          type: CREATE_EXPENSE_FAILED,
          payload: {
            message:
              'Something is not right,are you sure you have an active connection.',
          },
        });
      } else {
        dispatch({
          type: CREATE_EXPENSE_FAILED,
          payload: err.response.data,
        });
      }
    });
};

export const editExpense = (expense, id, token) => dispatch => {
  dispatch({
    type: IS_EDITING_AN_EXPENSE,
  });
  dispatch({
    type: CLEAR_ERRORS,
  });
  Axios.patch(
    `https://expense-tracker-v1-prod.herokuapp.com/api/expense/${id}/`,
    expense,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  )
    .then(res => {
      dispatch({
        type: CLEAR_ERRORS,
      });
      dispatch({
        type: EDIT_EXPENSE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      if (!err.response) {
        dispatch({
          type: EDIT_EXPENSE_FAILED,
          payload: {
            message: 'sorry something went wrong',
          },
        });
      } else {
        dispatch({
          type: EDIT_EXPENSE_FAILED,
          payload: err.response.data,
        });
      }
    });
};

export const clearExpenseAdded = () => dispatch => {
  dispatch({
    type: CLEAR_EXPENSE_ADDED,
  });
};
export const deleteExpense = (id, token) => dispatch => {
  dispatch({
    type: IS_DELETING_EXPENSE,
  });
  Axios.delete(
    `https://expense-tracker-v1-prod.herokuapp.com/api/expense/${id}`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  )
    .then(() => {
      dispatch({
        type: DELETE_EXPENSE_SUCCESS,
        payload: id,
      });
    })
    .catch(() => {
      dispatch({
        type: DELETE_EXPENSE_FAILED,
        payload: {
          message: 'Something went wrong',
        },
      });
    });
};

export const clearExpenseDeleted = () => dispatch => {
  dispatch({
    type: CLEAR_EXPENSE_DELETED,
  });
};
