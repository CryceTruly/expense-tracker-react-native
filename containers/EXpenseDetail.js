import React, {useState} from 'react';
import {
  Card,Text,Avatar
} from 'react-native-paper';
const ExpenseDetail = props => {
  const {navigate} = props.navigation;
  ExpenseDetail.navigationOptions = {
    title: 'Expense ',
  };
  return (
    <Card>
      <Card.Title
        title="Expense"
        subtitle="Expense Detail"
        left={props => <Avatar.Icon {...props} icon="lock" />}
      />
      <Card.Content>
      <Text>Hey hey this is details</Text>
      </Card.Content>
    </Card>
  );
};

export default ExpenseDetail;
