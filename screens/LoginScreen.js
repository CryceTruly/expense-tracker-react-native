import React from 'react';
import {
  Button,
  Card,
  HelperText,
  TextInput,
  ProgressBar,
  Divider,
} from '../ios/node_modules/react-native-paper';

import {ScrollView} from '../ios/node_modules/react-native-gesture-handler';

const LoginScreen = ({
  navigate,
  errors,
  emailError,
  setEmail,
  email,
  password,
  setPassword,
  onSubmit,
  passwordError,
  isAuthenticating,
}) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Card>
      <Card.Title title="Login to your Account!!" />
      <Card.Content>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <HelperText type="error" visible={errors.errors || emailError !== ''}>
          {errors.errors && errors.errors.email
            ? errors.errors.email[0]
            : emailError}
        </HelperText>
        <TextInput
          label="Password"
          secureTextEntry={true}
          value={password}
          type="password"
          onChangeText={text => setPassword(text)}
        />
        {(errors.errors && errors.errors.password) || passwordError !== '' ? (
          <HelperText
            type="error"
            visible={errors.errors || passwordError !== ''}>
            {errors.errors && errors.errors.password
              ? errors.errors.password
              : passwordError}
          </HelperText>
        ) : null}

        {errors.errors && errors.errors.detail ? (
          <HelperText
            type="error"
            visible={errors.errors && errors.errors.detail}>
            {errors.errors && errors.errors.detail
              ? errors.errors.detail
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

export default LoginScreen;
