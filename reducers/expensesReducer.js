import {IS_CREATING_EXPENSE} from '../actions/types';

const initialState = {
  isCreating: false,
  expenses: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    case IS_CREATING_EXPENSE:
      return {
        ...state,
        isCreating: true,
      };
    default:
      return state;
  }
}
