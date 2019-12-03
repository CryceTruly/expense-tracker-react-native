import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {List, FAB, ProgressBar, Colors} from 'react-native-paper';

const HomeSreen = ({expenses, navigate, errors}) => {
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
export default HomeSreen;
