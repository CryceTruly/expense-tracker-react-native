import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {logoutUser} from './../actions/auth';

const Logout = props => {
  Logout.navigationOptions = {
    drawerLabel: 'Logout',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./../2x/baseline_menu_black_24dp.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  return (
    <View style={styles.container}>
      <Text>Are you sure you want to log out?</Text>
      <Button onPress={() => props.logoutUser()}>Yes</Button>
    </View>
  );
};
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
const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};
export default connect(
  mapStateToProps,
  {logoutUser},
)(Logout);
