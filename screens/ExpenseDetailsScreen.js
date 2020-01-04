import React from 'react';

import {Card, Button, Title, ProgressBar, Paragraph} from 'react-native-paper';
import {StatusBar} from 'react-native';

const ExpenseDetailsScreen = ({expenses, item, editItem, deleteItem}) => {
  return (
    <Card>
      <StatusBar backgroundColor={'red'} />
      {expenses.isDeleting ? <ProgressBar indeterminate={true} /> : null}
      <Card.Title title="Expense Details" subtitle={item.category} />
      <Card.Content>
        <Title>{item.name ? item.name : ''}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>
          {item.amount}:{item.currency}
        </Paragraph>
        <Paragraph>{item.spent_on}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => editItem(item.id)}>Edit</Button>
        <Button onPress={() => deleteItem(item.id)}>Delete</Button>
      </Card.Actions>
    </Card>
  );
};

export default ExpenseDetailsScreen;
