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
import ExpenseDetail from './containers/EXpenseDetail.js';
import NewExpense from './containers/NewExpense.js';

const MainNavigator = createStackNavigator({
  Register: {screen: Register},
  Login: {screen: Login},
  ForgotLogin: {screen: ForgotLogin},
  Home: {screen: HomeExpenses},
  ExpenseDetail: {screen: ExpenseDetail},
  NewExpense:{screen: NewExpense},
  initialRouteName: 'Register',
});

const App = createAppContainer(MainNavigator);

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
