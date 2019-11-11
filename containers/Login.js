import React, {useState, useEffect} from 'react';

import {
  Button,
  Card,
  HelperText,
  TextInput,
  ProgressBar,
  Divider,
} from 'react-native-paper';
import {connect} from 'react-redux';
import {loginUser} from '../actions/auth/';
import {ScrollView} from 'react-native-gesture-handler';
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

  useEffect(() => {
    if (props.auth.isLoggedIn === true) {
      navigate('Home', {
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card>
        <Card.Title title="Login to your Account!!" />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <HelperText
            type="error"
            visible={props.errors.errors || emailError !== ''}>
            {props.errors.errors && props.errors.errors.email
              ? props.errors.errors.email[0]
              : emailError}
          </HelperText>
          <TextInput
            label="Password"
            secureTextEntry={true}
            value={password}
            type="password"
            onChangeText={text => setPassword(text)}
          />
          {(props.errors.errors && props.errors.errors.password) ||
          passwordError !== '' ? (
            <HelperText
              type="error"
              visible={props.errors.errors || passwordError !== ''}>
              {props.errors.errors && props.errors.errors.password
                ? props.errors.errors.password
                : passwordError}
            </HelperText>
          ) : null}

          {props.errors.errors && props.errors.errors.detail ? (
            <HelperText
              type="error"
              visible={props.errors.errors && props.errors.errors.detail}>
              {props.errors.errors && props.errors.errors.detail
                ? props.errors.errors.detail
                : null}
            </HelperText>
          ) : null}
          <ProgressBar
            indeterminate={true}
            visible={isAuthenticating}
            color={'blue'}
          />

          <Divider />
          <Divider />
          <Divider />
          <Button dark={true} mode="contained" onPress={onSubmit}>
            Login
          </Button>
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <Divider />

          <Button
            dark={false}
            mode="contained"
            onPress={() => navigate('Register')}>
            Need a new Account? Sign Up!
          </Button>

          <HelperText type="success" onPress={() => navigate('ForgotLogin')}>
            Forgot your password
          </HelperText>
        </Card.Content>
      </Card>
    </ScrollView>
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
