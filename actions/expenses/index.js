import Axios from 'axios';
import {
  FETCH_EXPENSES_SUCCESS,
  IS_FETCHING_EXPENSES,
  FETCH_EXPENSES_FAILED,
  CLEAR_ERRORS,
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
