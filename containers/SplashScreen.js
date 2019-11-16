import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator, StatusBar} from 'react-native';

const SplashScreen = props => {
  const {navigate} = props.navigation;
  const {auth} = props;
  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate('Auth');
    } else {
      navigate('App');
    }
  }, [auth, auth.isLoggedIn, navigate]);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(
  mapStateToProps,
  {},
)(SplashScreen);
