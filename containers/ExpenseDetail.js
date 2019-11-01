import React from 'react';
import {Card, Text, Avatar} from 'react-native-paper';
const ExpenseDetail = props => {
  ExpenseDetail.navigationOptions = {
    title: 'Expense ',
  };
  return (
    <Card>
      <Card.Content>
        <Text>Hey hey this is details</Text>
      </Card.Content>
    </Card>
  );
};

export default ExpenseDetail;
