import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable } from "react-native";
import { setProfileGoal } from "../bB/profile";

//Start of Quiz
//You the firebase organization of fields is whack prob go back to change lol
//Implement Pressable
export function ProfileSettings({ navigation }) {
  const [goal, setGoal] = useState("");

  function goalFunc(goal) {
    setProfileGoal(goal);
    // setGoal(goal);
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(223, 238, 235, 0.8)", "transparent"]}
        style={styles.background}
      />
      <View style={styles.optionsContainer}>
        <Text style={{ marginTop: "5%", fontSize: 20 }}>
          What is your current Goal?
        </Text>
        <TextInput
          style={{
            height: 40,
            width: "95%",
            marginTop: "3%",
            borderWidth: 1,
            bordercolor: "Black",
          }}
          placeholder="Current Goal"
          onChangeText={(goal) => goalFunc(goal)}
          defaultValue={goal}
        />
        <Text style={{ marginTop: "5%", fontSize: 20 }}>
          Literally Anything else?
        </Text>
        <TextInput
          style={{
            height: 40,
            width: "95%",
            marginTop: "3%",
            borderWidth: 1,
            bordercolor: "Black",
          }}
          placeholder="yes"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(100, 181, 190)",
    alignItems: "center",
  },
  optionsContainer: {
    width: "90%",
    height: "95%",
    backgroundColor: "white",
    top: "2.5%",
    borderWidth: 2,
    borderColor: "black",
    textAlign: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});
