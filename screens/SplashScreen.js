import React from 'react';

import {View, ActivityIndicator, StatusBar, StyleSheet} from 'react-native';
const SplashScreen = () => (
  <View style={styles.loader}>
    <ActivityIndicator />
    <StatusBar barStyle="default" />
  </View>
);
const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    margin: 189,
  },
});

export default SplashScreen;
