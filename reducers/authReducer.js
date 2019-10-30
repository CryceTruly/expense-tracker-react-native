import {IS_AUTHENTICATING} from '../actions/types';

const initialState = {
  isAuthenticating: false,
  authUser: null,
  accessToken: null,
  isLoggedIn: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IS_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: true,
      };
    default:
      return state;
  }
}
