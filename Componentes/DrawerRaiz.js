import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import AllScreen from "./AllScreen";
import DoneScreen from "./DoneScreen";

export default (DrawerRaiz = createDrawerNavigator({
  All: {
    screen: AllScreen
  },
  Done: {
    screen: DoneScreen
  }
}));