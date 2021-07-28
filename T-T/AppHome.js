import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import ClockScreen from "./screens/ClockScreen";
import WorkoutsScreen from "./screens/WorkoutsScreen";
import ExercisesScreen from "./screens/ExercisesScreen";
import HomeScreen from "./screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
export default function AppHome() {
  return (
    //<NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ExercisesScreen"
        component={ExercisesScreen}
        options={{
          tabBarLabel: "Exercises",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My Workouts"
        component={WorkoutsScreen}
        options={{
          tabBarLabel: "Workouts",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Clock"
        component={ClockScreen}
        options={{
          tabBarLabel: "Clock",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clock" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
