import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, Text } from "react-native";
import ProfileScreen from "./screens/ProfileScreen";
import ClockScreen from "./screens/ClockScreen";
import WorkoutsScreen from "./screens/WorkoutsScreen";
import ExercisesScreen from "./screens/ExercisesScreen";
import HomeScreen from "./screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();

class AppHome extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="ExercisesScreen"
          component={ExercisesScreen}
          options={{
            tabBarLabel: "Exercises",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="dumbbell" color={color} size={40} />
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
                size={40}
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
              <MaterialCommunityIcons name="clock" color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={40} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AppHome);
