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
} from '../types';

export const getAllExpenses = token => dispatch => {
  dispatch({
    type: IS_FETCHING_EXPENSES,
  });
  dispatch({
    type: CLEAR_ERRORS,
  });
  Axios.get('http://10.0.2.2:8000/api/expenses/', {
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
            message: 'Sorry something went wrong,please try again',
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
  Axios.post('http://10.0.2.2:8000/api/expenses/', expense, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
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
            message: 'Sorry something went wrong,please try again',
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
export const clearExpenseAdded = () => dispatch => {
  dispatch({
    type: CLEAR_EXPENSE_ADDED,
  });
};
