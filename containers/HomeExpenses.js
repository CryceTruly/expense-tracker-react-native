import React from 'react';
import {Text, List, Button} from 'react-native-paper';
import {View, ScrollView} from 'react-native';

const HomeExpenses = props => {
  const {navigate} = props.navigation;

  HomeExpenses.navigationOptions = {
    title: 'Expenses',
    left: null,
    headerLeft: null,
    headerRight: () => <Button title="Add New" color="#000" />,
  };

  return (
    <ScrollView>
      <List.Item
        title="First Item"
        onMagicTap={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />

      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"

        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="First Item"
        onPress={() => navigate('ExpenseDetail')}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
    </ScrollView>
  );
};

export default HomeExpenses;
