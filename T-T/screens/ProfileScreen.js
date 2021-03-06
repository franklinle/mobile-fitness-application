import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {
  getHeight,
  getWeight,
  getName,
  getProfileGoal,
  BMI,
} from "../bB/profile";

import { fodder } from "../actions/user";

{
  /* <Image source = {require('./LandingScreen.png')} style={styles.icon} />
<Image source = {require('./PlaceholderImg.png')} style={styles.graph} /> */
}

//const imageSource = "../T-T/assets/logo.png";

//Okay for some reason imageSource cannot be found
//Issues to fix:
//Pink Excercises for the day cannot be rendered properly for some reason
//Redo the above line with a key
//Issues changing the alignment of the scrollable boxes.

/*
Implement ScrollView in a way that doesn't screw everything up but other than that I'm about done with layout
Next steps include adding in the variables to be displayed and maybe even try to get the graph thing started
*/

// const NumOfActiveRoutines = 5;
// var NumOfWeight = "";
// var NumOfHeight = "";

//const goal =
// "some stupid fake goal that is way too long in order to check out the space bs, flash news this tight af we sure?";
// const Username = "leSquirt";

const DayOfWeek = "Monday";
const DATE = 5;
const Month = "August";

const ExcerciseName1 = "Back";
const ExcerciseName2 = "Arms";
const ExcerciseName3 = "Legs";
const ExcerciseName4 = "Abs";
const ExcerciseName5 = "Chest";

const ExcercisesOfTheDay = ["Arms", "Back", "Abs"];
const ExcercisesOfTheDayTuesday = ["Back"];

const ExcerciseBarType = ["Back", "Legs", "Arms", "Abs", "Chest"];

const ArmExcercise = { color: "red" };
const BackExcercise = {
  color: "blue",
};

function displayMiniBars(string) {
  switch (string) {
    case "Arms":
      return (
        <View
          style={{
            backgroundColor: "hsla(40, 73%, 71%, 1)",
            height: 3,
            width: 30,
            borderRadius: 4,
            alignSelf: "center",
            marginBottom: 2,
          }}
        />
      );
    case "Back":
      return (
        <View
          style={{
            backgroundColor: "hsla(137, 59%, 55%, 1)",
            height: 3,
            width: 30,
            borderRadius: 4,
            alignSelf: "center",
            marginBottom: 2,
          }}
        />
      );
    case "Abs":
      return (
        <View
          style={{
            backgroundColor: "blue",
            height: 3,
            width: 30,
            borderRadius: 4,
            alignSelf: "center",
            marginBottom: 2,
          }}
        />
      );
    default:
      break;
  }
}

export default function ProfileScreen({ navigation }) {
  const [NumOfWeight, SetNumOfWeight] = useState("loading");
  const [NumOfHeight, SetNumOfHeight] = useState("loading");
  const [Username, SetUsername] = useState("loading");
  const [goal, SetGoal] = useState("loading");
  const [Bmi, SetBmi] = useState("loading");

  // won't work when we sign in -> log out -> sign into diff acc
  // restart expo -> auto log in doesn't work
  async function x() {
    await fodder();
    getHeight().then((a) => {
      SetNumOfHeight(a);
    });
    getWeight().then((a) => {
      SetNumOfWeight(a);
    });
    getName().then((a) => {
      SetUsername(a);
    });
    getProfileGoal().then((a) => {
      SetGoal(a);
    });
    var temp = BMI(NumOfHeight, NumOfWeight);
    SetBmi(temp);
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      x();
    });
    return unsubscribe;
  }, [navigation]);
  x();

  //Change flex number if there is more than 5 excercises
  function barType(number) {
    switch (number) {
      case "Back":
        return {
          flex: 0.12,
          width: "90%",
          backgroundColor: "hsla(137, 59%, 55%, 1)",
          borderRadius: 5,
        };
        break;
      case "Legs":
        return {
          flex: 0.12,
          width: "90%",
          backgroundColor: "hsla(266, 70%, 66%, 1)",
          borderRadius: 5,
        };
        break;
      case "Arms":
        return {
          flex: 0.12,
          width: "90%",
          backgroundColor: "hsla(40, 73%, 71%, 1)",
          borderRadius: 5,
        };
        break;
      case "Abs":
        return {
          flex: 0.12,
          width: "90%",
          backgroundColor: "blue",
          borderRadius: 5,
        };
        break;
      case "Chest":
        return {
          flex: 0.12,
          width: "90%",
          backgroundColor: "orange",
          borderRadius: 5,
        };
        break;
      default:
        break;
    }
  }

  function AddBar(string) {
    switch (string) {
      case "Back":
        return (
          <View style={barType("Back")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName1}
            </Text>
          </View>
        );
      case "Legs":
        return (
          <View style={barType("Legs")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName2}
            </Text>
          </View>
        );
      case "Arms":
        return (
          <View style={barType("Arms")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName3}
            </Text>
          </View>
        );
      case "Chest":
        return (
          <View style={barType("Chest")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName4}
            </Text>
          </View>
        );
      case "Abs":
        return (
          <View style={barType("Abs")}>
            <Text
              style={{
                fontSize: 17,
                paddingLeft: "8%",
                color: "white",
                paddingTop: "1%",
              }}
            >
              {ExcerciseName5}
            </Text>
          </View>
        );
    }
  }

  let nextDays = ["2021-08-01", "2021-08-09"];
  let ExcerciseHistory = [
    [BackExcercise, ArmExcercise],
    [BackExcercise, ArmExcercise],
    [ArmExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
    [BackExcercise],
  ];

  //These 3 splits the date an gets the day value.
  const Day = new Date() + "";
  const sep = Day.split(" ", 3);
  const dateMonth = "08";

  //You get dateMonth from database again prob from Date() function
  nextDays[sep[2] - 1] = `2021-${dateMonth}-${sep[2]}`;

  let mark = {};

  nextDays.forEach((day) => {
    const markersplit = day.split("-", 3);
    let markerDate = markersplit[2];
    if (markerDate[0] == 0) markerDate = markerDate[1];
    mark[day] = { dots: ExcerciseHistory[markerDate] };
  });

  return (
    <View style={styles.container}>
      {/* <View style={styles.topBanner}>
         <Image source={require(imageSource)} style={{height:"90%", width: "16%", resizeMode: "stretch"}}/> 
      </View> */}
      <View style={styles.profileHeader}>
        <LinearGradient
          colors={["rgba(223, 238, 235, .8)", "transparent"]}
          end={{ x: 1, y: 0.7 }}
          start={{ x: 0.1, y: 0.35 }}
          style={styles.background}
        />
        {/**Add a onPress to this pressable to get to Options page */}
        <Pressable
          style={{
            height: "35%",
            width: "20%",
            left: "85%",
            top: "5%",
            zIndex: 2,
            position: "absolute",
          }}
          onPress={() => navigation.navigate("ProfileSettings")}
        >
          <Image
            source={require("./LeStupidOptionsGear.png")}
            style={{ height: "50%", width: "50%", resizeMode: "cover" }}
          />
        </Pressable>
        <View style={styles.profilePicture}>
          <Image
            source={require("../assets/BlankProfileIcon.png")}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </View>
        <View style={{ textAlign: "center", marginTop: "11%" }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {Username}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            {goal}
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.profileCharts}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.excercise}>
          <View style={styles.key}>
            <Text style={{ fontSize: 15 }}>KEY</Text>

            <View
              style={{
                flex: 1,
                width: "100%",
                flexDirection: "row",
                marginTop: "10%",
              }}
            >
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  backgroundColor: "hsla(40, 73%, 71%, 1)",
                  flex: 0.25,
                }}
              />
              <Text style={{ flex: 0.75 }}> Arms</Text>
            </View>

            <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  flex: 0.25,
                  backgroundColor: "orange",
                }}
              />
              <Text style={{ flex: 0.75 }}> Chest</Text>
            </View>

            <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  flex: 0.25,
                  backgroundColor: "hsla(137, 59%, 55%, 1)",
                }}
              />
              <Text style={{ flex: 0.75 }}> Back</Text>
            </View>

            <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  flex: 0.25,
                  backgroundColor: "hsla(266, 70%, 66%, 1)",
                }}
              />
              <Text style={{ flex: 0.75 }}> Legs</Text>
            </View>

            <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 9,
                  borderColor: "black",
                  width: 18,
                  height: 18,
                  flex: 0.25,
                  backgroundColor: "blue",
                }}
              />
              <Text style={{ flex: 0.75 }}> Abs</Text>
            </View>
          </View>
          <View style={styles.excerciseOfDay}>
            <View style={styles.excerciseOfDayDATE}>
              <Text
                style={{
                  fontSize: 15,
                  color: "hsla(186, 33%, 32%, 1)",
                  marginTop: "17%",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                {DayOfWeek}
              </Text>
              <Text
                style={{
                  fontSize: 50,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "700",
                  height: "35%",
                  textAlign: "center",
                }}
              >
                {DATE + "\n"}
              </Text>
              <Text
                style={{
                  top: "3%",
                  paddingTop: "5%",
                  fontSize: 15,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                {Month}
              </Text>
            </View>
            <View style={styles.verticalLinesAreFun} />
            {/**This does not upDATE ever which makes it useless the next day just repeat what I did for the minibars */}
            <View style={styles.excerciseOfDayBars}>
              {AddBar(ExcerciseBarType[0])}
              {AddBar(ExcerciseBarType[1])}
              {AddBar(ExcerciseBarType[2])}
              {AddBar(ExcerciseBarType[3])}
              {AddBar(ExcerciseBarType[4])}
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center", backgroundColor: "white" }}>
          <ScrollView
            style={styles.dayScroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {"Monday"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {DATE}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {"Tuesday"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {DATE + 1}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 14,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {"Wednesday"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {DATE + 2}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>
            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {"Thursday"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {DATE + 3}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {"Friday"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {DATE + 4}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {"Saturday"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {DATE + 5}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>

            <View style={styles.daysOfWeek}>
              <Text
                style={{
                  paddingTop: "15%",
                  fontSize: 16,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {"Sunday"}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "hsla(186, 33%, 32%, 1)",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {DATE + 6}
              </Text>
              {displayMiniBars(ExcercisesOfTheDay[0])}
              {displayMiniBars(ExcercisesOfTheDay[1])}
              {displayMiniBars(ExcercisesOfTheDay[2])}
              {displayMiniBars(ExcercisesOfTheDay[3])}
            </View>
          </ScrollView>
        </View>

        <View style={styles.calendar}>
          <Calendar markingType={"multi-dot"} markedDates={mark} />
        </View>
      </ScrollView>

      {/**Where the Height,Weight and BMI are displayed */}
      <View style={styles.quickStats}>
        <View style={styles.quickStatsChart}>
          <View style={styles.activeRoutines}>
            <Text
              style={{
                marginTop: "3%",
                fontSize: 25,
                color: "hsla(186, 33%, 32%, 1)",
                textAlign: "center",
              }}
            >
              {Bmi}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "hsla(186, 33%, 32%, 1)",
                marginLeft: "5%",
                textAlign: "center",
              }}
            >
              BMI
            </Text>
          </View>
          <View style={styles.verticalLine2} />
          <View style={styles.weight}>
            <Text
              style={{
                marginTop: "3%",
                fontSize: 25,
                color: "hsla(186, 33%, 32%, 1)",
                textAlign: "center",
              }}
            >
              {NumOfWeight}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "hsla(186, 33%, 32%, 1)",
                textAlign: "center",
              }}
            >
              Weight
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.height}>
            <Text
              style={{
                marginTop: "3%",
                fontSize: 25,
                color: "hsla(186, 33%, 32%, 1)",
                textAlign: "center",
              }}
            >
              {NumOfHeight}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "hsla(186, 33%, 32%, 1)",
                textAlign: "center",
              }}
            >
              Height
            </Text>
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
    height: "12%",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: "28%",
  },
  quickStatsChart: {
    backgroundColor: "white",
    height: "80%",
    width: "93%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 1.5,
    borderColor: "rgb(100, 181, 190)",
  },
  activeRoutines: {
    flex: 0.3,
    top: "3%",
    width: "20%",
    height: "50%",
    textAlign: "center",
  },
  weight: {
    flex: 0.3,
    top: "3%",
    width: "20%",
    height: "50%",
    textAlign: "center",
  },
  height: {
    flex: 0.3,
    top: "3%",
    width: "20%",
    height: "50%",
    textAlign: "center",
  },
  verticalLine: {
    height: "60%",
    top: "5%",
    backgroundColor: "hsla(186, 33%, 32%, 0.3)",
    flex: 0.0056,
    width: 1,
  },
  verticalLine2: {
    height: "60%",
    top: "5%",
    backgroundColor: "hsla(186, 33%, 32%, 0.3)",
    flex: 0.006,
    width: 1,
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
    flex: 0.5,
    height: "100%",
    flexDirection: "row",
    marginTop: "16%",
  },
  key: {
    flex: 1.4,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    marginRight: 20,
    marginBottom: 10,
    height: "90%",
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: 2,
  },
  keyElement: {
    flex: 0.6,
    width: "100%",
    height: "100%",
  },
  excerciseOfDay: {
    //I probably want to change excercise of the Day into another flexbox so I can include Key if needed
    flex: 4,
    marginRight: "3%",
    height: "90%",
    width: "100%",
    borderColor: "hsla(0, 0%, 0%, 0.25)",
    //1 is the smallest border size for some reason decimals dont work
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  excerciseOfDayDATE: {
    flex: 0.45,
    width: "20%",
    textAlign: "center",
  },
  excerciseOfDayBars: {
    flex: 0.55,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  verticalLinesAreFun: {
    flex: 0.007,
    backgroundColor: "hsla(186, 33%, 32%, 1)",
    height: "80%",
    top: "8%",
    marginRight: 15,
  },
  dayScroll: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  daysOfWeek: {
    backgroundColor: "#D6E4E2",
    flex: 0.5,
    width: 80,
    height: 110,
    marginHorizontal: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: "gray",
    textAlign: "center",
  },
  calendar: {
    flex: 0.1,
    backgroundColor: "white",
    width: "100%",
    marginTop: "5%",
    borderTopWidth: 1,
    borderColor: "black",
    zIndex: 3,
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
    borderRadius: 30,
    borderColor: "black",
    width: 60,
    height: 60,
    backgroundColor: "red",
    overflow: "hidden",
    top: "20%",
  },
});
