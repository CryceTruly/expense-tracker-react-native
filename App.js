import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Header from './components/Header';
import Register from './containers/Register';

const App = () => (
  <View style={styles.main}>
    <Header />
    <Register/>
  </View>
);
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'red',
  },
});
export default App;
