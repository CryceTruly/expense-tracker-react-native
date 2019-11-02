import React from 'react';
import {List, Button} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';

const HomeExpenses = props => {
  const {navigate} = props.navigation;
  HomeExpenses.navigationOptions = {
    title: 'Expenses',
    left: null,
    headerLeft: null,
    headerRight: () => (
      <Button
        title="Add New"
        color="#000"
        onPress={() => navigate('NewExpense')}
      />
    ),
  };

  const {auth} = props;

  if (!auth.isLoggedIn) {
    navigate('Login');
  }

  return (
    <ScrollView>
      <List.Item
        title="First Item"
        onMagicTap={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />

      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={() => <List.Icon {...props} icon="folder" />}
      />
    </ScrollView>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};
export default connect(
  mapStateToProps,
  {},
)(HomeExpenses);
