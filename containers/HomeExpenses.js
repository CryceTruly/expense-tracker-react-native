import React, {useEffect} from 'react';
import {List, Button, FAB, ProgressBar, Colors} from 'react-native-paper';
import {StyleSheet, Text,Image} from 'react-native';
import {connect} from 'react-redux';
import {getAllExpenses} from './../actions/expenses/index';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {StackActions} from 'react-navigation';


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
  }, [auth.accessToken, auth.isLoggedIn]);

  HomeExpenses.navigationOptions = {
    headerTitle: 'Expenses',
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./../2x/baseline_menu_black_24dp.png')}
        style={[styles.icon, {tintColor: "black"}]}
      />
    ),
    headerRight: () => (
      <Button
        title="Add New"
        color="#000"
        onPress={() => navigate('NewExpense')}
      />
    ),
  };

  return (
    <>
      {expenses.isLoading ? (
        <ProgressBar indeterminate={true} color={Colors.red800} />
      ) : (
        <FlatList
          data={expenses.expenses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index, separators}) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigate('ExpenseDetail', {item, added: false})}
              onShowUnderlay={separators.highlight}
              keyExtractor={() => index.toString()}
              onHideUnderlay={separators.unhighlight}>
              <List.Item
                key={index}
                title={item.name}
                description={item.description}
                right={() => <Text>{item.spent_on}</Text>}
                left={() => <List.Icon icon="folder" />}
              />
            </TouchableOpacity>
          )}
        />
      )}

      {errors.errors && errors.errors.message && !expenses.expenses ? (
        <Text style={styles.errorErea}>{errors.errors.message}</Text>
      ) : null}
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigate('NewExpense')}
      />
    </>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    expenses: state.expenses,
    errors: state.errors,
  };
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

  errorErea: {
    position: 'absolute',
    top: '45%',
    left: '15%',
  },
});
export default connect(
  mapStateToProps,
  {},
)(HomeExpenses);
