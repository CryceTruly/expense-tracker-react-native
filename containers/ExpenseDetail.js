import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  clearExpenseAdded,
  deleteExpense,
  clearExpenseDeleted,
  editExpense,
} from './../actions/expenses';
import {ScrollView, Alert} from 'react-native';
import {connect} from 'react-redux';
import ExpenseDetailsScreen from '../screens/ExpenseDetailsScreen';
import EditExpenseScreen from '../screens/EditExpenseScreen';

const ExpenseDetail = props => {
  ExpenseDetail.navigationOptions = {
    title: 'Expense',
  };

  const {item, added} = props.navigation.state.params;
  const [name, setName] = useState(item.name ? item.name : '');
  const [nameError, setNameError] = useState('');
  const [description, setDescription] = useState(item.description);
  const [descriptionError, setDescriptionError] = useState('');
  const [amount, setAmount] = useState(item.amount);
  const [amountError, setAmountError] = useState('');
  const [category, setCategory] = useState(item.category);
  const [categoryError, setCategoryError] = useState('');
  const [date, setDate] = useState(item.spent_on);
  const [dateError, setDateError] = useState('');
  const [currency, setCurrency] = useState(item.currency);
  const [currencyError, setCurrencyError] = useState('');
  const [pickerVisible, setPickerVisible] = useState(false);

  const {auth, expenses, errors} = props;
  const {isExpenseUpdating, newExpenseAdded} = props.expenses;
  if (newExpenseAdded) {
    props.navigation.navigate('ExpenseDetail', {
      item: expenses[expenses.length - 1],
      added: true,
    });
  }

  const onSubmit = () => {
    if (name === '') {
      setNameError('name is invalid');
    }

    if (amount === '') {
      setAmountError('amount is required');
    }
    if (currency === '') {
      setCurrencyError('currency is required');
    }
    if (date === '') {
      setDateError('date is required');
    }
    if (category === '') {
      setCategoryError('category is required');
    }
    if (
      categoryError === '' &&
      nameError === '' &&
      amountError === '' &&
      descriptionError === '' &&
      dateError === '' &&
      currencyError === ''
    ) {
      props.editExpense(
        {
          description,
          name,
          amount,
          spent_on: date,
          category,
          currency,
        },
        item.id,
        auth.accessToken,
      );
      setCategoryError('');
      setNameError('');
      setDescriptionError('');
      setAmountError('');
      setDateError('');
      setCurrencyError('');
    }
  };

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (added) {
      dispatch(clearExpenseAdded());
    }
  }, [added, dispatch]);

  const editItem = id => {
    setVisible(true);
  };

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
      <ExpenseDetailsScreen
        editItem={editItem}
        deleteItem={deleteItem}
        expenses={expenses}
        item={item}
      />
      <EditExpenseScreen
        visible={visible}
        setVisible={setVisible}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        errors={errors}
        descriptionError={descriptionError}
        amount={amount}
        amountError={amountError}
        setAmount={setAmount}
        setDate={setDate}
        date={date}
        dateError={dateError}
        pickerVisible={pickerVisible}
        nameError={nameError}
        setPickerVisible={setPickerVisible}
        setCategory={setCategory}
        categoryError={categoryError}
        category={category}
        currency={currency}
        setCurrency={setCurrency}
        currencyError={currencyError}
        isExpenseUpdating={isExpenseUpdating}
        onSubmit={onSubmit}
      />
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    expenses: state.expenses,
    errors: state.errors,
  };
};
export default connect(
  mapStateToProps,
  {editExpense, deleteExpense, clearExpenseDeleted},
)(ExpenseDetail);
