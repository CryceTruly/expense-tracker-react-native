import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, ActivityIndicator, StatusBar, StyleSheet } from "react-native";

const SplashScreen = props => {
  const { navigate } = props.navigation;
  const { auth } = props;
  useEffect(() => {
    setTimeout(() => {
      if (!auth.isLoggedIn) {
        navigate("Auth");
      } else {
        navigate("App");
      }
    }, 500);
  }, [auth, auth.isLoggedIn, navigate]);

  return (
    <View style={styles.loader}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    margin: 189
  }
});
export default connect(
  mapStateToProps,
  {}
)(SplashScreen);
