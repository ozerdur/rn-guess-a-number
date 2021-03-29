import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
import HeaderText from "./HeaderText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <HeaderText style={styles.headerTitle}>{props.title}</HeaderText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "android" ? Colors.primary : "white",
    borderBottomWidth: Platform.OS === "android" ? 1 : 0,
  },
  headerIOS: {
    borderBottomColor: "white",
    borderBottomWidth: 0,
  },
  headerAndroid: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
