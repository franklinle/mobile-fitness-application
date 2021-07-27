import * as React from "react";
import { Button, View, Text, Image, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "./App";
import AppHome from "./AppHome";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../T-T/assets/logo.png")} style={styles.pic} />
      <Text style={styles.title}> turtlGainz</Text>
      <TextInput placeholder="Email or username" style={styles.input} />
      <TextInput placeholder="Pasword" style={styles.input} />
      <Pressable style={styles.box}>
        <Text style={styles.signUp}> Sign up </Text>
      </Pressable>
      <View style={styles.pass}>
        <Text style={styles.passText}> Forgot your password? </Text>
        <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.passText}>Click here.</Text>
        </Pressable>
      </View>
      <Text style={styles.seperator}>
        -------------------------------------------- OR
        ---------------------------------------------
      </Text>
      <Pressable style={styles.box}>
        <Text style={styles.signUp}> Log in with Google </Text>
      </Pressable>
      <Pressable>
        <Text style={styles.signUp2}> Sign up </Text>
      </Pressable>
      {/* <Button
        title="Go to Landing Page"
        onPress={() => navigation.navigate("LandingPage")}
      />
      <Text> </Text>
      <Button
        title="AppHome(with bottom nav)"
        onPress={() => navigation.navigate("AppHome")}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "turquoise",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pic: {
    height: 250,
    width: 275,
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#37686D",
    marginBottom: 30,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: 300,
    marginBottom: 20,
    padding: 10,
    fontSize: 20,
    backgroundColor: "#D6E4E2",
    borderWidth: 0,
  },
  box: {
    backgroundColor: "#37686D",
    borderRadius: 10,
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  signUp: {
    fontSize: 20,
    color: "white",
  },
  signUp2: {
    fontSize: 17,
    color: "white",
  },
  pass: {
    alignItems: "flex-start",
    width: 300,
    flexDirection: "row",
  },
  passText: {
    color: "white",
  },
  seperator: {
    color: "#37686D",
    paddingTop: 125,
    paddingBottom: 30,
  },
});
