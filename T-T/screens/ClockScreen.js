import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button } from "react-native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ExercisesScreen from "./ExercisesScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";

function Reminders() {
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

function Stopwatch() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Stopwatch</Text>
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
      <SafeAreaView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </SafeAreaView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function ClockScreen() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator initialRouteName="Reminders">
        <Tab.Screen name="Reminders" component={Reminders} />
        <Tab.Screen name="Timer" component={Timer} />
        <Tab.Screen name="Stopwatch" component={Stopwatch} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

//export default GoalsScreen;

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
