import * as React from "react";
import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Text, View, Button, Pressable, Image, Switch } from "react-native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ExercisesScreen from "./ExercisesScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

function Toggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={{ flexWrap: "wrap" }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text> </Text>
    </View>
  );
}

function Reminders() {
  return (
    <SafeAreaView style={styles.container2}>
      <Text style={styles.title}>3:00 PM</Text>
      <Text>Reminder Message</Text>
      <Text> </Text>
      <Toggle />
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 2,
          paddingTop: 5,
          paddingBottom: 5,
        }}
      />
      <Text> </Text>
      <Text style={styles.title}>6:00 PM</Text>
      <Text>Reminder Message</Text>
      <Text> </Text>
      <Toggle />
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 2,
          paddingTop: 5,
          paddingBottom: 5,
        }}
      />
      <Text> </Text>
      <Text style={styles.title}>9:00 PM</Text>
      <Text>Reminder Message</Text>
      <Text> </Text>
      <Toggle />
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 2,
          paddingTop: 5,
          paddingBottom: 5,
        }}
      />
    </SafeAreaView>
  );
}

function Stopwatch() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Stopwatch</Text>
      <Text style={styles.title2}>00:00:00</Text>
      <Pressable style={styles.box}>
        <Text style={styles.signUp}>Start</Text>
      </Pressable>
      <Pressable style={styles.box}>
        <Text style={styles.signUp}>Stop</Text>
      </Pressable>
      <Pressable style={styles.box}>
        <Text style={styles.signUp}>Reset</Text>
      </Pressable>

      <SafeAreaView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </SafeAreaView>
  );
}

function Timer() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <Text>Hours -- Minutes -- Seconds</Text>
      <Text> </Text>
      <Text style={styles.title2}>00:00:00</Text>
      <Pressable style={styles.box}>
        <Text style={styles.signUp}>Start</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function ClockScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Stopwatch"
      tabBarPosition={"top"}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "black",
        tabStyle: { marginTop: 40 },
      }}
    >
      <Tab.Screen name="Stopwatch" component={Stopwatch} />
      <Tab.Screen name="Timer" component={Timer} />
      <Tab.Screen name="Reminders" component={Reminders} />
    </Tab.Navigator>
  );
}

//export default GoalsScreen;

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
