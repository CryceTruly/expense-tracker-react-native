import React, {useEffect} from 'react';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {clearExpenseAdded} from './../actions/expenses';
import {ScrollView} from 'react-native-gesture-handler';
const ExpenseDetail = props => {
  ExpenseDetail.navigationOptions = {
    title: 'Expense ',
  };

  const dispatch = useDispatch();
  const {item, added} = props.navigation.state.params;
  useEffect(() => {
    if (added) {
      dispatch(clearExpenseAdded());
    }
  }, [added, dispatch]);

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
          <Button>Delete</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default ExpenseDetail;
