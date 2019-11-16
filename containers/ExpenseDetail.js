import React, {useEffect, useState} from 'react';
import {
  Card,
  Button,
  Title,
  ProgressBar,
  Paragraph,
  HelperText,
  TextInput,
  Divider,
} from 'react-native-paper';
import {Modal, Alert, Picker} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  clearExpenseAdded,
  deleteExpense,
  clearExpenseDeleted,
  editExpense,
} from './../actions/expenses';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {categories, currencies} from '../utils/options';

const ExpenseDetail = props => {
  ExpenseDetail.navigationOptions = {
    title: 'Expense',
  };

  const {item, added} = props.navigation.state.params;
  const [name, setName] = useState(item.name);
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
      <Card>
        {expenses.isDeleting ? <ProgressBar indeterminate={true} /> : null}
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
          <Button onPress={() => editItem(item.id)}>Edit</Button>
          <Button onPress={() => deleteItem(item.id)}>Delete</Button>
        </Card.Actions>
      </Card>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <Card>
          <Card.Title title="Edit Expense" />
          <Card.Content>
            <TextInput
              label="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <HelperText
              type="error"
              visible={errors.errors || nameError !== ''}>
              {errors.errors && errors.errors.name
                ? errors.errors.name[0]
                : nameError}
            </HelperText>
            <TextInput
              label="Description"
              value={description}
              onChangeText={text => setDescription(text)}
            />
            <HelperText
              type="error"
              visible={errors.errors || descriptionError !== ''}>
              {errors.errors && errors.errors.description
                ? errors.errors.description[0]
                : descriptionError}
            </HelperText>
            <TextInput
              label="Amount"
              type="number"
              value={amount.toString()}
              onChangeText={text => setAmount(text)}
            />
            <HelperText
              type="error"
              visible={errors.errors || amountError !== ''}>
              {errors.errors && errors.errors.amount
                ? errors.errors.amount[0]
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
              visible={errors.errors || dateError !== ''}>
              {errors.errors && errors.errors.spent_on
                ? errors.errors.spent_on
                : dateError}
            </HelperText>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
              {categories.map((item, index) => (
                <Picker.Item
                  label={item.label}
                  key={index}
                  value={item.value}
                />
              ))}
            </Picker>
            <HelperText
              type="error"
              visible={errors.errors || categoryError !== ''}>
              {errors.errors && errors.errors.category
                ? errors.errors.category
                : categoryError}
            </HelperText>
            <Picker
              selectedValue={currency}
              onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}>
              {currencies.map((item, index) => (
                <Picker.Item
                  label={item.label}
                  key={index}
                  value={item.value}
                />
              ))}
            </Picker>
            <HelperText
              type="error"
              visible={errors.errors || currencyError !== ''}>
              {errors.errors && errors.errors.currency
                ? errors.errors.currency
                : currencyError}
            </HelperText>
            {errors.errors && errors.errors.message ? (
              <HelperText type="error">{errors.errors.message}</HelperText>
            ) : null}

            <ProgressBar
              indeterminate={true}
              visible={isExpenseUpdating}
              color={'blue'}
            />
            <Divider />
            <Divider />
            <Divider />
            <Button dark={true} mode="contained" onPress={onSubmit}>
              Save
            </Button>
            <Divider />
          </Card.Content>
        </Card>
      </Modal>
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
