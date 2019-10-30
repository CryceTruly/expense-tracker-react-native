import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers';

const enhancers = composeWithDevTools({});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  enhancers(applyMiddleware(...middleware)),
);

export default store;
