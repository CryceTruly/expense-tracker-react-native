import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  expenses: expensesReducer,
});

export default rootReducer;
