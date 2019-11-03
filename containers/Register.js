import React, {useState} from 'react';
import {
  Button,
  Card,
  HelperText,
  TextInput,
  ProgressBar,
  Divider,
} from 'react-native-paper';
import {connect} from 'react-redux';
import {registerUser} from '../actions/auth/';
import {ScrollView} from 'react-native-gesture-handler';

const Register = props => {
  const {navigate} = props.navigation;
  Register.navigationOptions = {
    headerTitle: 'Register for a new account',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {isAuthenticating} = props.auth;

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
    <ScrollView>
      <Card>
        <Card.Title title="Create a free account today!" />
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
            label="Username"
            value={username}
            onChangeText={text => setUserName(text)}
          />
          <HelperText
            type="error"
            visible={props.errors.errors || userNameError !== ''}>
            {props.errors.errors && props.errors.errors.username
              ? props.errors.errors.username[0]
              : userNameError}
          </HelperText>
          <TextInput
            label="Password"
            secureTextEntry={true}
            value={password}
            type="password"
            onChangeText={text => setPassword(text)}
          />
          <HelperText />

          <TextInput
            label="Confirm Password"
            value={confirmedPassword}
            secureTextEntry={true}
            type="password"
            onChangeText={text => setConfirmPassword(text)}
          />
          <HelperText
            type="error"
            visible={props.errors.errors || passwordError !== ''}>
            {props.errors.errors && props.errors.errors.authError
              ? props.errors.errors.authError
              : passwordError}
          </HelperText>

          <ProgressBar
            indeterminate={true}
            visible={isAuthenticating}
            color={'blue'}
          />

          <Divider />
          <Divider />
          <Divider />

          <Button dark={true} mode="contained" onPress={onSubmit}>
            Sign me up
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
            onPress={() => navigate('Login')}>
            Already have an account? Login
          </Button>
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
  {registerUser},
)(Register);
