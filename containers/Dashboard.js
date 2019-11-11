import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
const Dashboard = () => {
  Dashboard.navigationOptions = {
    drawerLabel: 'Dashboard',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./../2x/baseline_menu_black_24dp.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  return (
    <View>
      <Text>Welcome to the dashboard</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default Dashboard;
