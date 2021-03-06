import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, SafeAreaView } from "react-native";
export default function ExercisesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.title}>Exercises</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "flex-start",
  },
  container2: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
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
    marginBottom: 10,
  },
  title2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
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
    backgroundColor: "#6f9a9e",
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
  passTextUnderlined: {
    color: "white",
    textDecorationLine: "underline",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  // toggle: {
  //   justifyContent: "space-around",
  //   paddingLeft: 100,
  // },
});
