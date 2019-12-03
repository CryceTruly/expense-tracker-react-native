import React from 'react';

import {
  Button,
  Card,
  HelperText,
  TextInput,
  ProgressBar,
  Divider,
} from 'react-native-paper';


import {ScrollView} from 'react-native-gesture-handler';

const RegisterScreen = ({
  email,
  isAuthenticating,
  emailError,
  errors,
  setEmail,
  setPassword,
  setConfirmPassword,
  onSubmit,
  userNameError,
  passwordError,
  confirmedPassword,
  password,
  setUserName,
  username,
  navigate,
}) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Card>
      <Card.Title title="Create a free account today!" />
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
          label="Username"
          value={username}
          onChangeText={text => setUserName(text)}
        />
        <HelperText
          type="error"
          visible={errors.errors || userNameError !== ''}>
          {errors.errors && errors.errors.username
            ? errors.errors.username[0]
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
          visible={errors.errors || passwordError !== ''}>
          {errors.errors && errors.errors.authError
            ? errors.errors.authError
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

        <Button dark={false} mode="contained" onPress={() => navigate('Login')}>
          Already have an account? Login
        </Button>
      </Card.Content>
    </Card>
  </ScrollView>
);

export default RegisterScreen;
