import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getAllExpenses} from './../actions/expenses/index';
import {useDispatch} from 'react-redux';
import HomeSreen from '../screens/HomeSreen';

const HomeExpenses = props => {
  const {navigate} = props.navigation;
  const {expenses, errors} = props;
  const dispatch = useDispatch();
  const {auth} = props;

  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate('Login');
    } else {
      dispatch(getAllExpenses(auth.accessToken));
    }
  }, [auth.accessToken, auth.isLoggedIn, dispatch, navigate]);

  return <HomeSreen expenses={expenses} errors={errors} navigate={navigate} />;
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    expenses: state.expenses,
    errors: state.errors,
  };
};
export default connect(
  mapStateToProps,
  {},
)(HomeExpenses);
