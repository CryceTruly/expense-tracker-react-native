import React, {useState} from 'react';
import {requestPasswordChange} from './../actions/auth';
import {Alert} from 'react-native';
import {connect} from 'react-redux';
import ForgotLoginScreen from '../screens/ForgotLoginScreen';

const ForgotLogin = props => {
  const {navigate} = props.navigation;
  ForgotLogin.navigationOptions = {
    headerTitle: 'Forgot Login ',
  };
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const {auth} = props;
  const errors = props.errors.errors;
  if (auth.resetEmailSent) {
    Alert.alert(
      'Information',
      'We have sent you an email with instructions on how to reset your password',
    );
  }
  const onRequestEmail = () => {
    if (email !== '' && !email.includes('@')) {
      setEmailError('Email is invalid');
    }
    if (emailError === '') {
      setEmailError('');
      props.requestPasswordChange(email);
    }
  };
  return (
    <ForgotLoginScreen
      onRequestEmail={onRequestEmail}
      email={email}
      errors={errors}
      setEmail={setEmail}
      navigate={navigate}
    />
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors,
  };
};

export default connect(
  mapStateToProps,
  {requestPasswordChange},
)(ForgotLogin);
