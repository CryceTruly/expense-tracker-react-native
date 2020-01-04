import React from 'react';
import DashBoardScreen from '../screens/DashBoardScreen';

const Dashboard = () => {
  Dashboard.navigationOptions = {
    drawerLabel: 'Dashboard',
  };
  return <DashBoardScreen />;
};

export default Dashboard;
