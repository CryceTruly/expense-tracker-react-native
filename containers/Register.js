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

const Register = props => {
  const {navigate} = props.navigation;
  Register.navigationOptions = {
    title: 'Register for a new account',
  };
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isAuthenticating, setisAuthenticating] = useState(false);

  const onSubmit = () => {
    if (email !== '' && !email.includes('@')) {
      setEmailError('Email is invalid');
    }

    if (password !== confirmedPassword) {
      setPasswordError('passwords donot match');
    }

    if (
      username !== '' &&
      !email.includes('@') &&
      password === confirmedPassword
    ) {
      setisAuthenticating(true);
      setEmailError('');
      setPasswordError('');
      setUserNameError('');
      Axios.post(
        'https://expense-tracker-v1-staging.herokuapp.com/api/auth/register',
        {
          email,
          password,
          username,
        },
      )
        .then(res => {
          if (res.status === 201) {
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

            if (err.response.data.user.username) {
              setUserNameError(err.response.data.user.username[0]);
            } else {
              setUserNameError('');
            }
          } else {
            setPasswordError('sorry Something went wrong,try agin later');
          }
        });
    }
  };
  return (
    <Card>
      <Card.Title
        title="Create a new Account"
        subtitle="Register to manage your money"
        left={() => <Avatar.Icon {...props} icon="pencil" />}
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
          label="Username"
          value={username}
          onChangeText={text => setUserName(text)}
        />
        <HelperText type="error" visible={userNameError !== ''}>
          {userNameError}
        </HelperText>
        <TextInput
          label="Password"
          value={password}
          type="password"
          onChangeText={text => setPassword(text)}
        />

        <TextInput
          label="Confirm Password"
          value={confirmedPassword}
          type="password"
          onChangeText={text => setConfirmPassword(text)}
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

        <Button dark={false} mode="contained" onPress={() => navigate('Login')}>
          Already have an account? Login
        </Button>
      </Card.Content>
    </Card>
  );
};

export default Register;
