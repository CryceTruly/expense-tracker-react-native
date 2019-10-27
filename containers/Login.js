import React, {useState} from 'react';
import {
  Avatar,
  Button,
  Card,
  HelperText,
  TextInput,
  ProgressBar,
  Divider,
} from 'react-native-paper';
import Axios from 'axios';
import {Alert} from 'react-native';

const Login = props => {
  const {navigate} = props.navigation;
  Login.navigationOptions = {
    title: 'Login for a new account',
  };
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setisAuthenticating] = useState(false);

  const onSubmit = () => {
    if (email !== '' && !email.includes('@')) {
      setEmailError('Email is invalid');
    }

    if (password.length < 4) {
      setPasswordError('password is too short');
    }

    if (passwordError === '' && emailError === '') {
      setisAuthenticating(true);
      setEmailError('');
      setPasswordError('');
      Axios.post(
        'https://expense-tracker-v1-staging.herokuapp.com/api/auth/login/',
        {
          email,
          password,
        },
      )
        .then(res => {
          console.log(email+password);
          
          if (res.status === 200) {
            setisAuthenticating(false);
            Alert.alert(
              'Success',
              'Help me get outa here',
              [
                {
                  text: 'Verify Email',
                  onPress: () => console.log('Ask me later pressed'),
                },
                {
                  text: 'LOgin',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Great', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
          }
        })
        .catch(err => {
          setisAuthenticating(false);
          if (err.response.status === 400) {
            if (err.response.data.user.email) {
              setEmailError(err.response.data.user.email[0]);
            } else {
              setEmailError('');
            }
          } else {
            setPasswordError('Incorrect credentials');
          }
        });
    }
  };
  return (
    <Card>
      <Card.Title
        title="Sign in to your account"
        subtitle="Login to manage your money"
        left={props => <Avatar.Icon {...props} icon="lock" />}
      />
      <Card.Content>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <HelperText type="error" visible={emailError !== ''}>
          {emailError}
        </HelperText>

        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <HelperText type="error" visible={passwordError !== ''}>
          {passwordError}
        </HelperText>

        <ProgressBar
          indeterminate={true}
          visible={isAuthenticating}
          color={'blue'}
        />

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
          Need a new Account? Register
        </Button>

        <Button
          mode="contained"
          onPress={() => navigate('Home')}>
         Home
        </Button>

        <HelperText
          dark={false}
          mode="contained"
          type="info"
          onPress={() => navigate('ForgotLogin')}>
          Forgot Password?
        </HelperText>
      </Card.Content>
    </Card>
  );
};

export default Login;
