import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

{
  /* <Image source = {require('./LandingScreen.png')} style={styles.icon} />
<Image source = {require('./PlaceholderImg.png')} style={styles.graph} /> */
}

//const imageSource = "../assets/logo.png";

//Okay for some reason imageSource cannot be found
//Issues to fix:
//Pink Excercises for the day cannot be rendered properly for some reason
//Redo the above line with a key
//Issues changing the alignment of the scrollable boxes.

/*
Implement ScrollView in a way that doesn't screw everything up but other than that I'm about done with layout
Next steps include adding in the variables to be displayed and maybe even try to get the graph thing started
*/
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBanner}>
        {/* <Image source={require(imageSource)} style={{height:"90%", width: "16%", resizeMode: "stretch"}}/> */}
      </View>
      <View style={styles.profileHeader}>
        <LinearGradient
          colors={["rgba(223, 238, 235, .8)", "transparent"]}
          end={{ x: 1, y: 0.7 }}
          start={{ x: 0.1, y: 0.35 }}
          style={styles.background}
        />
        <View style={styles.profilePicture}>
          <Image
            source={require("./PlaceholderImg.png")}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </View>
        <View style={{ textAlign: "center", top: "20%" }}>
          <Text>Username</Text>
        </View>
      </View>

      <ScrollView style={styles.profileCharts}>
        <View style={styles.excercise}>
          <View style={styles.key}></View>
          <View style={styles.excerciseOfDay}>{/* <Text>Potato</Text> */}</View>
        </View>
        <View style={{ alignItems: "center" }}>
          <ScrollView style={styles.dayScroll} horizontal={true}>
            <View style={styles.daysOfWeek}>
              <Text>Testing POtato1</Text>
            </View>
            <View style={styles.daysOfWeek}>
              <Text>Testing POtato2</Text>
            </View>
            <View style={styles.daysOfWeek}>
              <Text>Testing POtato3</Text>
            </View>
            <View style={styles.daysOfWeek}>
              <Text>Testing POtato4</Text>
            </View>
            <View style={styles.daysOfWeek}>
              <Text>Testing POtato5</Text>
            </View>
            <View style={styles.daysOfWeek}>
              <Text>Testing POtato6</Text>
            </View>
            <View style={styles.daysOfWeek}>
              <Text>Testing POtato7</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.calendar}>
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "bottom",
              fontSize: 30,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.quickStats}>
        <View style={styles.quickStatsChart}>
          <View style={styles.activeRoutines}>
            <Text>green</Text>
          </View>
          <View style={styles.weight}>
            <Text>yellow</Text>
          </View>
          <View style={styles.height}>
            <Text>orange</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  topBanner: {
    flex: 0.1,
    backgroundColor: "white",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  profileHeader: {
    flex: 0.5,
    backgroundColor: "rgb(100, 181, 190)",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },

  quickStats: {
    width: "100%",
    height: "14%",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: "33%",
  },
  quickStatsChart: {
    backgroundColor: "red",
    height: "80%",
    width: "85%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  activeRoutines: {
    flex: 1,
    backgroundColor: "green",
    width: "20%",
  },
  weight: {
    flex: 1,
    backgroundColor: "yellow",
    width: "20%",
  },
  height: {
    flex: 1,
    backgroundColor: "orange",
    width: "20%",
  },

  profileCharts: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    overflow: "scroll",
    flexDirection: "column",
    display: "flex",
  },
  excercise: {
    flex: 0.2,
    flexDirection: "row",
    marginTop: "16%",
  },
  key: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
    marginRight: 20,
    marginBottom: 10,
    height: "90%",
    marginLeft: 5,
  },
  excerciseOfDay: {
    //I probably want to change excercise of the Day into another flexbox so I can include Key if needed
    flex: 4,
    backgroundColor: "pink",
    marginLeft: "17%",
    marginRight: "3%",
    height: "90%",
    width: "70%",
  },
  dayScroll: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
    height: "20%",
  },
  daysOfWeek: {
    backgroundColor: "gray",
    flex: 2,
    height: 100,
    marginHorizontal: 5,
  },
  calendar: {
    flex: 0.1,
    backgroundColor: "white",
    width: "100%",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 400,
    zIndex: 1,
  },
  profilePicture: {
    borderRadius: 40,
    borderColor: "black",
    width: 80,
    height: 80,
    backgroundColor: "red",
    overflow: "hidden",
    top: "10%",
  },
});
