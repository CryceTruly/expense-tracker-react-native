import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addNewExpense} from './../actions/expenses';
import NewExpenseScreen from './../screens/NewExpenseScreen';
const NewExpense = props => {
  NewExpense.navigationOptions = {
    headerTitle: 'NewExpense for a new account',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');
  const [category, setCategory] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [currency, setCurrency] = useState('');
  const [currencyError, setCurrencyError] = useState('');
  const {isCreating, newExpenseAdded, expenses} = props.expenses;
  const [pickerVisible, setPickerVisible] = useState(false);
  const {auth, errors} = props;
  if (newExpenseAdded) {
    props.navigation.navigate('HomeExpenses', {
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
      props.addNewExpense(
        {
          description,
          name,
          amount,
          spent_on: date,
          category,
          currency,
        },
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

  return (
    <NewExpenseScreen
      errors={errors}
      name={name}
      amount={amount}
      amountError={amountError}
      setCategory={setCategory}
      setCurrency={setCurrency}
      category={category}
      categoryError={categoryError}
      onSubmit={onSubmit}
      setName={setName}
      nameError={nameError}
      description={description}
      descriptionError={descriptionError}
      setDescription={setDescription}
      setAmount={setAmount}
      setDate={setDate}
      pickerVisible={pickerVisible}
      setPickerVisible={setPickerVisible}
      isCreating={isCreating}
      currency={currency}
      currencyError={currencyError}
      date={date}
      dateError={dateError}
    />
  );
};

const mapStateToProps = state => {
  return {
    errors: state.errors,
    expenses: state.expenses,
    auth: state.auth,
  };
};

export default connect(
  mapStateToProps,
  {addNewExpense},
)(NewExpense);
