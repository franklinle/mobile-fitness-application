import * as React from "react";
import { Button, View, Text, Image, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./App";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../T-T/assets/logo.png")} style={styles.pic} />
      <Text style={styles.title}> turtlGainz</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <TextInput placeholder="Confirm password" style={styles.input} />
      <Pressable style={styles.box}>
        <Text style={styles.signUp}> Sign up </Text>
      </Pressable>
      <Text style={styles.seperator}>
        {" "}
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
        title="Start Quiz?"
        //onPress={() => navigation.navigate("LandingPage")}
      />
      <Text> </Text>
      <Button
        title="Go to Landing Page"
        onPress={() => navigation.navigate("LandingPage")}
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
    paddingTop: 70,
    paddingBottom: 30,
  },
});