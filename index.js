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
import {createDrawerNavigator} from 'react-navigation-drawer';
import Logout from './containers/Logout.js';
import Dashboard from './containers/Dashboard.js';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeExpenses,
  },
  Dashboard: {
    screen: Dashboard,
  },
  Logout: {
    screen: Logout,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);
const MainNavigator = createStackNavigator(
  {
    Register: {screen: Register},
    Login: {screen: Login},
    ForgotLogin: {screen: ForgotLogin},
    HomeExpenses: {screen: MyApp},
    ExpenseDetail: {screen: ExpenseDetail},
    NewExpense: {screen: NewExpense},
  },
  {
    initialRouteName: 'HomeExpenses',
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
