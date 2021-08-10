import * as React from "react";
import { Button, View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import LoginScreen from "./LoginScreen";
import Register from "./Register";
import AppHome from "./AppHome";
import ForgotPassword from "./ForgotPassword";
import { FitnessGoal } from "./QuizScreens/Question1";
import { Section1 } from "./QuizScreens/QuizSection1";
import ProfileScreen from "./screens/ProfileScreen";
import { QuizStart } from "./QuizScreens/StartQuiz";
import { LifeStyle } from "./QuizScreens/Question2";
import { StressReduction } from "./QuizScreens/StressReduQ1";
import { WeightLoss } from "./QuizScreens/WeightLossQ1";
import { MuscleGroup } from "./QuizScreens/MuscleQ1";
import { WeightLossDate } from "./QuizScreens/WeightLossQ2";
import { DaysOfWorkout } from "./QuizScreens/EndQuestion1";
import { LengthOfWorkout } from "./QuizScreens/EndQuestion2";
import { TimeFrameOfWorkOut } from "./QuizScreens/EndQuestion3";
import { ProfileSettings } from "./screens/ProfileSettings";


function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(223, 238, 235, 0.8)", "transparent"]}
        style={styles.background}
      />
      {/** Changed AppHome to Section1 */}
      <Pressable onPress={() => navigation.navigate("ProfileScreen")}>
        <Image source={require("../T-T/assets/logo.png")} style={styles.pic} />
      </Pressable>
      <Pressable
        style={styles.box}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}> Get started </Text>
      </Pressable>
      <Pressable
        style={styles.box2}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonText}> Log in </Text>
      </Pressable>
    </View>
  );
}

const Stack = createStackNavigator();

//Added FitnessGoal as a Stack.Screen
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" headerMode="none">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AppHome" component={AppHome} />
        {/**This Profile Screen is technically not supposed to be here and therefore the connection to the options page
         * should also not work the moment this is deleted.
         */}
        <Stack.Screen name= "ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name= "ProfileSettings" component={ProfileSettings} />

        {/**Here be temp code lines pls Amy, have fun -Eric, Christian*/}
        <Stack.Screen name="StartQuiz" component={QuizStart}/>
        <Stack.Screen name="Section1" component={Section1}/>
        <Stack.Screen name="Question2" component={LifeStyle}/>
        <Stack.Screen name="Question1" component={FitnessGoal}/>
        <Stack.Screen name="StressReduction" component={StressReduction}/>
        <Stack.Screen name="MuscleQ1" component={MuscleGroup}/>
        <Stack.Screen name="WeightLoss" component={WeightLoss}/>
        <Stack.Screen name="WeightLossDate" component={WeightLossDate}/>
        <Stack.Screen name="DaysOfWorkout" component={DaysOfWorkout}/>
        <Stack.Screen name="LengthOfWorkout" component={LengthOfWorkout}/>
        <Stack.Screen name="TimeFrameOfWorkout" component={TimeFrameOfWorkOut}/>



        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "turquoise",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  pic: {
    height: 250,
    width: 275,
    marginTop: "20%",
    marginBottom: "20%",
  },
  box: {
    backgroundColor: "#37686D",
    borderRadius: 10,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  box2: {
    backgroundColor: "#8FBBC0",
    borderRadius: 10,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.75,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
});
