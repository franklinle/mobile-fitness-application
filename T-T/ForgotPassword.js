import * as React from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../T-T/assets/lockLogo.png")}
        style={styles.pic}
      />
      <View style={styles.stateBox}>
        <Text style={styles.statement}>
          Enter your email to receive a link to
        </Text>
        <Text style={styles.statement}>recover and reset your password.</Text>
      </View>
      <TextInput placeholder="Email" style={styles.input} />
      <Pressable style={styles.box}>
        <Text style={styles.signUp}> Send Link</Text>
      </Pressable>
      <Text style={styles.seperator}>
        -------------------------------------------- OR
        ---------------------------------------------
      </Text>
      <Pressable style={styles.createBox}>
        <Text style={styles.create}> Create an account </Text>
      </Pressable>
      <Pressable style={styles.box}>
        <Text style={styles.signUp}> Log in with Google </Text>
      </Pressable>
      <Pressable>
        <Text style={styles.signUp2}> Sign up </Text>
      </Pressable>
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
  statement: {
    color: "#37686D",
    fontSize: 20,
  },
  stateBox: {
    paddingBottom: 30,
    width: 400,
    alignItems: "center",
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: 300,
    marginBottom: 10,
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
  seperator: {
    color: "#37686D",
    paddingTop: 145,
    paddingBottom: 30,
  },
  create: {
    fontSize: 30,
    color: "white",
  },
  createBox: {
    paddingBottom: 30,
  },
});
