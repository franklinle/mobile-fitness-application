import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { LinearGradient } from "expo-linear-gradient";
import { setDB } from "../bB/quiz";
// import { NavigateTo } from '../NavigateApp';

/*
WARNING WARNING WARNING:
There may be a huge issue for IOS users as the option I used is a temporary workaround for android. This is because for some reason the default
styling for displaying the selected option is, I believe undefined, therefore on android you cannot see the selected option when you select
it on the dropdown menu, hence the workaround. IOS may not have this issue and therefore may not be a problem. idk
*/
export function Section1({ navigation }) {
  const [isEnabled, setEnabled] = useState(false);
  const toggleSystem = () => setEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(223, 238, 235, 0.8)", "transparent"]}
        style={styles.background}
      />
      <Text style={styles.question}>
        Welcome Please input your measurements!
      </Text>
      <View style={styles.toggle}>
        <Text style={styles.dropTitle}>Metric System</Text>
        <Switch
          onValueChange={toggleSystem}
          value={isEnabled}
          style={{
            marginRight: "13%",
            transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
          }}
        />
      </View>
      <View style={styles.dropdown}>
        <Text style={styles.dropTitle}>Height</Text>
        <RNPickerSelect
          style={{ inputAndroid: { color: "black" } }}
          //useNativeAndroidPickerStyle={false}
          onValueChange={(value) => setDB(value, 1)}
          items={height}
        />
        <Text style={styles.dropTitle}>Weight</Text>
        <RNPickerSelect
          style={{ inputAndroid: { color: "black" } }}
          //useNativeAndroidPickerStyle={false}
          onValueChange={(value) => setDB(value, 2)}
          items={weight}
        />
        <Text style={styles.dropTitle}>Age</Text>
        <RNPickerSelect
          style={{ inputAndroid: { color: "black" } }}
          //useNativeAndroidPickerStyle={false}
          onValueChange={(value) => setDB(value, 3)}
          items={age}
        />
      </View>
      <View style={styles.submitButton}>
        <Button
          color={"rgb(81, 130, 135)"}
          title="Next"
          onPress={() => navigation.navigate("Question2")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const height = [
  {
    label: "6'2",
    value: "6'2",
  },
  {
    label: "5'2",
    value: "5'2",
  },
  {
    label: "3'6",
    value: "3'6",
  },
];

const weight = [
  {
    label: "135lbs",
    value: 135,
  },
  {
    label: "65lbs",
    value: 65,
  },
];

const age = [
  {
    label: "15yrs",
    value: 15,
  },
];

//Change colors to match whether its metric or not + labels
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(100, 181, 190)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  dropdownOption: {
    flex: 0.1,
    color: "hsla(186, 33%, 32%, 1)",
    width: "10%",
    zIndex: 2,
  },
  question: {
    flex: 0.2,
    color: "hsla(186, 33%, 32%, 1)",
    fontSize: 30,
    textAlign: "center",
    marginHorizontal: "10%",
    zIndex: 2,
    fontWeight: "700",
    //fontFamily: "ChakraPetch_300Light",
  },
  dropdown: {
    flex: 0.3,
    width: "70%",
    marginHorizontal: "20%",
    justifyContent: "space-between",
    zIndex: 2,
    marginBottom: "10%",
  },
  toggle: {
    flex: 0.1,
    zIndex: 2,
  },
  submitButton: {
    flex: 0.05,
    zIndex: 2,
    marginTop: "10%",
    width: "40%",
  },
  dropTitle: {
    color: "hsla(186, 33%, 32%, 1)",
    fontSize: 20,
    zIndex: 2,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
    zIndex: 1,
  },
});
