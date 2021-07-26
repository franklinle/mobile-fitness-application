import * as React from "react";
import { Button, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./App";
import AppHome from "./AppHome";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Landing Page"
        onPress={() => navigation.navigate("LandingPage")}
      />
      <Text> </Text>
      <Button
        title="AppHome(with bottom nav)"
        onPress={() => navigation.navigate("AppHome")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "turquoise",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
