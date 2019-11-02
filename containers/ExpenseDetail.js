import React from 'react';
import {Card, Text, Avatar, Button, Title, Paragraph} from 'react-native-paper';
const ExpenseDetail = props => {
  ExpenseDetail.navigationOptions = {
    title: 'Expense ',
  };
  const {item} = props.navigation.state.params;
  return (
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
  );
};

export default ExpenseDetail;
