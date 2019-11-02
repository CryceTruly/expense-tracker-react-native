import {
  IS_AUTHENTICATING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  CLEAR_ERRORS,
  LOGOUT_SUCCESSFULL,
} from '../types';
import Axios from 'axios';

export const registerUser = ({email, password, username}) => {
  return dispatch => {
    dispatch({
      type: IS_AUTHENTICATING,
    });
    dispatch({
      type: CLEAR_ERRORS,
    });
    Axios.post(' http://10.0.2.2:8000/api/auth/register', {
      email,
      password,
      username,
    })
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            user: res.data.user,
          },
        });
      })
      .catch(err => {
        if (err.response) {
          dispatch({
            type: REGISTER_FAILED,
            payload: {
              errors: err.response.data,
            },
          });
        } else {
          dispatch({
            type: REGISTER_FAILED,
            payload: {
              errors: {
                user: {
                  authError: 'Something went wrong,please try again later',
                },
              },
            },
          });
        }
      });
  };
};

export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({
      type: IS_AUTHENTICATING,
    });
    dispatch({
      type: CLEAR_ERRORS,
    });
    Axios.post(' http://10.0.2.2:8000/api/auth/login/', {
      email,
      password,
    })
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: res.data.user,
          },
        });
      })
      .catch(err => {
        if (err.response) {
          dispatch({
            type: LOGIN_FAILED,
            payload: {
              errors: err.response.data,
            },
          });
        } else {
          dispatch({
            type: LOGIN_FAILED,
            payload: {
              errors: {
                user: {
                  authError: 'Something went wrong,please try again later',
                },
              },
            },
          });
        }
      });
  };
};

export const logOutUser = user => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESSFULL,
    payload: {
      message: 'Logout Successful',
    },
  });
};
