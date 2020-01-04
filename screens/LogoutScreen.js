import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const LogoutScreen = ({logoutUser}) => (
  <View style={styles.container}>
    <Text>Are you sure you want to log out?</Text>
    <Button onPress={() => logoutUser()}>Yes</Button>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    alignItems: 'center',
    paddingTop: 100,
  },
});
export default LogoutScreen ;
