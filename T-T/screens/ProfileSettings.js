import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Image } from "react-native";
import { setNewHeight, setProfileGoal, setNewWeight } from "../bB/profile";
import Firebase from "../config/Firebase";

//Start of Quiz
//You the firebase organization of fields is whack prob go back to change lol
//Implement Pressable
export function ProfileSettings({ navigation }) {
  function goalFunc(goal) {
    setProfileGoal(goal);
  }

  function heightSet(x) {
    setNewHeight(x);
  }

  function weightSet(x) {
    setNewWeight(x);
  }

  const handleSignout = () => {
    Firebase.auth().signOut();
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(223, 238, 235, 0.8)", "transparent"]}
        style={styles.background}
      />
      <View style={styles.optionsContainer}>
        <View style={styles.buttons}>
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/backButton.png")}
                style={styles.pic1}
              />
            </Pressable>
          </View>

          <View style={styles.logOut}>
            <Pressable onPress={() => handleSignout()}>
              <Image
                source={require("../assets/logOut.jpg")}
                style={styles.pic2}
              />
            </Pressable>
          </View>
        </View>
        <Text style={{ marginTop: "5%", fontSize: 20, color: "#37686D" }}>
          What is your current Goal?
        </Text>
        <TextInput
          style={{
            height: 40,
            width: "95%",
            marginTop: "3%",
            borderWidth: 0,
            borderRadius: 10,
            backgroundColor: "#D6E4E2",
            padding: 10,
          }}
          placeholder="Current Goal"
          onChangeText={(goal) => goalFunc(goal)}
        />

        <Text style={{ marginTop: "5%", fontSize: 20, color: "#37686D" }}>
          What is your new Height?
        </Text>
        <TextInput
          style={{
            height: 40,
            width: "95%",
            marginTop: "3%",
            borderWidth: 0,
            borderRadius: 10,
            backgroundColor: "#D6E4E2",
            padding: 10,
          }}
          placeholder="New Height"
          onChangeText={(x) => heightSet(x)}
        />

        <Text style={{ marginTop: "5%", fontSize: 20, color: "#37686D" }}>
          What is your new Weight?
        </Text>
        <TextInput
          style={{
            height: 40,
            width: "95%",
            marginTop: "3%",
            borderWidth: 0,
            borderRadius: 10,
            backgroundColor: "#D6E4E2",
            padding: 10,
          }}
          placeholder="New Weight"
          onChangeText={(x) => weightSet(x)}
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
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  logOut: {
    paddingTop: "5.5%",
    paddingRight: "5%",
  },
  optionsContainer: {
    width: "90%",
    height: "95%",
    //backgroundColor: "white",
    paddingTop: "6%",
    top: "2.5%",
    borderWidth: 0,
    //borderColor: "black",
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
  pic1: {
    height: 70,
    width: 70,
  },
  pic2: {
    height: 30,
    width: 30,
  },
  pic3: {
    height: 100,
    width: 500,
  },
});
