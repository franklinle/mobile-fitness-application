import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, Button, TextInput } from "react-native";
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
  let height;
  let weight;
  let weight2;
  let age;
  

  function weightFunc(string) {
    weight = string;
    setDB(string,2)
  }

  function weight2Func(string) {
    weight = string;
    setDB(string,25)
  }

  function heightFunc(string){
    height = string;
    setDB(string,1)
  }

  function ageFunc(string){
    age = string;
    setDB(string,3)
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(223, 238, 235, 0.8)", "transparent"]}
        style={styles.background}
      />
      <Text style={styles.question}>
        Welcome Please input your measurements!
      </Text>
      <View style={styles.dropdown}>
        <Text style={styles.dropTitle}>Height</Text>
        <TextInput
          style={{
            height: 40,
            width: "25%",
            marginTop: "3%",
            borderWidth: 1,
            bordercolor: "Black",
            keyboardType: "numeric",
            textAlign: "center",
          }}
          placeholder="Height"
          onChangeText={(goal) => heightFunc(goal)}
          defaultValue={height}
        />
        <Text style={styles.dropTitle}>Weight</Text>
        <View style={{flexDirection:"row",}}>
          <TextInput
            style={{
              height: 40,
              width: "25%",
              marginTop: "3%",
              borderWidth: 1,
              bordercolor: "Black",
              keyboardType: "numeric",
              flex:.2,
              textAlign: "center",
              marginRight: "5%"
            }}
            placeholder="ft"
            onChangeText={(goal) => weightFunc(goal)}
            defaultValue={weight}
          />
          <TextInput
            style={{
              height: 40,
              width: "25%",
              marginTop: "3%",
              borderWidth: 1,
              bordercolor: "Black",
              textAlign: "center",
              keyboardType: "numeric",
              flex:.2
            }}
            placeholder="in"
            onChangeText={(goal) => weight2Func(goal)}
            defaultValue={weight2}
          />
        </View>
        <Text style={styles.dropTitle}>Age</Text>
        <TextInput
          style={{
            height: 40,
            width: "25%",
            marginTop: "3%",
            borderWidth: 1,
            bordercolor: "Black",
            keyboardType: "numeric",
            textAlign: "center",
          }}
          placeholder="Age"
          onChangeText={(goal) => ageFunc(goal)}
          defaultValue={age}
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
