import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from './../actions/auth';
import LogoutScreen from '../screens/LogoutScreen';

const Logout = props => {
  const {logoutUser} = props.auth;

  return <LogoutScreen logoutUser={logoutUser} />;
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};
export default connect(
  mapStateToProps,
  {logoutUser},
)(Logout);
