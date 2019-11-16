import React, {useState} from 'react';
import {Picker} from 'react-native';
import {
  Button,
  Card,
  HelperText,
  TextInput,
  ProgressBar,
  Divider,
} from 'react-native-paper';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {addNewExpense} from './../actions/expenses';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {categories, currencies} from './../utils/options';
import {Text} from 'react-native-paper';

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card>
        <Card.Title title="Add an Expense" />
        <Card.Content>
          <TextInput
            label="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <HelperText
            type="error"
            visible={props.errors.errors || nameError !== ''}>
            {props.errors.errors && props.errors.errors.name
              ? props.errors.errors.name[0]
              : nameError}
          </HelperText>
          <TextInput
            label="Description"
            value={description}
            onChangeText={text => setDescription(text)}
          />
          <HelperText
            type="error"
            visible={props.errors.errors || descriptionError !== ''}>
            {props.errors.errors && props.errors.errors.description
              ? props.errors.errors.description[0]
              : descriptionError}
          </HelperText>
          <TextInput
            label="Amount"
            value={amount}
            type="amount"
            onChangeText={text => setAmount(text)}
          />
          <HelperText
            type="error"
            visible={props.errors.errors || amountError !== ''}>
            {props.errors.errors && props.errors.errors.amount
              ? props.errors.errors.amount[0]
              : amountError}
          </HelperText>
          <DateTimePicker
            isVisible={pickerVisible}
            onConfirm={text => {
              setPickerVisible(false);
              setDate(
                `${text.getUTCFullYear()}-${text.getUTCMonth() +
                  1}-${text.getUTCDate()}`,
              );
            }}
            onCancel={() => {
              setPickerVisible(false);
            }}
          />

          <TextInput
            label="Spending date"
            onChangeText={() => setPickerVisible(true)}
            onFocus={() => setPickerVisible(true)}
            onBlur={() => {
              setPickerVisible(false);
            }}
            value={date}
          />
          <HelperText
            type="error"
            visible={props.errors.errors || dateError !== ''}>
            {props.errors.errors && props.errors.errors.spent_on
              ? props.errors.errors.spent_on
              : dateError}
          </HelperText>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
            {categories.map((item, index) => (
              <Picker.Item label={item.label} key={index} value={item.value} />
            ))}
          </Picker>
          <HelperText
            type="error"
            visible={props.errors.errors || categoryError !== ''}>
            {props.errors.errors && props.errors.errors.category
              ? props.errors.errors.category
              : categoryError}
          </HelperText>
          <Picker
            selectedValue={currency}
            onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}>
            {currencies.map((item, index) => (
              <Picker.Item label={item.label} key={index} value={item.value} />
            ))}
          </Picker>

          <HelperText
            type="error"
            visible={props.errors.errors || currencyError !== ''}>
            {props.errors.errors && props.errors.errors.currency
              ? props.errors.errors.currency
              : currencyError}
          </HelperText>
          {errors.errors && errors.errors.message ? (
            <HelperText type="error">{errors.errors.message}</HelperText>
          ) : null}

          <ProgressBar
            indeterminate={true}
            visible={isCreating}
            color={'blue'}
          />
          <Divider />
          <Divider />
          <Divider />
          <Button dark={true} mode="contained" onPress={onSubmit}>
            Submit
          </Button>
          <Divider />
        </Card.Content>
      </Card>
    </ScrollView>
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
