import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Alert } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Sign up"
        color="#f194ff"
        onPress={() => Alert.alert("I love burritos")}
      />
      <Text> </Text>
      <Button
        title="Sign in"
        color="#f194ff"
        onPress={() => Alert.alert("I love tacos")}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
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
