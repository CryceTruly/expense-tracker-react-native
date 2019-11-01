import {
  IS_AUTHENTICATING,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  CLEAR_ERRORS,
} from '../types';
import Axios from 'axios';

const registerUser = ({email, password, username}) => {
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
            message:
              'Account created successfully,please visit your email to verify your account',
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
export default registerUser;
