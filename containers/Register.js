import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../actions/auth/';
import RegisterScreen from '../screens/RegisterScreen';

const Register = props => {
  const {navigate} = props.navigation;

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {isAuthenticating} = props.auth;
  const {errors} = props;

  const onSubmit = () => {
    if (email !== '' && !email.includes('@')) {
      setEmailError('Email is invalid');
    }

    if (password !== confirmedPassword) {
      setPasswordError('passwords donot match');
    }

    if (
      username !== '' &&
      email.includes('@') &&
      password === confirmedPassword
    ) {
      props.registerUser({username, email, password});
      setEmailError('');
      setPasswordError('');
      setUserNameError('');
    }
  };

  if (props.auth.authUser !== null) {
    navigate('Login', {
      userEmail: props.auth.authUser.email,
      message:
        'Account created successfully,please visit your email to verify your account',
    });
  }

  return (
    <RegisterScreen
      email={email}
      isAuthenticating={isAuthenticating}
      emailError={emailError}
      errors={errors}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      onSubmit={onSubmit}
      userNameError={userNameError}
      passwordError={passwordError}
      setUserName={setUserName}
      navigate={navigate}
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
  {registerUser},
)(Register);
