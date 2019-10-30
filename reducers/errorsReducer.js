import {GET_ALL_ERRORS} from '../actions/types';

const initialState = {errors: []};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ERRORS:
      return state.errors;

    default:
      return state;
  }
}
