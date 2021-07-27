import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, SafeAreaView } from "react-native";
export default function Reminders() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reminders</Text>
      <SafeAreaView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </SafeAreaView>
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
