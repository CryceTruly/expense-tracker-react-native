import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const SplashScreen = props => {
  const {navigate} = props.navigation;
  const {auth} = props;
  useEffect(() => {
    setTimeout(() => {
      if (!auth.isLoggedIn) {
        navigate('Auth');
      } else {
        navigate('App');
      }
    }, 500);
  }, [auth, auth.isLoggedIn, navigate]);

  return (<SplashScreenView/>
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
