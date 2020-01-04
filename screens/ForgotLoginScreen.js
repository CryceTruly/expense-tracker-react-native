import React from 'react';
import {
  Button,
  Card,
  HelperText,
  TextInput,
  ProgressBar,
  Divider,
} from 'react-native-paper';

const ForgotLoginScreen = ({
  isProcessingEmail,
  email,
  setEmail,
  errors,
  onRequestEmail,
  navigate,
}) => {
  return (
    <Card>
      <Card.Content>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {errors && errors.message ? (
          <HelperText type="error">{errors.message}</HelperText>
        ) : null}

        {errors && errors.errors && errors.errors.errors ? (
          <HelperText type="error">{errors.errors.errors.email[0]}</HelperText>
        ) : null}

        <ProgressBar
          indeterminate={true}
          visible={isProcessingEmail}
          color={'blue'}
        />

        <Button dark={true} mode="contained" onPress={onRequestEmail}>
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

export default ForgotLoginScreen;
