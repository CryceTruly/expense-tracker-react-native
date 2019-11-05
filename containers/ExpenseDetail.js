import React, {useEffect} from 'react';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  clearExpenseAdded,
  deleteExpense,
  clearExpenseDeleted,
} from './../actions/expenses';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const ExpenseDetail = props => {
  ExpenseDetail.navigationOptions = {
    title: 'Expense',
  };

  const dispatch = useDispatch();
  const {item, added} = props.navigation.state.params;
  const {auth, expenses} = props;
  useEffect(() => {
    if (added) {
      dispatch(clearExpenseAdded());
    }
  }, [added, dispatch]);

  const deleteItem = id => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to remove this expense?',
      [
        {
          text: 'OK',
          onPress: () => {
            props.deleteExpense(id, auth.accessToken);
          },
          style: 'cancel',
        },
        {text: 'Cancel'},
      ],
      {
        cancelable: false,
      },
    );
  };
  if (expenses.expenseDeleted) {
    props.clearExpenseDeleted();
    props.navigation.navigate('Home');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card>
        <Card.Title title="Expense Details" subtitle={item.category} />
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.description}</Paragraph>
          <Paragraph>
            {item.amount}:{item.currency}
          </Paragraph>
          <Paragraph>{item.spent_on}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Edit</Button>
          <Button onPress={() => deleteItem(item.id)}>Delete</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    expenses: state.expenses,
  };
};
export default connect(
  mapStateToProps,
  {deleteExpense, clearExpenseDeleted},
)(ExpenseDetail);
