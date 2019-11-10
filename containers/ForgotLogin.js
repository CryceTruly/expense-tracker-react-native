import React, {useState} from 'react';
import {
  Button,
  Card,
  HelperText,
  TextInput,
  ProgressBar,
  Divider,
} from 'react-native-paper';
import {requestPasswordChange} from './../actions/auth';
import {Alert} from 'react-native';
import {connect} from 'react-redux';

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
    Alert.alert('Information',
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
          visible={auth.isProcessingEmail}
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
