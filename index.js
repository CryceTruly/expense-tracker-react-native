/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from './containers/Register';
import Login from './containers/Login.js';
import ForgotLogin from './containers/ForgotLogin.js';
import HomeExpenses from './containers/HomeExpenses.js';
import ExpenseDetail from './containers/ExpenseDetail.js';
import NewExpense from './containers/NewExpense.js';
import {fromRight} from 'react-navigation-transitions';

import store from './Store';
import {Provider as StoreProvider} from 'react-redux';

const MainNavigator = createStackNavigator(
  {
    Register: {screen: Register},
    Login: {screen: Login},
    ForgotLogin: {screen: ForgotLogin},
    Home: {screen: HomeExpenses},
    ExpenseDetail: {screen: ExpenseDetail},
    NewExpense: {screen: NewExpense},
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => fromRight(),
  },
);

const App = createAppContainer(MainNavigator);
export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
