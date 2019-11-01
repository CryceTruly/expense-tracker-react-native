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

const ForgotLogin = props => {
  const {navigate} = props.navigation;
  ForgotLogin.navigationOptions = {
    title: 'Forgot Login ',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isAuthenticating, setisAuthenticating] = useState(false);

  const onSubmit = () => {
    if (email !== '' && !email.includes('@')) {
      setEmailError('Email is invalid');
    }

    if (emailError === '') {
      setisAuthenticating(true);
      setEmailError('');
      Axios.post(
        'https://expense-tracker-v1-staging.herokuapp.com/api/auth/password_change/',
        {
          email,
        },
      )
        .then(res => {
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
                  text: 'ForgotLogin',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'Great', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
          }
        })
        .catch(() => {
          setisAuthenticating(false);
          setEmailError('Something went wrong');
        });
    }
  };
  return (
    <Card>
      <Card.Content>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <HelperText type="error" visible={emailError !== ''}>
          {emailError}
        </HelperText>
        <ProgressBar
          indeterminate={true}
          visible={isAuthenticating}
          color={'blue'}
        />

        <Button dark={true} mode="contained" onPress={onSubmit}>
          Submit
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

        <HelperText
          dark={false}
          mode="contained"
          type="info"
          onPress={() => navigate('Login')}>
          Already have account? Login
        </HelperText>
      </Card.Content>
    </Card>
  );
};

export default ForgotLogin;
