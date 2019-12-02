/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
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
import SplashScreen from './containers/SplashScreen.js';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: 'Sign In to your account',
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerTitle: 'Create Account',
      },
    },
    ForgotLogin: {
      screen: ForgotLogin,
      navigationOptions: {
        headerTitle: 'Forgot Password',
      },
    },
  },
  {
    transitionConfig: () => fromRight(1000),
  },
);
const MainDrawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeExpenses,
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        headerTitle: 'Dashboard',
      },
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        headerTitle: 'Logout',
      },
    },
  },
  {
    transitionConfig: () => fromRight(1000),
  },
);
const AppStackPages = createStackNavigator(
  {
    HomeExpenses: {
      screen: MainDrawer,
      navigationOptions: {
        headerTitle: 'Expenses',
        headerRight: () => (
          <HeaderButtons>
            <Item title="Logout" onPress={() => {}} />
          </HeaderButtons>
        ),
      },
    },
    ExpenseDetail: {
      screen: ExpenseDetail,
      navigationOptions: {
        headerTitle: 'Expense Detail',
      },
    },
    NewExpense: {
      screen: NewExpense,
      navigationOptions: {
        headerTitle: 'Create a new Expense',
      },
    },
    drawer: MainDrawer,
  },
  {
    transitionConfig: () => fromRight(1000),
  },
);

const MAppainNavigator = createSwitchNavigator({
  Loading: {
    screen: SplashScreen,
  },
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: AppStackPages,
  },
});

const App = createAppContainer(MAppainNavigator);
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
