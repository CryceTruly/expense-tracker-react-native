import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux';
import {loginUser} from '../actions/auth/';
import LoginScreen from '../screens/LoginScreen';

const Login = props => {
  const {navigate} = props.navigation;
  Login.navigationOptions = {
    headerTitle: 'Login to your Account',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {isAuthenticating} = props.auth;
  const errors = props.errors;

  useEffect(() => {
    if (props.auth.isLoggedIn === true) {
      navigate('HomeExpenses', {
        user: props.auth.authUser,
        message: 'Login successful,you are welcome',
      });
    }
    return () => {};
  }, [navigate, props.auth.authUser, props.auth.isLoggedIn]);

  const onSubmit = () => {
    if (email !== '' && !email.includes('@')) {
      setEmailError('Email is invalid');
    }

    if (password.length < 6) {
      setPasswordError('password short be atleast 6 characters long');
    }

    if (passwordError === '' && emailError === '') {
      props.loginUser({email, password});
      setEmailError('');
      setPasswordError('');
    }
  };

  return (
    <LoginScreen
      navigate={navigate}
      errors={errors}
      emailError={emailError}
      setEmail={setEmail}
      email={email}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      passwordError={passwordError}
      isAuthenticating={isAuthenticating}
    />
  );
};

const mapStateToProps = state => {
  return {
    errors: state.errors,
    auth: state.auth,
  };
};

export default connect(
  mapStateToProps,
  {loginUser},
)(Login);
