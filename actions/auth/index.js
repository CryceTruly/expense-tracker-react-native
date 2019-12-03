import {
  IS_AUTHENTICATING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  CLEAR_ERRORS,
  LOGOUT_SUCCESSFULL,
  RESET_PASSWORD_EMAIL_SEND_FAILED,
  RESET_PASSWORD_EMAIL_SEND_SUCCESS,
  IS_SENDING_RESET_EMAIL,
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
    Axios.post('http://10.0.2.2:8000/api/auth/register', {
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
                errors: {
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
    Axios.post('http://10.0.2.2:8000/api/auth/login/', {
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
export const requestPasswordChange = email => {
  return dispatch => {
    dispatch({
      type: IS_SENDING_RESET_EMAIL,
    });
    dispatch({
      type: CLEAR_ERRORS,
    });
    Axios.post('http://10.0.2.2:8000/api/auth/reset-password/', {
      email,
    })
      .then(res => {
        dispatch({
          type: RESET_PASSWORD_EMAIL_SEND_SUCCESS,
          payload: {
            message: res.data,
          },
        });
      })
      .catch(err => {
        if (err.response) {
          dispatch({
            type: RESET_PASSWORD_EMAIL_SEND_FAILED,
            payload: {
              errors: err.response.data,
            },
          });
        } else {
          dispatch({
            type: RESET_PASSWORD_EMAIL_SEND_FAILED,
            payload: {
              errors: {
                errors: {
                  email: ['Something went wrong,please try again later'],
                },
              },
            },
          });
        }
      });
  };
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: {
      message: 'Logout Successful',
    },
  });
  dispatch({
    type: IS_AUTHENTICATING,
  });
  dispatch({
    type: LOGOUT_SUCCESSFULL,
  });
};
