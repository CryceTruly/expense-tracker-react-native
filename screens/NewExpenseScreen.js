import React from 'react';

import {Picker, ScrollView} from 'react-native';
import {
  Button,
  Card,
  HelperText,
  TextInput,
  ProgressBar,
  Divider,
} from 'react-native-paper';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {categories, currencies} from './../utils/options';

const NewExpenseScreen = ({
  errors,
  name,
  amount,
  amountError,
  setCategory,
  setCurrency,
  category,
  categoryError,
  onSubmit,
  setName,
  nameError,
  description,
  descriptionError,
  setDescription,
  setAmount,
  setDate,
  pickerVisible,
  setPickerVisible,
  isCreating,
  currency,
  currencyError,
  date,
  dateError,
}) => {
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
          <HelperText type="error" visible={errors.errors || nameError !== ''}>
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
            value={amount}
            type="amount"
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
          <HelperText type="error" visible={errors.errors || dateError !== ''}>
            {errors.errors && errors.errors.spent_on
              ? errors.errors.spent_on
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
            visible={errors.errors || categoryError !== ''}>
            {errors.errors && errors.errors.category
              ? errors.errors.category
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

export default NewExpenseScreen;
