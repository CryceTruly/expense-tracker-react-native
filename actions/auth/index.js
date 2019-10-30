import {IS_AUTHENTICATING} from '../types';

const registerUser = user => ({
  type: IS_AUTHENTICATING,
  payload: {user: user},
});
export default registerUser;
