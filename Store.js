import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = composeWithDevTools({});

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  enhancers(applyMiddleware(...middleware)),
);
export const persistor = persistStore(store);
export default store;
